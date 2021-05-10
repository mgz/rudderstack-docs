import React, { useState } from "react"
import { Highlight, connectMenu } from "react-instantsearch-dom"

const Menu = ({
  items,
  currentRefinement,
  refine,
  isFromSearch,
  searchForItems,
  createURL,
  onCategoryChange,
  selectedCategory,
}) => {
  return (
    <ul className="list-reset flex capitalize items-center">
      <li key="ALL">
        <div
          className={`px-8 py-4 border-solid  ${
            currentRefinement === null
              ? "font-bold border-b-2 border-blueNew-custom text-blueNew-custom"
              : "border-b border-grayColor-lighter"
          }`}
        >
          <a
            href={createURL("")}
            className={"pb-7"}
            onClick={event => {
              event.preventDefault()
              // onCategoryChange("ALL")
              refine()
            }}
          >
            All categories
          </a>
        </div>
      </li>
      {items
        .map(item => {
          
          return (
            <li key={item.label}>
              <div
                className={`px-8 py-4 border-solid  ${
                  currentRefinement === item.label
                    ? "font-bold border-b-2 border-blueNew-custom text-blueNew-custom"
                    : "border-b border-grayColor-lighter"
                }`}
              >
                <a
                  href={createURL("")}
                  className={"pb-7"}
                  onClick={event => {
                    event.preventDefault()
                    // onCategoryChange(item.value)
                    refine(item.label)
                  }}
                >
                  {item.label}
                </a>
              </div>
            </li>
          )
        })}
    </ul>
  )
}

const CustomMenu = connectMenu(Menu)

export default CustomMenu
