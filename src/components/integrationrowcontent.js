/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

const Integrationrowcontent = ({ hits }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 xl:gap-8">
        {hits.map((hit, index) => {
          if (index >= 0) {
            return (
              <Link
                to={hit.slug}
                key={index}
                className="w-full p-6 flex-col relative overflow-hidden rounded-2xl flex items-center justify-between bg-white content-box"
              >
                <div className="text-blueNew-eastbay text-sm text-indigo-700 font-bold mb-2.5">
                  {hit.integration_category}
                </div>
                <div className="sm:block h-24">
                  <img
                    src={hit.logoimage}
                    alt={hit.title}
                    className="object-scale-down h-full w-full"
                    loading="eager"
                  />
                </div>
                <h2 className="mt-2 leading-5 text-lg text-secondary font-bold text-center">
                  <Link to={hit.slug}>{hit.title}</Link>
                </h2>
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}
export default Integrationrowcontent
