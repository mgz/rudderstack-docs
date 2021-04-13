import React from "react"
import { Highlight, connectMenu } from "react-instantsearch-dom"
import { graphql } from "gatsby"

const Menu = ({items, isFromSearch, refine, searchForItems, createURL}) => {
  var selected = false;
  items.map(item => {
    if (item.isRefined) selected = true;
  })

  return (
    <ul className="list-reset flex capitalize items-center">
      <li key="0" className="p-6 pl-0">
        <a
          href={createURL('')}
          className={!selected ? 'border-solid border-b border-blueNew-textblue text-blueNew-textblue pb-7 font-bold' : ''}
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
            className={item.isRefined ? 'border-solid border-b border-blueNew-textblue text-blueNew-textblue pb-7 font-bold' : '' }
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