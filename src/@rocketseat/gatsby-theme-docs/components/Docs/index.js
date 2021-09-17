import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
/* import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css" */
import mediumZoom from "medium-zoom"

import Layout from "../Layout"
import SEO from "@rocketseat/gatsby-theme-docs/src/components/SEO"
import PostNav from "@rocketseat/gatsby-theme-docs/src/components/Docs/PostNav"
import EditGithub from "@rocketseat/gatsby-theme-docs/src/components/Docs/EditGithub"

export default function Docs({ mdx, pageContext }) {
  const { prev, next, repositoryEditUrl, repositoryProvider } = pageContext
  const { title, description, image, disableTableOfContents } = mdx.frontmatter
  const { headings, body } = mdx
  const { slug } = mdx.fields

  useEffect(() => {
    const zoom = mediumZoom(document.querySelectorAll("img"))

    return () => {
      zoom.detach()
    }
  }, [])

  return (
    <>
      <SEO title={title} description={description} slug={slug} image={image} />
      <Layout
        disableTableOfContents={disableTableOfContents}
        title={title}
        headings={headings}
      >
        <div id="zoom-container"></div>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <EditGithub
          repositoryEditUrl={repositoryEditUrl}
          repositoryProvider={repositoryProvider}
        />
        <PostNav prev={prev} next={next} />
      </Layout>
    </>
  )
}

Docs.propTypes = {
  mdx: PropTypes.shape({
    body: PropTypes.string,
    headings: PropTypes.array,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      disableTableOfContents: PropTypes.bool,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({}),
    next: PropTypes.shape({}),
    repositoryEditUrl: PropTypes.string,
    repositoryProvider: PropTypes.string,
  }).isRequired,
}
