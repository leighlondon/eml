import {
  DocumentFilter,
  HoverProvider,
  TextDocument,
  Position,
  CancellationToken,
  Hover,
  workspace
} from "vscode"

export const EML_FILTER: DocumentFilter = { language: "eml", scheme: "file" }

export class EmailHoverProvider implements HoverProvider {
  public provideHover(
    document: TextDocument,
    position: Position,
    _token: CancellationToken
  ): Thenable<Hover> {
    let on = workspace.getConfiguration("eml").get<boolean>("eml.hover", true)
    if (!on) return undefined
    let range = document.getWordRangeAtPosition(position)
    if (!range) return undefined
    let text = document.getText(range)
    return Promise.resolve(new Hover(text))
  }
}
