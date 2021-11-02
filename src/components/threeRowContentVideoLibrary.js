import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
import { rudderslabTrackOnClick } from "../utils/common"

library.add(faClock)
const ThreeRowContentVideoLibrary = ({ hits }) => {
  return (
    <div className="mt-4">
      {/* <h2 className="text-2xl font-bold mb-2">Lorem ipsum dolor sit amet</h2> */}
      <div className="mt-7 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-4 md:mb-20">
        {hits.map((hit, index) => {
          return (
            <section key={index} className="flex">
              <div className="w-full relative overflow-hidden rounded-3xl flex shadow-md bg-white">
                <div className="w-full flex-col">
                  <div className="relative sm:block h-52">
                    <Link to={hit.slug}>
                      <img
                        src={hit.logoimage}
                        alt={hit.title}
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                    </Link>
                  </div>
                  <div className="md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-6 cursor-pointer">
                    <Link to={hit.slug}>
                      <div className="flex-initial uppercase text-sm text-indigo-700 font-bold text-blueNew-eastbay">
                        {`${hit.category} ${
                          hit.category === "Live"
                            ? "| " + hit.url_or_event_dttm
                            : ""
                        }`}
                      </div>

                      <h2 className="flex-auto mt-2 text-lg md:text-xl-2 font-bold mb-6 text-blueNew-midnight min-h-0">
                        {hit.title}
                      </h2>
                    </Link>
                    <Link className="w-full"
                    to={hit.slug}
                    onClick={e => rudderslabTrackOnClick("link", hit.title, e)}
                  >
                    <div className="z-20 mt-4 w-full text-sm flex justify-between items-center">
                      <div>
                        <p className="relative text-black font-bold text-sm leading-normal hover:text-blueNew-eastbay">
                          <a
                            className="lr-icon"
                            href={hit.slug}
                            onClick={e =>
                              rudderslabTrackOnClick("link", hit.title, e)
                            }
                          >
                            {hit.category === "Live"
                              ? "Register Now"
                              : "Watch Now"}
                          </a>
                        </p>
                      </div>

                      <div className="text-base text-grayColor-lighter-2x flex flex-row">
                        <FontAwesomeIcon
                          className="mr-2 m-auto"
                          icon={faClock}
                        />
                        {/* <p>{hit.duration}</p> */}
                      </div>
                    </div>
                  </Link>
               
                  </div>
                  </div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default ThreeRowContentVideoLibrary
