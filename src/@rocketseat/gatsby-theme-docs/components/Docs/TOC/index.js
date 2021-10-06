import React, { useState, useEffect, useMemo } from "react"
import PropTypes from "prop-types"
import useWindowScroll from "react-use/lib/useWindowScroll"
import useWindowSize from "react-use/lib/useWindowSize"
import { css } from "@emotion/react"

import slug from "@rocketseat/gatsby-theme-docs/src/util/slug"

import { Wrapper, Container } from "./styles"
import tailwindConfig, { theme } from "../../../../../../tailwind.config"
import { filter, includes } from "lodash-es"

export default function TableOfContents({ headings = [], disableTOC = false, contentRef, setTocOpen, isTocOpen = false }) {
  const { y } = useWindowScroll()
  //const theme = useTheme();
  const { width, height } = useWindowSize()
  const [offsets, setOffsets] = useState([])

  const isMobile = width <= 1200

  /* const generateId = () => {
    let tempArr = headings.filter(heading => heading.depth === 2 || heading.depth === 3);
    const duplicates = filter(tempArr, (value, index, iteratee) => includes(iteratee, value, index + 1))
    console.log('Dupes', duplicates);
  } */

  useEffect(() => {
    if (!isMobile || disableTOC) {
      const allHeadings = document.querySelectorAll(`h2, h3`)

      setOffsets(
        allHeadings &&
          Array.from(allHeadings)
            .map(heading => {
              const anchor = heading.querySelector(`a`)
              if (!anchor) return {}
              return {
                id: heading.id,
                offset: heading.offsetTop,
              }
            })
            .filter(Boolean)
      )

      //console.log(Object.entries(allHeadings));
    }
    //generateId();

  }, [width, height, contentRef, isMobile, disableTOC])

  const activeHeading = useMemo(() => {
    if (!isMobile || disableTOC) {
      const windowOffset = height / 2
      const scrollTop = y;
      //console.log('Offsets', offsets);
      if (offsets) {
        for (let i = offsets.length - 1; i >= 0; i -= 1) {
          const { id, offset } = offsets[i]
          if (scrollTop >= offset) {
            /* console.log('Scroll Y', scrollTop);
            console.log('Current id', id);
            console.log('Current offset', offset); */
            return id
          }
        }
      }
    }

    
    return null
  }, [offsets, height, y, isMobile, disableTOC])

  if (!disableTOC) {
    return (
      <Wrapper className="tocWrapper">
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
              {headings && headings
                .filter(heading => heading.depth === 2 || heading.depth === 3)
                .map((heading, i) => {
                  const headingSlug = slug(heading.value);

                  return (
                    <li
                      key={heading.value}
                      style={{
                        marginLeft: heading.depth === 3 ? `8px` : null,
                      }}
                    >
                      <a
                        href={`#${headingSlug}`}
                        onClick={() => isMobile && setTocOpen(false)}
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
  headings: [],
}
