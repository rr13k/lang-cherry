import { Completion, snippetCompletion as snip } from "@codemirror/autocomplete"
export const  domSnippet : readonly Completion[] = [
    snip("dom${}", {
        label: "dom",
        info: "class",
        detail: "",
        type: "class"
      }),
    
      snip("dom.get(`${}`)", {
        label: "dom.get",
        info: "get(sign:string)",
        detail: "",
        type: "method"
      }),
    
      snip("dom.getByText(`${}`)", {
        label: "dom.getByText",
        info: "getByText(text:string,index:int)",
        detail: "",
        type: "method"
      }),
    
      snip("dom.wait(`${}`)", {
        label: "dom.wait",
        info: "wait(sign:string,ms:int)",
        detail: "",
        type: "method"
      }),
      snip("dom.click(`${}`)", {
        label: "dom.click",
        info: "click()",
        detail: "",
        type: "method"
      }),
    
      snip("dom.set(`${}`)", {
        label: "dom.set",
        info: "set(value:string)",
        detail: "",
        type: "method"
      }),
    
      snip("dom.reSet(`${}`)", {
        label: "dom.reSet",
        info: "reSet(value:string)",
        detail: "",
        type: "method"
      }),
    
      snip("dom.clear(`${}`)", {
        label: "dom.clear",
        info: "clear()",
        detail: "",
        type: "method"
      }),
    
      snip("dom.upload(`${}`)", {
        label: "dom.upload",
        info: "upload(id:string,filePath:string)",
        detail: "",
        type: "method"
      }),
    
      snip("dom.selectText(${})", {
        label: "dom.selectText",
        info: "selectText(start:int,end:int)",
        detail: "",
        type: "method"
      }),
    
      snip("dom.getAttributes(`${}`)", {
        label: "dom.getAttributes",
        info: "getAttributes(name:string)",
        detail: "",
        type: "method"
      }),
    
      snip("dom.lineKeyOperation(`${}`)", {
        label: "dom.lineKeyOperation",
        info: "lineKeyOperation(key:string,rowKey:string,optKey:string)",
        detail: "",
        type: "method"
      }),
]