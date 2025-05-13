import type { TOptions } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { TranslationKey } from "~/middleware/i18next";

export function useTranslationWithMarkdown() {
	const { t, ...rest } = useTranslation();
	const tMarkdown = React.useCallback(
		(key: TranslationKey, options?: TOptions) => {
			return (
				<div className="markdown">
					<Markdown remarkPlugins={[remarkGfm]}>
						{t(key, options ?? {})}
					</Markdown>
				</div>
			);
		},
		[t],
	);
	// eslint-disable-next-line @typescript-eslint/no-misused-spread
	return { tm: tMarkdown, ...rest };
}
