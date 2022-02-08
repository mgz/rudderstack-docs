import React, { useState, useEffect } from 'react';
import * as s from './CompetitorComparison.module.css';
import { StaticImage } from "gatsby-plugin-image"

import Link from "gatsby-link"

const CompetitorComparison = props => {



    return (
        <section className={`${s.competitor_comparison_wrapper} comparison-table relative`}>
            <div className="landing-container flex flex-col text-center items-center">
                <h1 className="landing-section-title">RudderStack vs. Snowplow</h1>

                <div className="hidden lg:block mt-14 lg:px-4 px-6">
                    <table className="pricing-table relative sm:w-full table-fixed font-custom text-grayColor-custom">
                        <thead>
                            <tr  className="grad-bg rounded-2xl"  >
                                <th className="z-10 sticky-pricing-banner triggers" colSpan="2"  >                                    
                                </th>
                                <th className="z-10 sticky-pricing-banner triggers rounded-tl-2xl rounded-bl-2xl">
                                    <div className="ellipse flex items-center justify-center h-20">
                                        <StaticImage src="../../../images/rudder-stack-logo.svg" />
                                    </div>
                                    
                                </th>
                                <th className="z-10 sticky-pricing-banner triggers rounded-br-2xl rounded-tr-2xl">
                                    <div className="ellipse flex items-center justify-center h-20">
                                        <StaticImage src="../../../images/snowplow.svg" />
                                    </div>
                                    
                                </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="triggers">
                                <td colSpan={"4"}>
                                    <table className="w-full">
                                        <tbody> 

                                            <tr>
                                                <td className="p-6 text-darkScheme-btnSecondaryBg text-2xl text-left uppercase font-bold" colSpan={"2"}>
                                                    CORE FEATURES
                                                </td>
                                            </tr>

                                            <tr
                                                className="grad-bg rounded-2xl"  >
                                                <td className="p-6 text-lg text-left w-1/4 rounded-tl-2xl rounded-bl-2xl text-darkScheme-textPrimary opacity-50">
                                                    Event Replay functionality
                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4">
                                                    <span className={`check-icon check-comparison`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>

                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4 rounded-br-2xl rounded-tr-2xl">
                                                <span className={`check-icon check-comparison`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>

                                                </td>

                                            </tr>

                                            <tr
                                                className="bg-transparent"  >
                                                <td className="p-6 text-lg text-left w-1/4 rounded-tl-2xl rounded-bl-2xl text-darkScheme-textPrimary opacity-50">
                                                    Open-source offering
                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4">
                                                    <span className={`check-icon check-comparison`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>

                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4 rounded-br-2xl rounded-tr-2xl">
                                                <span className={`check-icon check-comparison`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>
                                                </td>

                                            </tr>
                                            <tr
                                                className="grad-bg rounded-2xl"  >
                                                <td className="p-6 text-lg text-left w-1/4 rounded-tl-2xl rounded-bl-2xl text-darkScheme-textPrimary opacity-50">
                                                    Ad-blocker resillient
                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4">
                                                    <span className={`check-icon check-comparison`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>

                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4 rounded-br-2xl rounded-tr-2xl">
                                                <span className={`check-icon check-comparison`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>
                                                </td>

                                            </tr>

                                            <tr
                                                className="bg-transparent"  >
                                                <td className="p-6 text-lg text-left w-1/4 rounded-tl-2xl rounded-bl-2xl text-darkScheme-textPrimary opacity-50">
                                                    Real-time event and custom transformations
                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4">
                                                    <span className={`check-icon check-comparison`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>

                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4">
                                                    <span className={`line-image`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>
                                                </td>

                                            </tr>
                                            <tr
                                                className="grad-bg rounded-2xl"  >
                                                <td className="p-6 text-lg text-left w-1/4 rounded-tl-2xl rounded-bl-2xl text-darkScheme-textPrimary opacity-50">
                                                    Event Schema Inference
                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4">
                                                    <span className={`check-icon check-comparison`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>

                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4  rounded-br-2xl rounded-tr-2xl">
                                                    <span className={`line-image`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>
                                                </td>

                                            </tr>

                                            <tr
                                                className="bg-transparent"  >
                                                <td className="p-6 text-lg text-left w-1/4 rounded-tl-2xl rounded-bl-2xl text-darkScheme-textPrimary opacity-50">
                                                    Data governance and schema enforcement
                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4">
                                                     
                                                    <span className="font-normal text-darkScheme-textPrimary">
                                                    API based
                                                    </span>

                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4"> 
                                                    <span className="font-normal text-darkScheme-textPrimary">
                                                    UI based
                                                    </span>
                                                </td>

                                            </tr>

                                            <tr
                                                className="grad-bg rounded-2xl"  >
                                                <td className="p-6 text-lg text-left w-1/4 rounded-tl-2xl rounded-bl-2xl text-darkScheme-textPrimary opacity-50">
                                                    Data ownership
                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4"> 
                                                    <span className="font-normal text-darkScheme-textPrimary">
                                                        Doesn’t store your data
                                                    </span>

                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4 rounded-br-2xl rounded-tr-2xl"> 
                                                    <span className="font-normal text-darkScheme-textPrimary">
                                                        Keeps a copy of your data
                                                    </span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="p-6 text-darkScheme-btnSecondaryBg text-2xl text-left uppercase font-bold" colSpan={"2"}>
                                                    SDKS, SOURCES AND SUPPORTED DESTINATIONS
                                                </td>
                                            </tr>
                                            <tr
                                                className="grad-bg rounded-2xl"  >
                                                <td className="p-6 text-lg text-left w-1/4 rounded-tl-2xl rounded-bl-2xl text-darkScheme-textPrimary opacity-50">
                                                    Web / mobile / server-side event tracking
                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4 ">
                                                    <span className={`check-icon check-comparison`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>

                                                </td>

                                                <td className="text-base py-4 px-12 w-1/4  rounded-br-2xl rounded-tr-2xl">
                                                <span className={`check-icon check-comparison`} />
                                                    <span className="font-normal text-darkScheme-textPrimary">

                                                    </span>
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table>
                                </td>
                            </tr>


                        </tbody>
                    </table>
 
                </div>


            </div>
        </section>
    )
}


export default CompetitorComparison