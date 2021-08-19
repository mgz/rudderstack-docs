import React from "react"
import { graphql } from "gatsby"
// import Layout from "../guides/components/Layout"
import Layout from "../components/layout"
import MiddleBanner from "../components/middle-banner"
import Sections from "../guides/components/Sections"
import Header from "../guides/components/Header"
import "../guides/css/main.css"

const Singlecontent = ({ data }) => {
  const section = data.section
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  return (
    <Layout>
      <div className="font-custom" id="guides-container">
        <Header title={section.title} excerpt={section._rawExcerpt} />
        <div className="max-w-6xl mx-auto">
          <Sections section={section} />
        </div>

        <section name="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0]} />
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
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`

export default Singlecontent
