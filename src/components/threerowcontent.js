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
    <div className="mt-24">
    <h2 className="text-2xl font-bold mb-2">Lorem ipsum dolor sit amet</h2>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
    {hits.map((hit, index) => {
      if (index !== 0) {
      return (
      <section key={index} className="flex">
        <div
          className="w-full relative overflow-hidden rounded-3xl flex shadow-lg">
          <div
            className="w-full flex md:flex-col">
            <div className="relative sm:block">
              <Link to={hit.slug}>
                <img src={hit.blogimage.src} alt={hit.title}
                     className="h-56 w-full object-cover"
                     loading="eager"/>
              </Link>
            </div>
            <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-6">
              <div className="uppercase text-sm text-indigo-700 font-bold">{hit.blog_category}</div>
              <h2 className="mt-2 text-2xl font-bold mb-2">
                <Link to={hit.slug}>{hit.title}</Link>
              </h2>

              <div className="mt-4 text-sm text-indigo-700 font-bold">
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
      </div>
  )

}

export default Threerowcontent
