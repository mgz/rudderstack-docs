import React from "react";
import { StaticImage } from "gatsby-plugin-image"

function PricePlans() {
 return (
   <section className='bg-white plans-section pb-40 md:pb-20'>
    <div className="max-w-6xl px-6 sm:px-3 mx-auto flex-wrap items-center pt-8 md:pt-24 md:py-16 text-center">
      <h2 className="sm:my-4 text-4xl sm:text-5xl font-bold font-custom sm:mb-8">
      Compare Features by Plan
      </h2>
      
      <div className="hidden sm:block w-auto overflow-auto max-w-screen-lg m-auto">
        <table className="sm:w-full table-fixed font-custom bg-white text-grayColor-custom">
          <thead >
            <tr className="items-center">
              <th className="w-1/4 py-8"></th>
              <th className="w-1/4 py-8 text-center text-blueNew-custom text-3xl">
              <div className="ellipse flex items-center justify-center h-20">
                <StaticImage src="../images/EllipseImg1.png" alt="Free"/>
              </div> 
              <div>Free<br/><span className='text-lg text-grayColor-lighter'>Start</span></div>
              </th>
              <th className="w-1/4 py-8 text-center text-blueNew-custom text-3xl">
                <div className="ellipse flex items-center justify-center h-20">
                  <StaticImage src="../images/EllipseImg2.png" alt="Pro"/>
                </div>
                <div>Pro<br/><span className='text-lg text-grayColor-lighter'>Scale</span></div>
              </th>
              <th className="w-1/4 py-8 text-center text-blueNew-custom text-3xl text-3xl">
                <div className="ellipse flex items-center justify-center h-20">
                  <StaticImage src="../images/EllipseImg3.png" alt="Ellipse"/>
                </div>
                <div>Enterprise<br/><span className='text-lg text-grayColor-lighter'>Secure</span></div></th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td className="p-6 text-blueNew-custom text-lg text-left uppercase font-bold col-span-4">Event Stream</td>        
            </tr>
            
            
            <tr className="bg-grayColor-BgGray ">
              <td className="p-6 text-base text-left w-1/4">Event SDK Sources (Mobile, Web, Custom, etc.)</td>   
              <td className="p-6 w-1/4"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="p-6 w-1/4"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="p-6 w-1/4"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>					
            </tr>
            <tr>
              <td className="p-6 text-base text-left">Segment Source</td>   
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
            </tr>
            <tr className="bg-grayColor-BgGray">
              <td className="p-6 text-base text-left">Looker Source</td>   
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
            </tr>
            <tr>
              <td className="p-6 text-base text-left">Cloud Destinations (GA, Amptdtude, Braze, etc.)</td>   
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
            </tr>
            <tr className="bg-grayColor-BgGray">
              <td className="p-6 text-base text-left">Data Warehouse Destinations (Redshift, Snowflake, Ctdckhouse, etc.)</td>   
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
            </tr>
            
            <tr>
              <td className="p-6 text-base text-left">Data Lake Destinations (S3, Google Storage, etc.)</td>   
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
            </tr>
            <tr className="bg-grayColor-BgGray">
              <td className="p-6 text-base text-left">Transformations</td>   
              <td className="p6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
              <td className="p6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="p6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
            </tr>
            <tr>
              <td className="p-6 text-base text-left">Data Masking</td>   
              <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
            </tr>
            <tr className="bg-grayColor-BgGray">
              <td className="p-6 text-base text-left">Event Replay</td>   
              <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
              <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
            </tr>
            <tr>
              <td className="p-6 text-blueNew-custom text-lg text-left uppercase font-bold"  colspan="4">CLOUD EXTRACT</td>        
            </tr>
            <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Sync Schedtre</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6 text-base">Daily/hourly</td>
            <td className="p-6 text-base">Configurable down to 30 minutes</td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left"># of Sources</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6 text-base">Unlimited</td>
            <td className="p-6 text-base">Unlimited</td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Transformations</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Data Masking</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-blueNew-custom text-lg text-left uppercase font-bold col-span-4" colspan="4">WAREHOUSE ACTIONS</td>        
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Warehouse Connections</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6 text-base"><span>1</span></td>
            <td className="p-6 text-base">Unlimited</td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Transformations</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Data Masking</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-blueNew-custom text-lg text-left uppercase font-bold col-span-4" colspan="4">Advanced Integration <br/>& Management</td>        
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">live Debuggers (Sources and Destinations)</td>   
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Selective Sync</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Monitoring Dashboards (Grafana)</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Alerting & Error Notifications</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-blueNew-custom text-lg text-left uppercase font-bold col-span-4" colspan="4">Deployment & Security</td>        
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="td-first-colum">Rudderstack Cloud</td>   
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6 text-base">Unlimited</td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Team Members</td>   
            <td className="p-6 text-base"><span>3</span></td>
            <td className="p-6 text-base"><span>10</span></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Mtrti-node Scatdng</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">SSO</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">VPC Deployment</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6">
              <a href="https://resources.rudderstack.com/enterprise-quote"
                 className="text-sm text-black-custom leading-sm font-bold mt-3 lr-icon mx-auto" target="_blank"
                 rel="noreferrer">
                Talk to sales
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-6 text-blueNew-custom text-lg text-left uppercase font-bold col-span-4" colspan="4">support</td>        
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Slack Community Support</td>   
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Dedicated Chat Support</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Customer Success Manager</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Onboarding Service</td>   
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage src="../images/Line 2.svg" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check"/></td>           
          </tr>


          </tbody>
        </table>
      </div>
      
      <div className="mobile-table font-custom">
          <div className="freeplan mt-8">            
            <div className="plan-header bg-white border border-grayColor-priceCardBorder rounded-2xl shadow-md sticky top-0 z-10">
            <div class="p-6 md:pt-8 md:pb-4">
                <div className="ellipse flex items-center justify-center h-20">
                    <StaticImage src="../images/EllipseImg1.png" alt="EllipseImg"/>
                </div>                
                <h3 class="font-medium leading-tight font-bold text-4xl text-blueNew-custom">Free</h3>
                <div class="text-grayColor-lighter text-sm leading-6 text-sm py-2">500,000 events/month</div>
                <span class="text-sm font-bold py-2.5 px-8 rounded-lg	bg-black-custom text-whiteColor-custom leading-5">Sign up free</span>
            </div>
            </div>
            <div className="plan-features mt-6 px-3">
            <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">Event Stream</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Event SDK Sources (Mobile, Web, Custom, etc.)</div>
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Segment Source</div>                    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Looker Source</div>                    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Cloud Destinations (GA, Amplitude, Braze, etc.)</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-4 mb-3"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Data Warehouse Destinations (Redshift, Snowflake, Clickhouse, etc.)</div>    

            <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">Advanced Integration & Management</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Live Debuggers 
(Sources and Destinations)</div>    

            <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">Deployment & Security</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Rudderstack Cloud</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Team Members <br/>3</div>    

            <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">SUPPORT</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Slack Community Support</div>    
            </div>
         </div>
          
        <div className="proplan mt-10">
            <div className="plan-header bg-white border border-grayColor-priceCardBorder rounded-2xl shadow-md sticky top-0 z-10">
                <div class="p-6 md:pt-8 md:pb-4">
                    <div className="ellipse flex items-center justify-center h-20">
                    <StaticImage src="../images/EllipseImg2.png" alt="EllipseImg"/>
                    </div>                
                    <h3 class="font-medium leading-tight font-bold text-4xl text-blueNew-custom">Pro</h3>
                    <div class="text-grayColor-lighter text-sm leading-6"><div className="text-grayColor-lighter text-sm leading-6 text-sm py-2">Starting at $750 for <br/>25M events/month</div></div>
                    <span class="text-sm font-bold py-2.5 px-8 rounded-lg	bg-black-custom text-whiteColor-custom leading-5">Get a demo</span>
                </div>             
            </div>
            <div className="plan-features mt-6 px-3">
                <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">Event Stream</div> 
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Event SDK Sources (Mobile, Web, Custom, etc.)</div>
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Segment Source</div>                    
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Looker Source</div>                    
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Cloud Destinations (GA, Amplitude, Braze, etc.)</div>    
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Data Warehouse Destinations (Redshift, Snowflake, Clickhouse, etc.)</div>    
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Transformations</div> 
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Data Masking</div> 

                <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">CLOUD EXTRACT</div> 
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span><div className="flex-col">Sync Schedule <br/><span className="font-normal">Daily/hourly</span></div></div>
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span><div className="flex-col"># of Sources <br/><span className="font-normal">Unlimited</span></div></div>  
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Transformations</div> 
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Data Masking</div> 

                <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">Advanced Integration & Management</div> 
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Live Debuggers 
                (Sources and Destinations)</div>    
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Selective Sync</div>    
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Monitoring Dashboards (Grafana)</div>    
                
                <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">Deployment & Security</div> 
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Rudderstack Cloud</div>    
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Team Members <br/>10</div>    
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Multi-node Scaling</div>    

                <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">SUPPORT</div> 
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Slack Community Support</div>    
                <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Dedicated Chat Support </div>    
            </div>
        </div>

        <div className="enterpriseplan mt-10">
        <div className="plan-header bg-white border border-grayColor-priceCardBorder rounded-2xl shadow-md sticky top-0 z-10">
            <div class="p-6 md:pt-8 md:pb-4">
                <div className="ellipse flex items-center justify-center h-20">
                <StaticImage src="../images/EllipseImg3.png" alt="EllipseImg"/>
                </div>                
                <h3 class="font-medium leading-tight font-bold text-4xl text-blueNew-custom">Enterprise</h3>
                <div class="text-grayColor-lighter text-sm leading-6"><div className="text-grayColor-lighter text-sm leading-6 text-sm py-2">Starting at $750 for <br/>Billions of events</div></div>
                <span class="text-sm font-bold py-2.5 px-8 rounded-lg	bg-black-custom text-whiteColor-custom leading-5">Request pricing</span>
            </div>             
        </div>
        <div className="plan-features mt-6 px-3">
            <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">Event Stream</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Event SDK Sources (Mobile, Web, Custom, etc.)</div>
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Segment Source</div>                    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Looker Source</div>                    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Cloud Destinations (GA, Amplitude, Braze, etc.)</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Data Warehouse Destinations (Redshift, Snowflake, Clickhouse, etc.)</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Transformations</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Data Masking</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Event Replay</div> 

            <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">CLOUD EXTRACT</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span><div className="flex-col">Sync Schedule <br/><span className="font-normal">Configurable down to 30 minutes</span></div></div>
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span><div className="flex-col"># of Sources <br/><span className="font-normal">Unlimited</span></div> </div>
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Transformations</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Data Masking</div> 

            <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">WAREHOUSE ACTIONS</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span><div className="flex-col">Warehouse Connections <br/><span className="font-normal">Unlimited</span></div></div>
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Transformations</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Data Masking</div>    

            <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">Advanced Integration & Management</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Live Debuggers 
            (Sources and Destinations)</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Selective Sync</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Monitoring Dashboards (Grafana)</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Alerting & Error Notifications</div> 
            
            <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">Deployment & Security</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Rudderstack Cloud</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span><div className="flex-col">Team Members <br/>Unlimited</div></div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Multi-node Scaling</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>SSO</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>VPC Deployment</div> 
            <a href="#" className="text-sm text-black-custom font-bold items-center flex mt-3 pl-5"> <StaticImage className="mr-2" src="../images/arrow-right-o.png" alt="arrow right"/>Talk to sales</a>

            <div className="text-blueNew-custom text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">SUPPORT</div> 
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Slack Community Support</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Dedicated Chat Support</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Customer Success Manager</div>    
            <div className="text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-10"><span className="checkimg mr-3 mt-1"><StaticImage className="checkImg" src="../images/check-r.svg" alt="check image"/></span>Onboarding Service</div>    
        </div>
        </div>          
      </div>
          
    </div>
  </section>
 );
}
export default PricePlans;
