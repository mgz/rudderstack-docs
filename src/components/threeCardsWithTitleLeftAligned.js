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
        <h2 className="text-5xl text-darkScheme-textPrimary leading-tight font-bold mt-10 text-center">
          We're the #1 customer data infrastructure solution for developers, data analysts and product teams
        </h2>
        <div className="why-rudderstack-wrapper max-w-3xl mx-auto">
          <div className="wr-data-block image-left relative my-10">
            <div className="separator-line mx-auto"></div>
            <div className="wr-image-icon-wrapper">
              <div className="wr-image-icon-block">
                <img src={warehouseWhite} />
              </div>
            </div>
            <div className="wr-text-data">
              <h4 className="text-darkScheme-btnSecondaryBg uppercase">Warehouse first</h4>
              <p>We do not store sensitive information. The RudderStack approach turns your warehouse into customer data platform, simplifying InfoSec and privacy compliance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThreeCardsWithTitleLeftAligned
