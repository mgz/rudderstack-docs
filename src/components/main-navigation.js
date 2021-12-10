import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"

import { useStaticQuery, graphql } from "gatsby"
import MainNavigationMenuLink from "./MainNavigationMenuLink"
import { rudderslabTrackOnClick } from "../utils/common"
import { isMobile, isTablet, isBrowser } from "react-device-detect"
// import Logo from "../images/logo.png"

const MainNavigation = props => {
  const [isExpanded, toggleExpansion] = useState(false)
  const [currMenuIndex, setCurrMenuIndex] = useState(null)

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
                  menu_item_externallink
                  menu_item_link
                  menu_item_title
                  menu_target_link
                  _rawSubMenuSection
                }
              }
              try_free_btn {
                btnlink
                btntext
                btnexternallink
              }
            }
            sitetitle
          }
        }
      }
    }
  `)
  const mainmenu =
    data.allSanitySiteSettings.edges[0].node.headerblock.mainnavigation
      .menu_block
  const trybtn =
    data.allSanitySiteSettings.edges[0].node.headerblock.try_free_btn

  // console.log("props.diableGradient", props.diableGradient)
  return (
    <>
      <nav
        name={"header-container"}
        className={`gradient-${
          props.diableGradient ? "disable" : "enable"
        } sticky top-0 z-40 header-container`}
      >
        <div className="max-w-6xl mx-auto sm:px-4 md:w-full md:px-4 flex items-center justify-between py-2 sm:py-2 lg:pb-0 flex-wrap header-wrapper">
          <div className="flex items-center sm:mr-6 w-36">
            <Link
              to="/"
              className="pl-4 sm:pl-0 pb-0 md:pb-3 md:pt-3 main-logo"
              rel="noopener noreferrer"
            >
              <StaticImage
                // src={"../images/rudderstack-logo-v2.svg"}
                src={"../images/rudderstack-logo-white.png"}
                alt={data.allSanitySiteSettings.edges[0].node.sitetitle}
                placeholder="tracedSVG"
                width={306}
                height={34}
              />
            </Link>
          </div>
          <div className="lg:hidden w-30 sm:w-3/5 text-right">
            {(() => {
              if (trybtn.btnexternallink === true) {
                return (
                  <a
                    href={trybtn.btnlink}
                    onClick={e =>
                      rudderslabTrackOnClick(
                        "navigation",
                        "header navigation",
                        e
                      )
                    }
                  >
                    <span className="btn-primary-sm border border-darkScheme-textPrimary bg-transparent text-darkScheme-textPrimary inline-block hover:bg-darkScheme-textPrimary hover:text-darkScheme-textBlack">
                      {trybtn.btntext}
                    </span>
                  </a>
                )
              } else {
                return (
                  <Link
                    to={trybtn.btnlink}
                    onClick={e =>
                      rudderslabTrackOnClick(
                        "navigation",
                        "header navigation",
                        e
                      )
                    }
                  >
                    <span className="btn-primary-sm inline-block p-4">
                      {trybtn.btntext}
                    </span>
                  </Link>
                )
              }
            })()}
          </div>
          <div className="block lg:hidden pr-4 sm:pr-0">
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              className="flex items-center px-3 py-2 text-main border-teal-400 hover:text-white hover:border-white max-h-8 focus:outline-none"
            >
              <div className="mobile-menu">
                {!isExpanded ? (
                  <StaticImage
                    src="../images/navmenu_open.svg"
                    alt="Toggle"
                    className="max-h-6"
                    placeholder="tracedSVG"
                  />
                ) : (
                  <StaticImage
                    src="../images/navmenu_close.svg"
                    alt="Toggle"
                    className="w-6 h-6"
                    placeholder="tracedSVG"
                  />
                )}
              </div>
            </button>
          </div>
          <div
            id="main-nav-menu"
            className={`menu lg:flex ${
              isExpanded ? `block` : `hidden`
            } pl-4 lg:pl-16 pr-4 justify-center items-center lg:items-center lg:w-auto w-full mt-2 lg:mt-0 lg:flex-1  lg:bg-transparent  lg:text-black-custom`}
          >
            <ul className="lg:flex-grow flex flex-col lg:flex-row list-none mt-4">
              {mainmenu.map((link, i) => (
                <MainNavigationMenuLink
                  key={i}
                  link={link}
                  i={i}
                  currMenuIndex={currMenuIndex}
                  onMainMenuClick={idx => {
                    if (!isBrowser) {
                      setCurrMenuIndex(i === currMenuIndex ? null : idx)
                    }
                  }}
                />
              ))}
            </ul>
            <div className="flex">
              <a
                href="https://app.rudderstack.com/login"
                onClick={e =>
                  rudderslabTrackOnClick("navigation", "header navigation", e)
                }
              >
                <span className="inline-block lg:p-2 lg:py-1.5 mt-6 lg:mt-0 font-custom font-bold mr-2 text-white">
                  Log in
                </span>
              </a>
              {(() => {
                if (trybtn.btnexternallink === true) {
                  return (
                    <a
                      href={trybtn.btnlink}
                      onClick={e =>
                        rudderslabTrackOnClick(
                          "navigation",
                          "header navigation",
                          e
                        )
                      }
                    >
                      <span className="border border-darkScheme-textPrimary bg-transparent text-darkScheme-textPrimary  text-sm normal-case font-custom rounded-lg px-8 py-1.5 hidden lg:block btn-primary-lg hover:bg-darkScheme-textPrimary hover:text-darkScheme-textBlack">
                        {trybtn.btntext}
                      </span>
                    </a>
                  )
                } else {
                  return (
                    <Link
                      to={trybtn.btnlink}
                      onClick={e =>
                        rudderslabTrackOnClick(
                          "navigation",
                          "header navigation",
                          e
                        )
                      }
                    >
                      <span className="border-transparent inline-block text-white  text-sm normal-case font-custom rounded-lg px-8 py-1.5 hidden lg:block btn-primary-lg ">
                        {trybtn.btntext}
                      </span>
                    </Link>
                  )
                }
              })()}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default MainNavigation
