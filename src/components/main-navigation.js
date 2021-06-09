import React, { useState } from "react"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"

import { useStaticQuery, graphql } from "gatsby"
import MainNavigationMenuLink from "./MainNavigationMenuLink"
// import Logo from "../images/logo.png"

const MainNavigation = () => {
  const [isExpanded, toggleExpansion] = useState(false)
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
  return (
    <>
      <nav className="max-w-6xl mx-auto sm:px-4 md:px-3 flex items-center justify-between py-2 sm:py-2 flex-wrap">
        <div className="flex items-center sm:mr-6 w-32 md:w-1/7">
          <Link to="/" className="pl-4 sm:pl-0">
            <StaticImage
              src={"../images/rudderstack-logo-header.png"}
              alt={data.allSanitySiteSettings.edges[0].node.sitetitle}
              placeholder="tracedSVG"
            />
          </Link>
        </div>
        <div className="lg:hidden w-30 sm:w-3/5 text-right">
          {(() => {
            if (trybtn.btnexternallink === true) {
              return (
                <a href={trybtn.btnlink}>
                  <span className="btn-primary-sm inline-block px-3 sm:px-6">
                    {trybtn.btntext}
                    {""}
                  </span>
                </a>
              )
            } else {
              return (
                <Link to={trybtn.btnlink}>
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
          className={`menu lg:flex ${
            isExpanded ? `block` : `hidden`
          } p-4 justify-center items-center lg:items-center lg:w-auto w-full mt-2 lg:mt-0`}
        >
          <ul className="lg:flex-grow flex flex-col lg:flex-row list-none">
            {mainmenu.map((link, i) => (
              <MainNavigationMenuLink link={link} i={i} />
            ))}
          </ul>
          <div className="flex">
            <a href="https://app.rudderstack.com/login">
              <span className="inline-block lg:p-2 lg:py-1.5 mt-6 lg:mt-0 font-custom font-bold mr-2">
                Log in
              </span>
            </a>
            {(() => {
              if (trybtn.btnexternallink === true) {
                return (
                  <a href={trybtn.btnlink}>
                    <span className="border-transparent inline-block text-white  text-sm normal-case font-custom rounded-lg px-8 py-1.5 hidden lg:block btn-primary-lg ">
                      {trybtn.btntext}
                    </span>
                  </a>
                )
              } else {
                return (
                  <Link to={trybtn.btnlink}>
                    <span className="border-transparent inline-block text-white  text-sm normal-case font-custom rounded-lg px-8 py-1.5 hidden lg:block btn-primary-lg ">
                      {trybtn.btntext}
                    </span>
                  </Link>
                )
              }
            })()}
          </div>
        </div>
      </nav>
    </>
  )
}
export default MainNavigation
