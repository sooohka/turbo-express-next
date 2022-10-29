module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "next", "turbo", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    // imports
    "import/extensions": "off",
    "import/prefer-default-export": "off",
  },
};
