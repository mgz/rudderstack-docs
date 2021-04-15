import React, {useState} from "react"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"

import { useStaticQuery, graphql } from "gatsby"
import MainNavigationMenuLink from "./MainNavigationMenuLink"

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
    <nav className="container mx-auto px-4 md:px-3 flex items-center justify-between py-4 sm:py-0 flex-wrap sm:pt-10 bg-blueNew-skyblue">
      <div className="flex items-center mr-6 w-1/5">
        <Link to="/">
          <img src={data.allSanitySiteSettings.edges[0].node.headerblock.hdrlogo.asset.fluid.src} alt={data.allSanitySiteSettings.edges[0].node.sitetitle} />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 text-main border-teal-400 hover:text-white hover:border-white">
          <div className="mobile-menu"> <StaticImage src="../images/menu.png" alt="Toggle"/></div>
        </button>
      </div>
      <div className={`lg:flex ${ isExpanded ? `block` : `hidden` } justify-center items-center lg:items-center lg:w-auto w-4/5`}>
        <ul className="lg:flex-grow flex flex-col lg:flex-row list-none">
        {
          mainmenu.map(
          (link, i) => (
            <MainNavigationMenuLink link={link} i={i} />
          )
       )
      }
        </ul>
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