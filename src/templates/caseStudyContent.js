import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import CaseStudyHero from "../components/caseStudyHero"
const CaseStudyContent = ({ data }) => {
  //   const hero_section = data.casestudy._rawPagebuildersectionarray.find(
  //     oo => oo._type === "case_studies_hero"
  //   )
  //   const data_stack_section = data.casestudy._rawPagebuildersectionarray.find(
  //     oo => oo._type === "case_studies_data_stack"
  //   )
  //   const company_problem_section = data.casestudy._rawPagebuildersectionarray.find(
  //     oo => oo._type === "case_studies_company_problem"
  //   )
  //   const secure_compliance_section = data.casestudy._rawPagebuildersectionarray.find(
  //     oo => oo._type === "case_studies_secure_compliance"
  //   )
  //   const personalization_section = data.casestudy._rawPagebuildersectionarray.find(
  //     oo => oo._type === "case_studies_personalization"
  //   )
  //   console.log("hero_section", hero_section)
  //   console.log("data_stack_section", data_stack_section)
  //   console.log("company_problem_section", company_problem_section)
  //   console.log("secure_compliance_section", secure_compliance_section)
  //   console.log("personalization_section", personalization_section)
  console.log("sddadada", data.casestudy)
  return (
    <Layout>
      <Helmet>
        <title>{data.casestudy.meta_title || data.casestudy.title}</title>
        <meta
          property="og:title"
          content={data.casestudy.meta_title || data.casestudy.title}
        />
        <meta
          property="twitter:title"
          content={data.casestudy.meta_title || data.casestudy.title}
        />
        <meta name="description" content={data.casestudy.meta_desc} />
        <meta property="og:description" content={data.casestudy.meta_desc} />
        <meta
          property="twitter:description"
          content={data.casestudy.meta_desc}
        />
        <meta property="og:type" content="article" />
      </Helmet>
      {}
      {/* <CaseStudyHero /> */}

      {JSON.stringify(data.casestudy)}
    </Layout>
  )
}

export const query = graphql`
  query GetSingleCaseStudies($slug: String) {
    casestudy: sanityCaseStudies(slug: { current: { eq: $slug } }) {
      id
      listing_image {
        asset {
          url
        }
      }
      meta_desc
      meta_title
      shortdescription
      title
      weight
      article_dttm
      category
      _rawPagebuildersectionarray
    }

    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`

export default CaseStudyContent
