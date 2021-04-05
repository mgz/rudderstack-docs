import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <>
    <div className="relative">
      <input
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        placeholder="Search for…"
        role="textbox"
        spellCheck="false"
        value={currentRefinement}
        className="form-input px-4 py-3 rounded-full"
        onChange={event => refine(event.currentTarget.value)}
      />
    </div>
  </>
)

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox