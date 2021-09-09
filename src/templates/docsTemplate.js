import React, { useRef } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import GraphQLErrorList from "../components/graphql-error-list"
import DocsSidebar from "../components/docsSidebar"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import TableOfContents from "@rocketseat/gatsby-theme-docs/src/components/Docs/TOC/index"

const Docs = props => {
  const { data, errors } = props

  //console.log('Docs data', props);

  const pageContent = data.mdx.body || "",
    pageHeadings = data.mdx.headings || [],
    contentRef = useRef(null)

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
        <meta property="og:title" content={data.mdx.frontmatter.title} />
        <meta property="twitter:title" content={data.mdx.frontmatter.title} />
        <meta name="description" content={data.mdx.frontmatter.description} />
        <meta
          property="og:description"
          content={data.mdx.frontmatter.description}
        />
        <meta
          property="twitter:description"
          content={data.mdx.frontmatter.description}
        />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="flex min-h-screen font-custom mx-auto docs-wrapper">
        <aside className="sidebar-nav border-r border-grayColor-lightBorder py-5">
          <DocsSidebar />
        </aside>
        <main className="docs-main-content p-8" ref={contentRef}>
          <MDXProvider>
            <MDXRenderer>{pageContent}</MDXRenderer>
          </MDXProvider>
        </main>
        <aside className="toc">
          <TableOfContents
            headings={pageHeadings}
            contentRef={contentRef}
            disableTOC={false}
          />
        </aside>
      </div>
    </div>
  )
}

export const query = graphql`
  query DocsTemplateQuery {
    mdx {
      frontmatter {
        title
        description
      }
      headings {
        value
        depth
      }
      body
    }
  }
`

export default Docs
