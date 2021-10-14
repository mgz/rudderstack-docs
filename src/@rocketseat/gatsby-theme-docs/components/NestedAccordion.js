import React, { useState, useEffect } from "react"
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  Accordion,
  AccordionItemPanel,
} from "react-accessible-accordion"
import { jsonData } from "../../../docsconfig/sidebar"
import {rudderslabTrackOnClick} from '../../../utils/common';

const NestedAccordion = props => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  const docsBasePath = "/docs"

  useEffect(() => {
    const returnMenuItem = (item, i) => {
      let menuItem

      if (item.content.length === 0) {
        menuItem = (
          <Accordion
            className="item zeroContent"
            key={i}
            allowZeroExpanded={true}
          >
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  className={`accordion__button ${
                    window.location.pathname === docsBasePath + item.link || window.location.pathname === docsBasePath + item.link + '/'
                      ? "accActive"
                      : ""
                  }`}
                >
                  <a href={docsBasePath + item.link} onClick={(e) => rudderslabTrackOnClick("sidebarNav", null, e, true)}>{item.title}</a>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
          </Accordion>
        )
      } else {
        let menuItemChildren = item.content.map((item, i) => {
          let menuItem = returnMenuItem(item, i)
          return menuItem
        })
        menuItem = (
          <Accordion key={i} className="item" allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  className={`accordion__button ${
                    window.location.pathname === docsBasePath + item.link || window.location.pathname === docsBasePath + item.link + '/'
                      ? "accActive"
                      : ""
                  }`}
                >
                  <a href={docsBasePath + item.link}  onClick={(e) => rudderslabTrackOnClick("sidebarNav", null, e, true)}>{item.title}</a>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{menuItemChildren}</AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        )
      }
      return menuItem
    }

    const load = async () => {
      setLoading(false)
      let menuItems = jsonData.map((item, i) => {
        let menuItem = returnMenuItem(item, i)
        return menuItem
      })
      setItems(menuItems)
    }
    if (loading) {
      load()
    }
      
      /* function expandAcc(el){
        if(el !== undefined){
          let parentButton, parentPanel;
          if(el.closest('.accordion__panel') === (undefined || null)){
            if(el.hasAttribute('aria-expanded') && el.parentNode.parentNode.querySelector('accordion__panel') !== null){
              el.setAttribute('aria-expanded', true);
              console.log('Entered if if');
            } 
          }else{
            console.log('Entered else');
            parentButton = el.closest('.accordion__panel').parentNode.childNodes[0].childNodes[0];
            parentPanel = el.closest('.accordion__panel').parentNode.childNodes[1];
            parentButton.setAttribute('aria-expanded', true);
            parentPanel.removeAttribute('hidden');
            console.log('Closest panel', el.closest('.accordion__panel'));
            expandAcc(parentButton);
          }
          console.log('Current el', el);
          //parentButton.setAttribute('aria-expanded', true);
        }
      } */
      function expandAcc(el){
        if(el !== undefined){
          let parentButton, parentPanel;
          let arControls = el.getAttribute('aria-controls');
          if(el.parentNode.nextSibling !== undefined && el.parentNode.nextSibling !== null){
            if(el.parentNode.nextSibling.getAttribute('id') === arControls){
              el.setAttribute('aria-expanded', true);
              el.parentNode.nextSibling.removeAttribute('hidden');
            }
          }
          if(el.closest('.accordion__panel') === (undefined || null)){
            if(el.hasAttribute('aria-expanded') && el.parentNode.parentNode.querySelector('accordion__panel') !== null){
              el.setAttribute('aria-expanded', true);
            } 
          }
          else{
            if(el.closest('.accordion__panel') !== undefined && el.closest('.accordion__panel') !== null){
              parentButton = el.closest('.accordion__panel').parentNode.childNodes[0].childNodes[0];
              parentPanel = el.closest('.accordion__panel').parentNode.childNodes[1];
              parentButton.setAttribute('aria-expanded', true);
              parentPanel.removeAttribute('hidden');
              expandAcc(parentButton);
            }
          }
          //parentButton.setAttribute('aria-expanded', true);
        }
      }
      let activeItem = document.getElementsByClassName('accordion__button accActive')[0];
      expandAcc(activeItem);
  }, [loading])

  return <div className="nestedAccordion">{items}</div>
}

export default NestedAccordion
