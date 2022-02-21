import React from 'react'; 
import * as s from './CompetitorCenterContent.module.css';
 
const CompetitorCenterContent = ({data}) => {
    return(
        <section className={`${s.competitor_center_wrapper} ${data.showDivider ? 'sectionbg' : ''} relative`}>
            <div className="landing-container flex flex-col text-center items-center">
                {data.section_category !== "" && <p className={`${s.reverse_ETL} text-darkScheme-btnSecondaryBg`}>{data.section_category}</p>}
                <h1 className="landing-section-title">{data.title}</h1>
                <p className={`${s.competitor_section_pera} text-darkScheme-grayText`}>
                    {data.description}
                </p>
                {data.subtitle !== "" && <p className={`${s.power_of_rudderstack} text-darkScheme-textPrimary`}>{data.subtitle}</p>}
                <button className="cta-btn btn-primary-lg">Talk to sales</button>
            </div>
            {data.showDivider && (<div className='section-divider'></div>)}
        </section>
    )
}

export default CompetitorCenterContent