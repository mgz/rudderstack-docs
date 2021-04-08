import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { format } from "date-fns";

function renderBlogModule(blog) {
    const blogdata = (() => {
      const image = blog.node.mainImage.asset.fluid.src
      const title = blog.node.title
      const published = blog.node.publishedAt
      return (
        <>
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <img src={image} alt={title} className="w-full" />
              <div className="w-full text-lg font-bold pt-6 px-3">{title}</div>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow px-3 p-6">
              <div className="flex items-center justify-start">
                  <p className="text-postdate text-sm">{format(new Date(published), "MMMM d, yyyy")}</p>
              </div>
          </div>
        </>
      );
    })()
    return (
        blogdata
    );
};
const BlogModule = (props) => {
  return (
    <StaticQuery
    query = {graphql`
    query {
        allSanityPost {
          edges {
            node {
              _id
              mainImage {
                asset {
                  fluid {
                    src
                  }
                }
              }
              publishedAt
              title
            }
          }
        }
      }
    `}
    render={(data) => {
        const postdata = data.allSanityPost.edges.find(
          postdata => postdata.node._id === props.blogRef
        )
        return(renderBlogModule(postdata))
      }}
    />
  );
};
export default BlogModule;