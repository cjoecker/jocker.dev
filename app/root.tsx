import SplideStyles from "@splidejs/splide/dist/css/splide.min.css?url";
import { useEffect } from "react";
import type { LinksFunction, MetaFunction } from "react-router";
import { data } from "react-router";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import RalewayFont600Woff from "~/fonts/raleway-v28-latin-600.woff";
import RalewayFont600Woff2 from "~/fonts/raleway-v28-latin-600.woff2";
import RalewayFont800Woff from "~/fonts/raleway-v28-latin-800.woff";
import RalewayFont800Woff2 from "~/fonts/raleway-v28-latin-800.woff2";
import RalewayFontRegularWoff from "~/fonts/raleway-v28-latin-regular.woff";
import RalewayFontRegularWoff2 from "~/fonts/raleway-v28-latin-regular.woff2";
import * as gtag from "~/services/gtags.client";
import MainStyles from "~/styles/main.css?url";

export const meta: MetaFunction = () => {
	return [
		{
			title:
				"Christian Jöcker - Freelance Full-Stack Developer and UX/UI designer",
		},
		{ charset: "utf-8" },
		{
			name: "description",
			content:
				"Passionate about creating great experiences with beautiful web applications. Happy customers, clean code, and sustainable architectures are my priority.",
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

export function loader() {
	invariant(
		process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
		"Missing Google Analytics ID",
	);
	return data({
		gaTrackingId: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
	});
}

export default function Root() {
	const { gaTrackingId } = useLoaderData<typeof loader>();
	useEffect(() => {
		if (gaTrackingId.length > 0) {
			gtag.pageview(location.pathname, gaTrackingId);
		}
	}, [gaTrackingId]);
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				{process.env.NODE_ENV === "development" || !gaTrackingId ? null : (
					<>
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
						/>
						<script
							async
							id="gtag-init"
							dangerouslySetInnerHTML={{
								__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
							}}
						/>
					</>
				)}
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
