import React from "react";
import PortableText from "./portableText";
import Image from "./image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../lib/font-awesome';
    
const LeftRightImgCnt = (props) => {
    console.log('left: ', props)
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
                                    const smalltitle = content.smalltitle
                                    const title = content.title
                                    const linktext = content.addlink.cmnlinktext
                                    const linkurl = content.addlink.cmnlink
                                    return (
                                        <div key={i} className="flex items-center flex-wrap flex-col-reverse sm:flex-row">	
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
                                                    <p className="my-4 text-blue-500 font-bold uppercase">{smalltitle}</p>
                                                    <h3 className="my-4 text-3xl font-bold leading-tight">{title}</h3>
                                                    <div className="text-gray-500">
                                                        <PortableText blocks={portabletext} />
                                                    </div>
                                                    <div className="my-8 flex items-center">
                                                        <span className="border-black border rounded-full h-5 w-5 flex items-center justify-center">
                                                            <FontAwesomeIcon icon="arrow-right" size="sm" />
                                                        </span>
                                                        <a href={linkurl} className="pl-3 font-bold leading-tight text-sm" >{linktext}</a>
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
                                    <div key={i} className="flex items-center flex-wrap">
                                        <div className="w-5/6 sm:w-1/2 p-6">
                                            <p className="my-4 text-blue-500 font-bold uppercase">{smalltitle}</p>
                                            <h3 className="my-4 text-3xl font-bold leading-tight">{title}</h3>
                                            <div className="text-gray-500">
                                                <PortableText blocks={portabletext} />
                                            </div>
                                            <div className="my-8 flex items-center">
                                                <span className="border-black border rounded-full h-5 w-5 flex items-center justify-center">
                                                    <FontAwesomeIcon icon="arrow-right" size="sm" />
                                                </span>
                                                <a href={linkurl} className="pl-3 font-bold leading-tight text-sm" >{linktext}</a>
                                            </div>
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