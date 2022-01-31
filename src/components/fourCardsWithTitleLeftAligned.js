import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"

const FourCardsWithTitleLeftAligned = props => {
  return (
    <section className="pb-8 md:pb-24 px-4 md:px-0 pt-20">
      <div className="max-w-4xl m-auto flex flex-wrap w-full mb-24 flex-col md:text-center">
        {props.title !== "" && (
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-darkScheme-textPrimary">
            {props.title}
          </h2>
        )}
        {props.smalltitle !== "" && (
          <p className="w-full leading-relaxed font-bold sm:font-normal text-sm md:text-lg text-darkScheme-grayText">
            {props.smalltitle}
          </p>
        )}
      </div>
      <div className="max-w-6xl px-0 md:px-3 mx-auto">
        {/*Data WorkFlow*/}
        <div className="flex flex-wrap flex-row justify-between">
          {props.four_card_items.map((item,k) => {
            const link_display_as_button = item.addlink
              ? item.addlink.cmn_display_as_button
              : false

            const extralink = item.addlink ? item.addlink.cmnexternallink : ""
            const linktext = item.addlink ? item.addlink.cmnlinktext : ""
            const linkurl = item.addlink ? item.addlink.cmnlink : ""

            return (
              <div key={item._key} className="md:w-1/2 md:gap-32 mb-16 md:mb-16">
                <div className={"lg:pr-36"}>
                  <div className="w-16 h-16 inline-flex items-center justify-center">
                    <Image props={item.card_image.asset._ref} classes="" />
                  </div>

                  <h2 className="text-2xl-2 font-bold mb-2 text-darkScheme-btnSecondaryBg">{item.title}</h2>

                  <div className="leading-relaxed text-sm sm:text-lg  text-darkScheme-grayText">
                    <PortableText blocks={item.content} trackSectionHeader={item.title} />
                  </div>

                  {linktext !== "" && (
                    <div className="flex items-center mt-8">
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
                                className={`font-bold leading-normal text-sm ${
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
                                className={`font-bold leading-normal text-sm ${
                                  link_display_as_button ? "btn-primary-lg" : ""
                                } ${
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
                                      link_display_as_button
                                        ? "button"
                                        : "link",
                                      item.title,
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
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FourCardsWithTitleLeftAligned
