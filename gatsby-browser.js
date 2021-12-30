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

export const onRouteUpdate = (_ref, _ref2) => {
  var prevLocation = _ref.prevLocation

  function trackRudderStackPage() {
    var delay = 1000

    window.setTimeout(function () {
      window.rudderanalytics &&
        window.rudderanalytics.page("page_view", {
          branch: process.env.GATSBY_BRANCH,
          timezone: {
            name: DateTime.now().zone.name,
          },
        })
    }, delay)
  }

  if (window.rudderSnippetLoaded === false) {
    if (window.rudderSnippetLoading === true) {
      // As the loading is in progress, set the alternate callback function
      // to track page
      window.rudderSnippetLoadedCallback = function () {
        trackRudderStackPage()
      }
    } else {
      // if it is not the first page
      if (prevLocation) {
        // Trigger the script loader and set the callback function
        // to track page
        window.rudderSnippetLoadedCallback = undefined
        window.rudderSnippetLoader(function () {
          trackRudderStackPage()
        })
      } else {
        // As this is the first page, set the alternate callback function
        // to track page and wait for the scroll event to occur (for SDK to get loaded)
        window.rudderSnippetLoadedCallback = function () {
          trackRudderStackPage()
        }
      }
    }
  } else {
    trackRudderStackPage()
  }
}
