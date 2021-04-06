import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../lib/font-awesome';
    
const MiddleBanner = (props) => {
    const smalldescription = props.smalldescription
    const title = props.title
    const btns = props.addbuttons
    return (
        <>
           <section className="bg-black text-white 100% py-8">
              <div className="container max-w-5xl mx-auto m-8">
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                    <div className="flex flex-wrap flex-col-reverse items-center sm:flex-row">	
                        <div className="w-full flex items-start sm:w-1/2 p-6 mt-6">
                            <FontAwesomeIcon icon="arrow-right" pull="left" className="text-blue-500 font-normal" size="6x" />
                            <h3 className="my-4 text-6xl font-bold leading-tight">{title}</h3>
                        </div>
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <div className="align-middle">
                                <p>{smalldescription}</p>
                                <div className="flex pt-4">
                                {
                                    btns.map(
                                        (btn, i) => (
                                            <a key={i} className={(btn.btnhiglight === true ? 'bg-white text-black' : '') + ` py-2 px-8 mr-4 rounded-lg border border-white`} href={btn.btnlink}>{btn.btntext}</a>
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