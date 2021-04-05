import React from "react";
import PortableText from "./portableText";
    
const Tabs = (props) => {
const [openTab, setOpenTab] = React.useState(1);
const smalltitle = props.tabsmalltitle
const maintitle = props.tabmaintitle
const tabs = props.tabblock
return (
    <>
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full justify-center items-start text-center md:text-left">
            <p className="my-4 text-blue-500 font-bold uppercase">{smalltitle}</p>
            <h3 className="my-4 text-6xl font-bold leading-tight">{maintitle}</h3>
        </div>
        <div className="w-1/5">
        <ul
            className="block mb-0 list-none pt-3 pb-4"
            role="tablist"
        >
            {
                tabs.map(
                    (tab, i) => (
                        <li key={i} className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            className={
                            "text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === i
                                ? "text-black bg-green-100"
                                : "text-black bg-white")
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
        <div className="w-4/5 pt-3">
        <div className="relative block bg-green-100 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
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
    </>
);
};
export default Tabs