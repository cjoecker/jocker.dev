import * as Sentry from "@sentry/react-router";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

Sentry.init({
	dsn: "https://5d92d09a957dedb8e6084f2777b792af@o4509241568722944.ingest.de.sentry.io/4509241895616592",
	sendDefaultPii: true,
	integrations: [],
	enabled: !import.meta.env.DEV
});

startTransition(() => {
	hydrateRoot(
		document,
		<StrictMode>
			<HydratedRouter />
		</StrictMode>,
	);
});
