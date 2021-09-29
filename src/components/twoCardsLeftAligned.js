import React from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"

const TwoCardsLeftAligned = props => {
  return (
    <section id="join_us_section">
      <div className="max-w-6xl px-4 md:px-0 mx-auto my-12">
        <div className="flex flex-col md:flex-row justify-center">
          {props.two_card_items.map(item => {
            const link_display_as_button = item.addlink
              ? item.addlink.cmn_display_as_button
              : false

            const extralink = item.addlink ? item.addlink.cmnexternallink : ""
            const linktext = item.addlink ? item.addlink.cmnlinktext : ""
            const linkurl = item.addlink ? item.addlink.cmnlink : ""

            return (
              <div
                key={item._key}
                className="w-full md:w-1/2 rounded-xl bg-blueNew-lighter mx-0 md:mx-4 my-2 px-4 md:px-16 py-8 md:py-16 md:h-96 relative"
              >
                <h4 className="text-3xl font-bold  mb-6 ">{item.title}</h4>
                <div className="text-secondary leading-7 text-sm sm:text-lg frtxt-contnt">
                  <PortableText blocks={item.content} trackSectionHeader={item.title} />
                </div>

                {linktext !== "" && (
                  <div class="flex items-center mt-8">
                    {(() => {
                      if (linktext !== "") {
                        if (extralink === true) {
                          return (
                            <a
                              href={linkurl}
                              onClick={e =>
                                rudderslabTrackOnClick(
                                  link_display_as_button ? "button" : "link",
                                  item.title,
                                  e
                                )
                              }
                              className={`font-bold leading-normal text-sm md:absolute md:bottom-16 ${
                                link_display_as_button ? "btn-primary-lg" : ""
                              } ${
                                props.applyGradientColorTheme
                                  ? "lr-icon-gradient"
                                  : !link_display_as_button
                                  ? "lr-icon"
                                  : ""
                              } `}
                            >
                              {linktext}
                            </a>
                          )
                        } else {
                          return (
                            <span
                              className={`font-bold leading-normal text-sm md:absolute md:bottom-16 ${
                                link_display_as_button ? "btn-primary-lg" : ""
                              } ${
                                props.applyGradientColorTheme
                                  ? "lr-icon-gradient"
                                  : !link_display_as_button
                                  ? "lr-icon"
                                  : ""
                              }`}
                            >
                              <Link onClick={e =>
                                rudderslabTrackOnClick(
                                  link_display_as_button ? "button" : "link",
                                  item.title,
                                  e
                                )
                              } to={linkurl}>{linktext}</Link>
                            </span>
                          )
                        }
                      }
                    })()}
                  </div>
                )}

                {/* <a
                  className="btn-primary-lg sm:mr-4 md:mb-0 my-6 w-full md:w-60 md:absolute md:bottom-16"
                  href=""
                >
                  Join our community
                </a> */}
              </div>
            )
          })}

          {/* <div className="w-full md:w-1/2 rounded-xl bg-blueNew-lighter mx-0 md:mx-4 my-2 px-4 md:px-16 py-8 md:py-16 md:h-96 relative">
            <h4 className="text-3xl font-bold  mb-6 ">Read our Docs</h4>
            <div className="text-secondary leading-7 text-sm sm:text-lg ">
              Don’t want to want to wait around? Check out our technical
              documentation to find answers to your questions. team, from
              product to marketing, to build competitive advantage.
            </div>

            <a
              className="btn-primary-lg sm:mr-4 md:mb-0 my-6 w-full md:w-60 md:absolute md:bottom-16"
              href=""
            >
              Read docs
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default TwoCardsLeftAligned
