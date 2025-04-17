declare global {
	interface Window {
		gtag: (
			option: string,
			gaTrackingId: string,
			options: Record<string, unknown>
		) => void;
	}
}

/**
 * @example
 * https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
export const pageview = (url: string, trackingId: string) => {
	if (!globalThis.gtag) {
		console.warn(
			"window.gtag is not defined. This could mean your google analytics script has not loaded on the page yet."
		);
		return;
	}
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
	if (!globalThis.gtag) {
		console.warn(
			"window.gtag is not defined. This could mean your google analytics script has not loaded on the page yet."
		);
		return;
	}
	globalThis.gtag("event", action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};
