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

  
  //export const onRenderBody = ({pathname ,setPostBodyComponents }) => {
  // if(pathname.includes("careers")){
  //   setPostBodyComponents([
  //     <script src="https://boards.greenhouse.io/embed/job_board/js?for=rudderstack"></script>,
  //     //<script src="https://boards.greenhouse.io/embed/job_board/js?for=rudderstack"></script>,
  //   ])
  // }
    
//}

//To reduce page size and to address the linkedin and tweet share issues.

/*  export const onRenderBody = (
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
} */


export const onPreRenderHTML = ({
  getHeadComponents, replaceHeadComponents
}) => {
  const headComponents = getHeadComponents()

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
  
  headComponents.sort((x, y) => {
    if (x.props && x.props["data-react-helmet"]) {
      return -1
    } else if (y.props && y.props["data-react-helmet"]) {
      return 1
    }
    return 0
  })

  replaceHeadComponents(headComponents)
}
/*  export const onPreRenderHTML = ({
  pathname,
  getHeadComponents,
  replaceHeadComponents,
}) => {
  // console.log("inlining css for ", pathname, pathname.includes("/integration/"))
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
  headComponents.sort((a, b) => {
    if (a.props && a.props["data-react-helmet"]) {
        return 0;
    }
    return 1;
});

replaceHeadComponents(headComponents);
}  */
