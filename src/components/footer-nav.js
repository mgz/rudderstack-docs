import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SanityLink from "./SanityLink"

function renderFooterNav(menu) {
    const menuitems = menu.node.menu_block
    const menudata = menuitems.map(
        (menuitem, i) => (
            (() => {
                return (
                    <>
                        <li key={i} className="mt-4 block mr-2 md:mr-0">
                          <SanityLink link={menuitem} classes="no-underline hover:underline text-gray-500" />
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
                  menu_item_externallink
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