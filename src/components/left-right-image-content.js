import React from "react";
import PortableText from "./portableText";
import Image from "./image"
    
const LeftRightImgCnt = (props) => {
    const maintitle = props.leftrightcontentmaintitle
    const smalltitle = props.leftrightcontentsmalltitle
    const contents = props.leftrightimageblock
    return (
        <>
            <section className="bg-backgroundsecondary 100% left-right-section md:px-0 pb-6 md:pd-0">
              <div className="container px-4 mx-auto">
                <div className="flex flex-col w-full justify-center items-start md:text-left max-w-screen-md">
                    <p className="my-4 mt-20 text-blue text-sm font-bold uppercase">{smalltitle}</p>
                    <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">{maintitle}</h3>
                </div>
                {
                    contents.map(
                        (content, i) => (
                            (() => {
                                if(content.condition === 'right'){
                                    const imgcondition = content.imageVideoConditionBlock.condition
                                    const portabletext = content.content
                                    const smalltitle = content.smalltitle
                                    const title = content.title
                                    const linktext = content.addlink.cmnlinktext
                                    const linkurl = content.addlink.cmnlink
                                    return (
                                        <div key={i} className="flex items-center flex-wrap flex-col-reverse sm:flex-row ">	
                                            <div className="w-full sm:w-1/2 md:p-6 mt-6">
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
                                            <div className="w-full sm:w-1/2 md:p-6 mt-6">
                                                <div className="align-middle md:pl-16">
                                                    <p className="my-4 text-sm text-blue font-bold uppercase">{smalltitle}</p>
                                                    <h3 className="my-4 pb-2 text-2xl md:text-3xl text-primary font-bold leading-tight">{title}</h3>
                                                    <div className="text-secondary leading-7 text-sm md:text-lg">
                                                        <PortableText blocks={portabletext} />
                                                    </div>
                                                    <div className="my-8 flex items-center">
                                                        <a href={linkurl} className="font-bold leading-tight text-sm lr-icon" >{linktext}</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    );
                                }else
                                {
                                    const imgcondition = content.imageVideoConditionBlock.condition
                                    const portabletext = content.content
                                    const smalltitle = content.smalltitle
                                    const title = content.title
                                    const linktext = content.addlink.cmnlinktext
                                    const linkurl = content.addlink.cmnlink
                                    return(
                                    <div key={i} className="flex items-center flex-wrap row-wrapper">
                                        <div className="w-5/6 sm:w-1/2 md:p-6 mt-6  md:pr-20">
                                            <p className="my-4 text-blue text-sm font-bold uppercase">{smalltitle}</p>
                                            <h3 className="my-4 pb-2 text-3xl text-primary font-bold leading-tight">{title}</h3>
                                            <div className="text-secondary leading-7 text-lg">
                                                <PortableText blocks={portabletext} />
                                            </div>
                                            <div className="my-8 flex items-center">
                                                <a href={linkurl} className="font-bold leading-tight text-sm lr-icon relative inline-flex sm:inline-block" >{linktext}</a>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 md:p-6 mt-6">
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