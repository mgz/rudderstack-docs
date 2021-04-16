import React from "react";
import Link from "gatsby-link";

const SanitySubLink = (props) => {
  let sublink = props.link;

  if (sublink.sub_menu_item_externallink) {
    return <a className={sublink.className} activeClassName={sublink.menu_item_link} href={sublink.sub_menu_item_link}>
      <img
        src="https://cdn.sanity.io/images/97bpcflt/production/7ed86326425c479d324bfb75d8ff2076d66b3104-72x72.png"
        width="27"
        height="27"
        className="inline"
        alt={sublink.sub_menu_item_title}
      />
      {sublink.sub_menu_item_title}
    </a>;
  }
  else {
    return <Link className={sublink.className} activeClassName={sublink.menu_item_link} to={sublink.sub_menu_item_link}>
      <img src="https://cdn.sanity.io/images/97bpcflt/production/7ed86326425c479d324bfb75d8ff2076d66b3104-72x72.png"
           width="27"
           height="27"
           className="inline"
           alt={sublink.sub_menu_item_title}
      />
      {sublink.sub_menu_item_title}
    </Link>;
  }
}

export default SanitySubLink;