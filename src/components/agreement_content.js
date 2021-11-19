import React from "react"
import PortableText from "./portableText"
import AgreementAccordianCard from "./agreement_accordian_card"

const AgreementContent = props => {
  console.log("AgreementContent", props)
  return (
    <div className={`max-w-screen-${props.max_width} mx-auto`}>
      {props.agreement_items.map(row => {
        return (
          <div
            key={row._key}
            className={`${
              row.show_divider
                ? "border-b border-dotted border-grayColor-lightBorder py-6"
                : ""
            }`}
          >
            {row.section_title && <div className="font-bold">{row.section_title}</div>}
            {row.section_content && (
              <div className="leading-7 text-sm ">
                <PortableText blocks={row.section_content} />
              </div>
            )}
            {row.accordian_content && (
              <div>
                {row.accordian_content.map(accGroup => {
                  return (
                    <div
                      key={accGroup._key}
                      className="flex flex-row flex-wrap"
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
