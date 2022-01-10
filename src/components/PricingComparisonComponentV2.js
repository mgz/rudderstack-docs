import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Image from "./image"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"


const PricingComparisonComponentV2 = props => {
  const [sticky, setSticky] = useState(true)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll, { passive: true })
  }, [])

  const handleScroll = () => {
    // console.log(
    //   "is sticky",
    //   document.getElementsByClassName("pricing-table")[0].offsetHeight -
    //     document
    //       .getElementsByClassName("pricing-table")[0]
    //       .getBoundingClientRect().top +
    //     document.getElementsByClassName("pricing-table")[0].offsetTop -
    //     window.scrollY >
    //     150
    // )
    // console.log(
    //   "vals",
    //   window.scrollY >
    //     window.scrollY +
    //       document
    //         .getElementsByClassName("pricing-table")[0]
    //         .getBoundingClientRect().top
    // )
    if (
      window.scrollY >
      window.scrollY +
        document
          .getElementsByClassName("pricing-table")[0]
          .getBoundingClientRect().top
    ) {
      setSticky(true)
    } else {
      setSticky(false)
    }

    // if (
    //   document.getElementsByClassName("pricing-table")[0].offsetHeight -
    //     document
    //       .getElementsByClassName("pricing-table")[0]
    //       .getBoundingClientRect().top +
    //     document.getElementsByClassName("pricing-table")[0].offsetTop -
    //     window.scrollY >
    //   150
    // ) {
    //   setSticky(true)
    // } else {
    //   setSticky(false)
    // }
  }

  let pricingComparisionData = []
  props.group_items.group_items.forEach(row => {
    pricingComparisionData.push({
      group: row.group_name,
      nodes: [],
    })

    row.table_data.rows.forEach(rr => {
      pricingComparisionData[pricingComparisionData.length - 1].nodes.push({
        title: rr.cells[0],
        free_val:
          rr.cells[1] === "CHECK"
            ? "<<CHECK>>"
            : rr.cells[1] === ""
            ? "<<UNCHECK>>"
            : rr.cells[1],
        pro_val:
          rr.cells[2] === "CHECK"
            ? "<<CHECK>>"
            : rr.cells[2] === ""
            ? "<<UNCHECK>>"
            : rr.cells[2],
        enterprice_val:
          rr.cells[3] === "CHECK"
            ? "<<CHECK>>"
            : rr.cells[3] === ""
            ? "<<UNCHECK>>"
            : rr.cells[3],
      })
    })
  })

  return (
    <section
      id="pricing_comparison"
      className="plans-section py-19 relative"
    >
      {/* <div className="out-gradient-wrapper bottom-0 left-16">
        <div className="grad1">
          <div className="grad2">
            <div className="grad3">
              <div className="grad4">
                <div className="grad5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="out-gradient-wrapper top-1/2 right-1/4">
        <div className="grad1">
          <div className="grad2">
            <div className="grad3">
              <div className="grad4">
                <div className="grad5"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <span className="section-border absolute top-0 left-0 w-full block"></span>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-darkScheme-textPrimary font-bold text-3xl-3 md:text-5xl px-4">
          {props.title}
        </h2>

        <div className="hidden lg:block mt-14 lg:px-4 px-6">
          <table className="pricing-table relative sm:w-full table-fixed font-custom text-grayColor-custom">
            <thead>
              <tr>
                <th
                  className={`${
                    sticky ? "sticky" : ""
                  } z-10 sticky-pricing-banner triggers`}
                >
                  {""}
                </th>

                {props.pricing_columns.map((col, i) => {
                  return (
                    <th
                      key={col._key}
                      className={`${
                        sticky ? "sticky" : ""
                      } z-10 sticky-pricing-banner triggers`}
                    >
                      <div className="ellipse flex items-center justify-center h-20">
                        <Image props={col.image.asset._ref} />
                      </div>
                      <div className={`text-darkScheme-textPrimary text-3xl-3`}>
                        {col.title}
                        <br />
                        <span className="text-lg text-grayColor-lighter">
                          {col.subtitle}
                        </span>
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody className="triggers">
              {pricingComparisionData.map((group, idx) => {
                return (
                  <React.Fragment key={group.group}>
                    {idx !== 0 && (
                      <tr key={`${group.group}-x`}>
                        <td className="p-2 text-primary text-lg text-left uppercase font-bold col-span-4">
                          &nbsp;
                        </td>
                      </tr>
                    )}
                    <tr key={group.group}>
                      <td className="p-4 text-darkScheme-btnSecondaryBg text-2xl text-left uppercase font-bold" colSpan={"2"}>
                        {group.group}
                      </td>
                    </tr>
                    {group.nodes.map((row, l_index) => {
                      //   console.log(row, "sssw")
                      return (
                        <tr
                          key={row.title}
                          className={`${
                            l_index % 2 === 0
                              ? "grad-bg rounded-2xl"
                              : "bg-transparent"
                          }`}
                        >
                          <td className="p-4 text-lg text-left w-2/4 rounded-tl-2xl rounded-bl-2xl text-darkScheme-textPrimary opacity-50">
                            {row.title}
                          </td>

                          <td className="text-base py-4 px-12 w-1/4">
                            {row.free_val === "<<CHECK>>" && (
                              <span className={`check-icon check-comparison`} />
                            )}
                            {row.free_val === "<<UNCHECK>>" && (
                              <span className={`line-image`} />
                            )}
                            {row.free_val !== "<<UNCHECK>>" &&
                              row.free_val !== "<<CHECK>>" && (
                                <span className="font-normal text-darkScheme-textPrimary">
                                  {row.free_val}
                                </span>
                              )}
                          </td>

                          <td className="text-base py-4 px-12 w-1/4">
                            {row.pro_val === "<<CHECK>>" && (
                              <span className={`check-icon check-comparison`} />
                            )}
                            {row.pro_val === "<<UNCHECK>>" && (
                              <span className={`line-image`} />
                            )}
                            {row.pro_val !== "<<UNCHECK>>" &&
                              row.pro_val !== "<<CHECK>>" && (
                                <span className="font-normal text-darkScheme-textPrimary">
                                  {row.pro_val}
                                </span>
                              )}
                          </td>

                          <td className="text-base py-4 px-12 w-1/4 rounded-br-2xl rounded-tr-2xl">
                            {row.enterprice_val === "<<CHECK>>" && (
                              <span className={`check-icon check-comparison`} />
                            )}
                            {row.enterprice_val === "<<UNCHECK>>" && (
                              <span className={`line-image`} />
                            )}
                            {row.enterprice_val !== "<<UNCHECK>>" &&
                              row.enterprice_val !== "<<CHECK>>" &&
                              row.enterprice_val !== "TALKTOSALES" && (
                                <span className="font-normal text-darkScheme-textPrimary">
                                  {row.enterprice_val}
                                </span>
                              )}

                            {row.enterprice_val === "TALKTOSALES" && (
                              <Link
                                to="/enterprise-quote"
                                className="text-sm  leading-sm font-bold py-2 px-7 border border-darkScheme-textPrimary rounded-2xl text-darkScheme-textPrimary hover:text-darkScheme-textBlack hover:bg-darkScheme-textPrimary mx-auto"
                                target="_blank"
                                rel="noreferrer"
                                onClick={e =>
                                  rudderslabTrackOnClick("link", group.group, e)
                                }
                              >
                                Talk to sales
                              </Link>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </React.Fragment>
                )
              })}
            </tbody>
          </table>
          <div className="mt-20">
            <div className="inline-block mr-4">
              <a
                className={
                  "bg-transparent border border-darkScheme-textPrimary hover:bg-darkScheme-textPrimary hover:text-darkScheme-textBlack flex items-center justify-center mx-auto rounded-lg font-bold text-darkScheme-textPrimary w-40 py-2"
                }
                href={"https://app.rudderstack.com/signup?type=freetrial"}
              >
                Sign Up for Free
              </a>
            </div>
            <div className="inline-block">
              <Link
                className={
                  "bg-transparent border border-darkScheme-textPrimary hover:bg-darkScheme-textPrimary hover:text-darkScheme-textBlack flex items-center justify-center mx-auto rounded-lg font-bold text-darkScheme-textPrimary w-40 py-2"
                }
                to={"/request-demo"}
              >
                Get a Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="mobile-table font-custom">
          <div className="freeplan mt-11 sticky sticky-pricing-banner flex">
          {props.pricing_columns.map((oo, colIndex) => {
            // console.log(oo)
            return (
                <div className="pricing-wrapper w-1/3" key={oo._key}>
                  <div className="plan-header">
                    <div className="p-6 md:pt-8 md:pb-4">
                      <div className="ellipse flex items-center justify-center h-24">
                        <Image props={oo.image.asset._ref} />
                      </div>
                      <h3 className="font-medium leading-tight text-darkScheme-textPrimary text-base">
                        {oo.title}
                      </h3>
                      <div className="text-grayColor-lighter leading-6 text-sm py-2">
                        {oo.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              )
          })}
          </div>
          <div className="plan-features">
            {pricingComparisionData.map((item,key) => {
              return(
                <div className="pricing-block" key={item.group}>
                  <div className="group-name text-darkScheme-btnSecondaryBg text-lg uppercase font-bold my-10">{item.group}</div>
                  {item.nodes.map((i,k) => {
                    return (
                      <div className={`pricing-row py-4 pb-2 px-2 ${k % 2 === 0 ? 'grad-bg' : ''}`}>
                        <div className="text-darkScheme-textPrimary">{i.title}</div>
                        <div className="pricing-values flex">
                          <div className="w-1/3 self-center h-14 flex items-center justify-center">
                            {i.free_val === "<<CHECK>>" ? <span className={`check-icon check-comparison`} /> : <span className={`line-image`} />}
                          </div>
                          <div className="w-1/3 self-center h-14 flex items-center justify-center">
                            {i.pro_val === "<<CHECK>>" ? <span className={`check-icon check-comparison`} /> : <span className={`line-image`} />}
                          </div>
                          <div className="w-1/3 self-center h-14 flex items-center justify-center">
                            {i.enterprice_val === "TALKTOSALES" ?
                              (
                                <Link
                                  to="/enterprise-quote"
                                  className="text-sm font-bold text-darkScheme-btnSecondaryBg mx-auto"
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={e =>
                                    rudderslabTrackOnClick("link", item.group, e)
                                  }
                                >
                                  Talk to sales
                                </Link>
                              ) : i.enterprice_val === "<<CHECK>>" ? <span className={`check-icon check-comparison`} /> : <span className={`line-image`} />
                            }
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
            <div className="mt-20">
              <div className="inline-block mr-4">
                <a
                  className={
                    "bg-transparent border border-darkScheme-textPrimary hover:bg-darkScheme-textPrimary hover:text-darkScheme-textBlack flex items-center justify-center mx-auto rounded-lg font-bold text-darkScheme-textPrimary w-40 py-2"
                  }
                  href={"https://app.rudderstack.com/signup?type=freetrial"}
                >
                  Sign Up for Free
                </a>
              </div>
              <div className="inline-block">
                <Link
                  className={
                    "bg-transparent border border-darkScheme-textPrimary hover:bg-darkScheme-textPrimary hover:text-darkScheme-textBlack flex items-center justify-center mx-auto rounded-lg font-bold text-darkScheme-textPrimary w-40 py-2"
                  }
                  to={"/request-demo"}
                >
                  Get a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingComparisonComponentV2
