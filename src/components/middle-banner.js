import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../lib/font-awesome';
import { StaticImage } from "gatsby-plugin-image"

    
const MiddleBanner = (props) => {
    const smalldescription = props.smalldescription
    const title = props.title
    const btns = props.addbuttons
    return (
        <>
           <section className="bg-primary text-white 100% md:py-20 ">
              <div className="container md:px-3 mx-auto">
                    <div className="flex flex-wrap grid justify-items-center md:grid-cols-12 items-center sm:flex-row">	
                        <div className="w-full flex items-start md:col-span-5 md:px-20 p-6 mt-6">
                            <div className="mt-3">
                                <StaticImage src="../images/Arrow.svg" alt="Get Started"/>
                            </div>
                            <h3 className="text-4xl ml-5 md:text-5xl font-bold font-custom leading-tight">{title}</h3>
                        </div>
                        <div className="w-full md:col-span-7 md:px-20 p-6 mt-6">
                            <div className="align-middle text-lg leading-7 font-custom">
                                <p>{smalldescription}</p>
                                <div className="block md:flex pt-4">
                                {
                                    btns.map(
                                        (btn, i) => (
                                            <a key={i} className={(btn.btnhiglight === true ? 'bg-white text-primary' : '') + ` py-2 text-sm md:px-8 lg:px-8 px-2 text-center mr-4 rounded-lg md:mb-0 mb-4 md:flex block border leading-tight border-white font-custom`} href={btn.btnlink}>{btn.btntext}</a>
                                        )
                                    )
                                }
                                </div>
                            </div>
                        </div>

                    </div>
              </div>
            </section>
        </>
    )
};
export default MiddleBanner