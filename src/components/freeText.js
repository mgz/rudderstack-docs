import React from "react";
import PortableText from "./portableText";
import Image from "./image"
import '../lib/font-awesome';
import Link from "gatsby-link"
    
const FreeText = (props) => {
    const maintitle = props.ftwri_title
    const imgref = props.ftwri_rightsideimage.asset._ref
    const portabletext = props.ftwri_content
    const buttons = props.ftwri_buttons
    return (
        <>
            <section className="bg-white 100%">
              <div className="max-w-6xl px-4 md:px-3 mx-auto py-12 pb-0 lg:py-32">
                <div className="flex items-center flex-wrap">
                    <div className="md:w-3/4 p-2 block xl:pr-32">
                        <h3 className="mb-6 text-4xl md:text-5xl text-primary font-bold leading-tight">{maintitle}</h3>
                        <div className="text-secondary text-lg leading-7 frtxt-contnt">
                            <PortableText blocks={portabletext} />
                        </div>
                        <div className="block md:flex mt-6">
                        {
                            buttons.map(
                                (btn, i) => (
                                <>
                                {(() => {
                                    if (btn.btnexternallink === true){
                                        return (
                                            <a key={btn._key} className={(btn.btnhiglight === true ? 'btn-primary-lg' : 'btn-secondary-lg ') + ` md:mr-4 md:mb-0 mb-4`} href={btn.btnlink}>{btn.btntext}</a>
                                        )
                                    }else{
                                        return(
                                        <span key={btn._key} className={(btn.btnhiglight === true ? 'btn-primary-lg' : 'btn-secondary-lg ') + ` md:mr-4 md:mb-0 mb-4`}>
                                            <Link to={btn.btnlink} >{btn.btntext}</Link>
                                            </span>
                                        ) 
                                    }
                                })()}
                                </>
                                )
                            )
                        }
                        </div>
                    </div>
                    <div className="md:w-1/4 p-2 block mx-auto">
                        <Image props={imgref} />
                    </div>
                </div>
              </div>
            </section>
        </>
    )
};
export default FreeText