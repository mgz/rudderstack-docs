import React from "react";
import { StaticQuery, graphql } from "gatsby";

function renderFooterNav(menu) {
    const menuitems = menu.node.menu_block
    const menudata = menuitems.map(
        (menuitem, i) => (
            (() => {
                return (
                    <>
                        <li key={i} className="mt-2.5 inline-block mr-2 md:block md:mr-0">
                            <a href={menuitem.menu_item_link} className="no-underline hover:underline text-gray-500">{menuitem.menu_item_title}</a>
                        </li>
                    </>
                );
            })()
        )
    )
    return (
        menudata
    );
};
const FooterNav = (props) => {
  return (
    <StaticQuery
    query = {graphql`
    query {
        allSanityNavigation {
            edges {
              node {
                id
                menu_block {
                  menu_item_title
                  menu_item_link
                }
              }
            }
          }
      }
    `}
    render={(data) => {
        const nav = data.allSanityNavigation.edges.find(
            nav => nav.node.id === props.navRef
        )
        return(renderFooterNav(nav))
      }}
    />
  );
};
export default FooterNav;