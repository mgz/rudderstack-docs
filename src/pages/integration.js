import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import { connectSearchBox } from "react-instantsearch-dom"
// import Pagination from "../components/pagination"
import algoliasearch from 'algoliasearch/lite';
import CustomSearchBox from "../components/customSearchBox";
import IntegrationCategoryMenu from "../components/integrationCategoryList";
import IntegrationTypeMenu from "../components/integrationTypeList";
import { InstantSearch } from 'react-instantsearch-dom';
import IntegrationHits from "../components/integrationHits"

const Integration = (props) => {
  const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_APIKEY);
  const { data } = props
  //const pageInfo = data.allSanityIntegration.pageInfo
  return (
    <Layout>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <InstantSearch
          searchClient={searchClient}
          indexName={process.env.GATSBY_ALGOLIA_INTEGRATIONINDEX}
          >
          <div className="container flex flex-wrap flex-col sm:flex-row">
            <div className="w-full md:w-2/5 pt-6 pb-3 items-center text-center">
              <CustomSearchBox />
            </div>
            <div className="mt-8">
              <div className="flex items-center flex-wrap flex-col sm:flex-row">
                <div className="w-full md:w-1/4 sm:w-1/2 md:p-6 mt-6">
                  <IntegrationTypeMenu attribute='integrationtypes.title' />
                  <div className="mt-8">
                    <IntegrationCategoryMenu attribute='integrationcategories.title' />
                  </div>
                </div>
                <div className="w-full md:w-3/4 sm:w-1/2 md:p-6 mt-6">
                  <div id="hits-container">
                    <div data-reactroot>
                      <IntegrationHits />
                    </div>
                  </div>
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