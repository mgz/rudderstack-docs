import React, { useEffect, useState } from "react"
import Image from "./image"
import SanityLink from "./SanityLink"
import { rudderslabTrackOnClick } from "../utils/common"

const MainNavigationMenuLink = props => {
  const [onClickEvent, setOnClickEvent] = useState(false)

  let link = props.link
  let i = props.i

  return (
    <li
      key={i}
      className={`${
        link._rawSubMenuSection !== null ? `has-submenu group` : `group`
      } mt-2 lg:mt-0 hover:font-bold text-whiteColor-custom lg:text-blueNew-midnight`}
    >
      <SanityLink
        link={link}
        menuIndex={i}
        classes={`${
          onClickEvent == 1 ? `active` : ``
        } parent-menu block text-base lg:mr-4 xl:mr-10 font-custom font-normal  p-3  bg-blueNew-midnight_sub sm:shadow-sm lg:py-2 lg:px-0 lg:bg-transparent lg:shadow-none rounded-lg lg:rounded-sm`}
        onclick={() =>
          link._rawSubMenuSection !== null && window.innerWidth < 1024
            ? setOnClickEvent(!onClickEvent)
            : () => false
        }
      />
      {(() => {
        if (link._rawSubMenuSection !== null) {
          const submenugroup = link._rawSubMenuSection.hassubmenu.add_menu_group
          return (
            <div className="lg:pt-2">
              <div
                className={`sub-menu lg:group-hover:grid relative lg:absolute lg:shadow-md  lg:rounded-2xl py-1 lg:py-0 z-40  mx-auto ${
                  i >= 4 ? "lg:left-80 xl:left-96" : ""
                }
               bg-whiteColor-custom lg:place-items-left ${
                 onClickEvent == 1 ? `flex` : `flex hidden`
               }
               overflow-y-auto lg:overflow-hidden h-80 lg:h-64
             `}
              >
                <ul
                  className={` flex flex-col lg:flex-row w-full lg:mx-auto my-0`}
                >
                  {submenugroup &&
                    submenugroup.map((menuGroup, idx) => {
                      return (
                        <div
                          className={`py-2 lg:py-6 ${
                            submenugroup.length - 1 === idx
                              ? ""
                              : "lg:border-grayColor-lighter-2x lg:border-r"
                          } `}
                        >
                          <div className="flex flex-row lg:flex-col text-blueNew-midnight ">
                            <div className="mb-4 px-4 lg:px-12 w-18">
                              {menuGroup.group_icon && (
                                <Image
                                  props={menuGroup.group_icon.asset._ref}
                                  classes="h-8 w-auto object-cover"
                                />
                              )}
                            </div>
                            <div>
                              <div className="font-bold text-lg pb-2 lg:pb-4 leading-6 px-4 lg:px-12">
                                {menuGroup.group_title}
                              </div>

                              <div className="text-sm pb-1  ">
                                {menuGroup.add_sub_menu_items &&
                                  menuGroup.add_sub_menu_items.map(
                                    (submenu, j) => {
                                      // console.log("submenu", submenu)
                                      return (
                                        <li
                                          key={j}
                                          className="text-xs font-custom py-1 lg:py-2 font-bold hover:bg-blueNew-lighter px-4 lg:px-12"
                                        >
                                          <a
                                            className={`border-b border-solid border-transparent`}
                                            rel="noopener noreferrer"
                                            href={submenu.sub_menu_item_link}
                                            target={
                                              submenu.menu_target_link
                                                ? "_blank"
                                                : "_self"
                                            }
                                            onClick={e =>
                                              rudderslabTrackOnClick(
                                                "navigation",
                                                menuGroup.group_title,
                                                e
                                              )
                                            }
                                          >
                                            {submenu.sub_menu_item_title}
                                          </a>
                                        </li>
                                      )
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
