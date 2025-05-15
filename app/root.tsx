import * as Sentry from "@sentry/react-router";
import SplideStyles from "@splidejs/splide/dist/css/splide.min.css?url";
import posthog from "posthog-js";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "react-router";
import {
	isRouteErrorResponse,
	LinksFunction,
	MetaFunction,
	redirect,
	data,
} from "react-router";
import { useChangeLanguage } from "remix-i18next/react";
import { useHydrated } from "remix-utils/use-hydrated";

import { Route } from "./+types/root";

import { POSTHOG_IGNORE_KEY } from "~/constants/misc";
import RalewayFont600Woff from "~/fonts/raleway-v28-latin-600.woff";
import RalewayFont600Woff2 from "~/fonts/raleway-v28-latin-600.woff2";
import RalewayFont800Woff from "~/fonts/raleway-v28-latin-800.woff";
import RalewayFont800Woff2 from "~/fonts/raleway-v28-latin-800.woff2";
import RalewayFontRegularWoff from "~/fonts/raleway-v28-latin-regular.woff";
import RalewayFontRegularWoff2 from "~/fonts/raleway-v28-latin-regular.woff2";
import i18next from "~/services/i18next.server";
import MainStyles from "~/styles/main.css?url";

export const handle = {
	i18n: "common",
};

export const meta: MetaFunction = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = useTranslation();
	return [
		{
			title: t("pageTitle"),
		},
		{ charset: "utf-8" },
		{
			name: "description",
			content: t("pageDescription"),
		},
		{
			name: "keywords",
			content:
				"freelancer,independent,contractor,self-employed,full-stack,full,stack,fullstack,back-end,backend,frontend,front-end,developer,engineer,software,ux,ui,web,designer",
		},
		{
			name: "viewport",
			content:
				"width=device-width,initial-scale=1,viewport-fit=cover,maximum-scale=1",
		},
		{
			name: "theme-color",
			content: "#0F0823",
		},
		{
			property: "og:image",
			content: "https://jocker.dev/og-image.png",
		},
		{
			property: "og:image:secure_url",
			content: "https://jocker.dev/og-image.png",
		},
		{
			property: "og:image:type",
			content: "image/png",
		},
		{
			property: "og:image:width",
			content: "320",
		},
		{
			property: "og:image:height",
			content: "320",
		},
		{
			"script:ld+json": {
				"@context": "http://schema.org",
				"@type": "Organization",
				name: "Christian Jöcker - Freelance Full-Stack Developer and UX/UI designer",
				url: "https://jocker.dev",
				logo: "https://jocker.dev/favicons/android-chrome-256x256.png",
			},
		},
	];
};

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: MainStyles },
		{ rel: "stylesheet", href: SplideStyles },
		{
			rel: "preload",
			as: "font",
			href: RalewayFontRegularWoff2,
			type: "font/woff2",
			crossOrigin: "anonymous",
		},
		{
			rel: "preload",
			as: "font",
			href: RalewayFontRegularWoff,
			type: "font/woff",
			crossOrigin: "anonymous",
		},
		{
			rel: "preload",
			as: "font",
			href: RalewayFont600Woff2,
			type: "font/woff2",
			crossOrigin: "anonymous",
		},
		{
			rel: "preload",
			as: "font",
			href: RalewayFont600Woff,
			type: "font/woff",
			crossOrigin: "anonymous",
		},
		{
			rel: "preload",
			as: "font",
			href: RalewayFont800Woff2,
			type: "font/woff2",
			crossOrigin: "anonymous",
		},
		{
			rel: "preload",
			as: "font",
			href: RalewayFont800Woff,
			type: "font/woff",
			crossOrigin: "anonymous",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			href: "/favicon.png",
		},
	];
};

export async function loader({ request }: Route.LoaderArgs) {
	const { pathname, search } = new URL(request.url);
	const locale = await i18next.getLocale(request);

	if (pathname.endsWith("/") && pathname !== "/") {
		// Redirect to the same URL without a trailing slash
		// eslint-disable-next-line @typescript-eslint/only-throw-error
		throw redirect(`${pathname.slice(0, -1)}${search}`, 301);
	}
	return data({ locale });
}

function PosthogInit() {
	const isHydrated = useHydrated();
	useEffect(() => {
		const isDev = !location.hostname.includes("jocker.dev");
		const ignorePosthog = globalThis.localStorage.getItem(POSTHOG_IGNORE_KEY);
		if (isHydrated && !isDev && !ignorePosthog) {
			posthog.init("phc_zJ008UtaAYRQuW1Q9zLwe3LiC2nK573C1gxVsoHjKQ8", {
				api_host: "https://eu.i.posthog.com",
				person_profiles: "always",
				persistence: "memory",
			});
		}
	}, [isHydrated]);

	return null;
}

export default function Root() {
	const { locale } = useLoaderData<typeof loader>();
	const { i18n } = useTranslation();
	console.log("locale", locale);
	useChangeLanguage(locale);
	return (
		<html lang={locale}>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<PosthogInit />
			</body>
		</html>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (error && error instanceof Error) {
		Sentry.captureException(error);

		if (import.meta.env.DEV) {
			details = error.message;
			stack = error.stack;
		}
	}
	return (
		<main>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
