import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

const SearchBox = ({
  currentRefinement,
  isSearchStalled,
  refine,
  onRefineTextChange,
  pleaceholderText,
  isSearchOpen
}) => (
  <>
    <div className="docsSearch">
      <span className="docsSearchIcon">
        <svg
          preserveAspectRatio="xMidYMid meet"
          height="1em"
          width="1em"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          className="icon-7f6730be--text-3f89f380"
        >
          <g>
            <circle cx="10.5" cy="10.5" r="7.5"></circle>
            <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
          </g>
        </svg>
      </span>
      <input
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        autoFocus
        placeholder={pleaceholderText ? pleaceholderText : "Search..."}
        role="textbox"
        spellCheck="false"
        value={currentRefinement}
        className="bg-white h-12 pr-5 w-full"
        onChange={event => {
          refine(event.currentTarget.value)
          onRefineTextChange(event.currentTarget.value)
        }}
      />
    </div>
  </>
)

const DocsSearchBox = connectSearchBox(SearchBox)

export default DocsSearchBox
