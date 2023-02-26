/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ['**/.*'],
	serverDependenciesToBundle: ["swiper","ssr-window","dom7"],
	server:
		process.env.NETLIFY || process.env.NETLIFY_LOCAL
			? './server.js'
			: undefined,
	serverBuildPath: '.netlify/functions-internal/server.js',
	future: {
		unstable_tailwind: true,
	},
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
};
