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
  console.log(
    "props",
    form_id,
    on_success_navigate_url,
    ref_form_input,
    section_id,
    usebasin_endpoint,
    data
  )
  return (
    <form
      id={form_id}
      className={`demo_form videoLibrary_form px-4 py-8 sm:pt-12 sm:px-8 sm:pb-16 flex flex-col w-full xl:w-96 md:max-w-lg m-auto`}
    >
      hari test
    </form>
  )
}

export default DynamicInputForm
