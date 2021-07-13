import { Completion, snippetCompletion as snip } from "@codemirror/autocomplete"

export const assertSnippet: readonly Completion[] = [

  snip("assert${}", {
    label: "assert",
    info: "class",
    detail: "",
    type: "class"
  }),

  snip("assert.all(`${}`)", {
    label: "assert.all",
    info: "all(text:string)",
    detail: "",
    type: "method"
  }),

  snip("assert.custom(`${}`)", {
    label: "assert.custom",
    info: "custom(type:string,dom:string,operate:int,result:int)",
    detail: "",
    type: "method"
  }),

]
