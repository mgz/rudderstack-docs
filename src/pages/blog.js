import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { connectSearchBox } from "react-instantsearch-dom"
import Pagination from "../components/pagination"
import algoliasearch from 'algoliasearch/lite';
import CustomSearchBox from "../components/customSearchBox";
import { InstantSearch, Configure, SortBy } from 'react-instantsearch-dom';
import CustomHits from "../components/customHits"

const Blog = (props) => {
  const searchClient = algoliasearch('CXEE6UEOI8', '88f9637ee245ea4c30cfa44892b3b5ec');
  const { data } = props
  const pageInfo = data.allSanityBlog.pageInfo
  return (
    <Layout>
      <section className="blog-page">
        <InstantSearch
          searchClient={searchClient}
          indexName='rudderstack_blog'
          >
          <Configure hitsPerPage={13} />
          <div className="">
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
              <div className="grid-cols-8">
                <CustomSearchBox />
              </div>
              <div className="grid-cols-4">
                <CustomSearchBox />
              </div>
            </div>
            <div className="mt-8">
              <div id="hits-container">
                <div data-reactroot>
                  <CustomHits />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div data-reactroot>
                <Pagination pageInfo={pageInfo} />
              </div>
            </div>
          </div>

        </InstantSearch>
      </section>
    </Layout>
)
}

export default Blog


export const pageQuery = graphql`
  query {
    allSanityBlog(
      limit: 13,
      sort: { fields: [weight], order: [ASC] }
    ) {
      pageInfo {
        currentPage
        itemCount
        hasPreviousPage
        hasNextPage
        pageCount
        perPage
        totalCount
      }
    }
  }
`