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
    <section className="py-19 relative">
      <div className="max-w-6xl mx-auto">
        <h1 className="my-4 font-bold leading-snug text-darkScheme-textPrimary text-5xl text-center">
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
                    <div className="pricing-plan text-center mx-auto">
                      <div className="px-7 py-9">
                        {/* <div className="ellipse flex items-center justify-center h-20">
                          <Image props={item.image.asset._ref} />
                        </div> */}
                        <h3 className="leading-tight md:leading-snug md:text-3xl-3 text-darkScheme-textPrimary mr-2 font-bold">
                          {item.title}
                        </h3>
                        <div className="text-grayColor-lighter mt-2 mb-5 h-16 leading-7 text-base">
                          {item.smalltitle}
                        </div>
                        <div className="text-left">
                          <ul className="h-52 text-lg">
                            {item.pricing_features.map((rr, idx) => {
                              return (
                                <li
                                  key={idx}
                                  className="relative text-darkScheme-textPrimary pricing-pointer-list"
                                >
                                  <span className="w-7 check-icon inline-block align-top mr-5"></span>
                                  <span className="inline-block pricing-pointers">{rr}</span>
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
                                        ? "cta-btn bg-darkScheme-textPrimary border border-darkScheme-textPrimary hover:bg-transparent hover:text-darkScheme-textPrimary flex items-center justify-center mx-auto rounded-lg"
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
                                        ? "cta-btn bg-darkScheme-btnPrimaryBg border border-darkScheme-btnPrimaryBg hover:bg-transparent hover:text-darkScheme-btnPrimaryBg flex items-center justify-center mx-auto rounded-lg"
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
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {props.herobannerfootersmalltitle && props.herobannerfootersmalltitle !== "" && (
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
        )}
      </div>

      {/* <PricingCards /> */}
    </section>
  )
}

export default HeroBannerPricing
