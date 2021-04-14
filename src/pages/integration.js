import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import { connectSearchBox } from "react-instantsearch-dom"
// import Pagination from "../components/pagination"
import algoliasearch from 'algoliasearch/lite';
import CustomSearchBox from "../components/customSearchBox";
import IntegrationCategoryMenu from "../components/integrationCategoryList";
import { InstantSearch, SortBy, Menu, Hits } from 'react-instantsearch-dom';
import IntegrationHits from "../components/integrationHits"

const Integration = (props) => {
  const searchClient = algoliasearch(process.env.RS_GATSBY_ALGOLIA_APP_ID, process.env.RS_GATSBY_ALGOLIA_SEARCH_APIKEY);
  const { data } = props
  //const pageInfo = data.allSanityIntegration.pageInfo
  return (
    <Layout>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <InstantSearch
          searchClient={searchClient}
          indexName={process.env.RS_GATSBY_ALGOLIA_INTEGRATIONINDEX}
          >
          {/* <Configure hitsPerPage={13} /> */}
          <div className="container flex flex-wrap flex-col sm:flex-row">
            <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left border-solid border-b-2 border-grey-500">
              <IntegrationCategoryMenu attribute="integrationcategories"/>
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