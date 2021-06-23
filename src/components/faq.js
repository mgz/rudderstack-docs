import React, { useEffect, useState } from "react"
import Accordion from "./accordion"
import { Helmet } from "react-helmet"
const Faq = ({ title, subTitle, isBlockContent, accordions = [] }) => {
  const [ldJson, setLdJsoin] = useState()

  useEffect(() => {
    let faqArr = []
    accordions.forEach(row => {
      let l_question = row.title
      let l_answer = ""
      if (isBlockContent === true) {
        row.content[0].children.forEach(ee => (l_answer += ee.text))
      } else {
        l_answer = row.content
        // var divContainer = document.createElement("div")
        // divContainer.innerHTML = row.content
        // l_answer = divContainer.textContent || divContainer.innerText || ""
        // console.log("content", row.content)
        // console.log("text", l_answer)
      }
      faqArr.push({
        "@type": "Question",
        name: l_question,
        acceptedAnswer: {
          "@type": "Answer",
          text: l_answer,
        },
      })
    })
    setLdJsoin({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqArr,
    })
  }, [])
  return (
    <div className="px-4 mx-auto">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      </Helmet>
      <div className="max-w-screen-lg mx-auto flex flex-wrap m-auto">
        <div className="w-full md:w-1/4 px-4 md:pl-0 md:pr-10">
          <h2 className="text-5xl font-bold mb-2">{title}</h2>
          <h4 className="text-2xl-2 font-bold pt-2 mb-12 md:mb-0">
            {subTitle}
          </h4>
        </div>
        <div className="w-full md:w-3/4 2xl:pr-44 xl:pr-28 lg:pr-28 mt-2">
          {accordions.map((accordion, key) => (
            <Accordion
              title={accordion.title}
              content={accordion.content}
              key={key}
              isBlockContent={isBlockContent}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
