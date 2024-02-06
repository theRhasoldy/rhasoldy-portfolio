module.exports = {
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "prettier.config.cjs",
    "postcss.config.cjs",
    "!.storybook",
  ],
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:astro/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "import"],
  settings: {
    ecmaVersion: "latest",
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: true,
      typescript: true,
    },
    tailwindcss: {
      callees: ["cva", "cx", "className", "variants", "variant"],
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        "react/no-unknown-property": "off",
      },
    },
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    indent: ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "$/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"],
          "unknown",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
