import React from 'react';
import {useSidebar} from '../../../gatsby-theme-docs-core/hooks/useSidebar';
import { resolveLink } from '@rocketseat/gatsby-theme-docs-core/util/url';
import Link from "gatsby-link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


const Sidebar = () => {
    const sidebarData = useSidebar();
    console.log('Sidebar Data', sidebarData);
    const basePath = '/docs';

    return(
        <div className="sidebar-nav-content sticky pt-16 top-0 max-h-screen">
            {sidebarData.map((accordionItem, i) => {
                if(accordionItem.node.items == null){
                    return(
                        <Link to={resolveLink(accordionItem.node.link, basePath)} key={accordionItem.node.label}>{accordionItem.node.label}</Link>
                    )
                }else{
                     /* return (<div>
                        {accordionItem.node.items.map((i,k) => {
                            return(
                                <Link to={i.link} key={i.label}>{i.label}</Link>
                            )
                        })}
                    </div>)  */
                    if(accordionItem.node.items)
                    return(
                        <Accordion>
                            {
                                accordionItem.node.items.map((i,k) => {
                                    return(
                                        <AccordionItem key={i.label}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <Link to={resolveLink(i.link, basePath)}>{i.label}</Link>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>

                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })      
                            }
                        </Accordion>
                    )
                }
            })}
        </div>
    )
}

export default Sidebar;