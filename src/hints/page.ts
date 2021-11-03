import { Completion, snippetCompletion as snip } from "@codemirror/autocomplete"
export const  pageSnippet : readonly Completion[]= [
  snip("page${}", {
    label: "page",
    info: "class",
    detail: "",
    type: "class"
  }),

  snip("page.to(`${}`)", {
    label: "page.to",
    info: "to(url:string)",
    detail: "",
    type: "method"
  }),

  snip("page.getURL(`${}`)", {
    label: "page.getURL",
    info: "getURL()",
    detail: "",
    type: "method"
  }),

  snip("page.create(`${}`)", {
    label: "page.create",
    info: "create(url:string)",
    detail: "",
    type: "method"
  }),

  snip("page.back(`${}`)", {
    label: "page.back",
    info: "back()",
    detail: "",
    type: "method"
  }),

  snip("page.forward(`${}`)", {
    label: "page.forward",
    info: "forward()",
    detail: "",
    type: "method"
  }),

  snip("page.refresh(`${}`)", {
    label: "page.refresh",
    info: "refresh()",
    detail: "",
    type: "method"
  }),

  snip("page.delete(${})", {
    label: "page.delete",
    info: "delete(index:int)",
    detail: "",
    type: "method"
  }),

  snip("page.change(${})", {
    label: "page.change",
    info: "change(index:int)",
    detail: "",
    type: "method"
  }),

  snip("page.changeIframe(${})", {
    label: "page.changeIframe",
    info: "changeIframe(index:int)",
    detail: "",
    type: "method"
  }),

  snip("page.screenshot(${})", {
    label: "page.screenshot",
    info: "screenshot(filepath:string)",
    detail: "",
    type: "method"
  }),

]