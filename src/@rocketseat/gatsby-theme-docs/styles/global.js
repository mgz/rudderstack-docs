import React from "react"
import { useTheme, Global, css } from "@emotion/react"

export default function GlobalStyle() {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          //font-size: 16px;
          //font-family: ${theme.fonts.body};
          //background-color: ${theme.colors.background};
          text-rendering: optimizelegibility;
          -webkit-font-smoothing: antialiased;
          overflow-y: scroll;
        }
        .successBlock {
          background-color:#F5F7F9;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          border-left-width: 4px;
          line-height: 1.625;
        }
        .warningBlock {
          background-color:#F5F7F9 !important;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          border-left-width: 4px;
          line-height: 1.625;
        }
        .dangerBlock {
          background-color:#F5F7F9;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          border-left-width: 4px;
          line-height: 1.625;
        }
        .infoBlock{
          background-color:#F5F7F9;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          border-left-width: 4px;
          line-height: 1.625;
        }
      `}
    />
  )
}
