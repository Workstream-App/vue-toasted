module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
    requireConfigFile: false,
    babelOptions: {
      configFile: './.babelrc',
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    es2020: true,
    browser: true,
    webextensions: true,
  },

  extends: ['plugin:prettier/recommended', 'plugin:import/recommended'],

  plugins: ['lodash', 'import', 'html'],
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '@': './src',
        },
      },
    },
  },

  // add your custom rules here
  rules: {
    // 'babel/semi': 1,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/no-dynamic-require': 'off',
    'no-duplicate-imports': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'sort-imports': 'off',

    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'brace-style': 'error',
    'block-spacing': 'error',
    curly: ['error', 'all'],
    'default-case': 'error',
    eqeqeq: 'error',
    'id-length': [
      // enforce minimum and maximum identifier lengths
      'error',
      {
        exceptions: ['h', 'i', 'j', 'k', 'el', '$', '_', 't', 'x', 'y'],
      },
    ],
    indent: [
      // enforce consistent indentation
      'off',
      2,
      {
        MemberExpression: 1,
        FunctionExpression: {
          parameters: 'off',
        },
        ObjectExpression: 'off',
        ArrayExpression: 'off',
        CallExpression: {
          arguments: 'off',
        },
        SwitchCase: 1,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 140,
        comments: 160,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ], // enforce a maximum line length
    'max-params': ['error', 6],
    'new-parens': 'error',
    'no-confusing-arrow': 'warn',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-empty-function': 'off',
    'no-multi-str': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'warn',
    'no-unexpected-multiline': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'one-var-declaration-per-line': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'use-isnan': 'error',
    yoda: 'error', // disallow Yoda conditions
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        es2020: true,
        jest: true,
      },
    },
    // {
    //   files: ['src/**/*'],
    //   parserOptions: {
    //     parser: 'babel-eslint',
    //     sourceType: 'module',
    //     ecmaVersion: 'latest',
    //     babelOptions: {
    //       configFile: './babelrc',
    //     },
    //     ecmaFeatures: {
    //       modules: true,
    //     },
    //   },
    //
    //   env: {
    //     es2020: true,
    //     browser: true,
    //     webextensions: true,
    //   },
    // },
    {
      files: ['**/*.unit.js'],
      parserOptions: {
        parser: '@babel/eslint-parser',
        sourceType: 'module',
        ecmaVersion: 2020,
      },

      env: {
        es2020: true,
        jest: true,
      },
      globals: {
        pendo: true,
        browser: true,
        window: true,
      },
    },
  ],
};
