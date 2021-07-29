import React from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"

const CentredContentWithButton = props => {
  return (
    <div className="testimonials bg-white px-7 py-10 sm:py-20 text-primary margin-top-xl bg-hero-pattern-mobile sm:bg-hero-pattern bg-no-repeat bg-cover">
      <div className="w-full max-w-5xl m-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blueNew-midnight">
          {props.title}
        </h2>
        <div className="text-xl-2 text-grayColor-custom mt-4 mb-8">
          <PortableText blocks={props.content} />
        </div>

        <p className="mt-16 md:mt-16 flex justify-center">
          {(() => {
            if (props.button.btnexternallink === true) {
              return (
                <a
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
                <Link key={props.button._key} to={props.button.btnlink}>
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
    </div>
  )
}
export default CentredContentWithButton