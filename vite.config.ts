import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { reactRouter } from "@react-router/dev/vite";
import {
	sentryReactRouter,
	type SentryReactRouterBuildOptions,
} from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
	org: "jockerdev",
	project: "jocker-dev",
	authToken: process.env.SENTRY_AUTH_TOKEN,
};

export default defineConfig((config) => {
	return {
		plugins: [
			tailwindcss(),
			reactRouter(),
			tsconfigPaths(),
			netlifyPlugin(),
			sentryReactRouter(sentryConfig, config),
		],
		sentryConfig,
		optimizeDeps: {
			include: ["react-use", "@splidejs/react-splide"],
		},
		ssr: {
			noExternal: ["react-use", "@splidejs/react-splide"],
		},
	};
});
