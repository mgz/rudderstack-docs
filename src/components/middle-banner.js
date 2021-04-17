import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../lib/font-awesome';
import { StaticImage } from "gatsby-plugin-image"
import Link from "gatsby-link"
    
const MiddleBanner = (props) => {
    const smalldescription = props.smalldescription
    const title = props.title
    const btns = props.addbuttons
    return (
        <>
            <section className="bg-primary text-white 100% pt-10 md:py-20 px-4 sm:px-0">
              <div className="max-w-6xl px-4 md:px-3 mx-auto">
                    <div className="flex flex-wrap justify-items-center items-center sm:flex-row">	
                        <div className="flex items-start md:w-1/2 mt-6">
                            <div className="">
                                <StaticImage src="../images/Arrow.svg" alt="Get Started"/>
                            </div>
                            <h3 className="text-4xl pl-5 md:pl-8 md:text-5xl font-bold font-custom leading-tight max-w-xs">{title}</h3>
                        </div>
                        <div className="md:w-1/2 mt-6 max-w-lg">
                            <div className="align-middle text-sm md:text-lg leading-6 md:leading-7 font-custom">
                                <p>{smalldescription}</p>
                                <div className="block md:flex pt-8 md:pt-5">
                                {
                                    btns.map(
                                        (btn, i) => (
                                            (() => {
                                                if (btn.btnexternallink === true){
                                                    return (
                                                        <a key={btn._key} className={(btn.btnhiglight === true ? 'bg-white text-primary' : '') + ` font-bold py-3 mb-6 md:mb-0 text-sm md:px-8 lg:px-8 px-2 text-center md:mr-4 rounded-lg md:mb-0 mb-4 md:flex block border leading-tight border-white font-custom`} href={btn.btnlink}>{btn.btntext}</a>
                                                    )
                                                }else{
                                                  return(
                                                    <span key={btn._key} className={(btn.btnhiglight === true ? 'bg-white text-primary' : '') + ` font-bold py-3 mb-6 md:mb-0 text-sm md:px-8 lg:px-8 px-2 text-center md:mr-4 rounded-lg md:mb-0 mb-4 md:flex block border leading-tight border-white font-custom`}>
                                                        <Link to={btn.btnlink} >{btn.btntext}</Link>
                                                    </span>
                                                  ) 
                                                }
                                            })()
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