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
import IntegrationsHelpBox from "../components/Integrations-help"


const Integration = (props) => {
  const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_APIKEY);
  const { data } = props
  //const pageInfo = data.allSanityIntegration.pageInfo
  return (
    <Layout>
       <div className="font-custom">
      <div className="lg:pt-40 pt-16 mx-auto integration-banner relative md:pb-20 pb-7 overflow-hidden">
        <section className="bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter">
          <div class="max-w-6xl lg:mt-16 px-3 md:px-3 mx-auto flex flex-wrap flex-col items-center text-center">
            <h1 className="tracking-tight-2 text-4xl md:text-5xl font-bold font-custom sm:leading-snug leading-10">
              Integrations
            </h1>
            <p className="text-xl md:text-3xl text-primary font-bold leading-tight md:mt-5 mt-11">
              Send data to all of the tools in your customer data stack
            </p>
          </div>
        </section>
      </div>
      <div className="xl:container px-3 pb-10 md:pb-40 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <InstantSearch
          searchClient={searchClient}
          indexName={process.env.GATSBY_ALGOLIA_INTEGRATIONINDEX}
        >
          <div className="flex flex-wrap flex-col sm:flex-row w-full">
            <div className="mx-auto w-full lg:w-10/12 lg:px-10 md:px-6 ">
              <div className="search-cover bg-white rounded-2xl sm:px-24 sm:py-14 py-6 px-4">
                <div className="w-full items-center text-center mx-auto">
                  <CustomSearchBox />
                </div>
              </div>

            </div>
            <div className="flex items-start flex-col sm:flex-row xl:gap-24 w-full">
              <div className="w-full sm:w-1/3 lg:w-1/4  md:px-6 sm:pr-3 pl-0 md:mt-24 mt-8">
                <div className="bg-white rounded-2xl filter-menu py-10 px-6">
                  <IntegrationTypeMenu attribute='integrationtypes.title' />
                  <div className="mt-10">
                    <IntegrationCategoryMenu attribute='integrationcategories.title' />
                  </div>
                </div>
                <div className="sm:mt-9 mt-8">
                <IntegrationsHelpBox/>
                </div>
              </div>
              <div className="w-full smd:w-2/3 lg:w-3/4  md:px-6 sm:pl-3 pr-0 md:mt-24 mt-8">
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