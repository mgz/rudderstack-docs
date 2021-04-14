import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { format } from "date-fns";
import Link from "gatsby-link"

const BlogModule = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityBlog(sort: {fields: blogdate, order: DESC}, limit: 3) {
        edges {
          node {
            id
            title
            slug
            blog_image {
              asset {
                fluid {
                  src
                }
              }
            }
            blogdate
          }
        }
      }
    }
  `)
const latestblogs = data.allSanityBlog.edges
  return (
    <>
    {
      latestblogs.map(
          (latestblog, i) => (
              <div key={i} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <Link to={`blog/`+latestblog.node.slug}>
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                      <img src={latestblog.node.blog_image.asset.fluid.src} alt={latestblog.node.title} className="w-full" />
                      <div className="w-full text-lg font-bold pt-6 px-3">{latestblog.node.title}</div>
                  </div>
                </Link>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow px-3 p-6">
                      <div className="flex items-center justify-start">
                          <p className="text-postdate text-sm">{format(new Date(latestblog.node.blogdate), "MMMM d, yyyy")}</p>
                      </div>
                  </div>
              </div>
          )
      )
    }   
    </>
  );
};
export default BlogModule;