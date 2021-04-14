import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import IntegrationHero from "../components/integrationHero"
import Image from "../components/image"
import BlockContent from '@sanity/block-content-to-react'


const Singleintegration = ({data}) => {
  const integration = data.integration
  // console.log('test: ', integration)
  return (
    <Layout>
      <IntegrationHero title={integration.title} description={integration.integrationHeroSection._rawHerodescritpion} cta={integration.integrationHeroSection._rawHerocta} />
      <div className="block-description pt-16 max-w-4xl m-auto">
        <Image props={integration.imageSection._rawMainImage.asset._ref} />
        <p className="text-sm text-center">{integration.imageSection.imageTitle}</p>
        <div className="flex items-center flex-wrap">
          <div className="md:w-1/4 p-2 block">
              {/* <Image props={imgref} /> */}
          </div>
          <div className="md:w-3/4 p-2 block">
              {/* <h3 className="mb-6 text-4xl md:text-5xl text-primary font-bold leading-tight">{maintitle}</h3> */}
              <div className="text-secondary text-lg leading-7 frtxt-contnt">
                  {/* <PortableText blocks={portabletext} /> */}
              </div>
              <div className="block md:flex mt-6">
              {/* {
                  buttons.map(
                      (btn, i) => (
                      <>
                          <a key={i} className={(btn.btnhiglight === true ? 'bg-primary text-white' : '') + ` py-2 mr-4 md:px-8 lg:px-8 px-2 text-center rounded-lg md:mb-0 mb-4 md:flex block border text-sm border-primary`} href={btn.btnlink}>{btn.btntext}</a>
                      </>
                      )
                  )
              } */}
              </div>
          </div>
      </div>
        {/* <BlockContent blocks={integration.integrationHeroSection._rawHerodescritpion} /> */}
        <div className="my-8 py-12 px-8 bg-blueNew-lighter rounded-2xl bg-opacity-50 flex items-center mx-auto pb-10 mb-10 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
            {/* <img src={blog.author_image.asset.fluid.src} className="w-24 h-24 rounded-full" /> */}
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <div className="text-xs font-bold mb-2 uppercase">About the author</div>
            {/* <div className="leading-relaxed text-lg font-bold mt-4">{blog.author_name}</div>
            <div className="mt-6 ">{blog.author_desc}</div> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleIntegration($slug: String) {
    integration: sanityIntegration(slug: {current: {eq: $slug}}) {
      title
      integrationHeroSection {
        _rawHerocta
        _rawHerodescritpion
      }
      imageSection {
        imageTitle
        _rawMainImage
      }
      integrationLeftRightsection {
        title
        _rawBoxLink
        _rawRightSection
      }
      integrationLogo {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default Singleintegration