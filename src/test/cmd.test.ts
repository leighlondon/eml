import * as assert from "assert"

import helloWorld from "../cmd/hello"

describe("cmd", () => {
  context("helloWorld", () => {
    it("is a function", () => {
      assert.equal(typeof helloWorld, "function")
    })
  })
})
