import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

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
    const params = new URLSearchParams(document.location.search.substring(1))

    window.rudderanalytics.identify(
      email,
      {
        email: email,
        form_id: props.formId,
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
      props.formId,
      {
        page: document.title,
        page_URL: window.location.href,
        form_id: "Blog-header-Subscribe-form",
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
          form_id: props.formId,
        },
      }
    )
    setEmail("")
    setFormSubmittedSuccessfully(true)
  }

  return (
    <>
      <div className="newsletter-wrapper mt-12 mb-10 max-w-xl mx-auto">
        <div className="newsletter-block bg-darkScheme-textPrimary flex justify-center items-center rounded-2xl">
          <form
            action="/"
            method="post"
            className="flex w-full items-center signup-form"
            noValidate="novalidate"
            id={props.formId ? props.formId : ""}
          >
            {!formSubmittedSuccessfully && (
              <>
                <input
                  className="newsletter-input border-2 border-darkScheme-textPrimary rounded-2xl w-full p-2 text-darkScheme-textPrimary "
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
                <span
                  className="sign-up-text block font-bold py-3 px-10 hover:text-darkScheme-btnSecondaryBg cursor-pointer text-center"
                  onClick={e => formSubmitted(e)}
                >
                  Sign Up for Newsletter
                </span>
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

      {/* <div className="container my-4 py-16 px-3 flex items-center pb-10 mb-6 md:flex-row flex-col w-full md:w-3/5">
        <div className="inline-flex items-center justify-center flex-shrink-0 text-3xl-4 md:text-5xl font-bold py-0 pl-0 pr-0 md:pr-12  self-start">
          <StaticImage
            src="../images/subcription-new.png"
            alt="Subscription"
            placeholder="tracedSVG"
            className="w-8 mr-7"
          />{" "}
          Subscribe
        </div>
        <div className="flex-grow text-left mt-0 sm:mt-0 pt-4 px-0 md:pl-12 ">
          <div className="mb-2">
            <p className="text-sm md:text-lg text-grayColor-custom">
              We'll send you updates from the blog and monthly release notes.
            </p>
            <form
              action="/"
              method="post"
              className=""
              noValidate="novalidate"
              id={props.formId ? props.formId : ""}
            >
              <p className="">
                <span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    size={40}
                    className="mt-6 w-full md:w-auto  rounded border border-grayColor-lighter p-2"
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
                </span>
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
              <p className="">
                <input
                  type="submit"
                  defaultValue="Subscribe"
                  className="mt-4 rounded-lg text-whiteColor-custom bg-dark text-sm py-2 px-8 w-full md:w-auto hover:bg-blueNew-midnight cursor-pointer"
                  onClick={e => formSubmitted(e)}
                />
                <span className="ajax-loader" />
              </p>
              {formSubmittedSuccessfully && (
                <div
                  className="text-blueNew-midnight"
                  role="alert"
                  aria-hidden="true"
                >
                  Thank you for subscribing to our blog.
                </div>
              )}
            </form>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default SubscriptionV2
