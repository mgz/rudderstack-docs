import React from "react";
import { StaticQuery, graphql } from "gatsby";

function renderImage(image, classes) {
    const imgh = 
            (() => {
                return (
                    <img src={image.node.fluid.src} alt="" className={classes} />
                );
            })()
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
        const imgdata = data.allSanityImageAsset.edges.find(
            imgdata => imgdata.node._id === props.props
        )
        return(renderImage(imgdata, props.classes))
      }}
    />
  );
};
export default Image;