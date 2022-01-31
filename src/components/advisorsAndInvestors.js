import React from "react"
import Image from "./image"
import {StaticImage} from 'gatsby-plugin-image'
import "../css/about.css"

const AdvisorsAndInvestor = props => {
  return (
    <section className="company-profile-wrapper pt-40">
        <div className="timeline-wrapper max-w-3xl mx-auto flex">
          <div className="timeline-content">
            <span className="timeline-year text-darkScheme-btnSecondaryBg lg:text-5xl-1 font-bold block">2019</span>
            <span className="timeline-text text-darkScheme-textPrimary block">Seed Round</span>
          </div>
          <div className="timeline-border">
            <svg width="100%" height="155" className="absolute timeline-border-animate" viewBox="0 0 621 155" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M615 155L620.773 145H609.227L615 155ZM0.5 2.5H6.525V0.5H0.5V2.5ZM18.575 2.5H30.625V0.5H18.575V2.5ZM42.675 2.5H54.725V0.5H42.675V2.5ZM66.775 2.5H78.825V0.5H66.775V2.5ZM90.875 2.5H102.925V0.5H90.875V2.5ZM114.975 2.5H127.025V0.5H114.975V2.5ZM139.075 2.5H151.125V0.5H139.075V2.5ZM163.175 2.5H175.225V0.5H163.175V2.5ZM187.275 2.5H199.325V0.5H187.275V2.5ZM211.375 2.5H223.425V0.5H211.375V2.5ZM235.475 2.5H247.525V0.5H235.475V2.5ZM259.575 2.5H271.625V0.5H259.575V2.5ZM283.675 2.5H295.725V0.5H283.675V2.5ZM307.775 2.5H319.825V0.5H307.775V2.5ZM331.875 2.5H343.925V0.5H331.875V2.5ZM355.975 2.5H368.025V0.5H355.975V2.5ZM380.075 2.5H392.125V0.5H380.075V2.5ZM404.175 2.5H416.225V0.5H404.175V2.5ZM428.275 2.5H440.325V0.5H428.275V2.5ZM452.375 2.5H464.425V0.5H452.375V2.5ZM476.475 2.5H488.525V0.5H476.475V2.5ZM500.575 2.5H512.625V0.5H500.575V2.5ZM524.675 2.5H536.725V0.5H524.675V2.5ZM548.775 2.5H560.825V0.5H548.775V2.5ZM572.875 2.5H584.925V0.5H572.875V2.5ZM596.975 2.5H603V0.5H596.975V2.5ZM603 2.5C604.493 2.5 605.915 2.79703 607.21 3.33429L607.977 1.48684C606.442 0.850638 604.761 0.5 603 0.5V2.5ZM613.166 9.2896C613.703 10.5852 614 12.0066 614 13.5H616C616 11.7392 615.649 10.0577 615.013 8.52349L613.166 9.2896ZM614 13.5V19.3958H616V13.5H614ZM614 31.1875V42.9792H616V31.1875H614ZM614 54.7708V66.5625H616V54.7708H614ZM614 78.3542V90.1458H616V78.3542H614ZM614 101.938V113.729H616V101.938H614ZM614 125.521V137.312H616V125.521H614Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div className="timeline-wrapper max-w-3xl mx-auto flex">
          <div className="timeline-border">
            <svg width="100%" height="155" className="absolute timeline-border-animate svg-flip" viewBox="0 0 621 155" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M615 155L620.773 145H609.227L615 155ZM0.5 2.5H6.525V0.5H0.5V2.5ZM18.575 2.5H30.625V0.5H18.575V2.5ZM42.675 2.5H54.725V0.5H42.675V2.5ZM66.775 2.5H78.825V0.5H66.775V2.5ZM90.875 2.5H102.925V0.5H90.875V2.5ZM114.975 2.5H127.025V0.5H114.975V2.5ZM139.075 2.5H151.125V0.5H139.075V2.5ZM163.175 2.5H175.225V0.5H163.175V2.5ZM187.275 2.5H199.325V0.5H187.275V2.5ZM211.375 2.5H223.425V0.5H211.375V2.5ZM235.475 2.5H247.525V0.5H235.475V2.5ZM259.575 2.5H271.625V0.5H259.575V2.5ZM283.675 2.5H295.725V0.5H283.675V2.5ZM307.775 2.5H319.825V0.5H307.775V2.5ZM331.875 2.5H343.925V0.5H331.875V2.5ZM355.975 2.5H368.025V0.5H355.975V2.5ZM380.075 2.5H392.125V0.5H380.075V2.5ZM404.175 2.5H416.225V0.5H404.175V2.5ZM428.275 2.5H440.325V0.5H428.275V2.5ZM452.375 2.5H464.425V0.5H452.375V2.5ZM476.475 2.5H488.525V0.5H476.475V2.5ZM500.575 2.5H512.625V0.5H500.575V2.5ZM524.675 2.5H536.725V0.5H524.675V2.5ZM548.775 2.5H560.825V0.5H548.775V2.5ZM572.875 2.5H584.925V0.5H572.875V2.5ZM596.975 2.5H603V0.5H596.975V2.5ZM603 2.5C604.493 2.5 605.915 2.79703 607.21 3.33429L607.977 1.48684C606.442 0.850638 604.761 0.5 603 0.5V2.5ZM613.166 9.2896C613.703 10.5852 614 12.0066 614 13.5H616C616 11.7392 615.649 10.0577 615.013 8.52349L613.166 9.2896ZM614 13.5V19.3958H616V13.5H614ZM614 31.1875V42.9792H616V31.1875H614ZM614 54.7708V66.5625H616V54.7708H614ZM614 78.3542V90.1458H616V78.3542H614ZM614 101.938V113.729H616V101.938H614ZM614 125.521V137.312H616V125.521H614Z" fill="white"/>
            </svg>
          </div>
          <div className="timeline-content">
            <span className="timeline-year text-darkScheme-btnSecondaryBg lg:text-5xl-1 font-bold block">2020</span>
            <span className="timeline-text text-darkScheme-textPrimary block">Series A</span>
          </div>
        </div>
        <div className="timeline-wrapper max-w-3xl mx-auto flex">
          <div className="timeline-content">
            <span className="timeline-year text-darkScheme-btnSecondaryBg lg:text-5xl-1 font-bold block">2021</span>
            <span className="timeline-text text-darkScheme-textPrimary block">Opening of India offices and Greenville office</span>
          </div>
          <div className="timeline-border">
            <svg width="100%" height="155" className="absolute timeline-border-animate" viewBox="0 0 621 155" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M615 155L620.773 145H609.227L615 155ZM0.5 2.5H6.525V0.5H0.5V2.5ZM18.575 2.5H30.625V0.5H18.575V2.5ZM42.675 2.5H54.725V0.5H42.675V2.5ZM66.775 2.5H78.825V0.5H66.775V2.5ZM90.875 2.5H102.925V0.5H90.875V2.5ZM114.975 2.5H127.025V0.5H114.975V2.5ZM139.075 2.5H151.125V0.5H139.075V2.5ZM163.175 2.5H175.225V0.5H163.175V2.5ZM187.275 2.5H199.325V0.5H187.275V2.5ZM211.375 2.5H223.425V0.5H211.375V2.5ZM235.475 2.5H247.525V0.5H235.475V2.5ZM259.575 2.5H271.625V0.5H259.575V2.5ZM283.675 2.5H295.725V0.5H283.675V2.5ZM307.775 2.5H319.825V0.5H307.775V2.5ZM331.875 2.5H343.925V0.5H331.875V2.5ZM355.975 2.5H368.025V0.5H355.975V2.5ZM380.075 2.5H392.125V0.5H380.075V2.5ZM404.175 2.5H416.225V0.5H404.175V2.5ZM428.275 2.5H440.325V0.5H428.275V2.5ZM452.375 2.5H464.425V0.5H452.375V2.5ZM476.475 2.5H488.525V0.5H476.475V2.5ZM500.575 2.5H512.625V0.5H500.575V2.5ZM524.675 2.5H536.725V0.5H524.675V2.5ZM548.775 2.5H560.825V0.5H548.775V2.5ZM572.875 2.5H584.925V0.5H572.875V2.5ZM596.975 2.5H603V0.5H596.975V2.5ZM603 2.5C604.493 2.5 605.915 2.79703 607.21 3.33429L607.977 1.48684C606.442 0.850638 604.761 0.5 603 0.5V2.5ZM613.166 9.2896C613.703 10.5852 614 12.0066 614 13.5H616C616 11.7392 615.649 10.0577 615.013 8.52349L613.166 9.2896ZM614 13.5V19.3958H616V13.5H614ZM614 31.1875V42.9792H616V31.1875H614ZM614 54.7708V66.5625H616V54.7708H614ZM614 78.3542V90.1458H616V78.3542H614ZM614 101.938V113.729H616V101.938H614ZM614 125.521V137.312H616V125.521H614Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div className="timeline-wrapper max-w-3xl mx-auto flex">
          <div className="timeline-border"></div>
          <div className="timeline-content">
            <span className="timeline-year text-darkScheme-btnSecondaryBg lg:text-5xl-1 font-bold block">2022</span>
            <span className="timeline-text text-darkScheme-textPrimary block">Series B, 150+ Employees</span>
          </div>
        </div>
        <section className="join-our-team">
          <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-0 lg:gap-20">
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
        </section>
        <section className="benifits">
          <div className="max-w-6xl w-full mx-auto">
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
        </section>
        <div className="timeline-map mt-28">
          <StaticImage
            src="../images/about-map.webp"
            alt="Map"
          />
        </div>
    </section>
  )
}

export default AdvisorsAndInvestor
