import React from "react";
import PortableText from "./portableText";
import Image from "./image"
import '../lib/font-awesome';
    
const FreeText = (props) => {
    console.log('freetext: ', props)
    const maintitle = props.ftwri_title
    const imgref = props.ftwri_rightsideimage.asset._ref
    const portabletext = props.ftwri_content
    const rightcontents = props.rhs_rightsection
    const buttons = props.ftwri_buttons
    return (
        <>
            <section className="bg-white-100 100% border-b py-8">
              <div className="container max-w-5xl mx-auto m-8">
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex items-center flex-wrap">
                    <div className="w-3/4 p-2 block">
                        <h3 className="mb-2 text-3xl font-bold leading-tight">{maintitle}</h3>
                        <div className="text-gray-500">
                            <PortableText blocks={portabletext} />
                        </div>
                        <div className="flex mt-6">
                        {
                            buttons.map(
                                (btn, i) => (
                                <>
                                    <a key={i} className={(btn.btnhiglight === true ? 'bg-black text-white' : '') + ` py-2 px-6 mr-4 rounded-lg border text-sm border-black`} href={btn.btnlink}>{btn.btntext}</a>
                                </>
                                )
                            )
                        }
                        </div>
                    </div>
                    <div className="w-1/4 p-2 block">
                        <Image props={imgref} />
                    </div>
                </div>
              </div>
            </section>
        </>
    )
};
export default FreeText