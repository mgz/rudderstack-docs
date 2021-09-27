import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"

import { rudderslabTrackOnClick } from "../utils/common"

const FourCardsWithTitle = props => {
  return (
    <section className="bg-whiteColor-custom pb-8 md:pb-24">
      <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center">
        {props.title !== "" && (
          <h3 className="mt-24 mb-0 md:mb-10 text-4xl md:text-5xl font-bold leading-tight text-center max-w-5xl ">
            {props.title}
          </h3>
        )}
        {props.subtitle && props.subtitle !== "" && (
          <h3 className="mt-10 mb-4 pb-2 text-2xl md:text-3xl text-blueNew-midnight text-center font-bold leading-tight">
            {props.subtitle}
          </h3>
        )}
      </div>
      <div className="max-w-6xl px-0 md:px-3 mx-auto">
        {/*Data WorkFlow*/}
        <div className="flex flex-wrap flex-row ">
          {props.four_card_items.map(item => {
            const link_display_as_button = item.addlink
              ? item.addlink.cmn_display_as_button
              : false

            const extralink = item.addlink ? item.addlink.cmnexternallink : ""
            const linktext = item.addlink ? item.addlink.cmnlinktext : ""
            const linkurl = item.addlink ? item.addlink.cmnlink : ""

            return (
              <div
                key={item._key}
                className="w-full sm:w-1/2 sm:px-2 mt-5 mx-4 md:mx-0"
              >
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-10 rounded-2xl md:mx-1">
                  <div className="h-20">
                    <Image
                      props={item.card_image.asset._ref}
                      classes="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2 max-w-xs m-auto">
                    {item.title}
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <PortableText blocks={item.content} />
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
                                    props.title,
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
                                      props.title,
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

export default FourCardsWithTitle
