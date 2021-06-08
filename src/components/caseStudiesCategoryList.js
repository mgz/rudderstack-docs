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
    <ul className="list-reset flex capitalize items-center overflow-x-auto overflow-y-hidden whitespace-nowrap xl:whitespace-normal w-full">
      <li key="ALL">
        <div
          className={`px-4 sm:px-6 xl:px-8  pt-4 pb-4 border-solid text-sm md:text-base  w-auto inline-block ${
            currentRefinement === null
              ? "font-bold border-b-2 border-blueNew-eastbay text-blueNew-eastbay"
              : "border-b border-grayColor-lighter"
          }`}
        >
          <a
            href={createURL("")}
            className={"pb-0 md:pb-7"}
            onClick={event => {
              event.preventDefault()
              refine()
            }}
          >
            All
          </a>
        </div>
      </li>
      {items.map(item => {
        return (
          <li key={item.label}>
            <div
              className={`px-4 sm:px-6 xl:px-8 pt-4 pb-4 border-solid text-sm md:text-base  w-auto inline-block ${
                currentRefinement === item.label
                  ? "font-bold border-b-2 border-blueNew-eastbay text-blueNew-eastbay"
                  : "border-b border-grayColor-lighter"
              }`}
            >
              <a
                href={createURL("")}
                className={"pb-0 md:pb-7"}
                onClick={event => {
                  event.preventDefault()
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

const CaseStudiesMenu = connectMenu(Menu)

export default CaseStudiesMenu
