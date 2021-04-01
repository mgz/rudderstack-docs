/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"

import MainNavigation from "../components/main-navigation"

import "../css/site.css"

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
                  _rawSubMenuSection
                }
              }
            }
            sitetitle
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <>
        <header className="flex container mx-auto items-center">
          <div className="w-1/3">
            <img src={data.allSanitySiteSettings.edges[0].node.headerblock.hdrlogo.asset.fluid.src} alt={data.allSanitySiteSettings.edges[0].node.sitetitle} />
          </div>
          <div className="w-2/3">
            <MainNavigation />
          </div>
        </header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
