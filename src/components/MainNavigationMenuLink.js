import React, { useState } from "react"
import Link from "gatsby-link"
import SanityLink from "./SanityLink"
import SanitySubLink from "./SanitySubLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const MainNavigationMenuLink = props => {
  const [onClickEvent, setOnClickEvent] = useState(false)

  let link = props.link
  let i = props.i

  return (
    <li
      key={i}
      className={`${
        link._rawSubMenuSection !== null ? `has-submenu group` : `group`
      } mt-2 lg:mt-0`}
    >
      <SanityLink
        link={link}
        menuIndex={i}
        classes={`${
          onClickEvent == 1 ? `active` : ``
        } parent-menu block mt-4 lg:mt-0 text-base mr-4 xl:mr-10 ${i === 0 ? "font-normal" : "font-normal"} font-custom lg:py-2`}
        onclick={() =>
          link._rawSubMenuSection !== null && window.innerWidth < 1024
            ? setOnClickEvent(!onClickEvent)
            : () => false
        }
      />
      {(() => {
        if (link._rawSubMenuSection !== null) {
          const submenu = link._rawSubMenuSection.hassubmenu.add_sub_menu_items
          return (
            <ul
              className={`grid-cols-1 md:grid-cols-2 gap-4 capitalize sub-menu lg:group-hover:grid relative lg:absolute lg:shadow-menu lg:bg-whiteColor-custom lg:rounded-2xl py-1 lg:p-6 lg:-ml-6 z-50 ${
                onClickEvent == 1 ? `block` : `grid hidden`
              }`}
            >
              {submenu.map((sublink, j) => (
                <li key={j} className="text-sm font-custom">
                  <SanitySubLink link={sublink} />
                </li>
              ))}
            </ul>
          )
        }
        return null
      })()}
    </li>
  )
}

export default MainNavigationMenuLink
