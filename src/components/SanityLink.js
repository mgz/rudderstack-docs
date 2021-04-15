import React from "react";
import Link from "gatsby-link";

const SanityLink = (props) => {
  let link = props.link;
  let classes = props.classes;
  let activeClasses = props.activeClasses;

  if (link.menu_item_externallink) {
    return <a className={classes} activeClassName={activeClasses} href={link.menu_item_link}>{link.menu_item_title}</a>;
  }
  else {
    return <Link className={classes} activeClassName={activeClasses} to={link.menu_item_link}>{link.menu_item_title}</Link>;
  }
}

export default SanityLink;