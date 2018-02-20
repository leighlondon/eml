// The module 'assert' provides assertion methods from node
import * as assert from "assert";

import * as vscode from "vscode";
import * as myExtension from "../extension";

describe("extension", () => {
  it("passes", () => {
    assert.equal(true, true);
  });
});
