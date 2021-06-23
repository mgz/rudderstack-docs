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
  //check the top future webinar from now
  let webinarObj = null
  webinarObj = data.edges.find(
    oo =>
      oo.node._rawVideoLibraryCategoryType.condition === "live_option" &&
      oo.node.webinar_dttm <= Date()
  )

  //if now found then llok for recent webinar
  if (!webinarObj) {
    webinarObj = data.edges.find(
      oo => oo.node._rawVideoLibraryCategoryType.condition !== "live_option"
    )
  }

  let category = ""
  let url_or_event_dttm = ""
  if (
    webinarObj.node._rawVideoLibraryCategoryType &&
    webinarObj.node._rawVideoLibraryCategoryType.condition === "live_option"
  ) {
    category = "Live"
    url_or_event_dttm = webinarObj.node._rawVideoLibraryCategoryType.live_option
  } else if (
    webinarObj.node._rawVideoLibraryCategoryType &&
    webinarObj.node._rawVideoLibraryCategoryType.condition === "learn_option"
  ) {
    category = "Learn RudderStack"
    url_or_event_dttm =
      webinarObj.node._rawVideoLibraryCategoryType.learn_option.url
  } else if (
    webinarObj.node._rawVideoLibraryCategoryType &&
    webinarObj.node._rawVideoLibraryCategoryType.condition === "usecase_option"
  ) {
    category = "Use cases"
    url_or_event_dttm =
      webinarObj.node._rawVideoLibraryCategoryType.usecase_option.url
  }

  return (
    <div
      key="0"
      className="w-full mx-auto bg-white rounded-3xl overflow-hidden shadow-md"
    >
      <div className="sm:flex">
        <div class="px-4 md:px-12 pt-8 pb-4">
          <Link to={webinarObj.node.slug.current}>
            <div className="uppercase text-sm text-indigo-700 font-bold text-blueNew-eastbay">
              {`${category} ${
                category === "Live" ? "| " + url_or_event_dttm : ""
              }`}
            </div>
            <h2 className="block  my-4 text-2xl leading-tight font-bold text-blueNew-midnight">
              {webinarObj.node.title}
            </h2>
            <p className="text-base text-grayColor-custom">
              {webinarObj.node.shortdescription}
            </p>
            <div class="mt-2 w-full flex justify-between items-center pt-6">
              <a
                class="btn-primary-lg md:mr-4 md:mb-0 mb-4"
                href={webinarObj.node.slug.current}
              >
                {category === "Live" ? "Register Now" : "Watch Now"}
              </a>
              <div className="text-base text-grayColor-lighter-2x flex flex-row">
                <FontAwesomeIcon className="mr-2 m-auto" icon={faClock} />
                <p>{webinarObj.node.duration}</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex-shrink-1 sm:flex-shrink-1">
          <Link to={webinarObj.node.slug.current}>
            <img
              src={webinarObj.node.listing_image.asset.url}
              alt={webinarObj.node.title}
              className="sm:h-full lg:max-w-2xl object-cover max-h-96"
              // className="sm:h-full lg:max-w-2xl object-cover"
              loading="eager"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleRowContentVideoLibrary
