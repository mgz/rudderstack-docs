import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <>
    <div className="relative overflow-hidden">
      <input
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        placeholder="Type your Keyword"
        role="textbox"
        spellCheck="false"
        value={currentRefinement}
        className="border border-grayColor-lighter bg-white h-10 px-5 pr-16 rounded text-sm focus:outline-none w-full"
        onChange={event => refine(event.currentTarget.value)}
      />
      <div className="absolute top-0 right-0 rounded bg-blueNew-textblue hover:bg-blueNew-textblue w-12">
        <FontAwesomeIcon icon={faSearch} size="lg" className="h-10 text-white pt-2 py-2"/>
        </div>
    </div>
  </>
)

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox