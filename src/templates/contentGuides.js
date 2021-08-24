import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
// import Layout from "../guides/components/Layout"
import Layout from "../components/layout"
import MiddleBanner from "../components/middle-banner"
import Sections from "../guides/components/Sections"
import Header from "../guides/components/Header"
import clientConfig from "../../client-config"
import "../guides/css/main.css"

const Singlecontent = ({ data }) => {
  const section = data.section
  const lv_middlebannersection = data.section_get_started.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.getStarted
  )

  return (
    <Layout>
      <Helmet>
        <title>{data.section.meta_title || data.section.title}</title>
        <meta
          property="og:title"
          content={data.section.meta_title || data.section.title}
        />
        <meta
          property="twitter:title"
          content={data.section.meta_title || data.section.title}
        />
        <meta name="description" content={data.section.meta_desc} />
        <meta property="og:description" content={data.section.meta_desc} />
        <meta
          property="twitter:description"
          content={data.section.meta_desc}
        />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="font-custom bg-whiteColor-custom" id="guides-container">
        <Header title={section.title} excerpt={section._rawExcerpt} />
        <div className="max-w-6xl mx-auto">
          <Sections section={section} />
        </div>

        <section name="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0].node._rawGetStarted} />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleContent($slug: String) {
    
    section: sanityContent(slug: { eq: $slug }) {
      _key
      title
      _rawDescription
      _rawExcerpt
      meta_title
      meta_desc
      cta_block_button
      cta_block_button_url
      cta_block_title
      sections {
        _key
        section_title
        section_subtitle
        section_details_block {
          ... on SanityHtmlBlock {
            _key
            _rawHtmlSectionDescription
            _type
          }
          ... on SanityStyledBlock {
            _key
            _type
            block_title
            _rawBlockDescription
            block_button_text
            block_button_url
            styled_block_type
          }
        }
      }
    }
    section_get_started: allSanitySectionGetStarted {
      edges {
        node {
          _id
          section_name
          _rawGetStarted
        }
      }
    }
  }
`

export default Singlecontent
