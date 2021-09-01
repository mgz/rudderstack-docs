import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import GraphQLErrorList from "../components/graphql-error-list"

export const query = graphql`
  query DocsTemplateQuery {
    mdx(slug: {eq: "$slug"}) {
      frontmatter {
        title
        description
      }
      id
    }
  }
`

const Docs = props => {
  const { data, errors } = props;


  if (errors) {
    return (
      <Layout location={props.location}>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }


  return (<Layout location={props.location}>
    {/* <Helmet>
      <title>{data.page.meta_title || data.page.title}</title>
      <meta
        property="og:title"
        content={data.page.meta_title || data.page.title}
      />
      <meta
        property="twitter:title"
        content={data.page.meta_title || data.page.title}
      />
      <meta name="description" content={data.page.meta_desc} />
      <meta property="og:description" content={data.page.meta_desc} />
      <meta
        property="twitter:description"
        content={data.page.meta_desc}
      />
      {/* <meta property="og:type" content="article" /> 
    </Helmet> */}

    {/* <SEO
      title={pageTitle}
      // description={site.description}
      bodyAttr={{
        class: "leading-normal tracking-normal text-white gradient",
      }}
    /> */}
    {/* <div className="pt-10 font-custom">{content}</div> */}
  </Layout>
)
}

export default Docs;