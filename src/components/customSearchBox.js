import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { BsSearch } from "react-icons/bs"

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <>
    <div className="relative">
      <input
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        placeholder="Type your Keyword"
        role="textbox"
        spellCheck="false"
        value={currentRefinement}
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded text-sm focus:outline-none w-full"
        onChange={event => refine(event.currentTarget.value)}
      />
      <div class="absolute top-0 right-0">
      <BsSearch className="h-10 w-12 text-white rounded bg-indigo-500 hover:bg-indigo-600 pt-2 py-2" />
        </div>
    </div>
  </>
)

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox