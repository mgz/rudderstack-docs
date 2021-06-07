import React from "react"
import PortableText from "./portableText"

const Tabs = props => {
  const [openTab, setOpenTab] = React.useState(0)
  const smalltitle = props.tabsmalltitle
  const maintitle = props.tabmaintitle
  const tabs = props.tabblock
  // console.log(tabs)
  return (
    <section className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center my-20 md:px-0">
      <div className="flex flex-col w-full justify-center items-start md:text-left mb-8 tab-section-wrapper">
        <p className="my-4 text-purple text-sm uppercase">{smalltitle}</p>
        <h3 className="mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">
          {maintitle}
        </h3>
      </div>
      <div className="grid md:grid-cols-12 w-full md:gap-2 lg:gap-16 tab-section">
        <div className="md:col-span-5">
          <ul
            className="block mb-0 list-none pt-3 md:pt-12 lg:pt-20 pb-4"
            role="tablist"
          >
            {tabs.map((tab, i) => {
              return (
                <li key={i} className="mr-2 last:mr-0 flex-auto md:my-1">
                  <a
                    className={
                      "text-lg py-6 pr-5 md:px-5 md:py-3 block leading-normal " +
                      (openTab === i
                        ? "font-bold md:border-l-4 md:border-tabborderactive opentab text-darkblue"
                        : "text-secondary md:bg-white bg-transparent border-b-2 md:border-b-0 md:border-l-4 border-tabborder closetab")
                    }
                    onClick={e => {
                      e.preventDefault()
                      setOpenTab(i)
                    }}
                    data-toggle="tab"
                    href={`#link` + i}
                    role="tablist"
                  >
                    {tab.tabtitle}
                  </a>
                  <div className="md:col-span-7 md:hidden bg-gradiantprimary rounded-xl">
                    <div className="relative block md:bg-background bg-transperent min-w-0 break-words md:bg-white w-full rounded-lg">
                      <div className="md:px-12 lg:px-20 md:py-12 md:bg-blueNew-lighter rounded-xl">
                        <div className="tab-content tab-space tab-content-item action-icon">
                          <div
                            key={i}
                            className={openTab === i ? "block p-6" : "hidden"}
                            id={`link` + i}
                          >
                            <PortableText blocks={tab.tabcontent} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="pt-3 hidden md:block md:col-span-7">
          <div className="relative block md:bg-background bg-transperent p-4 min-w-0 break-words md:bg-white w-full mb-6 rounded-lg">
            <div className="md:px-15 lg:px-15 md:py-10 bg-gradiantprimary rounded-xl">
              <div className="tab-content tab-space tab-content-item action-icon">
                {tabs.map((tab, i) => (
                  <div
                    key={i}
                    className={openTab === i ? "block" : "hidden"}
                    id={`link` + i}
                  >
                    <h3>{tab.tabtitle}</h3>
                    <PortableText blocks={tab.tabcontent} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Tabs
