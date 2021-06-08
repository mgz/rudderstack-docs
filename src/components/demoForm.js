import { propTypes } from "@sanity/block-content-to-react"
import React, { useState } from "react"

const DemoForm = props => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    jobTitle: "",
    formId: props.formId,
    sectionId: props.sectionId,
  })
  const [formError, setFormErrors] = useState({
    firstName: "",
    email: "",
    company: "",
    jobTitle: "",
  })

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
  return (
    <form
      id={props.formId}
      className={`demo_form px-8 py-8 sm:pt-12 sm:px-12 sm:pb-16 flex flex-col w-full xl:w-120 md:max-w-lg ${
        props.isFooterForm === true ? "top-0" : "-top-24"
      }`}
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
        placeholder={"John Doe"}
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

      {props.hideLabels !== true && (
        <div className="text-lg text-grayColor-custom mb-2">
          Company <span className="text-blueNew-midnight">*</span>
        </div>
      )}
      <input
        type="text"
        value={formData.company}
        name="company"
        placeholder="Awesome Co"
        onBlur={e => onBlur("company", e.target.value)}
        onChange={e => {
          setFormData({ ...formData, company: e.target.value })
        }}
      />

      <div className={`${formError.company !== "" ? "mb-2" : "mb-6"} `}>
        {formError.company !== "" && (
          <h6 className="text-red-error text-xs">{formError.company}</h6>
        )}
      </div>

      {props.hideLabels !== true && (
        <div className="text-lg text-grayColor-custom mb-2">
          Job Title <span className="text-blueNew-midnight">*</span>
        </div>
      )}
      <input
        type="text"
        value={formData.jobTitle}
        name="jobTitle"
        onBlur={e => onBlur("jobTitle", e.target.value)}
        placeholder="Data engineering lead"
        onChange={e => {
          setFormData({ ...formData, jobTitle: e.target.value })
        }}
      />
      <div className={`${formError.jobTitle !== "" ? "mb-2" : "mb-6"} `}>
        {formError.jobTitle !== "" && (
          <h6 className="text-red-error text-xs">{formError.jobTitle}</h6>
        )}
      </div>

      <button
        class="btn-primary-lg mt-3 md:mb-0 mb-4"
        disabled={props.isLoading}
        // type="submit"
        onClick={e => {
          e.preventDefault()
          if (validateForm(formData) === false) {
            props.onDemoFormSubmit(formData)
          }
        }}
      >
        {props.submitDemoButtonName}
      </button>
    </form>
  )
}

export default DemoForm
