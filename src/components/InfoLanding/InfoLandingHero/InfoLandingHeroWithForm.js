import React from 'react'; 
import * as s from './InfoLandingHero.module.css';
import { StaticImage } from "gatsby-plugin-image"

const InfoLandingHeroWithForm = (
    data,
    showDivider
    ) => {
   let formData = data.data;
    return(
        <section className={`${s.usecase_hero_from} relative landing-hero-form-wrapper`}>
            <div className="landing-container">
                <div className="flex flex-col lg:flex-row">
                    <div className={s.usecase_left_content}>
                        <p className={`${s.usecase_text} text-darkScheme-btnSecondaryBg`}>USE CASES</p>
                        <h1 className={`${s.usecase_section_title} landing-section-title`}>Great analytics require great data</h1>
                        <p className={`${s.usecase_section_pera} text-darkScheme-grayText`} >RudderStack’s drop-in pipelines enable you to ship analytics-ready data in days, not weeks. </p>
                        <StaticImage className="data-img" src="../../../images/data-analytics.svg" alt="data analytic" placeholder="tracedSVG" />
                    </div>
                  
                        <div className={`${s.usecase_right_content} relative`}>
                        {showDivider && (<div className='section-divider'></div>)}
                        
                        </div>
                    {showDivider && (<div className='section-divider'></div>)}
                </div>
            </div>
        </section>
    )
}

export default InfoLandingHeroWithForm

 