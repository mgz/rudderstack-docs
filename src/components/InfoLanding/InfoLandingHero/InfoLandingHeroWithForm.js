import React from 'react'; 
import * as s from './InfoLandingHero.module.css';
import DynamicInputForm from '../../dynamicInputForm';
import Image from '../../image';

const InfoLandingHeroWithForm = (
    data,
    showDivider
    ) => {
   let formData = data.data;
   console.log("some", formData);
    return(
        <section className={`${s.usecase_hero_from} relative landing-hero-form-wrapper`}>
            <div className="landing-container">
                <div className="flex flex-col lg:flex-row">
                    <div className={s.usecase_left_content}>
                        <p className={`${s.usecase_text} text-darkScheme-btnSecondaryBg`}>{formData.sub_title}</p>
                        <h1 className={`${s.usecase_section_title} landing-section-title`}>{formData.title}</h1>
                        <p className={`${s.usecase_section_pera} text-darkScheme-grayText`} >{formData.content[0].children[0].text}</p>
                        <Image props={formData.right_image.asset._ref} />
                    </div>
                        <div className={`${s.usecase_right_content} relative`}>
                        {showDivider && (<div className='section-divider'></div>)}
                             <DynamicInputForm {...formData.input_form} />
                        </div>
                    {showDivider && (<div className='section-divider'></div>)}
                </div>
            </div>
        </section>
    )
}

export default InfoLandingHeroWithForm

 