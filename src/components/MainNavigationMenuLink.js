import React, { useState, useEffect } from "react"
import Image from "./image"
import SanityLink from "./SanityLink"
import { rudderslabTrackOnClick } from "../utils/common"

const MainNavigationMenuLink = props => {
  // const [onClickEvent] = useState(props.currMenuIndex === props.i)

  let link = props.link
  let i = props.i

  return (
    <li
      key={i}
      className={`${
        link._rawSubMenuSection !== null ? `has-submenu group` : `group`
      } mt-2 lg:mt-0 hover:font-bold text-whiteColor-custom lg:text-blueNew-midnight md:pb-4`}
    >
      <SanityLink
        link={link}
        menuIndex={i}
        classes={`${
          props.currMenuIndex === i ? `active` : ``
        } parent-menu block text-darkScheme-textPrimary lg:mr-4 xl:mr-10 font-custom font-normal  p-3  sm:shadow-sm lg:py-2 lg:px-0 lg:bg-transparent lg:shadow-none rounded-lg lg:rounded-sm mob-menu-link`}
        onclick={e => {
          if (link._rawSubMenuSection === null) {
            rudderslabTrackOnClick("navigation", "Header Navigation", e)
          } else {
            return props.onMainMenuClick(i)
          }

          // return link._rawSubMenuSection !== null && window.innerWidth < 1024
          //   ? setOnClickEvent(!onClickEvent)
          //   : () => false
        }}
      />
      {(() => {
        if (link._rawSubMenuSection !== null) {
          const submenugroup = link._rawSubMenuSection.hassubmenu.add_menu_group
          return (
            <div className="lg:pt-2">
              <div
                className={`sub-menu lg:group-hover:grid relative lg:absolute lg:shadow-md  py-1 lg:py-0 z-40  mx-auto ${
                  i >= 3 ? "submenu-align" : ""
                } lg:place-items-left ${
                 props.currMenuIndex === i ? `flex` : `flex hidden`
               }
               overflow-y-auto lg:overflow-hidden h-80 lg:h-64
             `}
                //  lg:left-80 xl:left-96 2xl:left-1/2
              >
                <ul
                  className={` flex flex-col lg:flex-row w-full lg:mx-auto my-0 inner-header-group`}
                >
                  {submenugroup &&
                    submenugroup.map((menuGroup, idx) => {
                      return (
                        <div
                          key={idx}
                          className={`py-2 lg:py-6 ${
                            submenugroup.length - 1 === idx
                              ? ""
                              : "nav-separator"
                          } `}
                        >
                          <div className="flex flex-row lg:flex-col text-darkScheme-textPrimary ">
                            {/* <div className="mb-4 px-4 lg:px-12 w-18">
                              {menuGroup.group_icon && (
                                <Image
                                  props={menuGroup.group_icon.asset._ref}
                                  classes="w-10 md:w-auto h-auto md:w-8 object-cover"
                                />
                              )}
                            </div> */}
                            <div>
                              <div className="font-bold text-lg pb-2 lg:pb-4 leading-6 px-4 lg:px-12 text-darkScheme-btnSecondaryBg md:text-darkScheme-textPrimary ">
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
                                          className="text-xs font-custom py-1 lg:py-2 font-bold hover:bg- px-4 lg:px-12"
                                        >
                                          <a
                                            className={`border-b border-solid border-transparent hover:text-darkScheme-btnPrimaryBg`}
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
