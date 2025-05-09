import { BrowserOptions, NodeOptions } from "@sentry/react-router";

export const POSTHOG_IGNORE_KEY = "posthog_ignore";

export const sentryConfig: BrowserOptions | NodeOptions = {
	dsn: "https://5d92d09a957dedb8e6084f2777b792af@o4509241568722944.ingest.de.sentry.io/4509241895616592",
	sendDefaultPii: true,
	integrations: [],
	enabled: !import.meta.env.DEV,
};

export function getDomainUrl(request: Request) {
	const host =
		request.headers.get('X-Forwarded-Host') ??
		request.headers.get('host') ??
		new URL(request.url).host
	const protocol = request.headers.get('X-Forwarded-Proto') ?? 'http'
	return `${protocol}://${host}`
}
