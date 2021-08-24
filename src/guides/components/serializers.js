import React from "react"
import Gist from 'super-react-gist'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const serializers = {
  types: {
    gist: ({ node }) => {
      const { url } = node;
      return (
        <div style={{ maxWidth: "645px" }}>
          <Gist url={url}></Gist>
        </div>
      );
    },
    code: (props) => (
      <SyntaxHighlighter
        language={props.node.language}
        customStyle={{
          fontSize: 14,
          marginTop: 0,
          marginBottom: 16,
        }}
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
};

export default serializers;
