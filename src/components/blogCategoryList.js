import React from "react"
import { connectMenu } from "react-instantsearch-dom"

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
  // console.log('items',items)
  return (
    <ul className="list-reset flex max-w-full overflow-x-auto border-b border-grayColor-lighter">
      <li key="ALL" className={`px-5 py-2 ${
            currentRefinement === null
              ? "font-bold border-b-2 border-blueNew-eastbay text-blueNew-eastbay"
              : ""
          }`}>
        <div
          className={`text-sm md:text-base  w-max inline-block`}
        >
          <a
            href={createURL("")}
            className={""}
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
          <li key={item.label} className={`px-5 py-2 ${
            currentRefinement === item.label
              ? "font-bold border-b-2 border-blueNew-eastbay text-blueNew-eastbay"
              : ""
          }`}>
            <div
              className={`text-sm md:text-base w-max inline-block`}
            >
              <a
                href={createURL("")}
                className={""}
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
