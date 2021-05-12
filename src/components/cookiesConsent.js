import React, { useEffect, useState } from "react"
import Cookies from "universal-cookie"

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(false)
  const [showCookieSetting, setShowCookieSeting] = useState(false)
  const [toggleShowMore, setToggleShowMore] = useState(false)
  const [toggleNessesory, setToggleNessesory] = useState(false)
  const cookies = new Cookies()

  const current = new Date()
  const nextYear = new Date()
  nextYear.setFullYear(current.getFullYear() + 1)

  useEffect(() => {
    const lv_ShownCookiePolicy = cookies.get("viewed_cookie_policy")
    if (lv_ShownCookiePolicy !== "yes") {
      setTimeout(async () => {
        setShowConsent(true)
      }, 3000)
    } else {
      setShowConsent(false)
    }
  }, [])

  return (
    <>
      <div
        className={`cli-modal ${
          showCookieSetting ? "cli-show cli-blowup" : ""
        } bg-black-custom bg-opacity-25`}
        // tabindex="-1"
        role="dialog"
        aria-labelledby="cliSettingsPopup"
        aria-hidden="true"
        // style="opacity: 1;"
      >
        <div className="cli-modal-dialog" role="document">
          <div className="p-6 cli-modal-content cli-bar-popup">
            <button
              type="button"
              className="cli-modal-close"
              onClick={() => {
                setShowCookieSeting(false)
              }}
            >
              <svg className="" viewBox="0 0 24 24">
                <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path>
                <path d="M0 0h24v24h-24z" fill="none"></path>
              </svg>
            </button>
            <div className="cli-modal-body">
              <div className="cli-container-fluid cli-tab-container">
                <div className="cli-row">
                  <div className="cli-col-12 cli-align-items-stretch cli-px-0">
                    <div
                      className={`cli-privacy-overview ${
                        toggleShowMore ? "" : "cli-collapsed"
                      } `}
                    >
                      <h4>Privacy Overview</h4>
                      <div className="cli-privacy-content">
                        <div className="cli-privacy-content-text">
                          This website uses cookies to improve your experience
                          while you navigate through the website. Out of these
                          cookies, the cookies that are categorized as necessary
                          are stored on your browser as they are as essential
                          for the working of basic functionalities of the
                          website. We also use third-party cookies that help us
                          analyze and understand how you use this website. These
                          cookies will be stored in your browser only with your
                          consent. You also have the option to opt-out of these
                          cookies. But opting out of some of these cookies may
                          have an effect on your browsing experience.
                        </div>
                      </div>
                      <a
                        className="cli-privacy-readmore"
                        data-readmore-text="Show more"
                        data-readless-text="Show less"
                        onClick={() => {
                          setToggleShowMore(!toggleShowMore)
                        }}
                      ></a>
                    </div>
                  </div>
                  <div className="cli-col-12 cli-align-items-stretch cli-px-0 cli-tab-section-container">
                    <div className="cli-tab-section cli-privacy-tab">
                      <div className="cli-tab-header">
                        <a className="cli-nav-link cli-settings-mobile">
                          Privacy Overview
                        </a>
                      </div>
                      <div className="cli-tab-content">
                        <div className="cli-tab-pane cli-fade">
                          <p>
                            This website uses cookies to improve your experience
                            while you navigate through the website. Out of these
                            cookies, the cookies that are categorized as
                            necessary are stored on your browser as they are as
                            essential for the working of basic functionalities
                            of the website. We also use third-party cookies that
                            help us analyze and understand how you use this
                            website. These cookies will be stored in your
                            browser only with your consent. You also have the
                            option to opt-out of these cookies. But opting out
                            of some of these cookies may have an effect on your
                            browsing experience.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="cli-tab-section">
                      <div
                        className={`cli-tab-header ${
                          toggleNessesory ? "cli-tab-active" : ""
                        }`}
                      >
                        <a
                          className="cli-nav-link cli-settings-mobile"
                          data-target="necessary"
                          data-toggle="cli-toggle-tab"
                          onClick={() => {
                            setToggleNessesory(!toggleNessesory)
                          }}
                        >
                          Necessary
                        </a>
                        <span className="cli-necessary-caption">
                          Always Enabled
                        </span>
                      </div>
                      <div
                        className={`cli-tab-content ${
                          toggleNessesory ? "block" : "none"
                        }`}
                      >
                        <div
                          className="cli-tab-pane cli-fade"
                          data-id="necessary"
                        >
                          <p>
                            Necessary cookies are absolutely essential for the
                            website to function properly. This category only
                            includes cookies that ensures basic functionalities
                            and security features of the website. These cookies
                            do not store any personal information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          !showConsent ? "hidden" : ""
        } bg-background pl-4 pr-4 sm:pr-20 py-4 fixed bottom-0 w-full text-center flex flex-col md:flex-row justify-center z-30 md:text-left`}
      >
        <div className="flex flex-row w-full md:w-auto">
          <h4 className="self-center text-lg mr-4">
            This website uses cookies to improve your experience. We'll assume
            you're ok with this, but you can opt-out if you wish.
            <a
              // className="bg-white text-primary btn-secondary-lg font-bold leading-tight border-white cursor-pointer mr-0 sm:mr-4 mb-2 sm:mb-0 w-full self-center"
              className="font-bold cursor-pointer text-blueNew-custom self-center mx-2"
              onClick={() => {
                setShowCookieSeting(true)
              }}
            >
              Cookie&nbsp;Settings
            </a>
          </h4>
        </div>

        <div className="flex flex-col justify-center my-4 sm:my-0 w-full md:w-72">
          <a
            className="btn-primary-lg cursor-pointer self-center w-full"
            onClick={() => {
              setShowConsent(false)
              cookies.set("viewed_cookie_policy", "yes", {
                path: "/",
                expires: nextYear,
              })
            }}
          >
            ACCEPT
          </a>
        </div>
      </div>
    </>
  )
}

export default CookiesConsent
