import React from "react"
import {StaticImage} from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Leadership from "../components/leadership"
import AdvisorsAndInvestor from "../components/advisorsAndInvestors"


const CareerPage = ({ data, location })  => {

    return(
        <Layout location={location}>
            <div className="career-page hero-section">
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
                <Leadership />
                <AdvisorsAndInvestor />
            </div>
       </Layout>

    )
}



export default CareerPage


