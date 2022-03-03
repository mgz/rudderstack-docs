import React, { useEffect, useState } from "react"
import { navigate, useStaticQuery, graphql } from "gatsby"

const { DateTime } = require("luxon")

const DynamicInputFormSingleRow = props => {
  const data = useStaticQuery(graphql`
    query FormInputQuerySingleRow {
      allSanityFormInput {
        nodes {
          _id
          tracking_field_name
          title
          submit_button_text
          _rawFields
        }
      }
    }
  `)

  let formDefinition = data.allSanityFormInput.nodes.find(
    oo => props.ref_form_input && oo._id === props.ref_form_input._ref
  )

  let tmpStructure
  let tmpStructureError
  let scriptObject = ""

  formDefinition &&
    formDefinition._rawFields
      .filter((sss, idx) => idx === 0)
      .forEach(field => {
        scriptObject +=
          (scriptObject.length === 0 ? "" : ", ") +
          `${[field.field_name]}: document.getElementById("${[
            field.field_name,
          ]}")[0].value`

        tmpStructure = {
          ...tmpStructure,
          [field.field_name]: field.field_type === "checkbox" ? false : "",
        }
        tmpStructureError = { ...tmpStructureError, [field.field_name]: "" }
      })

  const [formData, setFormData] = useState(tmpStructure)
  const [formError, setFormErrors] = useState(tmpStructure)
  const [formScript] = useState(scriptObject)

  const [error, setError] = useState(false)
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(
    false
  )

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  function validateField(field, value) {
    let col_validation = formDefinition._rawFields.find(
      ll => ll.field_name === field
    )
    // console.log("ssss", col_validation, field, value)

    if (col_validation.additional_validation === "email") {
      return col_validation.is_required && value.length === 0
        ? "This field is required."
        : value.length > 0 && validateEmail(value)
        ? ""
        : "Email is invalid"
    }
    if (col_validation.is_required) {
      return value.length > 0 ? "" : "This field is required."
    } else {
      return ""
    }
  }

  const onBlur = (field, value) => {
    setFormErrors({
      ...formError,
      [field]: validateField(field, value),
    })
  }
  function validateForm(data) {
    let ret = false
    let errObj = formError
    Object.keys(data).forEach(function (key) {
      let validateMsg = validateField(key, data[key])
      errObj = { ...errObj, [key]: validateMsg }
      if (validateMsg !== "") {
        ret = true
      }
    })
    // console.log("validate form", errObj, formData)
    setFormErrors(errObj)
    // setIsLoading(false)
    return ret
  }

  const formSubmitted = e => {
    e.preventDefault()
    setFormSubmittedSuccessfully(false)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(formData.email).toLowerCase())) {
      setError(true)
      return
    }

    setError(false)

    if (!window.rudderanalytics) {
      return
    }
    const params = new URLSearchParams(document.location.search.substring(1))
    let urlString = window !== undefined ? window.location.href : ""
    let paramString = urlString.split("?")[1]
    let queryString = new URLSearchParams(paramString)
    let queryParams = {}

    for (let pair of queryString.entries()) {
      queryParams[pair[0]] = pair[1]
    }

    window.rudderanalytics.identify(
      formData.email,
      {
        email: formData.email,
        form_id: props.form_id,
        conversion_page: document.title,
        branch: process.env.GATSBY_BRANCH,
        timezone: {
          name: DateTime.now().zone.name,
        },
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_content: params.get("utm_content"),
        utm_term: params.get("utm_term"),
        raid: params.get("raid"),
        test_user: params.get("test_user"),
        gclid: queryParams.gclid ? queryParams.gclid : "",
        utm_referrer: queryParams.utm_referrer ? queryParams.utm_referrer : "",
      },
      {
        integrations: {
          Salesforce: true,
        },
      }
    )
    window.rudderanalytics.track(
      "form_submit",
      {
        page: document.title,
        page_URL: window.location.href,
        conversion_page: document.title,
        branch: process.env.GATSBY_BRANCH,
        timezone: {
          name: DateTime.now().zone.name,
        },
        form_id: props.form_id,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_content: params.get("utm_content"),
        utm_term: params.get("utm_term"),
        raid: params.get("raid"),
        test_user: params.get("test_user"),
        gclid: queryParams.gclid ? queryParams.gclid : "",
        utm_referrer: queryParams.utm_referrer ? queryParams.utm_referrer : "",
      },
      {
        traits: {
          email: formData.email,
          form_id: props.form_id,
        },
      }
    )

    props.additional_track_calls &&
      props.additional_track_calls.length > 0 &&
      props.additional_track_calls.map(rrr =>
        window.rudderanalytics.track(rrr, {})
      )

    setFormSubmittedSuccessfully(true)
  }

  // console.log("hari temp", props, formDefinition)
  let l_container_class = ""
  let l_body_class = ""
  if (props.formTheme === "dark") {
    l_container_class = "landing-newsletter-wrapper"
    l_body_class =
      "landing-newsletter-block bg-darkScheme-textPrimary flex justify-center items-center rounded-2xl"
  } else if (props.formTheme === "light-hp") {
    l_container_class =
      "newsletter-wrapper mt-20 mb-10 max-w-xl mx-auto triggers"
    l_body_class =
      "newsletter-block bg-darkScheme-textPrimary flex justify-center items-center rounded-2xl"
  }

  return (
    <div className={l_container_class}>
      <div className={l_body_class}>
        <form
          className="flex w-full items-center signup-form"
          noValidate="novalidate"
          id={props.formId ? props.formId : ""}
          onSubmit={e => formSubmitted(e)}
        >
          {!formSubmittedSuccessfully &&
            formDefinition &&
            formDefinition._rawFields.length > 0 && (
              <>
                <input
                  className={`${
                    props.formTheme === "light-hp"
                      ? "newsletter-input-hp"
                      : "landing-newsletter-input"
                  } border border-darkScheme-textPrimary rounded-2xl w-full py-2 px-4 text-darkScheme-textPrimary`}
                  type={formDefinition._rawFields[0].additional_validation}
                  name={formDefinition._rawFields[0].field_name}
                  value={formData[formDefinition._rawFields[0].field_name]}
                  size={40}
                  id={formDefinition._rawFields[0].field_name}
                  aria-required="true"
                  aria-invalid="false"
                  placeholder={formDefinition._rawFields[0].field_placeholder}
                  onBlur={e =>
                    onBlur(
                      formDefinition._rawFields[0].field_name,
                      e.target.value
                    )
                  }
                  onChange={e => {
                    setFormData({
                      ...formData,
                      [formDefinition._rawFields[0].field_name]: e.target.value,
                    })
                    setError(false)
                    setFormSubmittedSuccessfully(false)
                  }}
                />
                <button
                  className={`${props.formTheme === "light-hp"
                  ? "sign-up-text"
                  : "landing-sign-up-text"} block font-bold  hover:text-darkScheme-btnSecondaryBg cursor-pointer text-center`}
                  type={"submit"}
                  onClick={e => formSubmitted(e)}
                >
                  {formDefinition.submit_button_text}
                </button>
              </>
            )}

          {formSubmittedSuccessfully && (
            <div
              className="text-blueNew-midnight font-bold px-4 py-4 w-full text-center"
              role="alert"
              aria-hidden="true"
            >
              {props.on_success_message}
            </div>
          )}
        </form>
      </div>
      {error && (
        <div
          className="text-red-error text-sm mt-1 w-full px-4"
          role="alert"
          aria-hidden="true"
        >
          The email address entered is invalid.
        </div>
      )}
    </div>
  )
}

export default DynamicInputFormSingleRow
