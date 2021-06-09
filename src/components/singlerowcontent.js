/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

const Singlerowcontent = ({ hit }) => {
  let author_names = ""
  hit.blog_authors.forEach(row => {
    author_names += (author_names.length > 0 ? ", " : "By ") + row.author_name
  })
  return (
    <div
      key="0"
      className="w-full mx-auto bg-white rounded-3xl shadow-md overflow-hidden shadow-md"
    >
      <div className="sm:flex">
        <div className="flex-shrink-1 sm:flex-shrink-1">
          <Link to={hit.slug}>
            <img
              src={hit.blogimage.src}
              alt={hit.title}
              className="sm:h-full lg:max-w-2xl object-cover"
              loading="eager"
            />
          </Link>
        </div>
        <Link to={hit.slug}>
          <div class="px-8 pt-8 pb-4">
            <div className="uppercase text-sm text-indigo-700 font-bold text-blueNew-eastbay">
              {hit.blog_category}
            </div>
            <h2 className="block  mt-4 md:mt-10 mb-4 text-3xl-4 lg:text-4xl leading-tight font-bold md:font-medium text-blueNew-midnight">
              {hit.title}
              {/* <Link to={hit.slug}>{hit.title}</Link> */}
            </h2>

            <div class="mt-2 text-xl-2 md:text-3xl text-indigo-700 font-bold text-blueNew-eastbay">
              <span>{author_names}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Singlerowcontent
