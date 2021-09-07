import React from 'react';
import {useSidebar} from '../@rocketseat/gatsby-theme-docs-core/hooks/useSidebar';
import Link from "gatsby-link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


const DocsSidebar = () => {
    const sidebarData = useSidebar();
    //console.log('Sidebar Data', sidebarData);

    return(
        <div className="sidebar-nav-content sticky top-5">
            {sidebarData.map((accordionItem, i) => {
                if(accordionItem.node.items == null){
                    return(
                        <Link to={accordionItem.node.link} key={accordionItem.node.label}>{accordionItem.node.label}</Link>
                    )
                }else{
                    return (<div>
                        {accordionItem.node.items.map((i,k) => {
                            return(
                                <Link to={i.link} key={i.label}>{i.label}</Link>
                            )
                        })}
                    </div>)
                    /* return(
                        <Accordion 
                            title={accordionItem.node.items.map((i,k) => (i.label))}
                            content={accordionItem.node.items.map((i,k) => i.items)}
                        />
                    ) */
                }
            })}
        </div>
    )
}

export default DocsSidebar;