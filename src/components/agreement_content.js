import React from "react"
import PortableText from "./portableText"
import AgreementAccordianCard from "./agreement_accordian_card"

const AgreementContent = props => {
  // console.log("AgreementContent", props)
  return (
    <div className={`max-w-screen-${props.max_width} mx-auto px-4`}>
      {props.agreement_items.map((row, idx) => {
        return (
          <div
            key={row._key}
            className={`${
              row.show_divider
                ? "border-b border-dotted border-grayColor-lightBorder py-6"
                : ""
            }`}
          >
            {row.section_title && row.section_title !== "" && idx === 0 ? (
              <h1 className="font-bold" id={row._key}>
                {row.section_title}
              </h1>
            ) : (
              <h2 className="font-bold" id={row._key}>
                {row.section_title}
              </h2>
            )}
            {row.section_content && (
              <div className="leading-7 text-sm ppContent">
                <PortableText
                  blocks={row.section_content}
                  trackSectionHeader={row.section_title}
                />
              </div>
            )}
            {row.accordian_content && (
              <div>
                {row.accordian_content.map(accGroup => {
                  return (
                    <div
                      key={accGroup._key}
                      className="flex flex-row flex-wrap justify-between"
                    >
                      {accGroup.accordian_items.map(acc => {
                        return (
                          <AgreementAccordianCard
                            key={acc._key}
                            {...acc}
                            width={accGroup.accordian_width}
                          />
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default AgreementContent
