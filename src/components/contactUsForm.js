import React, { useState } from "react"
import { navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"

const ContactUsForm = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isUsingSegment: false,
    message: "",
    formId: props.formId,
    sectionId: props.sectionId,
  })
  const [formError, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  function validateForm(data) {
    // console.log(data)
    let ret = false
    let errObj = formError
    Object.keys(data).forEach(function (key) {
      if (key !== "isUsingSegment" && key !== "message") {
        let validateMsg = validateField(key, data[key])
        //   console.log("sss", key, validateMsg)
        errObj = { ...errObj, [key]: validateMsg }
        if (validateMsg !== "") {
          ret = true
        }
      }
    })
    // console.log(errObj, ret)
    setFormErrors(errObj)
    return ret
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  function validateField(field, value) {
    if (field === "email") {
      return value.length > 0
        ? validateEmail(value)
          ? ""
          : "Email is invalid."
        : "This field is required."
    } else {
      return value.length > 0 ? "" : "This field is required."
    }
  }

  const onBlur = (field, value) => {
    setFormErrors({
      ...formError,
      [field]: validateField(field, value),
    })
  }

  const onContactFormSubmit = data => {
    // console.log("onContactFormSubmit", data)
    try {
      if (!window.rudderanalytics) {
        return
      }
      setIsLoading(true)

      var params = new URLSearchParams(document.location.search.substring(1))

      window.rudderanalytics.identify(
        data.email,
        {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          isUsingSegment: data.isUsingSegment,
          message: data.message,
          form_id: data.formId,
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
      // console.log("step2")

      window.rudderanalytics.track(
        "form_submit",
        {
          page: document.title,
          page_URL: window.location.href,
          form_id: data.formId,
          label: data.formId,
          category: data.sectionId,
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
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            isUsingSegment: data.isUsingSegment,
            message: data.message,
            form_id: data.formId,
            conversion_page: document.title,
          },
        }
      )
      // console.log("step3")
      fetch("https://usebasin.com/f/73ab69b8652a.json", {
        method: "post",
        body: JSON.stringify({
          "First-Name": data.firstName,
          "Last-Name": data.lastName,
          Email: data.email,
          isUsingSegment: data.isUsingSegment,
          Message: data.message,

          form_id: data.formId,
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
          if (res.ok || res.statusText === "OK") {
            navigate("/request-demo/thank-you")
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
      id={props.formId}
      className={`demo_form px-8 py-8 sm:pt-12 sm:px-12 sm:pb-16 flex flex-col w-full xl:w-120 md:max-w-lg top-0 mx-auto`}
    >
      {props.hideLabels !== true && (
        <div className="text-lg text-grayColor-custom mb-2 ">
          First Name <span className="text-blueNew-midnight">*</span>
        </div>
      )}

      <input
        type="text"
        name="firstName"
        className="font-sm text-base"
        value={formData.firstName}
        placeholder={"John"}
        onBlur={e => onBlur("firstName", e.target.value)}
        onChange={e => {
          setFormData({ ...formData, firstName: e.target.value })
        }}
      />

      <div className={`${formError.firstName !== "" ? "mb-2" : "mb-6"} `}>
        {formError.firstName !== "" && (
          <h6 className="text-red-error text-xs">{formError.firstName}</h6>
        )}
      </div>

      {props.hideLabels !== true && (
        <div className="text-lg text-grayColor-custom mb-2 ">
          Last Name <span className="text-blueNew-midnight">*</span>
        </div>
      )}

      <input
        type="text"
        name="lastName"
        className="font-sm text-base"
        value={formData.lastName}
        placeholder={"John"}
        onBlur={e => onBlur("lastName", e.target.value)}
        onChange={e => {
          setFormData({ ...formData, lastName: e.target.value })
        }}
      />

      <div className={`${formError.lastName !== "" ? "mb-2" : "mb-6"} `}>
        {formError.lastName !== "" && (
          <h6 className="text-red-error text-xs">{formError.lastName}</h6>
        )}
      </div>

      {props.hideLabels !== true && (
        <div className="text-lg text-grayColor-custom mb-2">
          Work email address <span className="text-blueNew-midnight">*</span>
        </div>
      )}
      <input
        type="email"
        name="email"
        value={formData.email}
        onBlur={e => onBlur("email", e.target.value)}
        placeholder="you@company.com"
        title="Invalid email address"
        onChange={e => {
          setFormData({ ...formData, email: e.target.value })
        }}
      />

      <div className={`${formError.email !== "" ? "mb-2" : "mb-6"} `}>
        {formError.email !== "" && (
          <h6 className="text-red-error text-xs">{formError.email}</h6>
        )}
      </div>

      <div
        className="text-lg text-grayColor-custom mb-4 flex flex-row items-center cursor-pointer"
        onClick={() =>
          setFormData({ ...formData, isUsingSegment: !formData.isUsingSegment })
        }
      >
        <FontAwesomeIcon
          icon={formData.isUsingSegment ? faCheckSquare : faSquare}
          style={{ fontSize: "22px" }}
          className="h-11 far text-blueNew-eastbay rounded-lg pt-2 py-2 mr-2"
        />
        <p className="pb-0">I’m currently using Segment</p>
      </div>

      {props.hideLabels !== true && (
        <div className="text-lg text-grayColor-custom mb-2">Message</div>
      )}
      <textarea
        type="text"
        rows="4"
        value={formData.message}
        name="message"
        placeholder="Write your message here"
        onChange={e => {
          setFormData({ ...formData, message: e.target.value })
        }}
      />

      <button
        class="btn-primary-lg mt-8 md:mb-0 mb-4"
        disabled={isLoading}
        // type="submit"
        onClick={e => {
          e.preventDefault()
          if (validateForm(formData) === false) {
            onContactFormSubmit(formData)
          }
        }}
      >
        Submit
      </button>
    </form>
  )
}

export default ContactUsForm
