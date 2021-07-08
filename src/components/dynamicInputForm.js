import React, { useState } from "react"
import { navigate, useStaticQuery, graphql } from "gatsby"

const DynamicInputForm = ({
  form_id,
  on_success_navigate_url,
  ref_form_input,
  section_id,
  usebasin_endpoint,
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

  const formDefination = data.allSanityFormInput.nodes.find(
    oo => oo._id === ref_form_input._ref
  )

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
      id={form_id}
      onSubmit={e => {
        e.preventDefault()
        console.log("formData", formData)
        // if (validateForm(formData) === false) {
        //   onFormSubmit(formData)
        // }
      }}
      className={`demo_form videoLibrary_form px-4 py-8 sm:pt-12 sm:px-8 sm:pb-16 flex flex-col w-full xl:w-96 md:max-w-lg m-auto`}
    >
      {formDefination._rawFields.map(field => {
        return (
          <React.Fragment key={field._key}>
            {field.show_label === true && (
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
        {formDefination.submit_button_text}
      </button>
    </form>
  )
}

export default DynamicInputForm
