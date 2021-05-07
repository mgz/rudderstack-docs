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
  console.log("list of itmes", currentRefinement)
  return (
    <ul className="list-reset flex capitalize items-center">
      <li key="ALL">
        <div
          className={`px-8 py-4 border-solid  ${
            selectedCategory === "ALL"
              ? "font-bold border-b-2 border-blueNew-custom text-blueNew-custom"
              : "border-b border-grayColor-lighter"
          }`}
        >
          <a
            href={createURL("")}
            className={"pb-7"}
            onClick={event => {
              event.preventDefault()
              onCategoryChange("ALL")
              refine()
            }}
          >
            All categories
          </a>
        </div>
      </li>
      {items
        .map(item => {
          // console.log(
          //   "for each menu",
          //   selectedCategory === item.value,
          //   selectedCategory,
          //   item.value
          // )
          console.log("s1", items.count)
          return (
            <li key={item.value}>
              <div
                className={`px-8 py-4 border-solid  ${
                  selectedCategory === item.value
                    ? "font-bold border-b-2 border-blueNew-custom text-blueNew-custom"
                    : "border-b border-grayColor-lighter"
                }`}
              >
                <a
                  href={createURL("")}
                  className={"pb-7"}
                  onClick={event => {
                    event.preventDefault()
                    onCategoryChange(item.value)
                    refine(item.value)
                  }}
                >
                  {item.value}
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
