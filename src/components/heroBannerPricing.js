import React from "react"
import Image from "./image"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"

const HeroBannerPricing = props => {
  // console.log("HeroBannerPricing", props)
  const extralink = props.herobannerfooterlink
    ? props.herobannerfooterlink.cmnexternallink
    : ""
  const link_display_as_button = props.herobannerfooterlink
    ? props.herobannerfooterlink.cmn_display_as_button
    : false

  const linktext = props.herobannerfooterlink
    ? props.herobannerfooterlink.cmnlinktext
    : ""
  const linkurl = props.herobannerfooterlink
    ? props.herobannerfooterlink.cmnlink
    : ""

  return (
    <section className="overflow-x-hidden bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter custom-bg custom-gradient pt-8 md:pt-20">
      <div className="max-w-screen-lg px-4 md:px-12 mx-auto flex flex-wrap flex-col items-center text-center">
        <h1 className="my-4 text-5xl md:text-6xl font-bold font-custom leading-snug text-primary">
          {props.herobannertitle}
        </h1>
      </div>

      <div className="max-w-6xl px-4 md:px-3 lg:px-0 mx-auto flex flex-wrap items-center pb-18 font-custom">
        <div className="pricing-table-2 pt-1 md:pt-3 w-full">
          <div className="mx-auto">
            <div className="pricing-plans relative lg:flex mt-6 md:mt-12 w-full">
              {props.pricing_cards.map((item, idx) => {
                return (
                  <div
                    key={item._key}
                    className={`pricing-plan-wrap lg:w-1/3 mt-4 mb-8 md:my-6 px-5 ${
                      idx === 1 ? "proCard relative" : ""
                    }`}
                  >
                    <div className="pricing-plan bg-whiteColor-custom border border-grayColor-priceCardBorder rounded-2xl text-center mx-auto shadow-md">
                      <div className="p-6 pt-12 md:pt-16 md:pb-4">
                        <div className="ellipse flex items-center justify-center h-20">
                          <Image props={item.image.asset._ref} />
                        </div>
                        <h3 className="font-medium leading-tight md:leading-snug text-4xl md:text-5xl text-primary mr-2 font-bold">
                          {item.title}
                        </h3>
                        <div className="text-grayColor-lighter mt-2 h-16 leading-7 text-lg">
                          {item.smalltitle}
                        </div>
                      </div>
                      <div className="p-6 pt-0 pb-10 max-w-xs mx-auto text-left">
                        <ul className="h-52 text-lg">
                          {item.pricing_features.map((rr, idx) => {
                            return (
                              <li
                                key={idx}
                                className="relative pl-8 p-1.5 text-grayColor-custom font-medium"
                              >
                                <span className="absolute top-2 w-7 left-0 check-icon"></span>
                                {rr}
                              </li>
                            )
                          })}
                        </ul>
                        <div className="mt-6 py-4 text-center">
                          {(() => {
                            if (item.button.btnexternallink === true) {
                              return (
                                <a
                                  className={
                                    (item.button.btnhiglight === true
                                      ? "btn-primary-sm"
                                      : "btn-secondary-sm") +
                                    ` inline-block font-bold`
                                  }
                                  onClick={e =>
                                    rudderslabTrackOnClick(
                                      "button",
                                      item.title,
                                      e
                                    )
                                  }
                                  href={item.button.btnlink}
                                >
                                  {item.button.btntext}
                                </a>
                              )
                            } else {
                              return (
                                <a
                                  className={
                                    (item.button.btnhiglight === true
                                      ? "btn-primary-sm"
                                      : "btn-secondary-sm") +
                                    ` inline-block font-bold`
                                  }
                                  onClick={e =>
                                    rudderslabTrackOnClick(
                                      "button",
                                      item.title,
                                      e
                                    )
                                  }
                                  href={item.button.btnlink}
                                >
                                  {item.button.btntext}
                                </a>
                              )
                            }
                          })()}

                          {/* <a
                            href="https://app.rudderlabs.com/signup?type=freetrial"
                            className="btn-primary-sm inline-block font-bold"
                          >
                            Sign up free
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="py-8 pt-5 md:pt-16 w-full text-lg md:text-xl text-center font-bold">
          <p className="text-primary">{props.herobannerfootersmalltitle}</p>
          <div className="mt-3 flex items-center">
            {(() => {
              if (linktext !== "") {
                if (extralink === true) {
                  return (
                    <a
                      onClick={e =>
                        rudderslabTrackOnClick(
                          "link",
                          props.herobannerfootersmalltitle,
                          e
                        )
                      }
                      href={linkurl}
                      className={`font-bold leading-normal mx-auto text-sm ${
                        link_display_as_button ? "btn-primary-lg" : ""
                      } relative sm:inline-block ${
                        props.applyGradientColorTheme
                          ? "lr-icon-gradient"
                          : !link_display_as_button
                          ? "lr-icon"
                          : ""
                      }`}
                    >
                      {linktext}
                    </a>
                  )
                } else {
                  return (
                    <span
                      className={`font-bold leading-normal mx-auto text-sm ${
                        link_display_as_button ? "btn-primary-lg" : ""
                      } relative sm:inline-block ${
                        props.applyGradientColorTheme
                          ? "lr-icon-gradient"
                          : !link_display_as_button
                          ? "lr-icon"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={e =>
                          rudderslabTrackOnClick(
                            "link",
                            props.herobannerfootersmalltitle,
                            e
                          )
                        }
                        to={linkurl}
                      >
                        {linktext}
                      </Link>
                    </span>
                  )
                }
              }
            })()}
          </div>
        </div>
      </div>

      {/* <PricingCards /> */}
    </section>
  )
}

export default HeroBannerPricing
