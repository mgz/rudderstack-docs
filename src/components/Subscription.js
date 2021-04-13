import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image"

const Subscription = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);

  const formSubmitted = (e) => {
    e.preventDefault();

    setFormSubmittedSuccessfully(false);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setError(true);
      return;
    }

    setError(false);

    if (!window.rudderanalytics) {
      return;
    }

    const params = new URLSearchParams(document.location.search.substring(1));

    window.rudderanalytics.identify('', {
        email: email,
        form_id: "",
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        utm_term: params.get('utm_term'),
        raid: params.get('raid'),
        test_user: params.get('test_user')
      },
      {
        'integrations': {
          'Salesforce': true
        }
      });

    window.rudderanalytics.track('form_submit', {
        page: document.title,
        page_URL: window.location.href,
        form_id: "Blog-header-Subscribe-form",
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        utm_term: params.get('utm_term'),
        raid: params.get('raid'),
        test_user: params.get('test_user')
      },
      {
        traits: {
          email: email,
          form_id: "",
        }
      });

    setFormSubmittedSuccessfully(true);
  }

  return (
    <div className="container my-8 py-12 px-3 flex items-center mx-auto pb-10 mb-10 sm:flex-row flex-col">
      <div className="inline-flex items-center justify-center flex-shrink-0 text-5xl p-12">
        <StaticImage src="../images/subscription_icon.png" alt="Subscription" className="w-8 mr-7"/> Subscribe
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 p-12">
        <div className="mb-2">
          <p className="text-lg text-black-lighter">We'll send you updates from the blog and monthly release notes.</p>
          <form
            action="/"
            method="post"
            className=""
            noValidate="novalidate"
            id=""
            >
            <p className="">
              <span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  size={40}
                  className="mt-6 rounded border border-grayColor-lighter p-2"
                  id="email"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="you@company.com"
                  onChange={(e) => {
                    setError(false);
                    setEmail(e.target.value);
                    setFormSubmittedSuccessfully(false);
                  }}
                  />
              </span>
              {error &&
              <div className="text-red-custom text-sm mt-1" role="alert" aria-hidden="true">The email address entered is invalid.</div>
              }
            </p>
            <p className="">
              <input
                type="submit"
                defaultValue="Subscribe"
                className="mt-4 rounded text-whiteColor-custom bg-black-custom text-sm py-2 px-8"
                onClick={e => formSubmitted(e)}
                />
              <span className="ajax-loader"/>
            </p>
            {formSubmittedSuccessfully &&
            <div className="" role="alert" aria-hidden="true">Thank you for subscribing to our blog.</div>
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscription