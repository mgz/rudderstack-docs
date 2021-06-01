import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../lib/font-awesome"
import MiddleBanner from "../components/middle-banner"
import Speaker2 from "../images/speaker2.svg"
import Speaker1 from "../images/speaker1.svg"

import VideoLibraryContentHeader from "../components/videoLibraryContentHeader"
import VideoContentLesson from "../components/videoContentLesson"

const videoContent = ({ data }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")
  // console.log("fff", data)
  return (
    <Layout>
      <div className="pt-0 font-custom">
        {/*banner*/}
        <VideoLibraryContentHeader data={data.videoLib} />
        <VideoContentLesson data={data.videoLib._rawHeroSection} />

        <section className="bg-backgroundsecondary 100% left-right-section md:pt-24 md:pb-20 py-20">
          <div className="max-w-6xl px-4 md:px-3 mx-auto">
            <div className="flex items-center flex-wrap">
              <div className="w-full justify-center items-start md:text-left max-w-screen-md">
                <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">
                  Here's what Eric and Alex cover:
                </h3>
              </div>

              <div className="flex items-start flex-wrap sm:flex-row mt-6 md:mt-20">
                <div className="w-full sm:w-1/2 sm:p-6 sm:pl-0">
                  <ul>
                    <li className="relative w-full what-can-do text-lg pl-11 mb-7 sm:mb-0">
                      A long-term view of the data stack: what are the problems
                      at scale that early stage companies don’t think about?
                    </li>
                    <li className="relative w-full what-can-do text-lg pl-11 sm:mt-14 mb-7 sm:mb-0">
                      The essential toolset: what does every company need,
                      regardless of scale?
                    </li>
                    <li className="relative w-full what-can-do text-lg pl-11 sm:mt-14 mb-7 sm:mb-0">
                      How business models, i.e., B2C vs. B2B, influence data
                      stack architecture and tool choice
                    </li>
                    <li className="relative w-full what-can-do text-lg pl-11 sm:mt-14 mb-7 sm:mb-0">
                      Evaluating near-term and long-term costs
                    </li>
                    <li className="relative w-full what-can-do text-lg pl-11 sm:mt-14 mb-7 sm:mb-0">
                      Beyond the tools: the other critical components of a
                      scalable data stack (data engineering resources, team
                      structure, executive buy-in, etc.)
                    </li>
                    <li className="relative w-full what-can-do text-lg pl-11 sm:mt-14 mb-7 sm:mb-0">
                      Q&A
                    </li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0">Form</div>
              </div>
            </div>
          </div>
        </section>

        <section className="100% bg-whiteColor-custom">
          <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap sm:pb-24 pb-6">
            <h3 className="w-full my-2 text-4xl md:text-5xl text-primary font-bold leading-tight mb-8 md:mb-20 mt-6 md:mt-28">
              Similar Integrations
            </h3>
            <div className="flex items-start flex-wrap sm:flex-row ">
              <div className="w-full sm:w-1/2 sm:p-6 sm:pl-0 sm:pr-3.5">
                <div className="speaker rounded-2xl py-12 sm:px-14 px-6 flex flex-col items-center text-center">
                  <div className="speaker-pic">
                    <img src={Speaker1} alt="speaker" className="w-full" />
                  </div>
                  <div className="speaker_name flex flex-col my-8">
                    <label className="mb-1.5 leading-6 font-medium">
                      Eric Dodds
                    </label>
                    <span className="leading-6">Head of Customer Success</span>
                  </div>
                  <p className="leading-6">
                    This is a brief description of speaker bio, this paragrah
                    shows speaker info.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 sm:pl-3.5 pt-6">
                <div className="speaker rounded-2xl py-12 sm:px-14 px-6 flex flex-col items-center text-center">
                  <div className="speaker-pic">
                    <img src={Speaker2} alt="speaker" className="w-full" />
                  </div>
                  <div className="speaker_name flex flex-col my-8">
                    <label className="mb-1.5 leading-6 font-medium">
                      Alex Dovenmuehle
                    </label>
                    <span className="leading-6">
                      Co-founder at Big Time Data
                    </span>
                  </div>
                  <p className="leading-6">
                    This is a brief description of speaker bio, this paragrah
                    shows speaker info.
                  </p>
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

export default videoContent

export const pageQuery = graphql`
  query GetSingleVideoLibrary($slug: String) {
    videoLib: sanityVideolibrary(slug: { current: { eq: $slug } }) {
      _id
      _key
      _rawHeroSection
      _rawListingImage
      _rawSpekers
      _rawTopicsToCoverSection
      _rawVideoLibraryCategoryType
      title
      weight
      shortdescription
      meta_desc
      meta_title
      duration
      id
    }
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`
