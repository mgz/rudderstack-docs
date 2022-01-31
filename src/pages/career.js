import React from "react"
import {StaticImage} from 'gatsby-plugin-image'
import Layout from "../components/layout"
 


const CareerPage = ({ data, location })  => {

    return(
        <Layout location={location}>
            <div className="career-page">
                <section className="our-mission">
                    <div className="max-w-6xl w-full mx-auto">
                        <p className="text-darkScheme-btnSecondaryBg our-mission-title">OUR MISSION</p>
                        <h1 className="text-darkScheme-textPrimary">RudderStack is the warehouse-first, customer data platform built for developers</h1>

                        <p className="section-peragraph text-darkScheme-grayText">The company takes a new approach to building and operating customer data infrastructure, making it easy to collect, unify, transform, and store customer data as well as securely route it to a wide range of common, popular tools.</p>
                    </div> 
                    <div className="career-key-points-wrapper relative">
                        <div className="career-key-points">
                            <div className="career-point-wrapper">
                                <div className="max-w-6xl w-full mx-auto">
                                    <div className="icon">
                                        <StaticImage  src="../images/relationship.svg"  alt="career-relationship" />
                                    </div>
                                    <div className="about-points">
                                       
                                        <h3 className="title text-darkScheme-btnSecondaryBg">We build trusted relationships</h3>
                                        <p className="point-description text-darkScheme-textPrimary ">We listen actively, communicate authentically and always with respect. Take ownership, and do the right thing. Be accountable and principled, and act with integrity. </p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="career-key-points">
                            <div className="career-point-wrapper">
                                <div className="max-w-6xl w-full mx-auto">
                                    <div className="icon">
                                        <StaticImage  src="../images/learning.svg"  alt="career-learning" />
                                    </div>
                                    <div className="about-points">
                                       
                                        <h3 className="title text-darkScheme-btnSecondaryBg">We never stop learning</h3>
                                        <p className="point-description text-darkScheme-textPrimary ">We embrace change and are comfortable being uncomfortable. Our combination of curiosity, creativity, and knowledge is what will drive innovation for us and for our customers.</p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="career-key-points">
                            <div className="career-point-wrapper">
                                <div className="max-w-6xl w-full mx-auto">
                                    <div className="icon">
                                        <StaticImage  src="../images/inclusivity.svg"  alt="career-inclusivity" />
                                    </div>
                                    <div className="about-points"> 
                                        <h3 className="title text-darkScheme-btnSecondaryBg">We celebrate diversity and inclusivity</h3>
                                        <p className="point-description text-darkScheme-textPrimary ">We understand everyone comes from different life experiences and backgrounds and that’s what will ultimately make us great. A global mindset is key. We value everyone’s input regardless of role or status. Assume good intentions and be a light of positivity for company culture.</p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="career-key-points">
                            <div className="career-point-wrapper">
                                <div className="max-w-6xl w-full mx-auto">
                                    <div className="icon">
                                        <StaticImage  src="../images/performance.svg"  alt="performance" />
                                    </div>
                                    <div className="about-points">
                                       
                                        <h3 className="title text-darkScheme-btnSecondaryBg">We reward high performance</h3>
                                        <p className="point-description text-darkScheme-textPrimary ">We run at a higher velocity and with higher standards. Have bold goals and support your colleagues in doing the same. Work alongside infectiously energetic and driven individuals.</p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="career-key-points">
                        <div className="career-point-wrapper">
                            <div className="max-w-6xl w-full mx-auto">
                                <div className="icon">
                                     <StaticImage  src="../images/customer-centric.svg"  alt="customer-centric" />
                                </div>
                                <div className="about-points">
                                   
                                    <h3 className="title text-darkScheme-btnSecondaryBg">We are customer centric</h3>
                                    <p className="point-description text-darkScheme-textPrimary ">We listen actively, communicate authentically and always with respect. Take ownership, and do the right thing. Be accountable and principled, and act with integrity. 
        </p>
                                </div>
                            </div>    
                        </div>
                    </div>
                        <a href="#" className="button-wrapper">
                        <span className="btn-primary-lg"> View Open Positions</span>
                        </a>
                        
                        <span class="section-border absolute bottom-0 left-0 w-full block"></span>
                    </div>
                </section>  
                <section className="join-our-team">
                            <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-0 lg:gap-20">
                                <div className="left-section">
                                    <h2 className="career-page-heading text-darkScheme-textPrimary ">Join our team</h2>
                                    <p className="text-darkScheme-textPrimary ">Help us make data engineers the heroes of their companies.</p>
                                </div>
                                <div className="right-section">
                                    <p className="text-darkScheme-grayText">We’re looking to build and grow diverse teams in an inclusive environment. People do their best work and are happiest when they are free to be their unguarded selves. So we expect everyone that works at RudderStack brings their whole selves to work every day.
            </p>
                                    <p className="text-darkScheme-grayText">We want globally minded individuals who are passionate about the work they do, and inspire others around them. We value differing perspectives and believe they lead to growth and opportunity. 
            </p>
                                    <p className="text-darkScheme-grayText">We have a lot of growth ahead of us, and know not everyone fits perfectly into the roles we have listed. If your experience isn't a perfect match for the job description, but you're still a good fit for the role, apply. We want to work with smart people who are good at their job, and, a lot of times, those people have non-linear career paths.
            </p>
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
            </div>
       </Layout>
       
    ) 
}



export default CareerPage


