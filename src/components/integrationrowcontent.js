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
      {/* <h2 className="text-2xl font-bold mb-2">Integration</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 xl:gap-8">
        {hits.map((hit, index) => {
          if (index >= 0) {
            return (
              <section key={index} className="flex">
                <div
                  className="w-full p-6 relative overflow-hidden rounded-2xl flex items-center justify-center bg-white content-box">
                  <div
                    className="w-full flex-col">
                    <div className="relative sm:block">
                      <Link to={hit.slug.current}>
                        <img src={hit.logoimage} alt={hit.title}
                             className="h-full w-full object-cover"
                             loading="eager"/>
                      </Link>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                      <div className="uppercase text-sm text-indigo-700 font-bold">{(hit.integrationcategories !== null ? hit.integrationcategories.title : '')}</div>
                      <h2 className="mt-2 leading-5 text-lg text-secondary font-bold text-center">
                        <Link to={hit.slug.current}>{hit.title}</Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
            )
          }
        })
        }
      </div>
    </div>
  )
}
export default Integrationrowcontent