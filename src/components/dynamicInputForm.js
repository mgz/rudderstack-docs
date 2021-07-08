import React, { useState, useEffect } from "react"
import { navigate, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"

const DynamicInputForm = ({
  form_id,
  on_success_navigate_url,
  ref_form_input,
  section_id,
  usebasin_endpoint,
  add_on_styling,
}) => {
  const data = useStaticQuery(graphql`
    query FormInputQuery {
      allSanityFormInput {
        nodes {
          _id
          tracking_field_name
          title
          submit_button_text
          formheader
          _rawFields
        }
      }
    }
  `)

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({})
  const [formError, setFormErrors] = useState({})
  const [formDefination, setFormDefination] = useState()

  useEffect(() => {
    let tmp = data.allSanityFormInput.nodes.find(
      oo => oo._id === ref_form_input._ref
    )
    let tmpStructure
    tmp._rawFields.map(field => {
      tmpStructure = { ...tmpStructure, [field.field_name]: "" }
    })
    setFormDefination(tmp)
    setFormData(tmpStructure)
    setFormErrors(tmpStructure)
  }, [])

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  function validateField(field, value) {
    let col_validation = formDefination._rawFields.find(
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
    setFormErrors(errObj)
    return ret
  }

  const onFormSubmit = data => {
    try {
      if (!window.rudderanalytics) {
        return
      }
      setIsLoading(true)

      var params = new URLSearchParams(document.location.search.substring(1))

      window.rudderanalytics.identify(
        data[formDefination.tracking_field_name],
        {
          ...data,
          form_id: form_id,
          conversion_page: document.title,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          utm_content: params.get("utm_content"),
          utm_term: params.get("utm_term"),
          raid: params.get("raid"),
          test_user: params.get("test_user"),
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
          form_id: form_id,
          label: form_id,
          category: section_id,
          conversion_page: document.title,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          utm_content: params.get("utm_content"),
          utm_term: params.get("utm_term"),
          raid: params.get("raid"),
          test_user: params.get("test_user"),
        },
        {
          traits: {
            ...data,
            form_id: form_id,
            conversion_page: document.title,
          },
        }
      )
      // console.log("step3")
      fetch(usebasin_endpoint, {
        method: "post",
        body: JSON.stringify({
          ...data,
          form_id: form_id,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          utm_content: params.get("utm_content"),
          utm_term: params.get("utm_term"),
          raid: params.get("raid"),
          test_user: params.get("test_user"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => {
          // console.log('usebasin',res)
          if (res.ok || res.statusText === "OK") {
            // console.log("success ", res)
            // window.ChiliPiper.scheduling(
            //   "rudderstack",
            //   "demo-or-quote-request",
            //   { formId: data.formId }
            // )
            navigate(on_success_navigate_url)
          }
        })
        .catch(err => {
          throw err
        })
    } catch (err) {
      console.log("errror exception", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      id={form_id}
      onSubmit={e => {
        e.preventDefault()
        if (validateForm(formData) === false) {
          // console.log("formData", formData)
          onFormSubmit(formData)
        }
      }}
      className={`demo_form px-4 py-8 sm:pt-12 sm:px-8 sm:pb-16 flex flex-col w-full xl:w-120 md:max-w-lg ${add_on_styling}`}
    >
      {formDefination &&
        formDefination.formheader &&
        formDefination.formheader !== "" && (
          <div className="mb-8">
            <p className="mb-6 font-bold text-blueNew-eastbay text-xl-2">
              {formDefination.formheader}
            </p>
          </div>
        )}

      {formDefination &&
        formDefination._rawFields.map(field => {
          return (
            <React.Fragment key={field._key}>
              {field.show_label === true && field.field_type !== "checkbox" && (
                <div className="text-lg text-grayColor-custom mb-2 ">
                  {field.field_label}{" "}
                  {field.is_required && (
                    <span className="text-blueNew-midnight">*</span>
                  )}
                </div>
              )}

              {field.field_type === "input" && (
                <input
                  type="text"
                  name={field.field_name}
                  className="font-sm text-base"
                  value={formData[field.field_name]}
                  placeholder={field.field_placeholder}
                  onBlur={e => onBlur(field.field_name, e.target.value)}
                  onChange={e => {
                    setFormData({
                      ...formData,
                      [field.field_name]: e.target.value,
                    })
                  }}
                />
              )}

              {field.field_type === "textarea" && (
                <textarea
                  type="text"
                  rows="4"
                  name={field.field_name}
                  className="font-sm text-base resize-none"
                  value={formData[field.field_name]}
                  placeholder={field.field_placeholder}
                  onBlur={e => onBlur(field.field_name, e.target.value)}
                  onChange={e => {
                    setFormData({
                      ...formData,
                      [field.field_name]: e.target.value,
                    })
                  }}
                />
              )}

              {field.field_type === "checkbox" && (
                <div
                  className="text-lg text-grayColor-custom mb-4 flex flex-row items-center cursor-pointer"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      [field.field_name]: !formData[field.field_name],
                    })
                  }
                >
                  <FontAwesomeIcon
                    icon={formData[field.field_name] ? faCheckSquare : faSquare}
                    style={{ fontSize: "22px" }}
                    className="h-11 far text-blueNew-eastbay rounded-lg pt-2 py-2 mr-2"
                  />
                  <p className="pb-0">{field.field_label}</p>
                </div>
              )}

              <div
                className={`${
                  formError[field.field_name] !== "" ? "mb-2" : "mb-6"
                } `}
              >
                {formError[field.field_name] !== "" && (
                  <h6 className="text-red-error text-xs">
                    {formError[field.field_name]}
                  </h6>
                )}
              </div>
            </React.Fragment>
          )
        })}
      <button
        class="btn-primary-lg mt-3 md:mb-0 mb-4"
        disabled={isLoading}
        type="submit"
      >
        {formDefination && formDefination.submit_button_text}
      </button>
    </form>
  )
}

export default DynamicInputForm
