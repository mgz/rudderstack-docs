import React, { useEffect, useState } from "react"
import RsLogo from "../images/rudderstack-logo-v2.svg"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import DocsSearchBox from "./docsSearchBox"
import { graphql, StaticQuery } from "gatsby"
import { TempButton } from "./tempDataCheck"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
)

const DocsNavigation = () => {
  /* let { data } = useStaticQuery(
    graphql`
      query {
        allMdx {
          edges {
            node {
              slug
              tableOfContents
            }
          }
        }
      }
    `
  ) */

  const [currentRefineText, setCurrentRefineText] = useState("")

  return (
    <div className="headerNav">
      <StaticQuery
        query={graphql`
          query {
            allMdx {
              edges {
                node {
                  slug
                  tableOfContents
                }
              }
            }
          }
        `}
        render={data => {
          /* console.log("Page Data 2", data) */
        }}
      />
      <div className="headerContainer">
        <div className="docsLogo flex items-center">
          <a href="/">
            <img src={RsLogo} />
          </a>
        </div>
        <nav className="docsNav">
          <ul className="docsNavList">
            <li>
              <a href="/docs">Home</a>
            </li>
            <li>
              <a href="https://github.com/rudderlabs/rudder-server">Github</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="https://app.rudderstack.com/signup?type=freetrial">
                Try for Free
              </a>
            </li>
            {/* <li>
              <TempButton />
            </li> */}
          </ul>
        </nav>
        <div className="docsSearch">
          <span className="docsSearchIcon">
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
              stroke="currentColor"
              className="icon-7f6730be--text-3f89f380"
            >
              <g>
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </g>
            </svg>
          </span>
          {/* <input type="text" placeholder="Search.." className="docsSearchbar" /> */}
          <InstantSearch
            searchClient={searchClient}
            indexName={process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_docs"}
          >
            <Configure hitsPerPage={10} />
            <div>
              <DocsSearchBox
                onRefineTextChange={val => {
                  setCurrentRefineText(val)
                }}
              />
            </div>
          </InstantSearch>
        </div>
      </div>
    </div>
  )
}

export default DocsNavigation
