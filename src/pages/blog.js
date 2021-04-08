import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { connectSearchBox } from "react-instantsearch-dom"
import Pagination from "../components/pagination"
import algoliasearch from 'algoliasearch/lite';
import CustomSearchBox from "../components/customSearchBox";
import CustomMenu from "../components/blogCategoryList";
import { InstantSearch, Configure, SortBy, Menu } from 'react-instantsearch-dom';
import CustomHits from "../components/customHits"

const Blog = (props) => {
  const searchClient = algoliasearch('CXEE6UEOI8', '88f9637ee245ea4c30cfa44892b3b5ec');
  const { data } = props
  const pageInfo = data.allSanityBlog.pageInfo
  return (
    <Layout>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <InstantSearch
          searchClient={searchClient}
          indexName='rudderstack_blog'
          >
          <Configure hitsPerPage={13} />
          <div className="container flex flex-wrap flex-col sm:flex-row">
            <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left border-solid border-b-2 border-grey-500">
              <CustomMenu attribute="blog_category"/>
            </div>
            <div className="w-full md:w-2/5 pt-6 pb-3 text-center">
              <CustomSearchBox />
            </div>
            <div className="mt-8">
              <div id="hits-container">
                <div data-reactroot>
                  <CustomHits />
                </div>
              </div>
            </div>
            <div className="pt-8 pb-8 m-auto">
              <div data-reactroot>
                <Pagination pageInfo={pageInfo} />
              </div>
            </div>
          </div>

        </InstantSearch>
      </div>
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