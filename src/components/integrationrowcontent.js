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
    <div className="mt-24">
      <h2 className="text-2xl font-bold mb-2">Integration</h2>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 xl:gap-8">
        {hits.map((hit, index) => {
          console.log('Hit: ', hit)
          if (index >= 0) {
            return (
              <section key={index} className="flex">
                <div
                  className="w-full relative overflow-hidden rounded-3xl flex shadow-md border border-gray-200 bg-white">
                  <div
                    className="w-full flex-col">
                    <div className="relative sm:block">
                      <Link to={hit.slug.current}>
                        <img src={hit.logoimage} alt={hit.title}
                             className="h-full w-full object-cover"
                             loading="eager"/>
                      </Link>
                    </div>
                    <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-6">
                      <div className="uppercase text-sm text-indigo-700 font-bold">{(hit.integrationcategories !== null ? hit.integrationcategories.title : '')}</div>
                      <h2 className="mt-2 text-1xl md:text-2xl font-bold mb-2">
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