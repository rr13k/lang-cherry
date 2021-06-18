import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {cherry} from "../src/index"

let state = EditorState.create({doc: 'console.log("Hello world")', extensions: [
  basicSetup,
  cherry(),
]})

;(window as any).view = new EditorView({state, parent: document.querySelector("#editor")!})