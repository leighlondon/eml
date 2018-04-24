"use strict"

import { ExtensionContext, commands, languages } from "vscode"

import helloWorld from "./cmd/hello"
import { EML_FILTER, EmailHoverProvider } from "./hover"

export function activate(context: ExtensionContext) {
  console.log("[eml] activated")

  context.subscriptions.push(
    commands.registerCommand("extension.sayHello", helloWorld),
    languages.registerHoverProvider(EML_FILTER, new EmailHoverProvider())
  )
}

export function deactivate() {}
