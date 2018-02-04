"use strict";

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "eml" is now active! test');

  let disposable = vscode.commands.registerCommand("extension.sayHello", () => {
    vscode.window.showInformationMessage("Hello World!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
