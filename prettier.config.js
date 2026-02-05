export default {
  printWidth: 120,
  trailingComma: "es5",
  overrides: [
    {
      files: ["prettier.config.js", "*.json"],
      options: {
        printWidth: 80,
      },
    },
  ],
};
