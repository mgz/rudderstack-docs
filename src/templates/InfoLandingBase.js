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
      <React.Fragment>
        <div className="hero-section">
          <MainNavigation />
          <div className="landing-main">
            {
              data.sanityInfoLandingPage._rawPagebuildersection.map((node, index) => {
                switch(node._type){
                  case "left_right_content_with_image_and_bullet_items":
                    return(
                      <InfoLandingHero data={node} key={node._key} />
                    )
                  case "left_right_content_and_bullet_items":
                    return(
                      <InfoLandingAbout data={node} key={node._key} />
                    )
                  case "left_right_content_with_logos_and_testimonial":
                    return(
                      <InfoLandingTestimonial data={node} key={node._key} />
                    )
                  case "title_with_card_items":
                    return(
                      <InfoLandingKeyFeatures data={node} key={node._key} />
                    )
                  case "left_right_content_with_right_background_image":
                    return(
                      <InfoLandingUseCase data={node} key={node._key} />,
                      <InfoLeftContentRightImg />
                    )
                  default:
                    return null;
                }
              })
            }
            {
              middleBannerGetStarted[0].node._rawGetStarted._type === "middlebannersection" && (
                  <MiddleBanner {...middleBannerGetStarted[0].node._rawGetStarted} />
                )
            }
          </div>
          <footer
          className="hero-section px-4 sm:px-4 text-sm md:pt-14 w-full mx-auto"
          name={"footer-container"}
        >
          <div className="max-w-6xl mx-auto footer-menus-wrap">
            <div className="w-full pt-12 md:pt-6 font-custom inline-block">
              {footermenus.map((menu, i) => (
                <div
                  key={menu._key}
                  className={`w-1/2 md:w-1/6 float-left footer-menus ${
                    i === 2 ? "sm:w-full" : ""
                  }`}
                >
                  <div className="md:px-3">
                    <p className="uppercase text-white mb-4">
                      {menu.widget_menu_section_title}
                    </p>
                    <ul className="list-reset mb-6 text-footer">
                      <FooterNav navRef={menu.widget_section_menu._ref} />
                    </ul>
                  </div>
                </div>
              ))}
              {footerdescitems.map((item, i) => {
                return (
                  <div
                    key={item._key}
                    className="sm:w-1/2 md:w-1/4 md:float-left sm:clear-none clear-both pb-5 md:pb-0"
                  >
                    <div className={`${i === 0 ? "md:pr-3" : "md:px-3"}`}>
                      <p className="uppercase text-white mb-4">
                        {item.widget_desc_section_title}
                      </p>
                      <div className="text-footer">
                        <PortableText
                          blocks={item.widget_section_desc}
                          trackSectionHeader={"Footer Navigation"}
                        />
                        {i === 0 ? (
                          <a
                            href="https://rudderstack.com/join-rudderstack-slack-community"
                            target="_blank"
                            rel="noreferrer"
                            // className="w-full md:w-auto font-bold py-3 my-6 btn-primary-lg md:mb-0 text-sm lg:px-4 px-2 text-center lg:mr-4 rounded-lg mb-4 inline-block border leading-tight border-white font-custom"
                            className="w-full md:w-auto font-bold py-3 my-6 btn-secondary-lg md:mb-0 text-sm lg:px-4 px-2 text-center lg:mr-4 rounded-lg mb-4 inline-block border leading-tight border-white font-custom"
                            onClick={e =>
                              rudderslabTrackOnClick(
                                "footer-navigation",
                                "Footer Navigation Section",
                                e
                              )
                            }
                          >
                            {/* <img
                            src={SlackImg}
                            alt="slack image"
                            className="mr-2"
                          /> */}
                            <StaticImage
                              src="../images/Slack.svg"
                              placeholder="tracedSVG"
                              className="mr-2"
                              alt="Slack"
                            />
                            Join our Slack Community
                          </a>
                        ) : (
                          <Link
                            to={"/docs/"}
                            onClick={e =>
                              rudderslabTrackOnClick(
                                "footer-navigation",
                                "Footer Navigation Section",
                                e
                              )
                            }
                          >
                            <span
                              className="w-full md:w-auto font-bold py-3 my-6 btn-secondary-lg md:mb-0 text-sm md:px-8 lg:px-8 px-2 text-center md:mr-4 rounded-lg mb-4 inline-block border leading-tight border-white font-custom"
                              onClick={e =>
                                rudderslabTrackOnClick(
                                  "footer-navigation",
                                  "Footer Navigation Section",
                                  e
                                )
                              }
                            >
                              Go to Docs
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* <div className="max-w-6xl w-full flex mx-auto flex-wrap  px-3">

          </div> */}
          <div className="max-w-6xl pb-16 md:pb-32 py-4 w-full flex mx-auto flex-wrap  px-3">
            <div className="flex w-1/2 items-center text-white">
              <div className="flex flex-col">
              <div className="flex mb-5">
                {socialitems.map((socialitem, i) => (
                  <React.Fragment key={socialitem._key}>
                    {(() => {
                      let rss = /rss/
                      if (rss.test(socialitem.social_item_icon)) {
                        return (
                          <a
                            key={socialitem._key}
                            className="footer-social-icon bg-darkScheme-textPrimary"
                            rel="noreferrer noopener"
                            aria-label="This is an external link "
                            href={socialitem.social_item_link}
                            target="_blank"
                            onClick={e =>
                              rudderslabTrackOnClick(
                                "footer-navigation",
                                "Footer Navigation Section",
                                e
                              )
                            }
                          >
                            <FontAwesomeIcon icon={faRss} />
                          </a>
                        )
                      } else {
                        return (
                          <a
                            key={socialitem._key}
                            className="footer-social-icon bg-darkScheme-textPrimary"
                            rel="noreferrer noopener"
                            aria-label="This is an external link "
                            href={socialitem.social_item_link}
                            target="_blank"
                            onClick={e =>
                              rudderslabTrackOnClick(
                                "footer-navigation",
                                "Footer Navigation Section",
                                e
                              )
                            }
                          >
                            <FontAwesomeIcon
                              icon={
                                socialitem.social_item_icon === "twitter"
                                  ? faTwitter
                                  : faLinkedin
                              }
                            />
                          </a>
                        )
                      }
                    })()}
                  </React.Fragment>
                ))}
              </div>
              <img
                src={footerlogo}
                alt={data.allSanitySiteSettings.edges[0].node.sitetitle}
                width="148"
                height="16"
              />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2 items-end flex-col">
              <StaticImage src="../images/footerbadge.png" className="self-end relative right-7 mb-4" alt="SOC 2 TYPE 2" />
              <p className="text-footer w-full text-right">{copyright}</p>
            </div>
          </div>
        </footer>
        </div>
      </React.Fragment>
  )
}

export const query = graphql`
  query GetLandingPage($slug: String) {
    sanityInfoLandingPage(slug: {current: {eq: $slug}}) {
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

export default InfoLandingBase;
