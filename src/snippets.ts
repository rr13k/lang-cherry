import { Completion, snippetCompletion as snip } from "@codemirror/autocomplete"

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
  snip("if (condition) {\n\t${}\n}", {
    label: "if",
    detail: "if condition",
    type: "keyword"
  }),
  snip("if (condition) {\n\t${}\n} else{\n\t\n}", {
    label: "ifelse",
    detail: "ifelse",
    type: "keyword"
  }),
  snip("switch (key) {\n\tcase value:\n\t\t${}\n\t\tbreak;\n\n\tdefault:\n\t\tbreak;\n}", {
    label: "switch",
    detail: "switch case",
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
  snip('console.log("${}")', {
    label: "console",
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
  snip("abstract ", {
    label: "abstract",
    detail: "",
    type: "keyword"
  }),
  snip("arguments ", {
    label: "arguments",
    detail: "",
    type: "keyword"
  }),
  snip("boolean ", {
    label: "boolean",
    detail: "",
    type: "keyword"
  }),
  snip("break ", {
    label: "break",
    detail: "",
    type: "keyword"
  }),
  snip("byte ", {
    label: "byte",
    detail: "",
    type: "keyword"
  }),
  snip("case ", {
    label: "case",
    detail: "",
    type: "keyword"
  }),
  snip("catch ", {
    label: "catch",
    detail: "",
    type: "keyword"
  }),
  snip("char ", {
    label: "char",
    detail: "",
    type: "keyword"
  }),
  snip("class ", {
    label: "class",
    detail: "",
    type: "keyword"
  }),
  snip("const ", {
    label: "const",
    detail: "",
    type: "keyword"
  }),
  snip("continue ", {
    label: "continue",
    detail: "",
    type: "keyword"
  }),
  snip("debugger ", {
    label: "debugger",
    detail: "",
    type: "keyword"
  }),
  snip("default ", {
    label: "default",
    detail: "",
    type: "keyword"
  }),
  snip("delete ", {
    label: "delete",
    detail: "",
    type: "keyword"
  }),
  snip("do ", {
    label: "do",
    detail: "",
    type: "keyword"
  }),
  snip("double ", {
    label: "double",
    detail: "",
    type: "keyword"
  }),
  snip("else ", {
    label: "else",
    detail: "",
    type: "keyword"
  }),
  snip("enum ", {
    label: "enum",
    detail: "",
    type: "keyword"
  }),
  snip("eval ", {
    label: "eval",
    detail: "",
    type: "keyword"
  }),
  snip("export ", {
    label: "export",
    detail: "",
    type: "keyword"
  }),
  snip("extends ", {
    label: "extends",
    detail: "",
    type: "keyword"
  }),
  snip("false ", {
    label: "false",
    detail: "",
    type: "keyword"
  }),
  snip("final ", {
    label: "final",
    detail: "",
    type: "keyword"
  }),
  snip("finally ", {
    label: "finally",
    detail: "",
    type: "keyword"
  }),
  snip("float ", {
    label: "float",
    detail: "",
    type: "keyword"
  }),
  snip("for ", {
    label: "for",
    detail: "",
    type: "keyword"
  }),
  snip("function ", {
    label: "function",
    detail: "",
    type: "keyword"
  }),
  snip("goto ", {
    label: "goto",
    detail: "",
    type: "keyword"
  }),
  snip("if ", {
    label: "if",
    detail: "",
    type: "keyword"
  }),
  snip("implements ", {
    label: "implements",
    detail: "",
    type: "keyword"
  }),
  snip("import ", {
    label: "import",
    detail: "",
    type: "keyword"
  }),
  snip("in ", {
    label: "in",
    detail: "",
    type: "keyword"
  }),
  snip("instanceof ", {
    label: "instanceof",
    detail: "",
    type: "keyword"
  }),
  snip("int ", {
    label: "int",
    detail: "",
    type: "keyword"
  }),
  snip("interface ", {
    label: "interface",
    detail: "",
    type: "keyword"
  }),
  snip("let ", {
    label: "let",
    detail: "",
    type: "keyword"
  }),
  snip("long ", {
    label: "long",
    detail: "",
    type: "keyword"
  }),
  snip("native ", {
    label: "native",
    detail: "",
    type: "keyword"
  }),
  snip("new ", {
    label: "new",
    detail: "",
    type: "keyword"
  }),
  snip("null ", {
    label: "null",
    detail: "",
    type: "keyword"
  }),
  snip("package ", {
    label: "package",
    detail: "",
    type: "keyword"
  }),
  snip("private ", {
    label: "private",
    detail: "",
    type: "keyword"
  }),
  snip("protected ", {
    label: "protected",
    detail: "",
    type: "keyword"
  }),
  snip("public ", {
    label: "public",
    detail: "",
    type: "keyword"
  }),
  snip("return ", {
    label: "return",
    detail: "",
    type: "keyword"
  }),
  snip("short ", {
    label: "short",
    detail: "",
    type: "keyword"
  }),
  snip("static ", {
    label: "static",
    detail: "",
    type: "keyword"
  }),
  snip("super ", {
    label: "super",
    detail: "",
    type: "keyword"
  }),
  snip("switch ", {
    label: "switch",
    detail: "",
    type: "keyword"
  }),
  snip("synchronized ", {
    label: "synchronized",
    detail: "",
    type: "keyword"
  }),
  snip("this ", {
    label: "this",
    detail: "",
    type: "keyword"
  }),
  snip("throw ", {
    label: "throw",
    detail: "",
    type: "keyword"
  }),
  snip("throws ", {
    label: "throws",
    detail: "",
    type: "keyword"
  }),
  snip("transient ", {
    label: "transient",
    detail: "",
    type: "keyword"
  }),
  snip("true ", {
    label: "true",
    detail: "",
    type: "keyword"
  }),
  snip("try ", {
    label: "try",
    detail: "",
    type: "keyword"
  }),
  snip("typeof ", {
    label: "typeof",
    detail: "",
    type: "keyword"
  }),
  snip("var ", {
    label: "var",
    detail: "",
    type: "keyword"
  }),
  snip("void ", {
    label: "void",
    detail: "",
    type: "keyword"
  }),
  snip("volatile ", {
    label: "volatile",
    detail: "",
    type: "keyword"
  }),
  snip("while ", {
    label: "while",
    detail: "",
    type: "keyword"
  }),
  snip("with ", {
    label: "with",
    detail: "",
    type: "keyword"
  }),
  snip("yield ", {
    label: "yield",
    detail: "",
    type: "keyword"
  }),

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
    info: "提示信息",
    detail: "",
    type: "method"
  }),

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

  snip("page.create(`${}`)", {
    label: "page.create",
    info: "create(url:string)",
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
