import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"

const LeftRightImgCnt = props => {
  const maintitle = props.leftrightcontentmaintitle
  const smalltitle = props.leftrightcontentsmalltitle
  const contents = props.leftrightimageblock
  return (
    <>
      <section className="bg-backgroundsecondary 100% left-right-section md:px-0 pb-6 md:pd-0">
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex flex-col w-full justify-center items-start md:text-left max-w-screen-md">
            <p className="mt-20 mb-2 text-blue text-sm uppercase">{smalltitle}</p>
            <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">
              {maintitle}
            </h3>
          </div>
          {contents.map((content, i) =>
            (() => {
              if (content.condition === "right") {
                const imgcondition = content.imageVideoConditionBlock.condition
                const portabletext = content.content
                const smalltitle = content.smalltitle
                const section_id = content.section_id
                const title = content.title
                const extralink = content.addlink.cmnexternallink
                const linktext = content.addlink.cmnlinktext
                const linkurl = content.addlink.cmnlink
                return (
                  <div
                    key={i}
                    id={section_id ? section_id : ""}
                    className="flex items-center flex-wrap flex-col-reverse sm:flex-row mt-6 md:mt-16"
                  >
                    <div className="w-full sm:w-1/2 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
                      {(() => {
                        if (imgcondition === "imageoption") {
                          const imgref =
                            content.imageVideoConditionBlock.imageoption.asset
                              ._ref
                          return <Image props={imgref} classes="w-full" />
                        }
                        return null
                      })()}
                    </div>
                    <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0">
                      <div className="align-middle md:pl-16">
                        <p className="mt-4 sm:mt-0 text-sm text-blue uppercase">
                          {smalltitle}
                        </p>
                        <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-primary font-bold leading-tight">
                          {title}
                        </h3>
                        <div className="text-secondary leading-7 text-sm sm:text-lg">
                          <PortableText blocks={portabletext} />
                        </div>
                        <div className="mt-4 flex items-center">
                          {(() => {
                            if (extralink === true) {
                              return (
                                <a
                                  href={linkurl}
                                  className="font-bold leading-normal text-sm lr-icon hover:text-blueNew-custom"
                                >
                                  {linktext}
                                </a>
                              )
                            } else {
                              return (
                                <span className="font-bold leading-normal text-sm lr-icon">
                                  <Link to={linkurl}>{linktext}</Link>
                                </span>
                              )
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else {
                const imgcondition = content.imageVideoConditionBlock.condition
                const portabletext = content.content
                const smalltitle = content.smalltitle
                const title = content.title
                const section_id = content.section_id
                const extralink = content.addlink.cmnexternallink
                const linktext = content.addlink.cmnlinktext
                const linkurl = content.addlink.cmnlink
                return (
                  <div
                    key={i}
                    id={section_id ? section_id : ""}
                    className="flex items-center flex-wrap mt-6"
                  >
                    <div className="sm:w-1/2 sm:p-6 sm:pl-0 md:pr-20">
                      <p className="mt-4 sm:mt-0 text-blue text-sm uppercase">
                        {smalltitle}
                      </p>
                      <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-primary font-bold leading-tight">
                        {title}
                      </h3>
                      <div className="text-secondary leading-7 text-sm sm:text-lg">
                        <PortableText blocks={portabletext} />
                      </div>
                      <div className="mt-4 flex items-center">
                        {(() => {
                          if (extralink === true) {
                            return (
                              <a
                                href={linkurl}
                                className="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block hover:text-blueNew-custom"
                              >
                                {linktext}
                              </a>
                            )
                          } else {
                            return (
                              <span className="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block hover:text-blueNew-custom">
                                <Link to={linkurl}>{linktext}</Link>
                              </span>
                            )
                          }
                        })()}
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0">
                      {(() => {
                        if (imgcondition === "imageoption") {
                          const imgref =
                            content.imageVideoConditionBlock.imageoption.asset
                              ._ref
                          return <Image props={imgref} classes="w-full" />
                        }
                        return null
                      })()}
                    </div>
                  </div>
                )
              }
            })()
          )}
        </div>
      </section>
    </>
  )
}
export default LeftRightImgCnt