/** @type {import('prettier').Config} */

const isTailwind = process.env.TAILWIND;

const prettierConfig = {
  printWidth: 80,
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  arrowParens: 'always',
  useTabs: false,
  quoteProps: 'as-needed',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',

    '<THIRD_PARTY_MODULES>',

    '^@/api/(.*)$',

    '^@/env',

    '^@/types',
    '^@/graphql/(.*)$',
    '^@/server/(.*)$|^@/server',
    '^@/services/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/context/(.*)$',
    '^@/stores/(.*)$',

    '^@/components/(.*)$',

    '^../',
    '^./'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports']
};

const withTailwind = {
  ...prettierConfig,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ]
};

module.exports = isTailwind ? withTailwind : prettierConfig;
