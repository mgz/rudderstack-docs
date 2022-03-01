import React from 'react';
import * as s from './InfoLandingHero.module.css';
import DynamicInputForm from '../../dynamicInputForm';
import Image from '../../image';
import { Helmet } from 'react-helmet';

const InfoLandingHeroWithForm = ({data,location}) => {
   let formData = data;
   /* console.log("some", location); */
    return(
        <section className={`usecase_hero_from relative landing-hero-form-wrapper`}>
            <div className="section-gradient">
                <div className="flex flex-col md:flex-row">
                    <div className={`${s.usecase_left_content} lg:w-1/2 w-full`}>
                        <div className="w-full">
                            <div className={`${s.usecase_left_content_wrapper} w-full lg-5 xl:ml-auto lg:justify-self-end`}>
                                <p className={`${s.usecase_text} text-darkScheme-btnSecondaryBg uppercase font-bold`}>{formData.sub_title}</p>
                                <h1 className={`${s.usecase_section_title} landing-section-title`}>{formData.title}</h1>
                                <p className={`${s.usecase_section_pera} text-darkScheme-grayText`} >{formData.content[0].children[0].text}</p>
                                <Image props={formData.right_image.asset._ref} classes="hidden md:block " />
                            </div>
                        </div>
                    </div>
                     <div className={`${s.usecase_right_content} usecase-right-part relative lg:w-1/2 w-full xl:px-19 lg:px-0`}>
                        {formData.show_divider && (<div className='section-divider md:hidden block'></div>)}
                        <div className={`${s.form_max_width}`}>
                            <DynamicInputForm {...formData.input_form}  isFromRequest={true} location={location} />
                        </div>
                    </div>
                    {formData.show_divider && (<div className='section-divider'></div>)}
                </div>
            </div>
        </section>
    )
}

export default InfoLandingHeroWithForm