import React from "react"
import { Highlight, connectMenu } from "react-instantsearch-dom"
//import { graphql } from "gatsby"

const Menu = ({items, refine, isFromSearch,  searchForItems, createURL}) => {
  var selected = false;
  // console.log('menu',items)
  items.map(item => {
    if (item.isRefined) selected = true;
  })
  return (
    <ul className="list-reset flex capitalize items-center">
      <li key="0" className="p-6 pl-0">
        <a
          href={createURL('')}
          className={!selected ? 'border-solid border-b-2 border-indigo-500 text-indigo-500 pb-7' : ''}
          onClick={event => {
            event.preventDefault();
            refine('');
          }}
          >
          All categories
        </a>
      </li>
      {items.map(item => (
        <li key={item.value} className="p-6 pl-0">
          <a
            href={createURL(item.value)}
            className={item.isRefined ? 'border-solid border-b-2 border-indigo-500 text-indigo-500 pb-7' : '' }
            onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}
            >
            {isFromSearch ? (
              <Highlight attribute="label" hit={item} />
            ) : (
              item.label
            )}
          </a>
        </li>
      ))}
    </ul>
  )
};

const CustomMenu = connectMenu(Menu)

export default CustomMenu