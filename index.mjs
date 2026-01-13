import { defineConfig } from "eslint/config";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import eslintPluginEslintComments from "eslint-plugin-eslint-comments";
import { importX } from "eslint-plugin-import-x";
import eslintPluginN from "eslint-plugin-n";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginPromise from "eslint-plugin-promise";
import * as eslintPluginRegExp from "eslint-plugin-regexp";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import eslintPluginZod from "eslint-plugin-zod";
import * as typescriptEslint from "typescript-eslint";
import eslint from "@eslint/js";
import tsParser from "@typescript-eslint/parser";

/**
 * Create ESLint configuration with all recommended plugins and rules
 * @param {Object} options - Configuration options
 * @param {string[]} options.ignores - Additional patterns to ignore
 * @param {string[]} options.testFilePatterns - Patterns for test files
 * @returns {Array} ESLint configuration array
 */
export function createConfig(options = {}) {
  const {
    ignores = [],
    testFilePatterns = ["tests/**/*.ts", "tests/**/*.spec.ts"],
  } = options;

  return [
    {
      ignores: [
        "dist/**/*",
        "coverage/**/*",
        "node_modules/**/*",
        "automaton.config.mts",
        "**/auto-imports.d.ts",
        ...ignores,
      ],
    },

    // Base configurations
    eslint.configs.recommended,
    typescriptEslint.configs.recommended,

    // ImportX configuration
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    {
      files: ["**/*.ts"],
      languageOptions: {
        parser: tsParser,
      },
      settings: {
        "import-x/resolver-next": [
          createTypeScriptImportResolver({ alwaysTryTypes: true }),
        ],
      },
    },

    // Unicorn configuration
    eslintPluginUnicorn.configs.recommended,
    {
      rules: {
        "unicorn/filename-case": "off",
      },
    },

    // Prettier configuration
    eslintPluginPrettierRecommended,
    {
      rules: {
        "prettier/prettier": [2, {}, { usePrettierrc: true }],
      },
    },

    // Custom plugins and rules
    {
      plugins: {
        "simple-import-sort": eslintPluginSimpleImportSort,
        "unused-imports": eslintPluginUnusedImports,
        "eslint-comments": eslintPluginEslintComments,
        promise: eslintPluginPromise,
        zod: eslintPluginZod,
        regexp: eslintPluginRegExp,
        n: eslintPluginN,
      },
      rules: {
        "n/no-missing-import": "off",
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              [String.raw`^\u0000`],
              ["^", String.raw`^@\w`, String.raw`^\.`],
              [String.raw`^.+\.vue$`],
            ],
          },
        ],
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],
        "zod/prefer-enum": 2,
        "zod/require-strict": 2,
      },
    },

    // Test file configuration
    {
      files: testFilePatterns,
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ];
}

// Default export for easy usage
export default createConfig();
