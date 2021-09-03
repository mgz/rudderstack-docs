import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../components/serializers";
const Description = ({ section }) => {
  return (
    <div className="lightbackground">
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
    </div>
  );
};

export default Description;
