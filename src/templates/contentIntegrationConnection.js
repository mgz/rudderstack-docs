import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Link from "gatsby-link"
import Layout from "../components/layout"
import HeroBannerIntegrationConnection from "../components/heroBannerIntegrationConnection"
import { StaticImage } from "gatsby-plugin-image"

const SingleIntegrationConnectionContent = ({ data }) => {
  console.log("SingleIntegrationConnectionContent", data)
  return (
    <Layout>
      <HeroBannerIntegrationConnection />
      <section className=" px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative bg-whiteColor-custom banner-section">
        <div className="flex flex-col items-center md:gap-12 xl:gap-24 justify-center mx-auto lg:flex-row lg:p-0 max-w-6xl">
          <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
            <h1 className="text-primary mb-8 md:my-4 text-5xl font-bold leading-tight">
              Integrate your iOS app with Hubspot
            </h1>
            Don’t go through the pain of direct integration. RudderStack’s iOS
            SDK makes it easy to send data from your iOS app to Hubspot ...and
            all of your other cloud tools.
          </div>
          <div className="relative w-full px-0 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
            <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
              <div className="w-full">
                <StaticImage
                  src="../images/RubberStack_MAIN-3D_1-1_active_00000.png"
                  alt="RudderStack animation"
                  placeholder="tracedSVG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleIntegrationConnection($slug: String) {
    integration_connection: integrationConnectionsV3Csv(slug: { eq: $slug }) {
      source_slug
      destination_category
      destination_context
      destination_description
      destination_docs_url
      destination_logo_img_url
      destination_slug
      destination_type
      id
      image_header_url
      meta_desc
      meta_title
      relevant_integration_desc_1
      relevant_integration_desc_2
      relevant_integration_desc_3
      relevant_integration_desc_4
      relevant_integration_logo_url_1
      relevant_integration_logo_url_2
      relevant_integration_logo_url_3
      relevant_integration_logo_url_4
      relevant_integration_url_1
      relevant_integration_url_2
      relevant_integration_url_3
      relevant_integration_url_4
      source_category
      source_context
      source_description
      source_docs_url
      source_logo_img_url
      source_type
      use_case_desc_1
      use_case_desc_2
      use_case_desc_3
      use_case_header_1
      use_case_header_2
      use_case_header_3
      slug
      source_id
      destination_id
    }
  }
`
export default SingleIntegrationConnectionContent
