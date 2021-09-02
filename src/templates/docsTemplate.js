import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import GraphQLErrorList from "../components/graphql-error-list"
import DocsSidebar from "../components/docsSidebar";
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';


const Docs = props => {
  const { data, errors } = props;

  //console.log('Docs data', props);

  const pageContent = data.mdx.body || ""


  if (errors) {
    return (
      <Layout location={props.location}>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }


  return (
    <div>
      <Helmet>
        <title>{data.mdx.frontmatter.title}</title>
        <meta
          property="og:title"
          content={data.mdx.frontmatter.title}
        />
        <meta
          property="twitter:title"
          content={data.mdx.frontmatter.title}
        />
        <meta name="description" content={data.mdx.frontmatter.description} />
        <meta property="og:description" content={data.mdx.frontmatter.description} />
        <meta
          property="twitter:description"
          content={data.mdx.frontmatter.description}
        />
        <meta property="og:type" content="article" /> 
      </Helmet>

      <div className="flex min-h-screen font-custom mx-auto docs-wrapper">
        <aside className="sidebar-nav sticky border-r border-grayColor-lightBorder py-5">
          <DocsSidebar />
        </aside>
        <main className="docs-main-content p-8">
          <MDXProvider>
            <MDXRenderer frontmatter={data.frontmatter}>{pageContent}</MDXRenderer>
          </MDXProvider>
        </main>
      </div>
    </div>
)
}

export const query = graphql`
  query DocsTemplateQuery($slug: String){
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        slug
        title
        description
      }
      body
    }
  }
`

export default Docs;