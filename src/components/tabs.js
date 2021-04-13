import React from "react";
import PortableText from "./portableText";
    
const Tabs = (props) => {
const [openTab, setOpenTab] = React.useState(0);
const smalltitle = props.tabsmalltitle
const maintitle = props.tabmaintitle
const tabs = props.tabblock
return (
    <>
    <section className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center my-20">
        <div className="flex flex-col w-full justify-center items-start md:text-left mb-8 max-w-screen-lg">
            <p className="my-4 text-blue text-sm font-bold uppercase">{smalltitle}</p>
            <h3 className="my-4 text-4xl md:text-5xl text-primary font-bold leading-tight">{maintitle}</h3>
        </div>
        <div className="md:flex grid md:grid-cols-12 w-full md:gap-16">
            <div className="md:col-span-6">
            <ul
                className="block mb-0 list-none pt-3 pb-4"
                role="tablist"
            >
                {
                    tabs.map(
                        (tab, i) => (
                            <li key={i} className="-mb-px mr-2 last:mr-0 flex-auto my-2">
                            <a
                                className={
                                "text-lg px-5 py-3 block leading-normal " +
                                (openTab === i
                                    ? "text-blue border-l-4 border-blue"
                                    : "text-secondary bg-white border-l-4 border-tabborder ")
                                }
                                onClick={e => {
                                e.preventDefault();
                                setOpenTab(i);
                                }}
                                data-toggle="tab"
                                href={`#link`+i}
                                role="tablist"
                            >
                                {tab.tabtitle}
                            </a>
                            </li>
                        )
                    )
                }
            </ul>
            </div>
            <div className="pt-3 md:col-span-6 md:ml-8">
            <div className="relative block bg-background p-4 min-w-0 break-words bg-white w-full mb-6 rounded-lg">
                <div className="md:px-24 lg:px-20 py-12 bg-blueNew-lighter rounded-xl">
                <div className="tab-content tab-space tab-content-item">
                {
                    tabs.map(
                        (tab, i) => (
                            <div key={i} className={openTab === i ? "block" : "hidden"} id={`link`+i}>
                                <PortableText blocks={tab.tabcontent} />
                            </div>
                        )
                    )
                }
                </div>
                </div>
            </div>
            </div>
        </div>
        
    </section>
    </>
);
};
export default Tabs