/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Link } from "gatsby"
import React from "react"
import { connectPagination } from "react-instantsearch-dom"

const Pagination = ({
  currentRefinement,
  nbPages,
  refine,
  createURL,
  selectedPageNo,
  onPageSelection
}) => {
  // console.log("pagination", nbPages, selectedPageNo)
  return (
    <ul className="flex">
      {new Array(nbPages).fill(null).map((_, index) => {
        const page = index + 1

        return (
          <li
            key={index}
            className={`mx-2 px-1 text-base font-bold ${
              selectedPageNo === page
                ? "border-solid border-b-4 border-blueNew-eastbay text-blueNew-eastbay"
                : ""
            }`}
          >
            <Link
              to={createURL(page)}
              onClick={event => {
                event.preventDefault()
                refine(page)
                onPageSelection(page)
              }}
              className=""
            >
              {page}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default connectPagination(Pagination)
