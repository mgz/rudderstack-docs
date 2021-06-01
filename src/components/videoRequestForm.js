import { propTypes } from "@sanity/block-content-to-react"
import React, { useState } from "react"

const VideoRequestForm = props => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    formId: props.formId,
    sectionId: props.sectionId,
  })
  const [formError, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
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
      className={`demo_form videoLibrary_form px-4 py-8 sm:pt-12 sm:px-8 sm:pb-16 flex flex-col w-full xl:w-96 md:max-w-lg`}
    >
      <div className="mb-12">
        <p className="mb-6 font-bold text-blueNew-custom text-xl-2">
          {props.formHeaderText}
        </p>
        <p className="text-lg text-grayColor-custom">{props.formShortDesc}</p>
      </div>

      <input
        type="text"
        name="firstName"
        className="font-sm text-base"
        value={formData.firstName}
        placeholder={"First Name"}
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

      <input
        type="text"
        name="lastName"
        className="font-sm text-base"
        value={formData.lastName}
        placeholder={"Last Name"}
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

      <input
        type="text"
        value={formData.company}
        name="company"
        placeholder="Company"
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

      <input
        type="email"
        name="email"
        value={formData.email}
        onBlur={e => onBlur("email", e.target.value)}
        placeholder="Your email"
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

export default VideoRequestForm
