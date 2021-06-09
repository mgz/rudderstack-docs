import React from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"
import Hero from "../components/hero"
import Tabs from "../components/tabs"
import LeftRightImgCnt from "../components/left-right-image-content"
import LatestBlog from "../components/latest-blog"
import MiddleBanner from "../components/middle-banner"
import RightSideHiglightedContent from "../components/rightSideHiglightedContent"
import FreeText from "../components/freeText"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import Layout from "../components/layout"

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

  const page = data.page || data.route.page
  // console.log("hari test", page._rawPagebuildersectionarray)
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
        case "tabsection":
          el = <Tabs key={c._key} {...c} />
          break
        case "leftrightcontentimagesection":
          el = (
            <div className="bg-gradiantsecondary 100%" key={c._key}>
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
        case "testimonialsection":
          el = <Testimonial key={c._key} applyGradientColorTheme={true} {...c} />
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
      <SEO
        title={pageTitle}
        // description={site.description}
        bodyAttr={{
          class: "leading-normal tracking-normal text-white gradient",
        }}
      />
      <div className="pt-10 font-custom">{content}</div>
    </Layout>
  )
}

export default Page
