import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../lib/font-awesome"
import MiddleBanner from "../components/middle-banner"
import Faq from "../components/faq"
import SimilarInt1 from "../images/int1.svg"
import SimilarInt2 from "../images/int2.svg"
import SimilarInt3 from "../images/int3.svg"
import Speaker2 from "../images/speaker2.svg"
import Speaker1 from "../images/speaker1.svg"
import DataStack from "../images/cus-datastack.svg"

const VideoOnDemand = ({ data }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  return (
    <Layout>

      <div className="pt-10 font-custom">
        <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative banner-section video-banner-bg">
          <div className="flex flex-col items-center md:gap-12 xl:gap-16 justify-center mx-auto lg:flex-row lg:p-0">
            <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-3/5 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
              <p class="my-4 text-blue text-sm uppercase">ON DEMAND</p>
              <h2 className="mb-8 md:mb-4 md:text-6xl text-5xl font-bold leading-tight">
                The Customer Data Stack Journey: Architecting a Scalable Stack
              </h2>
              <p>Duration: 1 hour</p>
            </div>
            <div className="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-2/5 sm:px-0 sm:items-center lg:items-start lg:mb-0">
              <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
                <div className="w-full">
                  <form className="demo_form px-8 py-8 sm:pt-12 sm:px-12 sm:pb-16 flex flex-col w-full xl:w-120 md:max-w-lg -top-24">
                    <input type="text" name="firstName" class="font-sm text-base" placeholder="First Name" value="" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>{/*banner*/}
        <section className="100% bg-whiteColor-custom">
          <div className="max-w-6xl px-4 md:px-3 mx-auto pb-28 pb-0">
            <div className="flex items-center flex-wrap">
              <div className="w-full sm:w-2/5 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
                <h3 className="md:mt-2 text-3xl text-primary font-bold leading-tight">Lessons from Heroku and Mattermost How to build a customer data stack that scales</h3>

                <div className="text-secondary leading-7 text-sm sm:text-lg">
                  <p className="mt-8">In this on-demand webinar, Eric Dodds talks with Alex Dovenmuehle about the best approach for architecting data stacks that scale well as your business grows. Alex shares lessons learned from data engineering work at startups like Mattermost and huge businesses like Heroku.</p>
                  <p className="mt-8">When companies are early, it can be difficult to understand the long-term impact of decisions about the data stack. At the same time, when organizations become large, it can be difficult to implement flexible, efficient data architecture that leverages newer standards in technology. In both cases, getting the data stack right is key to enabling every team, from product to marketing, to build competitive advantage.</p>
                </div>
              </div>
              <div className="w-full sm:w-3/5 sm:p-6 sm:pr-0 sm:pl-28">
                <img src={DataStack} alt="event stream" className="w-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-backgroundsecondary 100% left-right-section sm:pt-24 sm:pb-20 py-11">
          <div className="max-w-6xl px-4 md:px-3 mx-auto">
            <div className="flex items-center flex-wrap">
              <div className="w-full justify-center items-start md:text-left max-w-screen-md">
                <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">Here's what Eric and Alex cover:</h3>
              </div>

              <div className="flex items-start flex-wrap sm:flex-row mt-6 md:mt-20">
                <div className="w-full sm:w-1/2 sm:p-6 sm:pl-0">
                  <div className="relative w-full what-can-do text-xl leading-8 pl-11 mb-7 sm:mb-0">
                    A long-term view of the data stack: what are the problems at scale that early stage companies don’t think about?
                </div>
                  <div className="relative w-full what-can-do text-xl leading-8 pl-11 sm:mt-14 mb-7 sm:mb-0">
                    The essential toolset: what does every company need, regardless of scale?
                </div>
                  <div className="relative w-full what-can-do text-xl leading-8 pl-11 sm:mt-14 mb-7 sm:mb-0">
                    How business models, i.e., B2C vs. B2B, influence data stack architecture and tool choice
                </div>
                  <div className="relative w-full what-can-do text-xl leading-8 pl-11 sm:mt-14 mb-7 sm:mb-0">
                    Evaluating near-term and long-term costs
                </div>
                  <div className="relative w-full what-can-do text-xl leading-8 pl-11 sm:mt-14 mb-7 sm:mb-0">
                    Beyond the tools: the other critical components of a scalable data stack (data engineering resources, team structure, executive buy-in, etc.)
                </div>
                  <div className="relative w-full what-can-do text-xl leading-8 pl-11 sm:mt-14 mb-7 sm:mb-0">
                    Q&A
                </div>
                </div>
                <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0">
                  Form
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="100% bg-whiteColor-custom">
          <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap pb-24">
            <h3 className="w-full my-2 text-4xl md:text-5xl text-primary font-bold leading-tight mb-8 md:mb-20 mt-6 md:mt-28">
              Similar Integrations
         </h3>
            <div className="flex items-start flex-wrap sm:flex-row ">
              <div className="w-full sm:w-1/2 sm:p-6 sm:pl-0 pr-3.5">
                <div className="speaker rounded-2xl py-12 px-14 flex flex-col items-center">
                  <div className="speaker-pic"><img src={Speaker1} alt="speaker" className="w-full" /></div>
                  <label>Eric Dodds</label>
                  <span>Head of Customer Success</span>
                  <p>This is a brief description of speaker bio, this paragrah shows speaker info.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 pl-3.5">
                <div className="speaker rounded-2xl py-12 px-14 flex flex-col items-center">
                  <div className="speaker-pic"><img src={Speaker2} alt="speaker" className="w-full" /></div>
                  <label>Alex Dovenmuehle</label>
                  <span>Co-founder at Big Time Data</span>
                  <p>This is a brief description of speaker bio, this paragrah shows speaker info.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0]} />
        </section>
      </div>
    </Layout>

  )
}

export default VideoOnDemand

export const pageQuery = graphql`
  query {
    allSanityBlog(limit: 13, sort: { fields: [weight], order: [ASC] }) {
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
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`