import React, { useEffect, createRef } from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
//import lottie from "lottie-web"
//import animation from "../../static/animation.js"

const TempPage = props => {
  // let animationContainer = createRef();

  return (
    <React.Fragment>
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
        <script src={withPrefix("script2.js")} type="text/javascript" />
      </Helmet>
      Hey There
      {/* <div className="lotti-body" id="lottie" ref={animationContainer} /> */}
      <div className="lotti-body" id="lottie" />
      {/*<Helmet>
        <script src={withPrefix("script2.js")} type="text/javascript" />
      </Helmet>*/}
    </React.Fragment>
  )
}

export default TempPage
