/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
import { rudderslabTrackOnClick } from "../utils/common"

library.add(faClock)

const SingleRowContentVideoLibrary = ({ data, dataWeightWise }) => {
  //check the top future webinar from now
  let webinarObj = null
  webinarObj = data.edges.find(
    oo =>
      oo.node._rawVideoLibraryCategoryType.condition ===
        "live_option_with_form" && oo.node.webinar_dttm <= Date()
  )

  //if now found then llok for max weight webinar
  if (!webinarObj) {
    webinarObj = dataWeightWise.edges.find(oo => oo.node.weight !== null)
  }

  let category = ""
  let url_or_event_dttm = ""
  if (
    webinarObj.node._rawVideoLibraryCategoryType &&
    webinarObj.node._rawVideoLibraryCategoryType.condition ===
      "live_option_with_form"
  ) {
    category = "Live"
    url_or_event_dttm =
      webinarObj.node._rawVideoLibraryCategoryType.live_option_with_form
        .event_datetime
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
      <div className="flex lg:flex-row flex-col">
        <div class="px-4 md:px-12 pt-8 pb-4 lg:max-w-md">
          <Link to={webinarObj.node.slug.current}>
            <div className="uppercase text-sm text-indigo-700 font-bold text-blueNew-eastbay">
              {`${category} ${
                category === "Live" ? "| " + url_or_event_dttm : ""
              }`}
            </div>
            <h1 className="block  pt-6 text-2xl leading-tight font-bold text-blueNew-midnight">
              {webinarObj.node.title}
            </h1>
            <p className="text-base text-grayColor-custom">
              {webinarObj.node.shortdescription}
            </p>
            <div class="mt-2 w-full flex justify-between items-center pt-6">
              <a
                class="btn-primary-lg md:mr-4 md:mb-0 mb-4"
                href={webinarObj.node.slug.current}
                onClick={e =>
                  rudderslabTrackOnClick("button", webinarObj.node.title, e)
                }
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
          <Link  to={webinarObj.node.slug.current}>
            <img
              src={webinarObj.node.listing_image.asset.url}
              alt={webinarObj.node.title}
              // className="sm:h-full w-full sm:max-h-full lg:max-w-2xl  object-cover max-h-96"
              className="sm:h-full w-full object-cover"
              loading="eager"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleRowContentVideoLibrary
