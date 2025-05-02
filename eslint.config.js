import path from "node:path";
import { fileURLToPath } from "node:url";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

import { fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslint from "@eslint/js";
import _import from "eslint-plugin-import";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	eslintPluginUnicorn.configs.recommended,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	...compat.extends(
		"plugin:react/recommended",
		"prettier",
		"plugin:jsx-a11y/recommended",
		"plugin:react-hooks/recommended",
	),
	{
		ignores: [
			"instrument.server.mjs",
			".react-router",
			"server/build/*",
			"build/*",
			"**/node_modules",
			"public/build",
			"build",
			"**/.idea",
			"**/__snapshots__/*",
			"**/.cdk.staging",
			"**/cdk.out",
			"**/package-lock.json",
			"coverage",
			"test-results/",
			"eslint.config.js",
			"**/sentry.config.js",
			".netlify",
		],
	},
	{
		languageOptions: {
			globals: {
				...globals.jest,
			},
		},
	},
	{
		plugins: {
			"unused-imports": unusedImports,
			import: fixupPluginRules(_import),
			"jsx-a11y": jsxA11Y,
		},
		rules: {
			"import/order": [
				"warn",
				{
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			], // auto sort imports

			"no-console": ["error", { allow: ["warn", "error", "info"] }], // don't allow console.log

			"max-params": ["warn", 5], // prevent functions with too many parameters
			"import/no-unresolved": "off", // IDE is recognizing it already
			"unicorn/number-literal-case": "off", // prettier and unicorn collide here.
			"react/jsx-uses-react": "error", // necessary to remove unused imports
			"react/jsx-uses-vars": "error", // necessary to remove unused imports
			"arrow-body-style": ["error", "always"], // always have a return in functions
			"unused-imports/no-unused-imports": "error", // necessary to remove unused imports
			"testing-library/render-result-naming-convention": "off", // conflicting with args variable from setup function on tests
			"@typescript-eslint/require-await": "error", // avoid async functions without await
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_" },
			],
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],

			"unicorn/prevent-abbreviations": "off", // abbreviations like props or fn are wanted
			"unicorn/prefer-ternary": "off", // ternary is not always better
			"unicorn/no-useless-undefined": "off", // not working properly
			"unicorn/no-null": "off", // not working properly
			"unicorn/prefer-module": "off", // __dirname is not working with import.meta.url
			"unicorn/consistent-function-scoping": "off", // makes code less readable
			"unicorn/no-array-for-each": "off", // performance should only be improved until it causes problems
			"unicorn/better-regex": "off", // more efficient regex may be less clear to read
			"unicorn/prefer-query-selector": "off", // automatic fix breaks some queries
			"unicorn/text-encoding-identifier-case": "off", // it is colliding with TypeScript types
			"@typescript-eslint/restrict-template-expressions": "off", // not useful always
			"@typescript-eslint/unbound-method": "off", //conflict with remix-validated form
			quotes: [
				"error",
				"double",
				{
					allowTemplateLiterals: false,
					avoidEscape: true,
				},
			], // don't allow backticks if it's not a template literal

			"react/react-in-jsx-scope": "off", // not necessary on React 18
			"testing-library/no-await-sync-events": "off", // userEvents without async are not always working
			"jest/no-export": "off", // export necessary for files with dynamic imports for mocks
			"unicorn/prefer-node-protocol": "off", // not working with remix
			"jest/no-mocks-import": "off", // necessary for prisma client
			"unicorn/filename-case": [
				"error",
				{
					case: "kebabCase",
					ignore: [/\.\$[a-z]/], // ignore files with URL variables .$var - they need to be in camelCase for Remix
				},
			],
			"@typescript-eslint/prefer-nullish-coalescing": [
				"error",
				{
					ignoreConditionalTests: true,
					ignoreMixedLogicalExpressions: true,
				},
			], // ?? is different from || when the value is 0 or false
		},
	},
	{
		settings: {
			react: {
				version: "detect", // necessary for eslint-plugin-react
			},
		},
	},
);
