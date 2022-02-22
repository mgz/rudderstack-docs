import { Link } from 'gatsby';
import React from 'react';
import Image from '../../image';
import InfoLandingForm from './InfoLandingForm';
import * as s from './InfoLandingHero.module.css';

const InfoLandingHero = (
    data,
    showDivider = true
    ) => {
    let heroData = data.data;
    return(
        <section className='landing-hero relative pt-9 md:pt-24 md:pb-20 pb-8'>
            <div className='landing-container'>
                <div className='landing-hero-wrapper flex flex-col md:flex-row justify-between lg:gap-x-0 gap-x-5'>
                    <div className={s.landing_hero_left}>
                        <span className={`${s.landing_hero_category} pink uppercase font-bold`}>{heroData.sub_title}</span>
                        <h1 className='landing-section-title'>{heroData.title}</h1>
                        <h3 className={s.hero_subtitle}>{heroData.content[0].children[0].text}</h3>
                        {heroData.center_cta && heroData.center_cta.btnlink ? (<Link to={heroData.center_cta.btnlink} className="btn-primary-lg bg-darkScheme-btnPrimaryBg border-none text-darkScheme-textPrimary">{heroData.center_cta.btntext}</Link>) : (<a href={heroData.center_cta.cmnlink} className="btn-primary-lg bg-darkScheme-btnPrimaryBg border-none text-darkScheme-textPrimary">{heroData.center_cta.cmntext}</a>)} 
                        {heroData.show_getstarted && <div className='landing-hero-form-wrapper'>
                            <InfoLandingForm formId="app_signup_mkt_site" />
                        </div>}
                    </div>
                    <div className='landing-hero-right flex'>
                        <Image
                            props={heroData.right_image.asset._ref}
                         />
                    </div>
                </div>
                {heroData.icon_with_text_items && <div className={s.landing_hero_pointers_wrapper}>
                    <ul className='flex hero-pointer-list  md:justify-center justify-content-start lg:justify-between lg:flex-nowrap flex-wrap'>
                        {heroData.icon_with_text_items.map((item, index) => {
                            return (
                                <li className={`${s.hero_pointer_item} flex flex-col items-center justify-start `} key={item._key}>
                                    <span className={`${s.hero_pointer_image}`}>
                                        <Image
                                            props={item.icon.asset._ref}
                                         />
                                    </span>
                                    <p className={`${s.hero_pointer_text} text-center`}>{item.title}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
            {showDivider && (<div className='section-divider'></div>)}
        </section>
    )
}

export default InfoLandingHero;