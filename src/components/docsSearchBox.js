import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

const SearchBox = ({
  currentRefinement,
  isSearchStalled,
  refine,
  onRefineTextChange,
  pleaceholderText,
}) => (
  <>
    <div className="relative overflow-hidden">
      <input
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        placeholder={pleaceholderText ? pleaceholderText : "Search..."}
        role="textbox"
        spellCheck="false"
        value={currentRefinement}
        className="bg-white h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
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
