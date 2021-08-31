import React from "react";
import { graphql } from "gatsby";
import Errors from "../components/errors";
import Page from "../templates/page";

export const query = graphql`
  query FrontpageQuery {
    page: sanityFrontpageblock(_id: {eq: "frontpageblock"}) {
      id
      _rawPagebuildersectionarray
      slug {
        current
      }
      title
      meta_title
      meta_desc
    }
  }
`;

const IndexPage = props => {
  console.log('Page props', props);
  const { data, errors } = props;

  if (errors) {
    return <Errors errors={errors} />;
  }

  return <Page data={data} />;
};

export default IndexPage;