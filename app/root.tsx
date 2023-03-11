import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
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
import { useTranslation } from 'react-i18next';

import RalewayFont600Woff from '~/fonts/raleway-v28-latin-600.woff';
import RalewayFont600Woff2 from '~/fonts/raleway-v28-latin-600.woff2';
import RalewayFont800Woff from '~/fonts/raleway-v28-latin-800.woff';
import RalewayFont800Woff2 from '~/fonts/raleway-v28-latin-800.woff2';
import RalewayFontRegularWoff from '~/fonts/raleway-v28-latin-regular.woff';
import RalewayFontRegularWoff2 from '~/fonts/raleway-v28-latin-regular.woff2';
import { useChangeLanguage } from '~/hooks/useChangeLanguage';
import i18next from '~/services/i18next.server';
import MainStyles from '~/styles/main.css';
import TailwindStyles from '~/styles/tailwind.css';

export const meta: MetaFunction = () => {
	return {
		title:
			'Christian Jöcker - Freelance Full-Stack Developer and UX/UI designer',
		description:
			'Passionate about creating great experiences with beautiful web applications. Happy customers, clean code, and sustainable architectures are my priority.',
		keywords:
			'freelancer,independent,contractor,self-employed,full-stack,full,stack,fullstack,back-end,backend,frontend,front-end,developer,engineer,software,ux,ui,web,designer',
		viewport:
			'width=device-width,initial-scale=1,viewport-fit=cover,maximum-scale=1',
		'theme-color': '#0F0823',
		charset: 'utf-8',
	};
};

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: TailwindStyles },
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
	return json({ locale });
}

export const handle = {
	i18n: 'common',
};

// eslint-disable-next-line import/no-default-export
export default function Root() {
	const { locale } = useLoaderData<typeof loader>();
	const { i18n } = useTranslation();
	useChangeLanguage(locale);
	return (
		<html lang={locale} dir={i18n.dir()}>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
