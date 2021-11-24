import React, {useEffect} from "react";
/* import CodeMirror from "@uiw/react-codemirror"; */
import createMovie from 'codemirror-movie';
import "codemirror/lib/codemirror.css"

const CodeEditor = () => {

    useEffect(() => {
        const CodeMirror = require('codemirror/lib/codemirror');
        require("codemirror/mode/javascript/javascript");
        let editor = CodeMirror.fromTextArea(document.getElementById('code'), {
            lineNumbers: true,
            mode: "javascript",
            readOnly: true
        });

        const Movie = createMovie(editor, scene => [
            scene.type('rudderanalytics.track("Product Clicked", {\n\t', 200),
            scene.wait(200),
            scene.type(`sku: 'MTD-12',\n\t`, 200),
            scene.wait(200),
            scene.type(`brand: 'allbirds',\n\t`, 200),
            scene.wait(200),
            scene.type(`category: 'running',\n\t`, 200),
            scene.wait(200),
            scene.type(`price: 106.99\n`, 200),
            scene.wait(200),
            scene.type(`},\n\n`, 200),
            scene.wait(200),
            scene.type(`{\n\t`, 200),
            scene.wait(200),
            scene.type(`integrations: {\n\t\t`, 200),
            scene.wait(200),
            scene.type(`All: false,\n\t\t`, 200),
            scene.wait(200),
            scene.type(`Snowflake: true,\n\t\t`, 200),
            scene.wait(200),
            scene.type(`"Google Analytics": true,\n\t\t`, 200),
            scene.wait(200),
            scene.type(`Amplitude: true,\n\t\t`, 200),
            scene.wait(200),
            scene.type(`Klaviyo: true,\n\t\t`, 200),
            scene.wait(200),
            scene.type(`Redis: true,\n\t`, 200),
            scene.wait(200),
            scene.type(`}\n`, 200),
            scene.wait(200),
            scene.type(`})`, 200),
        ])

        Movie.play();
    }, [])

    let string = `rudderanalytics.track("Product Clicked", {
        sku: 'MTD-12',
        brand: 'allbirds',
        category: 'running',
        price: 106.99
      },

      {
        integrations: {
          All: false,
          Snowflake: true,
          "Google Analytics": true,
          Amplitude: true,
          Klaviyo: true,
          Redis: true,
        }
      }
    )`

    return(
        <div className="max-w-6xl mx-auto">
            <div className="codeBlockWrapper flex">
                <div className="codeBlockLeft w-1/2">
                    <textarea id="code"></textarea>
                </div>
            {/* <CodeMirror
                value={string}
                height="350px"
                theme="light"
                editable={false}
                extensions={[javascript()]}
            /> */}
            </div>
        </div>
    )
}

export default CodeEditor