/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	tailwind: true,
	ignoredRouteFiles: ['**/.*'],
	serverDependenciesToBundle: ['swiper', 'ssr-window', 'dom7', 'nodemailer'],
	server:
		process.env.NETLIFY || process.env.NETLIFY_LOCAL
			? './server.js'
			: undefined,
	serverBuildPath: '.netlify/functions-internal/server.js',
	serverModuleFormat: 'cjs',
	future: {
		v2_routeConvention: true,
		v2_errorBoundary: true,
		v2_normalizeFormMethod: true,
		v2_meta: true,
		v2_headers: true,
		v2_dev: true,
	},
};
