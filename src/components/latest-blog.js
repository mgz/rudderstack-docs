import React from "react";
import BlogModule from "./latest-blog-module"
    
const LatestBlog = (props) => {
    const maintitle = props.maintitle
    const viewalltext = props.viewalltext
    const viewallpostslink = props.viewallpostslink
    const latestblogs = props.latestblog
    return (
        <>
           <section className="bg-white border-b py-8">
              
              <div className="container max-w-5xl mx-auto m-8 flex flex-wrap pt-4 pb-12">
              
                <h3 className="w-full my-2 text-3xl font-bold leading-tight text-gray-800">{maintitle}</h3>
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                {
                    latestblogs.map(
                        (latestblog, i) => (
                            <div key={i} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                <BlogModule key={i} blogRef={latestblog._ref} />
                            </div>
                        )
                    )
                }
                
                <div className="flex w-full text-center items-center">
                    <p className="w-full my-2 text-blue-500 leading-tight text-center"><a href={viewallpostslink}>{viewalltext}</a></p>
                </div>
                
              </div>

            </section> 
        </>
    )
};
export default LatestBlog