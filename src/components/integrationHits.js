/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { connectHits } from 'react-instantsearch-dom';
import Integrationrowcontent from "./integrationrowcontent"

const Hits = ({ hits }) => {
  if (!hits.length) {
    return (
      <div>
        <div>No results found.</div>
      </div>
    );
  }

  return (
    <div>
      {/* <Singlerowcontent hit={hits[0]} /> */}
      <Integrationrowcontent hits={hits} />
    </div>
    )
}

const IntegrationHits = connectHits(Hits);

export default IntegrationHits
