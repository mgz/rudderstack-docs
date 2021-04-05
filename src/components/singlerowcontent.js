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
    <div key="900"
         className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Link to={hit.slug}>
            <img src={hit.blogimage.src} alt={hit.title}
                 className="h-56 md:max-w-2xl"
                 loading="eager"/>
          </Link>
        </div>
        <div class="p-8">
          <div
            lassName="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{hit.blog_category}</div>
          <h2
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            <Link to={hit.slug}>{hit.title}</Link>
          </h2>

          <div class="mt-2 text-gray-500">
            <span>{hit.dateString}</span>
            <span> | </span>
            <span>By {hit.author_name}</span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Singlerowcontent
