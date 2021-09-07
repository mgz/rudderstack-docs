import React, { useEffect, useState } from "react";
import RsLogo from '../images/rudderstack-logo-v2.svg';

const DocsNavigation = props => {

  return (
    <div className="headerNav">
      <div className="headerContainer">
        <div className="docsLogo flex items-center">
          <a href="/">
            <img src={RsLogo} />
          </a>
        </div>
        <nav className="docsNav">
          <ul className="docsNavList">
            <li><a href="/docs">Home</a></li>
            <li><a href="https://github.com/rudderlabs/rudder-server">Github</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="https://app.rudderstack.com/signup?type=freetrial">Try for Free</a></li>
          </ul>
        </nav>
        <div className="docsSearch">
          <span className="docsSearchIcon">
            <svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" className="icon-7f6730be--text-3f89f380"><g><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></g></svg>
          </span>
          <input type="text" placeholder="Search.." className="docsSearchbar" />
        </div>
      </div>
    </div>
  )
}

export default DocsNavigation
