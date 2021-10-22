import { parser } from '@lezer/javascript';
import { LRLanguage, indentNodeProp, continuedIndent, flatIndent, delimitedIndent, foldNodeProp, foldInside, LanguageSupport } from '@codemirror/language';
import { styleTags, tags } from '@codemirror/highlight';
import { snippetCompletion, ifNotIn, completeFromList } from '@codemirror/autocomplete';

const javaScriptSnippet = [
    /*@__PURE__*/snippetCompletion("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("if (condition) {\n\t${}\n}", {
        label: "if",
        detail: "if condition",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("if (condition) {\n\t${}\n} else{\n\t\n}", {
        label: "ifelse",
        detail: "ifelse",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("switch (key) {\n\tcase value:\n\t\t${}\n\t\tbreak;\n\n\tdefault:\n\t\tbreak;\n}", {
        label: "switch",
        detail: "switch case",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "block",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("import {${names}} from \"${module}\"\n${}", {
        label: "import",
        detail: "named",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("import ${name} from \"${module}\"\n${}", {
        label: "import",
        detail: "default",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion('console.log("${}")', {
        label: "console",
        detail: "default",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("await ", {
        label: "await",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("async ", {
        label: "async",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("abstract ", {
        label: "abstract",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("arguments ", {
        label: "arguments",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("boolean ", {
        label: "boolean",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("break ", {
        label: "break",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("byte ", {
        label: "byte",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("case ", {
        label: "case",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("catch ", {
        label: "catch",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("char ", {
        label: "char",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("class ", {
        label: "class",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("const ", {
        label: "const",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("continue ", {
        label: "continue",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("debugger ", {
        label: "debugger",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("default ", {
        label: "default",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("delete ", {
        label: "delete",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("do ", {
        label: "do",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("double ", {
        label: "double",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("else ", {
        label: "else",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("enum ", {
        label: "enum",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("eval ", {
        label: "eval",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("export ", {
        label: "export",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("extends ", {
        label: "extends",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("false ", {
        label: "false",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("final ", {
        label: "final",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("finally ", {
        label: "finally",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("float ", {
        label: "float",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("for ", {
        label: "for",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("function ", {
        label: "function",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("goto ", {
        label: "goto",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("if ", {
        label: "if",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("implements ", {
        label: "implements",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("import ", {
        label: "import",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("in ", {
        label: "in",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("instanceof ", {
        label: "instanceof",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("int ", {
        label: "int",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("interface ", {
        label: "interface",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("let ", {
        label: "let",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("long ", {
        label: "long",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("native ", {
        label: "native",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("new ", {
        label: "new",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("null ", {
        label: "null",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("package ", {
        label: "package",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("private ", {
        label: "private",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("protected ", {
        label: "protected",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("public ", {
        label: "public",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("return ", {
        label: "return",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("short ", {
        label: "short",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("static ", {
        label: "static",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("super ", {
        label: "super",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("switch ", {
        label: "switch",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("synchronized ", {
        label: "synchronized",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("this ", {
        label: "this",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("throw ", {
        label: "throw",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("throws ", {
        label: "throws",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("transient ", {
        label: "transient",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("true ", {
        label: "true",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("try ", {
        label: "try",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("typeof ", {
        label: "typeof",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("var ", {
        label: "var",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("void ", {
        label: "void",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("volatile ", {
        label: "volatile",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("while ", {
        label: "while",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("with ", {
        label: "with",
        detail: "",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("yield ", {
        label: "yield",
        detail: "",
        type: "keyword"
    }),
];

const domSnippet = [
    /*@__PURE__*/snippetCompletion("dom${}", {
        label: "dom",
        info: "class",
        detail: "",
        type: "class"
    }),
    /*@__PURE__*/snippetCompletion("dom.get(`${}`)", {
        label: "dom.get",
        info: "get(sign:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.exist(`${}`)", {
        label: "dom.exist",
        info: "exist(sign:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.getByText(`${}`)", {
        label: "dom.getByText",
        info: "getByText(text:string,index:int)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.wait(`${}`)", {
        label: "dom.wait",
        info: "wait(sign:string,ms:int)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.click(`${}`)", {
        label: "dom.click",
        info: "click()",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.set(`${}`)", {
        label: "dom.set",
        info: "set(value:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.reSet(`${}`)", {
        label: "dom.reSet",
        info: "reSet(value:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.clear(`${}`)", {
        label: "dom.clear",
        info: "clear()",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.upload(`${}`)", {
        label: "dom.upload",
        info: "upload(id:string,filePath:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.selectText(${})", {
        label: "dom.selectText",
        info: "selectText(start:int,end:int)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.getAttributes(`${}`)", {
        label: "dom.getAttributes",
        info: "getAttributes(name:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("dom.lineKeyOperation(`${}`)", {
        label: "dom.lineKeyOperation",
        info: "lineKeyOperation(key:string,rowKey:string,optKey:string)",
        detail: "",
        type: "method"
    }),
];

const pageSnippet = [
    /*@__PURE__*/snippetCompletion("page${}", {
        label: "page",
        info: "class",
        detail: "",
        type: "class"
    }),
    /*@__PURE__*/snippetCompletion("page.to(`${}`)", {
        label: "page.to",
        info: "to(url:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("page.create(`${}`)", {
        label: "page.create",
        info: "create(url:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("page.back(`${}`)", {
        label: "page.back",
        info: "back()",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("page.forward(`${}`)", {
        label: "page.forward",
        info: "forward()",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("page.refresh(`${}`)", {
        label: "page.refresh",
        info: "refresh()",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("page.delete(${})", {
        label: "page.delete",
        info: "delete(index:int)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("page.change(${})", {
        label: "page.change",
        info: "change(index:int)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("page.changeIframe(${})", {
        label: "page.changeIframe",
        info: "changeIframe(index:int)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("page.screenshot(${})", {
        label: "page.screenshot",
        info: "screenshot(filepath:string)",
        detail: "",
        type: "method"
    }),
];

const mouseSnippet = [
    /*@__PURE__*/snippetCompletion("mouse${}", {
        label: "mouse",
        info: "class",
        detail: "",
        type: "class"
    }),
    /*@__PURE__*/snippetCompletion("mouse.down(`${}`)", {
        label: "mouse.down",
        info: "down(options:{button?:string;clickCount?:number;})",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("mouse.up(`${}`)", {
        label: "mouse.up",
        info: "up(options:{button?:string;clickCount?:number;})",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("mouse.click(`${}`)", {
        label: "mouse.click",
        info: "click(x:number,y:number,options:{delay?:number;})",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("mouse.move(`${}`)", {
        label: "mouse.move",
        info: "move(options:{button?:string;clickCount?:number;})",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("mouse.wheel(`${}`)", {
        label: "mouse.wheel",
        info: "wheel(options:{button?:string;clickCount?:number;})",
        detail: "",
        type: "method"
    }),
];

const keyBoardSnippet = [
    /*@__PURE__*/snippetCompletion("keyboard${}", {
        label: "keyboard",
        info: "class",
        detail: "",
        type: "class"
    }),
    /*@__PURE__*/snippetCompletion("keyboard.press(`${}`)", {
        label: "keyboard.press",
        info: "press(keyCode:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("keyboard.down(`${}`)", {
        label: "keyboard.down",
        info: "down(keyCode:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("keyboard.up(`${}`)", {
        label: "keyboard.up",
        info: "up(keyCode:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("keyboard.type(`${}`)", {
        label: "keyboard.type",
        info: "type(keyCode:string)",
        detail: "",
        type: "method"
    }),
];

const commonSnippet = [
    /*@__PURE__*/snippetCompletion("execJavaScript(`${}`) ", {
        label: "execJavaScript",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("openBrowser(`${}`) ", {
        label: "openBrowser",
        info: "openBrowser(url:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("sleep(${}) ", {
        label: "sleep(ms)",
        info: function sleep() {
            let hint = document.createElement('span');
            hint.style.fontSize = '12px';
            hint.style.color = 'rgb(148 148 148)';
            hint.innerText = '# 休眠(ms)';
            return hint;
        },
        detail: ":void",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("hint(`${}`) ", {
        label: "hint",
        info: "hit(text:string,type:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("getDoms(`${}`) ", {
        label: "getDoms",
        info: "getDoms(sign:string,index:int)",
        detail: "",
        type: "method"
    }),
];

const assertSnippet = [
    /*@__PURE__*/snippetCompletion("assert${}", {
        label: "assert",
        info: "class",
        detail: "",
        type: "class"
    }),
    /*@__PURE__*/snippetCompletion("assert.all(`${}`)", {
        label: "assert.all",
        info: "all(text:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("assert.custom(`${}`)", {
        label: "assert.custom",
        info: "custom(sign:string,imput:string,value:string,operate:int)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("assert.title(`${}`)", {
        label: "assert.title",
        info: "title(sign:string)",
        detail: "",
        type: "method"
    }),
    /*@__PURE__*/snippetCompletion("assert.location(`${}`)", {
        label: "assert.location",
        info: "location(url:string)",
        detail: "",
        type: "method"
    }),
];

const allSnippet = [
    ...javaScriptSnippet,
    ...domSnippet,
    ...pageSnippet,
    ...mouseSnippet,
    ...keyBoardSnippet,
    ...commonSnippet,
    ...assertSnippet
];

/// A collection of JavaScript-related
/// [snippets](#autocomplete.snippet).
const snippets = [
    ...allSnippet,
];

/// A language provider based on the [Lezer JavaScript
/// parser](https://github.com/lezer-parser/javascript), extended with
/// highlighting and indentation information.
const javascriptLanguage = /*@__PURE__*/LRLanguage.define({
    parser: /*@__PURE__*/parser.configure({
        props: [
            /*@__PURE__*/indentNodeProp.add({
                IfStatement: /*@__PURE__*/continuedIndent({ except: /^\s*({|else\b)/ }),
                TryStatement: /*@__PURE__*/continuedIndent({ except: /^\s*({|catch\b|finally\b)/ }),
                LabeledStatement: flatIndent,
                SwitchBody: context => {
                    let after = context.textAfter, closed = /^\s*\}/.test(after), isCase = /^\s*(case|default)\b/.test(after);
                    return context.baseIndent + (closed ? 0 : isCase ? 1 : 2) * context.unit;
                },
                Block: /*@__PURE__*/delimitedIndent({ closing: "}" }),
                ArrowFunction: cx => cx.baseIndent + cx.unit,
                "TemplateString BlockComment": () => -1,
                "Statement Property": /*@__PURE__*/continuedIndent({ except: /^{/ }),
                JSXElement(context) {
                    let closed = /^\s*<\//.test(context.textAfter);
                    return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
                },
                JSXEscape(context) {
                    let closed = /\s*\}/.test(context.textAfter);
                    return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
                },
                "JSXOpenTag JSXSelfClosingTag"(context) {
                    return context.column(context.node.from) + context.unit;
                }
            }),
            /*@__PURE__*/foldNodeProp.add({
                "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression": foldInside,
                BlockComment(tree) { return { from: tree.from + 2, to: tree.to - 2 }; }
            }),
            /*@__PURE__*/styleTags({
                "get set async static": tags.modifier,
                "for while do if else switch try catch finally return throw break continue default case": tags.controlKeyword,
                "in of await yield void typeof delete instanceof": tags.operatorKeyword,
                "export import let var const function class extends": tags.definitionKeyword,
                "with debugger from as new": tags.keyword,
                TemplateString: /*@__PURE__*/tags.special(tags.string),
                Super: tags.atom,
                BooleanLiteral: tags.bool,
                this: tags.self,
                null: tags.null,
                Star: tags.modifier,
                VariableName: tags.variableName,
                "CallExpression/VariableName": /*@__PURE__*/tags.function(tags.variableName),
                VariableDefinition: /*@__PURE__*/tags.definition(tags.variableName),
                Label: tags.labelName,
                PropertyName: tags.propertyName,
                "CallExpression/MemberExpression/PropertyName": /*@__PURE__*/tags.function(tags.propertyName),
                "FunctionDeclaration/VariableDefinition": /*@__PURE__*/tags.function(/*@__PURE__*/tags.definition(tags.variableName)),
                "ClassDeclaration/VariableDefinition": /*@__PURE__*/tags.definition(tags.className),
                PropertyNameDefinition: /*@__PURE__*/tags.definition(tags.propertyName),
                UpdateOp: tags.updateOperator,
                LineComment: tags.lineComment,
                BlockComment: tags.blockComment,
                Number: tags.number,
                String: tags.string,
                ArithOp: tags.arithmeticOperator,
                LogicOp: tags.logicOperator,
                BitOp: tags.bitwiseOperator,
                CompareOp: tags.compareOperator,
                RegExp: tags.regexp,
                Equals: tags.definitionOperator,
                "Arrow : Spread": tags.punctuation,
                "( )": tags.paren,
                "[ ]": tags.squareBracket,
                "{ }": tags.brace,
                ".": tags.derefOperator,
                ", ;": tags.separator,
                TypeName: tags.typeName,
                TypeDefinition: /*@__PURE__*/tags.definition(tags.typeName),
                "type enum interface implements namespace module declare": tags.definitionKeyword,
                "abstract global privacy readonly override": tags.modifier,
                "is keyof unique infer": tags.operatorKeyword,
                JSXAttributeValue: tags.attributeValue,
                JSXText: tags.content,
                "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": tags.angleBracket,
                "JSXIdentifier JSXNameSpacedName": tags.tagName,
                "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": tags.attributeName
            })
        ]
    }),
    languageData: {
        closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
        commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
        indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
        wordChars: "$"
    }
});
/// A language provider for TypeScript.
const typescriptLanguage = /*@__PURE__*/javascriptLanguage.configure({ dialect: "ts" });
/// Language provider for JSX.
const jsxLanguage = /*@__PURE__*/javascriptLanguage.configure({ dialect: "jsx" });
/// Language provider for JSX + TypeScript.
const tsxLanguage = /*@__PURE__*/javascriptLanguage.configure({ dialect: "jsx ts" });
/// JavaScript support. Includes [snippet](#lang-javascript.snippets)
/// completion.
function cherry(config = {}) {
    let lang = config.jsx ? (config.typescript ? tsxLanguage : jsxLanguage)
        : config.typescript ? typescriptLanguage : javascriptLanguage;
    return new LanguageSupport(lang, javascriptLanguage.data.of({
        autocomplete: ifNotIn(["LineComment", "BlockComment", "String"], completeFromList(snippets))
    }));
}

/// Connects an [ESLint](https://eslint.org/) linter to CodeMirror's
/// [lint](#lint) integration. `eslint` should be an instance of the
/// [`Linter`](https://eslint.org/docs/developer-guide/nodejs-api#linter)
/// class, and `config` an optional ESLint configuration. The return
/// value of this function can be passed to [`linter`](#lint.linter)
/// to create a JavaScript linting extension.
///
/// Note that ESLint targets node, and is tricky to run in the
/// browser. The [eslint4b](https://github.com/mysticatea/eslint4b)
/// and
/// [eslint4b-prebuilt](https://github.com/marijnh/eslint4b-prebuilt/)
/// packages may help with that.
function esLint(eslint, config) {
    if (!config) {
        config = {
            parserOptions: { ecmaVersion: 2019, sourceType: "module" },
            env: { browser: true, node: true, es6: true, es2015: true, es2017: true, es2020: true },
            rules: {}
        };
        eslint.getRules().forEach((desc, name) => {
            if (desc.meta.docs.recommended)
                config.rules[name] = 2;
        });
    }
    return (view) => {
        let { state } = view, found = [];
        for (let { from, to } of javascriptLanguage.findRegions(state)) {
            let fromLine = state.doc.lineAt(from), offset = { line: fromLine.number - 1, col: from - fromLine.from, pos: from };
            for (let d of eslint.verify(state.sliceDoc(from, to), config))
                found.push(translateDiagnostic(d, state.doc, offset));
        }
        return found;
    };
}
function mapPos(line, col, doc, offset) {
    return doc.line(line + offset.line).from + col + (line == 1 ? offset.col - 1 : -1);
}
function translateDiagnostic(input, doc, offset) {
    let start = mapPos(input.line, input.column, doc, offset);
    let result = {
        from: start,
        to: input.endLine != null && input.endColumn != 1 ? mapPos(input.endLine, input.endColumn, doc, offset) : start,
        message: input.message,
        source: input.ruleId ? "jshint:" + input.ruleId : "jshint",
        severity: input.severity == 1 ? "warning" : "error",
    };
    if (input.fix) {
        let { range, text } = input.fix, from = range[0] + offset.pos - start, to = range[1] + offset.pos - start;
        result.actions = [{
                name: "fix",
                apply(view, start) {
                    view.dispatch({ changes: { from: start + from, to: start + to, insert: text }, scrollIntoView: true });
                }
            }];
    }
    return result;
}

export { cherry, esLint, javascriptLanguage, jsxLanguage, snippets, tsxLanguage, typescriptLanguage };
