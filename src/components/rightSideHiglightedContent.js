import React from "react";
import PortableText from "./portableText";
import Image from "./image"
import Link from "gatsby-link"
    
const RightSideHiglightedContent = (props) => {
    const maintitle = props.righthighlightedcontentmaintitle
    const smalltitle = props.righthighlightedcontentsmalltitle
    const leftcontents = props.rhs_leftsection
    const rightcontents = props.rhs_rightsection
    return (
        <>
            <section className="100%">
              <div className="container px-3 mx-auto">
                <div className="flex flex-col w-full justify-center items-start md:text-left">
                    <p className="my-4 mt-20 text-blue text-sm font-bold uppercase">{smalltitle}</p>
                    <h3 className="my-4 pb-10 text-4xl md:text-5xl text-primary font-bold leading-tight">{maintitle}</h3>
                </div>
                <div className="grid md:grid-cols-12 md:gap-16 items-center flex-wrap">
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
                                                <div key={i} className="mb-10">
                                                    <Image props={imgref} />
                                                    <h3 className="my-4 text-3xl text-primary font-bold leading-tight">{title}</h3>
                                                    <div className="text-secondary text-lg leading-7">
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
                    <div className="md:col-span-7 bg-background rounded-xl">
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
                                                <h3 className="my-4 text-3xl text-primary font-bold leading-tight">{title}</h3>
                                                <div className="text-secondary text-lg leading-7">
                                                    <PortableText blocks={portabletext} />
                                                </div>
                                                <div className="md:flex block mt-6">
                                                {
                                                    buttons.map(
                                                        (btn, i) => (
                                                        <>
                                                        {(() => {
                                                            if (btn.btnexternallink === true){
                                                                return (
                                                                    <a key={btn._key} className={(btn.btnhiglight === true ? 'bg-primary text-white' : '') + ` py-2 md:px-8 lg:px-8 px-2 text-center md:mb-0 mb-4 md:flex block mr-4 rounded-lg border text-sm border-primary`} href={btn.btnlink}>{btn.btntext}</a>
                                                                )
                                                            }else{
                                                                return(
                                                                    <span key={btn._key} className={(btn.btnhiglight === true ? 'bg-primary text-white' : '') + ` py-2 md:px-8 lg:px-8 px-2 text-center md:mb-0 mb-4 md:flex block mr-4 rounded-lg border text-sm border-primary`}>
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