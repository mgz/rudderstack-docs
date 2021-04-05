/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

const Threerowcontent = ({ hits }) => {
console.log(hits)
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
    {hits.map((hit, index) => {
      if (index !== 0) {
      return (
      <section key={index} className="flex">
        <div
          className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
          <div
            className="w-full flex md:flex-col bg-gradient-to-br from-purple-500 to-indigo-500">
            <div className="relative sm:block">
              <Link to={hit.slug}>
                <img src={hit.blogimage.src} alt={hit.title}
                     className="w-full object-cover"
                     loading="eager"/>
              </Link>
            </div>
            <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{hit.blog_category}</div>
              <h2 className="text-xl font-semibold mb-2 text-shadow">
                <Link to={hit.slug}>{hit.title}</Link>
              </h2>

              <div className="mt-2 text-gray-500">
                <span>{hit.dateString}</span>
                <span> | </span>
                <span>By {hit.author_name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
      }
    })
  }
  </div>
  )

}

export default Threerowcontent
