"use strict";

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "eml" is now active! test');

  let commands: Array<vscode.Disposable> = [];

  commands.push(vscode.commands.registerCommand("extension.sayHello", () => {
    vscode.window.showInformationMessage("Hello World!");
  }));

  context.subscriptions.push(...commands);
}

export function deactivate() {}
