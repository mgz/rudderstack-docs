import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Image from "./image"
import Link from "gatsby-link"

const PricingComparisonComponent = props => {
  const [sticky, setSticky] = useState(true)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (
      document.getElementsByClassName("pricing-table")[0].offsetHeight -
        document
          .getElementsByClassName("pricing-table")[0]
          .getBoundingClientRect().top +
        document.getElementsByClassName("pricing-table")[0].offsetTop -
        window.scrollY >
      150
    ) {
      setSticky(true)
    } else {
      setSticky(false)
    }
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
      className="bg-white plans-section pb-20 md:pb-20 relative"
    >
      <div className="max-w-6xl px-6 sm:px-3 mx-auto flex-wrap items-center pt-20 md:pb-20 text-center">
        <h2 className="sm:my-4 text-4xl sm:text-5xl font-bold font-custom sm:mb-8">
          {props.title}
        </h2>

        <div className="hidden sm:block w-auto max-w-screen-lg m-auto">
          <table className="pricing-table relative sm:w-full table-fixed font-custom bg-white text-grayColor-custom">
            <thead>
              <tr>
                <th
                  className={`${sticky ? "sticky" : ""} top-0 bg-white z-10`}
                ></th>

                {props.pricing_columns.map(col => {
                  return (
                    <th
                      key={col._key}
                      className={`${
                        sticky ? "sticky" : ""
                      } top-0 bg-white z-10`}
                    >
                      <div className="ellipse flex items-center justify-center h-20">
                        <Image props={col.image.asset._ref} />
                      </div>
                      <div className="text-primary">
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
                      <td className="p-4 text-primary text-lg text-left uppercase font-bold col-span-3">
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
                              ? "bg-grayColor-BgGray"
                              : "bg-whiteColor-custom"
                          }`}
                        >
                          <td className="p-4 text-base font-medium text-left w-2/4">
                            {row.title}
                          </td>

                          <td className="text-base py-4 px-12 w-1/4">
                            {row.free_val === "<<CHECK>>" && (
                              <span className={`check-icon`} />
                            )}
                            {row.free_val === "<<UNCHECK>>" && (
                              <StaticImage
                                src="../images/Line 2.svg"
                                alt="Line"
                              />
                            )}
                            {row.free_val !== "<<UNCHECK>>" &&
                              row.free_val !== "<<CHECK>>" && (
                                <span className="font-normal">
                                  {row.free_val}
                                </span>
                              )}
                          </td>

                          <td className="text-base py-4 px-12 w-1/4">
                            {row.pro_val === "<<CHECK>>" && (
                              <span className={`check-icon`} />
                            )}
                            {row.pro_val === "<<UNCHECK>>" && (
                              <StaticImage
                                src="../images/Line 2.svg"
                                alt="Line"
                              />
                            )}
                            {row.pro_val !== "<<UNCHECK>>" &&
                              row.pro_val !== "<<CHECK>>" && (
                                <span className="font-normal">
                                  {row.pro_val}
                                </span>
                              )}
                          </td>

                          <td className="text-base py-4 px-12 w-1/4">
                            {row.enterprice_val === "<<CHECK>>" && (
                              <span className={`check-icon`} />
                            )}
                            {row.enterprice_val === "<<UNCHECK>>" && (
                              <StaticImage
                                src="../images/Line 2.svg"
                                alt="Line"
                              />
                            )}
                            {row.enterprice_val !== "<<UNCHECK>>" &&
                              row.enterprice_val !== "<<CHECK>>" &&
                              row.enterprice_val !== "TALKTOSALES" && (
                                <span className="font-normal ">
                                  {row.enterprice_val}
                                </span>
                              )}

                            {row.enterprice_val === "TALKTOSALES" && (
                              <Link
                                to="/enterprise-quote"
                                className="text-sm  leading-sm font-bold mt-3 lr-icon mx-auto"
                                target="_blank"
                                rel="noreferrer"
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
                <div className="plan-header bg-white border border-grayColor-priceCardBorder rounded-2xl shadow-md sticky top-0 z-10">
                  <div class="p-6 md:pt-8 md:pb-4">
                    <div className="ellipse flex items-center justify-center h-20">
                      <Image props={oo.image.asset._ref} />
                    </div>
                    <h3 class="font-medium leading-tight font-bold text-4xl text-blueNew-midnight">
                      {oo.title}
                    </h3>
                    <div class="text-grayColor-lighter text-sm leading-6 text-sm py-2">
                      {oo.subtitle}
                    </div>
                    {(() => {
                      if (oo.mobile_button.btnexternallink === true) {
                        return (
                          <a
                            className={
                              (oo.mobile_button.btnhiglight === true
                                ? "btn-primary-sm"
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
                                  ? "btn-primary-sm"
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
                        <div className="text-blueNew-midnight text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">
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
                                  : "block"
                              } text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-4`}
                            >
                              {/* {(l_compare_value === "<<CHECK>>" || l_compare_value !== "<<UNCHECK>>") && ( */}
                              <span className={`check-icon`} />
                              {/* )} */}
                              <div className="flex flex-col pl-4">
                                {row.title}
                                <span>
                                  {l_compare_value !== "<<UNCHECK>>" &&
                                    l_compare_value !== "<<CHECK>>" &&
                                    l_compare_value !== "TALKTOSALES" && (
                                      <span className="font-normal">
                                        {l_compare_value}
                                      </span>
                                    )}
                                </span>
                                {l_compare_value === "TALKTOSALES" && (
                                  <Link
                                    to="/enterprise-quote"
                                    className="text-sm  leading-sm font-bold mt-3 lr-icon "
                                    target="_blank"
                                    rel="noreferrer"
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
