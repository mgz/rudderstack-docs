/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { connectHits } from 'react-instantsearch-dom';
import Singlerowcontent from "./singlerowcontent"
import Threerowcontent from "./threerowcontent"

const Hits = ({ hits }) => {
  // console.log(hits,'hits')
  if (!hits.length) {
    return (
      <div>
        <div>No results found.</div>
      </div>
    );
  }

  return (
    <div>
      <Singlerowcontent hit={hits[0]} />
      <Threerowcontent hits={hits} />
    </div>
    )
}

const CustomHits = connectHits(Hits);

export default CustomHits
