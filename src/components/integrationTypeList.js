import React from "react"
import {
  Highlight,
 
  connectRefinementList,
} from "react-instantsearch-dom"
//import { graphql } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons/faCheckSquare"
import { faSquare } from "@fortawesome/free-regular-svg-icons/faSquare"

library.add(faCheckSquare, faSquare);

const CustomIntegrationTypeList = ({
  items,
  currentRefinement,
  refine,
  isFromSearch,
  searchForItems,
  createURL,
}) => {
  return (
    <div className={``}>
      <div className="tab">
        <input
          class="absolute opacity-0 "
          id="tab-multi-one"
          type="checkbox"
          name="tabs"
        />
        <label
        htmlFor="tyoes"
          for="tab-multi-one"
          className="text-xl text-blueNew-eastbay font-bold leading-7"
        >
          Types
        </label>
        <ul className="list-reset block capitalize items-center tab-content overflow-hidden">
          {items.map(item => (
            <li key={item.value} className="pt-0">
              <a
                href={createURL(item.value)}
                className="leading-5 text-lg flex items-cente text-secondary items-center"
                onClick={event => {
                  event.preventDefault()
                  refine(item.value)
                }}
              >
                {/* <input
                  type="checkbox"
                  onClick={event => {
                    event.preventDefault()
                    refine(item.value)
                  }}
                  checked={item.isRefined}
                  onChange={e => {}}
                  className="ais-refinement-list--checkbox mr-3 flex items-center"
                  value={item.value}
                /> */}
                <FontAwesomeIcon
                  icon={item.isRefined ? faCheckSquare : faSquare}
                  style={{ fontSize: "22px" }}
                  className="h-11 text-blueNew-eastbay rounded-lg pt-2 py-2 mr-2"
                />
                <div className="text-center align-middle">
                  {isFromSearch ? (
                    <Highlight attribute="label" hit={item} />
                  ) : (
                    item.label
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const IntegrationTypeMenu = connectRefinementList(CustomIntegrationTypeList)

export default IntegrationTypeMenu
