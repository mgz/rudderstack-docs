import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider} from "@mdx-js/react"
import {preToCodeBlock} from 'mdx-utils'
import Code from '../Code'
import mediumZoom from "medium-zoom"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import "@reach/tabs/styles.css"
import Layout from "../Layout"
import SEO from "../SEO"
import PostNav from "./PostNav"
import EditGithub from "@rocketseat/gatsby-theme-docs/src/components/Docs/EditGithub"
import { forEach, findIndex } from "lodash"
import { postNavList } from "./PostNav/postNavList"
import {BlockMath, InlineMath} from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Docs({ mdx, pageContext }) {
  const { repositoryEditUrl, repositoryProvider } = pageContext
  const { title, description, image, disableTableOfContents } = mdx.frontmatter
  const { headings, body } = mdx
  const { slug } = mdx.fields

  let docsBasePath = '/docs';
  let currentPageIndex = findIndex(postNavList, o => slug === docsBasePath + o.link);
  let currentPageItem =  postNavList[currentPageIndex];
  let nextPageIndex = currentPageIndex + 1 === postNavList.length ? 0 : currentPageIndex + 1;
  let nextPageItem =  postNavList[nextPageIndex];
  let prevPageIndex = currentPageIndex - 1 < 0 ? postNavList.length - 1 : currentPageIndex - 1;
  let prevPageItem =  postNavList[prevPageIndex];
  
  const shortCodes = {
    pre: (preProps) => {
      const props = preToCodeBlock(preProps);
  
      if (props) {
        return <Code {...props} />;
      }
  
      return <pre {...preProps} />;
    },
     Tabs,
     TabList,
     Tab,
     TabPanels,
     TabPanel,
     BlockMath,
     InlineMath    
    }

  useEffect(() => {
    (function(){
      const zoom = mediumZoom(document.querySelectorAll("img:not(.mainLogo)"))

      return () => {
        zoom.detach()
      }
    })()

    let descriptionSpan = `<span>${description === null ? '' : description}</span>`;
    let h1Tags = document.querySelectorAll("h1");
    forEach(h1Tags, (o) => o.innerHTML = title + descriptionSpan);
    h1Tags.innerHTML = descriptionSpan;    
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
        <MDXProvider components={shortCodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <EditGithub
          repositoryEditUrl={repositoryEditUrl}
          repositoryProvider={repositoryProvider}
        />
        <PostNav prev={prevPageItem} next={nextPageItem} current={currentPageItem} />
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
