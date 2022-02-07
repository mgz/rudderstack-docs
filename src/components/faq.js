import React, { useEffect, useState } from "react"
import Accordion from "./accordion"
import { Helmet } from "react-helmet"
const Faq = ({ title, subTitle, isBlockContent, accordions = [] }) => {
  const [ldJson, setLdJsoin] = useState("")

  useEffect(() => {
    function arrangeData() {
      let faqArr = []

      accordions.forEach(row => {
        let l_question = row.title
        let l_answer = ""
        if (isBlockContent === true) {
          row.content[0].children.forEach(ee => {
            if (ee.marks.length > 0) {
              let linkInfo = row.content[0].markDefs.find(
                ll => ll._key === ee.marks[0]
              )
              if (linkInfo && linkInfo._type === "link") {
                l_answer += `<a href="${linkInfo.href}" class="text-purpleNew-custom underline hover:text-blueNew-midnight">${ee.text}</a>`
              } else {
                l_answer += ee.text
              }
            } else {
              l_answer += ee.text
            }
          })
        } else {
          l_answer = row.content
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

      if (faqArr.length > 0) {
        setLdJsoin({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqArr,
        })
      }
    }

    arrangeData()
  }, [accordions, isBlockContent]);

  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let checkDarkMode = document.getElementById('main-container');
    if(checkDarkMode.classList.contains('hero-section')){
      setDarkMode(true);
    }else{
      setDarkMode(false);
    }
  }, [])

  return (
    <div className="px-4 mx-auto">
      {/* <Helmet>
        {ldJson !== "" && (
          <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
        )}
      </Helmet>*/ }
      <div className="max-w-screen-lg mx-auto flex flex-wrap triggers">
        <div className="md:pr-15">
          <h2 className={`text-5xl font-bold ${darkMode ? 'text-darkScheme-textPrimary' : 'text-darkScheme-textBlack'}`}>{title}</h2>
          <h4 className={`text-2xl-2 font-bold pt-2 mb-12 md:mb-0 ${darkMode ? 'text-darkScheme-textPrimary' : 'text-darkScheme-textBlack'}`}>
            {subTitle}
          </h4>
        </div>
        <div className="mt-2 faq-accBox">
          {accordions.map((accordion, key) => (
            <Accordion
              title={accordion.title}
              content={accordion.content}
              key={key}
              isBlockContent={isBlockContent}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
