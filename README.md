# ESLint Config

Shareable ESLint configuration for TypeScript projects.

## Installation

```bash
npm install -D @yourcompany/eslint-config
```

You'll also need to install the peer dependencies:

```bash
npm install -D eslint @eslint/js typescript @typescript-eslint/parser typescript-eslint
```

## Usage

Create an `eslint.config.mjs` file in your project root:

```javascript
import config from "@yourcompany/eslint-config";

export default config;
```

### Custom Configuration

You can customize the configuration by using the `createConfig` function:

```javascript
import { createConfig } from "@yourcompany/eslint-config";

export default createConfig({
  ignores: ["build/**/*", "temp/**/*"],
  testFilePatterns: ["tests/**/*", "**/*.test.ts", "**/*.spec.ts"],
});
```

## Features

- TypeScript support with strict type checking
- Import sorting and organization
- Code quality rules via ESLint, Unicorn, and other plugins
- Prettier integration
- Test file special handling
- Zod schema validation rules

## Included Plugins

- `@eslint/js` - Base ESLint rules
- `typescript-eslint` - TypeScript specific rules
- `eslint-plugin-import-x` - Import/export rules
- `eslint-plugin-unicorn` - Modern JavaScript rules
- `eslint-plugin-prettier` - Prettier integration
- `eslint-plugin-simple-import-sort` - Import sorting
- `eslint-plugin-unused-imports` - Remove unused imports
- `eslint-plugin-eslint-comments` - ESLint comment rules
- `eslint-plugin-promise` - Promise best practices
- `eslint-plugin-regexp` - RegExp best practices
- `eslint-plugin-zod` - Zod schema validation rules
- `eslint-plugin-n` - Node.js specific rules
