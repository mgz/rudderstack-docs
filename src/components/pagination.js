/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Link } from "gatsby";
import React from "react"
import { connectPagination } from 'react-instantsearch-dom';

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => (
    <ul>
      {new Array(nbPages).fill(null).map((_, index) => {
        const page = index + 1;

        return (
          <li key={index}>
            <Link
              to={createURL(page)}
              onClick={event => {
                event.preventDefault();
                refine(page);
              }}
              className=""
            >
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
  
export default connectPagination(Pagination)