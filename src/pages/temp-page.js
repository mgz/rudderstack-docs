import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

const TempPage = props => {
  return (
    <React.Fragment>
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
        {/* <script src={withPrefix("script2.js")} type="text/javascript" /> */}
      </Helmet>
      Hey There
      <div className="lotti-body" id="lottie"></div>
      {/* <Helmet>
        <script src={withPrefix("script2.js")} type="text/javascript" />
      </Helmet> */}
    </React.Fragment>
  )
}

export default TempPage
