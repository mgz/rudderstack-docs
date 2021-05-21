import React from "react"
import { Highlight, connectMenu } from "react-instantsearch-dom"
//import { graphql } from "gatsby"

const Menu = ({ items, isFromSearch, refine, searchForItems, createURL }) => {
  var selected = false;
  items.map(item => {
    if (item.isRefined) selected = true;
  })

  return (
  
      <div className="tab">
        <input class="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
        <label for="tab-multi-two" className="text-xl text-blue font-bold leading-7">Categories</label>
        <ul className="list-reset block capitalize items-center tab-content overflow-hidden">
          <li key="0" className="pt-5">
            <a
              href={createURL('')}
              className={!selected ? 'leading-5 text-lg flex items-center text-secondary' : ''}
              onClick={event => {
                event.preventDefault();
                refine('');
              }}
            >
              All categories
        </a>
          </li>
          {items.map(item => (
            <li key={item.value} className="pt-4">
              <a
                href={createURL(item.value)}
                className="leading-5 text-lg flex items-cente text-secondary"
                // className={item.isRefined ? 'border-solid border-b-2 border-indigo-500 text-indigo-500 pb-1' : '' }
                onClick={event => {
                  event.preventDefault();
                  refine(item.value);
                }}
              >
                <input type="checkbox" onClick={event => {
                  event.preventDefault();
                  refine(item.value);
                }} checked={item.isRefined} onChange={e => { }}
                  className="ais-refinement-list--checkbox mr-3" value={item.value} />
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
};

const IntegrationCategoryMenu = connectMenu(Menu)

export default IntegrationCategoryMenu