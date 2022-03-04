import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"

import { useStaticQuery, graphql } from "gatsby"
import MainNavigationMenuLink from "./MainNavigationMenuLink"
import { rudderslabTrackOnClick } from "../utils/common"
import { isMobile, isTablet, isBrowser } from "react-device-detect"
// import Logo from "../images/logo.png"

const MainNavigation = props => {
  const [isExpanded, toggleExpansion] = useState(false)
  const [currMenuIndex, setCurrMenuIndex] = useState(null)
  const [
    isScrollValueMoreThanHeaderHeight,
    setIsScrollValueMoreThanHeaderHeight,
  ] = useState(false)

  const [width, setWidth] = useState()
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
    return () => {
      window.removeEventListener("resize", () => {})
    }
  }, [])

  // useEffect(() => {
  //   console.log("width", width)
  // }, [width])
  const data = useStaticQuery(graphql`
    {
      allSanitySiteSettings {
        edges {
          node {
            headerblock {
              hdrlogo {
                asset {
                  url
                }
              }
              mainnavigation {
                menu_block {
                  menu_item_externallink
                  menu_item_link
                  menu_item_title
                  menu_target_link
                  _rawSubMenuSection
                }
              }
              try_free_btn {
                btnlink
                btntext
                btnexternallink
              }
            }
            sitetitle
          }
        }
      }
    }
  `)
  const mainmenu =
    data.allSanitySiteSettings.edges[0].node.headerblock.mainnavigation
      .menu_block
  const trybtn =
    data.allSanitySiteSettings.edges[0].node.headerblock.try_free_btn

  // scroll effect for fixed header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollValueMoreThanHeaderHeight(window.scrollY >= 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // console.log("props.diableGradient", props.diableGradient)
  return (
    <>
      <div
        className={
          "header-offset " +
          "" +
          (isScrollValueMoreThanHeaderHeight ? "scroll-down" : "scroll-up")
        }
      >
        <nav
          id="nav-header"
          name={"header-container"}
          className={`gradient-${
            props.diableGradient ? "disable" : "enable"
          } fixed top-0 z-40  header-container`}
        >
          <div
            className={`max-w-6xl mx-auto sm:px-4 md:w-full md:px-4 flex items-center justify-between py-2 sm:py-2 lg:pb-0 flex-wrap header-wrapper ${
              isExpanded ? "bg-black-darkBg" : ""
            }`}
          >
            <div className="flex items-center sm:mr-6 w-36 lg:w-40">
              <Link
                to="/"
                className="pl-4 sm:pl-0 pb-0 md:pb-3 main-logo"
                rel="noopener noreferrer"
              >
                {/* <StaticImage
                // src={"../images/rudderstack-logo-v2.svg"}
                src={"../images/rudderstack-logo-white.svg"}
                alt={data.allSanitySiteSettings.edges[0].node.sitetitle}
                placeholder="tracedSVG"
                width={306}
                height={34}
              /> */}
                <svg
                  width="153"
                  height="17"
                  viewBox="0 0 153 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M150.224 0.762183H149.77V0.436279H151.123V0.762183H150.672V1.85095H150.225V0.762183H150.224Z"
                    fill="white"
                  />
                  <path
                    d="M152.563 1.37407C152.563 1.14978 152.568 0.877593 152.577 0.7121H152.573C152.507 0.985743 152.419 1.35084 152.282 1.85095H151.914C151.806 1.38568 151.716 0.995179 151.649 0.709197H151.646C151.654 0.873963 151.67 1.14688 151.67 1.39004V1.85095H151.27V0.436279H151.91C151.999 0.754925 152.086 1.1026 152.125 1.34068H152.128C152.181 1.09026 152.268 0.760006 152.361 0.436279H152.999V1.85095H152.563V1.37407H152.563Z"
                    fill="white"
                  />
                  <path
                    d="M26.0264 4.51516H30.1718V6.83714H30.2954C30.7281 5.11906 31.7186 4.3562 32.9872 4.3562C33.3585 4.3562 33.7299 4.42008 34.0702 4.52315V8.2685C33.6445 8.11753 32.9336 8.04567 32.4923 8.04567C31.2315 8.04567 30.2961 8.96821 30.2961 10.3676V16.7297H26.0264V4.51516Z"
                    fill="white"
                  />
                  <path
                    d="M42.8395 4.51538H47.1092V16.7299H43.0563V14.4079H42.9327C42.4145 15.9663 41.0534 16.8888 39.2822 16.8888C36.7837 16.8888 35.1445 14.9806 35.1367 12.308V4.51538H39.4064V11.3862C39.4142 12.5948 40.0326 13.3264 41.1078 13.3264C42.1674 13.3264 42.848 12.5948 42.8402 11.3862V4.51538H42.8395Z"
                    fill="white"
                  />
                  <path
                    d="M48.5776 10.6226C48.5776 6.20148 50.8671 4.35639 53.2187 4.35639C54.9822 4.35639 56.0962 5.40596 56.56 6.64642H56.6221V0.443359H60.8918V16.7299H56.6532V14.7258H56.5607C56.0658 15.9663 54.9207 16.8888 53.2504 16.8888C50.7118 16.8888 48.5776 14.8528 48.5776 10.6226ZM56.7139 10.6226C56.7139 8.80944 56.0023 7.72793 54.8269 7.72793C53.6514 7.72793 52.9709 8.80944 52.9709 10.6226C52.9709 12.4358 53.6514 13.5173 54.8269 13.5173C56.0023 13.5173 56.7139 12.4038 56.7139 10.6226Z"
                    fill="white"
                  />
                  <path
                    d="M62.2974 10.6226C62.2974 6.20148 64.5868 4.35639 66.9384 4.35639C68.7019 4.35639 69.8159 5.40596 70.2797 6.64642H70.3419V0.443359H74.6116V16.7299H70.3729V14.7258H70.2805C69.7856 15.9663 68.6405 16.8888 66.9702 16.8888C64.4315 16.8888 62.2974 14.8528 62.2974 10.6226ZM70.4336 10.6226C70.4336 8.80944 69.722 7.72793 68.5466 7.72793C67.3712 7.72793 66.6906 8.80944 66.6906 10.6226C66.6906 12.4358 67.3712 13.5173 68.5466 13.5173C69.722 13.5173 70.4336 12.4038 70.4336 10.6226Z"
                    fill="white"
                  />
                  <path
                    d="M75.9551 10.6544C75.9551 6.86907 78.3067 4.3562 81.9883 4.3562C85.5767 4.3562 87.8972 6.73407 87.8972 10.6224V11.64H80.1626V11.8309C80.1626 13.0075 80.9053 13.8669 82.1739 13.8669C83.0479 13.8669 83.7518 13.4772 83.9996 12.7854H87.8979C87.4955 15.3302 85.3762 16.9525 82.0815 16.9525C78.2756 16.9525 75.9551 14.6066 75.9551 10.6544ZM83.9678 9.22299C83.9445 8.17342 83.1404 7.44177 82.0808 7.44177C81.0366 7.44177 80.1859 8.16543 80.1626 9.22299H83.9678Z"
                    fill="white"
                  />
                  <path
                    d="M89.3037 4.51516H93.4492V6.83714H93.5727C94.0055 5.11906 94.9959 4.3562 96.2646 4.3562C96.6359 4.3562 97.0072 4.42008 97.3475 4.52315V8.2685C96.9218 8.11753 96.2109 8.04567 95.7697 8.04567C94.5088 8.04567 93.5734 8.96821 93.5734 10.3676V16.7297H89.3037V4.51516Z"
                    fill="white"
                  />
                  <path
                    d="M105.692 7.87897C105.421 7.06022 104.756 6.24074 103.318 6.24074C102.003 6.24074 101.013 6.90852 101.02 7.84704C101.013 8.67377 101.577 9.12743 102.884 9.44535L104.771 9.89102C106.953 10.4078 108.019 11.4734 108.019 13.1994C108.019 15.4103 106.031 16.9767 103.162 16.9767C100.494 16.9767 98.7458 15.7602 98.3589 13.5972L100.594 13.2473C100.872 14.4479 101.762 15.0605 103.146 15.0605C104.662 15.0605 105.644 14.3208 105.644 13.3743C105.644 12.6108 105.111 12.086 103.966 11.8239L101.955 11.371C99.7277 10.8622 98.7069 9.70883 98.7069 7.97551C98.7069 5.8125 100.61 4.35718 103.294 4.35718C105.861 4.35718 107.308 5.59765 107.787 7.49863L105.692 7.87897Z"
                    fill="white"
                  />
                  <path
                    d="M115.776 6.42372H113.34V13.1436C113.34 14.5191 114.013 14.7738 114.763 14.7738C115.134 14.7738 115.42 14.702 115.575 14.6708L115.993 16.6349C115.722 16.738 115.227 16.8817 114.493 16.8897C112.667 16.9296 111.02 15.8561 111.028 13.6372V6.42372H109.288V4.51547H111.028V1.58887H113.341V4.51547H115.777V6.42372H115.776Z"
                    fill="white"
                  />
                  <path
                    d="M117.445 13.2785C117.445 10.5029 119.75 9.89899 122 9.62825C124.135 9.37347 125.001 9.38944 125.001 8.52278V8.4669C125.001 7.08344 124.236 6.27993 122.743 6.27993C121.189 6.27993 120.322 7.11465 119.982 7.98203L117.808 7.47321C118.582 5.24632 120.562 4.35571 122.712 4.35571C124.599 4.35571 127.322 5.06341 127.322 8.61787V16.7292H125.064V15.059H124.971C124.53 15.9736 123.424 16.9992 121.46 16.9992C119.201 16.9999 117.445 15.6803 117.445 13.2785ZM125.009 12.324V10.7497C124.677 11.0915 122.898 11.2984 122.147 11.4015C120.809 11.5844 119.711 12.0373 119.711 13.3097C119.711 14.4863 120.655 15.091 121.962 15.091C123.887 15.0917 125.009 13.7714 125.009 12.324Z"
                    fill="white"
                  />
                  <path
                    d="M129.54 10.6778C129.54 6.94843 131.706 4.35571 135.054 4.35571C137.754 4.35571 139.71 5.99394 139.958 8.45891H137.707C137.46 7.31353 136.563 6.35977 135.093 6.35977C133.16 6.35977 131.875 8.00598 131.875 10.6219C131.875 13.2858 133.136 14.9639 135.093 14.9639C136.415 14.9639 137.414 14.1844 137.707 12.8648H139.958C139.702 15.2427 137.885 16.976 135.078 16.976C131.628 16.9767 129.54 14.36 129.54 10.6778Z"
                    fill="white"
                  />
                  <path
                    d="M142.116 0.443359H144.428V9.68408H144.63L149.363 4.51535H152.132L147.321 9.75594L152.457 16.7299H149.618L145.581 11.2113L144.428 12.3958V16.7299H142.116V0.443359Z"
                    fill="white"
                  />
                  <path
                    d="M12.6373 8.66241V4.3313H8.4248C8.4248 6.72296 10.3104 8.66241 12.6373 8.66241Z"
                    fill="white"
                  />
                  <path
                    d="M0 16.7301H6.23298C9.76988 16.7301 12.6375 13.7817 12.6375 10.1453H0V16.7301Z"
                    fill="white"
                  />
                  <path
                    d="M8.4248 0C8.4248 2.39166 10.3104 4.33111 12.6373 4.33111V0H8.4248Z"
                    fill="white"
                  />
                  <path
                    d="M4.2124 0C4.2124 2.39166 6.09804 4.33111 8.42491 4.33111H4.2124C4.2124 6.72277 6.09804 8.66223 8.42491 8.66223V4.33111V0H4.2124Z"
                    fill="white"
                  />
                  <path
                    d="M4.21251 8.66241V4.3313H0C0 6.72296 1.88564 8.66241 4.21251 8.66241Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            <div className="lg:hidden w-30 sm:w-3/5 text-right">
              {(() => {
                if (trybtn.btnexternallink === true) {
                  return (
                    <a
                      href={trybtn.btnlink}
                      onClick={e =>
                        rudderslabTrackOnClick(
                          "navigation",
                          "header navigation",
                          e
                        )
                      }
                    >
                      <span className="border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary  text-sm normal-case font-custom rounded-lg px-8 py-2.5 inline-block btn-primary-lg">
                        {trybtn.btntext}
                      </span>
                    </a>
                  )
                } else {
                  return (
                    <Link
                      to={trybtn.btnlink}
                      onClick={e =>
                        rudderslabTrackOnClick(
                          "navigation",
                          "header navigation",
                          e
                        )
                      }
                    >
                      <span className="btn-primary-sm inline-block p-4">
                        {trybtn.btntext}
                      </span>
                    </Link>
                  )
                }
              })()}
            </div>
            <div className="block lg:hidden pr-4 sm:pr-0">
              <button
                onClick={() => toggleExpansion(!isExpanded)}
                className="flex items-center px-3 py-2 text-main border-teal-400 hover:text-white hover:border-white max-h-8 focus:outline-none"
              >
                <div className="mobile-menu">
                  {!isExpanded ? (
                    <StaticImage
                      src="../images/navmenu_open.svg"
                      alt="Toggle"
                      className="max-h-6"
                      placeholder="tracedSVG"
                    />
                  ) : (
                    <StaticImage
                      src="../images/navmenu_close.svg"
                      alt="Toggle"
                      className="w-6 h-6"
                      placeholder="tracedSVG"
                    />
                  )}
                </div>
              </button>
            </div>
            <div
              id="main-nav-menu"
              className={`menu lg:flex ${
                isExpanded ? `block bg` : `hidden`
              } pl-4 lg:pl-16 pr-4 justify-center items-center lg:items-center lg:w-auto w-full mt-2 lg:mt-0 lg:flex-1  lg:bg-transparent  lg:text-black-custom`}
            >
              <ul className="lg:flex-grow flex flex-col lg:flex-row list-none mt-4">
                {mainmenu.map((link, i) => (
                  <MainNavigationMenuLink
                    key={i}
                    link={link}
                    i={i}
                    currMenuIndex={currMenuIndex}
                    onMainMenuClick={idx => {
                      if (!isBrowser || width < 1023) {
                        setCurrMenuIndex(i === currMenuIndex ? null : idx)
                      }
                    }}
                  />
                ))}
              </ul>
              <div className="flex">
                <a
                  href="https://app.rudderstack.com/login"
                  onClick={e =>
                    rudderslabTrackOnClick("navigation", "header navigation", e)
                  }
                >
                  <span className="inline-block lg:p-2 lg:py-1.5 mt-6 lg:mt-0 font-custom font-bold mr-2 text-white">
                    Log in
                  </span>
                </a>
                {(() => {
                  if (trybtn.btnexternallink === true) {
                    return (
                      <a
                        href={trybtn.btnlink}
                        onClick={e =>
                          rudderslabTrackOnClick(
                            "navigation",
                            "header navigation",
                            e
                          )
                        }
                      >
                        <span className="border-none  bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary   text-sm normal-case font-custom rounded-lg px-4 sm:px-8 py-2.5 hidden lg:block btn-primary-lg">
                          {trybtn.btntext}
                        </span>
                      </a>
                    )
                  } else {
                    return (
                      <Link
                        to={trybtn.btnlink}
                        onClick={e =>
                          rudderslabTrackOnClick(
                            "navigation",
                            "header navigation",
                            e
                          )
                        }
                      >
                        <span className="border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary inline-block  text-sm normal-case font-custom rounded-lg px-8 py-1.5 hidden lg:block btn-primary-lg ">
                          {trybtn.btntext}
                        </span>
                      </Link>
                    )
                  }
                })()}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default MainNavigation
