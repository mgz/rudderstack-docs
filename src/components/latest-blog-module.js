import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { format } from "date-fns";
import Link from "gatsby-link"

const categories = {
  technical: 'Technical',
  industry_insights: 'Industry Insights'
};

const BlogModule = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityBlog(sort: {fields: blogdate, order: DESC}, limit: 3) {
        edges {
          node {
            id
            title
            slug
            blog_category
            author_name
            blog_image {
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  const latestblogs = data.allSanityBlog.edges;

  return (
    <>
      {
        latestblogs.map(
          (latestblog, i) => (
            <div key={i} className="w-full md:w-1/3 p-4 flex flex-col flex-grow flex-shrink">
              <div className="border border-grayColor-priceCardBorder rounded-3xl shadow-md overflow-hidden h-full">
                <a href={`blog/` + latestblog.node.slug}
                   className="block bg-white rounded-t rounded-b-none overflow-hidden shadow relative h-full">
                  <img src={latestblog.node.blog_image.asset.fluid.src} alt={latestblog.node.title} className="w-full"/>
                  <div className="uppercase text-blueNew-category text-sm px-5 font-bold pt-6">{categories[latestblog.node.blog_category]}</div>
                  <div
                    className="w-full text-lg md:text-2xl leading-6 md:leading-7 font-bold pt-2 pb-16 px-5 blog-title-wrap text-gray-dark">
                    {latestblog.node.title}
                  </div>
                  <div className="text-blueNew-category text-sm px-5 font-bold absolute bottom-6">By {latestblog.node.author_name}</div>
                </a>
              </div>
            </div>
          )
        )
      }
    </>
  );
};
export default BlogModule;