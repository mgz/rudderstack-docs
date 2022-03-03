/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import "../lib/font-awesome"
import Link from "gatsby-link"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import MainNavigation from "../components/main-navigation"
import FooterNav from "../components/footer-nav"
import PortableText from "../components/portableText"
import { StaticImage } from "gatsby-plugin-image"
import CookiesConsent from "./cookiesConsent"
import WebisteBanner from "./websiteBanner"
import ScriptContentHead from "./ScriptContentHead"
import ScriptContentBody from "./ScriptContentBody"

import { rudderslabTrackOnClick } from "../utils/common"

import "../css/tailwind.css"
import { faRss } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Layout = ({ location, showExplicitGradient, darkTheme, children }) => {
  const data = useStaticQuery(graphql`
    {
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
            _rawWebsiteScripts
          }
        }
      }
      allSanityWebsiteBannerDoc {
        edges {
          node {
            _id
            _rawWebsiteBanner
          }
        }
      }
    }
  `)
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

  // let diableGradient = false
  /* Disabling gradient for pages */
  const [diableGradient] = React.useState(
    location &&
      (location.pathname.startsWith("/404/") ||
        location.pathname.startsWith("/blog/") ||
        location.pathname.startsWith("/tutorials/") ||
        location.pathname.startsWith("/privacy-policy/") ||
        location.pathname.startsWith("/privacy-policy-legal/") ||
        location.pathname.startsWith("/cookie-policy/") ||
        location.pathname.startsWith("/product/") ||
        location.pathname.startsWith("/customers/") ||
        location.pathname.startsWith("/pricing/"))
      ? true
      : false
  )
  // if (
  //   location &&
  //   (location.pathname.startsWith("/product/") ||
  //     location.pathname.startsWith("/request-demo") ||
  //     location.pathname.startsWith("/enterprise-quote") ||
  //     location.pathname.startsWith("/404") ||
  //     location.pathname.startsWith("/rudderstack-vs") ||
  //     location.pathname.startsWith("/cloud") ||
  //     (location.pathname.startsWith("/video-library/") &&
  //       showExplicitGradient === false) ||
  //     location.pathname.startsWith("/blog/"))
  // ) {
  //   setDiableGradient(true)

  //   // diableGradient = true
  // }
  // console.log("allSanitySiteSettings", data.allSanitySiteSettings)
  return (
    <React.Fragment>
      {data.allSanitySiteSettings.edges[0].node._rawWebsiteBannerSection &&
        data.allSanitySiteSettings.edges[0].node._rawWebsiteBannerSection.banner_contents.map(
          banner => {
            let webBanner = data.allSanityWebsiteBannerDoc.edges.find(
              row => row.node._id === banner._ref
            )
            return (
              <WebisteBanner
                key={banner._key}
                _key={banner._key}
                currentSlug={location ? location.pathname : ""}
                {...webBanner.node._rawWebsiteBanner}
              />
            )
          }
        )}

      {data.allSanitySiteSettings.edges[0].node._rawWebsiteScripts.map(
        script => {
          return (
            <ScriptContentHead
              key={script._key}
              currentSlug={location ? location.pathname : ""}
              {...script}
            />
          )
        }
      )}

      <div
        id="main-container"
        className={
          darkTheme === true ||
          (location && location.pathname === "/") ||
          (location && location.pathname.startsWith("/product/"))
            ? "hero-section"
            : "gradient-disable"
        }
      >
        <Helmet>
          {/* <script src={withPrefix("script.js")} type="text/javascript" />
        <script src={withPrefix("script2.js")} type="text/javascript" /> */}
        <meta name="google-site-verification" content="zUWXWnpUbNfAJB-jC1cJEwgO1-wXVdrRkwrL9wN_u_s" />
           <script src={withPrefix("zoomInfo.js")} type="text/javascript" />
          {/*<script
            defer
            type="text/javascript"
            src="https://api.huckabuy.com/s/d3d3LnJ1ZGRlcnN0YWNrLmNvbQ==/install.js" 
          ></script>*/}
          <meta property="og:image" content="../images/rudderstack_thumbnail.png"/>
        </Helmet>

        <MainNavigation diableGradient={diableGradient} />
        <main>{children}</main>
        <CookiesConsent />
        <footer
          className="hero-section px-4 sm:px-4 text-sm md:pt-14 w-full mx-auto"
          name={"footer-container"}
        >
          {data.allSanitySiteSettings.edges[0].node._rawWebsiteScripts.map(
            script => {
              return (
                <ScriptContentBody
                  key={script._key}
                  currentSlug={location ? location.pathname : ""}
                  {...script}
                />
              )
            }
          )}
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
            <div>
              <noscript>
                <img
                  height="1"
                  width="1"
                  className="hidden"
                  src="https://ws.zoominfo.com/pixel/61ba5bf54261e1001b0105cc"
                />
              </noscript>
            </div>

            {/* <noscript>
              <img
                src="https://ws.zoominfo.com/pixel/61ba5bf54261e1001b0105cc"
                width="1"
                height="1"
                style="display: block;"
              />
            </noscript> */}
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
              <StaticImage
                src="../images/footerbadge.png"
                className="self-end relative right-7 mb-4"
                alt="SOC 2 TYPE 2"
              />
              <p className="text-footer w-full text-right">{copyright}</p>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
