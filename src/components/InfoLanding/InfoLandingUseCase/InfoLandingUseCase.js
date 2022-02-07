import { Link } from 'gatsby';
import React from 'react';
import * as s from './InfoLandingUseCase.module.css';

const InfoLandingUseCase = (
    data,
    showDivider = true
    ) => {
    let useCaseData = data.data;
   // console.log("useCase Data", useCaseData);
    return (
        <section className={`${s.use_case_section} relative`}>
            <div className='landing-container'>
                <div className='use-case-wrapper flex'>
                    <div className={s.use_case_left}>
                        <h2 className='landing-section-title'>{useCaseData.title}</h2>
                        <ul className={s.use_case_list}>
                            {useCaseData.icon_with_text_and_content_items.map((item, index) => {
                                return(
                                    <li className={s.use_case_list_item} key={item._key}>
                                        <h4 className={`${s.list_title} pink`}>{item.title}</h4>
                                        <p>{item.content[0].children[0].text}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={s.use_case_link}>
                            {useCaseData.addlink.cmnexternallink ? (
                                <a href={useCaseData.addlink.cmnlink} className='learn-more'>
                                    <span className='inline-block learn-more-text'>{useCaseData.addlink.cmnlinktext}</span>
                                    <span className="learn-more-icon lrlm-icon text-darkScheme-btnSecondaryBg inline-block pl-5"><svg width="14" height="23" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 5.5L1 10" stroke="#86F8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                </a>) : (<Link to={useCaseData.addlink.cmnlink} className='learn-more'>
                                    <span className='inline-block learn-more-text'>{useCaseData.addlink.cmnlinktext}</span>
                                    <span className="learn-more-icon lrlm-icon text-darkScheme-btnSecondaryBg inline-block pl-5"><svg width="14" height="23" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 5.5L1 10" stroke="#86F8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                    </Link>)}
                        </div>
                    </div>
                    <div className={s.use_case_right}></div>
                </div>
            </div>
            {showDivider && (<div className='section-divider'></div>)}
        </section>
    )
}

export default InfoLandingUseCase;