import React from "react";
import Image from "./image"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Faq(props) {
  const herobannerbutton = props.herobannerbutton
 return (
  <section class="bg-grayNew-BgGray my-10">
    <div className="container mx-auto flex flex-wrap max-w-screen-lg m-auto">
      <div className="md:w-1/4 px-4">
        <h2 className="text-4xl font-bold mb-2">FAQ</h2>
        <h4 className="text-2xl font-semibold pt-4">How can we<br></br> help you?</h4>
      </div>
      <div className="md:w-3/4 2xl:pr-44 xl:pr-36 lg:pr-28">
      <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      <h4 className="faq-title">Is your open-source code maintained and stable?</h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="faq-answer">
                      <p>
                      Yes, we actively contribute to our open-source code as you can see on our <a className="text-blueNew-custom" href="#">GitHub</a> page.
                      The core data processing layer is the same for both the Community and Enterprise edition.
                      The Enterprise edition comes with some more advanced reporting & clustering features,
                        but those are built on top of the data plane.
                      </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h4 className="faq-title">What support is available with the Community plan and Enterprise plan?</h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="faq-answer">
                      <p>
                      Yes, we actively contribute to our open-source code as you can see on our <a className="text-blueNew-custom" href="#">GitHub</a> page.
                      The core data processing layer is the same for both the Community and Enterprise edition.
                      The Enterprise edition comes with some more advanced reporting & clustering features,
                        but those are built on top of the data plane.
                      </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h4 className="faq-title">Is it evil to collect user-data?</h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="faq-answer">
                      <p>
                      Yes, we actively contribute to our open-source code as you can see on our <a className="text-blueNew-custom" href="#">GitHub</a> page.
                      The core data processing layer is the same for both the Community and Enterprise edition.
                      The Enterprise edition comes with some more advanced reporting & clustering features,
                        but those are built on top of the data plane.
                      </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h4 className="faq-title">Under what license is the open-source project released?</h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="faq-answer">
                      <p>
                      Yes, we actively contribute to our open-source code as you can see on our <a className="text-blueNew-custom" href="#">GitHub</a> page.
                      The core data processing layer is the same for both the Community and Enterprise edition.
                      The Enterprise edition comes with some more advanced reporting & clustering features,
                        but those are built on top of the data plane.
                      </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h4 className="faq-title">How is RudderStack different from Segment?</h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="faq-answer">
                      <p>
                      Yes, we actively contribute to our open-source code as you can see on our <a className="text-blueNew-custom" href="#">GitHub</a> page.
                      The core data processing layer is the same for both the Community and Enterprise edition.
                      The Enterprise edition comes with some more advanced reporting & clustering features,
                        but those are built on top of the data plane.
                      </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h4 className="faq-title">Who are the people associated with this project?</h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="faq-answer">
                      <p>
                      Yes, we actively contribute to our open-source code as you can see on our <a className="text-blueNew-custom" href="#">GitHub</a> page.
                      The core data processing layer is the same for both the Community and Enterprise edition.
                      The Enterprise edition comes with some more advanced reporting & clustering features,
                        but those are built on top of the data plane.
                      </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h4 className="faq-title">Weren't you guys on HackerNews?</h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="faq-answer">
                      <p>
                      Yes, we actively contribute to our open-source code as you can see on our <a className="text-blueNew-custom" href="#">GitHub</a> page.
                      The core data processing layer is the same for both the Community and Enterprise edition.
                      The Enterprise edition comes with some more advanced reporting & clustering features,
                        but those are built on top of the data plane.
                      </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h4 className="faq-title">How do we contact you?</h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="faq-answer">
                      <p>
                      Yes, we actively contribute to our open-source code as you can see on our <a className="text-blueNew-custom" href="#">GitHub</a> page.
                      The core data processing layer is the same for both the Community and Enterprise edition.
                      The Enterprise edition comes with some more advanced reporting & clustering features,
                        but those are built on top of the data plane.
                      </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
      </div>

    </div>
  </section>
 );
}
export default Faq;
