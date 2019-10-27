module.exports = {
  extends: ["airbnb", "prettier", "plugin:jest/recommended"],
  plugins: ["prettier"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "import/prefer-default-export": "off",
    "no-default-export": 0,
    "no-underscore-dangle": 0,
    "no-undef": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "no-console": "off",
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
  },
  parser: "babel-eslint",
}
