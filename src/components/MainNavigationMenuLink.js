import React from "react";
import Link from "gatsby-link"
import SanityLink from "./SanityLink"
import SanitySubLink from "./SanitySubLink"

const MainNavigationMenuLink = (props) => {
  let link = props.link;
  let i = props.i;

  return (
    <li key={i} className={link._rawSubMenuSection !== null ? "has-submenu group" : "group"}>
      <SanityLink link={link} classes="block mt-4 lg:inline-block lg:mt-0 text-main mr-4 xl:mr-12 font-custom" />
      {(() => {
        console.log(link);
        if (link._rawSubMenuSection !== null){
          const submenu = link._rawSubMenuSection.hassubmenu.add_sub_menu_items
          return (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 capitalize sub-menu group-hover:block relative lg:absolute hidden">
              {
                submenu.map(
                  (sublink, j) => (
                    <li key={j} className="p-1">
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