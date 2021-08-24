import React, { useEffect } from "react"
import { Link } from "gatsby"
import Sidebarctablock from "./Sidebarctablock.js"
import $ from "jquery"

function Sidebar({
  cta_block_title,
  cta_block_button,
  cta_block_button_url,
  contents,
}) {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      function () {
        listenToScroll()
      },
      false
    )
  }, [])

  function listenToScroll() {
    var position = document.documentElement.scrollTop
    var header_height =
      document.getElementsByName("header-container")[0].offsetHeight +
      document.getElementsByName("guides-header")[0].offsetHeight
    var footer_offset = document.getElementsByName("footer_section_for_demo")[0]
      .offsetTop - 100
    var sidebar_height = document.getElementsByClassName("side-container")[0]
      .offsetHeight

    // console.log("header-height", header_height, position, header_height + 50)

    $(".details h2").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top - 100) {
        var id = $(this).attr("id")
        $(".menu li a").removeClass("active")
        $(".menu li a[data-attr=" + id + "]").addClass("active")
        $(".selectitem").text($(".menu li a.active").text())
      }
    })

    $("body").on("click", function (event) {
      if (!$(event.target).is(".menu") && !$(event.target).is(".selectitem")) {
        $(".menu").removeClass("active")
      }
    })

    if (position > header_height + 106) {
      document
        .getElementsByClassName("side-container")[0]
        .classList.add("stick")
      if (window.innerWidth > 800) {
        if (position + sidebar_height > footer_offset) {
          document
            .getElementsByClassName("side-container")[0]
            .classList.remove("stick")
          document.getElementsByClassName("side-container")[0].style.position =
            "absolute"
          document.getElementsByClassName("side-container")[0].style.top =
            footer_offset - (sidebar_height + header_height + 100) + "px"
        } else {
          document
            .getElementsByClassName("side-container")[0]
            .style.removeProperty("position")
          document
            .getElementsByClassName("side-container")[0]
            .style.removeProperty("top")
          document
            .getElementsByClassName("side-container")[0]
            .classList.add("stick")
        }
      }
    } else {
      document
        .getElementsByClassName("side-container")[0]
        .classList.remove("stick")
    }
  }

  function handleClick(e) {
    var elems = document.querySelectorAll(".menu a")

    ;[].forEach.call(elems, function (el) {
      el.classList.remove("active")
    })

    e.currentTarget.classList.add("active")
    document.getElementsByClassName("selectitem")[0].innerHTML =
      e.currentTarget.innerHTML
    if (window.innerWidth <= 800) {
      $(".menu").removeClass("active")
    }
    e.preventDefault()

    $("html, body").animate(
      {
        scrollTop:
          $("#" + e.currentTarget.getAttribute("data-attr")).offset().top - 60,
      },
      5
    )
  }

  function handleClickMobile() {
    $(".menu").toggleClass("active")
  }

  return (
    <aside>
      <div className="side-container ">
        <span className="selectitem" onClick={handleClickMobile}>
          {contents[0].section_subtitle}
        </span>
        <ul className="menu mb-10">
          {contents.map((section, index) => {
            return (
              <li key={section._key}>
                <Link
                  to={`#` + `${section._key}`}
                  onClick={handleClick}
                  data-attr={section._key}
                  className={`${index === 0 ? "active" : ""}`}
                >
                  {section.section_subtitle}
                </Link>
              </li>
            )
          })}
        </ul>
        {cta_block_title && (
          <Sidebarctablock
            block_title={cta_block_title}
            block_button={cta_block_button}
            button_url={cta_block_button_url}
          />
        )}
      </div>
    </aside>
  )
}

export default Sidebar
