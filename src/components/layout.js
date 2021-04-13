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
         <MainNavigation />
         <main>{children}</main>
 
         <footer className="bg-black text-sm bg-black-custom pt-10">
           <div className="container mx-auto px-3">
             <div className="w-full py-10 font-custom inline-block">
               {
                 footermenus.map(
                     (menu, i) => (
                       <div key={menu._key} className="w-1/5 float-left">
                        <div className="px-3">
                          <p className="uppercase text-white md:mb-4">{menu.widget_menu_section_title}</p>
                          <ul className="list-reset mb-6 text-footer">
                            <FooterNav navRef={menu.widget_section_menu._ref} />
                          </ul>
                        </div>
                       </div>
                     )
                 )
               }
               {
                 footerdescitems.map(
                     (item, i) => (
                       <div key={item._key} className="w-1/5 float-left">
                        <div className="px-3">
                          <p className="uppercase text-white md:mb-4">{item.widget_desc_section_title}</p>
                          <div className="text-footer">
                            <PortableText blocks={item.widget_section_desc} />
                          </div>
                          </div>
                       </div>
                     )
                 )
               }
             </div>
           </div>
           <div className="container w-full flex mx-auto flex-wrap px-3">
             <div className="flex text-white">
             {
               socialitems.map(
                   (socialitem, i) => (
                     <>
                     {(() => {
                       let rss = /rss/;
                       if (rss.test(socialitem.social_item_icon)){
                           return (
                               <a key={socialitem._key} className='icons pr-4' href={socialitem.social_item_link}>
                                 <FontAwesomeIcon 
                                   icon={socialitem.social_item_icon} />
                               </a>
                           )
                       }else{
                         return (
                           <a key={socialitem._key} className='icons pr-4' href={socialitem.social_item_link}>
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
           <div className="container pb-1 py-4 w-full flex mx-auto flex-wrap  px-3">
             <div className="flex w-1/2 items-center text-white">
               <img src={footerlogo} alt={data.allSanitySiteSettings.edges[0].node.sitetitle} />
               <p className="lowercase text-right px-2 text-sm">{data.allSanitySiteSettings.edges[0].node.sitetitle}</p>
             </div>
             <div className="flex flex-wrap w-1/2 items-end">
               <p className="text-footer w-full text-right">{copyright}</p>
             </div>
           </div>
           <div className="container px-3 w-full mx-auto">
             <p className="text-white pl-6">k</p>
           </div>
         </footer>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 