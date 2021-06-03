import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from "../components/portableText"
import MiddleBanner from "../components/middle-banner"

const TrankYou = ({ data, htmlId }) => {
  const lv_thankyoucontent = data.thankyou._rawPagebuildersectionarray || []

  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  return (
    <Layout>
      <div className="font-custom">
        <section id="demo_submit_hdr">
          <div className="w-full demo-submit-background">
            <div className="max-w-3xl pt-24 mt-0 sm:mt-16 m-auto py-4 px-4">
              <h1 className="text-6xl font-bold">
                {lv_thankyoucontent[0].thankyou_header_text}
              </h1>
            </div>
          </div>
          <div className="max-w-3xl pb-32 sm:pb-44 m-auto px-4">
            <div className="text-grayColor-custom text-xl-2">
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
