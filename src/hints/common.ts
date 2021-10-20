import { Completion, snippetCompletion as snip } from "@codemirror/autocomplete"
export const commonSnippet: readonly Completion[] = [
    snip("execJavaScript(`${}`) ", {
        label: "execJavaScript",
        detail: "",
        type: "method"
    }),

    snip("openBrowser(`${}`) ", {
        label: "openBrowser",
        info: "openBrowser(url:string)",
        detail: "",
        type: "method"
    }),

    snip("sleep(${}) ", {
        label: "sleep(ms)",
        info: function sleep() {
            let hint = document.createElement('span')
            hint.style.fontSize = '12px'
            hint.style.color = 'rgb(148 148 148)'
            hint.innerText = '# 休眠(ms)'
            return hint
        },
        detail: ":void",
        type: "method"
    }),

    snip("hint(`${}`) ", {
        label: "hint",
        info: "hit(text:string,type:string)",
        detail: "",
        type: "method"
    }),

    snip("getDoms(`${}`) ", {
        label: "getDoms",
        info: "getDoms(sign:string,index:int)",
        detail: "",
        type: "method"
    }),


]