import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginQuery from "@tanstack/eslint-plugin-query";
import mantine from "eslint-config-mantine";

export default defineConfig([
  ...mantine,
  ...pluginQuery.configs["flat/recommended"],
  { ignores: ["**/*.{mjs,cjs,js,d.ts,d.mts}"] },
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ["./tsconfig.json", "./tsconfig.*.json"],
      },
    },
  },
]);
