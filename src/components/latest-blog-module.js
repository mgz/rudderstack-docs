import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { format } from "date-fns";

function renderBlogModule(blogs) {
    const blogdata = blogs.map(
        (blog) => (
            (() => {
                if(blog !== null && blog !== '' && typeof blog !== 'undefined'){
                    const image = blog.mainImage.asset.fluid.src
                    const title = blog.title
                    const published = blog.publishedAt
                    return (
                        <>
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <img src={image} alt={title} className="w-full" />
                            <div className="w-full font-bold pt-6 px-3">{title}</div>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow px-3 p-6">
                            <div className="flex items-center justify-start">
                                <p className="text-gray-400">{format(new Date(published), "MMMM d, yyyy")}</p>
                            </div>
                        </div>
                        </>
                    );
                }
            })()
        )
    )
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
        const posts = data.allSanityPost.edges
        const postdata = posts.map(
            (post) => (
                (() => {
                    if (post.node._id === props.blogRef){             
                        const post1 = post.node
                        return (
                            post1
                        )
                    }
                })()
            )
        )
        return(renderBlogModule(postdata))
      }}
    />
  );
};
export default BlogModule;