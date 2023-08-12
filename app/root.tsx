import type {
	LinksFunction,
	LoaderArgs,
	V2_MetaFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import SplideStyles from '@splidejs/splide/dist/css/splide.min.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import invariant from 'tiny-invariant';

import RalewayFont600Woff from '~/fonts/raleway-v28-latin-600.woff';
import RalewayFont600Woff2 from '~/fonts/raleway-v28-latin-600.woff2';
import RalewayFont800Woff from '~/fonts/raleway-v28-latin-800.woff';
import RalewayFont800Woff2 from '~/fonts/raleway-v28-latin-800.woff2';
import RalewayFontRegularWoff from '~/fonts/raleway-v28-latin-regular.woff';
import RalewayFontRegularWoff2 from '~/fonts/raleway-v28-latin-regular.woff2';
import { useChangeLanguage } from '~/hooks/useChangeLanguage';
import * as gtag from '~/services/gtags.client';
import i18next from '~/services/i18next.server';
import MainStyles from '~/styles/main.css';

export const meta: V2_MetaFunction = () => {
	return [
		{
			title:
				'Christian Jöcker - Freelance Full-Stack Developer and UX/UI designer',
		},
		{ charset: 'utf-8' },
		{
			name: 'description',
			content:
				'Passionate about creating great experiences with beautiful web applications. Happy customers, clean code, and sustainable architectures are my priority.',
		},
		{
			name: 'keywords',
			content:
				'freelancer,independent,contractor,self-employed,full-stack,full,stack,fullstack,back-end,backend,frontend,front-end,developer,engineer,software,ux,ui,web,designer',
		},
		{
			name: 'viewport',
			content:
				'width=device-width,initial-scale=1,viewport-fit=cover,maximum-scale=1',
		},
		{
			name: 'theme-color',
			content: '#0F0823',
		},
		{
			property: 'og:image',
			content: 'https://jocker.dev/og-image.png',
		},
		{
			property: 'og:image:secure_url',
			content: 'https://jocker.dev/og-image.png',
		},
		{
			property: 'og:image:type',
			content: 'image/png',
		},
		{
			property: 'og:image:width',
			content: '320',
		},
		{
			property: 'og:image:height',
			content: '320',
		},
		{
			'script:ld+json': {
				'@context': 'http://schema.org',
				'@type': 'Organization',
				name: 'Christian Jöcker - Freelance Full-Stack Developer and UX/UI designer',
				url: 'https://jocker.dev',
				logo: 'https://jocker.dev/favicons/android-chrome-256x256.png',
			},
		},
	];
};

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: MainStyles },
	{ rel: 'stylesheet', href: SplideStyles },
	{
		rel: 'preload',
		as: 'font',
		href: RalewayFontRegularWoff2,
		type: 'font/woff2',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'preload',
		as: 'font',
		href: RalewayFontRegularWoff,
		type: 'font/woff',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'preload',
		as: 'font',
		href: RalewayFont600Woff2,
		type: 'font/woff2',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'preload',
		as: 'font',
		href: RalewayFont600Woff,
		type: 'font/woff',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'preload',
		as: 'font',
		href: RalewayFont800Woff2,
		type: 'font/woff2',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'preload',
		as: 'font',
		href: RalewayFont800Woff,
		type: 'font/woff',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: '/favicon.png',
	},
];

export async function loader({ request }: LoaderArgs) {
	const locale = await i18next.getLocale(request);
	invariant(
		process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
		'Missing Google Analytics ID'
	);
	return json({
		locale,
		gaTrackingId: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
	});
}

export const handle = {
	i18n: 'common',
};

// eslint-disable-next-line import/no-default-export
export default function Root() {
	const { locale, gaTrackingId } = useLoaderData<typeof loader>();
	const { i18n } = useTranslation();
	useChangeLanguage(locale);
	useEffect(() => {
		if (gaTrackingId?.length) {
			gtag.pageview(location.pathname, gaTrackingId);
		}
	}, [gaTrackingId]);
	return (
		<html lang={locale} dir={i18n.dir()}>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				{process.env.NODE_ENV === 'development' || !gaTrackingId ? null : (
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
				<LiveReload />
			</body>
		</html>
	);
}
