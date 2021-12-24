import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Image from "./image"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"


const PricingComparisonComponent = props => {
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
      <span className="section-border absolute top-0 left-0 w-full block"></span>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-darkScheme-textPrimary font-bold text-5xl">
          {props.title}
        </h2>

        <div className="hidden lg:block my-14 px-4">
          <table className="pricing-table relative sm:w-full table-fixed font-custom text-grayColor-custom">
            <thead>
              <tr>
                <th
                  className={`${
                    sticky ? "sticky" : ""
                  } z-10 sticky-pricing-banner`}
                >
                  {""}
                </th>

                {props.pricing_columns.map((col, i) => {
                  return (
                    <th
                      key={col._key}
                      className={`${
                        sticky ? "sticky" : ""
                      } z-10 sticky-pricing-banner`}
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
            <tbody>
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
        </div>

        <div className="mobile-table font-custom">
          {props.pricing_columns.map((oo, colIndex) => {
            // console.log(oo)
            return (
              <div className="freeplan mt-16" key={oo._key}>
                <div className="plan-header hero-section sticky z-10">
                  <div className="p-6 md:pt-8 md:pb-4">
                    <div className="ellipse flex items-center justify-center h-20">
                      <Image props={oo.image.asset._ref} />
                    </div>
                    <h3 className="font-medium leading-tight text-4xl text-darkScheme-textPrimary">
                      {oo.title}
                    </h3>
                    <div className="text-grayColor-lighter leading-6 text-sm py-2">
                      {oo.subtitle}
                    </div>
                    {(() => {
                      if (oo.mobile_button.btnexternallink === true) {
                        return (
                          <a
                            className={
                              (oo.mobile_button.btnhiglight === true
                                ? "btn-primary-sm bg-darkScheme-btnPrimaryBg text-darkScheme-textBlack hover:text-darkScheme-btnPrimaryBg hover:bg-transparent"
                                : "btn-secondary-sm") +
                              ` inline-block font-bold leading-6`
                            }
                            href={oo.mobile_button.btnlink}
                          >
                            {oo.mobile_button.btntext}
                          </a>
                        )
                      } else {
                        return (
                          <Link to={oo.mobile_button.btnlink}>
                            <span
                              className={
                                (oo.mobile_button.btnhiglight === true
                                  ? "btn-primary-sm bg-darkScheme-btnPrimaryBg text-darkScheme-textBlack hover:text-darkScheme-btnPrimaryBg hover:bg-transparent"
                                  : "btn-secondary-sm") +
                                ` inline-block font-bold leading-6`
                              }
                            >
                              {oo.mobile_button.btntext}
                            </span>
                          </Link>
                        )
                      }
                    })()}
                  </div>
                </div>

                <div className="plan-features mt-6 px-3 mb-20">
                  {pricingComparisionData.map((group, idx) => {
                    return (
                      <React.Fragment key={group.group}>
                        <div className="text-darkScheme-btnSecondaryBg text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">
                          {group.group}
                        </div>
                        {group.nodes.map((row, l_index) => {
                          let l_compare_value =
                            colIndex === 0
                              ? row["free_val"]
                              : colIndex === 1
                              ? row["pro_val"]
                              : colIndex === 2
                              ? row["enterprice_val"]
                              : ""
                          //   console.log("compare", l_compare_value)

                          return (
                            <div
                              key={row.title}
                              className={`${
                                l_compare_value === "<<UNCHECK>>"
                                  ? "hidden"
                                  : "flex"
                              } text-lg text-left font-medium text-darkScheme-textPrimary leading-7 py-3 pr-4`}
                            >
                              {/* {(l_compare_value === "<<CHECK>>" || l_compare_value !== "<<UNCHECK>>") && ( */}
                              <span className={`check-icon check-comparison`} />
                              {/* )} */}
                              <div className="flex flex-col pl-4">
                                {row.title}
                                <span>
                                  {l_compare_value !== "<<UNCHECK>>" &&
                                    l_compare_value !== "<<CHECK>>" &&
                                    l_compare_value !== "TALKTOSALES" && (
                                      <span className="font-normal text-darkScheme-textPrimary">
                                        {l_compare_value}
                                      </span>
                                    )}
                                </span>
                                {l_compare_value === "TALKTOSALES" && (
                                  <Link
                                    to="/enterprise-quote"
                                    className="text-sm  leading-sm font-bold mt-3 py-3 px-7 border border-darkScheme-textPrimary rounded-2xl text-darkScheme-textPrimary hover:text-darkScheme-textBlack hover:bg-darkScheme-textPrimary"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={e =>
                                      rudderslabTrackOnClick(
                                        "link",
                                        group.group,
                                        e
                                      )
                                    }
                                  >
                                    Talk to sales
                                  </Link>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingComparisonComponent
