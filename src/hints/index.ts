import { Completion } from "@codemirror/autocomplete"
import { javaScriptSnippet } from "./javaScript";
import { domSnippet } from "./dom";
import { pageSnippet } from "./page";
import { mouseSnippet } from "./mouse";
import { keyBoardSnippet } from "./keyboard";
import { commonSnippet } from "./common";
import { assertSnippet } from "./assert";

export const allSnippet : readonly Completion[] = [
    ...javaScriptSnippet, 
    ...domSnippet,
    ...pageSnippet,
    ...mouseSnippet,
    ...keyBoardSnippet,
    ...commonSnippet,
    ...assertSnippet
]