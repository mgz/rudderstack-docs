import React from "react";
import PortableText from "./portableText";
import Image from "./image"
import '../lib/font-awesome';
    
const FreeText = (props) => {
    const maintitle = props.ftwri_title
    const imgref = props.ftwri_rightsideimage.asset._ref
    const portabletext = props.ftwri_content
    const buttons = props.ftwri_buttons
    return (
        <>
            <section className="bg-white 100%">
              <div className="container px-3 mx-auto py-12 pb-0 lg:py-28">
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
                                    <a key={i} className={(btn.btnhiglight === true ? 'bg-primary text-white' : '') + ` py-2 mr-4 md:px-8 lg:px-8 px-2 text-center rounded-lg md:mb-0 mb-4 md:flex block border transperent-btn text-sm border-primary`} href={btn.btnlink}>{btn.btntext}</a>
                                </>
                                )
                            )
                        }
                        </div>
                    </div>
                    <div className="md:w-1/4 p-2 block">
                        <Image props={imgref} />
                    </div>
                </div>
              </div>
            </section>
        </>
    )
};
export default FreeText