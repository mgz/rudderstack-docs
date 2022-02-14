import React, { useEffect, useState } from "react"
import { navigate, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons/faCheckSquare"
import { faSquare } from "@fortawesome/free-regular-svg-icons/faSquare"
import Select from "react-select"
import Cookies from "universal-cookie"

const { DateTime } = require("luxon")

library.add(faCheckSquare, faSquare)

const DynamicInputForm = ({
  form_id,
  on_success_navigate_url,
  ref_form_input,
  section_id,
  usebasin_endpoint,
  add_on_styling,
  location,
  gatedCookieName,
  isFromRequest = false,
  additional_track_call,
}) => {
  const cookies = new Cookies()
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
  // console.log("location", location)
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   let tmp = data.allSanityFormInput.nodes.find(
  //     oo => ref_form_input && oo._id === ref_form_input._ref
  //   )
  //   let tmpStructure
  //   let tmpStructureError
  //   tmp._rawFields.map(field => {
  //     tmpStructure = {
  //       ...tmpStructure,
  //       [field.field_name]: field.field_type === "checkbox" ? false : "",
  //     }
  //     tmpStructureError = { ...tmpStructureError, [field.field_name]: "" }
  //   })
  //   // setFormDefinition(tmp)
  //   setFormData(tmpStructure)
  //   setFormErrors(tmpStructure)
  // }, [])

  // let tmp = data.allSanityFormInput.nodes.find(
  //   oo => ref_form_input && oo._id === ref_form_input._ref
  // )

  useEffect(() => {
    // console.log("isLoading", isLoading)
  }, [isLoading])


  let formDefinition = data.allSanityFormInput.nodes.find(
    oo => ref_form_input && oo._id === ref_form_input._ref
  );
  /* console.log('Form fields', formDefinition._rawFields); */

  let tmpStructure
  let tmpStructureError
  let scriptObject = ""

  formDefinition &&
    formDefinition._rawFields.forEach(field => {
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

  const [emailValidationRestrictedDomains] = useState([
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "apple.com",
    "protonmail.com",
    "10minutemail.com",
    "me.com",
    "icloud.com",
    "googlemail.com",
    "mail.ru",
    "live.com",
    "aol.com",
    "test.com",
  ])

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  function validateNonCompanyDomains(email) {
    let domain = email.split("@")[1]
    let errorMessage =
      emailValidationRestrictedDomains.findIndex(
        oo => oo === domain.toLowerCase()
      ) >= 0
        ? "Please provide a valid company email address"
        : ""
    if (
      location &&
      (location.pathname === "/request-demo/" ||
        location.pathname === "/request-demo" ||
        location.pathname === "/enterprise-quote/" ||
        location.pathname === "/enterprise-quote")
    ) {
      return errorMessage
    } else {
      return ""
    }
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
        ? validateNonCompanyDomains(value)
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

  const onFormSubmit = data => {
    try {
      // document
      //   .getElementsByClassName("dyno-button")[0]
      //   .setAttribute("disabled", true)

      if (!window.rudderanalytics) {
        return
      }
      if (isLoading) {
        return
      }
      setIsLoading(true)

      var params = new URLSearchParams(document.location.search.substring(1))

      window.rudderanalytics.identify(
        data[formDefinition.tracking_field_name],
        {
          ...data,
          form_id: form_id,
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
          ...data,
          page: document.title,
          page_URL: window.location.href,
          form_id: form_id,
          label: form_id,
          category: section_id,
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
        },
        {
          traits: {
            ...data,
            form_id: form_id,
            conversion_page: document.title,
          },
        }
      )

      if (additional_track_call && additional_track_call.length > 0) {
        window.rudderanalytics.track(additional_track_call, {})
      }

      // console.log("step3")
      fetch(usebasin_endpoint, {
        method: "post",
        body: JSON.stringify({
          ...data,
          form_id: form_id,
          branch: process.env.GATSBY_BRANCH,
          timezone: {
            name: DateTime.now().zone.name,
          },
          page_URL: window.location.href,
          conversion_page: document.title,
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
            // window.ChiliPiper.submit()
            if (
              location &&
              (location.pathname === "/request-demo/" ||
                location.pathname === "/request-demo" ||
                location.pathname === "/enterprise-quote/" ||
                location.pathname === "/enterprise-quote")
            ) {
              window.ChiliPiper.submit(
                "rudderstack",
                "demo-or-quote-request",
                `{
                formId: "${form_id}",
                map: true,
                lead: {
                ${formScript}
                }
              }`
              )
            } else if (
              location &&
              location.pathname.startsWith("/video-library/")
            ) {
              if (gatedCookieName && gatedCookieName.length > 0) {
                let date = new Date()
                date.setDate(date.getDate() + 15)

                cookies.set(gatedCookieName, "yes", {
                  path: location.pathname,
                  expires: date,
                })
              }
              navigate(on_success_navigate_url)
            } else if (
              (location &&
                location.pathname === "/request-demo-chili-piper-test/") ||
              (location &&
                location.pathname === "/request-demo-chili-piper-test")
            ) {
            } else {
              navigate(on_success_navigate_url)
            }
            // setIsLoading(false)
            // navigate(on_success_navigate_url)
          }
        })
        .catch(err => {
          throw err
        })
    } catch (err) {
      console.log("errror exception", err)
      // document
      //   .getElementsByClassName("dyno-button")[0]
      //   .removeAttribute("disabled")

      // setIsLoading(false)
    } finally {
    }
  }

  //console.log("hari temp", formDefinition)
  return (
    <form
      id={`${form_id}`}
      onSubmit={e => {
        e.preventDefault()
        if (validateForm(formData) === false) {
          onFormSubmit(formData)
        }
        // setIsLoading(false)
      }}
      className={`${isFromRequest ? 'request-form md:max-w-xl' : 'demo_form md:max-w-lg xl:w-120'} px-4 py-8 sm:pt-12 sm:px-8 sm:pb-16 flex flex-col w-full ${add_on_styling}`}
    >
      {formDefinition &&
        formDefinition.formheader &&
        formDefinition.formheader !== "" && (
          <div className="mb-8">
            <p className="mb-6 font-bold text-blueNew-eastbay text-xl-2">
              {formDefinition.formheader}
            </p>
          </div>
        )}

      {formDefinition &&
        formDefinition._rawFields.map(field => {
          return (
            <React.Fragment key={field._key}>
              {field.show_label === true && field.field_type !== "checkbox" && (
                <div className={`text-lg mb-2 ${isFromRequest ? 'request-label text-darkScheme-textPrimary': 'text-grayColor-custom'}`}>
                  {field.field_label}{" "}
                  {field.is_required && (
                    <span className={isFromRequest ? 'text-darkScheme-textPrimary' : `text-blueNew-midnight`}>*</span>
                  )}
                </div>
              )}

              {field.field_type === "input" && (
                <input
                  type="text"
                  name={field.field_name}
                  className={`${!isFromRequest ? 'font-sm text-base' : 'request-input'}`}
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

              {(field.field_type === "dropdown" ||
                field.field_type === "multidropdown") && (
                <Select
                  isMulti={field.field_type === "multidropdown"}
                  name="colors"
                  options={field.field_dropdown_values.map(ii => ({
                    value: ii,
                    label: ii,
                  }))}
                  placeholder={field.field_placeholder}
                  onChange={e => {
                    let tmp = ""
                    if (Array.isArray(e)) {
                      e.forEach(rrrr => {
                        tmp += (tmp === "" ? "" : ", ") + rrrr.value
                      })
                    } else {
                      tmp = e.value
                    }
                    setFormData({
                      ...formData,
                      [field.field_name]: tmp,
                    })
                  }}
                  className={`custom-select-style ${isFromRequest ? 'request-select': ''}`}
                  classNamePrefix="custom-select-style-inner"
                />
              )}

              {field.field_type === "checkbox" && (
                <div
                  aria-hidden="true"
                  className="text-lg text-grayColor-custom mb-0 flex flex-row items-center cursor-pointer"
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

        {/* {isFromRequest && formDefinition && (
          <React.Fragment>
            <div className="flex justify-between mb-5">
                  {formDefinition && formDefinition._rawFields.slice(0,2).map((field, idx) => {
                    return (
                    <div className="form-block w-1/2">
                      <div className={`w-11/12 ${idx === 1 ? 'ml-auto': ''}`}>
                      {field.show_label === true && field.field_type !== "checkbox" && (
                      <div className="text-lg mb-2 request-label">
                        {field.field_label}{" "}
                        {field.is_required && (
                          <span className="text-darkScheme-textPrimary">*</span>
                        )}
                      </div>
                    )}

                    {field.field_type === "input" && (
                      <input
                        type="text"
                        name={field.field_name}
                        className="font-sm text-lg request-input w-full"
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
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between mb-5">
              <div className="form-block w-1/2">
              {formDefinition && formDefinition._rawFields.slice(2,formDefinition._rawFields.length - 1).map((field, idx) => {
                return(
                  <React.Fragment>
                    <div className={`w-11/12`}>
                      {field.show_label === true && field.field_type !== "checkbox" && (
                      <div className={`text-lg mb-2 ${idx === 0 ? 'mt-0' : 'mt-5'} request-label`}>
                        {field.field_label}{" "}
                        {field.is_required && (
                          <span className="text-darkScheme-textPrimary">*</span>
                        )}
                      </div>
                    )}

                    {field.field_type === "input" && (
                      <input
                        type="text"
                        name={field.field_name}
                        className="font-sm text-lg request-input w-full"
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

                    {(field.field_type === "dropdown" ||
                      field.field_type === "multidropdown") && (
                      <Select
                        isMulti={field.field_type === "multidropdown"}
                        name="colors"
                        options={field.field_dropdown_values.map(ii => ({
                          value: ii,
                          label: ii,
                        }))}
                        placeholder={field.field_placeholder}
                        onChange={e => {
                          let tmp = ""
                          if (Array.isArray(e)) {
                            e.forEach(rrrr => {
                              tmp += (tmp === "" ? "" : ", ") + rrrr.value
                            })
                          } else {
                            tmp = e.value
                          }
                          setFormData({
                            ...formData,
                            [field.field_name]: tmp,
                          })
                        }}
                        className="custom-select-style w-full"
                        classNamePrefix="custom-select-style-inner"
                      />

                    )}
                    </div>
                  </React.Fragment>
                )
              })}
              </div>
              <div className="form-block w-1/2">
                {formDefinition && formDefinition._rawFields.slice(formDefinition._rawFields.length-1, formDefinition._rawFields.length).map((field, idx) => {
                  return (
                    <React.Fragment>
                      <div className={`w-11/12 ml-auto h-full`}>
                      {field.show_label === true && field.field_type !== "checkbox" && (
                          <div className="text-lg mb-2 request-label">
                            {field.field_label}{" "}
                            {field.is_required && (
                              <span className="text-darkScheme-textPrimary">*</span>
                            )}
                          </div>
                      )}
                      {field.field_type === "textarea" && (
                        <textarea
                          type="text"
                          rows="4"
                          name={field.field_name}
                          className="font-sm text-lg resize-none request-textarea w-full"
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
                      </div>
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </React.Fragment>
        )} */}
      <button
        className={`dyno-button btn-primary-lg mt-3 md:mb-0 mb-4 text-darkScheme-textPrimary bg-darkScheme-btnPrimaryBg border-none ${
          isLoading ? "disableActive" : ""
        } ${isFromRequest ? 'request-btn': ''}`}
        disabled={isLoading}
        // onClick={() => {
        //   console.log("from button call")
        //   setIsLoading(true)
        // }}
        type={"submit"}
      >
        {formDefinition && formDefinition.submit_button_text}
      </button>
      <Helmet>
        <script
          src="https://js.na.chilipiper.com/marketing.js"
          type="text/javascript"
          async
        />
      </Helmet>
    </form>
  )
}

export default DynamicInputForm
