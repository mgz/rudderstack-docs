import React from 'react';
import {useSidebar} from '@rocketseat/gatsby-theme-docs-core';
import Link from "gatsby-link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


const DocsSidebar = () => {
    const sidebarData = useSidebar();
    console.log('Sidebar Data', sidebarData);

    return(
        <div className="sidebar-nav-content pt-5">
            {sidebarData.map((accordionItem, i) => {
                if(accordionItem.node.items == null){
                    return(
                        <Link to={accordionItem.node.link} key={i}>{accordionItem.node.label}</Link>
                    )
                }else{
                    {/* <div>
                            {accordionItem.node.items.map((i,k) => {
                                return(
                                    <Link to={i.link} key={i.label}>{i.label}</Link>
                                )
                            })}
                        </div>  */}
                    return(
                        <Accordion allowMultipleExpanded={true}>
                            {accordionItem.node.items.map((i,k) => {
                                return(
                                    <AccordionItem key={i.label}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                {i.link ? <Link to={i.link}>{i.label}</Link> : i.label}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    )
                }
            })}
        </div>
    )
}

export default DocsSidebar;