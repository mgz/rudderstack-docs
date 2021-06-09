/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { propTypes } from "@sanity/block-content-to-react"
import React from "react"
import { connectHits } from "react-instantsearch-dom"
import Integrationrowcontent from "./integrationrowcontent"

const Hits = ({ hits, searchedText, onRecordCountChange }) => {
  if (!hits.length) {
    return (
      <div
        onRecordCountChange={onRecordCountChange(0)}
        className={`${
          searchedText !== "" ? "block" : "hidden"
        } bg-white filter-menu rounded-2xl py-8 px-6 justify-center text-xl-2 md:text-2xl-2 font-bold text-center mx-0 md:mx-12`}
      >
        <p className=" text-grayColor-lighter">No results found matching</p>
        <p className="text-blueNew-midnight">{searchedText}</p>
      </div>
    )
  }

  return (
    <div onRecordCountChange={onRecordCountChange(hits.length)}>
      <Integrationrowcontent hits={hits} />
    </div>
  )
}

const IntegrationHits = connectHits(Hits)

export default IntegrationHits
