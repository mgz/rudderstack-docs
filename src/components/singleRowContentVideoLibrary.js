/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

const SingleRowContentVideoLibrary = ({ data }) => {
  let category = ""
  let url_or_event_dttm = ""
  if (
    data.edges[0].node._rawVideoLibraryCategoryType &&
    data.edges[0].node._rawVideoLibraryCategoryType.condition === "live_option"
  ) {
    category = "Live"
    url_or_event_dttm =
      data.edges[0].node._rawVideoLibraryCategoryType.live_option
  } else if (
    data.edges[0].node._rawVideoLibraryCategoryType &&
    data.edges[0].node._rawVideoLibraryCategoryType.condition === "learn_option"
  ) {
    category = "Learn RudderStack"
    url_or_event_dttm =
      data.edges[0].node._rawVideoLibraryCategoryType.learn_option.url
  } else if (
    data.edges[0].node._rawVideoLibraryCategoryType &&
    data.edges[0].node._rawVideoLibraryCategoryType.condition ===
      "usecase_option"
  ) {
    category = "Use cases"
    url_or_event_dttm =
      data.edges[0].node._rawVideoLibraryCategoryType.usecase_option.url
  }

  return (
    <div
      key="0"
      className="w-full mx-auto bg-white rounded-3xl shadow-md overflow-hidden shadow-md"
    >
      <div className="sm:flex">
        <Link to={data.edges[0].node.slug.current}>
          <div class="px-4 md:px-12 pt-8 pb-4">
            <div className="uppercase text-sm text-indigo-700 font-bold text-blueNew-custom">
              {`${category} ${
                category === "Live" ? "| " + url_or_event_dttm : ""
              }`}
            </div>
            <h2 className="block  my-4 text-3xl lg:text-4xl leading-tight font-bold md:font-medium text-black">
              {data.edges[0].node.title}
            </h2>
            <p className="text-lg text-grayColor-custom">
              {data.edges[0].node.shortdescription}
            </p>
            <div class="mt-2 w-full flex justify-between items-center pt-6">
              <a
                class="btn-primary-lg md:mr-4 md:mb-0 mb-4"
                href={data.edges[0].node.slug.current}
              >
                {category === "Live" ? "Register Now" : "Watch Now"}
              </a>
              <div className="text-base text-grayColor-lighter-2x flex flex-row">
                <FontAwesomeIcon className="mr-2 m-auto" icon={faClock} />
                <p>{data.edges[0].node.duration}</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex-shrink-1 sm:flex-shrink-1">
          <Link to={data.edges[0].node.slug.current}>
            <img
              src={data.edges[0].node.listing_image.asset.url}
              alt={data.edges[0].node.title}
              className="sm:h-full lg:max-w-2xl object-cover"
              loading="eager"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleRowContentVideoLibrary
