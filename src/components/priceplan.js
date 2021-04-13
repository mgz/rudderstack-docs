import React from "react";
//import Image from "./image"
import { StaticImage } from "gatsby-plugin-image"

function PricePlans(props) {
  //const herobannerbutton = props.herobannerbutton
 return (
   <section className='bg-white-custom'>
    <div className="container px-3 mx-auto flex-wrap items-center py-16 text-center pb-40">
      <h2 className="my-4 md:text-4xl font-bold font-custom" >
      Compare Features by Plan
      </h2>
      
      <div className="w-auto overflow-auto max-w-screen-lg m-auto">
        <table class="sm:w-full table-fixed font-custom bg-white text-grayColor-custom">
          <thead >
            <tr class="items-center">
              <th className="w-1/4 py-8"></th>
              <th className="w-1/4 py-8 text-center text-blueNew-custom text-2xl">
              <div className="ellipse flex items-center justify-center h-20">
                <StaticImage src="../images/EllipseImg1.png" alt="Free"/>
              </div> 
              <div>Free<br/><span className='text-base text-grayColor-lighter'>Start</span></div>
              </th>
              <th className="w-1/4 py-8 text-center text-blueNew-custom text-2xl">
                <div className="ellipse flex items-center justify-center h-20">
                  <StaticImage src="../images/EllipseImg2.png" alt="Pro"/>
                </div>
                <div>Pro<br/><span className='text-base text-grayColor-lighter'>Scale</span></div>
              </th>
              <th className="w-1/4 py-8 text-center text-blueNew-custom text-2xl">
                <div className="ellipse flex items-center justify-center h-20">
                  <StaticImage src="../images/EllipseImg3.png" alt="Ellipse"/>
                </div>
                <div>Enterprise<br/><span className='text-base text-grayColor-lighter'>Secure</span></div></th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td className="p-6 text-blueNew-custom text-2xl text-left uppercase font-bold col-span-4">Event Stream</td>        
            </tr>
            
            
            <tr className="bg-grayColor-BgGray">
              <td className="p-6 text-base text-left w-1/4">Event SDK Sources (Mobile, Web, Custom, etc.)</td>   
              <td className="p-6 w-1/4"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="p-6 w-1/4"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="p-6 w-1/4"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>					
            </tr>
            <tr>
              <td className="p-6 text-base text-left">Segment Source</td>   
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
            </tr>
            <tr className="bg-grayColor-BgGray">
              <td className="p-6 text-base text-left">Looker Source</td>   
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
            </tr>
            <tr>
              <td className="p-6 text-base text-left">Cloud Destinations (GA, Amptdtude, Braze, etc.)</td>   
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
            </tr>
            <tr className="bg-grayColor-BgGray">
              <td className="p-6 text-base text-left">Data Warehouse Destinations (Redshift, Snowflake, Ctdckhouse, etc.)</td>   
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="py-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
            </tr>
            
            <tr>
              <td className="p-6 text-base text-left">Data Lake Destinations (S3, Google Storage, etc.)</td>   
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
            </tr>
            <tr className="bg-grayColor-BgGray">
              <td className="p-6 text-base text-left">Transformations</td>   
              <td className="p6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
              <td className="p6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="p6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
            </tr>
            <tr>
              <td className="p-6 text-base text-left">Data Masking</td>   
              <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
            </tr>
            <tr className="bg-grayColor-BgGray">
              <td className="p-6 text-base text-left">Event Replay</td>   
              <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
              <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
              <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
            </tr>
            <tr>
              <td className="p-6 text-blueNew-custom text-2xl text-left uppercase font-bold"  colspan="4">CLOUD EXTRACT</td>        
            </tr>
            <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Sync Schedtre</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6 text-base">Daily/hourly</td>
            <td className="p-6 text-base">Configurable down to 30 minutes</td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left"># of Sources</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6 text-base">Untdmited</td>
            <td className="p-6 text-base">Untdmited</td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Transformations</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Data Masking</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-blueNew-custom text-2xl text-left uppercase font-bold" colspan="4">WAREHOUSE ACTIONS</td>        
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Warehouse Connections</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6 text-base"><span>1</span></td>
            <td className="p-6 text-base">Untdmited</td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Transformations</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Data Masking</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-blueNew-custom text-2xl text-left uppercase font-bold" colspan="4">Advanced Integration <br/>& Management</td>        
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">live Debuggers (Sources and Destinations)</td>   
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Selective Sync</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Monitoring Dashboards (Grafana)</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Alerting & Error Notifications</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-blueNew-custom text-2xl text-left uppercase font-bold" colspan="4">Deployment & Security</td>        
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="td-first-colum">Rudderstack Cloud</td>   
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6 text-base">Untdmited</td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Team Members</td>   
            <td className="p-6 text-base"><span>3</span></td>
            <td className="p-6 text-base"><span>10</span></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Mtrti-node Scatdng</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">SSO</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">VPC Deployment</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-blueNew-custom text-2xl text-left uppercase font-bold" colspan="4">support</td>        
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Slack Community Support</td>   
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Dedicated Chat Support</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr className="bg-grayColor-BgGray">
            <td className="p-6 text-base text-left">Customer Success Manager</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="check"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>
          <tr>
            <td className="p-6 text-base text-left">Onboarding Service</td>   
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage src="../images/Line 1.png" alt="Line"/></td>
            <td className="p-6"><StaticImage className="checkImg" src="../images/check-r.png" alt="check"/></td>           
          </tr>


          </tbody>
        </table>
      </div>
    </div>
  </section>
 );
}
export default PricePlans;
