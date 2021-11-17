import React from "react"
import Gist from 'super-react-gist'
//import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

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
      /* <SyntaxHighlighter
        language={props.node.language}
        customStyle={{
          fontSize: 14,
          marginTop: 0,
          marginBottom: 16,
        }}
      >
        {props.node.code}
      </SyntaxHighlighter> */
      <Highlight
        {...defaultProps}
        language={props.node.language}
        code={props.node.code}
        theme={theme}
      >
        {({
            style,
            tokens,
            getLineProps,
            getTokenProps,
          }) => (
            <pre style={{overflow: 'auto', background: '#282A36', padding: '1em'}}>
              {/* <CopyCode
                onClick={handleClick}
                disabled={copied}
                hasTitle={title}
              >
                {copied ? 'Copied!' : 'Copy'}
              </CopyCode> */}
              <code>
                {tokens.map((line, index) => {
                  const lineProps = getLineProps({ line, key: index });

                  return (
                    <div {...lineProps}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </code>
            </pre>
          )}
      </Highlight>
    ),
  },
};

export default serializers;
