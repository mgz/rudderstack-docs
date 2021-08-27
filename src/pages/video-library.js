import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import algoliasearch from "algoliasearch/lite"
import CustomSearchBox from "../components/customSearchBox"
import VideoLibraryMenu from "../components/videoLibraryCategoryList"
import { Helmet } from "react-helmet"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import CustomHits from "../components/customHits"
import CustomVideoLibraryHits from "../components/customHitsVideoLibrary"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
/* import "../lib/font-awesome" */
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import Subscription from "../components/Subscription"
import BlogNotFound from "../components/blogNotFound"
import MiddleBanner from "../components/middle-banner"
import SingleRowContentVideoLibrary from "../components/singleRowContentVideoLibrary"
import { useQueryParam, StringParam } from "use-query-params"
import clientConfig from "../../client-config"

const VideoLibraryPage = ({ data }) => {
  const lv_middlebannersection = data.section_get_started.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.getStarted
  )

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
  )
  // const { data } = props
  // const pageInfo = data.allSanityBlog.pageInfo
  const [selectedPageNo, setSelectedPageNo] = useState(1)
  const [currentRefineText, setCurrentRefineText] = useState("")
  const [currentRefineHitsCount, setCurrentRefineHitsCount] = useState(0)
  const [category, setCategory] = useQueryParam("category", StringParam)

  return (
    <Layout>
      <Helmet>
        <title>{`RudderStack Video Library | Rudderstack.com`}</title>
        <meta
          property="og:title"
          content={`RudderStack Video Library | Rudderstack.com`}
        />
        <meta
          property="twitter:title"
          content={`RudderStack Video Library | Rudderstack.com`}
        />
        <meta
          name="description"
          content={`Watch videos from Team RudderStack to learn how to use our tool and uncover new use cases. Click for more.`}
        />
        <meta
          property="og:description"
          content={`Watch videos from Team RudderStack to learn how to use our tool and uncover new use cases. Click for more.`}
        />
        <meta
          property="twitter:description"
          content={`Watch videos from Team RudderStack to learn how to use our tool and uncover new use cases. Click for more.`}
        />
      </Helmet>
      <div className="font-custom">
        <div className="max-w-6xl mx-auto flex flex-wrap flex-col px-4">
          <InstantSearch
            searchClient={searchClient}
            indexName={
              process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_video_library"
            }
          >
            <Configure />
            <div className="my-10 w-full">
              <SingleRowContentVideoLibrary
                data={data.videolibrary}
                dataWeightWise={data.videolibraryWeightWise}
              />
            </div>

            <div className="flex flex-row  flex-wrap-reverse mt-0 w-full">
              <div className="flex flex-col w-full lg:w-3/5 justify-center items-start text-center lg:text-left border-grey-500">
                <VideoLibraryMenu
                  attribute="category"
                  defaultRefinement={category}
                />
              </div>
              <div className="w-full lg:w-2/5 pt-0 md:pt-6 pb-3 text-center">
                <CustomSearchBox
                  pleaceholderText="Search webinar"
                  onRefineTextChange={val => {
                    setCurrentRefineText(val)
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap flex-col sm:flex-row">
              <div className="">
                <div id="hits-container">
                  <div data-reactroot>
                    <CustomVideoLibraryHits
                      onRefineHitsCountChange={val =>
                        setCurrentRefineHitsCount(val)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {currentRefineHitsCount === 0 && (
              <BlogNotFound SearchText={currentRefineText} />
            )}
          </InstantSearch>
        </div>
        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0].node._rawGetStarted} />
        </section>
      </div>
    </Layout>
  )
}

export default VideoLibraryPage

export const pageQuery = graphql`
  query {
    section_get_started: allSanitySectionGetStarted {
      edges {
        node {
          _id
          section_name
          _rawGetStarted
        }
      }
    }
    videolibrary: allSanityVideolibrary(
      sort: { fields: webinar_dttm, order: ASC }
    ) {
      edges {
        node {
          _rawVideoLibraryCategoryType
          id
          listing_image {
            asset {
              url
            }
          }
          slug {
            current
          }
          spekers {
            author_name
            author_desc
          }
          weight
          duration
          shortdescription
          title
          webinar_dttm
        }
      }
    }

    videolibraryWeightWise: allSanityVideolibrary(
      sort: { fields: weight, order: DESC }
    ) {
      edges {
        node {
          _rawVideoLibraryCategoryType
          id
          listing_image {
            asset {
              url
            }
          }
          slug {
            current
          }
          spekers {
            author_name
            author_desc
          }
          weight
          duration
          shortdescription
          title
          webinar_dttm
        }
      }
    }
  }
`
