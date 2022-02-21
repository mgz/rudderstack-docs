import React from 'react'; 
import * as s from './CompetitorCenterContent.module.css';
 
const CompetitorCenterContent = (  ) => {
    return(
        <section className={`${s.competitor_center_wrapper} relative`}>
            <div className="landing-container flex flex-col text-center items-center">
                <p className={`${s.reverse_ETL} text-darkScheme-btnSecondaryBg`}>Reverse ETL</p>
                <h1 className="landing-section-title">RudderStack vs. Snowplow</h1>
                <p className={`${s.competitor_section_pera} text-darkScheme-grayText`}>
                    Choosing the right platform to sync all your customer data pipelines to is crucial.
                     This page compares two of the top solutions – RudderStack and Snowplow – to help you choose 
                     the platform that is right for you.
                </p>
                <p className={`${s.power_of_rudderstack} text-darkScheme-textPrimary`}>Ready to see the power of RudderStack? Talk to sales for a demo.</p>
                <button className="text-darkScheme-textPrimary bg-darkScheme-btnPrimaryBg border-none btn-primary-lg">Talk to sales</button>
            </div>
        </section>
    )
}

export default CompetitorCenterContent