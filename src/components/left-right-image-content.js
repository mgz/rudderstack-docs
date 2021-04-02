import React from "react";
import PortableText from "./portableText";
import Image from "./image"
    
const LeftRightImgCnt = (props) => {
    const maintitle = props.leftrightcontentmaintitle
    const smalltitle = props.leftrightcontentsmalltitle
    const contents = props.leftrightimageblock
    return (
        <>
            <section className="bg-gray-100 100% border-b py-8">
              <div className="container max-w-5xl mx-auto m-8">
                <div className="flex flex-col w-full justify-center items-start text-center md:text-left">
                    <p className="my-4 text-blue-500 font-bold uppercase">{smalltitle}</p>
                    <h3 className="my-4 text-6xl font-bold leading-tight">{maintitle}</h3>
                </div>
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                {
                    contents.map(
                        (content, i) => (
                            (() => {
                                if(content.condition === 'right'){
                                    const imgcondition = content.imageVideoConditionBlock.condition
                                    const portabletext = content.content
                                    return (
                                        <div key={i} className="flex flex-wrap flex-col-reverse sm:flex-row">	
                                            <div className="w-full sm:w-1/2 p-6 mt-6">
                                            {(() => {
                                                if (imgcondition === 'imageoption'){
                                                    const imgref = content.imageVideoConditionBlock.imageoption.asset._ref
                                                    return (
                                                        <Image props={imgref} />
                                                    )
                                                }
                                                return null;
                                            })()}
                                            </div>
                                            <div className="w-full sm:w-1/2 p-6 mt-6">
                                                <div className="align-middle">
                                                    <PortableText blocks={portabletext} />
                                                </div>
                                            </div>

                                            </div>
                                    );
                                }else
                                {
                                    const imgcondition = content.imageVideoConditionBlock.condition
                                    const portabletext = content.content
                                    return(
                                    <div key={i} className="flex flex-wrap">
                                        <div className="w-5/6 sm:w-1/2 p-6">
                                            <PortableText blocks={portabletext} />
                                            
                                        </div>
                                        <div className="w-full sm:w-1/2 p-6">
                                            {(() => {
                                                if (imgcondition === 'imageoption'){
                                                    const imgref = content.imageVideoConditionBlock.imageoption.asset._ref
                                                    return (
                                                        <Image props={imgref} />
                                                    )
                                                }
                                                return null;
                                            })()}
                                        </div>
                                    </div>
                                    );
                                }
                            })()
                        )
                    )
                }  
              </div>
            </section>
        </>
    )
};
export default LeftRightImgCnt