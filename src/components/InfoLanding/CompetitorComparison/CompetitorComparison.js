import React, { useState, useEffect } from 'react';
import * as s from './CompetitorComparison.module.css';
import { StaticImage } from "gatsby-plugin-image"

import Link from "gatsby-link"

const CompetitorComparison = props => {
    return (
        <section className={`${s.competitor_comparison_wrapper} comparison-table relative`}>
            <div className="landing-container flex flex-col text-center items-center">
                <h1 className="landing-section-title">RudderStack vs. Snowplow</h1>
                <div className="mt-2 lg:mt-14 w-full relative">
                    <div className={`${s.table_heading} block lg:hidden text-darkScheme-btnSecondaryBg flex justify-center lg:justify-start p-6 text-darkScheme-btnSecondaryBg text-lg lg:text-2xl text-left uppercase font-bold`}>
                        <h3> CORE FEATURES </h3>
                    </div>
                    <div className={`${s.upper_row} flex`}>
                        <div className="w-1/2 hidden lg:block"></div>
                        <div className={`${s.upper_row_wrapper} lg:w-1/2 w-full`}>
                            <div className={`${s.grad_bg} flex lg:rounded-2xl justify-content-end`}>
                                <div className="w-1/2">
                                    <div className="ellipse flex items-center justify-center h-10 lg:h-20">
                                        <StaticImage src="../../../images/rudder-stack-logo.svg" className={`${s.logo_compare}`} />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="ellipse flex items-center justify-center h-10 lg:h-20">
                                        <StaticImage src="../../../images/snowplow.svg" className={`${s.logo_compare}`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${s.main_table_content} `}>
                        <div className={`${s.table_heading} hidden lg:block text-darkScheme-btnSecondaryBg flex justify-start p-6 text-darkScheme-btnSecondaryBg text-lg lg:text-2xl text-left uppercase font-bold`}>
                            <h3> CORE FEATURES </h3>
                        </div>
                        <div className={`${s.table_inside_contain}`}>
                            <div className={`${s.grad_bg} flex lg:rounded-2xl items-center `}>
                                <div className="w-full  flex-row hidden lg:flex items-center">
                                    <div className="w-1/3 p-7 text-darkScheme-textPrimary justify-start flex">Event Replay functionality</div>
                                    <div className="w-1/3 p-7">
                                        <span class={`${s.check_icon} ${s.check_comparison}`} />
                                    </div>
                                    <div className="w-1/3 p-7"> <span className={`${s.line_image}`} /> </div>
                                </div>

                                <div className="py-2 px-4 w-full flex-col flex block lg:hidden">
                                    <div class="text-darkScheme-textPrimary pb-1">150+ Cloud Destinations  (GA, Amplitude, Braze, etc.)</div>
                                    <div class="flex">
                                        <div class="w-1/2 self-center h-10 flex items-center justify-center"><span className={`${s.check_icon} ${s.check_comparison}`}></span></div>
                                        <div class="w-1/2 self-center h-10 flex items-center justify-center"><span className={`${s.line_image}`}></span></div></div>
                                    </div>
                                </div>
                    
                            <div className={`${s.grad_bg} flex lg:rounded-2xl items-center`}>
                                <div className="w-full flex flex-row hidden lg:flex items-center">
                                    <div className="w-1/3 p-7 text-darkScheme-textPrimary justify-start flex">Event Replay functionality</div>
                                    <div className="w-1/3 p-7">
                                        <span class={`${s.check_icon} ${s.check_comparison}`} />
                                    </div>
                                    <div className="w-1/3 p-7"> <span className={`${s.line_image}`} /> </div>
                                </div>

                                <div className="py-2 px-4 w-full flex-col flex block lg:hidden">
                                    <div class="text-darkScheme-textPrimary pb-1">150+ Cloud Destinations  (GA, Amplitude, Braze, etc.)</div>
                                    <div class="flex">
                                        <div class="w-1/2 self-center h-10 flex items-center justify-center"><span className={`${s.check_icon} ${s.check_comparison}`}></span></div>
                                        <div class="w-1/2 self-center h-10 flex items-center justify-center"><span className={`${s.line_image}`}></span></div></div>
                                    </div>
                                </div>

                            <div className={`${s.grad_bg} flex lg:rounded-2xl items-center`}>
                                <div className="w-full flex flex-row hidden lg:flex items-center">
                                    <div className="w-1/3 p-7 text-darkScheme-textPrimary justify-start flex">Event Replay functionality</div>
                                    <div className="w-1/3 p-7">
                                        <span class={`${s.check_icon} ${s.check_comparison}`} />
                                    </div>
                                    <div className="w-1/3 p-7"> <span className={`${s.line_image}`} /> </div>
                                </div>

                                <div className="py-2 px-4 w-full flex-col flex block lg:hidden">
                                    <div class="text-darkScheme-textPrimary pb-1">150+ Cloud Destinations  (GA, Amplitude, Braze, etc.)</div>
                                    <div class="flex">
                                        <div class="w-1/2 self-center h-10 flex items-center justify-center"><span class={`${s.check_icon} ${s.check_comparison}`}></span></div>
                                        <div class="w-1/2 self-center h-10 flex items-center justify-center"><span className={`${s.line_image}`}></span></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
        </section>
    )
}

export default CompetitorComparison