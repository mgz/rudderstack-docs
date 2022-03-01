import React from 'react';
import { Link } from 'gatsby';

const AnnounceBanner = ({announcebannerbuttons}) => {
    return(
        <div className='section-gradient py-6'>
            <div className='lg:max-w-6xl w-full flex justify-center mx-auto lg:px-0 px-4'>
                {announcebannerbuttons && announcebannerbuttons.map((btn, i) => {
                    return (
                    <Link to={btn.btnlink} className="learn-more text-darkScheme-textPrimary font-bold inline-flex relative d-flex items-center" key={btn._key}>
                        <span className='learn-more-text inline-block md:text-2xl text-sm'>{btn.btntext}</span>
                        <span className="learn-more-icon lrlm-icon text-darkScheme-btnSecondaryBg inline-block pl-5"><svg width="14" height="23" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 5.5L1 10" stroke="#86F8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                    </Link>)
                })}
            </div>
        </div>
    )
}

export default AnnounceBanner