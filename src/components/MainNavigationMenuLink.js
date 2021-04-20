import React, { useState } from "react";
import Link from "gatsby-link"
import SanityLink from "./SanityLink"
import SanitySubLink from "./SanitySubLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import $ from 'jquery';

const MainNavigationMenuLink = (props) => {

  const [onclickevent, setOnclickevent] = useState(false);

  let link = props.link;
  let i = props.i;

  return (
    <li key={i} className={`${link._rawSubMenuSection !== null ? `has-submenu group` : `group`} mt-2 lg:mt-0`}>
      <SanityLink link={link} classes={`${onclickevent == 1 ? `active` : ``} parent-menu block mt-4 lg:inline-block lg:mt-0 text-base mr-4 xl:mr-12 font-bold lg:font-normal lg:py-2`} onclick={() => (link._rawSubMenuSection !== null && window.innerWidth < 1024) ? setOnclickevent(!onclickevent) : () => false } />
      {(() => {
        if (link._rawSubMenuSection !== null){
          const submenu = link._rawSubMenuSection.hassubmenu.add_sub_menu_items
          return (
            <ul className={`grid-cols-1 md:grid-cols-2 gap-4 capitalize sub-menu lg:group-hover:grid relative lg:absolute lg:shadow-menu lg:bg-whiteColor-custom lg:rounded-2xl py-1 lg:p-6 lg:-ml-6 z-50 ${onclickevent == 1 ? `block` : `grid hidden`}`}>
              {
                submenu.map(
                  (sublink, j) => (
                    <li key={j} className="text-sm">
                      <SanitySubLink link={sublink} />
                    </li>
                  )
                )
              }
            </ul>
          )
        }
        return null;
      })()}
    </li>
  )
}

export default MainNavigationMenuLink;