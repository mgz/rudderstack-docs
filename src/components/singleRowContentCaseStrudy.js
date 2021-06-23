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

const SingleRowContentCaseStudy = ({ data }) => {
  //check for latest case study
  let caseStudyObj = null
  caseStudyObj = data.edges.find(oo => oo.node.article_dttm !== null)

  //if now found then pick any one
  if (!caseStudyObj) {
    caseStudyObj = data.edges[0]
  }

  // console.log("sssss", caseStudyObj)
  return (
    <div
      key="0"
      className="w-full mx-auto bg-white rounded-3xl overflow-hidden shadow-md"
    >
      <div className="sm:flex">
        <div class="px-4 md:px-12 pt-8 pb-4">
          <Link to={caseStudyObj.node.slug.current}>
            <div className="uppercase text-sm text-indigo-700 font-bold text-blueNew-eastbay">
              {`${caseStudyObj.node.category}`}
            </div>
            <h2 className="block  my-4 text-2xl md:text-3xl leading-tight font-bold md:font-medium text-black">
              {caseStudyObj.node.title}
            </h2>
            <p className="text-lg text-grayColor-custom">
              {caseStudyObj.node.shortdescription}
            </p>
            {/* <div class="mt-2 w-full flex justify-between items-center pt-6">
              <a
                class="btn-primary-lg md:mr-4 md:mb-0 mb-4 bg-dark"
                href={caseStudyObj.node.slug.current}
              >
                {category === "Live" ? "Register Now" : "Watch Now"}
              </a>
            
            </div> */}
          </Link>
        </div>

        <div className="flex-shrink-1 sm:flex-shrink-1">
          <Link to={caseStudyObj.node.slug.current}>
            <img
              src={caseStudyObj.node.listing_image.asset.url}
              alt={caseStudyObj.node.title}
              // className="sm:h-full lg:max-w-2xl object-cover max-h-96"
              className="sm:h-full lg:max-w-2xl object-cover"
              loading="eager"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleRowContentCaseStudy
