import React from "react";
import { graphql } from "gatsby";
import Errors from "../components/errors";
import Page from "../templates/page";

export const query = graphql`
  query FrontpageQuery {
    page: sanityFrontpageblock {
      id
      _rawPagebuildersectionarray
      slug {
        current
      }
      title
      meta_title
      meta_desc
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
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return <Errors errors={errors} />;
  }

  return <Page data={data} />;
};

export default IndexPage;