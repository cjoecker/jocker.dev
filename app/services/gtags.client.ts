declare global {
	interface Window {
		gtag: (
			option: string,
			gaTrackingId: string,
			options: Record<string, unknown>,
		) => void;
	}
}

/**
 * @example
 * https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
export const pageview = (url: string, trackingId: string) => {
	// @ts-expect-error gtag is always in globalThis
	if (!globalThis.gtag) {
		console.warn(
			"window.gtag is not defined. This could mean your google analytics script has not loaded on the page yet.",
		);
		return;
	}
	// @ts-expect-error gtag is always in globalThis
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	globalThis.gtag("config", trackingId, {
		page_path: url,
	});
};

/**
 * @example
 * https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
export const event = ({
	action,
	category,
	label,
	value,
}: Record<string, string>) => {
	// @ts-expect-error gtag is always in globalThis
	if (!globalThis.gtag) {
		console.warn(
			"window.gtag is not defined. This could mean your google analytics script has not loaded on the page yet.",
		);
		return;
	}
	// @ts-expect-error gtag is always in globalThis
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	globalThis.gtag("event", action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};
