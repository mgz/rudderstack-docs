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
            : "hero-section text-white pb-16"
        } pt-19 md:pt-24 md:px-0  sm:px-0 relative`}
      >
        <div className="max-w-6xl mx-auto blockWrapper">
          <div
            className={`flex flex-wrap flex-col ${
              isLightTheme !== true ? "items-center" : ""
            }  lg:flex-row`}
          >
            <div className="flex lg:items-start w-full lg:w-1/2 flex-row">
              <div>
                <div className="w-10 md:w-16 lg:-pt-4">
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
              <div className="w-full flex flex-col pl-6 md:pl-12 pr-0 md:pr-8 ">
                {props.small_title && props.small_title !== "" && (
                  <p className="mb-4 font-bold text-darkScheme-btnSecondaryBg text-xs md:text-2xl">
                    {props.small_title}
                  </p>
                )}

                <h3
                  className={`${
                    props.smallerTitle === true
                      ? "text-2xl-2 md:text-3xl-3"
                      : "text-5xl w-3/4"
                  }   font-bold font-custom leading-tight mb-4  section-title`}
                >
                  {title}
                </h3>
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <div className="align-middle text-sm md:text-lg leading-6 md:leading-7 font-custom pl-16 md:pl-28 lg:pl-0">
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
                                  ? "text-darkScheme-textPrimary "
                                  : "btn-secondary-lg") +
                                ` font-bold py-3 text-sm md:px-8 lg:px-8 px-2 text-center md:mr-6 rounded-lg md:mb-0 mb-4 flex justify-center items-center leading-tight  font-custom cta-btn text-darkScheme-textPrimary bg-darkScheme-btnPrimaryBg border-none`
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
                              className={
                                (btn.btnhiglight === true
                                  ? "bg-white text-primary btn-secondary-lg hover:bg-blueNew-eastbay"
                                  : "btn-secondary-lg") +
                                ` font-bold py-3 text-sm md:px-8 lg:px-8 px-2 text-center rounded-lg md:mb-0 mb-4 flex justify-center items-center border leading-tight cta-btn font-custom`
                              }
                            >
                                {btn.btntext}                             
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
          <span className="section-border block absolute bottom-0 left-0 w-full"></span>
        )}
      </section>
    </>
  )
}
export default MiddleBanner
