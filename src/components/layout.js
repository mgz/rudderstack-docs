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
import "../lib/font-awesome"

import { useStaticQuery, graphql } from "gatsby"

import MainNavigation from "../components/main-navigation"
import FooterNav from "../components/footer-nav"
import PortableText from "../components/portableText"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allSanitySiteSettings {
        edges {
          node {
            headerblock {
              hdrlogo {
                asset {
                  fluid {
                    src
                  }
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
                  fluid {
                    src
                  }
                }
              }
              copy_right_text
            }
            socailmenublock {
              _rawSocialWidgetSection
            }
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
    data.allSanitySiteSettings.edges[0].node.footerblock.footer_logo.asset.fluid
      .src
  return (
    <>
      <MainNavigation />
      <main>{children}</main>

      <footer className=" bg-black px-4 sm:px-4 text-sm bg-black-custom md:pt-0">
        <div className="max-w-6xl mx-auto footer-menus-wrap">
          <div className="w-full py-6 font-custom inline-block">
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
                      <PortableText blocks={item.widget_section_desc} />
                      {i === 0 ? (
                        <a
                          href="https://resources.rudderstack.com/join-rudderstack-slack"
                          target="_blank"
                          rel="noreferrer"
                          // className="w-full md:w-auto font-bold py-3 my-6 btn-primary-lg md:mb-0 text-sm lg:px-4 px-2 text-center lg:mr-4 rounded-lg mb-4 inline-block border leading-tight border-white font-custom"
                          className="w-full md:w-auto font-bold py-3 my-6 bg-whiteColor-custom md:bg-black-custom text-black-custom md:text-whiteColor-custom md:hover:bg-blueNew-custom md:mb-0 text-sm lg:px-4 px-2 text-center lg:mr-4 rounded-lg mb-4 inline-block border leading-tight border-white font-custom"
                        >
                          <StaticImage
                            src="../images/Slack.svg"
                            className="mr-2"
                          />
                          Join our Slack Community
                        </a>
                      ) : (
                        <a
                          href="https://docs.rudderstack.com"
                          target="_blank"
                          rel="noreferrer"
                          // className="w-full md:w-auto font-bold py-3 my-6 btn-primary-lg md:mb-0 text-sm md:px-8 lg:px-8 px-2 text-center md:mr-4 rounded-lg mb-4 inline-block border leading-tight border-white font-custom"
                          className="w-full md:w-auto font-bold py-3 my-6 bg-whiteColor-custom md:bg-black-custom text-black-custom md:text-whiteColor-custom md:hover:bg-blueNew-custom md:mb-0 text-sm md:px-8 lg:px-8 px-2 text-center md:mr-4 rounded-lg mb-4 inline-block border leading-tight border-white font-custom"
                        >
                          Go to docs
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="max-w-6xl w-full flex mx-auto flex-wrap  px-3">
          <div className="flex text-white">
            {socialitems.map((socialitem, i) => (
              <>
                {(() => {
                  let rss = /rss/
                  if (rss.test(socialitem.social_item_icon)) {
                    return (
                      <a
                        key={socialitem._key}
                        className="icons pr-6 md:pr-4"
                        href={socialitem.social_item_link}
                      >
                        <FontAwesomeIcon icon={socialitem.social_item_icon} />
                      </a>
                    )
                  } else {
                    return (
                      <a
                        key={socialitem._key}
                        className="icons pr-6 md:pr-4"
                        href={socialitem.social_item_link}
                      >
                        <FontAwesomeIcon
                          icon={["fab", socialitem.social_item_icon]}
                        />
                      </a>
                    )
                  }
                })()}
              </>
            ))}
          </div>
        </div>
        <div className="max-w-6xl pb-16 md:pb-32 py-4 w-full flex mx-auto flex-wrap  px-3">
          <div className="flex w-1/2 items-center text-white">
            <img
              src={footerlogo}
              alt={data.allSanitySiteSettings.edges[0].node.sitetitle}
            />
          </div>
          <div className="flex flex-wrap w-1/2 items-end">
            <p className="text-footer w-full text-right">{copyright}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
