import React from 'react'; 
import * as s from './CompetitorCenterContent.module.css';
import { Link } from 'gatsby';
 
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
                {data.center_cta && data.center_cta.btnlink ? (<Link className="btn-primary-lg bg-darkScheme-btnPrimaryBg border-none text-darkScheme-textPrimary" to={data.center_cta.btnlink}>{data.center_cta.btntext}</Link>) : (<a href={data.center_cta.cmnexternallink} className="btn-primary-lg bg-darkScheme-btnPrimaryBg border-none text-darkScheme-textPrimary">{data.center_cta.cmnlinktext}</a>) }
            </div>
            {data.showDivider && (<div className='section-divider'></div>)}
        </section>
    )
}

export default CompetitorCenterContent