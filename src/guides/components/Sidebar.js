import React, { useEffect } from "react"
import { Link } from "gatsby"
import Sidebarctablock from "./Sidebarctablock.js"

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
      {passive: true}
    )
  }, [])

  function listenToScroll() {
    var position = document.documentElement.scrollTop
    var header_height =
      document.getElementsByName("header-container")[0].offsetHeight +
      document.getElementsByName("guides-header")[0].offsetHeight
    var footer_offset =
      document.getElementsByName("footer_section_for_demo")[0].offsetTop - 100
    var sidebar_height = document.getElementsByClassName("side-container")[0]
      .offsetHeight

    // console.log("header-height", header_height, position, header_height + 50)

    /* $(".details h2").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top - 100) {
        var id = $(this).attr("id")
        $(".menu li a").removeClass("active")
        $(".menu li a[data-attr=" + id + "]").addClass("active")
        $(".selectitem").text($(".menu li a.active").text())
      }
    }) */

    let details_h2 = document.querySelectorAll('.details h2');
    details_h2.forEach((item, key) => {
      if(window.scrollY >= (item.offsetTop + header_height)){
        let item_id = item.getAttribute('id');
        Array.from(document.querySelectorAll('.menu li a')).forEach(el => el.classList.remove('active'));
        let currentEl = document.querySelector("[data-attr='"+ item_id +"']");
        currentEl.classList.add('active');
        let menu_text = document.querySelector('.menu li a.active').textContent;
        document.querySelector('.selectitem').textContent = menu_text;
      }
    })

    /* $("body").on("click", function (event) {
      if (!$(event.target).is(".menu") && !$(event.target).is(".selectitem")) {
        $(".menu").removeClass("active")
      }
    }) */

    document.querySelector('body').onclick = (el) => {
      if(!(el.target) === document.querySelector('.menu') && !(el.target) === document.querySelector('.selectitem')){
        document.querySelector('.menu').classList.remove('active');
      }
    }

    if (position > header_height - 55) {
      document
        .getElementsByClassName("side-container")[0]
        .classList.add("stick")
      if (window.innerWidth > 752) {
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
      // console.log("sidebar-d3", position, header_height, footer_offset, 55)
      document
        .getElementsByClassName("side-container")[0]
        .classList.remove("stick")
    }

  }

  function scrollToTop (duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const cosParameter = document.scrollingElement.scrollTop / 2;
    let scrollCount = 0, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollCount will be Infinity
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
            if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
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
    /* $(".menu").removeClass("active") */
    document.querySelector('.menu').classList.remove('active');
  }
  /* e.preventDefault() */

  document
.getElementById(e.currentTarget.getAttribute("data-attr"))
.scrollIntoView({ behavior: 'smooth' });

  /* $("html, body").animate(
    {
      scrollTop:
        $("#" + e.currentTarget.getAttribute("data-attr")).offset().top - 60,
    },
    5
  ) */

}

  function handleClickMobile() {
    /* $(".menu").toggleClass("active") */
    document.querySelector('.menu').classList.toggle('active');
  }

  return (
    <aside>
      <div className="side-container ">
        <span aria-hidden="true" className="selectitem" onClick={handleClickMobile}>
          {contents[0].section_subtitle}
        </span>
        <ul className="menu mb-10">
          {contents.map((section, index) => {
            return (
              <li key={section._key}>
                <a
                  //to={`#` + `${section._key}`}
                  onClick={handleClick}
                  data-attr={section._key}
                  className={`${index === 0 ? "active" : ""} sidebar-guides-link cursor-pointer`}
                >
                  {section.section_subtitle}
                </a>
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
