import React from "react";
import Link from "gatsby-link";
import $ from 'jquery';

const SanityLink = (props) => {

  if (typeof window !== `undefined`) {
    $('.has-submenu .parent-menu').unbind().on('click',function(event){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next('ul').hide();
      }
      else {
        $(this).addClass('active');
        $(this).next('ul').show();
      }
      event.preventDefault();
    });
  }

  let link = props.link;
  let classes = props.classes;
  let activeClasses = props.activeClasses;

  if (link.menu_item_externallink) {
    return <a className={classes} activeClassName={activeClasses} href={link.menu_item_link} target={link.menu_target_link?"_blank":"_self"}>{link.menu_item_title}</a>;
  }
  else {
    return <Link className={classes} activeClassName={activeClasses} to={link.menu_item_link} target={link.menu_target_link?"_blank":"_self"}>{link.menu_item_title}</Link>;
  }
}

export default SanityLink;