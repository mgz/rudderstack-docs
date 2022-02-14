import React, {useEffect, useState} from "react"

import {StaticImage} from 'gatsby-plugin-image'

import "../css/about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRssSquare } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

const AdvisorsAndInvestor = props => {

  let [showCareer, setShowCareer] = useState(false);
  let [separation, setSeparation] = useState({separate:0, duration: 0})

 useEffect(() => {
    if(props.location.pathname.startsWith('/careers')){
      setShowCareer(true);
    }
   /*  gsap.registerPlugin();
    setCardSeparation();
    let checker = setInterval(()=>{
      if(separation.separate > 0){
        props.cards.forEach(animateCards);
      }
    }, 10);
     let rsTimeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'none'
      },
      scrollTrigger: {
        trigger: '#path1',
        scrub: 0,
        markers: true,
        start: 'top top',
        end: 'bottom'
      }
    }
    );
    rsTimeline.fromTo(".pathLine", {drawSVG: "100% 100%"}, {drawSVG: "0% 100%"},0)
    return () => {
      clearInterval(checker);
    } */
  }, [props.location.pathname]);

  /* const animateCards = (e,i) => {

    let target = this.refs[e];

    // initial position
  gsap.set(target, { x: (i * this.state.separation), autoAlpha:0});

    // show cards
  gsap.to(target, {duration: 0.3}, {autoAlpha:1});

    // animation
  gsap.to(target, {duration: 25}, {
      ease: Linear.easeNone, x: "+="+this.state.distance, repeat: -1, rotation:0.1,
      modifiers: {
        x: (x)=>{
          return x % this.state.distance; //force x value using modulus
        }
      }
    }); // Tweenmax
}

const setCardSeparation = () => {
  const amount = this.props.cards.length;
  // cards wrap width
  const wrapWidth = this.refs.cardWrap.clientWidth;
  // separation calculation
  const separationCalc = Math.round( wrapWidth / (amount - 1) );
  // the real calculation depending on the result
  const separation = separationCalc > 165 ? separationCalc : 165;
  // update state
  setSeparation({separation:separation, distance:(separation * amount)});
} */

  return (
    <section className="company-profile-wrapper lg:pt-24 pt-10 relative">
      {!showCareer && (<div className="about-logos lg:px-0 px-4">
        <h3 className="font-bold text-center text-darkScheme-textPrimary lg:text-3xl-3 text-2xl">Over 13,000 sites and applications use RudderStack</h3>
        <ul className="about-logos-list lg:flex lg:justify-between items-center max-w-6xl mx-auto mt-10 lg:mb-32 mb-20 grid-cols-2 grid justify-items-center">
          <li className="lg:mb-0 mb-3">
            <StaticImage
              src="../images/allbirds-white-logo.svg"
              placeholder="tracedSVG"
              alt="allbirds"
            />
          </li>
          <li className="lg:mb-0 mb-3">
            <StaticImage
              src="../images/hinge-white-logo.svg"
              placeholder="tracedSVG"
              alt="Hinge"
            />
          </li>
          <li className="lg:mb-0 mb-3">
          <StaticImage
              src="../images/priceline-white-logo1.svg"
              placeholder="tracedSVG"
              alt="priceline"
            />
          </li>
          <li className="lg:mb-0 mb-3">
            <StaticImage
              src="../images/stripe-white-logo.svg"
              placeholder="tracedSVG"
              alt="stripe"
            />
          </li>
          <li className="lg:mb-0 mb-3">
            <StaticImage
              src="../images/ifttt-white-logo.svg"
              placeholder="tracedSVG"
              alt="IFTTT"
            />
          </li>
        </ul>
      </div>)}
      {!showCareer && (<div className="timeline-block">
          <div className="timeline-wrapper lg:max-w-3xl max-w-sm mx-auto flex justify-between">
            <div className="timeline-content">
              <span className="timeline-year text-darkScheme-btnSecondaryBg lg:text-5xl-1 text-3xl-3 font-bold block">2019</span>
              <span className="timeline-text text-darkScheme-textPrimary block">Company founded</span>
            </div>
            <div className="timeline-border">
              <svg width="100%" height="155" className="absolute timeline-border-animate lg:block hidden" viewBox="0 0 621 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M615 155L620.773 145H609.227L615 155ZM0.5 2.5H6.525V0.5H0.5V2.5ZM18.575 2.5H30.625V0.5H18.575V2.5ZM42.675 2.5H54.725V0.5H42.675V2.5ZM66.775 2.5H78.825V0.5H66.775V2.5ZM90.875 2.5H102.925V0.5H90.875V2.5ZM114.975 2.5H127.025V0.5H114.975V2.5ZM139.075 2.5H151.125V0.5H139.075V2.5ZM163.175 2.5H175.225V0.5H163.175V2.5ZM187.275 2.5H199.325V0.5H187.275V2.5ZM211.375 2.5H223.425V0.5H211.375V2.5ZM235.475 2.5H247.525V0.5H235.475V2.5ZM259.575 2.5H271.625V0.5H259.575V2.5ZM283.675 2.5H295.725V0.5H283.675V2.5ZM307.775 2.5H319.825V0.5H307.775V2.5ZM331.875 2.5H343.925V0.5H331.875V2.5ZM355.975 2.5H368.025V0.5H355.975V2.5ZM380.075 2.5H392.125V0.5H380.075V2.5ZM404.175 2.5H416.225V0.5H404.175V2.5ZM428.275 2.5H440.325V0.5H428.275V2.5ZM452.375 2.5H464.425V0.5H452.375V2.5ZM476.475 2.5H488.525V0.5H476.475V2.5ZM500.575 2.5H512.625V0.5H500.575V2.5ZM524.675 2.5H536.725V0.5H524.675V2.5ZM548.775 2.5H560.825V0.5H548.775V2.5ZM572.875 2.5H584.925V0.5H572.875V2.5ZM596.975 2.5H603V0.5H596.975V2.5ZM603 2.5C604.493 2.5 605.915 2.79703 607.21 3.33429L607.977 1.48684C606.442 0.850638 604.761 0.5 603 0.5V2.5ZM613.166 9.2896C613.703 10.5852 614 12.0066 614 13.5H616C616 11.7392 615.649 10.0577 615.013 8.52349L613.166 9.2896ZM614 13.5V19.3958H616V13.5H614ZM614 31.1875V42.9792H616V31.1875H614ZM614 54.7708V66.5625H616V54.7708H614ZM614 78.3542V90.1458H616V78.3542H614ZM614 101.938V113.729H616V101.938H614ZM614 125.521V137.312H616V125.521H614Z" fill="white"/>
              </svg>
              <svg width="129" height="81" viewBox="0 0 129 81" className="absolute timeline-border-animate lg:hidden block" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M123 81L128.773 71H117.226L123 81ZM0 2H5.55V0H0V2ZM16.65 2H27.75V0H16.65V2ZM38.85 2H49.95V0H38.85V2ZM61.05 2H72.15V0H61.05V2ZM83.25 2H94.35V0H83.25V2ZM105.45 2H111V0H105.45V2ZM111 2C112.493 2 113.915 2.29703 115.21 2.83429L115.977 0.986841C114.442 0.350638 112.761 0 111 0V2ZM121.166 8.7896C121.703 10.0852 122 11.5067 122 13H124C124 11.2392 123.649 9.55768 123.013 8.02349L121.166 8.7896ZM122 13V18.6667H124V13H122ZM122 30V41.3333H124V30H122ZM122 52.6667V64H124V52.6667H122Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="timeline-wrapper lg:max-w-3xl max-w-sm mx-auto flex justify-between">
            <div className="timeline-border">
              <svg width="100%" height="155" className="absolute timeline-border-animate svg-flip  lg:block hidden" viewBox="0 0 621 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M615 155L620.773 145H609.227L615 155ZM0.5 2.5H6.525V0.5H0.5V2.5ZM18.575 2.5H30.625V0.5H18.575V2.5ZM42.675 2.5H54.725V0.5H42.675V2.5ZM66.775 2.5H78.825V0.5H66.775V2.5ZM90.875 2.5H102.925V0.5H90.875V2.5ZM114.975 2.5H127.025V0.5H114.975V2.5ZM139.075 2.5H151.125V0.5H139.075V2.5ZM163.175 2.5H175.225V0.5H163.175V2.5ZM187.275 2.5H199.325V0.5H187.275V2.5ZM211.375 2.5H223.425V0.5H211.375V2.5ZM235.475 2.5H247.525V0.5H235.475V2.5ZM259.575 2.5H271.625V0.5H259.575V2.5ZM283.675 2.5H295.725V0.5H283.675V2.5ZM307.775 2.5H319.825V0.5H307.775V2.5ZM331.875 2.5H343.925V0.5H331.875V2.5ZM355.975 2.5H368.025V0.5H355.975V2.5ZM380.075 2.5H392.125V0.5H380.075V2.5ZM404.175 2.5H416.225V0.5H404.175V2.5ZM428.275 2.5H440.325V0.5H428.275V2.5ZM452.375 2.5H464.425V0.5H452.375V2.5ZM476.475 2.5H488.525V0.5H476.475V2.5ZM500.575 2.5H512.625V0.5H500.575V2.5ZM524.675 2.5H536.725V0.5H524.675V2.5ZM548.775 2.5H560.825V0.5H548.775V2.5ZM572.875 2.5H584.925V0.5H572.875V2.5ZM596.975 2.5H603V0.5H596.975V2.5ZM603 2.5C604.493 2.5 605.915 2.79703 607.21 3.33429L607.977 1.48684C606.442 0.850638 604.761 0.5 603 0.5V2.5ZM613.166 9.2896C613.703 10.5852 614 12.0066 614 13.5H616C616 11.7392 615.649 10.0577 615.013 8.52349L613.166 9.2896ZM614 13.5V19.3958H616V13.5H614ZM614 31.1875V42.9792H616V31.1875H614ZM614 54.7708V66.5625H616V54.7708H614ZM614 78.3542V90.1458H616V78.3542H614ZM614 101.938V113.729H616V101.938H614ZM614 125.521V137.312H616V125.521H614Z" fill="white"/>
              </svg>
              <svg width="129" height="81" viewBox="0 0 129 81" className="absolute timeline-border-animate svg-flip lg:hidden block" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M123 81L128.773 71H117.226L123 81ZM0 2H5.55V0H0V2ZM16.65 2H27.75V0H16.65V2ZM38.85 2H49.95V0H38.85V2ZM61.05 2H72.15V0H61.05V2ZM83.25 2H94.35V0H83.25V2ZM105.45 2H111V0H105.45V2ZM111 2C112.493 2 113.915 2.29703 115.21 2.83429L115.977 0.986841C114.442 0.350638 112.761 0 111 0V2ZM121.166 8.7896C121.703 10.0852 122 11.5067 122 13H124C124 11.2392 123.649 9.55768 123.013 8.02349L121.166 8.7896ZM122 13V18.6667H124V13H122ZM122 30V41.3333H124V30H122ZM122 52.6667V64H124V52.6667H122Z" fill="white"/>
              </svg>
            </div>
            <div className="timeline-content">
              <span className="timeline-year text-darkScheme-btnSecondaryBg lg:text-5xl-1 text-3xl-3 font-bold block">2020</span>
              <span className="timeline-text text-darkScheme-textPrimary block">Seed round</span>
            </div>
          </div>
          <div className="timeline-wrapper lg:max-w-3xl max-w-sm mx-auto flex justify-between">
            <div className="timeline-content">
              <span className="timeline-year text-darkScheme-btnSecondaryBg lg:text-5xl-1 text-3xl-3 font-bold block">2021</span>
              <span className="timeline-text text-darkScheme-textPrimary block">Series A & opening of India offices and Greenville office</span>
            </div>
            <div className="timeline-border">
              <svg width="100%" height="155" className="absolute timeline-border-animate  lg:block hidden" viewBox="0 0 621 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M615 155L620.773 145H609.227L615 155ZM0.5 2.5H6.525V0.5H0.5V2.5ZM18.575 2.5H30.625V0.5H18.575V2.5ZM42.675 2.5H54.725V0.5H42.675V2.5ZM66.775 2.5H78.825V0.5H66.775V2.5ZM90.875 2.5H102.925V0.5H90.875V2.5ZM114.975 2.5H127.025V0.5H114.975V2.5ZM139.075 2.5H151.125V0.5H139.075V2.5ZM163.175 2.5H175.225V0.5H163.175V2.5ZM187.275 2.5H199.325V0.5H187.275V2.5ZM211.375 2.5H223.425V0.5H211.375V2.5ZM235.475 2.5H247.525V0.5H235.475V2.5ZM259.575 2.5H271.625V0.5H259.575V2.5ZM283.675 2.5H295.725V0.5H283.675V2.5ZM307.775 2.5H319.825V0.5H307.775V2.5ZM331.875 2.5H343.925V0.5H331.875V2.5ZM355.975 2.5H368.025V0.5H355.975V2.5ZM380.075 2.5H392.125V0.5H380.075V2.5ZM404.175 2.5H416.225V0.5H404.175V2.5ZM428.275 2.5H440.325V0.5H428.275V2.5ZM452.375 2.5H464.425V0.5H452.375V2.5ZM476.475 2.5H488.525V0.5H476.475V2.5ZM500.575 2.5H512.625V0.5H500.575V2.5ZM524.675 2.5H536.725V0.5H524.675V2.5ZM548.775 2.5H560.825V0.5H548.775V2.5ZM572.875 2.5H584.925V0.5H572.875V2.5ZM596.975 2.5H603V0.5H596.975V2.5ZM603 2.5C604.493 2.5 605.915 2.79703 607.21 3.33429L607.977 1.48684C606.442 0.850638 604.761 0.5 603 0.5V2.5ZM613.166 9.2896C613.703 10.5852 614 12.0066 614 13.5H616C616 11.7392 615.649 10.0577 615.013 8.52349L613.166 9.2896ZM614 13.5V19.3958H616V13.5H614ZM614 31.1875V42.9792H616V31.1875H614ZM614 54.7708V66.5625H616V54.7708H614ZM614 78.3542V90.1458H616V78.3542H614ZM614 101.938V113.729H616V101.938H614ZM614 125.521V137.312H616V125.521H614Z" fill="white"/>
              </svg>
              <svg width="129" height="81" viewBox="0 0 129 81" className="absolute timeline-border-animate lg:hidden block" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M123 81L128.773 71H117.226L123 81ZM0 2H5.55V0H0V2ZM16.65 2H27.75V0H16.65V2ZM38.85 2H49.95V0H38.85V2ZM61.05 2H72.15V0H61.05V2ZM83.25 2H94.35V0H83.25V2ZM105.45 2H111V0H105.45V2ZM111 2C112.493 2 113.915 2.29703 115.21 2.83429L115.977 0.986841C114.442 0.350638 112.761 0 111 0V2ZM121.166 8.7896C121.703 10.0852 122 11.5067 122 13H124C124 11.2392 123.649 9.55768 123.013 8.02349L121.166 8.7896ZM122 13V18.6667H124V13H122ZM122 30V41.3333H124V30H122ZM122 52.6667V64H124V52.6667H122Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="timeline-wrapper lg:max-w-3xl max-w-sm mx-auto flex justify-between">
            <div className="timeline-border"></div>
            <div className="timeline-content">
              <span className="timeline-year text-darkScheme-btnSecondaryBg lg:text-5xl-1 text-3xl-3 font-bold block">2022</span>
              <span className="timeline-text text-darkScheme-textPrimary block">Series B,<br/>114+ Employees</span>
            </div>
          </div>
        </div>)}
        {showCareer && (<section className="join-our-team">
          <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-0 lg:gap-20 join-our-team-wrapper">
              <div className="left-section">
                  <h2 className="career-page-heading text-darkScheme-textPrimary ">Join our team</h2>
                  <p className="text-darkScheme-textPrimary ">Help us make data engineers the heroes of their companies.</p>
              </div>
              <div className="right-section">
                  <p className="text-darkScheme-grayText">We’re looking to build and grow diverse teams in an inclusive environment. People do their best work and are happiest when they are free to be their unguarded selves. So we expect everyone that works at RudderStack brings their whole selves to work every day.</p>
                  <p className="text-darkScheme-grayText">We want globally minded individuals who are passionate about the work they do, and inspire others around them. We value differing perspectives and believe they lead to growth and opportunity.</p>
                  <p className="text-darkScheme-grayText">We have a lot of growth ahead of us, and know not everyone fits perfectly into the roles we have listed. If your experience isn't a perfect match for the job description, but you're still a good fit for the role, apply. We want to work with smart people who are good at their job, and, a lot of times, those people have non-linear career paths.</p>
              </div>
          </div>
        </section>)}
        {showCareer && (<section className="benifits">
          <div className="max-w-6xl w-full mx-auto join-our-team-wrapper">
              <h2 className="career-page-heading text-darkScheme-textPrimary ">Benefits</h2>
              <p className="text-darkScheme-grayText">Employee Experience matters the most to us. We want to invest in our team, enabling everyone to feel healthy, happy and supported while doing their best work at RudderStack.
              </p>
          <div className="flex flex-col md:flex-row">
              <div className="left-section">
                  <ul className="text-darkScheme-textPrimary ">
                      <li>Remote First & Flexible Work Environment</li>
                      <li>Competitive Compensation </li>
                      <li>Company Equity</li>
                      <li>Comprehensive Health Care</li>
                      <li>Flexible Paid Time Off</li>
                  </ul>
              </div>
              <div className="right-section">
                  <ul className="text-darkScheme-textPrimary ">
                      <li>Yearly Continuous Learning Fund</li>
                      <li>WFH Setup Stipend </li>
                      <li>Team Events and Gatherings</li>
                      <li>Parental Leave </li>
                  </ul>
              </div>
          </div>
          </div>
        </section>)}
        <div className="timeline-map lg:mt-28 mt-0">
          <StaticImage
            src="../images/about-map.webp"
            alt="Map"
          />
        </div>
        {showCareer && (<div className="join-team-bottom text-center py-10">
          <h2 className="text-darkScheme-textPrimary font-bold mb-3 lg:text-3xl-3 text-2xl">Join Our Team</h2>
          <p className="text-darkScheme-grayText mb-5">Help us make data engineers the heroes of their companies</p>
          <a href="https://boards.greenhouse.io/rudderstack" className="btn-primary-lg sm:mr-4 md:mb-0 mb-6 inline-block border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary" target={"_blank"}>View Open Positions</a>
        </div>)}
        {!showCareer && (<div className="keep-in-touch text-center py-10">
          <h2 className="text-darkScheme-textPrimary font-bold mb-3 lg:text-3xl-3 text-2xl">Keep in touch</h2>
          <ul className="flex social-keep-touch text-center justify-center gap-5">
            <li>
              <a href="https://twitter.com/RudderStack" className="footer-social-icon-kit bg-darkScheme-textPrimary" target={"_blank"}>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/rudderstack" className="footer-social-icon-kit bg-darkScheme-textPrimary" target={"_blank"}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
            <li>
              <a href="https://rudderstack.com/blog/rss.xml" className="footer-social-icon-kit bg-darkScheme-textPrimary" target={"_blank"}>
                <FontAwesomeIcon icon={faRssSquare} size="lg" />
              </a>
            </li>
            <li>
              <a href="https://boards.greenhouse.io/rudderstack" className="footer-social-icon-kit bg-darkScheme-textPrimary" target={"_blank"}>
                <StaticImage
                  src="../images/greenhouse-logo.png"
                  alt="Greenhouse"
                  placeholder="tracedSVG"
                />
              </a>
            </li>
          </ul>
        </div>)}
      <span className="section-border absolute bottom-0 left-0 w-full"></span>
    </section>
  )
}

export default AdvisorsAndInvestor
