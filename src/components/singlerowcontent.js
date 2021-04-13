/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

const Singlerowcontent = ({ hit }) => {

  return (
    <div key="0"
         className="w-full mx-auto bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200 shadow-md">
      <div className="sm:flex">
        <div className="flex-shrink-1 sm:flex-shrink-1">
          <Link to={hit.slug}>
            <img src={hit.blogimage.src} alt={hit.title}
                 className="sm:h-full lg:max-w-2xl object-cover"
                 loading="eager"/>
          </Link>
        </div>
        <div class="p-8">
          <div className="uppercase text-sm text-indigo-700 font-bold">{hit.blog_category}</div>
          <h2
            className="block mt-14 text-2xl md:text-2xl lg:text-4xl leading-tight font-medium text-black">
            <Link to={hit.slug}>{hit.title}</Link>
          </h2>

          <div class="mt-2 text-2xl md:text-3xl text-indigo-700 font-bold">
            <span>By {hit.author_name}</span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Singlerowcontent