import React from "react"
import {
  Highlight,
  connectMenu,
  connectRefinementList,
} from "react-instantsearch-dom"
//import { graphql } from "gatsby"

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
          for="tab-multi-one"
          className="text-xl text-blueNew-eastbay font-bold leading-7"
        >
          Types
        </label>
        <ul className="list-reset block capitalize items-center tab-content overflow-hidden">
          {items.map(item => (
            <li key={item.value} className="pt-5">
              <a
                href={createURL(item.value)}
                className="leading-5 text-lg flex items-cente text-secondary"
                onClick={event => {
                  event.preventDefault()
                  refine(item.value)
                }}
              >
                <input
                  type="checkbox"
                  onClick={event => {
                    event.preventDefault()
                    refine(item.value)
                  }}
                  checked={item.isRefined}
                  onChange={e => {}}
                  className="ais-refinement-list--checkbox mr-3 flex items-center"
                  value={item.value}
                />
                {isFromSearch ? (
                  <Highlight attribute="label" hit={item} />
                ) : (
                  item.label
                )}
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
