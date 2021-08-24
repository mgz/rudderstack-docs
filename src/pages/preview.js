import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import PreviewTemplate from "../templates/previewtemplate"
import * as queryString from 'query-string';

export const query = graphql `
      query Frontblock {
          sanityFrontpageblock{
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

          section_get_started: allSanitySectionGetStarted {
            edges {
              node {
                _id
                section_name
                _rawGetStarted
              }
            }
          }
          section_our_logos: allSanitySectionOurlogos {
            edges {
              node {
                _id
                section_name
                _rawOurLogos
              }
            }
          }
          section_sign_up: allSanitySectionSignup {
            edges {
              node {
                _id
                section_name
                _rawSignup
              }
            }
          }
          section_testimonials: allSanitySectionTestimonials {
            edges {
              node {
                _id
                section_name
                _rawTestimonials
              }
            }
          }
      }
    `

const PreviewPage = ({data, location}) => {
	var { type, pageId, isDraft } = queryString.parse(location.search);
  if (isDraft) {pageId = "drafts."+pageId}
	return (
	  <PreviewTemplate pageid={pageId} type={type} frontblock={data} />
	);
};

export default PreviewPage