import { Completion, snippetCompletion as snip } from "@codemirror/autocomplete"
export const  keyBoardSnippet : readonly Completion[]= [

  snip("keyboard${}", {
    label: "keyboard",
    info: "class",
    detail: "",
    type: "class"
  }),

  snip("keyboard.press(`${}`)", {
    label: "keyboard.press",
    info: "press(keyCode:string)",
    detail: "",
    type: "method"
  }),

  snip("keyboard.down(`${}`)", {
    label: "keyboard.down",
    info: "down(keyCode:string)",
    detail: "",
    type: "method"
  }),
  
  snip("keyboard.up(`${}`)", {
    label: "keyboard.up",
    info: "up(keyCode:string)",
    detail: "",
    type: "method"
  }),

  snip("keyboard.type(`${}`)", {
    label: "keyboard.type",
    info: "type(keyCode:string)",
    detail: "",
    type: "method"
  }),
  
]