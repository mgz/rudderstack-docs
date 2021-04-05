import * as React from "react"
import Link from "gatsby-link"

import { useStaticQuery, graphql } from "gatsby"

const MainNavigation = () => {
    const data = useStaticQuery(graphql`
    {
      allSanitySiteSettings {
        edges {
          node {
            headerblock {
              mainnavigation {
                menu_block {
                  menu_item_link
                  menu_item_title
                  _rawSubMenuSection
                }
              }
              try_free_btn {
                btnlink
                btntext
              }
            }
          }
        }
      }
    }
  `)
  const mainmenu = data.allSanitySiteSettings.edges[0].node.headerblock.mainnavigation.menu_block;
  const trybtn = data.allSanitySiteSettings.edges[0].node.headerblock.try_free_btn;
  
  return (
    <>
        <nav className="flex">
            <ul className="list-reset flex capitalize items-center">
            {
                mainmenu.map(
                    (link, i) => (
                        <li key={i} className={link._rawSubMenuSection != null ? `group p-4` : `p-4`}>
                            <Link className={link.className} activeClassName={link.menu_item_link} to={link.menu_item_link}>{link.menu_item_title}</Link>
                            {(() => {
                                if (link._rawSubMenuSection != null){
                                    const submenu = link._rawSubMenuSection.hassubmenu.add_sub_menu_items
                                    return (
                                        <ul className="hidden absolute capitalize sub-menu group-hover:block">
                                            {
                                                submenu.map(
                                                    (sublink, j) => (
                                                        <li key={j} className="p-1">
                                                            <Link className={sublink.className} activeClassName={sublink.menu_item_link} to={sublink.sub_menu_item_link}>{sublink.sub_menu_item_title}</Link>
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
                )
            }

            <li className="p-4 pr-2 "><Link to="/login"><span className="p-2 ml-24">Login</span></Link></li>
            <li className="p-2 "><Link to={trybtn.btnlink}><span className="p-3 text-white bg-black normal-case">{trybtn.btntext}</span></Link></li>
            </ul>
        </nav>
        </>
    );
}
export default MainNavigation