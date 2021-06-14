import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import loadable from "@loadable/component"
import CaseStudyHero from "../components/caseStudyHero"
import SignupV1 from "../components/signup_v1"
import LeftRightImgCnt from "../components/left-right-image-content"
import LeftRightContentWithTitle from "../components/leftRightContentWithTitle"
import HeroBannerWithCenterTextAndImage from "../components/heroBannerWithCenterTextAndImage"
import CaseStuduiesPersonalize from "../components/caseStuduiesPersonalize"
import Image from "../components/image"

const Testimonial = loadable(() => import("../components/testimonial"))
const MiddleBanner = loadable(() => import("../components/middle-banner"))

const CaseStudyContent = ({ data }) => {
  // console.log("sddadada", data.sanityFrontpageblock)
  console.log("pppp", data.casestudy)
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

      {data.casestudy._rawPagebuildersectionarray.map(section => {
        if (
          section._type === "common_global_sections" &&
          section.common_section_type === "global_testimonial_section"
        ) {
          let l_data = data.sanityFrontpageblock._rawPagebuildersectionarray.find(
            pp => pp._type === "testimonialsection"
          )
          return (
            <Testimonial
              key={section._key}
              applyGradientColorTheme={false}
              {...l_data}
            />
          )
        } else if (
          section._type === "common_global_sections" &&
          section.common_section_type ===
            "global_signup_with_right_image_section"
        ) {
          return <SignupV1 key={section._key} />
        } else if (
          section._type === "common_global_sections" &&
          section.common_section_type === "global_get_started_section"
        ) {
          let l_data = data.sanityFrontpageblock._rawPagebuildersectionarray.find(
            pp => pp._type === "middlebannersection"
          )
          return (
            <section key={section._key} id="footer_section_for_demo">
              <MiddleBanner {...l_data} />
            </section>
          )
        } else if (section._type === "leftrightcontentimagesection") {
          return (
            <div className="100%" key={section._key}>
              <LeftRightImgCnt applyGradientColorTheme={false} {...section} />{" "}
            </div>
          )
        } else if (section._type === "banner_center_image") {
          return (
            <div className="100%" key={section._key}>
              <HeroBannerWithCenterTextAndImage
                title={data.casestudy.title}
                {...section}
              />
            </div>
          )
        } else if (section._type === "left_right_content_with_title") {
          return (
            <div className="100%" key={section._key}>
              <LeftRightContentWithTitle {...section} />
            </div>
          )
        } else if (section._type === "image") {
          return (
            <div
              className="100% max-w-6xl flex flex-col justify-center mx-auto"
              key={section._key}
            >
              <div className=" px-0 py-0 md:px-36 md:py-8">
                <Image props={section.asset._ref} />
              </div>
            </div>
          )
        } else if (section._type === "case_studies_personalization") {
          return (
            <div className="100% mb-28" key={section._key}>
              <CaseStuduiesPersonalize {...section} />
            </div>
          )
        } else {
          return <div key={section._key}>{section._type}</div>
        }
      })}
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
