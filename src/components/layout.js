/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 
 //import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import '../lib/font-awesome';
 
 import { useStaticQuery, graphql } from "gatsby"
 
 import MainNavigation from "../components/main-navigation"
 import FooterNav from "../components/footer-nav"
 import PortableText from "../components/portableText"
 
 const Layout = ({ children }) => {
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
           }
           sitetitle
           footerblock {
             _rawFooterDescWidgetSection
             _rawFooterWidgetSection
             footer_logo {
               asset {
                 fluid {
                   src
                 }
               }
             }
             copy_right_text
           }
           socailmenublock {
             _rawSocialWidgetSection
           }
         }
       }
     }
   }
   `)
   const copyright = data.allSanitySiteSettings.edges[0].node.footerblock.copy_right_text
   const footermenus = data.allSanitySiteSettings.edges[0].node.footerblock._rawFooterWidgetSection
   const footerdescitems = data.allSanitySiteSettings.edges[0].node.footerblock._rawFooterDescWidgetSection
   const socialitems = data.allSanitySiteSettings.edges[0].node.socailmenublock._rawSocialWidgetSection
   const footerlogo = data.allSanitySiteSettings.edges[0].node.footerblock.footer_logo.asset.fluid.src
   return (
     <>
         {/* <header className="flex container mx-auto items-center">
           <div className="w-1/3">
             <img src={data.allSanitySiteSettings.edges[0].node.headerblock.hdrlogo.asset.fluid.src} alt={data.allSanitySiteSettings.edges[0].node.sitetitle} />
           </div>
           <div className="w-2/3">
             <MainNavigation />
           </div>
         </header> */}
         <MainNavigation />
         <main>{children}</main>
 
         <footer className="bg-black">
           <div className="container mx-auto  px-8">
             <div className="w-full flex flex-col md:flex-row py-6">
               {
                 footermenus.map(
                     (menu, i) => (
                       <div key={i} className="flex-1">
                           <p className="uppercase text-white md:mb-6">{menu.widget_menu_section_title}</p>
                           <ul className="list-reset mb-6">
                               <FooterNav navRef={menu.widget_section_menu._ref} />
                           </ul>
                       </div>
                     )
                 )
               }
               {
                 footerdescitems.map(
                     (item, i) => (
                       <div key={i} className="flex-1">
                           <p className="uppercase text-white md:mb-6">{item.widget_desc_section_title}</p>
                           <div className="text-gray-500">
                             <PortableText blocks={item.widget_section_desc} />
                           </div>
                       </div>
                     )
                 )
               }
             </div>
           </div>
           <div className="container w-full flex mx-auto flex-wrap  px-8">
             <div className="flex text-white">
             {
               socialitems.map(
                   (socialitem, i) => (
                     <>
                     {(() => {
                       let rss = /rss/;
                       if (rss.test(socialitem.social_item_icon)){
                           return (
                               <a key={i} className='icons pr-4' href={socialitem.social_item_link}>
                                 <FontAwesomeIcon 
                                   icon={socialitem.social_item_icon} />
                               </a>
                           )
                       }else{
                         return (
                           <a key={i} className='icons pr-4' href={socialitem.social_item_link}>
                             <FontAwesomeIcon 
                               icon={['fab', socialitem.social_item_icon]} />
                           </a>
                         )
                       }
                   })()}
                   </>
                   )
               )
             }
             </div>
           </div>
           <div className="container my-4 w-full flex mx-auto flex-wrap  px-8">
             <div className="flex w-1/2 items-center text-white">
               <img src={footerlogo} alt={data.allSanitySiteSettings.edges[0].node.sitetitle} />
               <p className="lowercase text-right px-2 text-sm">{data.allSanitySiteSettings.edges[0].node.sitetitle}</p>
             </div>
             <div className="flex flex-wrap w-1/2 items-end">
               <p className="text-gray-500">{copyright}</p>
             </div>
           </div>
         </footer>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 