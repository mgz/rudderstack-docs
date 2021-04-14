import React from "react";
import BlogModule from "./latest-blog-module"
import Link from "gatsby-link"
    
const LatestBlog = (props) => {
    const maintitle = props.maintitle
    const viewalltext = props.viewalltext
    const viewallpostslink = props.viewallpostslink
    return (
        <>
           <section className="bg-white my-20">
              
              <div className="container md:px-3 mx-auto flex flex-wrap pt-4 pb-12">
              
                <h3 className="w-full my-2 text-5xl px-6 text-primary font-bold leading-tight">{maintitle}</h3>
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <BlogModule  />
                <div className="flex w-full text-center items-center">
                    <p className="w-full my-2 text-blue text-lg leading-tight text-center post-arrow">
                      <Link to={viewallpostslink}>{viewalltext}</Link></p>
                </div>
                
              </div>

            </section> 
        </>
    )
};
export default LatestBlog