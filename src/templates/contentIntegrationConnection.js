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
      <section className=" px-4 md:px-3 py-32 mx-auto relative bg-whiteColor-custom banner-section">
        <div className="flex flex-col items-center md:gap-12 xl:gap-24 justify-center mx-auto lg:flex-row lg:p-0 max-w-6xl">
          <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
            <h2 className="text-primary mb-8 md:my-4 text-2xl-2 font-bold leading-tight">
              Easy iOS SDK to Hubspot Integration with RudderStack
            </h2>
            <div className="py-4">
              <p className="text-lg text-grayColor-custom font-normal">
                RudderStack’s open source iOS SDK allows you to integrate
                RudderStack with your iOS app to track event data and
                automatically send it to Hubspot.
                <br />
                <br />
                With the RudderStack iOS SDK, you do not have to worry about
                having to learn, test, implement or deal with changes in a new
                API and multiple endpoints every time someone asks for a new
                integration.
              </p>
            </div>
            <Link to={"/"}>
              <span
                className={`btn-primary-lg sm:mr-4 md:mb-0 mb-4 my-4 font-bold`}
              >
                Read HubSpot Docs
              </span>
            </Link>
          </div>
          <div className="relative w-full px-0 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
            <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
              <div className="w-full">
                <StaticImage
                  src="../images/int-conn-s2.png"
                  alt="RudderStack animation"
                  placeholder="tracedSVG"
                />

                <div className="int-conn-left-logo">
                  <img
                    src={
                      "https://cdn.sanity.io/images/97bpcflt/production/4ab57efc057de15f519feaf0e4bfe939ef42e71b-452x452.png"
                    }
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>

                <div className="int-conn-right-logo">
                  <img
                    src={
                      "https://rudderstack.com/static/a7a7db9a5f9fbeb5e102a6e939009c50/b63b5a7265b78c98a3f3f54f9567dbd61a0aa5da-137x56.png"
                    }
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
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
