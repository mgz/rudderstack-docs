import React from "react"
//import {Global} from "@emotion/react"

import loadable from "@loadable/component"

const Global = loadable(() => import('@emotion/react'), {
  resolveComponent: components => components.Global
})

export default function GlobalStyle() {
  /* const theme = useTheme()  */

  return (
    <Global />
  )
}
