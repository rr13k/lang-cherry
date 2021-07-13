import { Completion, snippetCompletion as snip } from "@codemirror/autocomplete"
export const  mouseSnippet : readonly Completion[]= [
  snip("mouse${}", {
    label: "mouse",
    info: "class",
    detail: "",
    type: "class"
  }),

  snip("mouse.down(`${}`)", {
    label: "mouse.down",
    info: "down(options:{button?:string;clickCount?:number;})",
    detail: "",
    type: "method"
  }),

  snip("mouse.up(`${}`)", {
    label: "mouse.up",
    info: "up(options:{button?:string;clickCount?:number;})",
    detail: "",
    type: "method"
  }),

  snip("mouse.click(`${}`)", {
    label: "mouse.click",
    info: "click(x:number,y:number,options:{delay?:number;})",
    detail: "",
    type: "method"
  }),

  snip("mouse.move(`${}`)", {
    label: "mouse.move",
    info: "move(options:{button?:string;clickCount?:number;})",
    detail: "",
    type: "method"
  }),

  snip("mouse.wheel(`${}`)", {
    label: "mouse.wheel",
    info: "wheel(options:{button?:string;clickCount?:number;})",
    detail: "",
    type: "method"
  }),
  
]