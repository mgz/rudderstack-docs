import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import algoliasearch from "algoliasearch/lite"
import CustomSearchBox from "../components/customSearchBox"
// import CustomMenu from "../components/blogCategoryList"
import CaseStudiesMenu from "../components/caseStudiesCategoryList"
import SingleRowContentCaseStudy from '../components/singleRowContentCaseStrudy'
import { InstantSearch, Configure } from "react-instantsearch-dom"
import CustomHits from "../components/customHits"
import CustomCaseStudiesHits from "../components/customCaseStudiesHits"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../lib/font-awesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import BlogNotFound from "../components/blogNotFound"
import MiddleBanner from "../components/middle-banner"

const CaseStudies = ({ data }) => {
  // console.log('case-studies-full-data',data)
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
  )
  const [selectedPageNo, setSelectedPageNo] = useState(1)
  const [currentRefineText, setCurrentRefineText] = useState("")
  const [currentRefineHitsCount, setCurrentRefineHitsCount] = useState(0)
  return (
    <Layout>
      <div className="font-custom">
        <div className="max-w-6xl mx-auto flex flex-wrap flex-col px-4 mb-8 md:mb-28">
          <InstantSearch
            searchClient={searchClient}
            indexName={
              process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_case_studies"
            }
          >
            <Configure hitsPerPage={9} />
            
            <div className="my-10 w-full">
              <SingleRowContentCaseStudy data={data.casestudies} />
            </div>

            <div className="flex flex-row  flex-wrap-reverse mt-0 w-full">
              <div className="flex flex-col w-full lg:w-3/5 justify-center items-start text-center lg:text-left border-grey-500">
                <CaseStudiesMenu attribute="category" />
              </div>
              <div className="w-full lg:w-2/5 pt-0 md:pt-6 pb-3 text-center">
                <CustomSearchBox
                  pleaceholderText="Search case studies"
                  onRefineTextChange={val => {
                    setCurrentRefineText(val)
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap flex-col sm:flex-row">
              <div className={``}>
                <div id="hits-container">
                  <div data-reactroot>
                    <CustomCaseStudiesHits
                      onRefineHitsCountChange={val =>
                        setCurrentRefineHitsCount(val)
                      }
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${
                  currentRefineHitsCount > 0 ? "pt-12" : ""
                } m-auto`}
              >
                <div data-reactroot>
                  <Pagination
                    selectedPageNo={selectedPageNo}
                    onPageSelection={pn => setSelectedPageNo(pn)}
                  />
                </div>
              </div>
            </div>

            {currentRefineHitsCount === 0 && (
              <BlogNotFound SearchText={currentRefineText} />
            )}
          </InstantSearch>
          {currentRefineHitsCount > 0 && (
            <div className="hidden md:flex justify-end">
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
          )}
        </div>
        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0]} />
        </section>
      </div>
    </Layout>
  )
}

export default CaseStudies

export const pageQuery = graphql`
  query {
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
    casestudies: allSanityCaseStudies(sort: { fields: article_dttm, order: DESC }) {
      edges {
        node {
          id
          listing_image {
            asset {
              url
            }
          }
          title
          weight
          shortdescription
          category
          slug {
            current
          }
          article_dttm
          meta_desc
          meta_title
          _rawPagebuildersectionarray
        }
      }
    }
  }
`
