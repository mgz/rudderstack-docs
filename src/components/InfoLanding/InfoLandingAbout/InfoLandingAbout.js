import React from 'react';
import Image from '../../image';
import * as s from './InfoLandingAbout.module.css'

const InfoLandingAbout = (
    data,
    showDivider = true
    ) => {
    let aboutData = data.data;
    return(
        <section className='about-section relative py-24'>
            <div className='landing-container'>
                <div className='about-wrapper flex lg:flex-row flex-col justify-between grid xl:grid-cols-2 xl:gap-2 grid-cols-1 gap-1'>
                    <div className={s.about_wrapper_left}>
                        <h2 className='landing-section-title'>{aboutData.title}</h2>
                    </div>
                    <div className={s.about_wrapper_right}>
                        <ul className='about-pointers'>
                            {
                                aboutData.icon_with_text_and_content_items.map((item, index) => {
                                    return (
                                        <li className={`${s.landing_pointers_general}`} key={item._key}>
                                            <div className={`${s.landing_pointers_general_image} inline-block align-top`}>
                                                <Image
                                                    props={item.icon.asset._ref}
                                                />
                                            </div>
                                            <div className={`${s.landing_pointers_general_content_wrapper} inline-block align-top`}>
                                                <h4 className={`${s.landing_pointers_general_title} pink`}>{item.title}</h4>
                                                <p className='landing-pointers-general-content'>{item.content[0].children[0].text}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {showDivider && (<div className='section-divider'></div>)}
        </section>
    )
}

export default InfoLandingAbout;