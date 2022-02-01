import { Link } from 'gatsby';
import React from 'react';
import * as s from './InfoLeftContentRightImg.module.css';

const InfoLeftContentRightImg = (
    data,
    showDivider = true
    ) => {
  //let useCaseData = data.data;
   // console.log("useCase Data", useCaseData);
    return (
        <section className={`${s.leftContent_rightImg_section} relative`}>
            <div className='landing-container'>
                <div className='content-wrapper flex lg:flex-row flex-col justify-between gap-10'>
                        <div className={`${s.content_wrapper_left}`}>
                            <h2 className='landing-section-title'>Quickly enable powerful analytics use cases, like attribution and cost-per acquisition</h2>
                            <p className={`${s.section_pera}`}>RudderStack’s pipelines make it easy to collect clickstream data from your sites and apps as well as structured performance data from platforms like Google Ads, then combine it in your warehouse. This user level data can provide analysts with game-changing insights about the customer journey and marketing performance. </p>
                            <div>
                                <a href="#" className='learn-more'>
                                    <span className='inline-block learn-more-text'>See how RudderStack powers analytics</span>
                                    <span className="learn-more-icon lrlm-icon text-darkScheme-btnSecondaryBg inline-block pl-5"><svg width="14" height="23" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 5.5L1 10" stroke="#86F8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                </a>
                            </div>
                        </div>
                        <div className={`${s.img_wrapper_right} flex`}>
                             <img src="https://cdn.sanity.io/images/97bpcflt/production/e5e3d7a450c7f6522c3d80488f4074d1b528b64f-562x358.svg" />
                        </div>
                </div>
            </div>
            {showDivider && (<div className='section-divider'></div>)}
        </section>
    )
}

export default InfoLeftContentRightImg;