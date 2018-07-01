export function decode(s: string): string {
  return new Buffer(s, "base64").toString();
}

export function encode(s: string): string {
  return new Buffer(s).toString("base64");
}
