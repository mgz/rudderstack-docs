import React from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"

const CentredContentWithButton = props => {
  return (
    <div className="testimonials px-7 py-10 sm:py-20 text-primary margin-top-xl relative">
      <div className="w-full max-w-5xl m-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-darkScheme-textPrimary">
          {props.title}
        </h2>
        <div className="text-xl-2 text-darkScheme-grayText mt-4 mb-8">
          <PortableText blocks={props.content} trackSectionHeader={props.title} />
        </div>

        <p className="mt-16 md:mt-16 flex justify-center">
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
                      ? "btn-primary-lg"
                      : "btn-secondary-lg") + ` sm:mr-4 md:mb-0 mb-6`
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
                        ? "btn-primary-lg"
                        : "btn-secondary-lg") + ` sm:mr-4 md:mb-0 mb-4`
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
