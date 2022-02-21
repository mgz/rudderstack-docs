import React, { useState, useEffect } from 'react';
import * as s from './CompetitorComparison.module.css';
import { StaticImage } from "gatsby-plugin-image"
import Image from '../../image';
import Link from "gatsby-link"



const CompetitorComparison = (
    data
) => {
    let segmentData = data.data; 
    const table_row = segmentData.group_items.group_items;
    const company_logo_img = segmentData.company_logos; 

    return (
        <section className={`${s.competitor_comparison_wrapper} comparison-table relative`}>
            <div className="landing-container flex flex-col text-center items-center">
                <h1 className="landing-section-title">{segmentData.title} </h1>
                <div className="mt-2 lg:mt-14 w-full relative">
                    <div className="block lg:hidden flex justify-center lg:justify-start p-6 text-darkScheme-btnSecondaryBg text-lg lg:text-2xl text-left uppercase font-bold">
                        <h3> {segmentData.group_items.group_items[0].group_name} </h3>
                    </div>
                    <div className={`${s.upper_row} flex`}>
                        <div className="w-1/2 hidden lg:block"></div>
                        <div className={`${s.upper_row_wrapper}  w-full`}>
                            <div className={`${s.grad_bg} flex lg:rounded-2xl justify-content-end`}>
                            {company_logo_img.map((logo, i) => {
                               return (
                                <div className="w-1/2" key={i}>
                                    <div className="ellipse flex items-center justify-center h-10 lg:h-20">
                                        <Image props={logo.image.asset._ref} classes={`${s.logo_compare}`} />
                                    </div>
                                </div>
                               )
                            })}
                            </div>
                        </div>
                    </div>

                    <div className={`${s.table_wrapper}`}>
                        {table_row.map((item, i) => {
                            return (
                                <div key={item._key} className={`${s.compare_table_wrapper}`}>
                                    <div className={`${s.heading_desktop} flex justify-center lg:justify-start p-6 text-darkScheme-btnSecondaryBg text-lg lg:text-2xl text-left uppercase font-bold`}>
                                        <h3> {item.group_name} </h3>
                                    </div>

                                    <div className={`${s.table_inside_contain}`}>
                                        {item.table_data.rows.map((row_data, i) => {
                                            return (
                                                
                                                <div className={`${s.grad_bg} flex lg:rounded-2xl items-center `} key={row_data._key}>
                                                    <div className="w-full  flex-row hidden lg:flex items-center">
                                                        <div className="w-1/3 p-7 text-darkScheme-textPrimary justify-start flex text-left">{row_data.cells[0]}</div>
                                                        <div className="w-1/3 p-7">
                                                            <span className={
                                                                row_data.cells[1] === 'CHECK' ? `${s.check_icon} ${s.check_comparison}` : row_data.cells[1] === '' ? `${s.line_image}` : `${s.show_text}`} >
                                                                <span>  {row_data.cells[1]} </span>
                                                            </span>
                                                        </div>
                                                        <div className="w-1/3 p-7">
                                                            <span className={
                                                                row_data.cells[2] === 'CHECK' ? `${s.check_icon} ${s.check_comparison}` : row_data.cells[2] === '' ? `${s.line_image}` : `${s.show_text}`} >
                                                                <span>  {row_data.cells[2]} </span>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="py-2 px-4 w-full flex-col flex block lg:hidden">
                                                        <div className="text-darkScheme-textPrimary pb-1">{row_data.cells[0]}</div>
                                                        <div className="flex">
                                                            <div className="w-1/2 self-center h-10 flex items-center justify-center">
                                                                <span className={row_data.cells[1] === 'CHECK' ?
                                                                    `${s.check_icon} ${s.check_comparison}` :
                                                                    `${s.line_image}`} />

                                                            </div>
                                                            <div className="w-1/2 self-center h-10 flex items-center justify-center">
                                                                <span className={row_data.cells[2] === '' ?
                                                                    `${s.line_image} ` :
                                                                    `${s.check_icon} ${s.check_comparison}`} />
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                              
                                            )
                                        })}

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CompetitorComparison