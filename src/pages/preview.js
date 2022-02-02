import React from "react"
import {  graphql } from "gatsby"
// import { Helmet } from 'react-helmet'
import PreviewTemplate from "../templates/previewtemplate"
import * as queryString from 'query-string';

export const query = graphql `
      query Frontblock {
          sanityFrontpageblock{
            _rawPagebuildersectionarray
          }
          sanityNewThemeFrontPage{
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

          allGoogleSpreadsheetR1IntegrationSpecificAssets {
            edges {
              node {
                sanityRelationSlug
                category
                integrationSlug
              }
            }
          }

          allGoogleSpreadsheetR1RedRudderstackIcData {
            edges {
              node {
                slug
                id
                googleSpreadsheetId
                sourceLogoIconUrl
                sourceLogoImgUrl
                destinationLogoIconUrl
                destinationLogoImgUrl
                destinationSlug
                sourceSlug
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

          all_images: allSanityImageAsset {
            edges {
              node {
                url
                _id
              }
            }
          }
      }
    `

const PreviewPage = ({data, location}) => {
	var { type, pageId, isDraft } = queryString.parse(location.search);
  if (isDraft) {pageId = "drafts."+pageId}
	return (
	  <PreviewTemplate pageid={pageId} type={type} frontblock={data} location={location} />
	);
};

export default PreviewPage