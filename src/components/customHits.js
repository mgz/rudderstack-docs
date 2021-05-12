/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { connectHits } from "react-instantsearch-dom"
import Singlerowcontent from "./singlerowcontent"
import Threerowcontent from "./threerowcontent"

const Hits = ({ hits, onRefineHitsCountChange }) => {
  // console.log(hits, "hits")
  if (!hits.length) {
    onRefineHitsCountChange(0)
    return <> </>
  } else {
    onRefineHitsCountChange(hits.length)
  }

  return (
    <div>
      <Singlerowcontent hit={hits[0]} />
      <Threerowcontent hits={hits} />
    </div>
  )
}

const CustomHits = connectHits(Hits)

export default CustomHits
