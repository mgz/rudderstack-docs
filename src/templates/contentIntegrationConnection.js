import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Link from "gatsby-link"
import Layout from "../components/layout"
import HeroBannerIntegrationConnection from "../components/heroBannerIntegrationConnection"
import { StaticImage } from "gatsby-plugin-image"
import { propTypes } from "@sanity/block-content-to-react"

const SingleIntegrationConnectionContent = ({ data }) => {
  console.log("SingleIntegrationConnectionContent", data)
  return (
    <Layout>
      <HeroBannerIntegrationConnection {...data} />
      <section className=" px-4 md:px-3 py-32 mx-auto relative bg-whiteColor-custom banner-section">
        <div className="flex flex-col items-center md:gap-12 xl:gap-24 justify-center mx-auto lg:flex-row lg:p-0 max-w-6xl">
          <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
            <h2 className="text-primary mb-8 md:my-4 text-2xl-2 font-bold leading-tight">
              Easy {data.integration_connection.source_integration_context} to{" "}
              {data.integration_connection.destination_integration_context} Integration with
              RudderStack
            </h2>
            <div className="py-4">
              <p className="text-lg text-grayColor-custom font-normal">
                RudderStack’s open source{" "}
                {data.integration_connection.source_integration_context} allows you to
                integrate RudderStack with your{" "}
                {data.integration_connection.source_integration_context} to track event data
                and automatically send it to{" "}
                {data.integration_connection.destination_integration_context}.
                <br />
                <br />
                With the RudderStack{" "}
                {data.integration_connection.source_integration_context}, you do not have to
                worry about having to learn, test, implement or deal with
                changes in a new API and multiple endpoints every time someone
                asks for a new integration.
              </p>
            </div>

            <a
              className={`btn-primary-lg sm:mr-4 md:mb-0 mb-4 my-4 font-bold`}
              href={data.integration_connection.source_docs_url}
            >
              Read {data.integration_connection.source_integration_context} Docs
            </a>
          </div>
          <div className="relative w-full px-0 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
            <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
              <div className="">
                <StaticImage
                  src="../images/int-conn-s2.png"
                  alt="RudderStack animation"
                  placeholder="tracedSVG"
                  className="w-auto"
                />

                <div className="int-conn-left-logo">
                  <img
                    src={data.integration_connection.source_logo_img_url}
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>

                <div className="int-conn-right-logo">
                  <img
                    src={data.integration_connection.destination_logo_img_url}
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

      <section className="max-w-6xl mx-auto mb-12">
        <div className=" flex flex-col w-full pb-12 md:pb-0 px-2">
          <h3 className="mt-20 mb-0 md:mb-6 text-4xl md:text-5xl font-bold leading-tight text-left  max-w-5xl text-blueNew-midnight">
            Popular {data.integration_connection.destination_integration_context} use cases
          </h3>
        </div>
        <div className="px-0 mx-auto">
          {/*Data WorkFlow*/}
          <div className="flex flex-wrap flex-row mb-12">
            <div className={`w-full md:w-1/3 sm:px-2 mt-5 `}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-8 bg-blueNew-cardBackground rounded-2xl">
                <div className="h-8 mb-10">
                  <img
                    src={data.integration_connection.destination_logo_img_url}
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mb-6 mt-2  text-blueNew-midnight">
                  {data.integration_connection.use_case_header_1}
                </div>
                <div class="text-grayColor-custom text-lg mb-8">
                  {data.integration_connection.use_case_desc_1}
                </div>
              </div>
            </div>

            <div className={`w-full md:w-1/3 sm:px-2 mt-5 `}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-8 bg-blueNew-cardBackground rounded-2xl">
                <div className="h-8 mb-10">
                  <img
                    src={data.integration_connection.destination_logo_img_url}
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mb-6 mt-2  text-blueNew-midnight">
                  {data.integration_connection.use_case_header_2}
                </div>
                <div class="text-grayColor-custom text-lg mb-8">
                  {data.integration_connection.use_case_desc_2}
                </div>
              </div>
            </div>

            <div className={`w-full md:w-1/3 sm:px-2 mt-5 `}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-8 bg-blueNew-cardBackground rounded-2xl">
                <div className="h-8 mb-10">
                  <img
                    src={data.integration_connection.destination_logo_img_url}
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mb-6 mt-2  text-blueNew-midnight">
                  {data.integration_connection.use_case_header_3}
                </div>
                <div class="text-grayColor-custom text-lg mb-8">
                  {data.integration_connection.use_case_desc_3}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 m-auto">
          <Link to={"/"}>
            <span
              className={`btn-primary-lg sm:mr-4 md:mb-0 mb-4 my-4 font-bold`}
            >
              Sign Up free
            </span>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-12">
        <div className=" flex flex-col w-full pb-12 md:pb-0 px-2">
          <h3 className="mt-20 mb-0 md:mb-6 text-4xl md:text-3xl font-bold leading-tight text-left max-w-5xl text-blueNew-midnight">
            Use the {data.integration_connection.source_integration_context} with other
            popular destinations
          </h3>
        </div>
        <div className="px-0 mx-auto">
          {/*Data WorkFlow*/}
          <div className="flex flex-wrap flex-row mb-12">
            <div className={`w-full md:w-1/4 sm:px-2 mt-5 `}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-2 pr-2 bg-blueNew-cardBackground rounded-2xl relative">
                <div className="h-8 mb-2 pl-6">
                  <img
                    src={
                      data.integration_connection
                        .relevant_integration_logo_url_1
                    }
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mt-2  text-blueNew-midnight pl-6 mb-16">
                  {data.integration_connection.relevant_integration_desc_1}
                </div>

                <a
                  href={data.integration_connection.relevant_integration_url_1}
                  className="absolute bottom-6 w-full pr-10 pl-6 "
                >
                  <span
                    className={`btn-primary-lg md:mb-0 mb-4 my-4 font-bold`}
                  >
                    View Integration
                  </span>
                </a>
              </div>
            </div>

            <div className={`w-full md:w-1/4 sm:px-2 mt-5 `}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-2 pr-2 bg-blueNew-cardBackground rounded-2xl relative">
                <div className="h-8 mb-2 pl-6">
                  <img
                    src={
                      data.integration_connection
                        .relevant_integration_logo_url_2
                    }
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mt-2  text-blueNew-midnight pl-6 mb-16">
                  {data.integration_connection.relevant_integration_desc_2}
                </div>

                <a
                  href={data.integration_connection.relevant_integration_url_2}
                  className="absolute bottom-6 w-full pr-10 pl-6 "
                >
                  <span
                    className={`btn-primary-lg md:mb-0 mb-4 my-4 font-bold`}
                  >
                    View Integration
                  </span>
                </a>
              </div>
            </div>

            <div className={`w-full md:w-1/4 sm:px-2 mt-5 `}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-2 pr-2 bg-blueNew-cardBackground rounded-2xl relative">
                <div className="h-8 mb-2 pl-6">
                  <img
                    src={
                      data.integration_connection
                        .relevant_integration_logo_url_3
                    }
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mt-2  text-blueNew-midnight pl-6 mb-16">
                  {data.integration_connection.relevant_integration_desc_3}
                </div>

                <a
                  href={data.integration_connection.relevant_integration_url_3}
                  className="absolute bottom-6 w-full pr-10 pl-6 "
                >
                  <span
                    className={`btn-primary-lg md:mb-0 mb-4 my-4 font-bold`}
                  >
                    View Integration
                  </span>
                </a>
              </div>
            </div>

            <div className={`w-full md:w-1/4 sm:px-2 mt-5 `}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-2 pr-2 bg-blueNew-cardBackground rounded-2xl relative">
                <div className="h-8 mb-2 pl-6">
                  <img
                    src={
                      data.integration_connection
                        .relevant_integration_logo_url_4
                    }
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mt-2  text-blueNew-midnight pl-6 mb-16">
                  {data.integration_connection.relevant_integration_desc_4}
                </div>

                <a
                  href={data.integration_connection.relevant_integration_url_4}
                  className="absolute bottom-6 w-full pr-10 pl-6 "
                >
                  <span
                    className={`btn-primary-lg md:mb-0 mb-4 my-4 font-bold`}
                  >
                    View Integration
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <div className={`w-full sm:px-2 mt-5 `}>
          <div className="h-full flex flex-col justify-center text-center py-10 px-8 items-center ">
            <div className="h-8 mb-2">
              <img
                src={
                  data.integration_connection.destination_logo_img_url
                }
                className="h-8 m-auto"
                alt="RudderStack animation"
                placeholder="tracedSVG"
              />
            </div>
            <div class="text-5xl font-bold mb-6 mt-2  text-blueNew-midnight">
              About  {data.integration_connection.destination_integration}
            </div>
            <div class="text-grayColor-custom text-lg mb-8">
              {data.integration_connection.destination_description}
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
      destination_integration
      destination_integration_context
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
      source_integration
      source_integration_context
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
      image_header_source
      image_header_name
    }
  }
`
export default SingleIntegrationConnectionContent
