export const onPreRenderHTML = ({
  pathname,
  getHeadComponents,
  replaceHeadComponents,
}) => {
  if (
    !pathname.includes("/integration/") ||
    !pathname.includes("/blog/")
  ) {
    return
  }

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
 