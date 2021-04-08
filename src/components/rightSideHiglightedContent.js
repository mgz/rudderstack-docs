import React from "react";
import PortableText from "./portableText";
import Image from "./image"
    
const RightSideHiglightedContent = (props) => {
    const maintitle = props.righthighlightedcontentmaintitle
    const smalltitle = props.righthighlightedcontentsmalltitle
    const leftcontents = props.rhs_leftsection
    const rightcontents = props.rhs_rightsection
    return (
        <>
            <section className="100% py-8">
              <div className="container px-3 mx-auto">
                <div className="flex flex-col w-full justify-center items-start md:text-left">
                    <p className="mt-4 text-blue-500 font-bold uppercase">{smalltitle}</p>
                    <h3 className="my-4 pb-10 text-4xl md:text-6xl font-bold leading-tight">{maintitle}</h3>
                </div>
                <div className="grid md:grid-cols-12 items-center flex-wrap">
                    <div className="md:col-span-5 p-2">
                    {
                        leftcontents.map(
                            (leftcontent, i) => (
                                (() => {
                                        const imgref = leftcontent.rhs_lb_icon.asset._ref
                                        const portabletext = leftcontent.rhs_lb_content
                                        const title = leftcontent.rhs_lb_title
                                        return (
                                            <>
                                                <div className="mb-10">
                                                    <Image props={imgref} />
                                                    <h3 className="my-4 text-3xl font-bold leading-tight">{title}</h3>
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
                    <div className="md:col-span-7 p-4 bg-green-50 rounded-lg">
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
                                                <div key={i} className="md:p-20 lg:p-20">
                                                    <Image props={imgref} />
                                                    <h3 className="my-4 text-3xl font-bold leading-tight">{title}</h3>
                                                    <div className="text-gray-500">
                                                        <PortableText blocks={portabletext} />
                                                    </div>
                                                    <div className="md:flex block mt-6">
                                                    {
                                                        buttons.map(
                                                            (btn, i) => (
                                                            <>
                                                                <a key={i} className={(btn.btnhiglight === true ? 'bg-black text-white' : '') + ` py-2 md:px-8 lg:px-8 px-2 text-center md:mb-0 mb-4 md:flex block mr-4 rounded-lg border text-sm border-black`} href={btn.btnlink}>{btn.btntext}</a>
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