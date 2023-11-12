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
};
