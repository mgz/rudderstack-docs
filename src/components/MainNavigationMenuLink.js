import React, { useState } from "react"
import Link from "gatsby-link"
import Image from "./image"
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
        } parent-menu block text-base lg:mr-4 xl:mr-10 ${
          i === 0 ? "font-normal" : "font-normal"
        } font-custom p-3  bg-blueNew-midnight_sub sm:shadow-sm lg:py-2 lg:px-0 lg:bg-transparent lg:shadow-none rounded-lg lg:rounded-sm`}
        onclick={() =>
          link._rawSubMenuSection !== null && window.innerWidth < 1024
            ? setOnClickEvent(!onClickEvent)
            : () => false
        }
      />
      {(() => {
        if (link._rawSubMenuSection !== null) {
          const submenugroup = link._rawSubMenuSection.hassubmenu.add_menu_group
          // console.log("submenugroup", submenugroup)
          return (
            <div className="lg:pt-4 ">
              <div
                className={`capitalize sub-menu lg:group-hover:grid relative lg:absolute lg:shadow-menu  lg:rounded-0 py-1 lg:py-14   z-50
              lg:right-0 lg:left-0 bg-blueNew-midnight lg:place-items-left ${
                onClickEvent == 1 ? `flex` : `grid hidden`
              }
             `}
              >
                <ul
                  className={`grid-cols-1 md:grid-cols-5 gap-3 lg:group-hover:grid lg:max-w-screen-lg py-4 md:py-0 w-full mx-auto `}
                >
                  {submenugroup.map(menuGroup => {
                    return (
                      <div className="pb-2 pt-4 lg:pt-0">
                        <div className="flex text-white">
                          <div className="px-3">
                            {menuGroup.group_icon && (
                              <Image
                                props={menuGroup.group_icon.asset._ref}
                                classes="w-6 object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-lg pb-4 leading-6  ">
                              {menuGroup.group_title}
                            </div>

                            <div className="text-sm pb-1  ">
                              {menuGroup.add_sub_menu_items &&
                                menuGroup.add_sub_menu_items.map(
                                  (submenu, j) => {
                                    {
                                      // console.log("submenu", submenu)
                                      return (
                                        <li
                                          key={j}
                                          className="text-xs font-custom pb-2 "
                                        >
                                          <a
                                            className={`border-b border-solid border-transparent hover:border-white`}
                                            rel="noopener noreferrer"
                                            href={submenu.sub_menu_item_link}
                                            target={
                                              submenu.menu_target_link
                                                ? "_blank"
                                                : "_self"
                                            }
                                          >
                                            {submenu.sub_menu_item_title}
                                          </a>
                                        </li>
                                      )
                                    }
                                  }
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        }
        return null
      })()}
    </li>
  )
}

export default MainNavigationMenuLink
