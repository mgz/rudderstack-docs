import React from 'react';
import { Link } from 'gatsby';
import Image from '../../image';
import * as s from './InfoLandingKeyFeatures.module.css';

const InfoLandingKeyFeatures = (
    data,
    showDivider
    ) => {
    let keyFeaturesData = data.data;
    return(
        <section className={`${s.key_features} relative pb-24`}>
            <div className='landing-container'>
                <h2 className='landing-section-title text-center'>{keyFeaturesData.title}</h2>
                <div className={s.key_features_wrapper}>
                    <ul className={`${s.key_features_list} flex flex-col lg:flex-row`}>
                        {keyFeaturesData.icon_with_text_items.map((item, index) => {
                            if(index === 0 || index === 1 || index === 2){
                                return (
                                    <li className={s.key_features_block} key={item._key}>
                                        <span className={s.key_features_image}>
                                            <Image
                                                props={item.icon.asset._ref}
                                            />
                                        </span>
                                        <p className={s.key_features_text}>{item.title}</p>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                    <ul className={`${s.key_features_list} flex flex-col lg:flex-row`}>
                        {keyFeaturesData.icon_with_text_items.map((item, index) => {
                            if(index === 3 || index === 4 || index === 5){
                                return (
                                    <li className={s.key_features_block} key={item._key}>
                                        <span className={s.key_features_image}>
                                            <Image
                                                props={item.icon.asset._ref}
                                            />
                                        </span>
                                        <p className={s.key_features_text}>{item.title}</p>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                <div className='learn-more-wrapper flex md:justify-end justify-center'>
                    {keyFeaturesData.addlink.cmnexternallink ? (<a href={keyFeaturesData.addlink.cmnlink} className='learn-more'>
                                    <span className='inline-block learn-more-text'>{keyFeaturesData.addlink.cmnlinktext}</span>
                                    <span className="learn-more-icon lrlm-icon text-darkScheme-btnSecondaryBg inline-block pl-5"><svg width="14" height="23" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 5.5L1 10" stroke="#86F8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                </a>) : (<Link to={keyFeaturesData.addlink.cmnlink} className='learn-more'>
                                    <span className='inline-block learn-more-text'>{keyFeaturesData.addlink.cmnlinktext}</span>
                                    <span className="learn-more-icon lrlm-icon text-darkScheme-btnSecondaryBg inline-block pl-5"><svg width="14" height="23" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 5.5L1 10" stroke="#86F8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                    </Link>)}
                </div>
            </div>
            {showDivider && (<div className='section-divider'></div>)}
        </section>
    )
}

export default InfoLandingKeyFeatures;