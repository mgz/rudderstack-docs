import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"

import warehouseWhite from "../images/warehouse-white.png"

const LeftRightComponentEdgesAligned = props => {
  return (
    <section className="py-19">
      <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center">
        <h3 className="mb-0 text-4xl md:text-4xl font-bold leading-tight uppercase text-center text-darkScheme-btnPrimaryBg mt-9">
          {props.leftrightcontentmaintitle}
        </h3>
        <h2 className="text-5xl text-darkScheme-textPrimary leading-tight font-bold mt-16 text-center">
          {props.leftrightcontentsubtitle}
        </h2>
        <div className="why-rudderstack-wrapper max-w-4xl mx-auto">
          {/* Map this block start */}
          {props.leftrightimageblock.map(row => {
            return (
              <div
                key={row._key}
                className={`wr-data-block image-${
                  row.condition === "right" ? "left" : "right"
                }  relative py-20 flex flex-col max-w-2xl`}
              >
                <div className="separator-line mx-auto"></div>
                <div
                  className={`wr-image-icon-wrapper flex -mt-12 self-${
                    row.condition === "right" ? "start" : "end"
                  }`}
                >
                  <div className="wr-image-icon-block flex items-center justify-center">
                    {/* <Image
                      src={row.imageVideoConditionBlock.imageoption.asset.ref}
                    /> */}
                    <img src={warehouseWhite} />
                  </div>
                </div>
                <div
                  className={`flex self-${
                    row.condition === "right" ? "end" : "start"
                  } w-1/2 -mt-12`}
                >
                  <div className="wr-text-data w-11/12">
                    <h4 className="text-darkScheme-btnSecondaryBg uppercase font-bold text-3xl-3">
                      {row.title}
                    </h4>
                    <div className="text-darkScheme-textPrimary mt-2">
                      <PortableText
                        blocks={row.content}
                        trackSectionHeader={row.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LeftRightComponentEdgesAligned
