# ESLint Config

Shareable ESLint configuration for TypeScript projects.

## Installation

```bash
npm install -D @medianaura/eslint-config
```

You'll also need to install the peer dependencies:

```bash
npm install -D typescript
```

## Usage

Create an `eslint.config.mjs` file in your project root:

```javascript
import config from '@medianaura/eslint-config';

export default config;
```

### Custom Configuration

You can customize the configuration by using the `createConfig` function:

```javascript
import { createConfig } from '@medianaura/eslint-config';

export default createConfig({
  ignores: ['build/**/*', 'temp/**/*'],
  testFilePatterns: ['tests/**/*', '**/*.test.ts', '**/*.spec.ts'],
});
```

### Using with Pretty Formatter

The package includes `eslint-formatter-pretty` as a dependency for enhanced error output. To use it:

```bash
npx eslint . --format=node_modules/eslint-formatter-pretty
```

Or add to your package.json scripts:

```json
{
  "scripts": {
    "lint": "eslint . --format pretty",
    "lint:fix": "eslint . --fix --format pretty"
  }
}
```

## Features

- TypeScript support with strict type checking
- Import sorting and organization
- Code quality rules via ESLint, Unicorn, and other plugins
- Prettier integration (uses local .prettierrc.yaml if available)
- Test file special handling
- Zod schema validation rules
- Node.js best practices
- RegExp best practices
- Promise best practices

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

## Requirements

- Node.js >= 22.0.0
- TypeScript >= 5.9.3
- ESLint >= 9.39.2
