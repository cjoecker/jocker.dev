import * as Sentry from "@sentry/react-router";
import "@splidejs/splide/dist/css/splide.min.css";
import posthog from "posthog-js";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
	isRouteErrorResponse,
	LinksFunction,
	MetaFunction,
	redirect,
	useLoaderData,
} from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { useChangeLanguage } from "remix-i18next/react";
import { useHydrated } from "remix-utils/use-hydrated";

import { Route } from "./+types/root";

import { fallbackLng, setI18nLocale, supportedLngs } from "~/config/i18n";
import { googleAnalyticsId, POSTHOG_IGNORE_KEY } from "~/constants/misc";
import RalewayFont600Woff from "~/fonts/raleway-v28-latin-600.woff";
import RalewayFont600Woff2 from "~/fonts/raleway-v28-latin-600.woff2";
import RalewayFont800Woff from "~/fonts/raleway-v28-latin-800.woff";
import RalewayFont800Woff2 from "~/fonts/raleway-v28-latin-800.woff2";
import RalewayFontRegularWoff from "~/fonts/raleway-v28-latin-regular.woff";
import RalewayFontRegularWoff2 from "~/fonts/raleway-v28-latin-regular.woff2";
import MeshBlue from "~/images/mesh-blue.svg";
import MeshPurple from "~/images/mesh-purple.svg";
import MeshTurquoise from "~/images/mesh-turquoise.svg";
import i18nServer from "~/modules/i18n.server";
import "~/styles/main.css";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [
		{
			title: data?.pageTitle,
		},
		{ charset: "utf-8" },
		{
			name: "description",
			content: data?.pageDescription,
		},
		{
			name: "keywords",
			content: data?.pageKeywords,
		},
		{
			name: "viewport",
			content: "width=device-width,initial-scale=1,viewport-fit=cover",
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
				name: data?.pageTitle,
				url: "https://jocker.dev",
				logo: "https://jocker.dev/favicons/android-chrome-256x256.png",
			},
		},
	];
};

export const links: LinksFunction = () => {
	return [
		{
			rel: "preload",
			as: "image",
			href: MeshBlue,
		},
		{
			rel: "preload",
			as: "image",
			href: MeshPurple,
		},
		{
			rel: "preload",
			as: "image",
			href: MeshTurquoise,
		},
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

export const handle = { i18n: ["translation"] };

export async function loader({ request }: Route.LoaderArgs) {
	const { pathname, search } = new URL(request.url);

	const locale = await i18nServer.getLocale(request);
	const localePath = pathname.split("/")[1];

	const t = await i18nServer.getFixedT(request);
	const pageTitle = t("pageTitle");
	const pageDescription = t("pageDescription");
	const pageKeywords = t("pageKeywords");

	if (!supportedLngs.includes(localePath)) {
		// return to localized URL
		return redirect(`/${locale}${search}`, 301);
	}

	if (pathname.endsWith("/") && pathname !== "/") {
		// Redirect to the same URL without a trailing slash
		return redirect(`${pathname.slice(0, -1)}${search}`, 301);
	}
	return { locale, pageTitle, pageDescription, pageKeywords };
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
	const loaderData = useLoaderData<typeof loader>();
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	const locale = loaderData?.locale ?? fallbackLng;
	setI18nLocale(locale);
	useChangeLanguage(locale);
	usePrintConsole();

	return (
		<html lang={locale}>
			<head>
				{process.env.NODE_ENV === "development" ? null : (
					<>
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
						/>
						<script
							async
							id="gtag-init"
							dangerouslySetInnerHTML={{
								__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', '${googleAnalyticsId}');
              `,
							}}
						/>
					</>
				)}
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

const usePrintConsole = () => {
	const isHydrated = useHydrated();
	const { t } = useTranslation();
	if (!isHydrated) {
		return null;
	}
	const helloArt = `
██╗  ██╗ ██████╗ ██╗      █████╗     ██╗
██║  ██║██╔═══██╗██║     ██╔══██╗    ██║
███████║██║   ██║██║     ███████║    ██║
██╔══██║██║   ██║██║     ██╔══██║    ╚═╝
██║  ██║╚██████╔╝███████╗██║  ██║    ██╗
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═╝
`;
	console.info(
		`%c${helloArt}`,
		"color: #6f14c9; font-family: monospace; font-size: 12px",
	);
	console.info(
		`%c${t("consolePrint")}`,
		"color: #6f14c9; font-family: monospace; font-size: 12px",
	);
};
