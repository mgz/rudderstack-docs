/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * 
 *  <script
      key="hero-banner-animation-first"
      src={'/script.js'}
      defer
    />,
    <script
      key="hero-banner-animation-second"
      src={'/script2.js'}
      defer
    />,
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it.
import React from "react"
import { isMobile, isBrowser } from "react-device-detect"
const { Helmet } = require("react-helmet")

// export const onRenderBody = ({ pathname, setPostBodyComponents }) => {
//   // if(pathname.includes("careers")){
//   //   setPostBodyComponents([
//   //     <script src="https://boards.greenhouse.io/embed/job_board/js?for=rudderstack"></script>,
//   //     //<script src="https://boards.greenhouse.io/embed/job_board/js?for=rudderstack"></script>,
//   //   ])
//   // }
// }

export const onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}

//code added to reduce page size
export const onPreRenderHTML = ({
  pathname,
  getHeadComponents,
  replaceHeadComponents,
}) => {
  // console.log("inlining css for ", pathname, pathname.includes("/integration/"))
  if (
    process.env.NODE_ENV !== "production" ||
    !pathname.includes("/integration/")
  ) {
    return
  }
  // console.log("inlining css for ", pathname)

  const headComponents = getHeadComponents()
  headComponents.sort((x, y) => {
    if (x.props && x.props["data-react-helmet"]) {
      return -1
    } else if (y.props && y.props["data-react-helmet"]) {
      return 1
    }
    return 0
  })

  headComponents.forEach(element => {
    if (element.type === "style" && element.props["data-href"]) {
      element.type = "link"
      element.props.href = element.props["data-href"]
      element.props.rel = "stylesheet"
      element.props.type = "text/css"

      delete element.props["data-href"]
      delete element.props.dangerouslySetInnerHTML
    }
  })
  replaceHeadComponents(headComponents)
}
