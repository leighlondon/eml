"use strict";

import { Disposable, ExtensionContext, commands, window } from "vscode";

export function activate(context: ExtensionContext) {
  console.log('Congratulations, your extension "eml" is now active! test');

  let disposables: Array<Disposable> = [];

  disposables.push(
    commands.registerCommand("extension.sayHello", () => {
      window.showInformationMessage("Hello World!");
    })
  );

  context.subscriptions.push(...disposables);
}

export function deactivate() {}
