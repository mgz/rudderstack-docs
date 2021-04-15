import React from "react";
import Link from "gatsby-link";

const SanitySubLink = (props) => {
  let sublink = props.link;

  if (sublink.sub_menu_item_externallink) {
    return <a className={sublink.className} activeClassName={sublink.menu_item_link} href={sublink.sub_menu_item_link}>{sublink.sub_menu_item_title}</a>;
  }
  else {
    return <Link className={sublink.className} activeClassName={sublink.menu_item_link} to={sublink.sub_menu_item_link}>{sublink.sub_menu_item_title}</Link>;
  }
}

export default SanitySubLink;