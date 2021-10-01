import React, { useState, useEffect, useMemo } from "react"
import PropTypes from "prop-types"
import useWindowScroll from "react-use/lib/useWindowScroll"
import useWindowSize from "react-use/lib/useWindowSize"
import { css } from "@emotion/react"

import slug from "@rocketseat/gatsby-theme-docs/src/util/slug"

import { Wrapper, Container } from "./styles"
import tailwindConfig, { theme } from "../../../../../../tailwind.config"

export default function TableOfContents({ headings, disableTOC, contentRef }) {
  const { y } = useWindowScroll()
  //const theme = useTheme();
  const { width, height } = useWindowSize()
  const [offsets, setOffsets] = useState([])

  const isMobile = width <= 1200

  useEffect(() => {
    if (!isMobile || disableTOC) {
      const allHeadings = contentRef.current?.querySelectorAll(`h2, h3`)

      setOffsets(
        allHeadings &&
          Array.from(allHeadings)
            .map(heading => {
              const anchor = heading.querySelector(`a`)
              if (!anchor) return {}

              return {
                id: heading.id,
                offset: heading.offsetTop + anchor.offsetTop,
              }
            })
            .filter(Boolean)
      )
    }
  }, [width, height, contentRef, isMobile, disableTOC])

  const activeHeading = useMemo(() => {
    if (!isMobile || disableTOC) {
      const windowOffset = height / 2
      const scrollTop = y + windowOffset

      if (offsets) {
        for (let i = offsets.length - 1; i >= 0; i -= 1) {
          const { id, offset } = offsets[i]
          if (scrollTop >= offset) {
            return id
          }
        }
      }
    }

    return null
  }, [offsets, height, y, isMobile, disableTOC])

  if (!disableTOC) {
    return (
      <Wrapper>
        <Container>
          <h2>
            <span
              className="inline-block pr-2 align-middle"
              css={css`
                @media (max-width: 1200px) {
                  display: none;
                }
              `}
            >
              <svg
                preserveAspectRatio="xMidYMid meet"
                height="1em"
                width="1em"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                stroke={theme.colors.grayColor.dark}
                strokeLinejoin="round"
                className={`tocIcon`}
              >
                <g>
                  <line x1="21" y1="10" x2="7" y2="10"></line>
                  <line x1="21" y1="6" x2="3" y2="6"></line>
                  <line x1="21" y1="14" x2="3" y2="14"></line>
                  <line x1="21" y1="18" x2="7" y2="18"></line>
                </g>
              </svg>
            </span>
            <span className="inline-block pr-2 align-middle">Contents</span>
          </h2>
          <nav>
            <ul>
              {headings
                .filter(heading => heading.depth === 2 || heading.depth === 3)
                .map(heading => {
                  const headingSlug = slug(heading.value)

                  return (
                    <li
                      key={heading.value}
                      style={{
                        marginLeft: heading.depth === 3 ? `8px` : null,
                      }}
                    >
                      <a
                        href={`#${headingSlug}`}
                        style={{
                          color:
                            activeHeading === headingSlug
                              ? tailwindConfig.theme.colors.purpleNew.gigas
                              : tailwindConfig.theme.colors.grayColor.docsText,
                          fontWeight: activeHeading === headingSlug ? 600 : 'normal'
                        }}
                      >
                        {heading.value}
                      </a>
                    </li>
                  )
                })}
            </ul>
          </nav>
        </Container>
      </Wrapper>
    )
  }

  return <Wrapper />
}

TableOfContents.propTypes = {
  headings: PropTypes.array,
  disableTOC: PropTypes.bool.isRequired,
  contentRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
}

TableOfContents.defaultProps = {
  headings: null,
}
