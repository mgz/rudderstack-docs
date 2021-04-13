import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { connectSearchBox } from "react-instantsearch-dom"
import Pagination from "../components/pagination"
import algoliasearch from 'algoliasearch/lite';
import CustomSearchBox from "../components/customSearchBox";
import CustomMenu from "../components/blogCategoryList";
import { InstantSearch, Configure, SortBy, Menu, Hits } from 'react-instantsearch-dom';
import IntegrationHits from "../components/integrationHits"

const Integration = (props) => {
  const searchClient = algoliasearch('4K4TPPS0OQ', '0a5e12672bfb6f5c1076f7266bfed56d');
  const { data } = props
  //const pageInfo = data.allSanityIntegration.pageInfo
  return (
    <Layout>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <InstantSearch
          searchClient={searchClient}
          indexName='dev_gatsby_integration'
          >
          {/* <Configure hitsPerPage={13} /> */}
          <div className="container flex flex-wrap flex-col sm:flex-row">
            <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left border-solid border-b-2 border-grey-500">
              <CustomMenu attribute="integrationcategories"/>
            </div>
            <div className="w-full md:w-2/5 pt-6 pb-3 text-center">
              <CustomSearchBox />
            </div>
            <div className="mt-8">
              <div id="hits-container">
                <div data-reactroot>
                  <IntegrationHits />
                </div>
              </div>
            </div>
            {/* <div className="pt-8 pb-8 m-auto">
              <div data-reactroot>
                <Pagination pageInfo={pageInfo} />
              </div>
            </div> */}
          </div>

        </InstantSearch>
      </div>
    </Layout>
  )
}

export default Integration


export const pageQuery = graphql`
  query {
    allSanityIntegration {
      pageInfo {
        perPage
        currentPage
        itemCount
        hasPreviousPage
        hasNextPage
        pageCount
        totalCount
      }
    }
  }
`