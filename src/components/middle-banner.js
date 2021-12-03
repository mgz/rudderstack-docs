import React from "react"
//import "../lib/font-awesome"
import { StaticImage } from "gatsby-plugin-image"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"
import PortableText from "./portableText"

const MiddleBanner = props => {
  // console.log("MiddleBanner", props)
  const smalldescription = props.smalldescription
  const title = props.title
  const btns = props.addbuttons
  const isLightTheme = false
  return (
    <>
      <section
        className={`${
          isLightTheme === true
            ? "text-blueNew-midnight"
            : "hero-section text-white"
        } 100% pt-10 md:py-28 px-0 sm:px-0 relative`}
      >
        <div className="max-w-6xl mx-auto blockWrapper">
          <div
            className={`flex flex-wrap ${
              isLightTheme !== true ? "items-center" : ""
            }  sm:flex-row`}
          >
            <div className="flex lg:items-start items-center w-full md:w-1/2 flex-row">
              <div className="">
                <div className="w-32 md:-pt-4">
                  {/* <img src={ArrowImg} alt="Get Started Image" /> */}
                  {isLightTheme === true && (
                    <StaticImage
                      src="../images/Arrow-midnight-blue.svg"
                      placeholder="tracedSVG"
                      alt="Get Started Image"
                    />
                  )}

                  {isLightTheme !== true && (
                    <StaticImage
                      src="../images/Arrow-new-theme.svg"
                      placeholder="tracedSVG"
                      alt="Get Started Image"
                    />
                  )}
                </div>
              </div>
              <div className="w-full flex flex-col pr-8 md:pt-4 lg:pt-4">
                {props.small_title !== "" && (
                  <p className="mb-4 font-bold text-darkScheme-btnSecondaryBg">
                    {props.small_title}
                  </p>
                )}

                <h3
                  className={`${
                    isLightTheme === true ? "text-3xl" : "text-3xl-3"
                  }   font-bold font-custom leading-tight mb-4 `}
                >
                  {title}
                </h3>
              </div>
            </div>
            <div className="md:w-1/2 max-w-lg md:pl-4">
              <div className="align-middle text-sm md:text-lg leading-6 md:leading-7 font-custom">
                <div
                  className={`frtxt-contnt ${
                    isLightTheme === true
                      ? "text-grayColor-custom"
                      : "text-white"
                  }`}
                >
                  <PortableText
                    blocks={smalldescription}
                    trackSectionHeader={title}
                  />
                </div>

                {/* <p>{smalldescription}</p> */}
                <div className="block md:flex pt-2 md:pt-2">
                  {btns &&
                    btns.map((btn, i) =>
                      (() => {
                        if (btn.btnexternallink === true) {
                          return (
                            <a
                              key={btn._key}
                              onClick={e =>
                                rudderslabTrackOnClick("button", title, e)
                              }
                              className={
                                (btn.btnhiglight === true
                                  ? "bg-transparent text-darkScheme-textPrimary border border-darkScheme-btnPrimaryBg btn-secondary-lg hover:bg-darkScheme-btnPrimaryBg hover:text-darkScheme-textBlack"
                                  : "btn-secondary-lg") +
                                ` font-bold py-3 text-sm md:px-8 lg:px-8 px-2 text-center md:mr-4 rounded-lg md:mb-0 mb-4 md:flex block border leading-tight  font-custom`
                              }
                              href={btn.btnlink}
                            >
                              {btn.btntext}
                            </a>
                          )
                        } else {
                          return (
                            <Link
                              to={btn.btnlink}
                              key={btn._key}
                              onClick={e =>
                                rudderslabTrackOnClick("button", title, e)
                              }
                            >
                              <span
                                className={
                                  (btn.btnhiglight === true
                                    ? "bg-white text-primary btn-secondary-lg hover:bg-blueNew-eastbay"
                                    : "btn-secondary-lg") +
                                  ` font-bold py-3 text-sm md:px-8 lg:px-8 px-2 text-center md:mr-4 rounded-lg md:mb-0 mb-4 md:flex block border leading-tight  font-custom`
                                }
                              >
                                {btn.btntext}
                              </span>
                            </Link>
                          )
                        }
                      })()
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.showBottomBorder && (
          <span class="section-border block absolute bottom-0 left-0 w-full"></span>
        )}
      </section>
    </>
  )
}
export default MiddleBanner
