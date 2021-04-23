import { NetworkWired } from "@styled-icons/fa-solid"
import React, { useEffect, useState } from "react"

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    setTimeout(async () => {
      let obj = await JSON.parse(localStorage.getItem("site-cookies-consent"))
      if (obj && obj.isAccepted === true) {
        setShowConsent(false)
      } else {
        setShowConsent(true)
      }
    }, 3000)
  }, [])

  return (
    <div
      className={`${
        !showConsent ? "hidden" : ""
      } bg-background px-4 py-8 fixed bottom-2 w-full text-center flex md:flex-row md:justify-between flex-col justify-center z-50 md:text-left`}
    >
      <div>
        <h3 className="font-extrabold">
          We use cookies on this site to enhance your user experience
        </h3>
        <p className="font-sm">
          For complete overview of all cookies used. Please see your personal
          settings.
        </p>
      </div>
      <div className="w-full py-5 md:w-48 md:py-0">
        <a
          class="btn-primary-lg sm:mr-4 md:mb-0 mb-4"
          onClick={() => {
            setShowConsent(false)
            localStorage.setItem(
              "site-cookies-consent",
              JSON.stringify({
                isAccepted: true,
                consent_datetime: Date(),
              })
            )
          }}
        >
          I Understand
        </a>
      </div>
    </div>
  )
}

export default CookiesConsent
