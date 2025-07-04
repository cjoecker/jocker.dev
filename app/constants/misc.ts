import { BrowserOptions, NodeOptions } from "@sentry/react-router";

export const POSTHOG_IGNORE_KEY = "posthog_ignore";

export const sentryConfig: BrowserOptions | NodeOptions = {
	dsn: "https://5d92d09a957dedb8e6084f2777b792af@o4509241568722944.ingest.de.sentry.io/4509241895616592",
	sendDefaultPii: true,
	integrations: [],
	enabled: !import.meta.env.DEV,
	ignoreErrors: ["No route matches URL"],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1,
};

export const googleAnalyticsId = "G-942TBH82GN";

export const calendlyUrl = "https://calendly.com/jockerdev/30min";
