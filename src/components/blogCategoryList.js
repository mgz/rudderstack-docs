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
    <ul className="list-reset flex capitalize items-center overflow-auto md:overflow-hidden whitespace-nowrap md:whitespace-normal w-full">
      <li key="ALL">
        <div
          className={`px-2 md:px-8  pt-4 pb-0 md:pb-4 border-solid text-sm md:text-base  h-12 md:h-16 w-28 md:w-auto inline-block ${
            currentRefinement === null
              ? "font-bold border-b-2 border-blueNew-custom text-blueNew-custom"
              : "border-b border-grayColor-lighter"
          }`}
        >
          <a
            href={createURL("")}
            className={"pb-0 md:pb-7"}
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
      {items.map(item => {
        return (
          <li key={item.label}>
            <div
              className={`px-2 md:px-8 pt-4 pb-0 md:pb-4 border-solid text-sm md:text-base h-12 md:h-16 w-28 md:w-auto inline-block ${
                currentRefinement === item.label
                  ? "font-bold border-b-2 border-blueNew-custom text-blueNew-custom"
                  : "border-b border-grayColor-lighter"
              }`}
            >
              <a
                href={createURL("")}
                className={"pb-0 md:pb-7"}
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
