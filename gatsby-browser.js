/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import "@fontsource/noto-sans/400.css"
// import "@fontsource/noto-sans/700.css"
// import "@fontsource/plus-jakarta-sans/700.css"
// import "./src/guides/css/main.css"

import "./src/css/fonts.css"
import "./src/css/site.css"
import "./src/css/integrations.css"
import "./src/css/docs.css"
import "./src/css/cookies.css"
import "./src/css/blog.css"
import "./src/css/agreement.css"
import "./src/css/product.css"
import "./src/css/pricing.css"
import "./src/css/code-editor.css"
const { DateTime } = require("luxon")

export const onRouteUpdate = () => {
  var delay = 400

  window.setTimeout(function () {
    window.rudderanalytics &&
      window.rudderanalytics.page("page_view", {
        branch: process.env.GATSBY_BRANCH,
      })
  }, delay)

  // window.rudderanalytics &&
  //   window.rudderanalytics.page("page_view", {
  //     branch: process.env.GATSBY_BRANCH,
  //     timezone: {
  //       name: DateTime.now().zone.name,
  //     },
  //   })
}
