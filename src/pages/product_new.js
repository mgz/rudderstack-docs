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
      <section className="w-full bg-black-custom product-page_banner text-white flex justify-center items-center">
        <div className="max-w-6xl py-20 px-4 md:px-3 mx-auto relative">
          <div className="flex flex-col items-center md:gap-12 xl:gap-24 justify-center mx-auto lg:flex-row lg:p-0">
            <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-3/5 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
              <h2 className="md:text-6xl text-5xl font-bold leading-none">Event stream</h2>
              <h3 className="text-3xl leading-10 font-bold mt-5 mb-8">Replaces Segment or Snowplow Analytics</h3>
              <p className="text-white text-lg leading-6">Simplify event streaming and integrations work. Instrument once with RudderStack to capture event data, then send it to your entire customer data stack.</p>
              <div class="relative block sm:flex mt-12">
                <a class="btn-primary-lg bg-white text-primary sm:mr-4 md:mb-0 mb-6" href="#">Sign up for free</a>
                <a class="btn-secondary-lg sm:mr-4 md:mb-0 mb-4" href="/request-demo">Get a demo</a>
              </div>
            </div>

            <div className="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-2/5 sm:px-0 sm:items-center lg:items-start lg:mb-0">
              <div class="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
                video
          </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-backgroundsecondary 100% left-right-section py-24">
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight text-center">
            Stream events from any source to any destination
            </h3>
          <div className="flex items-center flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2">
              sdfsdfsd
              </div>
            <div className="w-full sm:w-1/2">
              sdfsdfsd
              </div>
          </div>


        </div>
      </section>
      <section>test content</section>
      <section id="footer_section_for_demo">
        <MiddleBanner {...lv_middlebannersection[0]} />
      </section>

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
