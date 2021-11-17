import React from "react"
import Link from "gatsby-link"
import {
  rudderslabTrackOnClick,
  rudderslabTrackOnYoutubeVideoPlayback,
} from "../utils/common"
import TestimonialFloatingSmall from "./testimonial_floating_small"
import PortableText from "./portableText"
import Image from "./image"

const TestimonialCardWithLeftHeading = props => {
  console.log("TestimonialCardWithLeftHeading", props)
  return (
    <section className="">
      <div className="max-w-6xl px-4 md:px-3 py-10 md:py-20 mx-auto mt-10">
        <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:p-0">
          <div className="z-20 flex flex-col w-full pb-1 md:mr-30 mb-20 md:mb-8 sm:mb-16 text-2xl lg:w-3/5 sm:px-0sm:items-center lg:items-start lg:mb-0 md:pr-44 ">
            <h2 className="md:mt-4 mb-0 md:text-4xl text-3xl  font-bold leading-none">
              {props.left_title}
            </h2>

            <div className="block sm:flex justify-center items-center mt-12">
              {props.left_cta_button.map((btn, i) => (
                <>
                  {(() => {
                    if (btn.btnexternallink === true) {
                      return (
                        <a
                          key={btn._key}
                          className={
                            (btn.btnhiglight === true
                              ? "btn-primary-lg bg-blueNew-magenta"
                              : "btn-secondary-lg") +
                            ` sm:mr-4 md:mb-0 mb-6 hover:bg-blueNew-midnight hover:text-white`
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
          <div className="relative w-full md:px-5 rounded-lg flex-grow justify-items-end lg:w-2/5 sm:px-0 sm:items-center lg:items-start lg:mb-0">
            <TestimonialFloatingSmall {...props.testimonial} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialCardWithLeftHeading
