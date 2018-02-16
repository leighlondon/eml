"use strict";

import {commands as cmd} from "vscode";
import * as vscode from "vscode";

import * as hover from "./hover";
import helloWorld from "./cmd/hello.js";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "eml" is now active! test');

  let disposable: Array<vscode.Disposable> = [];

  disposable.push(
    cmd.registerCommand("extension.sayHello", helloWorld),
    vscode.languages.registerHoverProvider(
      hover.EML_MODE,
      new hover.EmailHoverProvider()
    ),
    cmd.registerCommand("extension.formatBse64", () => {
      vscode.window.showInformationMessage("BASE64?");
    })
  );

  context.subscriptions.push(...disposable);
}

export function deactivate() {
  vscode.window.showInformationMessage("DEACTIVATE");
}
