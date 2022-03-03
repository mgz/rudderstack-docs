import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "gatsby";
import serializers from "../components/serializers";

const Description = ({ section }) => {
  return (
    <div className="calltoaction rounded-lg">
      <h3 className="title">{section.block_title}</h3>
      {section._rawBlockDescription && (
        <div className="block-description">
          <BlockContent
            blocks={section._rawBlockDescription.Description}
            serializers={serializers}
          />
        </div>
      )}
      {section.block_description && (
        <div className="block-description">
          <BlockContent
            blocks={section.block_description.Description}
            serializers={serializers}
          />
        </div>
      )}
      {section.block_button_text && (
        <Link to={section.block_button_url} className="btn-secondary-lg py-4 leading-normal text-sm button-gradient-border">
          {section.block_button_text}
        </Link>
      )}
    </div>
  );
};

export default Description;
