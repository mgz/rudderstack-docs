import React from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"

const CentredContentWithButton = props => {
  return (
    <div className={`testimonials px-7 py-10 sm:py-20 text-primary margin-top-xl relative ${props.darkMode ? 'sm:pt-2 pt-2' : 'bg-heropattern-mobile sm:bg-hero-pattern bg-no-repeat bg-cover'}`}>
      <div className="w-full max-w-5xl m-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${props.darkMode ? 'text-darkScheme-textPrimary' : 'text-blueNew-midnight'}`}>
          {props.title}
        </h2>
        <div className={`text-xl-2 ${props.darkMode ? 'text-darkScheme-grayText' : 'text-grayColor-custom'} mt-4`}>
          <PortableText blocks={props.content} trackSectionHeader={props.title} />
        </div>

        <p className="flex justify-center mt-7">
          {(() => {
            if (props.button.btnexternallink === true) {
              return (
                <a
                  onClick={e =>
                    rudderslabTrackOnClick("button", props.title, e)
                  }
                  key={props.button._key}
                  className={
                    (props.button.btnhiglight === true
                      ? "btn-primary-lg border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary"
                      : "btn-secondary-lg button-gradient-border") + ` sm:mr-4 md:mb-0 mb-6`
                  }
                  href={props.button.btnlink}
                >
                  {props.button.btntext}
                </a>
              )
            } else {
              return (
                <Link
                  onClick={e =>
                    rudderslabTrackOnClick("button", props.title, e)
                  }
                  key={props.button._key}
                  to={props.button.btnlink}
                >
                  <span
                    className={
                      (props.button.btnhiglight === true
                        ? "btn-primary-lg border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary"
                        : "btn-secondary-lg button-gradient-border") + ` sm:mr-4 md:mb-0 mb-4`
                    }
                  >
                    {props.button.btntext}
                  </span>
                </Link>
              )
            }
          })()}
        </p>
      </div>
      <span className="section-border absolute bottom-0 left-0 w-full block"></span>
    </div>
  )
}
export default CentredContentWithButton
