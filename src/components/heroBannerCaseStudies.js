import React from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"


const HeroBannerCaseStudies = props => {
  console.log("props", props)
  return (
    <div className="hero-case-studies">
      <div className="hero-case-studies-bg-image max-w-6xl  mx-auto px-4 flex">
        <div className="w-full text-whiteColor-custom md:w-9/12">
          <h1 className="text-5xl font-bold">{props.title}</h1>
          <div className="text-lg">
            <PortableText
              blocks={props.content}
              trackSectionHeader={props.title}
            />
          </div>
          <div className="block sm:flex justify-center items-center mt-12 mx-2">
            {props.herobannerbutton.map((btn, i) => (
              <>
                {(() => {
                  if (btn.btnexternallink === true) {
                    return (
                      <a
                        key={btn._key}
                        className={
                          (btn.btnhiglight === true
                            ? "btn-primary-lg"
                            : "btn-secondary-lg") +
                          ` sm:mr-4 md:mb-0 mb-6 bg-white text-dark hover:bg-blueNew-midnight hover:text-white`
                        }
                        href={btn.btnlink}
                      >
                        {btn.btntext}
                      </a>
                    )
                  } else {
                    return (
                      <Link key={btn._key} to={btn.btnlink}>
                        <span
                          className={
                            (btn.btnhiglight === true
                              ? "btn-primary-lg"
                              : "btn-secondary-lg") + ` sm:mr-4 md:mb-0 mb-4`
                          }
                        >
                          {btn.btntext}
                        </span>
                      </Link>
                    )
                  }
                })()}
              </>
            ))}
          </div>
        </div>

        <div className="w-full md:w-3/12"></div>
      </div>
    </div>
  )
}

export default HeroBannerCaseStudies
