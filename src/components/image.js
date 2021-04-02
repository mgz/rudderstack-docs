import React from "react";
import { StaticQuery, graphql } from "gatsby";

function renderImage(image) {
    const imgh = image.map(
        (imgs, i) => (
            (() => {
                if(imgs !== null && imgs !== '' && typeof imgs !== 'undefined'){
                    return (
                        <img src={imgs} alt="" />
                    );
                }
            })()
        )
    )
    return (
        imgh
    );
};
const Image = (props) => {
  return (
    <StaticQuery
    query = {graphql`
    query {
        allSanityImageAsset {
        edges {
            node {
            fluid {
                src
            }
            _id
            }
        }
        }
    }
    `}
    render={(data) => {
        const images = data.allSanityImageAsset.edges
        const imgdata = images.map(
            (img, i) => (
                (() => {
                    if (img.node._id === props.props){                      
                        const image1 = img.node.fluid.src
                        return (
                            image1
                        )
                    }
                })()
            )
        )
        return(renderImage(imgdata))
      }}
    />
  );
};
export default Image;