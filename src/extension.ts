"use strict";

import * as vscode from "vscode";

const EML_MODE: vscode.DocumentFilter = { language: "eml", scheme: "file" };

class EmlHoverProvider implements vscode.HoverProvider {
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

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "eml" is now active! test');

  let commands: Array<vscode.Disposable> = [];

  commands.push(
    vscode.commands.registerCommand("extension.sayHello", () => {
      vscode.window.showInformationMessage("Hello World!");
    })
  );

  commands.push(
    vscode.languages.registerHoverProvider(EML_MODE, new EmlHoverProvider())
  );

  context.subscriptions.push(...commands);
}

export function deactivate() {}
