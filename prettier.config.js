module.exports = {
  overrides: [
    {
      // Exempting the language grammar from the line width.
      files: "**/*.tmLanguage.json",
      options: {
        printWidth: 200
      }
    }
  ]
};
