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
                  menu_item_externallink
                  menu_item_link
                  menu_item_title
                  _rawSubMenuSection
                }
              }
              try_free_btn {
                btnlink
                btntext
                btnexternallink
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
      <div className="flex items-center mr-6 w-1/5">
        <Link to="/">
          <img src={data.allSanitySiteSettings.edges[0].node.headerblock.hdrlogo.asset.fluid.src} alt={data.allSanitySiteSettings.edges[0].node.sitetitle} />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-main border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } block justify-center items-center lg:flex lg:items-center lg:w-auto w-4/5`}>
        <div className="lg:flex-grow flex list-none">
        {
          mainmenu.map(
          (link, i) => (
              <li key={i} className={link._rawSubMenuSection != null}>
                {(() => {
                  if (link.menu_item_externallink === true){
                      return (
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-main mr-4 xl:mr-12 font-custom" href={link.menu_item_link}>{link.menu_item_title}</a>
                      )
                  }else{
                      return(
                      <Link  className="block mt-4 lg:inline-block lg:mt-0 text-main mr-4 xl:mr-12 font-custom" to={link.menu_item_link}>{link.menu_item_title}</Link>
                      ) 
                  }
                })()}
                  {(() => {
                      if (link._rawSubMenuSection != null){
                        const submenu = link._rawSubMenuSection.hassubmenu.add_sub_menu_items
                        return (
                          <ul className="hidden absolute capitalize sub-menu group-hover:block">
                            {
                              submenu.map(
                                (sublink, j) => (
                                    <li key={j} className="p-1">
                                      {(() => {
                                        if (sublink.sub_menu_item_externallink === true){
                                            return (
                                              <a className={sublink.className} activeClassName={sublink.menu_item_link} href={sublink.sub_menu_item_link}>{sublink.sub_menu_item_title}</a>
                                            )
                                        }else{
                                            return(
                                              <Link className={sublink.className} activeClassName={sublink.menu_item_link} to={sublink.sub_menu_item_link}>{sublink.sub_menu_item_title}</Link>
                                            ) 
                                        }
                                      })()}
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
        </div>
        <div className="flex">
          <a href="https://app.rudderstack.com/login?_ga=2.236197633.1437852951.1618311746-1836483757.1616824969"><span className="inline-block p-2 py-1.5 md:ml-3 font-custom font-bold mr-2">Log in</span></a>
          {(() => {
            if (trybtn.btnexternallink === true){
              return (
                <a href={trybtn.btnlink} ><span className="inline-block text-white bg-black-custom text-sm normal-case font-custom rounded-lg px-8 py-1.5">{trybtn.btntext}</span></a>
              )
            }else{
              return(
                  <Link to={trybtn.btnlink}><span className="inline-block text-white bg-black-custom text-sm normal-case font-custom rounded-lg px-8 py-1.5">{trybtn.btntext}</span></Link>
              ) 
            }
          })()}
        </div>
      </div>
    </nav>
       
        </>
    );
}
export default MainNavigation