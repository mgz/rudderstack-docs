import { Link } from 'gatsby';
import React from 'react';
import Image from '../../image';
import * as s from './InfoLeftContentRightImg.module.css';

const InfoLeftContentRightImg = (
    data,
    showDivider = true
    ) => {
    let useCaseData = data.data;
   // console.log("useCase Data", useCaseData);
    return (
        <section className={`${s.leftContent_rightImg_section} relative`}>
            <div className='landing-container'>
                <div className='content-wrapper flex lg:flex-row flex-col justify-between gap-10'>
                        <div className={`${s.content_wrapper_left}`}>
                            <h2 className={`${s.left_content_title}`}>{useCaseData.title}</h2>
                            <p className={`${s.section_pera}`}>{useCaseData.content[0].children[0].text}</p>
                            <div>
                                <a href={useCaseData.addlink.cmnlink} className='learn-more'>
                                    <span className='inline-block learn-more-text'>{useCaseData.addlink.cmnlinktext} <span className="learn-more-icon lrlm-icon text-darkScheme-btnSecondaryBg inline-block pl-5"><svg width="14" height="23" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 5.5L1 10" stroke="#86F8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></span>
                                </a>
                            </div>
                        </div>
                        <div className={s.img_wrapper_right}>
                            <Image props={useCaseData.right_image.asset._ref}/>
                        </div>
                </div>
            </div>
            {showDivider && (<div className='section-divider'></div>)}
        </section>
    )
}

export default InfoLeftContentRightImg;