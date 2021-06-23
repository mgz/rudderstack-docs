import React, { useState } from "react"

const IntegrationsHelpBox = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(
    false
  )

  const formSubmitted = e => {
    e.preventDefault()

    setFormSubmittedSuccessfully(false)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
      setError(true)
      return
    }
    setError(false)

    if (!window.rudderanalytics) {
      return
    }
    const params = new URLSearchParams(document.location.search.substring(1))

    window.rudderanalytics.identify(
      "",
      {
        email: email,
        form_id: "Integrations-sidebar-ReachOut-form",
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
      "Integrations-sidebar-ReachOut-form",
      {
        page: document.title,
        page_URL: window.location.href,
        form_id: "Integrations-sidebar-ReachOut-form",
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
          email: email,
          form_id: "Integrations-sidebar-ReachOut-form",
        },
      }
    )
    setEmail("")
    setFormSubmittedSuccessfully(true)
  }

  return (
    <div className="bg-white filter-menu rounded-2xl py-8 px-6">
      <h2 className="text-lg md:text-xl text-blueNew-eastbay font-bold leading-7">
        Don’t see what you need?
      </h2>
      <p className="text-sm md:text-xl leading-6 mt-2 text-secondary text-grayColor-custom">
        Reach out! Our integrations team will follow up and get your feedback on
        our roadmap.
      </p>
      <form>
        <p>
          <input
            type="email"
            name="email"
            size={40}
            className="mt-4 mb-2 w-full rounded-lg border border-grayColor-lighter p-2"
            id="email"
            aria-required="true"
            aria-invalid="false"
            // placeholder="you@company.com"
            value={email}
            onChange={e => {
              setError(false)
              setEmail(e.target.value)
              setFormSubmittedSuccessfully(false)
            }}
          />
          {error && (
            <div
              className="text-red-error text-sm mt-1"
              role="alert"
              aria-hidden="true"
            >
              The email address entered is invalid.
            </div>
          )}
        </p>
        <p>
          <input
            type="submit"
            defaultValue="Submit"
            className="w-full text-sm leading-4 btn-primary-lg cursor-pointer"
            onClick={e => formSubmitted(e)}
          />
          <span className="ajax-loader" />
        </p>

        {formSubmittedSuccessfully && (
          <div className="text-blueNew-midnight" role="alert" aria-hidden="true">
            Thank you for contacting us.
          </div>
        )}
      </form>
    </div>
  )
}
export default IntegrationsHelpBox
