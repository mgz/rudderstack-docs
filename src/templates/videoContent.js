import React from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"
import "../lib/font-awesome"
import { Helmet } from "react-helmet"
import PortableText from "../components/portableText"
import Layout from "../components/layout"
import MiddleBanner from "../components/middle-banner"
import VideoLibraryContentHeader from "../components/videoLibraryContentHeader"
import VideoContentLesson from "../components/videoContentLesson"
import VideoLibraryTopicsToCover from "../components/videoLibraryTopicsToCover"
import VideoLibrarySpeakers from "../components/videoLibrarySpeakers"

// const Layout = loadable(() => import("../components/layout"))
// const MiddleBanner = loadable(() => import("../components/middle-banner"))
// const VideoLibraryContentHeader = loadable(() => import("../components/videoLibraryContentHeader"))
// const VideoContentLesson = loadable(() => import("../components/videoContentLesson"))
// const VideoLibraryTopicsToCover = loadable(() => import("../components/videoLibraryTopicsToCover"))
// const VideoLibrarySpeakers = loadable(() => import("../components/videoLibrarySpeakers"))

const videoContent = ({ data, location }) => {
  console.log("data", data)
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  let category = ""
  let url_or_event_dttm = ""
  let inputForm
  if (
    data.videoLib._rawVideoLibraryCategoryType &&
    data.videoLib._rawVideoLibraryCategoryType.condition ===
      "live_option_with_form"
  ) {
    category = "Live"
    url_or_event_dttm =
      data.videoLib._rawVideoLibraryCategoryType.live_option_with_form
        .event_datetime
    inputForm =
      data.videoLib._rawVideoLibraryCategoryType.live_option_with_form
        .input_form
  } else if (
    data.videoLib._rawVideoLibraryCategoryType &&
    data.videoLib._rawVideoLibraryCategoryType.condition === "learn_option"
  ) {
    category = "Learn RudderStack"
    url_or_event_dttm =
      data.videoLib._rawVideoLibraryCategoryType.learn_option &&
      data.videoLib._rawVideoLibraryCategoryType.learn_option.url
  } else if (
    data.videoLib._rawVideoLibraryCategoryType &&
    data.videoLib._rawVideoLibraryCategoryType.condition === "usecase_option"
  ) {
    category = "Use cases"
    url_or_event_dttm =
      data.videoLib._rawVideoLibraryCategoryType.usecase_option.url
  }

  return (
    <Layout
      location={location}
      showExplicitGradient={category === "Live" ? true : false}
    >
      <Helmet>
        <title>{data.videoLib.meta_title || data.videoLib.title}</title>
        <meta
          property="og:title"
          content={data.videoLib.meta_title || data.videoLib.title}
        />
        <meta
          property="twitter:title"
          content={data.videoLib.meta_title || data.videoLib.title}
        />
        <meta name="description" content={data.videoLib.meta_desc} />
        <meta property="og:description" content={data.videoLib.meta_desc} />
        <meta
          property="twitter:description"
          content={data.videoLib.meta_desc}
        />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="pt-0 font-custom">
        {/*banner*/}
        <VideoLibraryContentHeader
          data={data.videoLib}
          category={category}
          url_or_event_dttm={url_or_event_dttm}
          inputForm={inputForm}
        />
        <VideoContentLesson data={data.videoLib._rawHeroSection} />
        <VideoLibraryTopicsToCover
          category={category}
          data={data.videoLib._rawTopicsToCoverSection}
          inputForm={inputForm}
        />
        <VideoLibrarySpeakers
          speakers={data.videoLib._rawSpekers}
          allAuthors={data.allSanityBlogauthor}
        />
        {data.videoLib._rawTranscript &&
          data.videoLib._rawTranscript.length > 0 && (
            <section id="transcript">
              <div className="block-description relative py-8 max-w-4xl m-auto px-4 md:px-12">
                <h1 className="text-4xl">Transcript</h1>
                <PortableText blocks={data.videoLib._rawTranscript} />
              </div>
            </section>
          )}

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
      _rawTranscript
      title
      weight
      shortdescription
      meta_desc
      meta_title
      duration
      id
    }
    sanityFrontpageblock (_id: {eq: "frontpageblock"}){
      _rawPagebuildersectionarray
    }
    allSanityBlogauthor {
      edges {
        node {
          _id
          author_name
          author_position
          author_desc
          author_image {
            asset {
              url
            }
          }
        }
      }
    }
  }
`
