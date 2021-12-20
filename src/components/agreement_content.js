import React, {useEffect} from "react"
import PortableText from "./portableText"
import AgreementAccordianCard from "./agreement_accordian_card"

const AgreementContent = props => {

  useEffect(() => {
    let tempAnchors = []
    document.querySelectorAll("main a").forEach(anc => {
      if (anc.getAttribute("href") && anc.getAttribute("href").includes("#"))
        tempAnchors.push(anc)
    })

    tempAnchors.forEach(a => {
      a.addEventListener("click", function (e) {
        e.preventDefault()
        let href = this.getAttribute("href")
        href = href.substring(href.indexOf("#") + 1, href.length)
        let elem =
          document.getElementById(href) ||
          document.querySelector(
            "a[name=" + href.substring(1, href.length) + "]"
          )
        //gets Element with an id of the link's href
        //or an anchor tag with a name attribute of the href of the link without the #
        window.scroll({
          top: elem.offsetTop - 92,
          left: 0,
          behavior: "smooth",
        })
      }, {passive: true})
    })
  })

  // console.log("AgreementContent", props)
  return (
    <div className={`max-w-screen-${props.max_width} mx-auto px-4 agreementContent`}>
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
