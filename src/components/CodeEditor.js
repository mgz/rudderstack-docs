import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from '@codemirror/lang-javascript';

const CodeEditor = () => {

    let string = `rudderanalytics.track('Product clicked', {
        id: 'MTD-12',
        price: 100
    })`

    return(
        <div className="max-w-6xl mx-auto">
            <CodeMirror
                value={string}
                height="200px"
                theme="light"
                editable={false}
                extensions={[javascript()]}
            />
        </div>
    )
}

export default CodeEditor