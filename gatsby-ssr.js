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

  
  export const onRenderBody = ({pathname ,setPostBodyComponents }) => {
  // if(pathname.includes("careers")){
  //   setPostBodyComponents([
  //     <script src="https://boards.greenhouse.io/embed/job_board/js?for=rudderstack"></script>,
  //     //<script src="https://boards.greenhouse.io/embed/job_board/js?for=rudderstack"></script>,
  //   ])
  // }
    
}

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
  // replaceHeadComponents(headComponents)
} 
