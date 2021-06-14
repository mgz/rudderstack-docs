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

// You can delete this file if you're not using it
import React from "react"

export const onRenderBody = ({
  setPostBodyComponents,
  setPreBodyComponents,
}) => {
  setPreBodyComponents([
    <script key="hero-banner-animation-first" src={"/script.js"} defer />,
  ])
  // setPostBodyComponents([
  //   <script key="hero-banner-animation-first" src={"/script2.js"} defer />,
  // ])
}