import React from "react";
import PortableText from "./portableText";
import Image from "./image"
import '../lib/font-awesome';
    
const RightSideHiglightedContent = (props) => {
    const maintitle = props.righthighlightedcontentmaintitle
    const smalltitle = props.righthighlightedcontentsmalltitle
    const leftcontents = props.rhs_leftsection
    const rightcontents = props.rhs_rightsection
    return (
        <>
            <section className="bg-gray-100 100% py-8">
              <div className="container mx-auto m-8">
                <div className="flex flex-col w-full justify-center items-start text-center md:text-left">
                    <p className="my-4 text-blue-500 font-bold uppercase">{smalltitle}</p>
                    <h3 className="my-4 text-6xl font-bold leading-tight">{maintitle}</h3>
                </div>
                <div className="grid grid-cols-12 items-center flex-wrap">
                    <div className="col-span-5 p-2">
                    {
                        leftcontents.map(
                            (leftcontent, i) => (
                                (() => {
                                        const imgref = leftcontent.rhs_lb_icon.asset._ref
                                        const portabletext = leftcontent.rhs_lb_content
                                        const title = leftcontent.rhs_lb_title
                                        return (
                                            <>
                                                <div className="">
                                                    <Image props={imgref} />
                                                    <h3 className="mb-2 text-3xl font-bold leading-tight">{title}</h3>
                                                    <div className="text-gray-500">
                                                        <PortableText blocks={portabletext} />
                                                    </div>
                                                </div>
                                            </>
                                        );
                                })()
                            )
                        )
                    }  
                    </div>
                    <div className="col-span-7 p-2 bg-green-50 rounded-lg">
                    {
                        rightcontents.map(
                            (rightcontent, i) => (
                                (() => {
                                        const imgref = rightcontent.rhs_rb_icon.asset._ref
                                        const portabletext = rightcontent.rhs_rb_content
                                        const title = rightcontent.rhs_rb_title
                                        const buttons = rightcontent.rhs_rb_buttons
                                        return (
                                            <>
                                                <div key={i} className="p-20">
                                                    <Image props={imgref} />
                                                    <h3 className="mb-2 text-3xl font-bold leading-tight">{title}</h3>
                                                    <div className="text-gray-500">
                                                        <PortableText blocks={portabletext} />
                                                    </div>
                                                    <div className="flex mt-6">
                                                    {
                                                        buttons.map(
                                                            (btn, i) => (
                                                            <>
                                                                <a key={i} className={(btn.btnhiglight === true ? 'bg-black text-white' : '') + ` py-2 px-8 mr-4 rounded-lg border text-sm border-black`} href={btn.btnlink}>{btn.btntext}</a>
                                                            </>
                                                            )
                                                        )
                                                    }
                                                    </div>
                                                </div>
                                            </>
                                        );
                                })()
                            )
                        )
                    }
                    </div>
                </div>
              </div>
            </section>
        </>
    )
};
export default RightSideHiglightedContent