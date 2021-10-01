import React, { useState } from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"
import { rudderslabTrackOnSearch } from "../utils/common"
library.add(faSearch)

const SearchBox = ({
  currentRefinement,
  isSearchStalled,
  refine,
  onRefineTextChange,
  pleaceholderText,
}) => {
  const [currText, setCurrText] = useState("")

  return (
    <>
      <div className="relative overflow-hidden">
        <input
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          placeholder={
            pleaceholderText ? pleaceholderText : "Type your Keyword"
          }
          role="textbox"
          spellCheck="false"
          value={currText}
          className="border border-grayColor-lighter bg-white h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
          onKeyPress={event => {
            if (event.charCode === 13) {
              event.preventDefault()
              refine(currText)
              setCurrText(currText)

              rudderslabTrackOnSearch(currText)
            }
          }}
          onChange={event => {
            setCurrText(event.currentTarget.value)
            onRefineTextChange(event.currentTarget.value)
            if (event.currentTarget.value === "") {
              refine("")
            }
          }}
        />

        <div
          onClick={() => {
            refine(currText)
            setCurrText(currText)
            rudderslabTrackOnSearch(currText)
          }}
          className="absolute top-0 right-0 rounded-r-lg bg-blueNew-eastbay  hover:bg-blueNew-textblue w-12"
        >
          <FontAwesomeIcon
            icon={faSearch}
            // size="sm"
            style={{ fontSize: "18px" }}
            className="h-11 text-white pt-2 py-2"
          />
        </div>
      </div>
    </>
  )
}

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox
