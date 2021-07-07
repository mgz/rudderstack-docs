import React from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import PortableText from "../components/portableText"
import MiddleBanner from "../components/middle-banner"

// const Layout = loadable(() => import("../components/layout"))
// const PortableText = loadable(() => import("../components/PortableText"))
// const MiddleBanner = loadable(() => import("../components/middle-banner"))

const TrankYou = ({ data, htmlId }) => {
  const lv_thankyoucontent = data.thankyou._rawPagebuildersectionarray || []

  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  console.log("TrankYou", data)

  return (
    <Layout>
      <div className="font-custom">
        <section id="demo_submit_hdr">
          <div className="w-full demo-submit-background">
            <div
              className={`${
                lv_thankyoucontent[0].content_type === "agreement"
                  ? "max-w-6xl"
                  : "max-w-3xl"
              } pt-24 mt-0 sm:mt-16 m-auto py-4 px-4`}
            >
              <h1
                className={`${
                  lv_thankyoucontent[0].content_type === "agreement"
                    ? "text-4xl md:text-6xl"
                    : "text-6xl"
                } font-bold`}
              >
                {lv_thankyoucontent[0].thankyou_header_text}
              </h1>
            </div>
          </div>
          <div
            className={`${
              lv_thankyoucontent[0].content_type === "agreement"
                ? "max-w-6xl"
                : "max-w-3xl"
            } pb-32 sm:pb-44 m-auto px-4`}
          >
            <div
              className={`text-grayColor-custom text-xl-2 ${
                lv_thankyoucontent[0].content_type === "agreement"
                  ? "agreement-description"
                  : ""
              } `}
            >
              <PortableText blocks={lv_thankyoucontent[0].thankyou_content} />
            </div>
          </div>
        </section>

        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0]} />
        </section>
      </div>
    </Layout>
  )
}

export default TrankYou

export const pageQuery = graphql`
  query GetSingleTrankYouPage($slug: String) {
    thankyou: sanityThankyoupages(slug: { current: { eq: $slug } }) {
      _rawPagebuildersectionarray
    }
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`
