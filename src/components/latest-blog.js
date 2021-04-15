import React from "react";
import BlogModule from "./latest-blog-module"
import { StaticImage } from "gatsby-plugin-image"
import Link from "gatsby-link"
    
const LatestBlog = (props) => {
    const maintitle = props.maintitle
    const viewalltext = props.viewalltext
    const viewallpostslink = props.viewallpostslink
    const viewexternallink = props.viewexternallink
    return (
        <>
           <section className="bg-white pb-20">
              
              <div className="container px-4 md:px-0 mx-auto flex flex-wrap pt-4 pb-12">
              
                <h3 className="w-full my-2 text-4xl md:text-5xl px-6 text-primary font-bold leading-tight">{maintitle}</h3>
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <BlogModule  />
                <div className="w-full text-center items-center">
                    <p className="w-full my-2 text-black font-bold text-sm leading-tight text-center post-arrow right-image flex justify-center items-center">
                    <StaticImage className="mr-2" src="../images/arrow-right-o.png" alt="arrow right"/>
                    {(() => {
                      if (viewexternallink === true){
                        return (
                          <a href={viewallpostslink} >{viewalltext}</a>
                        )
                      }else{
                        return(
                          <Link to={viewallpostslink}>{viewalltext}</Link>
                        ) 
                      }
                    })()}
                    </p>
                </div>
                
              </div>

            </section> 
        </>
    )
};
export default LatestBlog