module.exports = {
  overrides: [
    {
      // Exempting the language grammar from the line width.
      files: "syntaxes/*.tmLanguage.json",
      options: {
        printWidth: 200
      }
    },
    {
      files: "*",
      options: {
        semi: false
      }
    }
  ]
}
