module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "next", "turbo", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "prettier/prettier": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    // imports
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
  },
};
