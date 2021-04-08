import React, {useState} from "react"
import Link from "gatsby-link"

import { useStaticQuery, graphql } from "gatsby"

const MainNavigation = () => {
  const [isExpanded, toggleExpansion] = useState(false)
    const data = useStaticQuery(graphql`
    {
      allSanitySiteSettings {
        edges {
          node {
            headerblock {
              hdrlogo {
                asset {
                  fluid {
                    src
                  }
                }
              }
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
            sitetitle
          }
        }
      }
    }
  `)
  const mainmenu = data.allSanitySiteSettings.edges[0].node.headerblock.mainnavigation.menu_block;
  const trybtn = data.allSanitySiteSettings.edges[0].node.headerblock.try_free_btn;  
  return (
    <>
    <nav className="container mx-auto px-3 flex items-center justify-between flex-wrap pt-10 ">
      <div className="flex items-center mr-6">
        <img src={data.allSanitySiteSettings.edges[0].node.headerblock.hdrlogo.asset.fluid.src} alt={data.allSanitySiteSettings.edges[0].node.sitetitle} />
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-main border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block justify-center items-center lg:flex lg:items-center lg:w-auto`}>
        <div className=" lg:flex-grow">
        {
          mainmenu.map(
              (link, i) => (
                  <Link to={link.menu_item_link} className="block mt-4 lg:inline-block lg:mt-0 text-main mr-4">
                  {link.menu_item_title}
                      {/* {(() => {
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
                      })()} */}
                  </Link>
              )
          )
      }
        </div>
        <div>
          <Link to="/login"><span className="inline-block p-2 md:ml-24">Login</span></Link>
          <Link to={trybtn.btnlink}><span className="inline-block p-3 text-white bg-primary text-sm normal-case">{trybtn.btntext}</span></Link>
        </div>
      </div>
    </nav>
        {/* <nav className="flex">
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
        </nav> */}
        </>
    );
}
export default MainNavigation