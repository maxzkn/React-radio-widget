module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended", // uses recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/eslint-recommended", // uses recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended", // uses recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  parser: "@typescript-eslint/parser", // specifies the ESLint parser
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020, // allows parsing of modern ECMAScript features
    sourceType: "module", // allows use of imports
    ecmaFeatures: {
      jsx: true, // allows parsing of JSX
      arrowFunctions: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    react: {
      version: "detect", // tells eslint-plugin-react to automatically detect the version of React
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["./src"],
      },
    },
  },
  rules: {
    // Existing rules
    "comma-dangle": "off", // https://eslint.org/docs/rules/comma-dangle
    "function-paren-newline": "off", // https://eslint.org/docs/rules/function-paren-newline
    "global-require": "off", // https://eslint.org/docs/rules/global-require
    "import/no-dynamic-require": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    "no-inner-declarations": "off", // https://eslint.org/docs/rules/no-inner-declarations
    // New rules
    "class-methods-use-this": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": 'off',
    "@typescript-eslint/no-var-requires": "off",
    '@typescript-eslint/no-empty-interface': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
