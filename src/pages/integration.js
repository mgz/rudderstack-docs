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
       <div className="font-custom">
      <div className="mt-16 mx-auto integration-banner lg:pb-20">
        <section className="bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter">
          <div class="max-w-6xl md:mt-16 px-3 md:px-3 mx-auto flex flex-wrap flex-col md:items-center md:text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-custom leading-snug">
              Integrations
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-bold leading-tight mt-4">
              Send data to all of the tools in your customer data stack
            </p>
          </div>
        </section>
      </div>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <InstantSearch
          searchClient={searchClient}
          indexName={process.env.GATSBY_ALGOLIA_INTEGRATIONINDEX}
        >
          <div className="container flex flex-wrap flex-col sm:flex-row">
            <div className="mx-auto w-10/12 px-10">
              <div className="search-cover bg-white rounded-2xl px-24 py-14">
                <div className="w-full items-center text-center mx-auto">
                  <CustomSearchBox />
                </div>
              </div>

            </div>
            <div className="flex items-start flex-col sm:flex-row lg:gap-24">
              <div className="w-full md:w-1/4 sm:w-1/2 md:px-6 py-6 md:py-0">
                <div className="bg-white rounded-2xl filter-menu py-10 px-6">
                  <IntegrationTypeMenu attribute='integrationtypes.title' />
                  <div className="mt-8">
                    <IntegrationCategoryMenu attribute='integrationcategories.title' />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/4 sm:w-1/2 md:px-6 py-6 md:py-0">
                <div id="hits-container">
                  <div data-reactroot>
                    <IntegrationHits />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
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