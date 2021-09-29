import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import algoliasearch from "algoliasearch/lite"
import CustomSearchBox from "../components/customSearchBox"
import IntegrationCategoryMenu from "../components/integrationCategoryList"
import IntegrationTypeMenu from "../components/integrationTypeList"
import { InstantSearch } from "react-instantsearch-dom"
import IntegrationHits from "../components/integrationHits"
import IntegrationsHelpBox from "../components/Integrations-help"
import ScrollUpButton from "react-scroll-up-button"
import MiddleBanner from "../components/middle-banner"
import clientConfig from "../../client-config"
import { rudderslabTrackOnSearch } from "../utils/common"

const Integration = props => {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
  )

  const lv_middlebannersection = props.data.section_get_started.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.getStarted
  )

  const { data } = props
  const [searchedText, setSerchedText] = React.useState("")
  const [resultCount, setResultCount] = React.useState(0)

  // React.useEffect(() => {
  //   rudderslabTrackOnSearch(searchedText)
  // }, [searchedText])
  return (
    <Layout>
      <Helmet>
        <title>{`Integrations Library | RudderStack CDP`}</title>
        <meta
          property="og:title"
          content={`Integrations Library | RudderStack CDP`}
        />
        <meta
          property="twitter:title"
          content={`Integrations Library | RudderStack CDP`}
        />
        <meta
          name="description"
          content={`Connect your customer data to all the tools your team uses to drive growth. Spend less time on vendor SDK implementations and third-party code management.`}
        />
        <meta
          property="og:description"
          content={`Connect your customer data to all the tools your team uses to drive growth. Spend less time on vendor SDK implementations and third-party code management.`}
        />
        <meta
          property="twitter:description"
          content={`Connect your customer data to all the tools your team uses to drive growth. Spend less time on vendor SDK implementations and third-party code management.`}
        />
      </Helmet>
      <div className="font-custom">
        <div className="lg:pt-40 pt-16 mx-auto integration-banner relative md:pb-20 pb-7 overflow-hidden">
          <section className="bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter">
            <div class="max-w-6xl lg:mt-16 px-3 md:px-3 mx-auto flex flex-wrap flex-col items-center text-center">
              <h1 className="tracking-tight-2 text-4xl md:text-5xl font-bold font-custom sm:leading-snug leading-10 text-blueNew-midnight">
                Integrations
              </h1>
              <p className="text-xl md:text-3xl text-dark font-bold leading-tight md:mt-5 mt-11">
                Send data to all of the tools in your customer data stack
              </p>
            </div>
          </section>
        </div>
        <div className="xl:container px-3 pb-10 md:pb-40 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <InstantSearch
            searchClient={searchClient}
            indexName={
              process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_integration"
            }
          >
            <div className="flex flex-wrap flex-col sm:flex-row w-full">
              <div className="mx-auto w-full lg:w-10/12 lg:px-10 md:px-6 ">
                <div className="search-cover bg-white rounded-2xl sm:px-24 sm:py-14 py-6 px-4">
                  <div className="w-full items-center text-center mx-auto">
                    <CustomSearchBox
                      onRefineTextChange={val => {
                        setSerchedText(val)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-col sm:flex-row xl:gap-24 w-full">
                <div className="w-full sm:w-1/3 lg:w-1/4  md:px-6 sm:pr-3 pl-0 md:mt-24 mt-8">
                  <div
                    className={`${
                      resultCount === 0 ? "hidden" : "block"
                    } bg-white rounded-2xl filter-menu py-10 pl-6 pr-2 mb-8`}
                  >
                    <IntegrationTypeMenu attribute="integration_type" />
                    <div className="mt-10">
                      <IntegrationCategoryMenu attribute="integration_category" />
                    </div>
                  </div>
                  <div className={`hidden md:block`}>
                    <IntegrationsHelpBox />
                  </div>
                </div>
                <div
                  className={`w-full smd:w-2/3 lg:w-3/4  md:px-6 sm:pl-3 pr-0 md:mt-24 ${
                    resultCount === 0 ? "mt-0" : "mt-8"
                  }`}
                >
                  <div id="hits-container">
                    <div data-reactroot>
                      <IntegrationHits
                        onRecordCountChange={count => {
                          setResultCount(count)
                        }}
                        searchedText={searchedText}
                      />
                    </div>
                  </div>
                  <div className={`block md:hidden sm:mt-9 mt-8`}>
                    <IntegrationsHelpBox />
                  </div>
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>

        <div>
          <ScrollUpButton
            ContainerClassName="floatbtncoantiner"
            TransitionClassName="floatbtnanimation"
            ShowAtPosition={500}
          >
            <StaticImage
              src={"../images/float-btn.svg"}
              placeholder="tracedSVG"
              alt="Source Integration"
              className="w-full"
            />
          </ScrollUpButton>
        </div>
      </div>
      <section id="footer_section_for_demo">
        <MiddleBanner {...lv_middlebannersection[0].node._rawGetStarted} />
      </section>
    </Layout>
  )
}

export default Integration

export const pageQuery = graphql`
  query {
    section_get_started: allSanitySectionGetStarted {
      edges {
        node {
          _id
          section_name
          _rawGetStarted
        }
      }
    }
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
