import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { connectSearchBox } from "react-instantsearch-dom"
import Pagination from "../components/pagination"
import algoliasearch from "algoliasearch/lite"
import CustomSearchBox from "../components/customSearchBox"
import CustomMenu from "../components/blogCategoryList"
import {
  InstantSearch,
  Configure,
  SortBy,
  Menu,
  RefinementList,
} from "react-instantsearch-dom"
import CustomHits from "../components/customHits"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../lib/font-awesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import Subscription from "../components/Subscription"
import BlogNotFound from "../components/blogNotFound"

const Blog_new = props => {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
  )
  const { data } = props
  const pageInfo = data.allSanityBlog.pageInfo
  const [selectedPageNo, setSelectedPageNo] = useState(1)
  const [currentRefineText, setCurrentRefineText] = useState("")
  const [currentRefineHitsCount, setCurrentRefineHitsCount] = useState(0)

  return (
    <Layout>
      <div className="font-custom">
        <div className="max-w-6xl mx-auto flex flex-wrap flex-col px-4">
          <InstantSearch
            searchClient={searchClient}
            indexName={process.env.GATSBY_ALGOLIA_BLOGINDEX}
          >
            <Configure hitsPerPage={13} />
            <div className="flex flex-row flex-wrap mt-32">
              <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left border-grey-500">
                <CustomMenu attribute="blog_category" />
              </div>
              <div className="w-full md:w-2/5 pt-6 pb-3 text-center">
                <CustomSearchBox
                  onRefineTextChange={val => setCurrentRefineText(val)}
                />
              </div>
            </div>

            <div className="flex flex-wrap flex-col sm:flex-row">
              <div className="mt-24">
                <div id="hits-container">
                  <div data-reactroot>
                    <CustomHits
                      onRefineHitsCountChange={val =>
                        setCurrentRefineHitsCount(val)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="pt-12 m-auto">
                <div data-reactroot>
                  <Pagination
                    selectedPageNo={selectedPageNo}
                    onPageSelection={pn => setSelectedPageNo(pn)}
                  />
                </div>
              </div>
            </div>
            {currentRefineHitsCount === 0 && (
              <div className="">
                <BlogNotFound SearchText={currentRefineText} />
              </div>
            )}
          </InstantSearch>
          <div className="flex justify-end">
            <div
              className="text-sm font-bold cursor-pointer -mt-2"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }}
            >
              Back to top&nbsp;&nbsp;
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
          <Subscription />
        </div>
      </div>
    </Layout>
  )
}

export default Blog_new

export const pageQuery = graphql`
  query {
    allSanityBlog(limit: 13, sort: { fields: [weight], order: [ASC] }) {
      pageInfo {
        currentPage
        itemCount
        hasPreviousPage
        hasNextPage
        pageCount
        perPage
        totalCount
      }
    }
  }
`
