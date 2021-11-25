import React, {useEffect} from "react";
/* import CodeMirror from "@uiw/react-codemirror"; */
import createMovie from 'codemirror-movie';
/* import "codemirror/lib/codemirror.css" */


const CodeEditor = () => {

    let leftEditorScenes, rightEditorScenes = null;

    useEffect(() => {
        const CodeMirror = require('codemirror/lib/codemirror');
        require("codemirror/mode/javascript/javascript");
        require("codemirror/mode/shell/shell");

        let leftEditor = CodeMirror.fromTextArea(document.getElementById('code'), {
            lineNumbers: true,
            mode: "javascript",
            autofocus: false
        });
        let rightEditor = CodeMirror.fromTextArea(document.getElementById('terminal'),{
            lineNumbers: false,
            readOnly: true,
            lineWrapping: true,
            mode: "shell",
            autofocus: false
        });

        leftEditorScenes = createMovie(leftEditor, scene => [
            scene.type('rudderanalytics.track("Product Clicked", {\n\t', 100),
            scene.wait(200),
            scene.type(`sku: 'MTD-12',\n\t`, 100),
            scene.wait(200),
            scene.type(`brand: 'allbirds',\n\t`, 100),
            scene.wait(200),
            scene.type(`category: 'running',\n\t`, 100),
            scene.wait(200),
            scene.type(`price: 106.99\n`, 100),
            scene.wait(200),
            scene.type(`},\n\n`, 100),
            scene.wait(200),
            scene.type(`{\n\t`, 100),
            scene.wait(200),
            scene.type(`integrations: {\n\t\t`, 100),
            scene.wait(200),
            scene.type(`All: false,\n\t\t`, 100),
            scene.wait(200),
            scene.type(`Snowflake: true,\n\t\t`, 100),
            scene.wait(200),
            scene.type(`"Google Analytics": true,\n\t\t`, 100),
            scene.wait(200),
            scene.type(`Amplitude: true,\n\t\t`, 100),
            scene.wait(200),
            scene.type(`Klaviyo: true,\n\t\t`, 100),
            scene.wait(200),
            scene.type(`Redis: true,\n\t`, 100),
            scene.wait(200),
            scene.type(`}\n`, 100),
            scene.wait(200),
            scene.type(`});`, 100),
            (editor, next, timer) => {
                timer(() => {
                    rightEditorScenes.play();
                }, 50)
            }
        ])


        rightEditorScenes = createMovie(rightEditor, scene => [
            (editor, next, timer) => {
                editor.replaceRange(`Snowflake: {"response": "200", \n\t "firstAttemptedAt": "${new Date().toISOString()}"}\n\n`, {line: 1, ch:0}, {line: 2});
                timer(() => {
                    next();
                }, 200)
            },
            (editor, next, timer) => {
                editor.replaceRange(`"Google Analytics": {"response": "200",\n\t "firstAttemptedAt": "${new Date().toISOString()}"}\n\n`,{line: 4, ch:0}, {line: 5});
                timer(() => {
                    next();
                }, 100)
            },
            (editor, next, timer) => {
                editor.replaceRange(`Amplitude: {"response": "200",\n\t "firstAttemptedAt": "${new Date().toISOString()}"}\n\n`,{line: 7, ch:0}, {line: 8});
                timer(() => {
                    next();
                }, 100)
            },
            (editor, next, timer) => {
                editor.replaceRange(`Klaviyo: {"response": "200",\n\t "firstAttemptedAt": "${new Date().toISOString()}"}\n\n`,{line: 10, ch:0}, {line: 11});
                timer(() => {
                    next();
                }, 100)
            },
            (editor, next, timer) => {
                editor.replaceRange(`Redis: {"response": "200",\n\t "firstAttemptedAt": "${new Date().toISOString()}"}`,{line: 13, ch:0}, {line: 14});
                timer(() => {
                    next();
                }, 100)
            }
        ]);

        let options = {
            root: document.getElementById('codeEditorBlock'),
            rootMargin: '0px',
            threshold: 1.0
        }

        let observer = new IntersectionObserver(() => leftEditorScenes.play(), options);
        let target = document.getElementById('code');
        observer.observe(target);

        if(window !== undefined){
            window.scroll(() => {
                leftEditorScenes.pause();
                rightEditorScenes.pause();
            })
        }

    }, [])


    return(
        <section className="py-19 relative section-gradient">
            <span className="section-border absolute top-0 left-0 w-full block"></span>
            <div className="max-w-6xl mx-auto" id="codeEditorBlock">
                <h3 className="font-bold text-4xl text-center text-darkScheme-textPrimary">Install a SDK and Start Sending Data Today</h3>
                <div className="codeBlockWrapper mt-16 mb-10 flex">
                    <div className="codeBlockLeft w-1/2">
                        <div className="codeEditorFile">
                            <div className="topEditorBlock flex">
                                <div className="fileSwitchIcon flex">
                                    <span className="fileSwitchIconLeft">
                                        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3062 6.65882L0.317916 12.4255L0.317917 0.892113L10.3062 6.65882Z" fill="white"/>
                                        </svg>
                                    </span>
                                    <span className="fileSwitchIconRight">
                                        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3062 6.65882L0.317916 12.4255L0.317917 0.892113L10.3062 6.65882Z" fill="white"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="fileNameBlock">
                                    <span className="editOn"></span>
                                </div>
                            </div>
                            <textarea id="code"></textarea>
                        </div>
                    </div>
                    <div className="codeBlockRight w-1/2">
                        <div className="codeEditorFile">
                            <textarea id="terminal"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <span className="section-border absolute bottom-0 left-0 w-full block"></span>
        </section>
    )
}

export default CodeEditor