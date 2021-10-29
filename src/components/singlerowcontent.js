/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

const Singlerowcontent = ({ hit }) => {
  // console.log("hit", hit)
  let author_names = ""
  hit.blog_authors.forEach(row => {
    author_names += (author_names.length > 0 ? ", " : "By ") + row.author_name
  })
  return (
    <div
      key="0"
      className="w-full mx-auto bg-white rounded-3xl shadow-md overflow-hidden shadow-md"
    >
      <div className="flex lg:flex-row flex-col">
        <div className="flex-shrink-1 sm:flex-shrink-1">
          <Link to={hit.slug}>
            <img
              src={hit.blogimage.src}
              alt={hit.title}
              className="sm:h-full w-full object-cover"
              loading="eager"
            />
          </Link>
        </div>
        <Link to={hit.slug} className="relative">
          <div class="px-8 pt-8 pb-4">
            <div className="uppercase text-sm text-indigo-700 font-bold text-blueNew-eastbay">
              {hit.blog_category} fdgfdg
            </div>
            <h1 className="block  mt-4 mb-4 text-3xl leading-tight font-bold md:font-medium text-blueNew-midnight">
              {hit.title}
              {/* <Link to={hit.slug}>{hit.title}</Link> */}
            </h1>
            <p className="text-grayColor-custom md:mb-28">{hit.short_description}</p>
          </div>
          {hit.blog_authors[0] && (
            <div className="flex items-center mx-auto mb-4 sm:flex-row flex-col mt-4 md:absolute md:bottom-0 px-8">
              <div className=" inline-flex items-center justify-center flex-shrink-0 mr-4">
                <img
                  src={hit.blog_authors[0].author_image.asset.url}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <div className="leading-4 text-lg font-bold mt-2 text-blueNew-midnight">
                  {hit.blog_authors[0].author_name}
                </div>
                <div className="mt-2 text-sm text-grayColor-custom">
                  {hit.blog_authors[0].author_position}
                </div>
              </div>
            </div>
          )} 
        </Link>
      </div>
    </div>
  )
}

export default Singlerowcontent
