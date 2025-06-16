import fs from "fs/promises";
import path from "path";

import { google } from "@ai-sdk/google";
import { generateText } from "ai";

import { supportedLngs } from "~/config/i18n";

const localesDir = path.join(process.cwd(), "app", "locales");
const sourceLocale = "en";
const targetLocales = supportedLngs.filter((lng) => {
	return lng !== sourceLocale;
});

type Translations = Record<string, string>;

const languagesNames: Record<string, string> = {
	de: "German",
	es: "Spanish",
	en: "English",
};

async function readTranslations(
	locale: string,
): Promise<Record<string, string>> {
	try {
		// Dynamic import to load the translation file as a module
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const module = await import(`${localesDir}/${locale}.ts`);
		// The default export contains the translations
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
		return module.default;
	} catch (error) {
		console.error(`Failed to import translations for ${locale}:`, error);
		throw new Error(`Failed to load translations for ${locale}`);
	}
}

async function translateText(
	text: string,
	targetLang: string,
): Promise<string> {
	const prompt = `Translate the following text to ${targetLang}. 
    Keep the same tone and style.
    In German use "Du" form.
    If there are placeholders like {{variable}}, keep them exactly as is.
    Only return the translation, nothing else.
    The text is for my personal website as a freelance full-stack developer.
    It is ok to use anglicisms and technical terms in the translation if it is a common term in the language.
    
    Text: "${text}"`;
	const { text: translatedText } = await generateText({
		model: google("models/gemini-2.0-flash"),
		prompt,
	});

	return translatedText;
}

async function updateTranslationsFile(
	locale: string,
	translations: Translations,
) {
	const filePath = path.join(localesDir, `${locale}.ts`);

	let fileContent = 'import type en from "./en";\n\nexport default {\n';

	Object.entries(translations).forEach(([key, value]) => {
		const escapedValue = value
			.replaceAll('"', String.raw`\"`)
			.replaceAll("\n", String.raw`\n`);
		fileContent += `\t${key}: "${escapedValue}",\n`;
	});

	fileContent += "} satisfies typeof en;\n";

	await fs.writeFile(filePath, fileContent, "utf-8");
}

async function main() {
	if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
		console.error("Please set GOOGLE_API_KEY environment variable");
	}

	try {
		const sourceTranslations = await readTranslations(sourceLocale);

		for (const targetLocale of targetLocales) {
			console.info(`\nProcessing ${targetLocale} translations...`);
			const targetTranslations = await readTranslations(targetLocale);
			const missingKeys = Object.keys(sourceTranslations).filter((key) => {
				return !targetTranslations[key];
			});

			if (missingKeys.length === 0) {
				console.info(`No missing translations for ${targetLocale}`);
				continue;
			}

			console.info(
				`Found ${missingKeys.length} missing translations for ${targetLocale}`,
			);

			for (const key of missingKeys) {
				console.info(`Translating: ${key}`);
				const translation = await translateText(
					sourceTranslations[key],
					languagesNames[targetLocale] || targetLocale,
				);
				targetTranslations[key] = translation.replaceAll(/\n+$/g, "");
			}

			await updateTranslationsFile(targetLocale, targetTranslations);
			console.info(`Updated ${targetLocale} translations file`);
		}
	} catch (error) {
		console.error("Error:", error);
	}
}

await main();
