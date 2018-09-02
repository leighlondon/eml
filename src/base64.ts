export const decode = (s: string): string => {
  return new Buffer(s, "base64").toString();
};

export const encode = (s: string): string => {
  return new Buffer(s).toString("base64");
};
