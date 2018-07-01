import * as assert from "assert";

import * as base64 from "../base64";

describe("base64", () => {
  context("encode", () => {
    it("encodes a string", () => {
      let decoded: string = "input string";
      let encoded: string = "aW5wdXQgc3RyaW5n";
      assert.equal(encoded, base64.encode(decoded));
    });
  });

  context("decode", () => {
    it("decodes a string", () => {
      let encoded: string = "aW5wdXQgc3RyaW5n";
      let decoded: string = "input string";
      assert.equal(decoded, base64.decode(encoded));
    });
  });

  context("end to end", () => {
    it("encodes then decodes correctly", () => {
      let decoded: string = "input string";
      assert.equal(decoded, base64.decode(base64.encode(decoded)));
    });

    it("decodes then encodes correctly", () => {
      let encoded: string = "aW5wdXQgc3RyaW5n";
      assert.equal(encoded, base64.encode(base64.decode(encoded)));
    });
  });
});
