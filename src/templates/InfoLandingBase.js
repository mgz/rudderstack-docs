import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InfoLandingHero from "../components/InfoLanding/InfoLandingHero/InfoLandingHero"
import InfoLandingAbout from "../components/InfoLanding/InfoLandingAbout/InfoLandingAbout"
import InfoLandingTestimonial from "../components/InfoLanding/InfoLandingTestimonial/InfoLandingTestimonial"
import InfoLandingKeyFeatures from "../components/InfoLanding/InfoLandingKeyFeatures/InfoLandingKeyFeatures"
import InfoLandingUseCase from "../components/InfoLanding/InfoLandingUseCase/InfoLandingUseCase"
import InfoLeftContentRightImg from "../components/InfoLanding/InfoLeftContentRightImg/InfoLeftContentRightImg"
import InfoLandingHeroWithForm from "../components/InfoLanding/InfoLandingHero/InfoLandingHeroWithForm"
import CompetitorCenterContent from "../components/InfoLanding/CompetitorCenterContent/CompetitorCenterContent"
import CompetitorComparison from "../components/InfoLanding/CompetitorComparison/CompetitorComparison"

import Layout from "../components/layout"

import MainNavigation from "../components/main-navigation"
import MiddleBanner from "../components/middle-banner"
import FooterNav from "../components/footer-nav"
import PortableText from "../components/portableText"

import { StaticImage } from "gatsby-plugin-image"
import { faRss } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { rudderslabTrackOnClick } from "../utils/common"
import clientConfig from "../../client-config"


import "../css/landingBase.css"

const InfoLandingBase = ({ data, location }) => {
  const copyright =
    data.allSanitySiteSettings.edges[0].node.footerblock.copy_right_text
  const footermenus =
    data.allSanitySiteSettings.edges[0].node.footerblock._rawFooterWidgetSection
  const footerdescitems =
    data.allSanitySiteSettings.edges[0].node.footerblock
      ._rawFooterDescWidgetSection
  const socialitems =
    data.allSanitySiteSettings.edges[0].node.socailmenublock
      ._rawSocialWidgetSection
  const footerlogo =
    data.allSanitySiteSettings.edges[0].node.footerblock.footer_logo.asset.url
  const middleBannerGetStarted = data.section_get_started.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.getStarted
  )

  return (
    <Layout darkTheme={true}>
      <Helmet>
        <title>{data.sanityInfoLandingPage.meta_title || data.sanityInfoLandingPage.title}</title>
      </Helmet>
        <div className="landing-main">
          {data.sanityInfoLandingPage._rawPagebuildersection.map(
            (node, index) => {
              switch (node._type) {
                case "left_right_content_with_image_and_bullet_items":
                  return  <CompetitorComparison />
                   {/* <CompetitorCenterContent /> */}
                  {/* <InfoLandingHeroWithForm />  */}
                 {/*  <InfoLandingHero data={node} key={node._key} /> */} 
                case "left_right_content_and_bullet_items":
                  return <InfoLandingAbout data={node} key={node._key} />
                case "left_right_content_with_logos_and_testimonial":
                  return <InfoLandingTestimonial data={node} key={node._key} />
                case "title_with_card_items":
                  return <InfoLandingKeyFeatures data={node} key={node._key} />
                case "left_right_content_with_right_background_image":
                  return <InfoLandingUseCase data={node} key={node._key} />
                default:
                  return null
              }
            }
          )}
          {middleBannerGetStarted[0].node._rawGetStarted._type ===
            "middlebannersection" && (
            <MiddleBanner {...middleBannerGetStarted[0].node._rawGetStarted} />
          )}
        </div>
    </Layout>
  )
}

export const query = graphql`
  query GetLandingPage($slug: String) {
    sanityInfoLandingPage(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      id
      meta_desc
      meta_title
      _rawPagebuildersection
      enable_no_follow_no_index
    }
    allSanitySiteSettings {
      edges {
        node {
          headerblock {
            hdrlogo {
              asset {
                url
              }
            }
            mainnavigation {
              menu_block {
                menu_item_link
                menu_item_title
                menu_target_link
                _rawSubMenuSection
              }
            }
          }
          sitetitle
          footerblock {
            _rawFooterDescWidgetSection
            _rawFooterWidgetSection
            footer_logo {
              asset {
                url
              }
            }
            copy_right_text
          }
          socailmenublock {
            _rawSocialWidgetSection
          }
          _rawWebsiteBannerSection
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

export default InfoLandingBase
