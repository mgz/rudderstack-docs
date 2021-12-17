import React from "react"
import PageLinks from "../constants/links"
// import logoImage from '../images/Rudderstack.svg'
import logoImage1 from '../images/footerLogo.png'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRssSquare } from "@fortawesome/free-solid-svg-icons/faRssSquare"
import {faTwitterSquare } from "@fortawesome/free-brands-svg-icons/faTwitterSquare"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"

library.add(faRssSquare, faTwitterSquare, faLinkedin);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row lastfooter">
          <ul>
            <li>
              <a href="/">
                <img
                  src={logoImage1}
                  alt="RudderStack Logo"
                  className="logoImg"
                  />
              </a>
              <div className="sociallinks">
                <a className="twittericon" title="Follow on twitter"
                   href="https://twitter.com/rudderlabs" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
                </a>
                <a className="linkedin" title="Follow on LinkedIn"
                   href="https://www.linkedin.com/company/rudderlabs" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a className="rssfeed" title="RSS Feed"
                   href="https://rudderstack.com/blog/rss.xml" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faRssSquare} size="lg" />
                </a>
              </div>
            </li>
            <li>
              <div className="menu-title">Company</div>
              <ul className="footer-menu">
                <li><a href="mailto:contact@rudderstack.com">Contact Us</a></li>
                <li><a href="https://rudderstack.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="https://rudderstack.com/master-service-agreement/">Terms of Service</a></li>
              </ul>
            </li>
            <li>
              © RudderStack Inc.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
