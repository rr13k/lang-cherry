import {Completion, snippetCompletion as snip} from "@codemirror/autocomplete"

/// A collection of JavaScript-related
/// [snippets](#autocomplete.snippet).
export const snippets: readonly Completion[] = [
  snip("function ${name}(${params}) {\n\t${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  snip("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  snip("for (let ${name} of ${collection}) {\n\t${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  snip("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
    label: "try",
    detail: "block",
    type: "keyword"
  }),
  snip("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  snip("import {${names}} from \"${module}\"\n${}", {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  snip("import ${name} from \"${module}\"\n${}", {
    label: "import",
    detail: "default",
    type: "keyword"
  }),

  snip("await ", {
    label: "await",
    detail: "",
    type: "keyword"
  }),
  snip("async ", {
    label: "async",
    detail: "",
    type: "keyword"
  }),

  snip("execJavaScript(`${}`) ", {
    label: "execJavaScript",
    detail: "",
    type: "method"
  }),
  snip("sleep(${}) ", {
    label: "sleep(ms)",
    info:function sleep(){
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
    info:"提示信息",
    detail: "",
    type: "method"
  }),

  snip("page${}", {
    label: "page",
    info:"class",
    detail: "",
    type: "class"
  }),

  snip("page.to(`${}`)", {
    label: "page.to",
    info:"to(url:string)",
    detail: "",
    type: "method"
  }),

]
