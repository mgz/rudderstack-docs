import React from "react";
import Link from "gatsby-link";
import $ from 'jquery';

const SanityLink = (props) => {

  let link = props.link;
  let classes = props.classes;
  let onclick = props.onclick;
  let activeClasses = props.activeClasses;

  if (link.menu_item_externallink) {
    return <a className={classes} activeClassName={activeClasses} href={link.menu_item_link} target={link.menu_target_link?"_blank":"_self"} onClick={onclick}>{link.menu_item_title}</a>;
  }
  else {
    return <Link className={classes} activeClassName={activeClasses} to={link.menu_item_link} target={link.menu_target_link?"_blank":"_self"} onClick={onclick}>{link.menu_item_title}</Link>;
  }
}

export default SanityLink;