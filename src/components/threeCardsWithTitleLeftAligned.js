import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"

import warehouseWhite from "../images/warehouse-white.png"

const ThreeCardsWithTitleLeftAligned = props => {
  return (
    <section className="py-19">
      <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center">
        <h3 className="mb-0 text-4xl md:text-4xl font-bold leading-tight uppercase text-center text-darkScheme-btnPrimaryBg mt-9">
          {props.title}
        </h3>
        <h2 className="text-5xl text-darkScheme-textPrimary leading-tight font-bold mt-16 text-center">
          We're the #1 customer data infrastructure solution for developers, data analysts and product teams
        </h2>
        <div className="why-rudderstack-wrapper max-w-4xl mx-auto">
          {/* Map this block start */}
          <div className="wr-data-block image-left relative py-20 flex flex-col max-w-2xl">
            <div className="separator-line mx-auto"></div>
            <div className="wr-image-icon-wrapper flex -mt-12 self-start">
              <div className="wr-image-icon-block flex items-center justify-center">
                <img src={warehouseWhite} />
              </div>
            </div>
            <div className="flex self-end w-1/2 -mt-12">
              <div className="wr-text-data w-11/12">
                <h4 className="text-darkScheme-btnSecondaryBg uppercase font-bold text-3xl-3">Warehouse first</h4>
                <p className="text-darkScheme-textPrimary mt-2">We do not store sensitive information. The RudderStack approach turns your warehouse into customer data platform, simplifying InfoSec and privacy compliance.</p>
              </div>
            </div>
          </div>
          {/* Map this block end */}
          <div className="wr-data-block image-right relative py-20 flex flex-col max-w-2xl">
            <div className="separator-line mx-auto"></div>
            <div className="wr-image-icon-wrapper flex -mt-12 self-end">
              <div className="wr-image-icon-block flex items-center justify-center">
                <img src={warehouseWhite} />
              </div>
            </div>
            <div className="flex self-start w-1/2 -mt-12">
              <div className="wr-text-data w-11/12">
                <h4 className="text-darkScheme-btnSecondaryBg uppercase font-bold text-3xl-3">Scalable</h4>
                <p className="text-darkScheme-textPrimary mt-2">Easily collect, transform and route  customer data across your entire stack with event streaming, ETL, and reverse-ETL pipelines, all on the same platform.</p>
              </div>
            </div>
          </div>
          <div className="wr-data-block image-left relative py-20 flex flex-col max-w-2xl">
            <div className="separator-line mx-auto"></div>
            <div className="wr-image-icon-wrapper flex -mt-12 self-start">
              <div className="wr-image-icon-block flex items-center justify-center">
                <img src={warehouseWhite} />
              </div>
            </div>
            <div className="flex self-end w-1/2 -mt-12">
              <div className="wr-text-data w-11/12">
                <h4 className="text-darkScheme-btnSecondaryBg uppercase font-bold text-3xl-3">Real Time</h4>
                <p className="text-darkScheme-textPrimary mt-2">Stream customer data in real time. Implement RudderStack SDKs once, then automatically send data to your warehouse and 150+ business tools without API changes and broken pipelines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThreeCardsWithTitleLeftAligned
