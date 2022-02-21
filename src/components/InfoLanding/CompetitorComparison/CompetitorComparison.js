import React, { useState, useEffect } from 'react';
import * as s from './CompetitorComparison.module.css';
import { StaticImage } from "gatsby-plugin-image"
import Image from '../../image';
import Link from "gatsby-link"

 

const CompetitorComparison = (
    data
    ) => {
   let segmentData = data.data;
    // console.log("some", segmentData); 

    // console.log("some1", segmentData.group_items.group_items[0].table_data.rows);    
    
    
    // const table_row = segmentData.group_items.group_items[0].table_data.rows;


    return (
        <section className={`${s.competitor_comparison_wrapper} comparison-table relative`}>
            <div className="landing-container flex flex-col text-center items-center">
                <h1 className="landing-section-title">{segmentData.title} 1</h1>
                <div className="mt-2 lg:mt-14 w-full relative">
                    <div className="block lg:hidden  text-darkScheme-btnSecondaryBg flex justify-center lg:justify-start p-6 text-darkScheme-btnSecondaryBg text-lg lg:text-2xl text-left uppercase font-bold">
                        <h3> {segmentData.group_items.group_items[0].group_name} </h3>
                    </div>
                    <div className={`${s.upper_row} flex`}>
                        <div className="w-1/2 hidden lg:block"></div>
                        <div className={`${s.upper_row_wrapper}  w-full`}>
                            <div className={`${s.grad_bg} flex lg:rounded-2xl justify-content-end`}>
                                <div className="w-1/2">
                                    <div className="ellipse flex items-center justify-center h-10 lg:h-20"> 
                                        <Image props={segmentData.company_logos[0].image.asset._ref} className={`${s.logo_compare}`} />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="ellipse flex items-center justify-center h-10 lg:h-20">
                                        <Image props={segmentData.company_logos[1].image.asset._ref} className={`${s.logo_compare}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="hidden lg:block text-darkScheme-btnSecondaryBg flex justify-start p-6 text-darkScheme-btnSecondaryBg text-lg lg:text-2xl text-left uppercase font-bold">
                            <h3> {segmentData.group_items.group_items[0].group_name} </h3>
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