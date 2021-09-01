import React from "react";
import { graphql } from "gatsby";
import Errors from "../components/errors";
import Docs from "../templates/docsTemplate";


const DocsPage = props => {
  const { data, errors } = props;

  if (errors) {
    return <Errors errors={errors} />;
  }

  return <Docs data={data} />;
};

export const query = graphql`
  query FrontpageQuery {
    allMdx {
        nodes {
          frontmatter {
            description
            slug
            title
          }
          id
        }
    }
  }
`;
export default DocsPage;