import React, { useState } from "react"

const SubscriptionV2 = props => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(
    false
  )

  const formSubmitted = e => {
    e.preventDefault()
    // console.log('on form submit -> 1')
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
    const params = new URLSearchParams(document.location.search.substring(1));
    let urlString = window !== undefined ? window.location.href : "";
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    let queryParams = {};

    for (let pair of queryString.entries()) {
      queryParams[pair[0]] = pair[1];
    }


    window.rudderanalytics.identify(
      email,
      {
        email: email,
        form_id: props.formId,
        branch: process.env.GATSBY_BRANCH,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_content: params.get("utm_content"),
        utm_term: params.get("utm_term"),
        raid: params.get("raid"),
        test_user: params.get("test_user"),
        gclid: queryParams.gclid ? queryParams.gclid : "",
        utm_referrer: queryParams.utm_referrer ? queryParams.utm_referrer : ""
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
        branch: process.env.GATSBY_BRANCH,
        form_id: props.formId,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_content: params.get("utm_content"),
        utm_term: params.get("utm_term"),
        raid: params.get("raid"),
        test_user: params.get("test_user"),
        gclid: queryParams.gclid ? queryParams.gclid : "",
        utm_referrer: queryParams.utm_referrer ? queryParams.utm_referrer : ""
      },
      {
        traits: {
          email: email,
          form_id: props.formId,
        },
      }
    )
    setEmail("")
    setFormSubmittedSuccessfully(true)
  }

  return (
    <>
      <div className="newsletter-wrapper mt-20 mb-10 max-w-xl mx-auto triggers">
        <div className="newsletter-block bg-darkScheme-textPrimary flex justify-center items-center rounded-2xl">
          <form
            // action="/"
            // method="post"
            className="flex w-full items-center signup-form"
            noValidate="novalidate"
            id={props.formId ? props.formId : ""}
            onSubmit={e => formSubmitted(e)}
          >
            {!formSubmittedSuccessfully && (
              <>
                <input
                  className="newsletter-input-hp border-2 border-darkScheme-textPrimary rounded-2xl w-full py-2 px-4 text-darkScheme-textPrimary "
                  type="email"
                  name="email"
                  value={email}
                  size={40}
                  id="email"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="you@company.com"
                  onChange={e => {
                    setError(false)
                    setEmail(e.target.value)
                    setFormSubmittedSuccessfully(false)
                  }}
                />
                <button
                  className="sign-up-text block font-bold py-3 px-10 hover:text-darkScheme-btnSecondaryBg cursor-pointer text-center mx-auto"
                  type={"submit"}
                  onClick={e => formSubmitted(e)}
                >
                  Sign Up for Newsletter
                </button>
              </>
            )}

            {formSubmittedSuccessfully && (
              <div
                className="text-blueNew-midnight font-bold px-4 py-4 w-full text-center"
                role="alert"
                aria-hidden="true"
              >
                Thank you!
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

      
    </>
  )
}

export default SubscriptionV2
