import { Link } from 'gatsby';
import React from 'react';
import Image from '../../image';
import { StaticImage } from 'gatsby-plugin-image';
import * as s from './InfoLandingTestimonial.module.css';
import InfoLandingForm from '../InfoLandingHero/InfoLandingForm'

const InfoLandingTestimonial = (
    data,
    showDivider = true
    ) => {
    let testimonialData = data.data;

    return (
        <section className={`${s.testimonial_section} relative` }>
            <div className='landing-container'>
                <div className='testimonial-wrapper flex  flex-col lg:flex-row  text-center lg:text-left'>
                    <div className={s.testimonial_left}>
                        <h2 className='landing-section-title mb-12'>{testimonialData.title}</h2>
                        {/* {testimonialData.cta_butons.map((button, idx) => {
                            if(button.btnexternallink){
                                return(
                                    <a href={button.btnlink} key={button._key} className='info-landing-cta'>{button.btntext}</a>
                                )
                            }else{
                                return(
                                    <Link className='info-landing-cta' to={button.btnlink} key={button._key}>{button.btntext}</Link>
                                )
                            }
                        })} */}
                        <div className="flex lg:flex-col flex-col-reverse">
                            {testimonialData.testimonial.button ? (
                                <a href={testimonialData.testimonial.button.btnlink} className={`cta-btn btn-primary-lg bg-darkScheme-btnPrimaryBg border-none text-darkScheme-textPrimary`}>{testimonialData.testimonial.button.btntext}</a>
                            ) : (<div className={`${s.testimonial_form}`}>
                                <InfoLandingForm  />
                            </div>)}
                            <div className={s.landing_logos_wrapper}>
                                <ul className={`landing-logos-list flex lg:justify-start justify-center items-center`}>
                                    {/* {testimonialData.customer_logos.map((logo, index) => {
                                        if(index === 0 || index === 1 || index === 2){
                                            return(
                                                <li key={logo._key} className={s.logo_item}>
                                                    <Image
                                                        props={logo.asset._ref}
                                                    />
                                                </li>
                                            )
                                        }
                                    })} */}
                                    <li className={s.logo_item}>
                                        <StaticImage
                                            src='../../../images/allbirds-white-logo.svg'
                                            alt='allbirds'
                                            placeholder='tracedSVG'
                                        />
                                    </li>
                                    <li className={s.logo_item}>
                                        <StaticImage
                                            src='../../../images/stripe-white-logo.svg'
                                            alt='stripe'
                                            placeholder='tracedSVG'
                                        />
                                    </li>
                                    <li className={s.logo_item}>
                                        <StaticImage
                                            src='../../../images/wealthfront-white-logo.svg'
                                            alt='wealthfront'
                                            placeholder='tracedSVG'
                                        />
                                    </li>
                                </ul>
                                <ul className={`landing-logos-list flex lg:justify-start justify-center items-center ${s.landing_logos_list_last}`}>
                                    {/* {testimonialData.customer_logos.map((logo, index) => {
                                        if(index === 3 || index === 4 || index === 5){
                                            return(
                                                <li key={logo._key} className={s.logo_item}>
                                                    <Image
                                                        props={logo.asset._ref}
                                                    />
                                                </li>
                                            )
                                        }
                                    })} */}
                                    <li className={s.logo_item}>
                                        <StaticImage
                                            src='../../../images/hinge-white-logo.svg'
                                            alt='hinge'
                                            placeholder='tracedSVG'
                                        />
                                    </li>
                                    <li className={s.logo_item}>
                                        <StaticImage
                                            src='../../../images/grafana.svg'
                                            alt='grafana'
                                            placeholder='tracedSVG'
                                        />
                                    </li>
                                    <li className={s.logo_item}>
                                        <StaticImage
                                            src='../../../images/priceline-white-logo.svg'
                                            alt='priceline'
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={s.testimonial_right}>
                        <div className='testimonial-quote-wrapper'>
                            <div className={`${s.testimonial_quote} relative`}>
                                <span className={s.testimonial_quotes_icon}>
                                    <svg
                                        width="154"
                                        height="140"
                                        viewBox="0 0 154 140"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M1 127.822C1 133.898 5.92487 138.822 12 138.822H56.1257C62.2008 138.822 67.1257 133.897 67.1257 127.822V83.3845C67.1257 77.4818 62.3406 72.6967 56.4378 72.6967C49.9794 72.6967 45.7789 65.9001 48.6672 60.1235L70.9395 15.5788C73.032 11.3939 71.7288 6.30715 67.8818 3.64387C63.8176 0.830168 58.2686 1.64415 55.1837 5.50656L3.405 70.3352C1.84806 72.2845 1 74.7052 1 77.2V127.822ZM81.3964 127.822C81.3964 133.898 86.3213 138.822 92.3964 138.822H136.522C142.597 138.822 147.522 133.897 147.522 127.822V83.3845C147.522 77.4818 142.737 72.6967 136.834 72.6967C130.376 72.6967 126.175 65.9001 129.064 60.1235L151.336 15.5788C153.428 11.3939 152.125 6.30715 148.278 3.64387C144.214 0.830169 138.665 1.64415 135.58 5.50656L83.8014 70.3352C82.2444 72.2845 81.3964 74.7052 81.3964 77.2V127.822Z"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </span>
                                <p className={s.testimonial_quotes_text}>{testimonialData.testimonial.clientcontent}</p>
                                <div className={s.testimonial_client_logo}>
                                    <Image
                                        props={testimonialData.testimonial.clientimage.asset._ref}
                                    />
                                </div>
                            </div>
                            <div className={s.testimonial_landing_client_details}>
                                <p className={s.testimonial_client}>- {testimonialData.testimonial.clientname}</p>
                                <p className={s.testimonial_client}>{testimonialData.testimonial.clientdesignation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showDivider && (<div className='section-divider'></div>)}
        </section>
    )
}

export default InfoLandingTestimonial;