import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import PreviewTemplate from "../templates/previewtemplate"
import * as queryString from 'query-string';

export const query = graphql `
      query Frontblock {
          sanityFrontpageblock {
            _rawPagebuildersectionarray
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