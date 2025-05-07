let Sentry;
try {
	Sentry = await import('@sentry/react-router');
} catch (error) {
	console.warn('Sentry integration not available:', error.message);
	// Provide a fallback implementation to continue without Sentry
	Sentry = { init: () => {} };
}

Sentry.init({
	dsn: "https://5d92d09a957dedb8e6084f2777b792af@o4509241568722944.ingest.de.sentry.io/4509241895616592",
	sendDefaultPii: true,
});
