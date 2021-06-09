import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../lib/font-awesome"
import MiddleBanner from "../components/middle-banner"

import VideoLibraryContentHeader from "../components/videoLibraryContentHeader"
import VideoContentLesson from "../components/videoContentLesson"
import VideoLibraryTopicsToCover from "../components/videoLibraryTopicsToCover"
import VideoLibrarySpeakers from "../components/videoLibrarySpeakers"
const videoContent = ({ data, location }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  let category = ""
  let url_or_event_dttm = ""
  if (
    data.videoLib._rawVideoLibraryCategoryType &&
    data.videoLib._rawVideoLibraryCategoryType.condition === "live_option"
  ) {
    category = "Live"
    url_or_event_dttm = data.videoLib._rawVideoLibraryCategoryType.live_option
  } else if (
    data.videoLib._rawVideoLibraryCategoryType &&
    data.videoLib._rawVideoLibraryCategoryType.condition === "learn_option"
  ) {
    category = "Learn RudderStack"
    url_or_event_dttm =
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
      <div className="pt-0 font-custom">
        {/*banner*/}
        <VideoLibraryContentHeader
          data={data.videoLib}
          category={category}
          url_or_event_dttm={url_or_event_dttm}
        />
        <VideoContentLesson data={data.videoLib._rawHeroSection} />
        <VideoLibraryTopicsToCover
          category={category}
          data={data.videoLib._rawTopicsToCoverSection}
        />
        <VideoLibrarySpeakers
          speakers={data.videoLib._rawSpekers}
          allAuthors={data.allSanityBlogauthor}
        />

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
