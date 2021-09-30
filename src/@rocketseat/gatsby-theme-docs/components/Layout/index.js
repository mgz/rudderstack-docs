/* @jsx jsx */
import { useState, useRef, Fragment, useEffect } from "react"
import { jsx, css } from "@emotion/react"
import PropTypes from "prop-types"

import TableOfContents from "@rocketseat/gatsby-theme-docs/src/components/Docs/TOC"
import Sidebar from "../Sidebar"
import Header from "../Header"
import Overlay from "@rocketseat/gatsby-theme-docs/src/components/Overlay"
import { Container, Main, Children } from "./styles"
import DocsNavigation from "../../../../components/DocsNavigation"
import tailwindConfig from "../../../../../tailwind.config"

export default function Layout({
  children,
  disableTableOfContents,
  title,
  headings,
  description,
}) {
  const contentRef = useRef(null)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isTocOpen, setTocOpen] = useState(false)
  const disableTOC =
    disableTableOfContents === true || !headings || headings.length === 0

  useEffect(() => {
    
  }, [])

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <Fragment>
      <DocsNavigation
       handleMenuOpen={handleMenuOpen}
       isMenuOpen={isMenuOpen}
      />
      <Container>
        <div className="sidebarWrapper">
          <div
            className={`sidebarOverlay ${isMenuOpen ? "active" : "hidden"}`}
            onClick={() => handleMenuOpen()}
          ></div>
          <Sidebar isMenuOpen={isMenuOpen} />
        </div>
        <Main>
          {/* <Header handleMenuOpen={handleMenuOpen} /> */}
          {/* {title && (
            <h1
              css={css`
                display: none;
              `}
            >
              {title}
            </h1>
          )} */}
          <Children ref={contentRef}>
            {/* {title && (
              <h1
                css={css`
                  @media (max-width: 1200px) {
                    display: none;
                  }
                `}
              >
                {title}
              </h1>
            )} */}
            <div className="childrenWrapper">
              <span
                className="tocMob"
                css={css`
                  display: none;
                  @media (max-width: 1200px) {
                    display: block;
                  }
                `}
                onClick={() => setTocOpen(!isTocOpen)}
              >
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  height="1em"
                  width="1em"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke={
                    isTocOpen
                      ? tailwindConfig.theme.colors.blueNew.custom
                      : tailwindConfig.theme.colors.grayColor.docsText
                  }
                  className={`tocIcon ${isTocOpen ? "active" : ""}`}
                >
                  <g>
                    <line x1="21" y1="10" x2="7" y2="10"></line>
                    <line x1="21" y1="6" x2="3" y2="6"></line>
                    <line x1="21" y1="14" x2="3" y2="14"></line>
                    <line x1="21" y1="18" x2="7" y2="18"></line>
                  </g>
                </svg>
              </span>
              {isTocOpen && (
                <div class="mobTocWrapper">
                  <div
                  className={`tocOverlay ${isTocOpen ? "active" : "hidden"}`}
                  onClick={() => setTocOpen(false)}
                ></div>
                <div className="mobTocMenu">
                  <TableOfContents
                    headings={headings}
                    disableTOC={disableTOC}
                    contentRef={contentRef}
                  />
                </div>
                </div>
              )}
              {children}
            </div>
          </Children>
          <div
            css={css`
              @media (max-width: 1200px) {
                display: none;
              }
            `}
          >
            <TableOfContents
              headings={headings}
              disableTOC={disableTOC}
              contentRef={contentRef}
            />
          </div>
        </Main>
      </Container>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disableTableOfContents: PropTypes.bool,
  title: PropTypes.string,
  headings: PropTypes.array,
}

Layout.defaultProps = {
  disableTableOfContents: false,
  title: "",
  headings: null,
}
