"use strict";

import * as vscode from "vscode";

export const EML_MODE: vscode.DocumentFilter = {
  language: "eml",
  scheme: "file"
};

export class EmailHoverProvider implements vscode.HoverProvider {
  public provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): Thenable<vscode.Hover> {
    return new Promise((res, rej) => {
      new vscode.Hover("This is a hover!");
    });
  }
}
