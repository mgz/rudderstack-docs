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
            <section className="100% bg-whiteColor-custom">
              <div className="max-w-6xl px-4 md:px-3 mx-auto">
                <div className="flex flex-col w-full justify-center items-start md:text-left">
                    <p className="my-2 mt-16 md:mt-20 text-purple text-sm uppercase">{smalltitle}</p>
                    <h3 className="md:my-0 pb-16 md:pb-20 text-4xl md:text-5xl text-primary font-bold leading-tight">{maintitle}</h3>
                </div>
                <div className="grid md:grid-cols-12 md:gap-16 items-center flex-wrap">
                    <div className="md:col-span-5 md:mt-0 h-full">
                    {
                        leftcontents.map(
                            (leftcontent, i) => (
                                (() => {
                                        const imgref = leftcontent.rhs_lb_icon.asset._ref
                                        const portabletext = leftcontent.rhs_lb_content
                                        const title = leftcontent.rhs_lb_title
                                        return (
                                            <>
                                                <div key={i} className="mb-6">
                                                    <Image props={imgref} />
                                                    <h3 className="my-4 text-2xl md:text-3xl text-primary font-bold leading-tight">{title}</h3>
                                                    <div className="text-secondary text-sm md:text-lg leading-6	md:leading-7">
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
                    <div className="md:col-span-7 bg-gradiantprimary rounded-xl">
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
                                            <div key={i} className="py-16 px-6 md:px-14 md:py-19">
                                                <Image props={imgref} />
                                                <h3 className="mt-8 mb-4 pb-0 text-2xl md:text-3xl text-white font-bold leading-tight">{title}</h3>
                                                <div className="text-white text-sm md:text-lg leading-6 md:leading-7">
                                                    <PortableText blocks={portabletext} />
                                                </div>
                                                <div className="lg:flex block mt-6">
                                                {
                                                    buttons.map(
                                                        (btn, i) => (
                                                        <>
                                                        {(() => {
                                                            if (btn.btnexternallink === true){
                                                                return (
                                                                    <a key={btn._key} className={(btn.btnhiglight === true ? 'btn-primary-sm border-transparent' : 'btn-secondary-sm text-white border-white') + ` lg:mb-0 mb-4 lg:mr-4`} href={btn.btnlink}>{btn.btntext}</a>
                                                                )
                                                            }else{
                                                                return(
                                                                    <span key={btn._key} className={(btn.btnhiglight === true ? 'btn-primary-sm' : 'btn-secondary-sm') + ` lg:mb-0 mb-4 lg:mr-4`}>
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
