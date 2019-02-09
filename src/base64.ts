export const decode = (s: string): string => {
  return Buffer.from(s, "base64").toString();
};

export const encode = (s: string): string => {
  return Buffer.from(s).toString("base64");
};
