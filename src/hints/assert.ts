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
    info: "custom(sign:string,imput:string,value:string,operate:int)",
    detail: "",
    type: "method"
  }),

  snip("assert.title(`${}`)", {
    label: "assert.title",
    info: "title(sign:string)",
    detail: "",
    type: "method"
  }),

  snip("assert.location(`${}`)", {
    label: "assert.location",
    info: "location(url:string)",
    detail: "",
    type: "method"
  }),

]
