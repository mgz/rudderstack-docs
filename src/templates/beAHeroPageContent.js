import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import MiddleBannerV2 from "../components/MiddleBannerV2"
import loadable from "@loadable/component"
import HeroBannerBeAHeroPage from "../components/heroBannerBeAHeroPage"
import LeftRightImgCnt_V2 from "../components/left-right-image-content-v2"

const OurLogo = loadable(() => import("../components/ourlogo"))
const TestimonialFloatingV2 = loadable(() =>
  import("../components/testimonial_floating_v2")
)

const BeAHeroPageContent = ({ data, location }) => {
  // console.log("BeAHeroPageContent", data)
  return (
    <Layout location={location} darkTheme={true}>
      <Helmet>
        <title>{data.pagedata.meta_title || data.pagedata.title}</title>
        {data.pagedata.enable_no_follow_no_index === true && (
          <meta name="robots" content="noindex" data-react-helmet="true" />
        )}
        {data.pagedata.enable_no_follow_no_index === true && (
          <meta name="robots" content="nofollow" data-react-helmet="true" />
        )}
        <meta
          property="og:title"
          content={data.pagedata.meta_title || data.pagedata.title}
        />
        <meta
          property="twitter:title"
          content={data.pagedata.meta_title || data.pagedata.title}
        />
        <meta name="description" content={data.pagedata.meta_desc} />
        <meta property="og:description" content={data.pagedata.meta_desc} />
        <meta
          property="twitter:description"
          content={data.pagedata.meta_desc}
        />
      </Helmet>
      <div className="font-custom">
        {data.pagedata._rawPagebuildersection.map(section => {
          if (section._type === "hero_banner_be_a_hero") {
            return <HeroBannerBeAHeroPage key={section._key} {...section} />
          } else if (section._type === "leftrightcontentimagesection") {
            return (
              <div
                className={`section-gradient py-20 relative`}
                key={section._key}
              >
                <span className="section-border block absolute top-0 left-0 w-full"></span>
                <LeftRightImgCnt_V2
                  {...section}
                  applyGradientColorTheme={true}
                  location={location}
                />
                <span className="section-border block absolute bottom-0 left-0 w-full"></span>
              </div>
            )
          } else if (section._type === "ref_section_testimonials") {
            let l_section_info = data.section_testimonials.edges.find(
              kl => kl.node._id === section._ref
            )
            return (
              <section
                key={section._key}
                className="mt-40 md:mt-52"
                id="testimonial"
              >
                <TestimonialFloatingV2
                  // applyGradientColorTheme={true}
                  {...l_section_info.node._rawTestimonials}
                />
              </section>
            )
          } else if (section._type === "ref_section_get_started") {
            let l_section_info = data.section_get_started.edges.find(
              kl => kl.node._id === section._ref
            )
            return (
              <section key={section._key} id="get_started">
                <MiddleBannerV2
                  {...l_section_info.node._rawGetStarted}
                  showBottomBorder={true}
                  smallerTitle={true}
                />
              </section>
            )
          } else if (section._type === "ref_section_ourlogos") {
            let l_ourLogo_info = data.section_our_logos.edges.find(
              kl => kl.node._id === section._ref
            )

            return (
              <section key={section._key} id="our_logos">
                <OurLogo
                  key={section._key}
                  {...l_ourLogo_info.node._rawOurLogos}
                  removeSectionVerticalMargin={true}
                />
              </section>
            )
          } else {
            return null
          }
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBeAHeroPage($slug: String) {
    pagedata: sanityNewThemeBeAHeroPage(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      meta_title
      meta_desc
      id
      enable_no_follow_no_index
      _rawPagebuildersection
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
    section_our_logos: allSanitySectionOurlogos {
      edges {
        node {
          _id
          section_name
          _rawOurLogos
        }
      }
    }
    section_sign_up: allSanitySectionSignup {
      edges {
        node {
          _id
          section_name
          _rawSignup
        }
      }
    }
    section_testimonials: allSanitySectionTestimonials {
      edges {
        node {
          _id
          section_name
          _rawTestimonials
        }
      }
    }
    all_images: allSanityImageAsset {
      edges {
        node {
          url
          _id
        }
      }
    }
  }
`

export default BeAHeroPageContent
