import React from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"

const HeroBannerCaseStudies = props => {
  // console.log("props", props)
  return (
    <div className="hero-case-studies ">
      <div className="hero-case-studies-bg-image">
        <div className=" max-w-6xl  mx-auto px-4 py-32 flex flex-col lg:flex-row">
          <div className="w-full text-whiteColor-custom lg:w-9/12">
            <h1 className="text-5xl leading-tight font-bold">{props.title}</h1>
            <div className="text-xl-2 max-w-xl mt-6">
              <PortableText
                blocks={props.content}
                trackSectionHeader={props.title}
              />
            </div>
            <div className="block sm:flex justify-start items-center mt-8">
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

          <div className="w-full lg:w-3/12 relative">
            <div className="absolute -top-1 left-8 bg-blueNew-midnight w-24 h-2 rounded-3xl"></div>
            <div className="bg-whiteColor-custom h-72 w-72 rounded-3xl p-10">
              {props.key_pairs.map((row, idx) => {
                return (
                  <div className={`flex flex-col ${idx !== 0 ? "mt-6" : ""}`}>
                    <span className="text-tiny text-blueNew-eastbay mb-1">
                      {row.heading}
                    </span>
                    <span className="text-lg text-blueNew-midnight font-bold">
                      {row.value}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBannerCaseStudies
