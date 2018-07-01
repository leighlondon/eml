import {
  DocumentFilter,
  HoverProvider,
  TextDocument,
  Position,
  CancellationToken,
  Hover,
  workspace
} from "vscode";

export const EML_FILTER: DocumentFilter = { language: "eml", scheme: "file" };

export class EmailHoverProvider implements HoverProvider {
  public provideHover(
    document: TextDocument,
    position: Position,
    _token: CancellationToken
  ): Promise<Hover> {
    let on = workspace.getConfiguration("eml").get<boolean>("eml.hover", true);
    if (!on) return Promise.reject("setting not enabled");
    let range = document.getWordRangeAtPosition(position);
    if (!range) return Promise.reject("no range found");
    let text = document.getText(range);
    return Promise.resolve(new Hover(text));
  }
}
