import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import algoliasearch from "algoliasearch/lite"

import "../lib/font-awesome"

import MiddleBanner from "../components/middle-banner"

const Product_new = ({ data }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
  )

  return (
    <Layout>
      <div className="font-custom">
        <div className="max-w-6xl mx-auto flex flex-wrap flex-col px-4">
     ssadsdsads
        </div>
        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0]} />
        </section>
      </div>
    </Layout>
  )
}

export default Product_new

export const pageQuery = graphql`
  query {
    allSanityBlog(limit: 13, sort: { fields: [weight], order: [ASC] }) {
      pageInfo {
        currentPage
        itemCount
        hasPreviousPage
        hasNextPage
        pageCount
        perPage
        totalCount
      }
    }
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`
