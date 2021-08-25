import React from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"
import { Helmet } from "react-helmet"
import Hero from "../components/hero"
import Tabs from "../components/tabs"
import LeftRightImgCnt from "../components/left-right-image-content"
import LatestBlog from "../components/latest-blog"
import MiddleBanner from "../components/middle-banner"
import RightSideHiglightedContent from "../components/rightSideHiglightedContent"
import FreeText from "../components/freeText"
import GraphQLErrorList from "../components/graphql-error-list"
import ThreeCardsWithTitleLeftAligned from "../components/threeCardsWithTitleLeftAligned"
import CenteredAlignedTitleWithYoutube from "../components/centeredAlignedTitleWithYoutube"

import SEO from "../components/seo"
import Layout from "../components/layout"

// const Hero = loadable(() => import("../components/hero"))
// const Tabs = loadable(() => import("../components/tabs"))
// const LeftRightImgCnt = loadable(() =>
//   import("../components/left-right-image-content")
// )
// const LatestBlog = loadable(() => import("../components/latest-blog"))
// const MiddleBanner = loadable(() => import("../components/middle-banner"))
// const RightSideHiglightedContent = loadable(() =>
//   import("../components/rightSideHiglightedContent")
// )
// const FreeText = loadable(() => import("../components/freeText"))
// const GraphQLErrorList = loadable(() =>
//   import("../components/graphql-error-list")
// )
// const SEO = loadable(() => import("../components/seo"))
// const Layout = loadable(() => import("../components/layout"))

const OurLogo = loadable(() => import("../components/ourlogo"))
const Testimonial = loadable(() => import("../components/testimonial"))

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityPage(id: { eq: $id }) {
      slug {
        current
      }
      title
    }
  }
`

const Page = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout location={props.location}>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  console.log("all data page", data)
  let l_section_info
  const page = data.page || data.route.page
  const content = (page._rawPagebuildersectionarray || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null
      switch (c._type) {
        // case "pricing":
        //   el = <LeftRightImgCnt key={c._key} {...c} />;
        //   break;
        // case "infoRows":
        //   el = <InfoRows key={c._key} {...c} />;
        //   break;
        case "herobanner":
          el = <Hero key={c._key} {...c} />
          break
        case "ourlogoblock":
          el = <OurLogo key={c._key} {...c} />
          break
        case "ref_section_ourlogos":
          l_section_info = data.section_our_logos.edges.find(
            kl => kl.node._id === c._ref
          )

          el = <OurLogo key={c._key} {...l_section_info.node._rawOurLogos} />
          break
        case "tabsection":
          el = <Tabs key={c._key} {...c} />
          break
        case "leftrightcontentimagesection":
          el = (
            <div className="bg-blueNew-midnight_v2 100% pt-32" key={c._key}>
              <LeftRightImgCnt applyGradientColorTheme={true} {...c} />{" "}
            </div>
          )
          break
        case "latestblogsection":
          el = <LatestBlog key={c._key} {...c} />
          break
        case "middlebannersection":
          el = <MiddleBanner key={c._key} {...c} />
          break
        case "ref_section_get_started":
          l_section_info = data.section_get_started.edges.find(
            kl => kl.node._id === c._ref
          )

          el = (
            <MiddleBanner
              key={c._key}
              {...l_section_info.node._rawGetStarted}
            />
          )
          break
        case "testimonialsection":
          el = (
            <Testimonial key={c._key} applyGradientColorTheme={true} {...c} />
          )
          break
        case "three_card_with_title":
          el = <ThreeCardsWithTitleLeftAligned key={c._key} {...c} />
          break
        case "centered_aligned_title_with_youtube":
          el = <CenteredAlignedTitleWithYoutube key={c._key} {...c} />
          break
        case "ref_section_testimonials":
          l_section_info = data.section_testimonials.edges.find(
            kl => kl.node._id === c._ref
          )

          el = (
            <Testimonial
              key={c._key}
              applyGradientColorTheme={false}
              {...l_section_info.node._rawTestimonials}
            />
          )
          break
        case "righthighlightedsection":
          el = <RightSideHiglightedContent key={c._key} {...c} />
          break
        case "freetextwithrightimage":
          el = <FreeText key={c._key} {...c} />
          break
        // case "uiComponentRef":
        //   switch (c.name) {
        //     case "topWave":
        //       el = <TopWave />;
        //       break;
        //     case "bottomWave":
        //       el = <BottomWave />;
        //       break;
        //     default:
        //       break;
        //   }
        //   break;
        default:
          el = null
      }
      return el
    })

  //   const gradient = {
  //     from: (site.primaryColor && site.primaryColor.hex) || "#d53369",
  //     to: (site.secondaryColor && site.secondaryColor.hex) || "#daae51"
  //   };

  //   const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = page.title

  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{data.page.meta_title || data.page.title}</title>
        <meta
          property="og:title"
          content={data.page.meta_title || data.page.title}
        />
        <meta
          property="twitter:title"
          content={data.page.meta_title || data.page.title}
        />
        <meta name="description" content={data.page.meta_desc} />
        <meta property="og:description" content={data.page.meta_desc} />
        <meta property="twitter:description" content={data.page.meta_desc} />
        {/* <meta property="og:type" content="article" /> */}
      </Helmet>

      {/* <SEO
        title={pageTitle}
        // description={site.description}
        bodyAttr={{
          class: "leading-normal tracking-normal text-white gradient",
        }}
      /> */}
      <div className="pt-0 font-custom">{content}</div>
    </Layout>
  )
}

export default Page
