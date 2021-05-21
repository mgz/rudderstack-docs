import React, { useState } from "react"
import { Highlight, connectMenu } from "react-instantsearch-dom"
//import { graphql } from "gatsby"

const Menu = ({ items, isFromSearch, refine, searchForItems, createURL }) => {
  const [selectedCategories, setSelectedCategories] = useState([])
  // console.log("itms", items)

  return (
    <div className="tab">
      <input
        class="absolute opacity-0"
        id="tab-multi-two"
        type="checkbox"
        name="tabs"
      />
      <label
        for="tab-multi-two"
        className="text-xl text-blue font-bold leading-7"
      >
        Categories
      </label>
      <ul className="list-reset block capitalize items-center tab-content overflow-hidden">
        <li className="pt-4">
          <a
            className="leading-5 text-lg flex items-cente text-secondary"
            onClick={event => {
              refine()
            }}
          >
            <input
              type="checkbox"
              onClick={event => {}}
              checked={false}
              onChange={e => {}}
              className="ais-refinement-list--checkbox mr-3"
              value={"ALL"}
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
                type="checkbox"
                onClick={event => {
                  event.preventDefault()
                  refine(item.value)
                }}
                checked={item.isRefined}
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

const IntegrationCategoryMenu = connectMenu(Menu)

export default IntegrationCategoryMenu
