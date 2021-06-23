/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

const Threerowcontent = ({ hits }) => {
  return (
    <div className="mt-4">
      {/* <h2 className="text-2xl font-bold mb-2">Lorem ipsum dolor sit amet</h2> */}
      <div className="mt-7 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        {hits.map((hit, index) => {
          if (index !== 0) {
            let author_names = ""
            hit.blog_authors.forEach(row => {
              author_names +=
                (author_names.length > 0 ? ", " : "By ") + row.author_name
            })

            return (
              <section key={index} className="flex">
                <div className="w-full relative overflow-hidden rounded-3xl flex shadow-md bg-white">
                  <div className="w-full flex-col">
                    <div className="relative sm:block h-52">
                      <Link to={hit.slug}>
                        <img
                          src={hit.blogimage.src}
                          alt={hit.title}
                          className="h-full w-full object-cover"
                          loading="eager"
                        />
                      </Link>
                    </div>
                    <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-6 cursor-pointer">
                      <Link to={hit.slug}>
                        <div className="flex-initial uppercase text-sm text-indigo-700 font-bold text-blueNew-eastbay">
                          {hit.blog_category}
                        </div>

                        <h2 className="flex-auto mt-2 text-lg md:text-xl-2 font-bold mb-6 text-blueNew-midnight">
                          {hit.title}
                        </h2>
                      </Link>
                    </div>
                    <Link to={hit.slug}>
                      <div className="flex-initial mt-4 text-sm text-indigo-700 font-bold text-blueNew-eastbay absolute bottom-6 left-6">
                        <span>{author_names}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Threerowcontent
