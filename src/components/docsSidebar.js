import React from 'react';
import {useSidebar} from '@rocketseat/gatsby-theme-docs-core';
import Link from "gatsby-link";
import Accordion from "./accordion"


const DocsSidebar = () => {
    const sidebarData = useSidebar();
    console.log('Sidebar Data', sidebarData);

    return(
        <div className="sidebar-nav-content">
            {sidebarData.map((accordionItem, i) => {
                if(accordionItem.node.items == null){
                    return(
                        <Link to={accordionItem.node.link}>{accordionItem.node.label}</Link>
                    )
                }else{
                    return(
                        <Accordion 
                            title={accordionItem.node.items.map((i,k) => (i.label))}
                            content={accordionItem.node.items.map((i,k) => i.items)}
                        />
                    )
                }
            })}
        </div>
    )
}

export default DocsSidebar;