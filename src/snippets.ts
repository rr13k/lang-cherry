import { Completion, snippetCompletion as snip } from "@codemirror/autocomplete"
import { allSnippet } from "./hints"

/// A collection of JavaScript-related
/// [snippets](#autocomplete.snippet).
export const snippets: readonly Completion[] = [
  ...allSnippet,
]
