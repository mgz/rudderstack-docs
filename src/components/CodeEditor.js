import React, { useEffect, useState } from "react"
/* import CodeMirror from "@uiw/react-codemirror"; */
import createMovie from "codemirror-movie"
/* import "codemirror/lib/codemirror.css" */

const CodeEditor = props => {

  let [editorFlag, setEditorFlag] = useState(false);

  const [leftEditorScenes, setLeftEditorScenes] = useState(null);
  const [rightEditorScenes, setRightEditorScenes] = useState(null);
  function replaceAll(str, find, replace) {
    var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
    return str.replace(new RegExp(escapedFind, "g"), replace)
  }


  useEffect(() => {
    const CodeMirror = require("codemirror/lib/codemirror")
    require("codemirror/mode/javascript/javascript")
    require("codemirror/mode/shell/shell")

    let leftEditor = CodeMirror.fromTextArea(document.getElementById("code"), {
      lineNumbers: props.code_input.line_number
        ? props.code_input.line_number
        : false,
      mode: props.code_input.language,
      readOnly: "nocursor",
      autofocus:/*  props.code_input.auto_focus
        ? props.code_input.auto_focus
        : */ false,
    })
    let rightEditor = CodeMirror.fromTextArea(
      document.getElementById("terminal"),
      {
        lineNumbers: props.code_output.line_number
          ? props.code_output.line_number
          : false,
        readOnly:"nocursor" /* props.code_output.ready_only
          ? props.code_output.ready_only
          : false */,
        lineWrapping: props.code_output.line_wrapping
          ? props.code_output.line_wrapping
          : false,
        mode: props.code_output.language,
        autofocus: /* props.code_output.auto_focus
          ? props.code_output.auto_focus
          :*/ false,
      }
    )

    setLeftEditorScenes(createMovie(leftEditor, scene => {
      let tmCodeInput = [];
      props.code_input.code_contents.forEach(ppp => {
        tmCodeInput.push(
          scene.type(
            replaceAll(replaceAll(ppp, "<<NEWLINE>>", `\n`), "<<TAB>>", `\t`),
            100
          )
        )
        tmCodeInput.push(scene.wait(200))
      })
      return [
        ...tmCodeInput,
        (editor, next, timer) => {
          timer(() => {
            rightEditorScenes.play()
          }, 50)
        },
      ]
    }));

    setRightEditorScenes(createMovie(rightEditor, scene => {
      let tmCodeOutput = []
      let tmpLineNumber = 1
      props.code_output.code_contents.forEach((ppp, idx) => {
        tmCodeOutput.push((editor, next, timer) => {
          editor.replaceRange(
            replaceAll(
              replaceAll(replaceAll(ppp, "<<NEWLINE>>", `\n`), "<<TAB>>", `\t`),
              "<<CURRDATETIME>>",
              `${new Date().toISOString()}`
            ),
            { line: tmpLineNumber, ch: 0 },
            { line: tmpLineNumber + 1 }
          )
          tmpLineNumber += 3
          timer(() => {
            next()
          }, 200)
        })
      })

      return [
        ...tmCodeOutput,

      ]
    }))

    let el = document.getElementById("codeEditorBlock")

    function isInViewPort(element) {
      // Get the bounding client rectangle position in the viewport
      let bounding = element.getBoundingClientRect()

      // Checking part. Here the code checks if it's *fully* visible
      // Edit this part if you just want a partial visibility
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        return true
      } else {
        return false
      }
    }

    window.addEventListener(
      "scroll",
      function (event) {
        if (isInViewPort(el)) {
          /* console.log('In viewport'); */
          setEditorFlag(true);
        }else{
          /* console.log('out of viewport'); */
          setEditorFlag(false);
        }
      }
    )
  }, [])

  useEffect(() => {
    /* console.log('Editor scene', leftEditorScenes); */
    if(leftEditorScenes && editorFlag){
      leftEditorScenes.play();
    }else if(leftEditorScenes){
      leftEditorScenes.pause();
    }
    /* console.log('Editor flag', editorFlag); */
  }, [editorFlag])

  return (
    <section className="py-19 relative section-gradient">
      <span className="section-border absolute top-0 left-0 w-full block"></span>
      <div className="max-w-6xl mx-auto md:w-full md:px-4" id="codeEditorBlock">
        <h3 className="font-bold text-4xl text-center text-darkScheme-textPrimary">
          {props.title}
        </h3>
        <div className="codeBlockWrapper mt-16 mb-10 flex">
          <div className="codeBlockLeft w-1/2">
            <div className="codeEditorFile">
              <div className="topEditorBlock flex">
                <div className="fileSwitchIcon flex">
                  <span className="fileSwitchIconLeft">
                    <svg
                      width="11"
                      height="13"
                      viewBox="0 0 11 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3062 6.65882L0.317916 12.4255L0.317917 0.892113L10.3062 6.65882Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="fileSwitchIconRight">
                    <svg
                      width="11"
                      height="13"
                      viewBox="0 0 11 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3062 6.65882L0.317916 12.4255L0.317917 0.892113L10.3062 6.65882Z"
                        fill="white"
                      />
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
