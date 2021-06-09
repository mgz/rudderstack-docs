import React, { useEffect, useState } from "react"
import {
  Highlight,
  connectMenu,
  connectRefinementList,
} from "react-instantsearch-dom"
//import { graphql } from "gatsby"

const CustomIntegrationCategoryTypeList = ({
  items,
  currentRefinement,
  refine,
  isFromSearch,
  searchForItems,
  createURL,
}) => {
  const [isAllSelected, setIsAllSelected] = useState(true)

  useEffect(() => {
    if (currentRefinement && currentRefinement.length > 0) {
      setIsAllSelected(false)
    } else {
      setIsAllSelected(true)
    }
  }, [currentRefinement])

  return (
    <div className={`tab`}>
      <input
        class="absolute opacity-0"
        id="tab-multi-two"
        type="checkbox"
        name="tabs"
      />
      <label
        for="tab-multi-two"
        className="text-xl text-blueNew-eastbay font-bold leading-7"
      >
        Categories
      </label>
      <ul className="list-reset block capitalize items-center tab-content overflow-hidden">
        <li className="pt-4">
          <a
            className="leading-5 text-lg flex items-cente text-secondary"
            onClick={event => {
              setIsAllSelected(true)
              refine([])
            }}
          >
            <input
              type="checkbox"
              onClick={event => {}}
              checked={isAllSelected}
              onChange={e => {
                setIsAllSelected(true)
                refine([])
              }}
              className="ais-refinement-list--checkbox mr-3"
              value={isAllSelected}
            />
            All Categories
          </a>
        </li>

        {items.map(item => (
          <li key={item.value} className="pt-4">
            <a
              href={createURL(item.value)}
              className="leading-5 text-lg flex items-cente text-secondary"
              // className={item.isRefined ? 'border-solid border-b-2 border-indigo-500 text-indigo-500 pb-1' : '' }
              onClick={event => {
                event.preventDefault()
                refine(item.value)
              }}
            >
              <input
                id={item.value}
                type="checkbox"
                onClick={event => {
                  event.preventDefault()
                  refine(item.value)
                }}
                checked={item.isRefined}
                // checked={item.isRefined ? "checked" : ""}
                onChange={e => {}}
                className="ais-refinement-list--checkbox mr-3"
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
  )
}

const IntegrationCategoryMenu = connectRefinementList(
  CustomIntegrationCategoryTypeList
)

export default IntegrationCategoryMenu
