module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: "always",
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  useTabs: false,
  endOfLine: "auto",
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@layouts/(.*)$",
    "^@pages/(.*)$",
    "^@components/(.*)$",
    "^@styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-astro"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
