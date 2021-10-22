
import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import { cherry } from 'codemirror-lang-cherry'
// import { cherry } from '../dist'  // 注意: 无法打包本地测试，需要发布npm 下载测试
// 这个问题应该是webpack 导致的，测试将文件上发后测试

console.log('cherry',cherry())
// console.log('javascript',javascript())

let state = EditorState.create({doc: 'console.log("Hello world")', extensions: [
  basicSetup,
  cherry(),
]})

;(window as any).view = new EditorView({state, parent: document.querySelector("#editor")!})