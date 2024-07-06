module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "off",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
  },
};
