import React from "react"
import Link from "gatsby-link"
import {
  rudderslabTrackOnClick,
  rudderslabTrackOnYoutubeVideoPlayback,
} from "../utils/common"
import { StaticImage } from "gatsby-plugin-image"
import TestimonialFloatingSmall from "./testimonial_floating_small"
import PortableText from "./portableText"
import Image from "./image"

const TestimonialCardWithLeftHeading = props => {
  // console.log("TestimonialCardWithLeftHeading", props)
  return (
    <section className="relative bottomleftright-testimonial">
      {/* <div className="out-gradient-wrapper bottom-1/4 right-16">
        <div className="grad1">
          <div className="grad2">
            <div className="grad3">
              <div className="grad4">
                <div className="grad5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="out-gradient-wrapper top-1/4 left-1/4">
        <div className="grad1">
          <div className="grad2">
            <div className="grad3">
              <div className="grad4">
                <div className="grad5"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="max-w-6xl px-8 lg:px-5 py-10 md:py-20 mx-auto mt-20">
        <div className="flex flex-col leftrightbottom-testimonial-wrapper justify-center mx-auto lg:flex-row lg:p-0">
          <div className="z-20 flex flex-col w-full pb-1 md:mr-30 md:mb-32 pt-15 md:pt-0 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 lg:pr-20 mx-auto">
            <div className="arrow-wrapper flex flex-row md:flex-col">
              <div className="w-12 mr-5 md:w-32">
                <StaticImage
                  src="../images/Arrow.svg"
                  placeholder="tracedSVG"
                  alt="Get Started Image"
                />
              </div>
              <h2 className="md:mt-6 mb-0 md:3xl-3 md:text-3xl-3 text-xl font-bold text-whiteColor-custom">
                {props.left_title}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-12">
              {props.left_cta_button.map((btn, i) => (
                <div key={i}>
                  {(() => {
                    if (btn.btnexternallink === true) {
                      return (
                        <a
                          key={btn._key}
                          className={
                            (btn.btnhiglight === true
                              ? "btn-primary-lg "
                              : "btn-secondary-lg") + ` sm:mr-6 mb-4 cta-btn`
                          }
                          onClick={e =>
                            rudderslabTrackOnClick(
                              "button",
                              props.herobannertitle,
                              e
                            )
                          }
                          href={btn.btnlink}
                        >
                          {btn.btntext}
                        </a>
                      )
                    } else {
                      return (
                        <Link
                          onClick={e =>
                            rudderslabTrackOnClick(
                              "button",
                              props.herobannertitle,
                              e
                            )
                          }
                          key={btn._key}
                          to={btn.btnlink}
                        >
                          <span
                            className={
                              (btn.btnhiglight === true
                                ? "btn-primary-lg"
                                : "btn-secondary-lg") + ` sm:mr-6 mb-4 cta-btn`
                            }
                          >
                            {btn.btntext}
                          </span>
                        </Link>
                      )
                    }
                  })()}
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full md:px-5 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
            <TestimonialFloatingSmall {...props.testimonial} />
          </div>
        </div>
      </div>
      <span className="section-border block absolute bottom-0 left-0 w-full"></span>
    </section>
  )
}

export default TestimonialCardWithLeftHeading
