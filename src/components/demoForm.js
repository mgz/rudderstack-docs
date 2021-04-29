import { propTypes } from "@sanity/block-content-to-react"
import React, { useState } from "react"

const DemoForm = props => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    jobTitle: "",
  })

  return (
    <div
      className={`demo_form px-8 py-8 sm:pt-12 sm:px-12 sm:pb-16 flex flex-col w-auto xl:w-120 max-w-lg ${
        props.isFooterForm === true ? "top-0" : "-top-24"
      }`}
    >
      <div className="text-lg text-grayColor-custom mb-2 ">
        First Name <span className="text-blueNew-custom">*</span>
      </div>
      <input
        type="text"
        className="font-sm text-base"
        value={formData.firstName}
        placeholder="John Doe"
        onChange={e => {
          setFormData({ ...formData, firstName: e.target.value })
        }}
      />
      <div className="text-lg text-grayColor-custom mb-2">
        Work email address <span className="text-blueNew-custom">*</span>
      </div>
      <input
        type="email"
        value={formData.email}
        placeholder="you@company.com"
        title="Invalid email address"
        onChange={e => {
          setFormData({ ...formData, email: e.target.value })
        }}
      />

      <div className="text-lg text-grayColor-custom mb-2">
        Company <span className="text-blueNew-custom">*</span>
      </div>
      <input
        type="text"
        value={formData.company}
        placeholder="Awesome Co"
        onChange={e => {
          setFormData({ ...formData, company: e.target.value })
        }}
      />

      <div className="text-lg text-grayColor-custom mb-2">
        Job Title <span className="text-blueNew-custom">*</span>
      </div>
      <input
        type="text"
        value={formData.jobTitle}
        placeholder="Data engineering lead"
        onChange={e => {
          setFormData({ ...formData, jobTitle: e.target.value })
        }}
      />

      <button
        class="btn-primary-lg mt-3 md:mb-0 mb-4"
        // href="#"
        onClick={e => {
          e.preventDefault()
          props.onDemoFormSubmit(formData)
        }}
      >
        {props.submitDemoButtonName}
      </button>
    </div>
  )
}

export default DemoForm
