import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import SegmentSpecialistV2 from "./SegmentSpecialistV2"
import Image from "./image"

const SegmentComparisonComponent = props => {
  const [sticky, setSticky] = useState(true)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    // if (
    //   document.getElementsByClassName("comparision-table")[0].offsetHeight -
    //     document
    //       .getElementsByClassName("comparision-table")[0]
    //       .getBoundingClientRect().top +
    //     document.getElementsByClassName("comparision-table")[0].offsetTop -
    //     window.scrollY >
    //   150

    //   // document.getElementsByClassName("cover-table")[0].offsetHeight +
    //   //   document.getElementsByClassName("cover-table")[0].offsetTop -
    //   //   window.scrollY >
    //   // 150
    // ) {
    //   setSticky(true)
    // } else {
    //   setSticky(false)
    // }
    // console.log(
    //   "on scroll",
    //   document.getElementsByClassName("comparision-table")[0].offsetHeight,
    //   document
    //     .getElementsByClassName("comparision-table")[0]
    //     .getBoundingClientRect().top,

    //   window.scrollY,
    //   document.getElementsByClassName("comparision-table")[0].offsetHeight -
    //     document
    //       .getElementsByClassName("comparision-table")[0]
    //       .getBoundingClientRect().top +
    //     document.getElementsByClassName("comparision-table")[0].offsetTop -
    //     window.scrollY
    // )

    if (
      window.scrollY >
      window.scrollY +
        document
          .getElementsByClassName("comparision-table")[0]
          .getBoundingClientRect().top
    ) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  let segmentComparisionData = []
  props.group_items.group_items.forEach(row => {
    segmentComparisionData.push({
      group: row.group_name,
      nodes: [],
    })

    row.table_data.rows.forEach(rr => {
      segmentComparisionData[segmentComparisionData.length - 1].nodes.push({
        title: rr.cells[0],
        rudderstack_val:
          rr.cells[1] === "CHECK"
            ? "<<CHECK>>"
            : ""
            ? "<<UNCHECK>>"
            : rr.cells[1],
        segment_val:
          rr.cells[2] === "CHECK"
            ? "<<CHECK>>"
            : ""
            ? "<<UNCHECK>>"
            : rr.cells[2],
      })
    })
  })
  return (
    <section
      id="segment_comparison"
      className="bg-white plans-section pb-20 md:pb-20 relative"
    >
      <SegmentSpecialistV2 {...props.divider_card} />
      <div className="max-w-6xl px-6 sm:px-3 mx-auto flex-wrap items-center pt-56 md:pt-48 text-center">
        <h2 className="sm:my-4 text-4xl sm:text-5xl font-bold font-custom sm:mb-8 text-blueNew-midnight">
          {props.title}
        </h2>

        <div className="hidden sm:block w-auto max-w-screen-lg m-auto">
          <table className="comparision-table relative sm:w-full table-fixed font-custom bg-white text-grayColor-custom">
            <thead>
              <tr>
                <th
                  className={`${sticky ? "sticky" : ""} top-0 bg-white z-10`}
                ></th>
                <th className={`${sticky ? "sticky" : ""} top-0 bg-white z-10`}>
                  <div className="flex items-center justify-center px-12 py-6">
                    <StaticImage
                      src="../images/rudderstack-logo.svg"
                      alt="Rudderstack Logo"
                      height={40}
                      width={200}
                    />
                  </div>
                </th>
                <th className={`${sticky ? "sticky" : ""} top-0 bg-white z-10`}>
                  <div className="flex items-center justify-center px-12 py-6">
                    <Image
                      props={props.comparision_logo.asset._ref}
                      classes="w-48 h-14 object-cover object-center inline-block"
                    />

                    {/* <StaticImage
                      src="../images/segment-logo.png"
                      alt="SegmentLogo"
                      height={50}
                      width={200}
                    /> */}

                    {/* <img src={SegmentLogo} alt="Segment Logo" /> */}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {segmentComparisionData.map((group, idx) => {
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
                            {row.rudderstack_val === "<<CHECK>>" && (
                              <span className={`check-icon`} />
                            )}
                            {row.rudderstack_val === "<<UNCHECK>>" && (
                              <StaticImage
                                src="../images/Line 2.svg"
                                alt="Line"
                              />
                            )}
                            {row.rudderstack_val !== "<<UNCHECK>>" &&
                              row.rudderstack_val !== "<<CHECK>>" && (
                                <span className="font-normal">
                                  {row.rudderstack_val}
                                </span>
                              )}
                          </td>
                          <td className="text-base py-4 px-12 w-1/4">
                            {row.segment_val === "<<CHECK>>" && (
                              <span className={`check-icon`} />
                            )}
                            {row.segment_val === "<<UNCHECK>>" && (
                              <StaticImage
                                src="../images/Line 2.svg"
                                alt="Line"
                              />
                            )}
                            {row.segment_val !== "<<UNCHECK>>" &&
                              row.segment_val !== "<<CHECK>>" && (
                                <span className="font-normal ">
                                  {row.segment_val}
                                </span>
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
          {["rudderstack_val", "segment_val"].map(oo => {
            // console.log(oo)
            return (
              <div className="freeplan mt-16" key={oo}>
                <div className="plan-header bg-white border border-grayColor-priceCardBorder rounded-2xl shadow-md sticky top-0 z-10">
                  <div class="p-6 md:pt-8 md:pb-4">
                    <div className="ellipse flex items-center justify-center h-20">
                      {oo === "rudderstack_val" ? (
                        <StaticImage
                          placeholder="tracedSVG"
                          src="../images/rudderstack-logo.svg"
                          alt={oo}
                          height={40}
                          width={200}
                        />
                      ) : (
                        <Image
                          props={props.comparision_logo.asset._ref}
                          classes="w-48 h-14 object-cover object-center inline-block"
                        />
                        // <StaticImage
                        //   placeholder="tracedSVG"
                        //   src="../images/segment-logo.png"
                        //   alt={oo}
                        //   height={50}
                        //   width={200}
                        // />
                      )}
                    </div>
                  </div>
                </div>

                <div className="plan-features mt-6 px-3">
                  {segmentComparisionData.map((group, idx) => {
                    return (
                      <React.Fragment key={group.group}>
                        <div className="text-blueNew-midnight text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">
                          {group.group}
                        </div>
                        {group.nodes.map((row, l_index) => {
                          return (
                            <div
                              key={row.title}
                              className={`${
                                row[oo] === "<<UNCHECK>>" ? "hidden" : "block"
                              } text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-4`}
                            >
                              {/* {(row[oo] === "<<CHECK>>" || row[oo] !== "<<UNCHECK>>") && ( */}
                              <span className={`check-icon`} />
                              {/* )} */}
                              <div className="flex flex-col pl-4">
                                {row.title}
                                <span>
                                  {row[oo] !== "<<UNCHECK>>" &&
                                    row[oo] !== "<<CHECK>>" && (
                                      <span className="font-normal">
                                        {row[oo]}
                                      </span>
                                    )}
                                </span>
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

export default SegmentComparisonComponent
