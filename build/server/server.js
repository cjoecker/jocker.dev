!(function () {
	try {
		var e =
				"undefined" != typeof window
					? window
					: "undefined" != typeof global
						? global
						: "undefined" != typeof globalThis
							? globalThis
							: "undefined" != typeof self
								? self
								: {},
			n = new e.Error().stack;
		n &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[n] = "0a5e6ca5-f80c-5e80-94a9-d32a59dfac4f"));
	} catch (e) {}
})();
import { createRequestHandler } from "@netlify/vite-plugin-react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "stream";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createInstance } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import {
	setDefaultOptions,
	differenceInMonths,
	format as format$1,
} from "date-fns";
import { enUS, de, es } from "date-fns/locale";
import { createReadableStreamFromReadable } from "@react-router/node";
import {
	ServerRouter,
	useMatches,
	useActionData,
	useLoaderData,
	useParams,
	useRouteError,
	redirect,
	Meta,
	Links,
	Outlet,
	ScrollRestoration,
	Scripts,
	isRouteErrorResponse,
	useNavigate,
	useNavigation,
	useSubmit,
	Form,
	data,
} from "react-router";
import { RemixI18Next } from "remix-i18next/server";
import React, {
	createElement,
	useEffect,
	useRef,
	useState,
	useCallback,
	useMemo,
} from "react";
import * as Sentry from "@sentry/react-router";
import posthog from "posthog-js";
import { useHydrated } from "remix-utils/use-hydrated";
import { useChangeLanguage } from "remix-i18next/react";
import {
	useInView,
	motion,
	useScroll,
	useTransform,
	useAnimation,
	useMotionValue,
	animate,
	AnimatePresence,
} from "framer-motion";
import { create as create$1 } from "zustand";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
{
	let _global =
		typeof window !== "undefined"
			? window
			: typeof global !== "undefined"
				? global
				: typeof globalThis !== "undefined"
					? globalThis
					: typeof self !== "undefined"
						? self
						: {};
	_global.SENTRY_RELEASE = { id: "99fbe7acc5892c317138188a3adc40ea19f16dde" };
}
const enTranslation = {
	hiImChristian: "Hi, I'm Christian Jöcker,",
	fullStackDeveloper: "Full-Stack Developer.",
	fullStackDeveloperPrefix: "a",
	uxUiDesigner: "UX/UI Designer.",
	iDontJustProgramFeatures:
		"I don't just code features. I help you build scalable apps with amazing user experiences and code that holds up!",
	discoverMore: "Discover More!",
	whatICanDoForYou: "What I Can Do for You",
	skills: "Skills",
	coreValues: "Core Values",
	excellence: "Excellence",
	sustainableArchitecture:
		"Sustainable architecture, clean code, and great UX are my mantras",
	accountable: "Accountable",
	standForDecisions: "I stand for my decisions, achievements and mistakes",
	passion: "Passion",
	loveWhatIDo: "I love what I do and you will notice it",
	kindness: "Kindness",
	eagerToHelp: "Always eager to help and understand the other side",
	testimonials: "Testimonials",
	experienceAndEducation: "Education and Work Experience",
	contributions: "Community Contributions",
	coursesAndConferences: "Last Attended Courses and Conferences",
	languages: "Languages",
	aboutMe: "About Me",
	contact: "Contact me!",
	facts: "Facts",
	webApplications: "Web Applications",
	getReadyForPlatform:
		"Get ready for a platform that's not just good-looking, but built to last!\n\nLet me take your idea from concept to launch, delivering a scalable solution tailored to your business.\n\nSay goodbye to clumsy web applications with a digital experience that will make your users say WOW!",
	uxUiDesign: "UX/UI Design",
	turnDigitalDreams:
		"I'll take your digital dreams and turn them into pixel-perfect realities that not only look good but feel great too!\n\nI'll make sure that every click, tap, and swipe is a delightful experience for your customers.\n\nSit back, relax, and let the magic begin!",
	iotPlatforms: "IoT Platforms",
	stepIntoFuture:
		"Step into the future with my IoT platform expertise!\n\nLet's turn your ideas into cutting-edge solutions that connect the physical world to the digital one\n\nWhether you want to connect your devices, revolutionize your business, or unleash your inner tech-savant!",
	lowCodeApps: "Low-Code Apps",
	whyReinventWheel:
		"Why reinvent the wheel? Not every app needs to be built from scratch.\n\nI help you decide if a low-code tool like Mendix or Bubble fits your idea.\n\nThen we build it fast and right, creating something simple, cost-effective, and tailored to your needs!",
	digitalStrategy: "Digital Strategy Consulting",
	withYearsExperience:
		"With over {{years}} years of experience in the tech industry and a track record of success with digital products across multiple industries, I've got the expertise you need to succeed!\n\nWhether you're looking to launch a new product, reinvigorate an existing one, or simply up your game, I'll help you map out a roadmap for success!",
	yearsOfExperience: "Years of Experience",
	developedApps: "Developed Apps",
	happyCustomers: "Happy Customers",
	webDevelopment: "Web Development",
	mechanicalEngineering: "Mechanical Engineering (B. Eng.)",
	wildauGermany: "Wildau, Germany",
	masterBusinessEngineering: "Master of Business Engineering (MBE®)",
	filderstadtGermany: "Filderstadt, Germany",
	kukaSoftwareEngineer: "Software Engineer - Virtual Commissioning",
	kukaAreaManager: "Area Manager - Virtual Commissioning",
	seniorSoftwareEngineer: "Senior Software Engineer",
	freelanceDeveloper: "Freelance Full-Stack Developer & UX/UI Designer",
	augsburgGermany: "Augsburg, Germany",
	munichGermany: "Munich, Germany",
	valenciaSpain: "Valencia, Spain",
	christianIsAVery:
		"Christian is a very creative person with attention to details. He really puts effort in developing what makes sense for the end user. He is also a fan of clean code and good architecture.",
	christianIsAlwaysReliable:
		"Christian is always reliable! He not only tackles his tasks with determination, but also consistently offers suggestions on how to make our software even more user-friendly. All with complete cost transparency! Anyone who gets to work with him is truly lucky!",
	hePerfectlyEmbodies:
		"He perfectly embodies the role of a skilled developer, who not only masters his technologies but also has amazing UX know-how. Both his creativity and entrepreneurial mindset bring his projects and the company forward.",
	openSourceContributions: "Open Source Contributions",
	myApps: "My Apps",
	reputation: "Reputation",
	english: "English",
	german: "German",
	spanish: "Spanish",
	portuguese: "Portuguese",
	fluent: "Fluent",
	goodCommand: "Good command",
	aboutMeData:
		"Hi, my name is Christian, but my friends call me &#34;Joker&#34;. Feel free to do the same. But I need to tell you that I&#39;m bad at telling jokes.\n\nI discovered my passion for programming when I was 9 after my father gave away my beloved dog. To honor his memory, I built a website filled with pictures of him. That&#39;s where my love affair with coding began. During high school, I took several graphic design courses and developed a strong interest also in UI design.\n\nIn my previous role as a consultant, I specialized in developing custom web applications. There, I had the opportunity to work for big companies across various industries like automotive, tourism, airlines, robotics, and medicine. After years of experience in large corporations, I&#39;ve ventured into freelance work.\n\nI would love to hear from you and discuss our next project!",
	designedAndCodedPrefix: "Designed and coded with",
	designedAndCodedSuffix: "by me.",
	love: "love",
	ctoAndCoFounder: "CTO and co-founder",
	ceoAndCoFounder: "CEO and co-founder",
	headOfStrategy: "Head of Strategy",
	present: "Present",
	yearAbbreviation: "Y",
	monthAbbreviation: "m",
	notFound: "404 - Not Found",
	pageTitle: "Christian Jöcker - Full-Stack Developer and UX/UI designer",
	pageDescription:
		"Passionate about creating great experiences with beautiful web applications. Happy customers, clean code, and sustainable architectures are my priorities.",
	pageKeyword:
		"freelancer,independent,contractor,self-employed,full-stack,full,stack,fullstack,back-end,backend,frontend,front-end,developer,engineer,software,ux,ui,web,designer",
	fullName: "Full Name",
	email: "Email",
	message: "Message",
	sendMessage: "Send Message",
	messageSent: "Message Sent!",
	responseTime: "I'll get back to you within",
	oneDay: "one day",
	error: "Error!",
	couldNotSend: "Your message could not be sent. Please send me an email to",
	pleaseFillFields: "Please fill out all fields",
	invalidEmail: "Please enter a valid email",
	close: "close",
	stackOverflowProfile: "stack overflow profile",
	expand: "expand",
	contract: "contract",
	seePage: "see page",
	website: "website",
};
const deTranslation = {
	hiImChristian: "Hey, soy Christian Jöcker,",
	fullStackDeveloper: "Desarrollador Full-Stack.",
	fullStackDeveloperPrefix: "un",
	uxUiDesigner: "Diseñador UX/UI.",
	iDontJustProgramFeatures:
		"No solo programo funciones. Te ayudo a construir aplicaciones escalables con experiencias de usuario increíbles y código que perdura.",
	discoverMore: "¡Descubre Más!",
	whatICanDoForYou: "Lo Que Puedo Hacer por Ti",
	skills: "Habilidades",
	coreValues: "Valores",
	excellence: "Excelencia",
	sustainableArchitecture:
		"La arquitectura sostenible, el código limpio y una gran UX son mis mantras",
	accountable: "Responsable",
	standForDecisions: "Me responsabilizo de mis decisiones, logros y errores",
	passion: "Pasión",
	loveWhatIDo: "Me encanta lo que hago y lo notarás",
	kindness: "Amabilidad",
	eagerToHelp: "Siempre dispuesto a ayudar y entender al otro lado",
	testimonials: "Referencias",
	experienceAndEducation: "Educación y Experiencia Laboral",
	contributions: "Contribuciones a la Comunidad",
	coursesAndConferences: "Últimos Cursos y Conferencias Asistidas",
	languages: "Idiomas",
	aboutMe: "Sobre Mí",
	contact: "Contáctame!",
	facts: "Datos",
	webApplications: "Aplicaciones Web",
	getReadyForPlatform:
		"¡Prepárate para una plataforma que no solo es bonita, sino construida para durar!\n\nPermíteme llevar tu idea desde el concepto hasta el lanzamiento, entregando una solución escalable adaptada a tu negocio.\n\n¡Di adiós a las aplicaciones web torpes con una experiencia digital que hará que tus usuarios digan ¡WOW!",
	uxUiDesign: "Diseño UX/UI",
	turnDigitalDreams:
		"¡Tomaré tus sueños digitales y los convertiré en realidades perfectas que no solo se ven bien, sino que también se sienten geniales!\n\nMe aseguraré de que cada clic y scroll sea una experiencia placentera para tus clientes.\n\n¡Siéntate, relájate y deja que comience la magia!",
	iotPlatforms: "Plataformas IoT",
	stepIntoFuture:
		"¡Adéntrate en el futuro con mi experiencia en plataformas IoT!\n\nConvirtamos tus ideas en soluciones de vanguardia que conecten el mundo físico con el digital\n\n¡Ya sea que quieras conectar tus dispositivos, revolucionar tu negocio o desatar tu sabio tecnológico interior!",
	lowCodeApps: "Aplicaciones Low-Code",
	whyReinventWheel:
		"¿Por qué reinventar la rueda? No todas las aplicaciones necesitan ser construidas desde cero.\n\nTe ayudo a decidir si una herramienta low-code como Mendix o Bubble se ajusta a tu idea.\n\n¡Luego la construimos rápido y bien, creando algo simple, rentable y adaptado a tus necesidades!",
	digitalStrategy: "Consultoría de Estrategia Digital",
	withYearsExperience:
		"¡Con más de {{years}} años de experiencia en la industria tecnológica y un historial de éxito con productos digitales en múltiples industrias, tengo la experiencia que necesitas para triunfar!\n\nYa sea que busques lanzar un nuevo producto, revitalizar uno existente o simplemente mejorar tu juego, te ayudaré a trazar un camino hacia el éxito.",
	yearsOfExperience: "Años de Experiencia",
	developedApps: "Aplicaciones Desarrolladas",
	happyCustomers: "Clientes Satisfechos",
	webDevelopment: "Desarrollo Web",
	mechanicalEngineering: "Ingeniería Mecánica (B. Eng.)",
	wildauGermany: "Wildau, Alemania",
	masterBusinessEngineering: "Máster en Ingeniería de Negocios (MBE®)",
	filderstadtGermany: "Filderstadt, Alemania",
	kukaSoftwareEngineer: "Ingeniero de Software - Comisionamiento Virtual",
	kukaAreaManager: "Gerente de Área - Comisionamiento Virtual",
	seniorSoftwareEngineer: "Ingeniero de Software Senior",
	freelanceDeveloper: "Desarrollador Full-Stack Freelance y Diseñador UX/UI",
	augsburgGermany: "Augsburgo, Alemania",
	munichGermany: "Múnich, Alemania",
	valenciaSpain: "Valencia, España",
	christianIsAVery:
		"Christian es una persona muy creativa con atención al detalle. Realmente se esfuerza en desarrollar lo que tiene sentido para el usuario final. También es un fanático del código limpio y la buena arquitectura.",
	christianIsAlwaysReliable:
		"¡Christian es siempre confiable! No solo aborda sus tareas con determinación, sino que también ofrece constantemente sugerencias sobre cómo hacer que nuestro software sea aún más fácil de usar. ¡Todo con total transparencia en los costos! ¡Cualquiera que tenga la oportunidad de trabajar con él es verdaderamente afortunado!",
	hePerfectlyEmbodies:
		"Encarna perfectamente el papel de un desarrollador experto, que no solo domina sus tecnologías sino que también tiene un increíble conocimiento de UX. Tanto su creatividad como su mentalidad empresarial impulsan sus proyectos y la empresa.",
	openSourceContributions: "Contribuciones Open-Source",
	myApps: "Mis Aplicaciones",
	reputation: "Reputación",
	english: "Inglés",
	german: "Alemán",
	spanish: "Español",
	portuguese: "Portugués",
	fluent: "Fluido",
	goodCommand: "Buen dominio",
	aboutMeData:
		'Hola, mi nombre es Christian, pero mis amigos me llaman "Joker". Siéntete libre de hacer lo mismo. Pero debo decirte que soy malo contando chistes.\n\nDescubrí mi pasión por la programación cuando tenía 9 años después de que mi padre regalara a mi querido perro. Para honrar su memoria, construí un sitio web lleno de fotos de él. Ahí comenzó mi romance con la programación. Durante la escuela secundaria, tomé varios cursos de diseño gráfico y desarrollé un fuerte interés también en el diseño de UI.\n\nEn mi rol anterior como consultor, me especialicé en desarrollar aplicaciones web personalizadas. Allí, tuve la oportunidad de trabajar para grandes empresas en diversas industrias como automotriz, turismo, aerolíneas, robótica y medicina. Después de años de experiencia en grandes corporaciones, me he aventurado en el trabajo freelance.\n\n¡Me encantaría saber de ti y discutir nuestro próximo proyecto!',
	designedAndCodedPrefix: "Diseñado y programado con",
	designedAndCodedSuffix: "por mí.",
	love: "amor",
	ctoAndCoFounder: "CTO y cofundador",
	ceoAndCoFounder: "CEO y cofundador",
	headOfStrategy: "Jefe de estrategia",
	present: "Presente",
	yearAbbreviation: "a",
	monthAbbreviation: "m",
	notFound: "404 - No encontrado",
	pageTitle: "Christian Jöcker - Desarrollador Full-Stack y diseñador UX/UI",
	pageDescription:
		"Apasionado por crear grandes experiencias con hermosas aplicaciones web. Clientes felices, código limpio y arquitecturas sostenibles son mis prioridades.",
	pageKeyword:
		"freelancer,independiente,contratista,autónomo,full-stack,full,stack,fullstack,back-end,backend,frontend,front-end,desarrollador,ingeniero,software,ux,ui,web,diseñador",
	fullName: "Nombre completo",
	email: "Correo electrónico",
	message: "Mensaje",
	sendMessage: "Enviar mensaje",
	messageSent: "¡Mensaje enviado!",
	responseTime: "Te responderé en",
	oneDay: "un día",
	error: "¡Error!",
	couldNotSend:
		"Tu mensaje no pudo ser enviado. Por favor, envíame un correo electrónico a",
	pleaseFillFields: "Por favor, completa todos los campos",
	invalidEmail: "Por favor, introduce un email válido",
	close: "cerrar",
	stackOverflowProfile: "perfil de stack overflow",
	expand: "expandir",
	contract: "contraer",
	seePage: "ver página",
	website: "sitio web",
};
const supportedLngs = ["es", "en", "de"];
const fallbackLng = "es";
const defaultNS = "translation";
const resources = {
	en: { translation: enTranslation },
	es: { translation: deTranslation },
	de: { translation: deTranslation },
};
const dateFnsLocales = {
	es,
	de,
	en: enUS,
};
function setI18nLocale(locale) {
	const dateFnsLocale = dateFnsLocales[locale ?? "en"];
	setDefaultOptions({ locale: dateFnsLocale });
}
const i18n = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			dateFnsLocales,
			defaultNS,
			fallbackLng,
			resources,
			setI18nLocale,
			supportedLngs,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
const i18nServer = new RemixI18Next({
	detection: {
		supportedLanguages: supportedLngs,
		fallbackLanguage: fallbackLng,
	},
	// This is the configuration for i18next used
	// when translating messages server-side only
	i18next: {
		...i18n,
	},
});
const ABORT_DELAY = 5e3;
async function handleRequest(
	request,
	responseStatusCode,
	responseHeaders,
	remixContext,
) {
	let callbackName = isbot(request.headers.get("user-agent"))
		? "onAllReady"
		: "onShellReady";
	const instance = createInstance();
	const lng = await i18nServer.getLocale(request);
	const ns = i18nServer.getRouteNamespaces(remixContext);
	await instance.use(initReactI18next).init({ ...i18n, lng, ns });
	return new Promise((resolve2, reject) => {
		let didError = false;
		let { pipe, abort } = renderToPipeableStream(
			/* @__PURE__ */ jsx(ServerRouter, {
				context: remixContext,
				url: request.url,
			}),
			{
				[callbackName]: () => {
					let body = new PassThrough();
					const stream = createReadableStreamFromReadable(body);
					responseHeaders.set("Content-Type", "text/html");
					resolve2(
						new Response(stream, {
							headers: responseHeaders,
							status: didError ? 500 : responseStatusCode,
						}),
					);
					pipe(body);
				},
				onShellError(error) {
					reject(error);
				},
				onError(error) {
					didError = true;
					console.error(error);
				},
			},
		);
		setTimeout(abort, ABORT_DELAY);
	});
}
const entryServer = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			default: handleRequest,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
function withComponentProps(Component2) {
	return function Wrapped() {
		const props = {
			params: useParams(),
			loaderData: useLoaderData(),
			actionData: useActionData(),
			matches: useMatches(),
		};
		return createElement(Component2, props);
	};
}
function withErrorBoundaryProps(ErrorBoundary3) {
	return function Wrapped() {
		const props = {
			params: useParams(),
			loaderData: useLoaderData(),
			actionData: useActionData(),
			error: useRouteError(),
		};
		return createElement(ErrorBoundary3, props);
	};
}
const SplideStyles = "/assets/splide.min-D7wrQ6zr.css";
const POSTHOG_IGNORE_KEY = "posthog_ignore";
const RalewayFont600Woff = "/assets/raleway-v28-latin-600-C_DuyM2l.woff";
const RalewayFont600Woff2 = "/assets/raleway-v28-latin-600-qlcT-kco.woff2";
const RalewayFont800Woff = "/assets/raleway-v28-latin-800-CNoFq940.woff";
const RalewayFont800Woff2 = "/assets/raleway-v28-latin-800-GcJccCw7.woff2";
const RalewayFontRegularWoff =
	"/assets/raleway-v28-latin-regular-D2N-7lIF.woff";
const RalewayFontRegularWoff2 =
	"/assets/raleway-v28-latin-regular-D4TnAZR_.woff2";
const MainStyles = "/assets/main-DXUbKQ88.css";
const meta = () => {
	return [
		{
			title:
				"Christian Jöcker - Freelance Full-Stack Developer and UX/UI designer",
		},
		{
			charset: "utf-8",
		},
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
const links = () => {
	return [
		{
			rel: "stylesheet",
			href: MainStyles,
		},
		{
			rel: "stylesheet",
			href: SplideStyles,
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
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			href: "/favicon.png",
		},
	];
};
const handle = {
	i18n: ["translation"],
};
async function loader$1({ request }) {
	const { pathname, search } = new URL(request.url);
	const locale = await i18nServer.getLocale(request);
	const t = await i18nServer.getFixedT(request);
	const pageTitle = t("areWelcome");
	console.log("pageTitle", pageTitle);
	if (pathname.endsWith("/") && pathname !== "/") {
		throw redirect(`${pathname.slice(0, -1)}${search}`, 301);
	}
	return {
		locale,
	};
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
const root = withComponentProps(function Root() {
	const loaderData = useLoaderData();
	const locale =
		(loaderData == null ? void 0 : loaderData.locale) ?? fallbackLng;
	setI18nLocale(locale);
	useChangeLanguage(locale);
	return /* @__PURE__ */ jsxs("html", {
		lang: locale,
		children: [
			/* @__PURE__ */ jsxs("head", {
				children: [
					/* @__PURE__ */ jsx(Meta, {}),
					/* @__PURE__ */ jsx(Links, {}),
				],
			}),
			/* @__PURE__ */ jsxs("body", {
				children: [
					/* @__PURE__ */ jsx(Outlet, {}),
					/* @__PURE__ */ jsx(ScrollRestoration, {}),
					/* @__PURE__ */ jsx(Scripts, {}),
					/* @__PURE__ */ jsx(PosthogInit, {}),
				],
			}),
		],
	});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
	error,
}) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (error && error instanceof Error) {
		Sentry.captureException(error);
	}
	return /* @__PURE__ */ jsxs("main", {
		children: [
			/* @__PURE__ */ jsx("h1", {
				children: message,
			}),
			/* @__PURE__ */ jsx("p", {
				children: details,
			}),
			stack,
		],
	});
});
const route0 = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			ErrorBoundary,
			default: root,
			handle,
			links,
			loader: loader$1,
			meta,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
const ChristianImg = "/assets/christian-DJWipWPs.jpg";
const Signature = "/assets/signature-Dcas16_p.svg";
const useVisibleSection = create$1((set) => {
	return {
		visibleSection: "",
		setVisibleSection: (section) => {
			set(() => {
				return { visibleSection: section };
			});
		},
	};
});
function convertToSnakeCase(str) {
	return str
		.replaceAll(/([A-Z])/g, "_$1")
		.toLowerCase()
		.replace(/^_/, "");
}
function useCaptureSeenSection(ref, titleKey) {
	const isInView = useInView(ref);
	const isHydrated = useHydrated();
	const hasBeenSeen = useRef(false);
	const { setVisibleSection } = useVisibleSection();
	useEffect(() => {
		if (!hasBeenSeen.current && isInView) {
			hasBeenSeen.current = true;
		}
		if (isHydrated && hasBeenSeen.current) {
			const sectionName = convertToSnakeCase(titleKey);
			posthog.capture("user_sees_section", {
				is_visible: isInView,
				section_name: sectionName,
			});
			if (isInView) {
				setVisibleSection(sectionName);
			}
		}
	}, [isHydrated, isInView, setVisibleSection, titleKey]);
}
const Section = ({
	titleKey,
	hideTitle,
	children: children2,
	className,
	isLast,
}) => {
	const { t } = useTranslation();
	const ref = useRef(null);
	useCaptureSeenSection(ref, titleKey);
	return /* @__PURE__ */ jsxs("section", {
		className: `mx-4 ${isLast ? "mb-12" : "mb-[30vh]"} max-w-[100vw] ${className}`,
		ref,
		children: [
			!hideTitle &&
				/* @__PURE__ */ jsx("h2", {
					className: "mb-12 text-xl font-bold",
					children: t(titleKey),
				}),
			children2,
		],
	});
};
function useTranslationWithMarkdown() {
	const { t, ...rest } = useTranslation();
	const tMarkdown = React.useCallback(
		(key, options) => {
			return /* @__PURE__ */ jsx("div", {
				className: "markdown",
				children: /* @__PURE__ */ jsx(Markdown, {
					remarkPlugins: [remarkGfm],
					children: t(key, options ?? {}),
				}),
			});
		},
		[t],
	);
	return { tm: tMarkdown, ...rest };
}
const CLICKS_THRESHOLD = 5;
const AboutMe = () => {
	const { t } = useTranslation();
	const { tm } = useTranslationWithMarkdown();
	const sectionClicks = useRef(0);
	const handleSectionClick = () => {
		sectionClicks.current += 1;
		if (sectionClicks.current === CLICKS_THRESHOLD) {
			sectionClicks.current = 0;
			handleAddPostHogIgnore();
		}
	};
	const handleAddPostHogIgnore = () => {
		globalThis.localStorage.setItem(POSTHOG_IGNORE_KEY, "true");
		alert("posthog ignore set to true");
	};
	return /* @__PURE__ */ jsx(Section, {
		titleKey: "aboutMe",
		hideTitle: true,
		children: /* @__PURE__ */ jsxs(motion.div, {
			onClick: handleSectionClick,
			initial: "hidden",
			whileInView: "visible",
			viewport: { amount: 0.1, once: true },
			transition: { duration: 0.7 },
			variants: {
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			},
			className:
				"mx-auto grid max-w-4xl grid-cols-1 gap-x-9 gap-y-6 overflow-hidden rounded-2xl p-6 sm:grid-cols-5",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "col-span-1 sm:col-span-2",
					children: /* @__PURE__ */ jsx("img", {
						loading: "lazy",
						className:
							"shadow-lg-purple h-full w-full -rotate-2 rounded-2xl object-cover",
						height: 512,
						width: 384,
						alt: "christian",
						src: ChristianImg,
					}),
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "col-span-1 my-auto text-left sm:col-span-3",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "mb-4 text-xl font-semibold",
							children: t("aboutMe"),
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-base",
							children: tm("aboutMeData"),
						}),
						/* @__PURE__ */ jsx("img", {
							loading: "lazy",
							className: "mt-4",
							height: 50 * 0.8,
							width: 280 * 0.8,
							alt: "handwritten name",
							src: Signature,
						}),
					],
				}),
			],
		}),
	});
};
const Button = ({ onClick, children: children2, iconButton, ariaLabel }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "grow-0",
		children: /* @__PURE__ */ jsx(motion.button, {
			"aria-label": ariaLabel,
			onClick,
			style: { boxShadow: "0px 0px 30px -10px #00DFD866" },
			whileTap: { scale: 1 },
			whileHover: { scale: 1.05 },
			className: `from-turquoise to-blue text-secondary ml-auto flex items-center bg-linear-to-br p-[2px] align-middle font-semibold select-none hover:cursor-pointer ${iconButton ? "h-20 w-20 rounded-full" : "rounded-md"}`,
			children: /* @__PURE__ */ jsx("div", {
				className: `bg-neutral-dark/80 flex h-full w-full px-4 py-3 ${iconButton ? "rounded-full" : "rounded-md"}`,
				children: children2,
			}),
		}),
	});
};
const ButtonIcon = ({ alt, src }) => {
	return /* @__PURE__ */ jsx("img", {
		loading: "lazy",
		width: "38.5",
		height: "38.5",
		alt,
		src,
		className: "pointer-events-none h-full w-full object-contain select-none",
	});
};
const ExternalRedirect = ({ children: children2, className, to }) => {
	return /* @__PURE__ */ jsx("a", {
		href: to,
		target: "_blank",
		onClick: (e) => {
			e.target.blur();
			e.stopPropagation();
		},
		className: `cursor-pointer ${className}`,
		rel: "noreferrer",
		children: children2,
	});
};
const EmailIcon =
	"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20width='24'%20fill='%23fff'%3e%3cpath%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M20%204H4c-1.1%200-1.99.9-1.99%202L2%2018c0%201.1.9%202%202%202h16c1.1%200%202-.9%202-2V6c0-1.1-.9-2-2-2zm0%204l-8%205-8-5V6l8%205%208-5v2z'/%3e%3c/svg%3e";
const GithubIcon =
	"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20width='24'%20fill='%23fff'%3e%3cpath%20d='M12%202.247c-9.32%200-13.264%2012.558-5.906%2018.07a9.717%209.717%200%20002.745%201.419c1.181.22.67-2.14.669-2.343-2.782.605-3.369-1.18-3.369-1.18-.455-1.156-1.11-1.463-1.11-1.463-.907-.621.068-.608.068-.608%201.005.071%201.533%201.031%201.533%201.031.892%201.528%202.34%201.086%202.91.831.09-.646.349-1.088.635-1.337-1.041-.119-2.29-.403-3.111-1.129-1.78-1.576-2.036-4.72-.415-6.498-.103-.251-.446-1.268.097-2.646%200%200%20.84-.269%202.751%201.025a9.498%209.498%200%20015.008%200c1.909-1.294%202.747-1.025%202.747-1.025.545%201.378.202%202.395.099%202.646%201.624%201.776%201.365%204.928-.419%206.499-.823.725-2.076%201.004-3.118%201.12%201.238%201.072.611%203.313.666%204.596.018.418.326.55.687.48a9.709%209.709%200%20002.743-1.42C25.263%2014.801%2021.319%202.247%2012%202.247'/%3e%3c/svg%3e";
const LinkedinIcon =
	"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20width='24'%20fill='%23fff'%3e%3cpath%20d='M20.527%202c.814.003%201.473.643%201.473%201.433v17.135c0%20.791-.662%201.432-1.478%201.432H3.478C2.662%2022%202%2021.359%202%2020.568V3.433C2%202.642%202.662%202%203.478%202h17.049zm-7.8%209.008V9.734H9.735c.039.844-.001%209.004-.001%209.004v-.001h2.993V13.71c0-.269.019-.539.099-.731.216-.537.708-1.094%201.535-1.094%201.083%200%201.516.825%201.516%202.036v4.816h2.993v-5.162c0-2.766-1.477-4.053-3.446-4.053-1.587%200-2.299.873-2.697%201.486v.031h-.02l.02-.031zM5.085%209.733v9.004h2.993V9.733H5.085zm1.497-1.229c1.043%200%201.693-.691%201.693-1.555-.019-.884-.65-1.556-1.673-1.556-1.024%200-1.693.672-1.693%201.556%200%20.864.649%201.555%201.653%201.555h.02z'/%3e%3c/svg%3e";
const VideoCallIcon =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cpath%20d='M437.022%2074.978A256.117%20256.117%200%2000256.02.025C115.57.025-.004%20115.598-.004%20256.049a256.045%20256.045%200%200038.061%20134.314l5.684%209.2L0%20512l112.44-43.74%209.2%205.683a256.039%20256.039%200%2000134.333%2038.073c140.449%200%20256.02-115.571%20256.02-256.02a256.111%20256.111%200%2000-74.971-181.018zm-39.171%20103.831a6.283%206.283%200%20012.779%205.207v143.97c0%203.438-2.829%206.267-6.267%206.267a6.262%206.262%200%2001-2.379-.469L320%20304.347l-.333%2022.607c-.178%2012.088-9.313%2023.18-21.86%2023.18H133.249c-12.7%200-21.879-11.346-21.879-23.573V185.433c0-12.227%209.178-23.567%2021.879-23.567h164.557c12.547%200%2021.682%2011.1%2021.86%2023.185l.334%2022.611%2071.987-29.453a6.268%206.268%200%20015.864.6z'%20fill='%23fff'/%3e%3c/svg%3e";
const ContactInformation = [
	{
		alt: "video-call",
		text: "schedule a video call",
		href: "https://calendly.com/jockerdev/30min",
		image: VideoCallIcon,
	},
	{
		alt: "message",
		text: "send a message",
		href: "/contact",
		image: EmailIcon,
	},
	{
		alt: "linkedin",
		text: "christianjoecker",
		href: "https://www.linkedin.com/in/christianjoecker/",
		image: LinkedinIcon,
	},
	{
		alt: "github",
		text: "cjoecker",
		href: "https://github.com/cjoecker",
		image: GithubIcon,
	},
];
const Contact = () => {
	return /* @__PURE__ */ jsx(Section, {
		titleKey: "contact",
		isLast: true,
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: "hidden",
			whileInView: "visible",
			viewport: { amount: 0.5, once: true },
			transition: {
				staggerChildren: 0.1,
			},
			className: "mx-auto flex flex-wrap justify-center gap-9",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap justify-center gap-9",
					children: [
						/* @__PURE__ */ jsx(ContactButton, {
							contactInformation: ContactInformation[0],
						}),
						/* @__PURE__ */ jsx(ContactButton, {
							contactInformation: ContactInformation[1],
						}),
					],
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap justify-center gap-9",
					children: [
						/* @__PURE__ */ jsx(ContactButton, {
							contactInformation: ContactInformation[2],
						}),
						/* @__PURE__ */ jsx(ContactButton, {
							contactInformation: ContactInformation[3],
						}),
					],
				}),
			],
		}),
	});
};
const ContactButton = ({ contactInformation }) => {
	const isMessageButton = contactInformation.alt === "message";
	const navigate = useNavigate();
	return /* @__PURE__ */ jsx(Button, {
		iconButton: true,
		ariaLabel: contactInformation.text,
		onClick: () => {
			if (isMessageButton) {
				void navigate("/contact", { preventScrollReset: true });
			}
		},
		children: isMessageButton
			? /* @__PURE__ */ jsx(ButtonIcon, {
					alt: contactInformation.alt,
					src: contactInformation.image,
				})
			: /* @__PURE__ */ jsx(ExternalRedirect, {
					className: "flex h-full w-full",
					to: contactInformation.href,
					children: /* @__PURE__ */ jsx(ButtonIcon, {
						alt: contactInformation.alt,
						src: contactInformation.image,
					}),
				}),
	});
};
const MeshPurple =
	"data:image/svg+xml,%3csvg%20width='1004'%20height='944'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23a)'%3e%3cpath%20d='M240.309%20368.372c-92.053-48.991-1.076-89.888%2055.919-104.213%2045.525%204.297%20155.931.43%20233.359-49.421%2096.784-62.313%20194.644%2099.916%20259.167%20234.212%2064.523%20134.296-101.086%20212.724-276.373%20284.707-175.288%2071.982%2051.618-297.6-106.463-234.212-158.081%2063.388-50.544-69.834-165.609-131.073z'%20fill='%238F00FF'%20fill-opacity='.3'/%3e%3cpath%20d='M240.309%20368.372c-92.053-48.991-1.076-89.888%2055.919-104.213%2045.525%204.297%20155.931.43%20233.359-49.421%2096.784-62.313%20194.644%2099.916%20259.167%20234.212%2064.523%20134.296-101.086%20212.724-276.373%20284.707-175.288%2071.982%2051.618-297.6-106.463-234.212-158.081%2063.388-50.544-69.834-165.609-131.073z'%20fill='%23000'%20fill-opacity='.2'/%3e%3cpath%20d='M240.309%20368.372c-92.053-48.991-1.076-89.888%2055.919-104.213%2045.525%204.297%20155.931.43%20233.359-49.421%2096.784-62.313%20194.644%2099.916%20259.167%20234.212%2064.523%20134.296-101.086%20212.724-276.373%20284.707-175.288%2071.982%2051.618-297.6-106.463-234.212-158.081%2063.388-50.544-69.834-165.609-131.073z'%20stroke='%23000'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='a'%20x='.499'%20y='.5'%20width='1003'%20height='943'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='100'%20result='effect1_foregroundBlur_103_331'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";
const StackOverflowLogo =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%2076%2090'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cg%20fill-rule='nonzero'%3e%3cpath%20d='M71.826%2074.898V50.787h8.003V82.9H7.6V50.787h8.002v24.11h56.224z'%20fill='rgb(188,187,187)'%20transform='translate(-7.6%207.1)'/%3e%3cpath%20d='M24.436%2048.5l39.284%208.21%201.663-7.898-39.284-8.21-1.663%207.898zm5.196-18.706l36.374%2016.94%203.326-7.275-36.374-17.044-3.326%207.379zm10.081-17.876l30.866%2025.67%205.093-6.131-30.867-25.67-5.092%206.131zM59.667-7.1l-6.444%204.78%2023.903%2032.218%206.444-4.781L59.667-7.1zM23.605%2066.791H63.72V58.79H23.605v8.002z'%20fill='rgb(244,128,35)'%20transform='translate(-7.6%207.1)'/%3e%3c/g%3e%3c/svg%3e";
const ThreePointEstimatorIcon =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%20400%20400'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='1.5'%3e%3cpath%20transform='matrix(1.00187%200%200%201.00332%20-.355%20-1.05)'%20d='M0.355%201.046H399.607V399.721H0.355z'%20fill='rgb(0,52,32)'/%3e%3ccircle%20cx='223.739'%20cy='201.329'%20r='63.965'%20transform='matrix(.70351%200%200%20.70402%2042.597%2058.26)'%20fill='none'%20stroke='rgb(219,188,115)'%20stroke-width='8.53px'/%3e%3ccircle%20cx='223.739'%20cy='201.329'%20r='63.965'%20transform='translate(122.543%20-21.834)%20scale(.70351)'%20fill='none'%20stroke='white'%20stroke-width='8.53px'/%3e%3ccircle%20cx='223.739'%20cy='201.329'%20r='63.965'%20transform='translate(-41.01%20138.57)%20scale(.70351)'%20fill='none'%20stroke='white'%20stroke-width='8.53px'/%3e%3c/svg%3e";
const CoreValuesFinderIcon = "/assets/core-values-finder-_vg3Bk_m.svg";
const CurriculumGeneratorIcon = "/assets/curriculum-generator-DqWsR_Qr.svg";
const DcideIcon = "/assets/d-cide-DPbF-IOk.svg";
const FramerMotionIcon =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%2066%2021'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cpath%20d='M0%200h14v7H7L0%200zm0%207h7l7%207H7v7l-7-7V7z'%20fill-rule='nonzero'%20fill='%23fff'%20/%3e%3cg%3e%3cpath%20d='M89.795%208.986V.397h2.596l1.558%205.859L95.49.397h2.602v8.589h-1.611V2.225l-1.705%206.761h-1.67l-1.699-6.761v6.761h-1.612zM99.422%205.787c0-.547.135-1.076.404-1.588.27-.511.652-.902%201.146-1.172a3.405%203.405%200%20011.655-.404c.942%200%201.713.306%202.315.917.601.612.902%201.384.902%202.318%200%20.941-.304%201.721-.911%202.34-.608.62-1.372.929-2.294.929-.57%200-1.114-.129-1.632-.387a2.653%202.653%200%2001-1.181-1.133c-.269-.498-.404-1.105-.404-1.82zm1.688.088c0%20.617.146%201.09.439%201.418.293.328.654.492%201.084.492.43%200%20.79-.164%201.081-.492.291-.328.437-.805.437-1.43%200-.609-.146-1.078-.437-1.406a1.387%201.387%200%2000-1.081-.492c-.43%200-.791.164-1.084.492-.293.328-.439.801-.439%201.418zM109.987%202.764v1.312h-1.125v2.508c0%20.508.01.804.032.888a.36.36%200%2000.146.208.463.463%200%2000.279.082c.152%200%20.373-.053.662-.158l.14%201.277a3.269%203.269%200%2001-1.3.246c-.297%200-.565-.05-.803-.149-.238-.1-.413-.229-.525-.387-.111-.158-.188-.372-.231-.642-.035-.191-.053-.578-.053-1.16V4.076h-.756V2.764h.756V1.527l1.653-.96v2.197h1.125zM111.129%201.92V.397h1.647V1.92h-1.647zm0%207.066V2.764h1.647v6.222h-1.647zM114.082%205.787c0-.547.135-1.076.405-1.588a2.779%202.779%200%20011.145-1.172%203.405%203.405%200%20011.655-.404c.942%200%201.713.306%202.315.917.601.612.902%201.384.902%202.318%200%20.941-.304%201.721-.911%202.34-.607.62-1.372.929-2.294.929-.57%200-1.114-.129-1.632-.387a2.646%202.646%200%2001-1.18-1.133c-.27-.498-.405-1.105-.405-1.82zm1.688.088c0%20.617.146%201.09.439%201.418.293.328.655.492%201.084.492.43%200%20.79-.164%201.081-.492.291-.328.437-.805.437-1.43%200-.609-.146-1.078-.437-1.406a1.387%201.387%200%2000-1.081-.492c-.429%200-.791.164-1.084.492-.293.328-.439.801-.439%201.418zM127.453%208.986h-1.646V5.811c0-.672-.035-1.107-.106-1.304a.912.912%200%2000-.342-.46.986.986%200%2000-.572-.164c-.285%200-.541.078-.767.234a1.185%201.185%200%2000-.466.621c-.084.258-.126.735-.126%201.43v2.818h-1.646V2.764h1.529v.914c.543-.703%201.226-1.055%202.051-1.055.363%200%20.695.066.996.196.3.131.528.298.682.501.155.204.262.434.323.692.06.258.09.627.09%201.107v3.867z'%20fill-rule='nonzero'%20fill='%23fff'%20transform='translate(-88.346%204.74)%20scale(1.20976)'/%3e%3c/g%3e%3c/svg%3e";
const MuiIcon =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%2030%2026'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cpath%20d='M25.286%2017.707a.836.836%200%2000.418-.72l.015-4.823a.836.836%200%2001.418-.72l2.615-1.5a.827.827%200%2001.415-.112c.457%200%20.833.376.833.833v8.768c0%20.298-.16.574-.418.722l-9.866%205.667a.837.837%200%2001-.829.001l-7.742-4.429a.834.834%200%2001-.42-.723v-4.42c0-.006.006-.009.011-.007.004.003.01%200%20.01-.005v-.005c0-.004.001-.007.005-.009l6.376-3.663c.006-.003.004-.013-.003-.013a.006.006%200%2001-.006-.006l.012-4.334v-.004a.837.837%200%2000-.833-.833.835.835%200%2000-.417.112l-4.739%202.73a.83.83%200%2001-.832%200L5.555%207.477a.837.837%200%2000-1.249.722v7.834a.837.837%200%2001-1.247.723L.421%2015.248a.834.834%200%2001-.42-.725L.024.831a.837.837%200%20011.248-.72L10.31%205.3a.831.831%200%2000.83%200l9.035-5.19a.837.837%200%20011.248.723V14.53a.834.834%200%2001-.417.722l-4.732%202.725a.835.835%200%2000.004%201.446l2.61%201.486a.833.833%200%2000.827-.002l5.571-3.199zm.547-12.285a.838.838%200%2000.834.833.827.827%200%2000.428-.119l2.5-1.5A.833.833%200%200030%203.922V.865a.833.833%200%2000-1.262-.713l-2.5%201.5a.837.837%200%2000-.405.714v3.057z'%20fill='rgb(0,127,255)'/%3e%3c/svg%3e";
const StackOverflowDefaults = {
	reputation: 4453,
	goldBadge: 1,
	silverBadge: 34,
	bronzeBadge: 40,
	profileUrl: "https://stackoverflow.com/users/4934446",
};
const OpenSourceContributions = [
	{
		name: "MUI (Material-UI)",
		link: "https://mui.com/",
		icon: MuiIcon,
	},
	{
		name: "Framer Motion",
		link: "https://www.framer.com/motion/",
		icon: FramerMotionIcon,
	},
];
const OwnApps = [
	{
		name: "d-cide",
		link: "https://d-cide.me/",
		icon: DcideIcon,
	},
	{
		name: "Core Values Finder",
		link: "https://cjoecker.github.io/core-values-finder/",
		icon: CoreValuesFinderIcon,
	},
	{
		name: "3 Point Estimator",
		link: "https://cjoecker.github.io/3-point-estimator/",
		icon: ThreePointEstimatorIcon,
	},
	{
		name: "Curriculum Generator",
		link: "https://github.com/cjoecker/curriculum-generator",
		icon: CurriculumGeneratorIcon,
	},
];
const Contributions = () => {
	return /* @__PURE__ */ jsx(Section, {
		titleKey: "contributions",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex flex-wrap justify-center gap-x-24 gap-y-36",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "relative flex min-w-[250px] flex-col",
						children: [
							/* @__PURE__ */ jsx(Mesh, {}),
							/* @__PURE__ */ jsx(MyApps, {}),
						],
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative flex min-w-[270px] flex-col",
						children: [
							/* @__PURE__ */ jsx(Mesh, {}),
							/* @__PURE__ */ jsx(OpenSource, {}),
						],
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative flex min-w-[200px] flex-col",
						children: [
							/* @__PURE__ */ jsx(Mesh, {}),
							/* @__PURE__ */ jsx(StackOverflow, {}),
						],
					}),
				],
			}),
		}),
	});
};
const Mesh = () => {
	return /* @__PURE__ */ jsx("img", {
		"aria-hidden": "true",
		alt: "",
		height: 800,
		width: 600,
		className:
			"absolute top-1/2 left-1/2 -z-10 h-[150%] min-h-[400px] w-[200%] min-w-[500px] -translate-x-1/2 -translate-y-1/2",
		src: MeshPurple,
	});
};
const StackOverflow = () => {
	var _a;
	const { t } = useTranslation();
	const [profilesData, setProfilesData] = useState(null);
	const profile =
		(_a = profilesData == null ? void 0 : profilesData.items) == null
			? void 0
			: _a[0];
	useEffect(() => {
		try {
			void fetch(STACK_OVERFLOW_API)
				.then((res) => {
					if (!res.ok) {
						throw new Error("Network response was not ok");
					}
					return res.json();
				})
				.then((res) => {
					setProfilesData(res);
				});
		} catch (error) {
			console.error("Error fetching Stack Overflow data:", error);
		}
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			/* @__PURE__ */ jsx("h3", {
				className: "mb-6 text-lg font-semibold",
				children: "Stack Overflow",
			}),
			/* @__PURE__ */ jsx(ExternalRedirect, {
				to: StackOverflowDefaults.profileUrl,
				className: "mx-auto flex text-left",
				children: /* @__PURE__ */ jsxs(motion.div, {
					whileTap: { scale: 1 },
					whileHover: { scale: 1.1 },
					variants: {
						visible: { opacity: 1 },
						hidden: { opacity: 0 },
					},
					viewport: { amount: 0.9, once: true },
					initial: "hidden",
					whileInView: "visible",
					"aria-label": t("stackOverflowProfile"),
					className:
						"border-secondary/10 from-neutral to-neutral-dark text-secondary mx-auto flex max-w-fit flex-col rounded-xl border-2 border-solid bg-linear-to-br px-4 py-2 hover:cursor-pointer",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex",
							children: [
								/* @__PURE__ */ jsx("img", {
									loading: "lazy",
									className: "my-auto mr-4",
									height: "45",
									width: "38",
									alt: "stack overflow logo",
									src: StackOverflowLogo,
								}),
								/* @__PURE__ */ jsxs("div", {
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "-mb-1.5 ml-1",
											children: "Reputation",
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-xl",
											children: (
												(profile == null ? void 0 : profile.reputation) ??
												StackOverflowDefaults.reputation
											).toLocaleString("en-US"),
										}),
									],
								}),
							],
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-1.5 flex w-full justify-between",
							children: [
								/* @__PURE__ */ jsx(Badge, {
									color: "#D0A600",
									number:
										(profile == null ? void 0 : profile.badge_counts.gold) ??
										StackOverflowDefaults.goldBadge,
								}),
								/* @__PURE__ */ jsx(Badge, {
									color: "#707A81",
									number:
										(profile == null ? void 0 : profile.badge_counts.silver) ??
										StackOverflowDefaults.silverBadge,
								}),
								/* @__PURE__ */ jsx(Badge, {
									color: "#986400",
									number:
										(profile == null ? void 0 : profile.badge_counts.bronze) ??
										StackOverflowDefaults.bronzeBadge,
								}),
							],
						}),
					],
				}),
			}),
		],
	});
};
const Badge = ({ color, number }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "my-auto h-2 w-2 rounded-full",
				style: { backgroundColor: color },
			}),
			/* @__PURE__ */ jsx("span", {
				className: "text-md mb-1 ml-2",
				children: number,
			}),
		],
	});
};
const OpenSource = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			/* @__PURE__ */ jsx("h3", {
				className: "mb-6 text-lg font-semibold",
				children: t("openSourceContributions"),
			}),
			/* @__PURE__ */ jsx(motion.div, {
				initial: "hidden",
				whileInView: "visible",
				viewport: { amount: 0.9, once: true },
				transition: {
					staggerChildren: 0.3,
				},
				className: "mx-auto flex flex-col gap-12",
				children: OpenSourceContributions.map((contribution) => {
					return /* @__PURE__ */ jsx(
						ExternalRedirect,
						{
							to: contribution.link,
							children: /* @__PURE__ */ jsxs(motion.div, {
								whileTap: { scale: 1 },
								whileHover: { scale: 1.1 },
								variants: {
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								},
								className: "hover:cursor-pointer",
								"aria-label": `${contribution.name} ${t("website")}`,
								children: [
									/* @__PURE__ */ jsx("img", {
										loading: "lazy",
										alt: `${contribution.name} logo`,
										width: "50",
										height: "50",
										className: "mx-auto max-h-[60px] w-auto",
										src: contribution.icon,
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-md text-secondary",
										children: contribution.name,
									}),
								],
							}),
						},
						contribution.name,
					);
				}),
			}),
		],
	});
};
const MyApps = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			/* @__PURE__ */ jsx("h3", {
				className: "mb-8 text-lg font-semibold",
				children: t("myApps"),
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex",
				children: /* @__PURE__ */ jsx(motion.div, {
					className: "m-auto grid grid-cols-2 gap-8",
					initial: "hidden",
					whileInView: "visible",
					viewport: { amount: 0.2, once: true },
					transition: {
						staggerChildren: 0.3,
					},
					children: OwnApps.map((app) => {
						return /* @__PURE__ */ jsx(
							motion.div,
							{
								className: "col-span-1 flex flex-col",
								variants: {
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								},
								children: /* @__PURE__ */ jsxs(ExternalRedirect, {
									className: "hover:cursor-pointer",
									to: app.link,
									children: [
										/* @__PURE__ */ jsx(motion.div, {
											whileTap: { scale: 1 },
											whileHover: { scale: 1.1 },
											className: "mx-auto mb-2 h-16 w-16 rounded-xl",
											children: /* @__PURE__ */ jsx(motion.img, {
												loading: "lazy",
												alt: `${app.name} logo`,
												className: "h-full w-full rounded-xl",
												src: app.icon,
											}),
										}),
										/* @__PURE__ */ jsx("div", {
											className: "max-w-[100px]",
											children: app.name,
										}),
									],
								}),
							},
							app.name,
						);
					}),
				}),
			}),
		],
	});
};
const STACK_OVERFLOW_API =
	"https://api.stackexchange.com/2.3/users/4934446?order=desc&sort=reputation&site=stackoverflow";
const MeditatingImage = "/assets/meditating-DFmFxTkz.webp";
const MeshPurpleTurquoise =
	"data:image/svg+xml,%3csvg%20width='956'%20height='778'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23a)'%3e%3cpath%20d='M223.18%20298.207c-51.941-28.023-.607-51.417%2031.552-59.611%2025.687%202.459%2087.983.246%20131.671-28.268%2054.61-35.644%20124.649%2037.016%20161.056%20113.833%2036.407%2076.818%2055.692%20204.383-43.213%20245.557-98.905%2041.174-203.307-103.587-236.416-150.907-54.042-77.237%2020.275-85.576-44.65-120.604z'%20fill='%2300F0FF'%20fill-opacity='.3'/%3e%3cpath%20d='M223.18%20298.207c-51.941-28.023-.607-51.417%2031.552-59.611%2025.687%202.459%2087.983.246%20131.671-28.268%2054.61-35.644%20124.649%2037.016%20161.056%20113.833%2036.407%2076.818%2055.692%20204.383-43.213%20245.557-98.905%2041.174-203.307-103.587-236.416-150.907-54.042-77.237%2020.275-85.576-44.65-120.604z'%20fill='%23000'%20fill-opacity='.2'/%3e%3cpath%20d='M223.18%20298.207c-51.941-28.023-.607-51.417%2031.552-59.611%2025.687%202.459%2087.983.246%20131.671-28.268%2054.61-35.644%20124.649%2037.016%20161.056%20113.833%2036.407%2076.818%2055.692%20204.383-43.213%20245.557-98.905%2041.174-203.307-103.587-236.416-150.907-54.042-77.237%2020.275-85.576-44.65-120.604z'%20stroke='%23000'/%3e%3c/g%3e%3cg%20filter='url(%23b)'%3e%3cpath%20d='M387.662%20330.877c-60.095-27.479-.702-50.417%2036.505-58.452%2029.72%202.41%20101.796.241%20152.342-27.72%2063.183-34.95%20127.069%2056.042%20169.191%20131.367%2042.122%2075.324-65.992%20119.314-180.423%20159.688-114.432%2040.374%2033.697-166.92-69.502-131.366-103.199%2035.553-32.996-39.169-108.113-73.517z'%20fill='%238F00FF'%20fill-opacity='.3'/%3e%3cpath%20d='M387.662%20330.877c-60.095-27.479-.702-50.417%2036.505-58.452%2029.72%202.41%20101.796.241%20152.342-27.72%2063.183-34.95%20127.069%2056.042%20169.191%20131.367%2042.122%2075.324-65.992%20119.314-180.423%20159.688-114.432%2040.374%2033.697-166.92-69.502-131.366-103.199%2035.553-32.996-39.169-108.113-73.517z'%20fill='%23000'%20fill-opacity='.2'/%3e%3cpath%20d='M387.662%20330.877c-60.095-27.479-.702-50.417%2036.505-58.452%2029.72%202.41%20101.796.241%20152.342-27.72%2063.183-34.95%20127.069%2056.042%20169.191%20131.367%2042.122%2075.324-65.992%20119.314-180.423%20159.688-114.432%2040.374%2033.697-166.92-69.502-131.366-103.199%2035.553-32.996-39.169-108.113-73.517z'%20stroke='%23000'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='a'%20x='.499'%20y='.498'%20width='777.001'%20height='777.003'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='100'%20result='effect1_foregroundBlur_125_157'/%3e%3c/filter%3e%3cfilter%20id='b'%20x='161.498'%20y='36.5'%20width='794.002'%20height='705'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='100'%20result='effect1_foregroundBlur_125_157'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";
const CoreValuesData = [
	{
		coreValueKey: "excellence",
		explanationKey: "sustainableArchitecture",
	},
	{
		coreValueKey: "accountable",
		explanationKey: "standForDecisions",
	},
	{
		coreValueKey: "passion",
		explanationKey: "loveWhatIDo",
	},
	{
		coreValueKey: "kindness",
		explanationKey: "eagerToHelp",
	},
];
const CoreValues = () => {
	return /* @__PURE__ */ jsx(Section, {
		titleKey: "coreValues",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative flex flex-col",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto flex",
					children: [
						/* @__PURE__ */ jsx("img", {
							alt: "",
							"aria-hidden": "true",
							className:
								"absolute top-1/2 left-1/2 -z-10 h-[300%] w-[300%] min-w-[1000px] -translate-x-1/2 -translate-y-1/2 sm:min-w-full",
							src: MeshPurpleTurquoise,
						}),
						/* @__PURE__ */ jsx(motion.div, {
							initial: "hidden",
							whileInView: "visible",
							viewport: { amount: 0.2, once: true },
							transition: {
								staggerChildren: 0.3,
							},
							className:
								"mx-auto grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2",
							children: CoreValuesData.map((value) => {
								return /* @__PURE__ */ jsx(
									CoreValue,
									{ coreValue: value },
									value.coreValueKey,
								);
							}),
						}),
					],
				}),
				/* @__PURE__ */ jsx("div", {
					className: "m-auto px-2",
					children: /* @__PURE__ */ jsx(motion.img, {
						loading: "lazy",
						width: "350",
						height: "260",
						className: "mt-12 h-auto w-full max-w-[350px] sm:mt-0",
						src: MeditatingImage,
						alt: "avatar of myself meditating",
						initial: "hidden",
						whileInView: "visible",
						viewport: { amount: 0.5, once: true },
						transition: { duration: 2 },
						variants: {
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: 100 },
						},
					}),
				}),
			],
		}),
	});
};
const CoreValue = ({ coreValue }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(motion.div, {
		variants: {
			visible: { opacity: 1 },
			hidden: { opacity: 0 },
		},
		className: "col-span-1 flex max-w-[190px] flex-col align-top",
		children: [
			/* @__PURE__ */ jsx("h3", {
				className: "text-md font-semibold",
				children: t(coreValue.coreValueKey),
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-0.5 opacity-90",
				children: t(coreValue.explanationKey),
			}),
		],
	});
};
const ConferenceImg = "/assets/conference-C-jMqmSc.svg";
const GraduateCap = "/assets/graduate-cap-D8bg-hWP.svg";
const locales = {
	en: enUS,
	de,
	es,
};
function useFormatDates() {
	const { i18n: i18n2, t } = useTranslation();
	const locale = locales[i18n2.language] || enUS;
	const formatDate = (date) => {
		return format$1(date, "MMM yyyy", { locale });
	};
	const formatTimePeriod = (startDate, endDate) => {
		const newEndDate =
			endDate === "today" ? /* @__PURE__ */ new Date() : endDate;
		const distanceInYears =
			(differenceInMonths(newEndDate, startDate) + 1) / 12;
		const numberFormatter = new Intl.NumberFormat(i18n2.language, {
			maximumFractionDigits: 1,
			minimumFractionDigits: distanceInYears % 1 === 0 ? 0 : 1,
		});
		const distance =
			distanceInYears > 1
				? `${numberFormatter.format(distanceInYears)}${t("yearAbbreviation")}`
				: `${differenceInMonths(newEndDate, startDate)}${t("monthAbbreviation")}`;
		return endDate === "today"
			? `${formatDate(startDate)} - ${t("present")} (${distance})`
			: `${formatDate(startDate)} - ${formatDate(endDate)} (${distance})`;
	};
	return {
		formatDate,
		formatTimePeriod,
	};
}
const Courses = [
	{
		name: "Improvisation Skills",
		instructor: "SUBIT!",
		date: /* @__PURE__ */ new Date("2025-03"),
	},
	{
		name: "AWS IoT Hand-on Training",
		instructor: "Thomas Kriechbaumer",
		date: /* @__PURE__ */ new Date("2024-04"),
	},
	{
		name: "Epic Web",
		instructor: "Kent C. Dodds",
		date: /* @__PURE__ */ new Date("2025-02"),
	},
	{
		name: "Affinity Designer",
		instructor: "Heiko Deppler",
		date: /* @__PURE__ */ new Date("2019-01"),
	},
	{
		name: "Agile Speed Refueling",
		instructor: "MaibornWolff",
		date: /* @__PURE__ */ new Date("2019-07"),
	},
	{
		name: "Business Analysis",
		instructor: "Jamal Moustafev",
		date: /* @__PURE__ */ new Date("2019-07"),
	},
	{
		name: "UX Ultimate Guide",
		instructor: " Davis Travis",
		date: /* @__PURE__ */ new Date("2019-09"),
	},
	{
		name: "Your Performance, a Communication Seminar",
		instructor: "Nadine Antler & Torsten Voller",
		date: /* @__PURE__ */ new Date("2019-09"),
	},
	{
		name: "Usability School",
		instructor: "Kerstin Öchsner  & Victoria Müller",
		date: /* @__PURE__ */ new Date("2019-10"),
	},
	{
		name: "Projects Early Phases",
		instructor: "Dr. Martina Beck",
		date: /* @__PURE__ */ new Date("2019-12"),
	},
	{
		name: "Big Pictures",
		instructor: "Judith Eckerle",
		date: /* @__PURE__ */ new Date("2020-01"),
	},
	{
		name: "Architecture Foundation",
		instructor: "Jan Schuhmacher",
		date: /* @__PURE__ */ new Date("2020-02"),
	},
	{
		name: "Frontend Architecture Foundation",
		instructor: "Simon Ismair",
		date: /* @__PURE__ */ new Date("2020-02"),
	},
	{
		name: "Good Code",
		instructor: "Michael P",
		date: /* @__PURE__ */ new Date("2020-03"),
	},
	{
		name: "Safe Programming",
		instructor: "Philippe Schrettenbrunner",
		date: /* @__PURE__ */ new Date("2020-03"),
	},
	{
		name: "Sketchnoting",
		instructor: "Carola Scharvogel",
		date: /* @__PURE__ */ new Date("2020-06"),
	},
	{
		name: "Hacking Workshop",
		instructor: "MaibornWolff",
		date: /* @__PURE__ */ new Date("2020-07"),
	},
	{
		name: "Cultural Orientation",
		instructor: "Rocio G. Luis",
		date: /* @__PURE__ */ new Date("2021-02"),
	},
	{
		name: "Cloud Instrumentation",
		instructor: "MaibornWolff",
		date: /* @__PURE__ */ new Date("2021-04"),
	},
	{
		name: "Radical Honesty",
		instructor: "Volker Rupp",
		date: /* @__PURE__ */ new Date("2021-12"),
	},
	{
		name: "Test Driven Development",
		instructor: "Matt Greencroft",
		date: /* @__PURE__ */ new Date("2019-06"),
	},
	{
		name: "Docker and Kubernetes",
		instructor: "Stephen Grider",
		date: /* @__PURE__ */ new Date("2022-06"),
	},
	{
		name: "Epic React",
		instructor: "Kent C. Dodds",
		date: /* @__PURE__ */ new Date("2020-06"),
	},
	{
		name: "Testing Javascript",
		instructor: "Kent C. Dodds",
		date: /* @__PURE__ */ new Date("2020-06"),
	},
	{
		name: "Praise at Eye Level",
		instructor: "Stephanie Salecker",
		date: /* @__PURE__ */ new Date("2022-09"),
	},
	{
		name: "Communication Coaching",
		instructor: "Moritz Weilandt",
		date: /* @__PURE__ */ new Date("2022-05"),
	},
	{
		name: "Liberating Structures",
		instructor: "Elisabeth Kistler",
		date: /* @__PURE__ */ new Date("2021-02"),
	},
	{
		name: "Voice Training",
		instructor: "Martin Richter",
		date: /* @__PURE__ */ new Date("2019-08"),
	},
	{
		name: "Professional Scrum with UX",
		instructor: "Jeff Gothelf",
		date: /* @__PURE__ */ new Date("2020-01"),
	},
	{
		name: "Refactoring UI",
		instructor: "Tailwind Labs Inc",
		date: /* @__PURE__ */ new Date("2022-12"),
	},
	{
		name: "AWS Certified Cloud Practitioner",
		instructor: "Neal Davis",
		date: /* @__PURE__ */ new Date("2023-03"),
	},
];
const Conferences = [
	{
		name: "Valencia Digital Summit",
		date: /* @__PURE__ */ new Date("2024-11"),
	},
	{
		name: "Embedded World",
		date: /* @__PURE__ */ new Date("2024-04"),
	},
	{
		name: "UXDX Dublin",
		date: /* @__PURE__ */ new Date("2023-10"),
	},
	{
		name: "React Miami",
		date: /* @__PURE__ */ new Date("2022-04"),
	},
	{
		name: "React Summit Amsterdam",
		date: /* @__PURE__ */ new Date("2022-05"),
	},
	{
		name: "Scrum Day Stuttgart",
		date: /* @__PURE__ */ new Date("2020-05"),
	},
	{
		name: "UXDX Berlin",
		date: /* @__PURE__ */ new Date("2025-05"),
	},
	{
		name: "Greentech Festival",
		date: /* @__PURE__ */ new Date("2025-05"),
	},
	{
		name: "GITEX Europe",
		date: /* @__PURE__ */ new Date("2025-05"),
	},
];
const CoursesAndConferences = () => {
	const sortedCoursesAndConferences = [...Courses, ...Conferences].sort(
		(a, b) => {
			return b.date.getTime() - a.date.getTime();
		},
	);
	return /* @__PURE__ */ jsx(Section, {
		titleKey: "coursesAndConferences",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-0 flex w-full flex-col sm:mx-2",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto flex max-w-6xl",
				children: [
					/* @__PURE__ */ jsx("img", {
						alt: "",
						"aria-hidden": "true",
						className:
							"invisible absolute top-1/2 left-1/2 -z-10 h-[250%] min-h-full w-[250%] -translate-x-1/2 -translate-y-1/2 sm:visible",
						src: MeshPurpleTurquoise,
					}),
					/* @__PURE__ */ jsx(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: { amount: 0.2, once: true },
						transition: {
							staggerChildren: 0.1,
						},
						className:
							"grid grid-cols-2 gap-4 text-left md:grid-cols-3 lg:grid-cols-4",
						children: sortedCoursesAndConferences.map((course) => {
							return /* @__PURE__ */ jsx(
								motion.div,
								{
									variants: {
										visible: { opacity: 1 },
										hidden: { opacity: 0 },
									},
									className: "col-span-1 flex min-w-0",
									children:
										"instructor" in course
											? /* @__PURE__ */ jsx(CourseItem, { course })
											: /* @__PURE__ */ jsx(ConferenceItem, {
													conference: course,
												}),
								},
								course.name,
							);
						}),
					}),
				],
			}),
		}),
	});
};
const CourseItem = ({ course }) => {
	const { formatDate } = useFormatDates();
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			/* @__PURE__ */ jsx("img", {
				loading: "lazy",
				className: "mr-2 mb-auto",
				alt: "course",
				src: GraduateCap,
				width: 20,
				height: 20,
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "truncate text-base",
						children: course.name,
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-sm opacity-80",
						children: `${course.instructor} – ${formatDate(course.date)}`,
					}),
				],
			}),
		],
	});
};
const ConferenceItem = ({ conference }) => {
	const { formatDate } = useFormatDates();
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			/* @__PURE__ */ jsx("img", {
				loading: "lazy",
				className: "mr-2 mb-auto",
				alt: "conference",
				src: ConferenceImg,
				width: 20,
				height: 20,
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "truncate text-base",
						children: conference.name,
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-sm opacity-80",
						children: formatDate(conference.date),
					}),
				],
			}),
		],
	});
};
function getAltTextFromFileName(filename) {
	return filename.replace(".svg", "").replace("-", " ");
}
const KukaLogo =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%20100%2018'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cg%3e%3cpath%20d='M409.832%20344.333l-105.148-86.63%20105.148-83.863h-76.839l-98.975%2083.863V173.84h-54.702v170.493h54.702v-86.63l98.975%2086.63h76.839z'%20transform='matrix(.09866%200%200%20.09866%20-.564%20-.451)%20translate(-174.111%20-168.577)'%20fill='url(%23a)'%20fill-rule='nonzero'/%3e%3cpath%20d='M428.989%20106.367c0%2021.71-8.089%2028.096-30.438%2028.096h-54.064c-22.349%200-30.437-6.386-30.437-28.096V5.263h-54.49v110.895c0%2042.357%2022.775%2062.578%2072.795%2062.578h78.116c50.232.212%2073.007-20.008%2073.007-62.578V5.263h-54.489v101.104z'%20fill='url(%23b)'%20fill-rule='nonzero'%20transform='matrix(.09866%200%200%20.09866%20-.564%20-.451)'/%3e%3cpath%20d='M911.732%205.263h-48.104l-107.063%20170.28L651.63%2089.126%20756.777%205.263h-76.838l-99.188%2083.863%2099.188%2086.63h139.203l18.093-29.587h100.891l18.092%2029.587h62.582L911.732%205.263zm-55.766%20106.85l31.714-54.276%2031.715%2054.276h-63.429z'%20fill='url(%23c)'%20fill-rule='nonzero'%20transform='matrix(.09866%200%200%20.09866%20-.564%20-.451)'/%3e%3cpath%20d='M5.204%205.263H59.906V175.756H5.204z'%20fill='url(%23d)'%20transform='matrix(.09866%200%200%20.09866%20-.564%20-.451)'/%3e%3cpath%20d='M526.048%205.263H580.75V175.756H526.048z'%20fill='url(%23e)'%20transform='matrix(.09866%200%200%20.09866%20-.564%20-.451)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='0'%20y1='0'%20x2='1'%20y2='0'%20gradientUnits='userSpaceOnUse'%20gradientTransform='rotate(-10.5%201955.815%20-776.652)%20scale(941.603)'%3e%3cstop%20offset='0'%20stop-color='rgb(255,96,0)'/%3e%3cstop%20offset='1'%20stop-color='rgb(255,88,0)'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='0'%20y1='0'%20x2='1'%20y2='0'%20gradientUnits='userSpaceOnUse'%20gradientTransform='rotate(-10.5%20951.452%2086.483)%20scale(941.603)'%3e%3cstop%20offset='0'%20stop-color='rgb(255,96,0)'/%3e%3cstop%20offset='1'%20stop-color='rgb(255,88,0)'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='0'%20y1='0'%20x2='1'%20y2='0'%20gradientUnits='userSpaceOnUse'%20gradientTransform='rotate(-10.5%20951.452%2086.483)%20scale(941.603)'%3e%3cstop%20offset='0'%20stop-color='rgb(255,96,0)'/%3e%3cstop%20offset='1'%20stop-color='rgb(255,88,0)'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='0'%20y1='0'%20x2='1'%20y2='0'%20gradientUnits='userSpaceOnUse'%20gradientTransform='scale(80.1637)%20rotate(10.5%20-5.673%20-.151)'%3e%3cstop%20offset='0'%20stop-color='rgb(255,96,0)'/%3e%3cstop%20offset='1'%20stop-color='rgb(255,88,0)'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%20x1='0'%20y1='0'%20x2='1'%20y2='0'%20gradientUnits='userSpaceOnUse'%20gradientTransform='scale(80.1637)%20rotate(10.5%20-2.424%2035.21)'%3e%3cstop%20offset='0'%20stop-color='rgb(255,96,0)'/%3e%3cstop%20offset='1'%20stop-color='rgb(255,88,0)'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const MaibornWolffLogo =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%20100%2051'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cpath%20d='M.007%2045.925c0-1.74%201.026-2.548%202.363-2.548.859%200%201.532.362%201.926%201.035.393-.673%201.067-1.035%201.926-1.035%201.337%200%202.363.807%202.363%202.548v4.361H7.258v-4.36c0-.932-.498-1.317-1.151-1.317s-1.15.394-1.15%201.316v4.362H3.628v-4.362c0-.922-.498-1.316-1.15-1.316-.654%200-1.152.385-1.152%201.316v4.362H0v-4.362h.007zm11.361.396c0-1.813%201.036-2.942%202.95-2.942%201.918%200%202.974%201.129%202.974%202.942v3.968h-1.325v-2.03h-3.303v2.03h-1.296V46.32zm4.599.735v-.735c0-1.088-.538-1.71-1.657-1.71-1.108%200-1.646.622-1.646%201.71v.735h3.303zm4.25-3.64h1.346v6.873h-1.345v-6.874zm4.342%200h3.29c1.302%200%201.985.746%201.985%201.786%200%20.694-.326%201.23-.893%201.512v.02c.757.243%201.21.873%201.21%201.692%200%201.072-.695%201.86-2.029%201.86H24.56v-6.87zm3.12%202.783c.556%200%20.82-.337.82-.767%200-.44-.21-.766-.83-.766h-1.765V46.2h1.775v-.002zm.21%202.849c.631%200%20.882-.369.882-.819%200-.463-.314-.83-.873-.83h-1.996v1.65h1.987v-.001zm4.468-2.205c0-2.019%201.483-3.502%203.586-3.502%202.103%200%203.586%201.483%203.586%203.502%200%202.019-1.483%203.502-3.586%203.502-2.103%200-3.586-1.48-3.586-3.502zm5.831%200c0-1.318-.907-2.277-2.245-2.277-1.339%200-2.245.959-2.245%202.277s.906%202.288%202.245%202.288c1.338%200%202.245-.967%202.245-2.288zm4.124-3.428h2.88c1.746%200%202.512.957%202.512%202.27%200%201.084-.515%201.83-1.44%202.135l1.691%202.469h-1.598l-1.46-2.322h-1.242v2.322H42.31v-6.874h.002zm2.899%203.3c.85%200%201.135-.442%201.135-1.03%200-.587-.285-1.02-1.135-1.02h-1.556v2.05h1.556zm5.098-.51c0-1.74%201.04-2.828%202.921-2.828%201.881%200%202.921%201.088%202.921%202.829v4.08h-1.345v-4.08c0-1.004-.524-1.597-1.576-1.597-1.051%200-1.576.59-1.576%201.597v4.08H50.31v-4.08zm8.662%201.576v-4.366h1.327v4.366c0%20.934.498%201.319%201.151%201.319s1.15-.394%201.15-1.319v-4.366h1.328v4.366c0%20.923.497%201.319%201.15%201.319.654%200%201.152-.385%201.152-1.319v-4.366h1.327v4.366c0%201.744-1.027%202.55-2.365%202.55-.861%200-1.535-.363-1.929-1.037-.393.674-1.07%201.038-1.928%201.038-1.337%200-2.363-.807-2.363-2.55zm11.036-.938c0-2.023%201.488-3.511%203.595-3.511s3.595%201.488%203.595%203.511c0%202.024-1.488%203.511-3.595%203.511s-3.595-1.487-3.595-3.51zm5.844%200c0-1.323-.909-2.283-2.251-2.283-1.343%200-2.252.96-2.252%202.283s.909%202.293%202.252%202.293c1.342%200%202.251-.973%202.251-2.293zm4.109-3.428h1.345v5.633H84.9v1.24h-4.94v-6.873zm7.495%200h4.98v1.25H88.8v1.513h3.028v1.22H88.8v2.889h-1.345v-6.872zm7.565%200h4.981v1.25h-3.636v1.513h3.028v1.22h-3.028v2.889H95.02v-6.872z'%20fill='white'/%3e%3cpath%20d='M199.749%2049.33h.009c.09-16.8%208.54-31.61%2021.4-40.52-8-5.54-17.7-8.809-28.17-8.809-27.299%200-49.429%2022.059-49.569%2049.329h-.01v87.469l42.82.001V49.57c0-3.708%203.052-6.76%206.76-6.76%203.705%200%206.755%203.045%206.76%206.75v-.23z'%20transform='scale(.2261)'%20fill='url(%23a)'/%3e%3cpath%20d='M298.888%2049.33C298.748%2022.07%20276.618%200%20249.318%200s-49.43%2022.06-49.57%2049.33h-.009v87.469h42.819V49.56c0-2.62%201.44-5.12%203.85-6.14%204.93-2.08%209.67%201.48%209.67%206.15v87.219h42.819V49.32h-.009v.01z'%20transform='scale(.2261)'%20fill='url(%23b)'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='0'%20y1='0'%20x2='1'%20y2='0'%20gradientUnits='userSpaceOnUse'%20gradientTransform='matrix(53.9998%2013%20-13%2053.9998%20143.849%2061.19)'%3e%3cstop%20offset='0'%20stop-color='rgb(255,44,164)'/%3e%3cstop%20offset='.25'%20stop-color='rgb(255,33,157)'/%3e%3cstop%20offset='.68'%20stop-color='rgb(255,2,140)'/%3e%3cstop%20offset='1'%20stop-color='rgb(255,0,139)'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='0'%20y1='0'%20x2='1'%20y2='0'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(202.848%2068.19)%20scale(96.9992)'%3e%3cstop%20offset='0'%20stop-color='rgb(55,212,255)'/%3e%3cstop%20offset='.15'%20stop-color='rgb(49,217,236)'/%3e%3cstop%20offset='.43'%20stop-color='rgb(34,228,188)'/%3e%3cstop%20offset='.84'%20stop-color='rgb(10,247,112)'/%3e%3cstop%20offset='1'%20stop-color='rgb(0,255,79)'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const MeWithMacbookImg = "/assets/me-with-macbook-B9QyoX3G.webp";
const OfficeImg = "/assets/office-CDw-dCQ2.svg";
const ScmtLogo =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%20141%20120'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cpath%20d='M103.161%2057.27v8.255H37.637V13.68h8.154v43.69h49.216v-.1h8.154zm0-5.498h-8.154V8.155H45.791v.026h-8.154V0h65.524v51.772z'%20fill='white'/%3e%3cpath%20transform='translate(-.01)%20scale(.9882)'%20d='M60.043%2022.691H81.739V44.387H60.043z'%20fill='rgb(179,179,179)'/%3e%3cpath%20d='M24.76%20108.923c0%203.408-1.225%206.124-3.675%208.095-2.503%201.97-5.912%202.983-10.332%202.983-4.048%200-7.67-.8-10.759-2.29v-7.51c2.557%201.172%204.74%201.97%206.498%202.45%201.81.426%203.409.692%204.9.692%201.757%200%203.089-.373%204.047-1.012.96-.692%201.438-1.704%201.438-3.035a3.231%203.231%200%2000-.639-1.971%207.002%207.002%200%2000-1.81-1.704c-.8-.533-2.45-1.385-4.953-2.557-2.29-1.118-4.048-2.13-5.22-3.142a11.697%2011.697%200%2001-2.77-3.515C.794%2095.075.422%2093.53.422%2091.72c0-3.355%201.171-6.018%203.408-7.935%202.29-1.918%205.432-2.876%209.48-2.876%201.97%200%203.835.213%205.646.692%201.81.48%203.674%201.118%205.645%201.97l-2.61%206.285a35.992%2035.992%200%2000-5.006-1.757%2016.96%2016.96%200%2000-3.941-.48c-1.545%200-2.716.373-3.515%201.065-.8.693-1.225%201.651-1.225%202.77%200%20.692.16%201.331.48%201.864a5.558%205.558%200%20001.597%201.544c.692.48%202.397%201.385%205.113%202.663%203.568%201.705%205.965%203.409%207.296%205.113%201.332%201.704%201.97%203.782%201.97%206.285z'%20fill='rgb(179,179,179)'%20fill-rule='nonzero'/%3e%3cpath%20d='M47.81%2087.62c-3.035%200-5.378%201.118-7.03%203.408-1.704%202.29-2.503%205.485-2.503%209.533%200%208.468%203.196%2012.729%209.534%2012.729%202.663%200%205.912-.692%209.693-2.024v6.764c-3.09%201.331-6.604%201.97-10.439%201.97-5.539%200-9.746-1.704-12.675-5.059-2.93-3.355-4.42-8.149-4.42-14.433%200-3.941.745-7.403%202.183-10.386%201.438-2.982%203.462-5.272%206.178-6.817%202.716-1.597%205.858-2.396%209.48-2.396%203.675%200%207.403.905%2011.13%202.663l-2.609%206.55a42.773%2042.773%200%2000-4.26-1.757%2013.557%2013.557%200%2000-4.261-.746zm33.883%2031.848l-9.16-29.825h-.213c.32%206.072.48%2010.12.48%2012.143v17.682h-7.19V81.44h10.97l9.001%2029.08h.16l9.533-29.08h10.972v38.027h-7.51v-18.002c0-.852%200-1.81.053-2.929%200-1.118.107-4.047.32-8.84h-.213l-9.8%2029.77h-7.403zm48.779%200h-8.042V88.152h-10.333v-6.71h28.707v6.71h-10.332v31.316z'%20fill='white'%20fill-rule='nonzero'/%3e%3c/svg%3e";
const ThWildauLogo = "/assets/th-wildau-DuUyfi7E.svg";
const EXPERIENCE_YEARS =
	/* @__PURE__ */ new Date().getFullYear() -
	/* @__PURE__ */ new Date("2015-02").getFullYear();
const education = [
	{
		logo: ThWildauLogo,
		logoHeight: 55,
		link: "https://www.th-wildau.de",
		titleKey: "mechanicalEngineering",
		locationKey: "wildauGermany",
		startDate: /* @__PURE__ */ new Date("2011-09"),
		endDate: /* @__PURE__ */ new Date("2014-08"),
		type: "education",
	},
	{
		logo: ScmtLogo,
		logoHeight: 60,
		link: "https://www.scmt.com/home.html",
		titleKey: "masterBusinessEngineering",
		locationKey: "filderstadtGermany",
		startDate: /* @__PURE__ */ new Date("2016-02"),
		endDate: /* @__PURE__ */ new Date("2018-04"),
		type: "education",
	},
];
const WorkExperienceData = [
	{
		logo: KukaLogo,
		logoHeight: 20,
		link: "https://www.kuka.com",
		titleKey: "kukaSoftwareEngineer",
		startDate: /* @__PURE__ */ new Date("2015-02"),
		endDate: /* @__PURE__ */ new Date("2018-04"),
		locationKey: "augsburgGermany",
		type: "work",
	},
	{
		logo: KukaLogo,
		logoHeight: 20,
		link: "https://www.kuka.com",
		titleKey: "kukaAreaManager",
		startDate: /* @__PURE__ */ new Date("2018-04"),
		endDate: /* @__PURE__ */ new Date("2019-05"),
		locationKey: "augsburgGermany",
		type: "work",
	},
	{
		logo: MaibornWolffLogo,
		logoHeight: 50,
		link: "https://www.maibornwolff.de",
		titleKey: "seniorSoftwareEngineer",
		startDate: /* @__PURE__ */ new Date("2019-05"),
		endDate: /* @__PURE__ */ new Date("2023-02"),
		locationKey: "munichGermany",
		type: "work",
	},
	{
		logo: MeWithMacbookImg,
		logoHeight: 50,
		link: "https://www.linkedin.com/in/christianjoecker",
		titleKey: "freelanceDeveloper",
		startDate: /* @__PURE__ */ new Date("2023-02"),
		endDate: "today",
		locationKey: "valenciaSpain",
		type: "work",
	},
];
const ExperienceAndEducation = () => {
	return /* @__PURE__ */ jsx(Section, {
		titleKey: "experienceAndEducation",
		children: /* @__PURE__ */ jsx(WorkExperience, {}),
	});
};
const WorkExperience = () => {
	const workAndEducation = [...WorkExperienceData, ...education].sort(
		(a, b) => {
			return b.startDate.getTime() - a.startDate.getTime();
		},
	);
	return /* @__PURE__ */ jsx("div", {
		className: "flex w-full flex-col",
		children: workAndEducation.map((experienceItem, index) => {
			const isOdd = index % 2 === 0;
			const isFirst = index === 0;
			const isLast = index === workAndEducation.length - 1;
			return /* @__PURE__ */ jsxs(
				"div",
				{
					className: "mx-4 flex",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "min-w-0 flex-1",
							children:
								!isOdd &&
								/* @__PURE__ */ jsx(ExperienceItem, {
									isOdd,
									item: experienceItem,
								}),
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex shrink-0 grow-0 flex-col",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex-1 pb-2",
									children: /* @__PURE__ */ jsx("span", {
										className: `mx-auto flex h-full w-[3px] rounded-b-full opacity-60 ${isFirst ? "from-secondary bg-linear-to-t" : "bg-secondary"}`,
									}),
								}),
								/* @__PURE__ */ jsx(motion.div, {
									initial: "hidden",
									whileInView: "visible",
									viewport: { amount: "all", once: true },
									variants: {
										visible: { scale: 1 },
										hidden: { scale: 0 },
									},
									className: `${experienceItem.type === "work" ? "shadow-md-turquoise" : "shadow-md-purple"} border-secondary/10 from-neutral to-neutral-dark flex rounded-full border-2 border-solid bg-linear-to-br bg-contain p-3`,
									children: /* @__PURE__ */ jsx("img", {
										loading: "lazy",
										width: "40",
										height: "40",
										alt:
											experienceItem.type === "work"
												? "office building"
												: "graduate cap",
										src:
											experienceItem.type === "work" ? OfficeImg : GraduateCap,
									}),
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex-1 pt-2",
									children: /* @__PURE__ */ jsx("span", {
										className: `mx-auto flex h-full w-[3px] rounded-t-full opacity-60 ${isLast ? "from-secondary bg-linear-to-b" : "bg-secondary"}`,
									}),
								}),
							],
						}),
						/* @__PURE__ */ jsx("div", {
							className: "min-w-0 flex-1",
							children:
								isOdd &&
								/* @__PURE__ */ jsx(ExperienceItem, {
									isOdd,
									item: experienceItem,
								}),
						}),
					],
				},
				`${experienceItem.titleKey}${experienceItem.logo}`,
			);
		}),
	});
};
const ExperienceItem = ({ item, isOdd }) => {
	const { t } = useTranslation();
	const { formatTimePeriod } = useFormatDates();
	const variants = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: isOdd ? 100 : -100 },
	};
	return /* @__PURE__ */ jsx(motion.div, {
		initial: "hidden",
		whileInView: "visible",
		viewport: { amount: 0.2, once: true },
		transition: { duration: 1, delay: 0.4, ease: "easeOut" },
		variants,
		className: `my-5 flex max-w-fit ${isOdd ? "ml-3 justify-start text-left md:ml-6" : "mr-3 ml-auto justify-end text-right md:mr-6"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mb-2 max-w-[300px]",
			children: [
				/* @__PURE__ */ jsx(ExternalRedirect, {
					to: item.link,
					children: /* @__PURE__ */ jsx(motion.img, {
						whileTap: { scale: 1 },
						whileHover: { scale: 1.1 },
						loading: "lazy",
						width: "100",
						height: item.logoHeight,
						style: { height: item.logoHeight },
						alt: getAltTextFromFileName(item.logo),
						src: item.logo,
						className: `mb-2 w-[100px] object-contain hover:cursor-pointer ${isOdd ? "object-left" : "ml-auto object-right"}`,
					}),
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mb-0.5 font-semibold break-words",
					style: { lineHeight: "1.3rem" },
					children: t(item.titleKey),
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-sm leading-tight opacity-80 md:text-base",
					children: formatTimePeriod(item.startDate, item.endDate),
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-sm leading-tight opacity-80 md:text-base",
					children: t(item.locationKey),
				}),
			],
		}),
	});
};
const HappyIcon = "/assets/happy-DPJINb75.svg";
const SmartphoneIcon = "/assets/smartphone-CzsfzUV7.svg";
const StrongIcon = "/assets/strong-BU9Tpe2U.svg";
const Facts = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(Section, {
		titleKey: "facts",
		children: /* @__PURE__ */ jsx("div", {
			className: "relative mt-12 flex",
			children: /* @__PURE__ */ jsxs("div", {
				className:
					"mx-auto grid grid-cols-1 flex-wrap justify-between gap-x-12 gap-y-8 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ jsx(Fact, {
						number: EXPERIENCE_YEARS,
						label: t("yearsOfExperience"),
						icon: StrongIcon,
						alt: "strong",
					}),
					/* @__PURE__ */ jsx(Fact, {
						number: 23,
						label: t("developedApps"),
						icon: SmartphoneIcon,
						alt: "smartphone",
					}),
					/* @__PURE__ */ jsx(Fact, {
						number: 13,
						label: t("happyCustomers"),
						icon: HappyIcon,
						alt: "happy face",
					}),
				],
			}),
		}),
	});
};
const Fact = ({ number, label, icon, alt }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const content = useTransform(scrollYProgress, [0.9, 0.6], [0, number + 1]);
	useEffect(() => {
		if (ref.current) {
			ref.current.textContent = "0";
		}
		content.on("change", (val) => {
			if (!ref.current) {
				return;
			}
			if (val >= number) {
				ref.current.textContent = `${number}+`;
			} else {
				ref.current.textContent = val.toFixed(0);
			}
		});
		return () => {
			content.destroy();
		};
	}, [content, number]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative col-span-1 flex min-w-[220px] flex-col rounded-lg p-4",
		children: [
			/* @__PURE__ */ jsx("img", {
				"aria-hidden": "true",
				alt: "",
				height: 800,
				width: 600,
				className:
					"absolute top-1/2 left-1/2 -z-10 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2",
				src: MeshPurple,
			}),
			/* @__PURE__ */ jsx(motion.img, {
				loading: "lazy",
				className: "mx-auto",
				alt,
				width: "150",
				height: "150",
				src: icon,
				initial: "hidden",
				whileInView: "visible",
				viewport: { amount: 0.9, once: true },
				transition: { duration: 0.7 },
				variants: {
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: 100 },
				},
			}),
			/* @__PURE__ */ jsx("div", {
				ref,
				className: "mt-3 text-2xl font-semibold",
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-4 text-xl",
				children: label,
			}),
		],
	});
};
function on(obj) {
	var args = [];
	for (var _i = 1; _i < arguments.length; _i++) {
		args[_i - 1] = arguments[_i];
	}
	if (obj && obj.addEventListener) {
		obj.addEventListener.apply(obj, args);
	}
}
function off(obj) {
	var args = [];
	for (var _i = 1; _i < arguments.length; _i++) {
		args[_i - 1] = arguments[_i];
	}
	if (obj && obj.removeEventListener) {
		obj.removeEventListener.apply(obj, args);
	}
}
var isBrowser = typeof window !== "undefined";
var useEffectOnce = function (effect) {
	useEffect(effect, []);
};
var patchHistoryMethod = function (method) {
	var history = window.history;
	var original = history[method];
	history[method] = function (state) {
		var result = original.apply(this, arguments);
		var event = new Event(method.toLowerCase());
		event.state = state;
		window.dispatchEvent(event);
		return result;
	};
};
if (isBrowser) {
	patchHistoryMethod("pushState");
	patchHistoryMethod("replaceState");
}
var useLocationServer = function () {
	return {
		trigger: "load",
		length: 1,
	};
};
var buildState = function (trigger) {
	var _a = window.history,
		state = _a.state,
		length = _a.length;
	var _b = window.location,
		hash = _b.hash,
		host = _b.host,
		hostname = _b.hostname,
		href = _b.href,
		origin = _b.origin,
		pathname = _b.pathname,
		port = _b.port,
		protocol = _b.protocol,
		search = _b.search;
	return {
		trigger,
		state,
		length,
		hash,
		host,
		hostname,
		href,
		origin,
		pathname,
		port,
		protocol,
		search,
	};
};
var useLocationBrowser = function () {
	var _a = useState(buildState("load")),
		state = _a[0],
		setState = _a[1];
	useEffect(function () {
		var onPopstate = function () {
			return setState(buildState("popstate"));
		};
		var onPushstate = function () {
			return setState(buildState("pushstate"));
		};
		var onReplacestate = function () {
			return setState(buildState("replacestate"));
		};
		on(window, "popstate", onPopstate);
		on(window, "pushstate", onPushstate);
		on(window, "replacestate", onReplacestate);
		return function () {
			off(window, "popstate", onPopstate);
			off(window, "pushstate", onPushstate);
			off(window, "replacestate", onReplacestate);
		};
	}, []);
	return state;
};
var hasEventConstructor = typeof Event === "function";
const useLocation =
	isBrowser && hasEventConstructor ? useLocationBrowser : useLocationServer;
var useUnmount = function (fn) {
	var fnRef = useRef(fn);
	fnRef.current = fn;
	useEffectOnce(function () {
		return function () {
			return fnRef.current();
		};
	});
};
var useRafState = function (initialState) {
	var frame = useRef(0);
	var _a = useState(initialState),
		state = _a[0],
		setState = _a[1];
	var setRafState = useCallback(function (value) {
		cancelAnimationFrame(frame.current);
		frame.current = requestAnimationFrame(function () {
			setState(value);
		});
	}, []);
	useUnmount(function () {
		cancelAnimationFrame(frame.current);
	});
	return [state, setRafState];
};
var useMouse = function (ref) {
	if (process.env.NODE_ENV === "development") {
		if (typeof ref !== "object" || typeof ref.current === "undefined") {
			console.error("useMouse expects a single ref argument.");
		}
	}
	var _a = useRafState({
			docX: 0,
			docY: 0,
			posX: 0,
			posY: 0,
			elX: 0,
			elY: 0,
			elH: 0,
			elW: 0,
		}),
		state = _a[0],
		setState = _a[1];
	useEffect(
		function () {
			var moveHandler = function (event) {
				if (ref && ref.current) {
					var _a2 = ref.current.getBoundingClientRect(),
						left = _a2.left,
						top_1 = _a2.top,
						elW = _a2.width,
						elH = _a2.height;
					var posX = left + window.pageXOffset;
					var posY = top_1 + window.pageYOffset;
					var elX = event.pageX - posX;
					var elY = event.pageY - posY;
					setState({
						docX: event.pageX,
						docY: event.pageY,
						posX,
						posY,
						elX,
						elY,
						elH,
						elW,
					});
				}
			};
			on(document, "mousemove", moveHandler);
			return function () {
				off(document, "mousemove", moveHandler);
			};
		},
		[ref],
	);
	return state;
};
const hiddenMessageButtonSections = /* @__PURE__ */ new Set([
	// empty string is the header section
	"",
	"what_i_can_do_for_you",
	"contact",
]);
const animationVariants = {
	hidden: {
		opacity: 0,
		y: 0,
		x: 0,
		transition: {
			type: "easeOut",
			duration: 0.3,
		},
	},
	visible: {
		opacity: 1,
		y: -100,
		x: 0,
		transition: {
			type: "spring",
			bounce: 0.65,
			duration: 1.2,
		},
	},
	shake: {
		opacity: 1,
		y: -100,
		x: [-20, 20, -15, 15, -10, 0],
		transition: {
			type: "easeInOut",
			duration: 0.7,
		},
	},
};
const SHAKE_TIMEOUT = 2e3;
const MessageFloatingButton = () => {
	const { visibleSection } = useVisibleSection();
	const navigate = useNavigate();
	const contactInformation = ContactInformation.find((contact2) => {
		return contact2.alt === "message";
	});
	const location2 = useLocation();
	const controls = useAnimation();
	useEffect(() => {
		if (
			hiddenMessageButtonSections.has(visibleSection) ||
			location2.pathname === "/contact"
		) {
			void controls.start("hidden");
		} else if (visibleSection.includes("community_contributions")) {
			setTimeout(() => {
				void controls.start("shake");
			}, SHAKE_TIMEOUT);
		} else {
			void controls.start("visible");
		}
	}, [visibleSection, location2, controls]);
	if (!contactInformation) {
		return null;
	}
	return /* @__PURE__ */ jsx(motion.div, {
		className: "fixed right-2 bottom-[-92px] z-50",
		animate: controls,
		variants: animationVariants,
		children: /* @__PURE__ */ jsx(Button, {
			iconButton: true,
			ariaLabel: contactInformation.text,
			onClick: () => {
				void navigate("/contact", { preventScrollReset: true });
			},
			children: /* @__PURE__ */ jsx(ButtonIcon, {
				alt: contactInformation.alt,
				src: contactInformation.image,
			}),
		}),
	});
};
const Footer = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto mb-2 w-full",
		children: [
			t("designedAndCodedPrefix"),
			" ",
			/* @__PURE__ */ jsx("span", { "aria-label": t("love"), children: "♡" }),
			" ",
			t("designedAndCodedSuffix"),
		],
	});
};
const MeshBlue =
	"data:image/svg+xml,%3csvg%20width='1477'%20height='1526'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23a)'%3e%3cpath%20d='M524.577%20750.15c-77.269-46.88%2056.063-166.849%20103.905-180.556%2047.841-13.708%20133.717-97.541%20203.323-58.166%2047.84%2027.063%2010.873%20110.213%2065.033%20238.722%2054.161%20128.508%20147.132%2086.631%200%20155.512-147.136%2068.88-114.41%20143.428-197.717%20111.888-257.144-97.347-77.958-208.801-174.544-267.4z'%20fill='%2306F'%20fill-opacity='.5'/%3e%3cpath%20d='M524.577%20750.15c-77.269-46.88%2056.063-166.849%20103.905-180.556%2047.841-13.708%20133.717-97.541%20203.323-58.166%2047.84%2027.063%2010.873%20110.213%2065.033%20238.722%2054.161%20128.508%20147.132%2086.631%200%20155.512-147.136%2068.88-114.41%20143.428-197.717%20111.888-257.144-97.347-77.958-208.801-174.544-267.4z'%20fill='%23000'%20fill-opacity='.2'/%3e%3cpath%20d='M524.577%20750.15c-77.269-46.88%2056.063-166.849%20103.905-180.556%2047.841-13.708%20133.717-97.541%20203.323-58.166%2047.84%2027.063%2010.873%20110.213%2065.033%20238.722%2054.161%20128.508%20147.132%2086.631%200%20155.512-147.136%2068.88-114.41%20143.428-197.717%20111.888-257.144-97.347-77.958-208.801-174.544-267.4z'%20stroke='%23000'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='a'%20x='.5'%20y='.5'%20width='1476'%20height='1525'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_123_154'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";
const MeshTurquoise =
	"data:image/svg+xml,%3csvg%20width='899'%20height='891'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23a)'%3e%3cpath%20d='M230.317%20327.42c-68.655-36.444-.802-66.868%2041.707-77.525%2033.953%203.197%20116.296.32%20174.044-36.764%2072.184-46.355%20164.761%2048.141%20212.884%20148.044%2048.123%2099.904%2073.614%20265.806-57.119%20319.355-130.734%2053.548-268.732-134.719-312.497-196.26-71.433-100.449%2026.8-111.294-59.019-156.85z'%20fill='%2300F0FF'%20fill-opacity='.3'/%3e%3cpath%20d='M230.317%20327.42c-68.655-36.444-.802-66.868%2041.707-77.525%2033.953%203.197%20116.296.32%20174.044-36.764%2072.184-46.355%20164.761%2048.141%20212.884%20148.044%2048.123%2099.904%2073.614%20265.806-57.119%20319.355-130.734%2053.548-268.732-134.719-312.497-196.26-71.433-100.449%2026.8-111.294-59.019-156.85z'%20fill='%23000'%20fill-opacity='.2'/%3e%3cpath%20d='M230.317%20327.42c-68.655-36.444-.802-66.868%2041.707-77.525%2033.953%203.197%20116.296.32%20174.044-36.764%2072.184-46.355%20164.761%2048.141%20212.884%20148.044%2048.123%2099.904%2073.614%20265.806-57.119%20319.355-130.734%2053.548-268.732-134.719-312.497-196.26-71.433-100.449%2026.8-111.294-59.019-156.85z'%20stroke='%23000'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='a'%20x='.499'%20y='.498'%20width='898.001'%20height='890.003'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='100'%20result='effect1_foregroundBlur_103_332'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";
const Header = () => {
	const { t } = useTranslation();
	const ref = useRef(null);
	const { scrollY } = useScroll({ target: ref });
	const titleY = useParallax(scrollY, -0.25);
	const subtitleY = useParallax(scrollY, -0.5);
	const buttonY = useParallax(scrollY, -1);
	const { elX, elY } = useMouse(ref);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const onDiscoverMoreClick = (e) => {
		e.target.blur();
		if (ref.current) {
			const targetTop = ref.current.offsetTop + ref.current.offsetHeight;
			animate(window.scrollY, targetTop, {
				duration: 2.5,
				onUpdate(value) {
					window.scrollTo(0, value);
				},
				ease: "easeInOut",
			});
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		onPointerMove: () => {
			mouseX.set(elX / 8);
			mouseY.set(elY / 8);
		},
		className: "relative flex h-dvh w-full items-center",
		ref,
		children: [
			/* @__PURE__ */ jsx(Background, { mouseX, mouseY }),
			/* @__PURE__ */ jsxs("div", {
				className:
					"z-10 mt-4 mb-8 ml-6 text-left sm:mt-[20vh] sm:mb-20 sm:ml-24",
				children: [
					/* @__PURE__ */ jsxs(motion.h1, {
						style: { y: titleY },
						className: "mx-2 mb-8 text-2xl font-bold sm:text-3xl",
						children: [
							/* @__PURE__ */ jsx("span", { children: t("hiImChristian") }),
							/* @__PURE__ */ jsx(AnimatedWord, {}),
						],
					}),
					/* @__PURE__ */ jsx(motion.p, {
						style: { y: subtitleY },
						className:
							"text-md mr-4 mb-16 font-normal sm:mb-28 sm:text-lg md:mr-[25vw]",
						children: t("iDontJustProgramFeatures"),
					}),
					/* @__PURE__ */ jsx(motion.button, {
						style: { y: buttonY, boxShadow: "0px 0px 90px -15px #00DFD8" },
						whileTap: { scale: 1 },
						whileHover: { scale: 1.1 },
						onClick: onDiscoverMoreClick,
						className:
							"from-turquoise to-blue text-secondary rounded-md bg-linear-to-br text-lg font-semibold select-none hover:cursor-pointer",
						children: /* @__PURE__ */ jsx("div", {
							className:
								"bg-neutral-dark/80 pointer-events-none m-[1px] rounded-md px-6 py-4",
							children: t("discoverMore"),
						}),
					}),
				],
			}),
		],
	});
};
const Background = ({ mouseX, mouseY }) => {
	const blueMeshX = useTransform(mouseX, (value) => {
		return value * -0.7;
	});
	const blueMeshY = useTransform(mouseY, (value) => {
		return value * -0.5;
	});
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			/* @__PURE__ */ jsx(motion.img, {
				alt: "",
				"aria-hidden": "true",
				style: { x: mouseX, y: mouseY },
				className: "absolute top-[-30vh] right-[-40vw] h-[85vh] w-[130vw]",
				src: MeshPurple,
			}),
			/* @__PURE__ */ jsx(motion.img, {
				alt: "",
				"aria-hidden": "true",
				style: { x: blueMeshX, y: blueMeshY },
				className:
					"absolute top-[-30vh] right-[-45vw] h-[120vh] w-[120vw] md:top-[-5vh]",
				src: MeshTurquoise,
			}),
			/* @__PURE__ */ jsx(motion.img, {
				alt: "",
				"aria-hidden": "true",
				className: "absolute top-[-10vh] left-[-35vw] h-[100vh] w-[100vw]",
				src: MeshBlue,
			}),
		],
	});
};
function useParallax(scrollY, multiplicator) {
	return useTransform(scrollY, (value) => {
		return value * multiplicator;
	});
}
const ANIMATED_WORDS = ["fullStackDeveloper", "uxUiDesigner"];
const STAGGER_DURATION = 0.03;
const READING_TIME = 2500;
const HIDE_TIME_OFFSET = 200;
const SPACE_CHAR = " ";
function AnimatedWord() {
	const { t } = useTranslation();
	const [wordIndex, setWordIndex] = useState(0);
	const animatedText = t(ANIMATED_WORDS[wordIndex]);
	const textLength = animatedText.length;
	const ariaLabel = ANIMATED_WORDS.map((key) => {
		return t(key);
	})
		.join(" and ")
		.replaceAll(".", "");
	const controls = useAnimation();
	const [animationStarted, setAnimationStarted] = useState(false);
	useEffect(() => {
		const changeText = () => {
			setWordIndex((prevIndex) => {
				return (prevIndex + 1) % ANIMATED_WORDS.length;
			});
		};
		const hideText = () => {
			void controls.start("hidden");
			setTimeout(changeText, textLength * STAGGER_DURATION * 1e3);
			setTimeout(
				showText,
				textLength * STAGGER_DURATION * 1e3 + HIDE_TIME_OFFSET,
			);
		};
		const showText = () => {
			if (!animationStarted) {
				setAnimationStarted(true);
			}
			void controls.start("visible");
			setTimeout(hideText, READING_TIME);
		};
		showText();
	}, []);
	const words = animatedText.split(" ");
	return /* @__PURE__ */ jsxs("span", {
		className: "flex flex-wrap",
		"aria-label": ariaLabel,
		children: [
			`${t("fullStackDeveloperPrefix")}${SPACE_CHAR}`,
			words.map((word, wordIndex2) => {
				const wordWithSpaces =
					wordIndex2 + 1 === words.length ? word : word + SPACE_CHAR;
				const letters = [...wordWithSpaces];
				const prevWordsLength = words
					.slice(0, wordIndex2)
					.reduce((acc, curr) => {
						return acc + curr.length;
					}, 0);
				return /* @__PURE__ */ jsx(
					"span",
					{
						"aria-hidden": true,
						className: "flex flex-nowrap",
						children: letters.map((letter, index) => {
							return /* @__PURE__ */ jsx(
								motion.div,
								{
									initial: {
										opacity: animationStarted ? 0 : 1,
									},
									animate: controls,
									variants: {
										hidden: {
											opacity: 0,
											transition: {
												// delay instead of stagger to allow word wrapping on narrow screens
												delay:
													(textLength - prevWordsLength - index - 1) *
													STAGGER_DURATION,
											},
										},
										visible: {
											opacity: 1,
											transition: {
												delay: (prevWordsLength + index) * STAGGER_DURATION,
											},
										},
									},
									children: letter,
								},
								`${index}${letter}${word}`,
							);
						}),
					},
					`${wordIndex2}${word}${animatedText}`,
				);
			}),
		],
	});
}
const FeijoadaIcon = "/assets/feijoada-DSFp2IyW.svg";
const HamburguerIcon = "/assets/hamburguer-CtYINk2L.svg";
const PaellaIcon = "/assets/paella-B4EbEGz3.svg";
const PretzelIcon = "/assets/pretzel-lgHGjIp-.svg";
const LanguagesData = [
	{
		languageKey: "english",
		levelKey: "fluent",
		icon: HamburguerIcon,
	},
	{
		languageKey: "german",
		levelKey: "fluent",
		icon: PretzelIcon,
	},
	{
		languageKey: "spanish",
		levelKey: "fluent",
		icon: PaellaIcon,
	},
	{
		languageKey: "portuguese",
		levelKey: "goodCommand",
		icon: FeijoadaIcon,
	},
];
const Languages = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(Section, {
		titleKey: "languages",
		className: "flex flex-col",
		children: /* @__PURE__ */ jsx("div", {
			className:
				"mx-auto grid max-w-7xl grid-cols-1 gap-x-32 gap-y-20 md:grid-cols-4",
			children: LanguagesData.map((language) => {
				return /* @__PURE__ */ jsxs(
					"div",
					{
						className: "relative col-span-1 m-auto",
						children: [
							/* @__PURE__ */ jsx("img", {
								alt: "",
								"aria-hidden": "true",
								height: 800,
								width: 600,
								className:
									"absolute top-1/2 left-1/2 -z-10 min-h-[350px] min-w-[350px] -translate-x-1/2 -translate-y-1/2 sm:h-[200%] sm:w-[300%]",
								src: MeshPurple,
							}),
							/* @__PURE__ */ jsx(motion.img, {
								loading: "lazy",
								initial: "hidden",
								whileInView: "visible",
								className: "mb-2",
								viewport: { amount: 0.1, once: true },
								transition: { duration: 0.7 },
								variants: {
									visible: { opacity: 1, y: 0 },
									hidden: { opacity: 0, y: 100 },
								},
								width: "130",
								height: "130",
								alt: getAltTextFromFileName(language.icon),
								src: language.icon,
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-md font-bold",
								children: t(language.languageKey),
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-1 text-base",
								children: t(language.levelKey),
							}),
						],
					},
					language.languageKey,
				);
			}),
		}),
	});
};
const CollapseIcon =
	"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20xmlns:serif='http://www.serif.com/'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3e%3cpath%20d='M31.003,7.998l-0.005,9l9,0.005l-0.001,3l-12,-0.006l0.006,-12l3,0.001Z'%20style='fill:%23b7b7b7;fill-rule:nonzero;'/%3e%3cpath%20d='M20.002,28.002l-0.004,12l-3,-0.001l0.003,-9l-9,-0.003l0.001,-3l12,0.004Z'%20style='fill:%23b7b7b7;fill-rule:nonzero;'/%3e%3c/svg%3e";
const ExpandIcon =
	"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20xmlns:serif='http://www.serif.com/'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3e%3cpath%20d='M33,24l0,-9l-9,0l0,-3l12,0l0,12l-3,0Z'%20style='fill:%23b7b7b7;fill-rule:nonzero;'/%3e%3cpath%20d='M12,36l0,-12l3,0l0,9l9,0l0,3l-12,0Z'%20style='fill:%23b7b7b7;fill-rule:nonzero;'/%3e%3c/svg%3e";
const NARROW_WIDTH = 480;
function useNarrowView() {
	const [width, setWidth] = useState(1e3);
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	const isNarrowView = useMemo(() => {
		return width <= NARROW_WIDTH;
	}, [width]);
	return { isNarrowView };
}
const ArtistImg = "/assets/artist-C7nh18kN.svg";
const FaceWithSunglassesImg = "/assets/face-with-sunglasses-CPN58VpN.svg";
const RobotImg = "/assets/robot-clKX3WjG.svg";
const RocketImg = "/assets/rocket-B6g9WbFC.svg";
const StrategyImg = "/assets/strategy-BgiiLw5R.svg";
const ServiceOfferData = [
	{
		logo: FaceWithSunglassesImg,
		titleKey: "webApplications",
		descriptionTranslationKey: "getReadyForPlatform",
	},
	{
		logo: ArtistImg,
		titleKey: "uxUiDesign",
		descriptionTranslationKey: "turnDigitalDreams",
	},
	{
		logo: RobotImg,
		titleKey: "iotPlatforms",
		descriptionTranslationKey: "stepIntoFuture",
	},
	{
		logo: RocketImg,
		titleKey: "lowCodeApps",
		descriptionTranslationKey: "whyReinventWheel",
	},
	{
		logo: StrategyImg,
		titleKey: "digitalStrategy",
		descriptionTranslationKey: "withYearsExperience",
	},
];
const ServiceOffer = () => {
	const { isNarrowView } = useNarrowView();
	const staggerAnimation = isNarrowView
		? {}
		: {
				viewport: { amount: 0.2, once: true },
				transition: {
					staggerChildren: 0.25,
				},
				initial: "hidden",
				whileInView: "visible",
			};
	return /* @__PURE__ */ jsx(Section, {
		titleKey: "whatICanDoForYou",
		className: "mt-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative flex",
			children: [
				/* @__PURE__ */ jsx("img", {
					alt: "",
					"aria-hidden": "true",
					className:
						"invisible absolute top-1/2 left-1/2 -z-10 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 sm:visible",
					src: MeshPurpleTurquoise,
				}),
				/* @__PURE__ */ jsx(motion.div, {
					className: "mx-auto flex max-w-3xl flex-wrap justify-center gap-6",
					...staggerAnimation,
					children: ServiceOfferData.map((offer) => {
						return /* @__PURE__ */ jsx(
							Card,
							{
								offer,
								isNarrowView,
							},
							offer.titleKey,
						);
					}),
				}),
			],
		}),
	});
};
const Card = ({ offer, isNarrowView }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [zIndex, setZIndex] = useState(0);
	const onClick = () => {
		if (isOpen) {
			setIsOpen(false);
			setTimeout(() => {
				setZIndex(0);
			}, 500);
		} else {
			setIsOpen(true);
			setZIndex(10);
		}
	};
	const appearAnimation = isNarrowView
		? {
				initial: "hidden",
				whileInView: "visible",
				viewport: { amount: 0.5, once: true },
			}
		: {};
	return /* @__PURE__ */ jsxs(
		motion.div,
		{
			variants: {
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			},
			transition: { ease: "easeInOut", duration: 0.8 },
			...appearAnimation,
			children: [
				isOpen &&
					/* @__PURE__ */ jsx("div", {
						className: "relative z-0",
						children: /* @__PURE__ */ jsx(CardContent, { offer, isOpen }),
					}),
				/* @__PURE__ */ jsx(motion.div, {
					onClick,
					style: { zIndex },
					layout: true,
					className: ` ${isOpen ? "fixed inset-0 mx-3 flex" : "relative"}`,
					children: /* @__PURE__ */ jsx(CardContent, {
						isExpandable: true,
						offer,
						isOpen,
					}),
				}),
			],
		},
		offer.titleKey,
	);
};
const CardContent = ({ isExpandable, offer, isOpen }) => {
	const { t } = useTranslation();
	const { tm } = useTranslationWithMarkdown();
	return /* @__PURE__ */ jsxs(motion.div, {
		layout: isExpandable,
		className: `border-secondary/10 from-neutral to-neutral-dark relative flex cursor-pointer rounded-2xl border-2 border-solid bg-linear-to-br p-4 text-left ${isOpen && isExpandable ? "from-neutral/70 to-neutral-dark/70 m-auto h-auto w-full max-w-lg flex-wrap bg-linear-to-br backdrop-blur-sm" : "h-64 w-64 flex-col md:h-56 md:w-56"} ${isOpen && !isExpandable ? "invisible" : "visible"}`,
		children: [
			/* @__PURE__ */ jsx(motion.button, {
				layout: isExpandable ? "preserve-aspect" : false,
				"aria-label": isOpen ? t("expand") : t("contract"),
				className: `absolute top-2.5 right-2.5 cursor-pointer ${isOpen ? "h-7 w-7" : "h-6 w-6"}`,
				children: /* @__PURE__ */ jsx("img", {
					width: 28,
					height: 28,
					src: isOpen ? CollapseIcon : ExpandIcon,
					"aria-label": isOpen ? t("expand") : t("contract"),
					alt: isOpen ? t("expand") : t("contract"),
				}),
			}),
			/* @__PURE__ */ jsx(motion.img, {
				layout: isExpandable ? "preserve-aspect" : false,
				loading: "lazy",
				alt: getAltTextFromFileName(offer.logo),
				width: "70",
				height: "70",
				src: offer.logo,
				className: `pointer-events-none select-none ${isOpen ? "mx-4 mt-4 mb-auto h-[170px] w-[170px]" : "my-4 h-[105px] w-[105px] md:h-[70px] md:w-[70px]"}`,
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				className: `flex-1 ${isOpen ? "min-w-[230px]" : "min-w-0"}`,
				layout: isExpandable,
				children: [
					/* @__PURE__ */ jsx(motion.h3, {
						layout: isExpandable ? "preserve-aspect" : false,
						className: isOpen
							? "mt-2 mr-4 mb-3 text-lg font-semibold"
							: "mb-1 text-lg",
						children: t(offer.titleKey),
					}),
					isOpen &&
						/* @__PURE__ */ jsx(motion.div, {
							className: "my-2 text-base",
							children: tm(offer.descriptionTranslationKey, {
								years: EXPERIENCE_YEARS,
							}),
						}),
				],
			}),
		],
	});
};
const DevSkills = [
	"React",
	"Angular",
	"TypeScript",
	"Javascript",
	"Remix",
	"Next.js",
	"Node.js",
	"Zustand",
	"CI/CD",
	"RESTful API design",
	"Prisma",
	"PostgreSQL",
	"Vercel AI SDK",
	"database management",
	"security best practices",
	"HTML",
	"CSS",
	"Material-UI",
	"Framer-Motion",
	"Jest",
	"Vitest",
	"Cypress",
	"Playwright",
	"Tailwind CSS",
	"Azure",
	"AWS",
	"AWS CDK",
	"AWS SDK",
	"Docker",
	"VBA",
	"Scrum",
	"Agile",
	"Internet of Things (IoT)",
	"MQTT",
	"Embedded C",
	"STM32",
];
const UxSkills = [
	"Figma",
	"AdobeXD",
	"Photoshop",
	"Illustrator",
	"Affinity Designer",
	"Animate",
	"After Effects",
	"Premiere Pro",
	"user tests",
	"wireframes and prototypes",
	"User-Centered-Design",
	"user journey map",
	"user centered design (UCD)",
	"information architecture",
	"personas",
	"accessibility",
	"red routes",
	"card sorting",
	"responsive design",
	"interaction design",
	"UX writing",
	"UX research",
	"A/B testing",
	"cross-cultural design",
	"ideation workshops",
];
const Skills = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(Section, {
		titleKey: "skills",
		className: "mx-8 flex flex-col sm:mx-16",
		children: /* @__PURE__ */ jsxs("div", {
			className:
				"mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2",
			children: [
				/* @__PURE__ */ jsx(Tags, {
					skills: DevSkills,
					title: t("webDevelopment"),
				}),
				/* @__PURE__ */ jsx(Tags, { skills: UxSkills, title: t("uxUiDesign") }),
			],
		}),
	});
};
const Tags = ({ skills, title }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "col-span-1 mt-4",
		children: [
			/* @__PURE__ */ jsx("h3", {
				className: "mb-4 text-left text-lg font-semibold",
				children: title,
			}),
			/* @__PURE__ */ jsx(motion.div, {
				initial: "hidden",
				whileInView: "visible",
				viewport: { amount: 0.2, once: true },
				transition: {
					staggerChildren: 0.1,
				},
				className: "flex flex-wrap gap-2 text-left",
				children: skills.map((skill) => {
					return /* @__PURE__ */ jsx(
						motion.div,
						{
							variants: {
								visible: { scale: 1 },
								hidden: { scale: 0 },
							},
							className: `${title === "Web Development" ? "shadow-xs-turquoise" : "shadow-xs-purple"} border-secondary/10 from-neutral to-neutral-dark inline-block rounded-full border-2 border-solid bg-linear-to-br px-3 py-1 capitalize`,
							children: skill,
						},
						skill,
					);
				}),
			}),
		],
	});
};
function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}
function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	Object.defineProperty(Constructor, "prototype", { writable: false });
	return Constructor;
}
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
	CREATED,
	MOUNTED,
	IDLE,
	MOVING,
	SCROLLING,
	DRAGGING,
	DESTROYED,
};
function empty(array) {
	array.length = 0;
}
function slice(arrayLike, start, end) {
	return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
	return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
var nextTick = setTimeout;
var noop = function noop2() {};
function raf(func) {
	return requestAnimationFrame(func);
}
function typeOf(type, subject) {
	return typeof subject === type;
}
function isObject(subject) {
	return !isNull(subject) && typeOf("object", subject);
}
var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
	return subject === null;
}
function isHTMLElement(subject) {
	try {
		return (
			subject instanceof
			(subject.ownerDocument.defaultView || window).HTMLElement
		);
	} catch (e) {
		return false;
	}
}
function toArray(value) {
	return isArray(value) ? value : [value];
}
function forEach(values, iteratee) {
	toArray(values).forEach(iteratee);
}
function includes(array, value) {
	return array.indexOf(value) > -1;
}
function push(array, items) {
	array.push.apply(array, toArray(items));
	return array;
}
function toggleClass(elm, classes, add) {
	if (elm) {
		forEach(classes, function (name) {
			if (name) {
				elm.classList[add ? "add" : "remove"](name);
			}
		});
	}
}
function addClass(elm, classes) {
	toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children2) {
	forEach(children2, parent.appendChild.bind(parent));
}
function before(nodes, ref) {
	forEach(nodes, function (node) {
		var parent = (ref || node).parentNode;
		if (parent) {
			parent.insertBefore(node, ref);
		}
	});
}
function matches(elm, selector) {
	return (
		isHTMLElement(elm) &&
		(elm["msMatchesSelector"] || elm.matches).call(elm, selector)
	);
}
function children(parent, selector) {
	var children2 = parent ? slice(parent.children) : [];
	return selector
		? children2.filter(function (child2) {
				return matches(child2, selector);
			})
		: children2;
}
function child(parent, selector) {
	return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
var ownKeys = Object.keys;
function forOwn(object, iteratee, right) {
	if (object) {
		(right ? ownKeys(object).reverse() : ownKeys(object)).forEach(
			function (key) {
				key !== "__proto__" && iteratee(object[key], key);
			},
		);
	}
	return object;
}
function assign(object) {
	slice(arguments, 1).forEach(function (source) {
		forOwn(source, function (value, key) {
			object[key] = source[key];
		});
	});
	return object;
}
function merge(object) {
	slice(arguments, 1).forEach(function (source) {
		forOwn(source, function (value, key) {
			if (isArray(value)) {
				object[key] = value.slice();
			} else if (isObject(value)) {
				object[key] = merge(
					{},
					isObject(object[key]) ? object[key] : {},
					value,
				);
			} else {
				object[key] = value;
			}
		});
	});
	return object;
}
function omit(object, keys) {
	forEach(keys || ownKeys(object), function (key) {
		delete object[key];
	});
}
function removeAttribute(elms, attrs) {
	forEach(elms, function (elm) {
		forEach(attrs, function (attr) {
			elm && elm.removeAttribute(attr);
		});
	});
}
function setAttribute(elms, attrs, value) {
	if (isObject(attrs)) {
		forOwn(attrs, function (value2, name) {
			setAttribute(elms, name, value2);
		});
	} else {
		forEach(elms, function (elm) {
			isNull(value) || value === ""
				? removeAttribute(elm, attrs)
				: elm.setAttribute(attrs, String(value));
		});
	}
}
function create(tag, attrs, parent) {
	var elm = document.createElement(tag);
	if (attrs) {
		isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
	}
	parent && append(parent, elm);
	return elm;
}
function style(elm, prop, value) {
	if (isUndefined(value)) {
		return getComputedStyle(elm)[prop];
	}
	if (!isNull(value)) {
		elm.style[prop] = "" + value;
	}
}
function display(elm, display2) {
	style(elm, "display", display2);
}
function focus(elm) {
	(elm["setActive"] && elm["setActive"]()) ||
		elm.focus({
			preventScroll: true,
		});
}
function getAttribute(elm, attr) {
	return elm.getAttribute(attr);
}
function hasClass(elm, className) {
	return elm && elm.classList.contains(className);
}
function rect(target) {
	return target.getBoundingClientRect();
}
function remove(nodes) {
	forEach(nodes, function (node) {
		if (node && node.parentNode) {
			node.parentNode.removeChild(node);
		}
	});
}
function parseHtml(html) {
	return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
	e.preventDefault();
	if (stopPropagation) {
		e.stopPropagation();
		e.stopImmediatePropagation();
	}
}
function query(parent, selector) {
	return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
	return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
	toggleClass(elm, classes, false);
}
function timeOf(e) {
	return e.timeStamp;
}
function unit(value) {
	return isString(value) ? value : value ? value + "px" : "";
}
var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
function assert(condition, message) {
	if (!condition) {
		throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
	}
}
var min = Math.min;
var max = Math.max;
var floor = Math.floor;
var ceil = Math.ceil;
var abs = Math.abs;
function approximatelyEqual(x, y, epsilon) {
	return abs(x - y) < epsilon;
}
function between(number, x, y, exclusive) {
	var minimum = min(x, y);
	var maximum = max(x, y);
	return exclusive
		? minimum < number && number < maximum
		: minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
	var minimum = min(x, y);
	var maximum = max(x, y);
	return min(max(minimum, number), maximum);
}
function sign(x) {
	return +(x > 0) - +(x < 0);
}
function format(string, replacements) {
	forEach(replacements, function (replacement) {
		string = string.replace("%s", "" + replacement);
	});
	return string;
}
function pad(number) {
	return number < 10 ? "0" + number : "" + number;
}
var ids = {};
function uniqueId(prefix) {
	return "" + prefix + pad((ids[prefix] = (ids[prefix] || 0) + 1));
}
function EventBinder() {
	var listeners = [];
	function bind(targets, events, callback, options) {
		forEachEvent(targets, events, function (target, event, namespace) {
			var isEventTarget = "addEventListener" in target;
			var remover = isEventTarget
				? target.removeEventListener.bind(target, event, callback, options)
				: target["removeListener"].bind(target, callback);
			isEventTarget
				? target.addEventListener(event, callback, options)
				: target["addListener"](callback);
			listeners.push([target, event, namespace, callback, remover]);
		});
	}
	function unbind(targets, events, callback) {
		forEachEvent(targets, events, function (target, event, namespace) {
			listeners = listeners.filter(function (listener) {
				if (
					listener[0] === target &&
					listener[1] === event &&
					listener[2] === namespace &&
					(!callback || listener[3] === callback)
				) {
					listener[4]();
					return false;
				}
				return true;
			});
		});
	}
	function dispatch(target, type, detail) {
		var e;
		var bubbles = true;
		if (typeof CustomEvent === "function") {
			e = new CustomEvent(type, {
				bubbles,
				detail,
			});
		} else {
			e = document.createEvent("CustomEvent");
			e.initCustomEvent(type, bubbles, false, detail);
		}
		target.dispatchEvent(e);
		return e;
	}
	function forEachEvent(targets, events, iteratee) {
		forEach(targets, function (target) {
			target &&
				forEach(events, function (events2) {
					events2.split(" ").forEach(function (eventNS) {
						var fragment = eventNS.split(".");
						iteratee(target, fragment[0], fragment[1]);
					});
				});
		});
	}
	function destroy() {
		listeners.forEach(function (data2) {
			data2[4]();
		});
		empty(listeners);
	}
	return {
		bind,
		unbind,
		dispatch,
		destroy,
	};
}
var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";
function EventInterface(Splide22) {
	var bus = Splide22 ? Splide22.event.bus : document.createDocumentFragment();
	var binder = EventBinder();
	function on2(events, callback) {
		binder.bind(bus, toArray(events).join(" "), function (e) {
			callback.apply(callback, isArray(e.detail) ? e.detail : []);
		});
	}
	function emit(event) {
		binder.dispatch(bus, event, slice(arguments, 1));
	}
	if (Splide22) {
		Splide22.event.on(EVENT_DESTROY, binder.destroy);
	}
	return assign(binder, {
		bus,
		on: on2,
		off: apply(binder.unbind, bus),
		emit,
	});
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
	var now = Date.now;
	var startTime;
	var rate = 0;
	var id;
	var paused = true;
	var count = 0;
	function update() {
		if (!paused) {
			rate = interval ? min((now() - startTime) / interval, 1) : 1;
			onUpdate && onUpdate(rate);
			if (rate >= 1) {
				onInterval();
				startTime = now();
				if (limit && ++count >= limit) {
					return pause();
				}
			}
			id = raf(update);
		}
	}
	function start(resume) {
		resume || cancel();
		startTime = now() - (resume ? rate * interval : 0);
		paused = false;
		id = raf(update);
	}
	function pause() {
		paused = true;
	}
	function rewind() {
		startTime = now();
		rate = 0;
		if (onUpdate) {
			onUpdate(rate);
		}
	}
	function cancel() {
		id && cancelAnimationFrame(id);
		rate = 0;
		id = 0;
		paused = true;
	}
	function set(time) {
		interval = time;
	}
	function isPaused() {
		return paused;
	}
	return {
		start,
		rewind,
		pause,
		cancel,
		set,
		isPaused,
	};
}
function State(initialState) {
	var state = initialState;
	function set(value) {
		state = value;
	}
	function is(states) {
		return includes(toArray(states), state);
	}
	return {
		set,
		is,
	};
}
function Throttle(func, duration) {
	var interval = RequestInterval(0, func, null, 1);
	return function () {
		interval.isPaused() && interval.start();
	};
}
function Media(Splide22, Components2, options) {
	var state = Splide22.state;
	var breakpoints = options.breakpoints || {};
	var reducedMotion = options.reducedMotion || {};
	var binder = EventBinder();
	var queries = [];
	function setup() {
		var isMin = options.mediaQuery === "min";
		ownKeys(breakpoints)
			.sort(function (n, m) {
				return isMin ? +n - +m : +m - +n;
			})
			.forEach(function (key) {
				register(
					breakpoints[key],
					"(" + (isMin ? "min" : "max") + "-width:" + key + "px)",
				);
			});
		register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
		update();
	}
	function destroy(completely) {
		if (completely) {
			binder.destroy();
		}
	}
	function register(options2, query2) {
		var queryList = matchMedia(query2);
		binder.bind(queryList, "change", update);
		queries.push([options2, queryList]);
	}
	function update() {
		var destroyed = state.is(DESTROYED);
		var direction = options.direction;
		var merged = queries.reduce(function (merged2, entry2) {
			return merge(merged2, entry2[1].matches ? entry2[0] : {});
		}, {});
		omit(options);
		set(merged);
		if (options.destroy) {
			Splide22.destroy(options.destroy === "completely");
		} else if (destroyed) {
			destroy(true);
			Splide22.mount();
		} else {
			direction !== options.direction && Splide22.refresh();
		}
	}
	function reduce(enable) {
		if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
			enable
				? merge(options, reducedMotion)
				: omit(options, ownKeys(reducedMotion));
		}
	}
	function set(opts, base, notify) {
		merge(options, opts);
		base && merge(Object.getPrototypeOf(options), opts);
		if (notify || !state.is(CREATED)) {
			Splide22.emit(EVENT_UPDATED, options);
		}
	}
	return {
		setup,
		destroy,
		reduce,
		set,
	};
}
var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
	width: ["height"],
	left: ["top", "right"],
	right: ["bottom", "left"],
	x: ["y"],
	X: ["Y"],
	Y: ["X"],
	ArrowLeft: [ARROW_UP, ARROW_RIGHT],
	ArrowRight: [ARROW_DOWN, ARROW_LEFT],
};
function Direction(Splide22, Components2, options) {
	function resolve(prop, axisOnly, direction) {
		direction = direction || options.direction;
		var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
		return (
			(ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index]) ||
			prop.replace(/width|left|right/i, function (match, offset) {
				var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
				return offset > 0
					? replacement.charAt(0).toUpperCase() + replacement.slice(1)
					: replacement;
			})
		);
	}
	function orient(value) {
		return value * (options.direction === RTL ? 1 : -1);
	}
	return {
		resolve,
		orient,
	};
}
var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [
	ROLE,
	TAB_INDEX,
	DISABLED,
	ARIA_CONTROLS,
	ARIA_CURRENT,
	ARIA_LABEL,
	ARIA_LABELLEDBY,
	ARIA_HIDDEN,
	ARIA_ORIENTATION,
	ARIA_ROLEDESCRIPTION,
];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [
	CLASS_ACTIVE,
	CLASS_VISIBLE,
	CLASS_PREV,
	CLASS_NEXT,
	CLASS_LOADING,
	CLASS_FOCUS_IN,
	CLASS_OVERFLOW,
];
var CLASSES = {
	slide: CLASS_SLIDE,
	clone: CLASS_CLONE,
	arrows: CLASS_ARROWS,
	arrow: CLASS_ARROW,
	prev: CLASS_ARROW_PREV,
	next: CLASS_ARROW_NEXT,
	pagination: CLASS_PAGINATION,
	page: CLASS_PAGINATION_PAGE,
	spinner: CLASS_SPINNER,
};
function closest(from, selector) {
	if (isFunction(from.closest)) {
		return from.closest(selector);
	}
	var elm = from;
	while (elm && elm.nodeType === 1) {
		if (matches(elm, selector)) {
			break;
		}
		elm = elm.parentElement;
	}
	return elm;
}
var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function Elements(Splide22, Components2, options) {
	var _EventInterface = EventInterface(Splide22),
		on2 = _EventInterface.on,
		bind = _EventInterface.bind;
	var root2 = Splide22.root;
	var i18n2 = options.i18n;
	var elements = {};
	var slides = [];
	var rootClasses = [];
	var trackClasses = [];
	var track;
	var list;
	var isUsingKey;
	function setup() {
		collect();
		init();
		update();
	}
	function mount() {
		on2(EVENT_REFRESH, destroy);
		on2(EVENT_REFRESH, setup);
		on2(EVENT_UPDATED, update);
		bind(
			document,
			POINTER_DOWN_EVENTS + " keydown",
			function (e) {
				isUsingKey = e.type === "keydown";
			},
			{
				capture: true,
			},
		);
		bind(root2, "focusin", function () {
			toggleClass(root2, CLASS_FOCUS_IN, !!isUsingKey);
		});
	}
	function destroy(completely) {
		var attrs = ALL_ATTRIBUTES.concat("style");
		empty(slides);
		removeClass(root2, rootClasses);
		removeClass(track, trackClasses);
		removeAttribute([track, list], attrs);
		removeAttribute(
			root2,
			completely ? attrs : ["style", ARIA_ROLEDESCRIPTION],
		);
	}
	function update() {
		removeClass(root2, rootClasses);
		removeClass(track, trackClasses);
		rootClasses = getClasses(CLASS_ROOT);
		trackClasses = getClasses(CLASS_TRACK);
		addClass(root2, rootClasses);
		addClass(track, trackClasses);
		setAttribute(root2, ARIA_LABEL, options.label);
		setAttribute(root2, ARIA_LABELLEDBY, options.labelledby);
	}
	function collect() {
		track = find("." + CLASS_TRACK);
		list = child(track, "." + CLASS_LIST);
		assert(track && list, "A track/list element is missing.");
		push(
			slides,
			children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"),
		);
		forOwn(
			{
				arrows: CLASS_ARROWS,
				pagination: CLASS_PAGINATION,
				prev: CLASS_ARROW_PREV,
				next: CLASS_ARROW_NEXT,
				bar: CLASS_PROGRESS_BAR,
				toggle: CLASS_TOGGLE,
			},
			function (className, key) {
				elements[key] = find("." + className);
			},
		);
		assign(elements, {
			root: root2,
			track,
			list,
			slides,
		});
	}
	function init() {
		var id = root2.id || uniqueId(PROJECT_CODE);
		var role = options.role;
		root2.id = id;
		track.id = track.id || id + "-track";
		list.id = list.id || id + "-list";
		if (!getAttribute(root2, ROLE) && root2.tagName !== "SECTION" && role) {
			setAttribute(root2, ROLE, role);
		}
		setAttribute(root2, ARIA_ROLEDESCRIPTION, i18n2.carousel);
		setAttribute(list, ROLE, "presentation");
	}
	function find(selector) {
		var elm = query(root2, selector);
		return elm && closest(elm, "." + CLASS_ROOT) === root2 ? elm : void 0;
	}
	function getClasses(base) {
		return [
			base + "--" + options.type,
			base + "--" + options.direction,
			options.drag && base + "--draggable",
			options.isNavigation && base + "--nav",
			base === CLASS_ROOT && CLASS_ACTIVE,
		];
	}
	return assign(elements, {
		setup,
		mount,
		destroy,
	});
}
var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";
function Slide$1(Splide22, index, slideIndex, slide) {
	var event = EventInterface(Splide22);
	var on2 = event.on,
		emit = event.emit,
		bind = event.bind;
	var Components = Splide22.Components,
		root2 = Splide22.root,
		options = Splide22.options;
	var isNavigation = options.isNavigation,
		updateOnMove = options.updateOnMove,
		i18n2 = options.i18n,
		pagination = options.pagination,
		slideFocus = options.slideFocus;
	var resolve = Components.Direction.resolve;
	var styles = getAttribute(slide, "style");
	var label = getAttribute(slide, ARIA_LABEL);
	var isClone = slideIndex > -1;
	var container = child(slide, "." + CLASS_CONTAINER);
	var destroyed;
	function mount() {
		if (!isClone) {
			slide.id = root2.id + "-slide" + pad(index + 1);
			setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
			setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n2.slide);
			setAttribute(
				slide,
				ARIA_LABEL,
				label || format(i18n2.slideLabel, [index + 1, Splide22.length]),
			);
		}
		listen();
	}
	function listen() {
		bind(slide, "click", apply(emit, EVENT_CLICK, self2));
		bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self2));
		on2([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
		on2(EVENT_NAVIGATION_MOUNTED, initNavigation);
		if (updateOnMove) {
			on2(EVENT_MOVE, onMove);
		}
	}
	function destroy() {
		destroyed = true;
		event.destroy();
		removeClass(slide, STATUS_CLASSES);
		removeAttribute(slide, ALL_ATTRIBUTES);
		setAttribute(slide, "style", styles);
		setAttribute(slide, ARIA_LABEL, label || "");
	}
	function initNavigation() {
		var controls = Splide22.splides
			.map(function (target) {
				var Slide2 = target.splide.Components.Slides.getAt(index);
				return Slide2 ? Slide2.slide.id : "";
			})
			.join(" ");
		setAttribute(
			slide,
			ARIA_LABEL,
			format(i18n2.slideX, (isClone ? slideIndex : index) + 1),
		);
		setAttribute(slide, ARIA_CONTROLS, controls);
		setAttribute(slide, ROLE, slideFocus ? "button" : "");
		slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
	}
	function onMove() {
		if (!destroyed) {
			update();
		}
	}
	function update() {
		if (!destroyed) {
			var curr = Splide22.index;
			updateActivity();
			updateVisibility();
			toggleClass(slide, CLASS_PREV, index === curr - 1);
			toggleClass(slide, CLASS_NEXT, index === curr + 1);
		}
	}
	function updateActivity() {
		var active = isActive();
		if (active !== hasClass(slide, CLASS_ACTIVE)) {
			toggleClass(slide, CLASS_ACTIVE, active);
			setAttribute(slide, ARIA_CURRENT, (isNavigation && active) || "");
			emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self2);
		}
	}
	function updateVisibility() {
		var visible = isVisible();
		var hidden = !visible && (!isActive() || isClone);
		if (!Splide22.state.is([MOVING, SCROLLING])) {
			setAttribute(slide, ARIA_HIDDEN, hidden || "");
		}
		setAttribute(
			queryAll(slide, options.focusableNodes || ""),
			TAB_INDEX,
			hidden ? -1 : "",
		);
		if (slideFocus) {
			setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
		}
		if (visible !== hasClass(slide, CLASS_VISIBLE)) {
			toggleClass(slide, CLASS_VISIBLE, visible);
			emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self2);
		}
		if (!visible && document.activeElement === slide) {
			var Slide2 = Components.Slides.getAt(Splide22.index);
			Slide2 && focus(Slide2.slide);
		}
	}
	function style$1(prop, value, useContainer) {
		style((useContainer && container) || slide, prop, value);
	}
	function isActive() {
		var curr = Splide22.index;
		return curr === index || (options.cloneStatus && curr === slideIndex);
	}
	function isVisible() {
		if (Splide22.is(FADE)) {
			return isActive();
		}
		var trackRect = rect(Components.Elements.track);
		var slideRect = rect(slide);
		var left = resolve("left", true);
		var right = resolve("right", true);
		return (
			floor(trackRect[left]) <= ceil(slideRect[left]) &&
			floor(slideRect[right]) <= ceil(trackRect[right])
		);
	}
	function isWithin(from, distance) {
		var diff = abs(from - index);
		if (!isClone && (options.rewind || Splide22.is(LOOP))) {
			diff = min(diff, Splide22.length - diff);
		}
		return diff <= distance;
	}
	var self2 = {
		index,
		slideIndex,
		slide,
		container,
		isClone,
		mount,
		destroy,
		update,
		style: style$1,
		isWithin,
	};
	return self2;
}
function Slides(Splide22, Components2, options) {
	var _EventInterface2 = EventInterface(Splide22),
		on2 = _EventInterface2.on,
		emit = _EventInterface2.emit,
		bind = _EventInterface2.bind;
	var _Components2$Elements = Components2.Elements,
		slides = _Components2$Elements.slides,
		list = _Components2$Elements.list;
	var Slides2 = [];
	function mount() {
		init();
		on2(EVENT_REFRESH, destroy);
		on2(EVENT_REFRESH, init);
	}
	function init() {
		slides.forEach(function (slide, index) {
			register(slide, index, -1);
		});
	}
	function destroy() {
		forEach$1(function (Slide2) {
			Slide2.destroy();
		});
		empty(Slides2);
	}
	function update() {
		forEach$1(function (Slide2) {
			Slide2.update();
		});
	}
	function register(slide, index, slideIndex) {
		var object = Slide$1(Splide22, index, slideIndex, slide);
		object.mount();
		Slides2.push(object);
		Slides2.sort(function (Slide1, Slide2) {
			return Slide1.index - Slide2.index;
		});
	}
	function get(excludeClones) {
		return excludeClones
			? filter(function (Slide2) {
					return !Slide2.isClone;
				})
			: Slides2;
	}
	function getIn(page) {
		var Controller2 = Components2.Controller;
		var index = Controller2.toIndex(page);
		var max2 = Controller2.hasFocus() ? 1 : options.perPage;
		return filter(function (Slide2) {
			return between(Slide2.index, index, index + max2 - 1);
		});
	}
	function getAt(index) {
		return filter(index)[0];
	}
	function add(items, index) {
		forEach(items, function (slide) {
			if (isString(slide)) {
				slide = parseHtml(slide);
			}
			if (isHTMLElement(slide)) {
				var ref = slides[index];
				ref ? before(slide, ref) : append(list, slide);
				addClass(slide, options.classes.slide);
				observeImages(slide, apply(emit, EVENT_RESIZE));
			}
		});
		emit(EVENT_REFRESH);
	}
	function remove$1(matcher) {
		remove(
			filter(matcher).map(function (Slide2) {
				return Slide2.slide;
			}),
		);
		emit(EVENT_REFRESH);
	}
	function forEach$1(iteratee, excludeClones) {
		get(excludeClones).forEach(iteratee);
	}
	function filter(matcher) {
		return Slides2.filter(
			isFunction(matcher)
				? matcher
				: function (Slide2) {
						return isString(matcher)
							? matches(Slide2.slide, matcher)
							: includes(toArray(matcher), Slide2.index);
					},
		);
	}
	function style2(prop, value, useContainer) {
		forEach$1(function (Slide2) {
			Slide2.style(prop, value, useContainer);
		});
	}
	function observeImages(elm, callback) {
		var images = queryAll(elm, "img");
		var length = images.length;
		if (length) {
			images.forEach(function (img) {
				bind(img, "load error", function () {
					if (!--length) {
						callback();
					}
				});
			});
		} else {
			callback();
		}
	}
	function getLength(excludeClones) {
		return excludeClones ? slides.length : Slides2.length;
	}
	function isEnough() {
		return Slides2.length > options.perPage;
	}
	return {
		mount,
		destroy,
		update,
		register,
		get,
		getIn,
		getAt,
		add,
		remove: remove$1,
		forEach: forEach$1,
		filter,
		style: style2,
		getLength,
		isEnough,
	};
}
function Layout(Splide22, Components2, options) {
	var _EventInterface3 = EventInterface(Splide22),
		on2 = _EventInterface3.on,
		bind = _EventInterface3.bind,
		emit = _EventInterface3.emit;
	var Slides2 = Components2.Slides;
	var resolve = Components2.Direction.resolve;
	var _Components2$Elements2 = Components2.Elements,
		root2 = _Components2$Elements2.root,
		track = _Components2$Elements2.track,
		list = _Components2$Elements2.list;
	var getAt = Slides2.getAt,
		styleSlides = Slides2.style;
	var vertical;
	var rootRect;
	var overflow;
	function mount() {
		init();
		bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
		on2([EVENT_UPDATED, EVENT_REFRESH], init);
		on2(EVENT_RESIZE, resize);
	}
	function init() {
		vertical = options.direction === TTB;
		style(root2, "maxWidth", unit(options.width));
		style(track, resolve("paddingLeft"), cssPadding(false));
		style(track, resolve("paddingRight"), cssPadding(true));
		resize(true);
	}
	function resize(force) {
		var newRect = rect(root2);
		if (
			force ||
			rootRect.width !== newRect.width ||
			rootRect.height !== newRect.height
		) {
			style(track, "height", cssTrackHeight());
			styleSlides(resolve("marginRight"), unit(options.gap));
			styleSlides("width", cssSlideWidth());
			styleSlides("height", cssSlideHeight(), true);
			rootRect = newRect;
			emit(EVENT_RESIZED);
			if (overflow !== (overflow = isOverflow())) {
				toggleClass(root2, CLASS_OVERFLOW, overflow);
				emit(EVENT_OVERFLOW, overflow);
			}
		}
	}
	function cssPadding(right) {
		var padding = options.padding;
		var prop = resolve(right ? "right" : "left");
		return (
			(padding && unit(padding[prop] || (isObject(padding) ? 0 : padding))) ||
			"0px"
		);
	}
	function cssTrackHeight() {
		var height = "";
		if (vertical) {
			height = cssHeight();
			assert(height, "height or heightRatio is missing.");
			height =
				"calc(" +
				height +
				" - " +
				cssPadding(false) +
				" - " +
				cssPadding(true) +
				")";
		}
		return height;
	}
	function cssHeight() {
		return unit(options.height || rect(list).width * options.heightRatio);
	}
	function cssSlideWidth() {
		return options.autoWidth
			? null
			: unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
	}
	function cssSlideHeight() {
		return (
			unit(options.fixedHeight) ||
			(vertical ? (options.autoHeight ? null : cssSlideSize()) : cssHeight())
		);
	}
	function cssSlideSize() {
		var gap = unit(options.gap);
		return (
			"calc((100%" +
			(gap && " + " + gap) +
			")/" +
			(options.perPage || 1) +
			(gap && " - " + gap) +
			")"
		);
	}
	function listSize() {
		return rect(list)[resolve("width")];
	}
	function slideSize(index, withoutGap) {
		var Slide2 = getAt(index || 0);
		return Slide2
			? rect(Slide2.slide)[resolve("width")] + (withoutGap ? 0 : getGap())
			: 0;
	}
	function totalSize(index, withoutGap) {
		var Slide2 = getAt(index);
		if (Slide2) {
			var right = rect(Slide2.slide)[resolve("right")];
			var left = rect(list)[resolve("left")];
			return abs(right - left) + (withoutGap ? 0 : getGap());
		}
		return 0;
	}
	function sliderSize(withoutGap) {
		return (
			totalSize(Splide22.length - 1) - totalSize(0) + slideSize(0, withoutGap)
		);
	}
	function getGap() {
		var Slide2 = getAt(0);
		return (
			(Slide2 && parseFloat(style(Slide2.slide, resolve("marginRight")))) || 0
		);
	}
	function getPadding(right) {
		return (
			parseFloat(
				style(track, resolve("padding" + (right ? "Right" : "Left"))),
			) || 0
		);
	}
	function isOverflow() {
		return Splide22.is(FADE) || sliderSize(true) > listSize();
	}
	return {
		mount,
		resize,
		listSize,
		slideSize,
		sliderSize,
		totalSize,
		getPadding,
		isOverflow,
	};
}
var MULTIPLIER = 2;
function Clones(Splide22, Components2, options) {
	var event = EventInterface(Splide22);
	var on2 = event.on;
	var Elements2 = Components2.Elements,
		Slides2 = Components2.Slides;
	var resolve = Components2.Direction.resolve;
	var clones = [];
	var cloneCount;
	function mount() {
		on2(EVENT_REFRESH, remount);
		on2([EVENT_UPDATED, EVENT_RESIZE], observe);
		if ((cloneCount = computeCloneCount())) {
			generate(cloneCount);
			Components2.Layout.resize(true);
		}
	}
	function remount() {
		destroy();
		mount();
	}
	function destroy() {
		remove(clones);
		empty(clones);
		event.destroy();
	}
	function observe() {
		var count = computeCloneCount();
		if (cloneCount !== count) {
			if (cloneCount < count || !count) {
				event.emit(EVENT_REFRESH);
			}
		}
	}
	function generate(count) {
		var slides = Slides2.get().slice();
		var length = slides.length;
		if (length) {
			while (slides.length < count) {
				push(slides, slides);
			}
			push(slides.slice(-count), slides.slice(0, count)).forEach(
				function (Slide2, index) {
					var isHead = index < count;
					var clone = cloneDeep(Slide2.slide, index);
					isHead
						? before(clone, slides[0].slide)
						: append(Elements2.list, clone);
					push(clones, clone);
					Slides2.register(
						clone,
						index - count + (isHead ? 0 : length),
						Slide2.index,
					);
				},
			);
		}
	}
	function cloneDeep(elm, index) {
		var clone = elm.cloneNode(true);
		addClass(clone, options.classes.clone);
		clone.id = Splide22.root.id + "-clone" + pad(index + 1);
		return clone;
	}
	function computeCloneCount() {
		var clones2 = options.clones;
		if (!Splide22.is(LOOP)) {
			clones2 = 0;
		} else if (isUndefined(clones2)) {
			var fixedSize =
				options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
			var fixedCount =
				fixedSize && ceil(rect(Elements2.track)[resolve("width")] / fixedSize);
			clones2 =
				fixedCount ||
				(options[resolve("autoWidth")] && Splide22.length) ||
				options.perPage * MULTIPLIER;
		}
		return clones2;
	}
	return {
		mount,
		destroy,
	};
}
function Move(Splide22, Components2, options) {
	var _EventInterface4 = EventInterface(Splide22),
		on2 = _EventInterface4.on,
		emit = _EventInterface4.emit;
	var set = Splide22.state.set;
	var _Components2$Layout = Components2.Layout,
		slideSize = _Components2$Layout.slideSize,
		getPadding = _Components2$Layout.getPadding,
		totalSize = _Components2$Layout.totalSize,
		listSize = _Components2$Layout.listSize,
		sliderSize = _Components2$Layout.sliderSize;
	var _Components2$Directio = Components2.Direction,
		resolve = _Components2$Directio.resolve,
		orient = _Components2$Directio.orient;
	var _Components2$Elements3 = Components2.Elements,
		list = _Components2$Elements3.list,
		track = _Components2$Elements3.track;
	var Transition;
	function mount() {
		Transition = Components2.Transition;
		on2(
			[EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH],
			reposition,
		);
	}
	function reposition() {
		if (!Components2.Controller.isBusy()) {
			Components2.Scroll.cancel();
			jump(Splide22.index);
			Components2.Slides.update();
		}
	}
	function move(dest, index, prev, callback) {
		if (dest !== index && canShift(dest > prev)) {
			cancel();
			translate(shift(getPosition(), dest > prev), true);
		}
		set(MOVING);
		emit(EVENT_MOVE, index, prev, dest);
		Transition.start(index, function () {
			set(IDLE);
			emit(EVENT_MOVED, index, prev, dest);
			callback && callback();
		});
	}
	function jump(index) {
		translate(toPosition(index, true));
	}
	function translate(position, preventLoop) {
		if (!Splide22.is(FADE)) {
			var destination = preventLoop ? position : loop(position);
			style(
				list,
				"transform",
				"translate" + resolve("X") + "(" + destination + "px)",
			);
			position !== destination && emit(EVENT_SHIFTED);
		}
	}
	function loop(position) {
		if (Splide22.is(LOOP)) {
			var index = toIndex(position);
			var exceededMax = index > Components2.Controller.getEnd();
			var exceededMin = index < 0;
			if (exceededMin || exceededMax) {
				position = shift(position, exceededMax);
			}
		}
		return position;
	}
	function shift(position, backwards) {
		var excess = position - getLimit(backwards);
		var size = sliderSize();
		position -=
			orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
		return position;
	}
	function cancel() {
		translate(getPosition(), true);
		Transition.cancel();
	}
	function toIndex(position) {
		var Slides2 = Components2.Slides.get();
		var index = 0;
		var minDistance = Infinity;
		for (var i = 0; i < Slides2.length; i++) {
			var slideIndex = Slides2[i].index;
			var distance = abs(toPosition(slideIndex, true) - position);
			if (distance <= minDistance) {
				minDistance = distance;
				index = slideIndex;
			} else {
				break;
			}
		}
		return index;
	}
	function toPosition(index, trimming) {
		var position = orient(totalSize(index - 1) - offset(index));
		return trimming ? trim(position) : position;
	}
	function getPosition() {
		var left = resolve("left");
		return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
	}
	function trim(position) {
		if (options.trimSpace && Splide22.is(SLIDE)) {
			position = clamp(position, 0, orient(sliderSize(true) - listSize()));
		}
		return position;
	}
	function offset(index) {
		var focus2 = options.focus;
		return focus2 === "center"
			? (listSize() - slideSize(index, true)) / 2
			: +focus2 * slideSize(index) || 0;
	}
	function getLimit(max2) {
		return toPosition(
			max2 ? Components2.Controller.getEnd() : 0,
			!!options.trimSpace,
		);
	}
	function canShift(backwards) {
		var shifted = orient(shift(getPosition(), backwards));
		return backwards
			? shifted >= 0
			: shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
	}
	function exceededLimit(max2, position) {
		position = isUndefined(position) ? getPosition() : position;
		var exceededMin =
			max2 !== true && orient(position) < orient(getLimit(false));
		var exceededMax =
			max2 !== false && orient(position) > orient(getLimit(true));
		return exceededMin || exceededMax;
	}
	return {
		mount,
		move,
		jump,
		translate,
		shift,
		cancel,
		toIndex,
		toPosition,
		getPosition,
		getLimit,
		exceededLimit,
		reposition,
	};
}
function Controller(Splide22, Components2, options) {
	var _EventInterface5 = EventInterface(Splide22),
		on2 = _EventInterface5.on,
		emit = _EventInterface5.emit;
	var Move2 = Components2.Move;
	var getPosition = Move2.getPosition,
		getLimit = Move2.getLimit,
		toPosition = Move2.toPosition;
	var _Components2$Slides = Components2.Slides,
		isEnough = _Components2$Slides.isEnough,
		getLength = _Components2$Slides.getLength;
	var omitEnd = options.omitEnd;
	var isLoop = Splide22.is(LOOP);
	var isSlide = Splide22.is(SLIDE);
	var getNext = apply(getAdjacent, false);
	var getPrev = apply(getAdjacent, true);
	var currIndex = options.start || 0;
	var endIndex;
	var prevIndex = currIndex;
	var slideCount;
	var perMove;
	var perPage;
	function mount() {
		init();
		on2([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
		on2(EVENT_RESIZED, onResized);
	}
	function init() {
		slideCount = getLength(true);
		perMove = options.perMove;
		perPage = options.perPage;
		endIndex = getEnd();
		var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
		if (index !== currIndex) {
			currIndex = index;
			Move2.reposition();
		}
	}
	function onResized() {
		if (endIndex !== getEnd()) {
			emit(EVENT_END_INDEX_CHANGED);
		}
	}
	function go(control, allowSameIndex, callback) {
		if (!isBusy()) {
			var dest = parse(control);
			var index = loop(dest);
			if (index > -1 && (allowSameIndex || index !== currIndex)) {
				setIndex(index);
				Move2.move(dest, index, prevIndex, callback);
			}
		}
	}
	function scroll(destination, duration, snap, callback) {
		Components2.Scroll.scroll(destination, duration, snap, function () {
			var index = loop(Move2.toIndex(getPosition()));
			setIndex(omitEnd ? min(index, endIndex) : index);
			callback && callback();
		});
	}
	function parse(control) {
		var index = currIndex;
		if (isString(control)) {
			var _ref = control.match(/([+\-<>])(\d+)?/) || [],
				indicator = _ref[1],
				number = _ref[2];
			if (indicator === "+" || indicator === "-") {
				index = computeDestIndex(
					currIndex + +("" + indicator + (+number || 1)),
					currIndex,
				);
			} else if (indicator === ">") {
				index = number ? toIndex(+number) : getNext(true);
			} else if (indicator === "<") {
				index = getPrev(true);
			}
		} else {
			index = isLoop ? control : clamp(control, 0, endIndex);
		}
		return index;
	}
	function getAdjacent(prev, destination) {
		var number = perMove || (hasFocus() ? 1 : perPage);
		var dest = computeDestIndex(
			currIndex + number * (prev ? -1 : 1),
			currIndex,
			!(perMove || hasFocus()),
		);
		if (dest === -1 && isSlide) {
			if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
				return prev ? 0 : endIndex;
			}
		}
		return destination ? dest : loop(dest);
	}
	function computeDestIndex(dest, from, snapPage) {
		if (isEnough() || hasFocus()) {
			var index = computeMovableDestIndex(dest);
			if (index !== dest) {
				from = dest;
				dest = index;
				snapPage = false;
			}
			if (dest < 0 || dest > endIndex) {
				if (
					!perMove &&
					(between(0, dest, from, true) || between(endIndex, from, dest, true))
				) {
					dest = toIndex(toPage(dest));
				} else {
					if (isLoop) {
						dest = snapPage
							? dest < 0
								? -(slideCount % perPage || perPage)
								: slideCount
							: dest;
					} else if (options.rewind) {
						dest = dest < 0 ? endIndex : 0;
					} else {
						dest = -1;
					}
				}
			} else {
				if (snapPage && dest !== from) {
					dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
				}
			}
		} else {
			dest = -1;
		}
		return dest;
	}
	function computeMovableDestIndex(dest) {
		if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
			var position = getPosition();
			while (
				position === toPosition(dest, true) &&
				between(dest, 0, Splide22.length - 1, !options.rewind)
			) {
				dest < currIndex ? --dest : ++dest;
			}
		}
		return dest;
	}
	function loop(index) {
		return isLoop ? (index + slideCount) % slideCount || 0 : index;
	}
	function getEnd() {
		var end = slideCount - (hasFocus() || (isLoop && perMove) ? 1 : perPage);
		while (omitEnd && end-- > 0) {
			if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
				end++;
				break;
			}
		}
		return clamp(end, 0, slideCount - 1);
	}
	function toIndex(page) {
		return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
	}
	function toPage(index) {
		return hasFocus()
			? min(index, endIndex)
			: floor((index >= endIndex ? slideCount - 1 : index) / perPage);
	}
	function toDest(destination) {
		var closest2 = Move2.toIndex(destination);
		return isSlide ? clamp(closest2, 0, endIndex) : closest2;
	}
	function setIndex(index) {
		if (index !== currIndex) {
			prevIndex = currIndex;
			currIndex = index;
		}
	}
	function getIndex(prev) {
		return prev ? prevIndex : currIndex;
	}
	function hasFocus() {
		return !isUndefined(options.focus) || options.isNavigation;
	}
	function isBusy() {
		return (
			Splide22.state.is([MOVING, SCROLLING]) && !!options.waitForTransition
		);
	}
	return {
		mount,
		go,
		scroll,
		getNext,
		getPrev,
		getAdjacent,
		getEnd,
		setIndex,
		getIndex,
		toIndex,
		toPage,
		toDest,
		hasFocus,
		isBusy,
	};
}
var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH =
	"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;
function Arrows(Splide22, Components2, options) {
	var event = EventInterface(Splide22);
	var on2 = event.on,
		bind = event.bind,
		emit = event.emit;
	var classes = options.classes,
		i18n2 = options.i18n;
	var Elements2 = Components2.Elements,
		Controller2 = Components2.Controller;
	var placeholder = Elements2.arrows,
		track = Elements2.track;
	var wrapper = placeholder;
	var prev = Elements2.prev;
	var next = Elements2.next;
	var created;
	var wrapperClasses;
	var arrows = {};
	function mount() {
		init();
		on2(EVENT_UPDATED, remount);
	}
	function remount() {
		destroy();
		mount();
	}
	function init() {
		var enabled = options.arrows;
		if (enabled && !(prev && next)) {
			createArrows();
		}
		if (prev && next) {
			assign(arrows, {
				prev,
				next,
			});
			display(wrapper, enabled ? "" : "none");
			addClass(
				wrapper,
				(wrapperClasses = CLASS_ARROWS + "--" + options.direction),
			);
			if (enabled) {
				listen();
				update();
				setAttribute([prev, next], ARIA_CONTROLS, track.id);
				emit(EVENT_ARROWS_MOUNTED, prev, next);
			}
		}
	}
	function destroy() {
		event.destroy();
		removeClass(wrapper, wrapperClasses);
		if (created) {
			remove(placeholder ? [prev, next] : wrapper);
			prev = next = null;
		} else {
			removeAttribute([prev, next], ALL_ATTRIBUTES);
		}
	}
	function listen() {
		on2(
			[
				EVENT_MOUNTED,
				EVENT_MOVED,
				EVENT_REFRESH,
				EVENT_SCROLLED,
				EVENT_END_INDEX_CHANGED,
			],
			update,
		);
		bind(next, "click", apply(go, ">"));
		bind(prev, "click", apply(go, "<"));
	}
	function go(control) {
		Controller2.go(control, true);
	}
	function createArrows() {
		wrapper = placeholder || create("div", classes.arrows);
		prev = createArrow(true);
		next = createArrow(false);
		created = true;
		append(wrapper, [prev, next]);
		!placeholder && before(wrapper, track);
	}
	function createArrow(prev2) {
		var arrow =
			'<button class="' +
			classes.arrow +
			" " +
			(prev2 ? classes.prev : classes.next) +
			'" type="button"><svg xmlns="' +
			XML_NAME_SPACE +
			'" viewBox="0 0 ' +
			SIZE +
			" " +
			SIZE +
			'" width="' +
			SIZE +
			'" height="' +
			SIZE +
			'" focusable="false"><path d="' +
			(options.arrowPath || PATH) +
			'" />';
		return parseHtml(arrow);
	}
	function update() {
		if (prev && next) {
			var index = Splide22.index;
			var prevIndex = Controller2.getPrev();
			var nextIndex = Controller2.getNext();
			var prevLabel =
				prevIndex > -1 && index < prevIndex ? i18n2.last : i18n2.prev;
			var nextLabel =
				nextIndex > -1 && index > nextIndex ? i18n2.first : i18n2.next;
			prev.disabled = prevIndex < 0;
			next.disabled = nextIndex < 0;
			setAttribute(prev, ARIA_LABEL, prevLabel);
			setAttribute(next, ARIA_LABEL, nextLabel);
			emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
		}
	}
	return {
		arrows,
		mount,
		destroy,
		update,
	};
}
var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
function Autoplay(Splide22, Components2, options) {
	var _EventInterface6 = EventInterface(Splide22),
		on2 = _EventInterface6.on,
		bind = _EventInterface6.bind,
		emit = _EventInterface6.emit;
	var interval = RequestInterval(
		options.interval,
		Splide22.go.bind(Splide22, ">"),
		onAnimationFrame,
	);
	var isPaused = interval.isPaused;
	var Elements2 = Components2.Elements,
		_Components2$Elements4 = Components2.Elements,
		root2 = _Components2$Elements4.root,
		toggle = _Components2$Elements4.toggle;
	var autoplay = options.autoplay;
	var hovered;
	var focused;
	var stopped = autoplay === "pause";
	function mount() {
		if (autoplay) {
			listen();
			toggle && setAttribute(toggle, ARIA_CONTROLS, Elements2.track.id);
			stopped || play();
			update();
		}
	}
	function listen() {
		if (options.pauseOnHover) {
			bind(root2, "mouseenter mouseleave", function (e) {
				hovered = e.type === "mouseenter";
				autoToggle();
			});
		}
		if (options.pauseOnFocus) {
			bind(root2, "focusin focusout", function (e) {
				focused = e.type === "focusin";
				autoToggle();
			});
		}
		if (toggle) {
			bind(toggle, "click", function () {
				stopped ? play() : pause(true);
			});
		}
		on2([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
		on2(EVENT_MOVE, onMove);
	}
	function play() {
		if (isPaused() && Components2.Slides.isEnough()) {
			interval.start(!options.resetProgress);
			focused = hovered = stopped = false;
			update();
			emit(EVENT_AUTOPLAY_PLAY);
		}
	}
	function pause(stop) {
		if (stop === void 0) {
			stop = true;
		}
		stopped = !!stop;
		update();
		if (!isPaused()) {
			interval.pause();
			emit(EVENT_AUTOPLAY_PAUSE);
		}
	}
	function autoToggle() {
		if (!stopped) {
			hovered || focused ? pause(false) : play();
		}
	}
	function update() {
		if (toggle) {
			toggleClass(toggle, CLASS_ACTIVE, !stopped);
			setAttribute(
				toggle,
				ARIA_LABEL,
				options.i18n[stopped ? "play" : "pause"],
			);
		}
	}
	function onAnimationFrame(rate) {
		var bar = Elements2.bar;
		bar && style(bar, "width", rate * 100 + "%");
		emit(EVENT_AUTOPLAY_PLAYING, rate);
	}
	function onMove(index) {
		var Slide2 = Components2.Slides.getAt(index);
		interval.set(
			(Slide2 && +getAttribute(Slide2.slide, INTERVAL_DATA_ATTRIBUTE)) ||
				options.interval,
		);
	}
	return {
		mount,
		destroy: interval.cancel,
		play,
		pause,
		isPaused,
	};
}
function Cover(Splide22, Components2, options) {
	var _EventInterface7 = EventInterface(Splide22),
		on2 = _EventInterface7.on;
	function mount() {
		if (options.cover) {
			on2(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
			on2([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
		}
	}
	function cover(cover2) {
		Components2.Slides.forEach(function (Slide2) {
			var img = child(Slide2.container || Slide2.slide, "img");
			if (img && img.src) {
				toggle(cover2, img, Slide2);
			}
		});
	}
	function toggle(cover2, img, Slide2) {
		Slide2.style(
			"background",
			cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "",
			true,
		);
		display(img, cover2 ? "none" : "");
	}
	return {
		mount,
		destroy: apply(cover, false),
	};
}
var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;
function Scroll(Splide22, Components2, options) {
	var _EventInterface8 = EventInterface(Splide22),
		on2 = _EventInterface8.on,
		emit = _EventInterface8.emit;
	var set = Splide22.state.set;
	var Move2 = Components2.Move;
	var getPosition = Move2.getPosition,
		getLimit = Move2.getLimit,
		exceededLimit = Move2.exceededLimit,
		translate = Move2.translate;
	var isSlide = Splide22.is(SLIDE);
	var interval;
	var callback;
	var friction = 1;
	function mount() {
		on2(EVENT_MOVE, clear);
		on2([EVENT_UPDATED, EVENT_REFRESH], cancel);
	}
	function scroll(destination, duration, snap, onScrolled, noConstrain) {
		var from = getPosition();
		clear();
		if (snap && (!isSlide || !exceededLimit())) {
			var size = Components2.Layout.sliderSize();
			var offset =
				sign(destination) * size * floor(abs(destination) / size) || 0;
			destination =
				Move2.toPosition(Components2.Controller.toDest(destination % size)) +
				offset;
		}
		var noDistance = approximatelyEqual(from, destination, 1);
		friction = 1;
		duration = noDistance
			? 0
			: duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
		callback = onScrolled;
		interval = RequestInterval(
			duration,
			onEnd,
			apply(update, from, destination, noConstrain),
			1,
		);
		set(SCROLLING);
		emit(EVENT_SCROLL);
		interval.start();
	}
	function onEnd() {
		set(IDLE);
		callback && callback();
		emit(EVENT_SCROLLED);
	}
	function update(from, to, noConstrain, rate) {
		var position = getPosition();
		var target = from + (to - from) * easing(rate);
		var diff = (target - position) * friction;
		translate(position + diff);
		if (isSlide && !noConstrain && exceededLimit()) {
			friction *= FRICTION_FACTOR;
			if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
				scroll(
					getLimit(exceededLimit(true)),
					BOUNCE_DURATION,
					false,
					callback,
					true,
				);
			}
		}
	}
	function clear() {
		if (interval) {
			interval.cancel();
		}
	}
	function cancel() {
		if (interval && !interval.isPaused()) {
			clear();
			onEnd();
		}
	}
	function easing(t) {
		var easingFunc = options.easingFunc;
		return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
	}
	return {
		mount,
		destroy: clear,
		scroll,
		cancel,
	};
}
var SCROLL_LISTENER_OPTIONS = {
	passive: false,
	capture: true,
};
function Drag(Splide22, Components2, options) {
	var _EventInterface9 = EventInterface(Splide22),
		on2 = _EventInterface9.on,
		emit = _EventInterface9.emit,
		bind = _EventInterface9.bind,
		unbind = _EventInterface9.unbind;
	var state = Splide22.state;
	var Move2 = Components2.Move,
		Scroll2 = Components2.Scroll,
		Controller2 = Components2.Controller,
		track = Components2.Elements.track,
		reduce = Components2.Media.reduce;
	var _Components2$Directio2 = Components2.Direction,
		resolve = _Components2$Directio2.resolve,
		orient = _Components2$Directio2.orient;
	var getPosition = Move2.getPosition,
		exceededLimit = Move2.exceededLimit;
	var basePosition;
	var baseEvent;
	var prevBaseEvent;
	var isFree;
	var dragging;
	var exceeded = false;
	var clickPrevented;
	var disabled;
	var target;
	function mount() {
		bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
		bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
		bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
		bind(track, "click", onClick, {
			capture: true,
		});
		bind(track, "dragstart", prevent);
		on2([EVENT_MOUNTED, EVENT_UPDATED], init);
	}
	function init() {
		var drag = options.drag;
		disable(!drag);
		isFree = drag === "free";
	}
	function onPointerDown(e) {
		clickPrevented = false;
		if (!disabled) {
			var isTouch = isTouchEvent(e);
			if (isDraggable(e.target) && (isTouch || !e.button)) {
				if (!Controller2.isBusy()) {
					target = isTouch ? track : window;
					dragging = state.is([MOVING, SCROLLING]);
					prevBaseEvent = null;
					bind(
						target,
						POINTER_MOVE_EVENTS,
						onPointerMove,
						SCROLL_LISTENER_OPTIONS,
					);
					bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
					Move2.cancel();
					Scroll2.cancel();
					save(e);
				} else {
					prevent(e, true);
				}
			}
		}
	}
	function onPointerMove(e) {
		if (!state.is(DRAGGING)) {
			state.set(DRAGGING);
			emit(EVENT_DRAG);
		}
		if (e.cancelable) {
			if (dragging) {
				Move2.translate(basePosition + constrain(diffCoord(e)));
				var expired = diffTime(e) > LOG_INTERVAL;
				var hasExceeded = exceeded !== (exceeded = exceededLimit());
				if (expired || hasExceeded) {
					save(e);
				}
				clickPrevented = true;
				emit(EVENT_DRAGGING);
				prevent(e);
			} else if (isSliderDirection(e)) {
				dragging = shouldStart(e);
				prevent(e);
			}
		}
	}
	function onPointerUp(e) {
		if (state.is(DRAGGING)) {
			state.set(IDLE);
			emit(EVENT_DRAGGED);
		}
		if (dragging) {
			move(e);
			prevent(e);
		}
		unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
		unbind(target, POINTER_UP_EVENTS, onPointerUp);
		dragging = false;
	}
	function onClick(e) {
		if (!disabled && clickPrevented) {
			prevent(e, true);
		}
	}
	function save(e) {
		prevBaseEvent = baseEvent;
		baseEvent = e;
		basePosition = getPosition();
	}
	function move(e) {
		var velocity = computeVelocity(e);
		var destination = computeDestination(velocity);
		var rewind = options.rewind && options.rewindByDrag;
		reduce(false);
		if (isFree) {
			Controller2.scroll(destination, 0, options.snap);
		} else if (Splide22.is(FADE)) {
			Controller2.go(
				orient(sign(velocity)) < 0 ? (rewind ? "<" : "-") : rewind ? ">" : "+",
			);
		} else if (Splide22.is(SLIDE) && exceeded && rewind) {
			Controller2.go(exceededLimit(true) ? ">" : "<");
		} else {
			Controller2.go(Controller2.toDest(destination), true);
		}
		reduce(true);
	}
	function shouldStart(e) {
		var thresholds = options.dragMinThreshold;
		var isObj = isObject(thresholds);
		var mouse = (isObj && thresholds.mouse) || 0;
		var touch = (isObj ? thresholds.touch : +thresholds) || 10;
		return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
	}
	function isSliderDirection(e) {
		return abs(diffCoord(e)) > abs(diffCoord(e, true));
	}
	function computeVelocity(e) {
		if (Splide22.is(LOOP) || !exceeded) {
			var time = diffTime(e);
			if (time && time < LOG_INTERVAL) {
				return diffCoord(e) / time;
			}
		}
		return 0;
	}
	function computeDestination(velocity) {
		return (
			getPosition() +
			sign(velocity) *
				min(
					abs(velocity) * (options.flickPower || 600),
					isFree
						? Infinity
						: Components2.Layout.listSize() * (options.flickMaxPages || 1),
				)
		);
	}
	function diffCoord(e, orthogonal) {
		return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
	}
	function diffTime(e) {
		return timeOf(e) - timeOf(getBaseEvent(e));
	}
	function getBaseEvent(e) {
		return (baseEvent === e && prevBaseEvent) || baseEvent;
	}
	function coordOf(e, orthogonal) {
		return (isTouchEvent(e) ? e.changedTouches[0] : e)[
			"page" + resolve(orthogonal ? "Y" : "X")
		];
	}
	function constrain(diff) {
		return diff / (exceeded && Splide22.is(SLIDE) ? FRICTION : 1);
	}
	function isDraggable(target2) {
		var noDrag = options.noDrag;
		return (
			!matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) &&
			(!noDrag || !matches(target2, noDrag))
		);
	}
	function isTouchEvent(e) {
		return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
	}
	function isDragging() {
		return dragging;
	}
	function disable(value) {
		disabled = value;
	}
	return {
		mount,
		disable,
		isDragging,
	};
}
var NORMALIZATION_MAP = {
	Spacebar: " ",
	Right: ARROW_RIGHT,
	Left: ARROW_LEFT,
	Up: ARROW_UP,
	Down: ARROW_DOWN,
};
function normalizeKey(key) {
	key = isString(key) ? key : key.key;
	return NORMALIZATION_MAP[key] || key;
}
var KEYBOARD_EVENT = "keydown";
function Keyboard(Splide22, Components2, options) {
	var _EventInterface10 = EventInterface(Splide22),
		on2 = _EventInterface10.on,
		bind = _EventInterface10.bind,
		unbind = _EventInterface10.unbind;
	var root2 = Splide22.root;
	var resolve = Components2.Direction.resolve;
	var target;
	var disabled;
	function mount() {
		init();
		on2(EVENT_UPDATED, destroy);
		on2(EVENT_UPDATED, init);
		on2(EVENT_MOVE, onMove);
	}
	function init() {
		var keyboard = options.keyboard;
		if (keyboard) {
			target = keyboard === "global" ? window : root2;
			bind(target, KEYBOARD_EVENT, onKeydown);
		}
	}
	function destroy() {
		unbind(target, KEYBOARD_EVENT);
	}
	function disable(value) {
		disabled = value;
	}
	function onMove() {
		var _disabled = disabled;
		disabled = true;
		nextTick(function () {
			disabled = _disabled;
		});
	}
	function onKeydown(e) {
		if (!disabled) {
			var key = normalizeKey(e);
			if (key === resolve(ARROW_LEFT)) {
				Splide22.go("<");
			} else if (key === resolve(ARROW_RIGHT)) {
				Splide22.go(">");
			}
		}
	}
	return {
		mount,
		destroy,
		disable,
	};
}
var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR =
	"[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
function LazyLoad(Splide22, Components2, options) {
	var _EventInterface11 = EventInterface(Splide22),
		on2 = _EventInterface11.on,
		off2 = _EventInterface11.off,
		bind = _EventInterface11.bind,
		emit = _EventInterface11.emit;
	var isSequential = options.lazyLoad === "sequential";
	var events = [EVENT_MOVED, EVENT_SCROLLED];
	var entries = [];
	function mount() {
		if (options.lazyLoad) {
			init();
			on2(EVENT_REFRESH, init);
		}
	}
	function init() {
		empty(entries);
		register();
		if (isSequential) {
			loadNext();
		} else {
			off2(events);
			on2(events, check);
			check();
		}
	}
	function register() {
		Components2.Slides.forEach(function (Slide2) {
			queryAll(Slide2.slide, IMAGE_SELECTOR).forEach(function (img) {
				var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
				var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
				if (src !== img.src || srcset !== img.srcset) {
					var className = options.classes.spinner;
					var parent = img.parentElement;
					var spinner =
						child(parent, "." + className) || create("span", className, parent);
					entries.push([img, Slide2, spinner]);
					img.src || display(img, "none");
				}
			});
		});
	}
	function check() {
		entries = entries.filter(function (data2) {
			var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
			return data2[1].isWithin(Splide22.index, distance) ? load(data2) : true;
		});
		entries.length || off2(events);
	}
	function load(data2) {
		var img = data2[0];
		addClass(data2[1].slide, CLASS_LOADING);
		bind(img, "load error", apply(onLoad, data2));
		setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
		setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
		removeAttribute(img, SRC_DATA_ATTRIBUTE);
		removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
	}
	function onLoad(data2, e) {
		var img = data2[0],
			Slide2 = data2[1];
		removeClass(Slide2.slide, CLASS_LOADING);
		if (e.type !== "error") {
			remove(data2[2]);
			display(img, "");
			emit(EVENT_LAZYLOAD_LOADED, img, Slide2);
			emit(EVENT_RESIZE);
		}
		isSequential && loadNext();
	}
	function loadNext() {
		entries.length && load(entries.shift());
	}
	return {
		mount,
		destroy: apply(empty, entries),
		check,
	};
}
function Pagination(Splide22, Components2, options) {
	var event = EventInterface(Splide22);
	var on2 = event.on,
		emit = event.emit,
		bind = event.bind;
	var Slides2 = Components2.Slides,
		Elements2 = Components2.Elements,
		Controller2 = Components2.Controller;
	var hasFocus = Controller2.hasFocus,
		getIndex = Controller2.getIndex,
		go = Controller2.go;
	var resolve = Components2.Direction.resolve;
	var placeholder = Elements2.pagination;
	var items = [];
	var list;
	var paginationClasses;
	function mount() {
		destroy();
		on2([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
		var enabled = options.pagination;
		placeholder && display(placeholder, enabled ? "" : "none");
		if (enabled) {
			on2([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
			createPagination();
			update();
			emit(
				EVENT_PAGINATION_MOUNTED,
				{
					list,
					items,
				},
				getAt(Splide22.index),
			);
		}
	}
	function destroy() {
		if (list) {
			remove(placeholder ? slice(list.children) : list);
			removeClass(list, paginationClasses);
			empty(items);
			list = null;
		}
		event.destroy();
	}
	function createPagination() {
		var length = Splide22.length;
		var classes = options.classes,
			i18n2 = options.i18n,
			perPage = options.perPage;
		var max2 = hasFocus() ? Controller2.getEnd() + 1 : ceil(length / perPage);
		list =
			placeholder ||
			create("ul", classes.pagination, Elements2.track.parentElement);
		addClass(
			list,
			(paginationClasses = CLASS_PAGINATION + "--" + getDirection()),
		);
		setAttribute(list, ROLE, "tablist");
		setAttribute(list, ARIA_LABEL, i18n2.select);
		setAttribute(
			list,
			ARIA_ORIENTATION,
			getDirection() === TTB ? "vertical" : "",
		);
		for (var i = 0; i < max2; i++) {
			var li = create("li", null, list);
			var button = create(
				"button",
				{
					class: classes.page,
					type: "button",
				},
				li,
			);
			var controls = Slides2.getIn(i).map(function (Slide2) {
				return Slide2.slide.id;
			});
			var text = !hasFocus() && perPage > 1 ? i18n2.pageX : i18n2.slideX;
			bind(button, "click", apply(onClick, i));
			if (options.paginationKeyboard) {
				bind(button, "keydown", apply(onKeydown, i));
			}
			setAttribute(li, ROLE, "presentation");
			setAttribute(button, ROLE, "tab");
			setAttribute(button, ARIA_CONTROLS, controls.join(" "));
			setAttribute(button, ARIA_LABEL, format(text, i + 1));
			setAttribute(button, TAB_INDEX, -1);
			items.push({
				li,
				button,
				page: i,
			});
		}
	}
	function onClick(page) {
		go(">" + page, true);
	}
	function onKeydown(page, e) {
		var length = items.length;
		var key = normalizeKey(e);
		var dir = getDirection();
		var nextPage = -1;
		if (key === resolve(ARROW_RIGHT, false, dir)) {
			nextPage = ++page % length;
		} else if (key === resolve(ARROW_LEFT, false, dir)) {
			nextPage = (--page + length) % length;
		} else if (key === "Home") {
			nextPage = 0;
		} else if (key === "End") {
			nextPage = length - 1;
		}
		var item = items[nextPage];
		if (item) {
			focus(item.button);
			go(">" + nextPage);
			prevent(e, true);
		}
	}
	function getDirection() {
		return options.paginationDirection || options.direction;
	}
	function getAt(index) {
		return items[Controller2.toPage(index)];
	}
	function update() {
		var prev = getAt(getIndex(true));
		var curr = getAt(getIndex());
		if (prev) {
			var button = prev.button;
			removeClass(button, CLASS_ACTIVE);
			removeAttribute(button, ARIA_SELECTED);
			setAttribute(button, TAB_INDEX, -1);
		}
		if (curr) {
			var _button = curr.button;
			addClass(_button, CLASS_ACTIVE);
			setAttribute(_button, ARIA_SELECTED, true);
			setAttribute(_button, TAB_INDEX, "");
		}
		emit(
			EVENT_PAGINATION_UPDATED,
			{
				list,
				items,
			},
			prev,
			curr,
		);
	}
	return {
		items,
		mount,
		destroy,
		getAt,
		update,
	};
}
var TRIGGER_KEYS = [" ", "Enter"];
function Sync(Splide22, Components2, options) {
	var isNavigation = options.isNavigation,
		slideFocus = options.slideFocus;
	var events = [];
	function mount() {
		Splide22.splides.forEach(function (target) {
			if (!target.isParent) {
				sync(Splide22, target.splide);
				sync(target.splide, Splide22);
			}
		});
		if (isNavigation) {
			navigate();
		}
	}
	function destroy() {
		events.forEach(function (event) {
			event.destroy();
		});
		empty(events);
	}
	function remount() {
		destroy();
		mount();
	}
	function sync(splide, target) {
		var event = EventInterface(splide);
		event.on(EVENT_MOVE, function (index, prev, dest) {
			target.go(target.is(LOOP) ? dest : index);
		});
		events.push(event);
	}
	function navigate() {
		var event = EventInterface(Splide22);
		var on2 = event.on;
		on2(EVENT_CLICK, onClick);
		on2(EVENT_SLIDE_KEYDOWN, onKeydown);
		on2([EVENT_MOUNTED, EVENT_UPDATED], update);
		events.push(event);
		event.emit(EVENT_NAVIGATION_MOUNTED, Splide22.splides);
	}
	function update() {
		setAttribute(
			Components2.Elements.list,
			ARIA_ORIENTATION,
			options.direction === TTB ? "vertical" : "",
		);
	}
	function onClick(Slide2) {
		Splide22.go(Slide2.index);
	}
	function onKeydown(Slide2, e) {
		if (includes(TRIGGER_KEYS, normalizeKey(e))) {
			onClick(Slide2);
			prevent(e);
		}
	}
	return {
		setup: apply(
			Components2.Media.set,
			{
				slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus,
			},
			true,
		),
		mount,
		destroy,
		remount,
	};
}
function Wheel(Splide22, Components2, options) {
	var _EventInterface12 = EventInterface(Splide22),
		bind = _EventInterface12.bind;
	var lastTime = 0;
	function mount() {
		if (options.wheel) {
			bind(
				Components2.Elements.track,
				"wheel",
				onWheel,
				SCROLL_LISTENER_OPTIONS,
			);
		}
	}
	function onWheel(e) {
		if (e.cancelable) {
			var deltaY = e.deltaY;
			var backwards = deltaY < 0;
			var timeStamp = timeOf(e);
			var _min = options.wheelMinThreshold || 0;
			var sleep = options.wheelSleep || 0;
			if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
				Splide22.go(backwards ? "<" : ">");
				lastTime = timeStamp;
			}
			shouldPrevent(backwards) && prevent(e);
		}
	}
	function shouldPrevent(backwards) {
		return (
			!options.releaseWheel ||
			Splide22.state.is(MOVING) ||
			Components2.Controller.getAdjacent(backwards) !== -1
		);
	}
	return {
		mount,
	};
}
var SR_REMOVAL_DELAY = 90;
function Live(Splide22, Components2, options) {
	var _EventInterface13 = EventInterface(Splide22),
		on2 = _EventInterface13.on;
	var track = Components2.Elements.track;
	var enabled = options.live && !options.isNavigation;
	var sr = create("span", CLASS_SR);
	var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
	function mount() {
		if (enabled) {
			disable(!Components2.Autoplay.isPaused());
			setAttribute(track, ARIA_ATOMIC, true);
			sr.textContent = "…";
			on2(EVENT_AUTOPLAY_PLAY, apply(disable, true));
			on2(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
			on2([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
		}
	}
	function toggle(active) {
		setAttribute(track, ARIA_BUSY, active);
		if (active) {
			append(track, sr);
			interval.start();
		} else {
			remove(sr);
			interval.cancel();
		}
	}
	function destroy() {
		removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
		remove(sr);
	}
	function disable(disabled) {
		if (enabled) {
			setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
		}
	}
	return {
		mount,
		disable,
		destroy,
	};
}
var ComponentConstructors = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	Media,
	Direction,
	Elements,
	Slides,
	Layout,
	Clones,
	Move,
	Controller,
	Arrows,
	Autoplay,
	Cover,
	Scroll,
	Drag,
	Keyboard,
	LazyLoad,
	Pagination,
	Sync,
	Wheel,
	Live,
});
var I18N = {
	prev: "Previous slide",
	next: "Next slide",
	first: "Go to first slide",
	last: "Go to last slide",
	slideX: "Go to slide %s",
	pageX: "Go to page %s",
	play: "Start autoplay",
	pause: "Pause autoplay",
	carousel: "carousel",
	slide: "slide",
	select: "Select a slide to show",
	slideLabel: "%s of %s",
};
var DEFAULTS = {
	type: "slide",
	role: "region",
	speed: 400,
	perPage: 1,
	cloneStatus: true,
	arrows: true,
	pagination: true,
	paginationKeyboard: true,
	interval: 5e3,
	pauseOnHover: true,
	pauseOnFocus: true,
	resetProgress: true,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	drag: true,
	direction: "ltr",
	trimSpace: true,
	focusableNodes: "a, button, textarea, input, select, iframe",
	live: true,
	classes: CLASSES,
	i18n: I18N,
	reducedMotion: {
		speed: 0,
		rewindSpeed: 0,
		autoplay: "pause",
	},
};
function Fade(Splide22, Components2, options) {
	var Slides2 = Components2.Slides;
	function mount() {
		EventInterface(Splide22).on([EVENT_MOUNTED, EVENT_REFRESH], init);
	}
	function init() {
		Slides2.forEach(function (Slide2) {
			Slide2.style("transform", "translateX(-" + 100 * Slide2.index + "%)");
		});
	}
	function start(index, done) {
		Slides2.style(
			"transition",
			"opacity " + options.speed + "ms " + options.easing,
		);
		nextTick(done);
	}
	return {
		mount,
		start,
		cancel: noop,
	};
}
function Slide(Splide22, Components2, options) {
	var Move2 = Components2.Move,
		Controller2 = Components2.Controller,
		Scroll2 = Components2.Scroll;
	var list = Components2.Elements.list;
	var transition = apply(style, list, "transition");
	var endCallback;
	function mount() {
		EventInterface(Splide22).bind(list, "transitionend", function (e) {
			if (e.target === list && endCallback) {
				cancel();
				endCallback();
			}
		});
	}
	function start(index, done) {
		var destination = Move2.toPosition(index, true);
		var position = Move2.getPosition();
		var speed = getSpeed(index);
		if (abs(destination - position) >= 1 && speed >= 1) {
			if (options.useScroll) {
				Scroll2.scroll(destination, speed, false, done);
			} else {
				transition("transform " + speed + "ms " + options.easing);
				Move2.translate(destination, true);
				endCallback = done;
			}
		} else {
			Move2.jump(index);
			done();
		}
	}
	function cancel() {
		transition("");
		Scroll2.cancel();
	}
	function getSpeed(index) {
		var rewindSpeed = options.rewindSpeed;
		if (Splide22.is(SLIDE) && rewindSpeed) {
			var prev = Controller2.getIndex(true);
			var end = Controller2.getEnd();
			if ((prev === 0 && index >= end) || (prev >= end && index === 0)) {
				return rewindSpeed;
			}
		}
		return options.speed;
	}
	return {
		mount,
		start,
		cancel,
	};
}
var _Splide = /* @__PURE__ */ (function () {
	function _Splide2(target, options) {
		this.event = EventInterface();
		this.Components = {};
		this.state = State(CREATED);
		this.splides = [];
		this._o = {};
		this._E = {};
		var root2 = isString(target) ? query(document, target) : target;
		assert(root2, root2 + " is invalid.");
		this.root = root2;
		options = merge(
			{
				label: getAttribute(root2, ARIA_LABEL) || "",
				labelledby: getAttribute(root2, ARIA_LABELLEDBY) || "",
			},
			DEFAULTS,
			_Splide2.defaults,
			options || {},
		);
		try {
			merge(options, JSON.parse(getAttribute(root2, DATA_ATTRIBUTE)));
		} catch (e) {
			assert(false, "Invalid JSON");
		}
		this._o = Object.create(merge({}, options));
	}
	var _proto = _Splide2.prototype;
	_proto.mount = function mount(Extensions, Transition) {
		var _this = this;
		var state = this.state,
			Components2 = this.Components;
		assert(state.is([CREATED, DESTROYED]), "Already mounted!");
		state.set(CREATED);
		this._C = Components2;
		this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
		this._E = Extensions || this._E;
		var Constructors = assign({}, ComponentConstructors, this._E, {
			Transition: this._T,
		});
		forOwn(Constructors, function (Component2, key) {
			var component = Component2(_this, Components2, _this._o);
			Components2[key] = component;
			component.setup && component.setup();
		});
		forOwn(Components2, function (component) {
			component.mount && component.mount();
		});
		this.emit(EVENT_MOUNTED);
		addClass(this.root, CLASS_INITIALIZED);
		state.set(IDLE);
		this.emit(EVENT_READY);
		return this;
	};
	_proto.sync = function sync(splide) {
		this.splides.push({
			splide,
		});
		splide.splides.push({
			splide: this,
			isParent: true,
		});
		if (this.state.is(IDLE)) {
			this._C.Sync.remount();
			splide.Components.Sync.remount();
		}
		return this;
	};
	_proto.go = function go(control) {
		this._C.Controller.go(control);
		return this;
	};
	_proto.on = function on2(events, callback) {
		this.event.on(events, callback);
		return this;
	};
	_proto.off = function off2(events) {
		this.event.off(events);
		return this;
	};
	_proto.emit = function emit(event) {
		var _this$event;
		(_this$event = this.event).emit.apply(
			_this$event,
			[event].concat(slice(arguments, 1)),
		);
		return this;
	};
	_proto.add = function add(slides, index) {
		this._C.Slides.add(slides, index);
		return this;
	};
	_proto.remove = function remove2(matcher) {
		this._C.Slides.remove(matcher);
		return this;
	};
	_proto.is = function is(type) {
		return this._o.type === type;
	};
	_proto.refresh = function refresh() {
		this.emit(EVENT_REFRESH);
		return this;
	};
	_proto.destroy = function destroy(completely) {
		if (completely === void 0) {
			completely = true;
		}
		var event = this.event,
			state = this.state;
		if (state.is(CREATED)) {
			EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
		} else {
			forOwn(
				this._C,
				function (component) {
					component.destroy && component.destroy(completely);
				},
				true,
			);
			event.emit(EVENT_DESTROY);
			event.destroy();
			completely && empty(this.splides);
			state.set(DESTROYED);
		}
		return this;
	};
	_createClass(_Splide2, [
		{
			key: "options",
			get: function get() {
				return this._o;
			},
			set: function set(options) {
				this._C.Media.set(options, true, true);
			},
		},
		{
			key: "length",
			get: function get() {
				return this._C.Slides.getLength(true);
			},
		},
		{
			key: "index",
			get: function get() {
				return this._C.Controller.getIndex();
			},
		},
	]);
	return _Splide2;
})();
var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var EVENTS = [
	[EVENT_MOUNTED, "onMounted"],
	[EVENT_READY, "onReady"],
	[EVENT_MOVE, "onMove"],
	[EVENT_MOVED, "onMoved"],
	[EVENT_CLICK, "onClick"],
	[EVENT_ACTIVE, "onActive"],
	[EVENT_INACTIVE, "onInactive"],
	[EVENT_VISIBLE, "onVisible"],
	[EVENT_HIDDEN, "onHidden"],
	[EVENT_REFRESH, "onRefresh"],
	[EVENT_UPDATED, "onUpdated"],
	[EVENT_RESIZE, "onResize"],
	[EVENT_RESIZED, "onResized"],
	[EVENT_DRAG, "onDrag"],
	[EVENT_DRAGGING, "onDragging"],
	[EVENT_DRAGGED, "onDragged"],
	[EVENT_SCROLL, "onScroll"],
	[EVENT_SCROLLED, "onScrolled"],
	[EVENT_DESTROY, "onDestroy"],
	[EVENT_ARROWS_MOUNTED, "onArrowsMounted"],
	[EVENT_ARROWS_UPDATED, "onArrowsUpdated"],
	[EVENT_PAGINATION_MOUNTED, "onPaginationMounted"],
	[EVENT_PAGINATION_UPDATED, "onPaginationUpdated"],
	[EVENT_NAVIGATION_MOUNTED, "onNavigationMounted"],
	[EVENT_AUTOPLAY_PLAY, "onAutoplayPlay"],
	[EVENT_AUTOPLAY_PLAYING, "onAutoplayPlaying"],
	[EVENT_AUTOPLAY_PAUSE, "onAutoplayPause"],
	[EVENT_LAZYLOAD_LOADED, "onLazyLoadLoaded"],
];
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
function isObject2(subject) {
	return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
	if (Array.isArray(subject1) && Array.isArray(subject2)) {
		return (
			subject1.length === subject2.length &&
			!subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]))
		);
	}
	if (isObject2(subject1) && isObject2(subject2)) {
		const keys1 = Object.keys(subject1);
		const keys2 = Object.keys(subject2);
		return (
			keys1.length === keys2.length &&
			!keys1.some((key) => {
				return (
					!Object.prototype.hasOwnProperty.call(subject2, key) ||
					!isEqualDeep(subject1[key], subject2[key])
				);
			})
		);
	}
	return subject1 === subject2;
}
function isEqualShallow(array1, array2) {
	return (
		array1.length === array2.length &&
		!array1.some((elm, index) => elm !== array2[index])
	);
}
function forOwn2(object, iteratee) {
	if (object) {
		const keys = Object.keys(object);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			if (key !== "__proto__") {
				if (iteratee(object[key], key) === false) {
					break;
				}
			}
		}
	}
	return object;
}
function merge2(object, source) {
	const merged = object;
	forOwn2(source, (value, key) => {
		if (Array.isArray(value)) {
			merged[key] = value.slice();
		} else if (isObject2(value)) {
			merged[key] = merge2(isObject2(merged[key]) ? merged[key] : {}, value);
		} else {
			merged[key] = value;
		}
	});
	return merged;
}
var SplideTrack = ({ children: children2, className, ...props }) => {
	return /* @__PURE__ */ React.createElement(
		"div",
		{
			className: classNames("splide__track", className),
			...props,
		},
		/* @__PURE__ */ React.createElement(
			"ul",
			{
				className: "splide__list",
			},
			children2,
		),
	);
};
var Splide2 = class extends React.Component {
	constructor() {
		super(...arguments);
		this.splideRef = React.createRef();
		this.slides = [];
	}
	componentDidMount() {
		const { options, extensions, transition } = this.props;
		const { current } = this.splideRef;
		if (current) {
			this.splide = new Splide(current, options);
			this.bind(this.splide);
			this.splide.mount(extensions, transition);
			this.options = merge2({}, options || {});
			this.slides = this.getSlides();
		}
	}
	componentWillUnmount() {
		if (this.splide) {
			this.splide.destroy();
			this.splide = void 0;
		}
		this.options = void 0;
		this.slides.length = 0;
	}
	componentDidUpdate() {
		if (!this.splide) {
			return;
		}
		const { options } = this.props;
		if (options && !isEqualDeep(this.options, options)) {
			this.splide.options = options;
			this.options = merge2({}, options);
		}
		const newSlides = this.getSlides();
		if (!isEqualShallow(this.slides, newSlides)) {
			this.splide.refresh();
			this.slides = newSlides;
		}
	}
	sync(splide) {
		var _a;
		(_a = this.splide) == null ? void 0 : _a.sync(splide);
	}
	go(control) {
		var _a;
		(_a = this.splide) == null ? void 0 : _a.go(control);
	}
	getSlides() {
		var _a;
		if (this.splide) {
			const children2 =
				(_a = this.splide.Components.Elements) == null
					? void 0
					: _a.list.children;
			return (children2 && Array.prototype.slice.call(children2)) || [];
		}
		return [];
	}
	bind(splide) {
		EVENTS.forEach(([event, name]) => {
			const handler = this.props[name];
			if (typeof handler === "function") {
				splide.on(event, (...args) => {
					handler(splide, ...args);
				});
			}
		});
	}
	omit(props, keys) {
		keys.forEach((key) => {
			if (Object.prototype.hasOwnProperty.call(props, key)) {
				delete props[key];
			}
		});
		return props;
	}
	render() {
		const {
			className,
			tag: Root2 = "div",
			hasTrack = true,
			children: children2,
			...props
		} = this.props;
		return /* @__PURE__ */ React.createElement(
			Root2,
			{
				className: classNames("splide", className),
				ref: this.splideRef,
				...this.omit(props, ["options", ...EVENTS.map((event) => event[1])]),
			},
			hasTrack
				? /* @__PURE__ */ React.createElement(SplideTrack, null, children2)
				: children2,
		);
	}
};
var SplideSlide = ({ children: children2, className, ...props }) => {
	return /* @__PURE__ */ React.createElement(
		"li",
		{
			className: classNames("splide__slide", className),
			...props,
		},
		children2,
	);
};
/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
const DoubleQuotesIcon =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%20200%20154'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cpath%20d='M17.756%20140.183C6.203%20127.913%200%20114.15%200%2091.84%200%2052.583%2027.559%2017.397%2067.635%200l10.016%2015.456C40.245%2035.691%2032.931%2061.95%2030.015%2078.504c6.023-3.118%2013.908-4.206%2021.637-3.488C71.886%2076.889%2087.836%2093.5%2087.836%20114.15c0%2021.536-17.722%2039.257-39.258%2039.257-12.035%200-23.543-5.496-30.822-13.224zm112.164%200c-11.553-12.27-17.756-26.033-17.756-48.343%200-39.257%2027.559-74.443%2067.635-91.84l10.017%2015.456c-37.407%2020.235-44.72%2046.493-47.637%2063.048%206.024-3.118%2013.909-4.206%2021.637-3.488C184.05%2076.889%20200%2093.5%20200%20114.15c0%2021.536-17.721%2039.257-39.257%2039.257-12.036%200-23.544-5.496-30.823-13.224z'%20fill='%23d6d6d6'%20fill-rule='nonzero'/%3e%3c/svg%3e";
const colors = {
	primary: "#11c0ff",
};
const ArrowLeft =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%2048%2048'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cpath%20d='M28.05%2036L16%2023.95%2028.05%2011.9l2.15%202.15-9.9%209.9%209.9%209.9L28.05%2036z'%20fill='white'%20fill-rule='nonzero'/%3e%3c/svg%3e";
const ArrowRight =
	"data:image/svg+xml,%3csvg%20viewBox='0%200%2048%2048'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cpath%20d='M18.75%2036l-2.15-2.15%209.9-9.9-9.9-9.9%202.15-2.15L30.8%2023.95%2018.75%2036z'%20fill='white'%20fill-rule='nonzero'/%3e%3c/svg%3e";
const DavidPhoto = "/assets/david-BzHh88Wp.webp";
const NewspectiveLogo =
	"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cpath%20fill='%23060606'%20d='M95%20201H1V1h200v200H95m.612-118.297c11.6-2.788%2027.742%203.431%2034.468%2013.198%202.518%203.658%202.58%207.258-.455%2010.444-2.27%202.382-4.89%204.51-7.614%206.368-12.16%208.294-24.414%2016.45-36.986%2024.892%206.51%204.359%2012.653%208.318%2018.611%2012.54%202.35%201.665%204.033%201.875%206.533.1%207.727-5.49%2015.711-10.616%2023.539-15.966%208.097-5.534%2016.582-10.62%2024.081-16.88%2011.122-9.283%2011.061-20.764.27-30.316-12.63-11.179-27.425-16.102-44.281-13.295-5.458.909-10.76%202.747-16.134%204.16l-.28-.527%2021.992-14.919c-6.964-4.64-13.577-9.05-20.34-13.556L25.799%2098.142l21.955%2014.646c11.048-7.415%2022.014-14.934%2033.16-22.176%204.428-2.876%209.254-5.138%2014.699-7.909z'/%3e%3cpath%20fill='%23EDE3D0'%20d='M95.212%2082.817c-5.045%202.657-9.871%204.919-14.298%207.795-11.147%207.242-22.113%2014.761-33.161%2022.176L25.798%2098.142l73.219-49.196%2020.339%2013.556-21.992%2014.92.28.526c5.374-1.413%2010.676-3.251%2016.134-4.16%2016.856-2.807%2031.652%202.116%2044.28%2013.295%2010.792%209.552%2010.853%2021.033-.269%2030.316-7.5%206.26-15.984%2011.346-24.081%2016.88-7.828%205.35-15.812%2010.476-23.539%2015.965-2.5%201.776-4.183%201.566-6.533-.1-5.958-4.221-12.102-8.18-18.61-12.54%2012.571-8.442%2024.825-16.597%2036.985-24.89%202.724-1.86%205.344-3.987%207.614-6.37%203.036-3.185%202.973-6.785.455-10.443-6.726-9.767-22.869-15.986-34.868-13.084z'/%3e%3c/svg%3e";
const PaulaPhoto = "/assets/paula-BMpoXtCt.webp";
const QuantedLogo = "/assets/quanted-logo-EwNJS1q2.png";
const SmartCube360Logo = "/assets/smart-cube-360-BTWeojZV.svg";
const ThomasPhoto = "/assets/thomas-CNRGML95.png";
const testimonials = [
	{
		testimonialKey: "christianIsAVery",
		person: "David Forino",
		photo: DavidPhoto,
		company: "Quanted",
		companyLogo: QuantedLogo,
		companyHeight: 70,
		titleKey: "ctoAndCoFounder",
	},
	{
		testimonialKey: "christianIsAlwaysReliable",
		person: "Thomas Kirner",
		photo: ThomasPhoto,
		company: "smart cube 360 GmbH",
		companyLogo: SmartCube360Logo,
		companyHeight: 70,
		titleKey: "ceoAndCoFounder",
	},
	{
		testimonialKey: "hePerfectlyEmbodies",
		person: "Paula Montesa Rausell",
		photo: PaulaPhoto,
		company: "Newspective",
		companyLogo: NewspectiveLogo,
		companyHeight: 80,
		titleKey: "headOfStrategy",
	},
];
function Testimonials() {
	const { t } = useTranslation();
	const [autoplay, setAutoplay] = useState(true);
	const splideRef = useRef(null);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const getIndex = useCallback(
		(direction) => {
			if (direction === "prev" && currentSlideIndex <= 0) {
				return testimonials.length - 1;
			} else if (
				direction === "next" &&
				currentSlideIndex >= testimonials.length - 1
			) {
				return 0;
			} else if (direction === "prev") {
				return currentSlideIndex - 1;
			} else {
				return currentSlideIndex + 1;
			}
		},
		[currentSlideIndex],
	);
	const goToPage = useCallback(
		(page) => {
			if (page === "prev") {
				splideRef.current.go(getIndex("prev"));
			} else if (page === "next") {
				splideRef.current.go(getIndex("next"));
			} else {
				splideRef.current.go(page);
			}
		},
		[getIndex],
	);
	useEffect(() => {
		const interval = setInterval(() => {
			if (autoplay) {
				goToPage("next");
			}
		}, 5e3);
		return () => {
			clearInterval(interval);
		};
	}, [autoplay, goToPage]);
	return /* @__PURE__ */ jsxs(Section, {
		titleKey: "testimonials",
		className: "relative mx-auto max-w-[900px]",
		children: [
			/* @__PURE__ */ jsx(Splide2, {
				ref: splideRef,
				hasTrack: false,
				"aria-label": t("testimonials"),
				className: "md:mask-swiper mx-auto max-w-5xl",
				onMove: (_, newIndex) => {
					setCurrentSlideIndex(newIndex);
				},
				options: {
					autoplay: false,
					perPage: 1,
					perMove: -1,
					padding: "10vw",
					arrows: false,
					pagination: false,
				},
				children: /* @__PURE__ */ jsx(SplideTrack, {
					className: "mask-swiper-narrow",
					children: testimonials.map((testimonial) => {
						return /* @__PURE__ */ jsx(
							SplideSlide,
							{
								children: /* @__PURE__ */ jsxs("div", {
									className:
										"shadow-sm-turquoise border-secondary/10 from-neutral to-neutral-dark mx-4 my-6 flex h-full flex-1 cursor-grab flex-col rounded-xl border-2 border-solid bg-linear-to-br p-5 select-none",
									children: [
										/* @__PURE__ */ jsx("img", {
											loading: "lazy",
											width: "150",
											height: testimonial.companyHeight,
											style: {
												width: 150,
												height: testimonial.companyHeight,
											},
											className: "z-10 mx-auto mt-2 object-contain",
											alt: getAltTextFromFileName(testimonial.companyLogo),
											src: testimonial.companyLogo,
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex flex-1 flex-col justify-center",
											children: [
												/* @__PURE__ */ jsx("img", {
													loading: "lazy",
													width: "20",
													height: "20",
													className: "mr-auto mb-2 ml-2",
													alt: "double quotes",
													src: DoubleQuotesIcon,
												}),
												/* @__PURE__ */ jsx("div", {
													className: "text-base",
													children: t(testimonial.testimonialKey),
												}),
											],
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mx-auto my-2 flex justify-end text-left",
											children: [
												/* @__PURE__ */ jsx("img", {
													loading: "lazy",
													width: "80",
													height: "80",
													className: "my-auto",
													alt: getAltTextFromFileName(testimonial.photo),
													src: testimonial.photo,
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "my-auto flex flex-col justify-end",
													children: [
														/* @__PURE__ */ jsx("div", {
															className: "text-md font-bold",
															children: testimonial.person,
														}),
														/* @__PURE__ */ jsx("div", {
															className: "text-base",
															children: t(testimonial.titleKey),
														}),
														/* @__PURE__ */ jsx("div", {
															className: "text-sm",
															children: t(testimonial.company),
														}),
													],
												}),
											],
										}),
									],
								}),
							},
							testimonial.testimonialKey,
						);
					}),
				}),
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute top-0 flex h-full w-full flex-col",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mx-auto flex h-full w-full max-w-5xl justify-between",
						children: [
							/* @__PURE__ */ jsx(ChangeButton, {
								orientation: "left",
								onClick: () => {
									setAutoplay(false);
									goToPage("prev");
								},
							}),
							/* @__PURE__ */ jsx(ChangeButton, {
								orientation: "right",
								onClick: () => {
									setAutoplay(false);
									goToPage("next");
								},
							}),
						],
					}),
					/* @__PURE__ */ jsx("div", {
						children: testimonials.map((testimonial, index) => {
							return /* @__PURE__ */ jsx(
								"button",
								{
									"aria-label": `${t("seePage")} ${index + 1}`,
									className: "h-12 w-12 cursor-pointer",
									onClick: () => {
										setAutoplay(false);
										goToPage(index);
									},
									children: /* @__PURE__ */ jsx("span", {
										style: {
											boxShadow:
												currentSlideIndex === index
													? `${colors.primary} 0px 0px 12px 6px`
													: "unset",
										},
										className: "bg-secondary inline-block h-3 w-3 rounded-full",
									}),
								},
								testimonial.testimonialKey,
							);
						}),
					}),
				],
			}),
			/* @__PURE__ */ jsx("div", {}),
		],
	});
}
const ChangeButton = ({ onClick, orientation }) => {
	const isLeft = orientation === "left";
	return /* @__PURE__ */ jsx("button", {
		className: "h-full w-full max-w-[200px] cursor-pointer",
		onClick,
		children: /* @__PURE__ */ jsx("span", {
			className: `bg-grey/80 flex h-12 w-12 cursor-pointer rounded-full ${isLeft ? "mr-auto ml-4" : "mr-4 ml-auto"}`,
			children: /* @__PURE__ */ jsx("img", {
				alt: "previous testimonial",
				height: 48,
				width: 48,
				className: "h-full w-full",
				src: isLeft ? ArrowLeft : ArrowRight,
			}),
		}),
	});
};
const _index = withComponentProps(function Index() {
	return /* @__PURE__ */ jsxs("main", {
		className: "relative overflow-x-hidden text-base font-normal",
		children: [
			/* @__PURE__ */ jsx(LoadingBar, {}),
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("div", {
				className: "flex w-full flex-col",
				children: /* @__PURE__ */ jsxs("div", {
					className: "",
					children: [
						/* @__PURE__ */ jsx(ServiceOffer, {}),
						/* @__PURE__ */ jsx(Facts, {}),
						/* @__PURE__ */ jsx(Skills, {}),
						/* @__PURE__ */ jsx(CoreValues, {}),
						/* @__PURE__ */ jsx(Testimonials, {}),
						/* @__PURE__ */ jsx(ExperienceAndEducation, {}),
						/* @__PURE__ */ jsx(Contributions, {}),
						/* @__PURE__ */ jsx(CoursesAndConferences, {}),
						/* @__PURE__ */ jsx(Languages, {}),
						/* @__PURE__ */ jsx(AboutMe, {}),
						/* @__PURE__ */ jsx(Contact, {}),
						/* @__PURE__ */ jsx(Footer, {}),
					],
				}),
			}),
			/* @__PURE__ */ jsx(Outlet, {}),
			/* @__PURE__ */ jsx(MessageFloatingButton, {}),
		],
	});
});
const LoadingBar = () => {
	const navigation = useNavigation();
	const isLoading = navigation.state != "idle";
	if (!isLoading) {
		return null;
	}
	return /* @__PURE__ */ jsx("div", {
		className:
			"bg-grey fixed top-0 right-0 left-0 z-50 h-1 w-screen overflow-hidden",
		children: /* @__PURE__ */ jsx(motion.div, {
			className: "bg-primary h-full",
			initial: {
				x: "-100%",
			},
			animate: {
				x: "100%",
			},
			transition: {
				repeat: Infinity,
				duration: 1.5,
				ease: "easeInOut",
			},
		}),
	});
};
const route1 = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			LoadingBar,
			default: _index,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
const Lottie = ({ ...props }) => {
	const isHydrated = useHydrated();
	const [Lottie2, setLottie] = useState(null);
	useEffect(() => {
		if (isHydrated) {
			void import("lottie-react").then((module) => {
				setLottie(() => {
					return module.default;
				});
			});
		}
	}, [isHydrated]);
	if (!isHydrated || !Lottie2) {
		return null;
	}
	return /* @__PURE__ */ jsx(Lottie2, { ...props });
};
const v$1 = "5.1.1";
const fr$1 = 25;
const ip$1 = 0;
const op$1 = 42;
const w$1 = 150;
const h$1 = 150;
const nm$1 = "Comp 1";
const ddd$1 = 0;
const assets$1 = [];
const layers$1 = [
	{
		ddd: 0,
		ind: 1,
		ty: 4,
		nm: "ring 3",
		sr: 1,
		ks: {
			o: { a: 0, k: 100, ix: 11 },
			r: { a: 0, k: 0, ix: 10 },
			p: { a: 0, k: [75, 75, 0], ix: 2 },
			a: { a: 0, k: [0, 0, 0], ix: 1 },
			s: { a: 0, k: [100, 100, 100], ix: 6 },
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: { a: 0, k: [100, 100], ix: 2 },
						p: { a: 0, k: [0, 0], ix: 3 },
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse",
						hd: false,
					},
					{
						ty: "st",
						c: { a: 0, k: [0, 1, 0.639, 1], ix: 3 },
						o: { a: 0, k: 100, ix: 4 },
						w: { a: 0, k: 10, ix: 5 },
						lc: 2,
						lj: 2,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false,
					},
					{
						ty: "tr",
						p: { a: 0, k: [0, 0], ix: 2 },
						a: { a: 0, k: [0, 0], ix: 1 },
						s: { a: 0, k: [100, 100], ix: 3 },
						r: { a: 0, k: 0, ix: 6 },
						o: { a: 0, k: 100, ix: 7 },
						sk: { a: 0, k: 0, ix: 4 },
						sa: { a: 0, k: 0, ix: 5 },
						nm: "Transform",
					},
				],
				nm: "Oval 2",
				np: 2,
				cix: 2,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false,
			},
			{
				ty: "tm",
				s: { a: 0, k: 0, ix: 1 },
				e: {
					a: 1,
					k: [
						{
							i: { x: [0], y: [1] },
							o: { x: [0.438], y: [0] },
							n: ["0_1_0p438_0"],
							t: 13,
							s: [0],
							e: [83],
						},
						{ t: 32 },
					],
					ix: 2,
				},
				o: {
					a: 1,
					k: [
						{
							i: { x: [0], y: [1] },
							o: { x: [0.438], y: [0] },
							n: ["0_1_0p438_0"],
							t: 13,
							s: [-84],
							e: [84],
						},
						{ t: 32 },
					],
					ix: 3,
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim",
				hd: false,
			},
		],
		ip: 0,
		op: 125,
		st: 0,
		bm: 0,
	},
	{
		ddd: 0,
		ind: 2,
		ty: 4,
		nm: "ring 2",
		sr: 1,
		ks: {
			o: { a: 0, k: 100, ix: 11 },
			r: { a: 0, k: 0, ix: 10 },
			p: { a: 0, k: [75, 75, 0], ix: 2 },
			a: { a: 0, k: [0, 0, 0], ix: 1 },
			s: { a: 0, k: [100, 100, 100], ix: 6 },
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: { a: 0, k: [100, 100], ix: 2 },
						p: { a: 0, k: [0, 0], ix: 3 },
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse",
						hd: false,
					},
					{
						ty: "st",
						c: { a: 0, k: [0, 1, 0.639, 1], ix: 3 },
						o: { a: 0, k: 100, ix: 4 },
						w: { a: 0, k: 9, ix: 5 },
						lc: 2,
						lj: 2,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false,
					},
					{
						ty: "tr",
						p: { a: 0, k: [0, 0], ix: 2 },
						a: { a: 0, k: [0, 0], ix: 1 },
						s: { a: 0, k: [100, 100], ix: 3 },
						r: { a: 0, k: 0, ix: 6 },
						o: { a: 0, k: 100, ix: 7 },
						sk: { a: 0, k: 0, ix: 4 },
						sa: { a: 0, k: 0, ix: 5 },
						nm: "Transform",
					},
				],
				nm: "Oval 2",
				np: 2,
				cix: 2,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false,
			},
			{
				ty: "tm",
				s: { a: 0, k: 0, ix: 1 },
				e: {
					a: 1,
					k: [
						{
							i: { x: [0.396], y: [1] },
							o: { x: [0.576], y: [0] },
							n: ["0p396_1_0p576_0"],
							t: 8,
							s: [0],
							e: [83],
						},
						{ t: 25 },
					],
					ix: 2,
				},
				o: {
					a: 1,
					k: [
						{
							i: { x: [0.396], y: [1] },
							o: { x: [0.576], y: [0] },
							n: ["0p396_1_0p576_0"],
							t: 8,
							s: [-84],
							e: [84],
						},
						{ t: 25 },
					],
					ix: 3,
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim",
				hd: false,
			},
		],
		ip: 0,
		op: 125,
		st: 0,
		bm: 0,
	},
	{
		ddd: 0,
		ind: 3,
		ty: 4,
		nm: "ring",
		sr: 1,
		ks: {
			o: { a: 0, k: 100, ix: 11 },
			r: { a: 0, k: 0, ix: 10 },
			p: { a: 0, k: [75, 75, 0], ix: 2 },
			a: { a: 0, k: [0, 0, 0], ix: 1 },
			s: { a: 0, k: [100, 100, 100], ix: 6 },
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: { a: 0, k: [100, 100], ix: 2 },
						p: { a: 0, k: [0, 0], ix: 3 },
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse",
						hd: false,
					},
					{
						ty: "st",
						c: { a: 0, k: [0, 1, 0.639, 1], ix: 3 },
						o: { a: 0, k: 100, ix: 4 },
						w: { a: 0, k: 9, ix: 5 },
						lc: 2,
						lj: 2,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false,
					},
					{
						ty: "tr",
						p: { a: 0, k: [0, 0], ix: 2 },
						a: { a: 0, k: [0, 0], ix: 1 },
						s: { a: 0, k: [100, 100], ix: 3 },
						r: { a: 0, k: 0, ix: 6 },
						o: { a: 0, k: 100, ix: 7 },
						sk: { a: 0, k: 0, ix: 4 },
						sa: { a: 0, k: 0, ix: 5 },
						nm: "Transform",
					},
				],
				nm: "Oval 2",
				np: 2,
				cix: 2,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false,
			},
			{
				ty: "tm",
				s: { a: 0, k: 0, ix: 1 },
				e: {
					a: 1,
					k: [
						{
							i: { x: [0.396], y: [1] },
							o: { x: [0.576], y: [0] },
							n: ["0p396_1_0p576_0"],
							t: 0,
							s: [0],
							e: [83],
						},
						{ t: 20 },
					],
					ix: 2,
				},
				o: {
					a: 1,
					k: [
						{
							i: { x: [0.396], y: [1] },
							o: { x: [0.576], y: [0] },
							n: ["0p396_1_0p576_0"],
							t: 0,
							s: [-84],
							e: [84],
						},
						{ t: 20 },
					],
					ix: 3,
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim",
				hd: false,
			},
		],
		ip: 0,
		op: 125,
		st: 0,
		bm: 0,
	},
	{
		ddd: 0,
		ind: 4,
		ty: 4,
		nm: "check 3",
		sr: 1,
		ks: {
			o: { a: 0, k: 100, ix: 11 },
			r: { a: 0, k: 0, ix: 10 },
			p: { a: 0, k: [49.5, 27.86, 0], ix: 2 },
			a: { a: 0, k: [0, 0, 0], ix: 1 },
			s: { a: 0, k: [100, 100, 100], ix: 6 },
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[0, 0],
									[0, 0],
									[0, 0],
								],
								o: [
									[0, 0],
									[0, 0],
									[0, 0],
								],
								v: [
									[0, 41.96],
									[22.41, 64.35],
									[83.63, 0],
								],
								c: false,
							},
							ix: 2,
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false,
					},
					{
						ty: "st",
						c: { a: 0, k: [0, 1, 0.639, 1], ix: 3 },
						o: { a: 0, k: 100, ix: 4 },
						w: { a: 0, k: 10, ix: 5 },
						lc: 2,
						lj: 2,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false,
					},
					{
						ty: "tr",
						p: { a: 0, k: [0, 0], ix: 2 },
						a: { a: 0, k: [0, 0], ix: 1 },
						s: { a: 0, k: [100, 100], ix: 3 },
						r: { a: 0, k: 0, ix: 6 },
						o: { a: 0, k: 100, ix: 7 },
						sk: { a: 0, k: 0, ix: 4 },
						sa: { a: 0, k: 0, ix: 5 },
						nm: "Transform",
					},
				],
				nm: "Group 1",
				np: 2,
				cix: 2,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false,
			},
			{
				ty: "tm",
				s: { a: 0, k: 0, ix: 1 },
				e: {
					a: 1,
					k: [
						{
							i: { x: [0], y: [1] },
							o: { x: [0.257], y: [0] },
							n: ["0_1_0p257_0"],
							t: 20,
							s: [0],
							e: [100],
						},
						{ t: 37 },
					],
					ix: 2,
				},
				o: { a: 0, k: 0, ix: 3 },
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim",
				hd: false,
			},
		],
		ip: 0,
		op: 125,
		st: 0,
		bm: 0,
	},
	{
		ddd: 0,
		ind: 5,
		ty: 4,
		nm: "check 2",
		sr: 1,
		ks: {
			o: { a: 0, k: 100, ix: 11 },
			r: { a: 0, k: 0, ix: 10 },
			p: { a: 0, k: [49.5, 27.86, 0], ix: 2 },
			a: { a: 0, k: [0, 0, 0], ix: 1 },
			s: { a: 0, k: [100, 100, 100], ix: 6 },
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[0, 0],
									[0, 0],
									[0, 0],
								],
								o: [
									[0, 0],
									[0, 0],
									[0, 0],
								],
								v: [
									[0, 41.96],
									[22.41, 64.35],
									[83.63, 0],
								],
								c: false,
							},
							ix: 2,
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false,
					},
					{
						ty: "st",
						c: { a: 0, k: [0, 1, 0.639, 1], ix: 3 },
						o: { a: 0, k: 100, ix: 4 },
						w: { a: 0, k: 10, ix: 5 },
						lc: 2,
						lj: 2,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false,
					},
					{
						ty: "tr",
						p: { a: 0, k: [0, 0], ix: 2 },
						a: { a: 0, k: [0, 0], ix: 1 },
						s: { a: 0, k: [100, 100], ix: 3 },
						r: { a: 0, k: 0, ix: 6 },
						o: { a: 0, k: 100, ix: 7 },
						sk: { a: 0, k: 0, ix: 4 },
						sa: { a: 0, k: 0, ix: 5 },
						nm: "Transform",
					},
				],
				nm: "Group 1",
				np: 2,
				cix: 2,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false,
			},
			{
				ty: "tm",
				s: { a: 0, k: 0, ix: 1 },
				e: {
					a: 1,
					k: [
						{
							i: { x: [0], y: [1] },
							o: { x: [0.257], y: [0] },
							n: ["0_1_0p257_0"],
							t: 16,
							s: [0],
							e: [100],
						},
						{ t: 34 },
					],
					ix: 2,
				},
				o: { a: 0, k: 0, ix: 3 },
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim",
				hd: false,
			},
		],
		ip: 0,
		op: 125,
		st: 0,
		bm: 0,
	},
	{
		ddd: 0,
		ind: 6,
		ty: 4,
		nm: "check",
		sr: 1,
		ks: {
			o: { a: 0, k: 100, ix: 11 },
			r: { a: 0, k: 0, ix: 10 },
			p: { a: 0, k: [49.5, 27.86, 0], ix: 2 },
			a: { a: 0, k: [0, 0, 0], ix: 1 },
			s: { a: 0, k: [100, 100, 100], ix: 6 },
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[0, 0],
									[0, 0],
									[0, 0],
								],
								o: [
									[0, 0],
									[0, 0],
									[0, 0],
								],
								v: [
									[0, 41.96],
									[22.41, 64.35],
									[83.63, 0],
								],
								c: false,
							},
							ix: 2,
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false,
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [0.827881936466, 0.874894684436, 0.901531862745, 1],
							ix: 3,
						},
						o: { a: 0, k: 100, ix: 4 },
						w: { a: 0, k: 9, ix: 5 },
						lc: 2,
						lj: 2,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false,
					},
					{
						ty: "tr",
						p: { a: 0, k: [0, 0], ix: 2 },
						a: { a: 0, k: [0, 0], ix: 1 },
						s: { a: 0, k: [100, 100], ix: 3 },
						r: { a: 0, k: 0, ix: 6 },
						o: { a: 0, k: 100, ix: 7 },
						sk: { a: 0, k: 0, ix: 4 },
						sa: { a: 0, k: 0, ix: 5 },
						nm: "Transform",
					},
				],
				nm: "Group 1",
				np: 2,
				cix: 2,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false,
			},
			{
				ty: "tm",
				s: { a: 0, k: 0, ix: 1 },
				e: {
					a: 1,
					k: [
						{
							i: { x: [0], y: [1] },
							o: { x: [0.257], y: [0] },
							n: ["0_1_0p257_0"],
							t: 12,
							s: [0],
							e: [100],
						},
						{ t: 29 },
					],
					ix: 2,
				},
				o: { a: 0, k: 0, ix: 3 },
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim",
				hd: false,
			},
		],
		ip: 0,
		op: 125,
		st: 0,
		bm: 0,
	},
	{
		ddd: 0,
		ind: 7,
		ty: 4,
		nm: "boom",
		sr: 1,
		ks: {
			o: { a: 0, k: 10, ix: 11 },
			r: { a: 0, k: 0, ix: 10 },
			p: { a: 0, k: [75, 75, 0], ix: 2 },
			a: { a: 0, k: [0, 0, 0], ix: 1 },
			s: {
				a: 1,
				k: [
					{
						i: { x: [0, 0, 0.18], y: [1, 1, 1] },
						o: { x: [0, 0, 0.33], y: [0, 0, 0] },
						n: ["0_1_0_0", "0_1_0_0", "0p18_1_0p33_0"],
						t: 10,
						s: [0, 0, 100],
						e: [100, 100, 100],
					},
					{ t: 42 },
				],
				ix: 6,
			},
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: { a: 0, k: [150, 150], ix: 2 },
						p: { a: 0, k: [0, 0], ix: 3 },
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse",
						hd: false,
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [0.625844080308, 0.946859681373, 0.912195961148, 1],
							ix: 4,
						},
						o: { a: 0, k: 100, ix: 5 },
						r: 1,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false,
					},
					{
						ty: "tr",
						p: { a: 0, k: [0, 0], ix: 2 },
						a: { a: 0, k: [0, 0], ix: 1 },
						s: { a: 0, k: [100, 100], ix: 3 },
						r: { a: 0, k: 0, ix: 6 },
						o: { a: 0, k: 100, ix: 7 },
						sk: { a: 0, k: 0, ix: 4 },
						sa: { a: 0, k: 0, ix: 5 },
						nm: "Transform",
					},
				],
				nm: "Oval 2 Copy",
				np: 2,
				cix: 2,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false,
			},
		],
		ip: 0,
		op: 125,
		st: 0,
		bm: 0,
	},
];
const markers$1 = [];
const AnimatedCheck = {
	v: v$1,
	fr: fr$1,
	ip: ip$1,
	op: op$1,
	w: w$1,
	h: h$1,
	nm: nm$1,
	ddd: ddd$1,
	assets: assets$1,
	layers: layers$1,
	markers: markers$1,
};
const v = "5.7.11";
const fr = 30;
const ip = 0;
const op = 60;
const w = 512;
const h = 512;
const nm = "Bouncy Fail";
const ddd = 0;
const assets = [];
const layers = /* @__PURE__ */ JSON.parse(
	`[{"ddd":0,"ind":1,"ty":4,"nm":"X line 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[256,256,0],"ix":2,"l":2},"a":{"a":0,"k":[41,-3,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[112,-74],[-30,68]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":40,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.38823529411764707,0.2784313725490196,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":26,"s":[100]},{"t":40,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":26,"op":60,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"X line 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,256,0],"ix":2,"l":2},"a":{"a":0,"k":[41,-3,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[112,-74],[-30,68]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":40,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.38823529411764707,0.2784313725490196,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":26,"s":[0]},{"t":40,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":26,"op":60,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Circle 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\nvar opacityInertialBounce, opacityBounceBack, n, n, t, t, v, amp, freq, decay, v, amp, freq, decay, e, g, nMax, e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\\nopacityInertialBounce = effect('Bounce & Drop - ukramedia.com')(44);\\nopacityBounceBack = effect('Bounce & Drop - ukramedia.com')(45);\\ntry {\\n    if (opacityInertialBounce == 1) {\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time) {\\n                n--;\\n            }\\n        }\\n        if (n == 0) {\\n            $bm_rt = t = 0;\\n        } else {\\n            $bm_rt = t = $bm_sub(time, key(n).time);\\n        }\\n        if (effect('Bounce & Drop - ukramedia.com')(58) == 1) {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(59);\\n                freq = effect('Bounce & Drop - ukramedia.com')(60);\\n                decay = effect('Bounce & Drop - ukramedia.com')(61);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(47);\\n                freq = effect('Bounce & Drop - ukramedia.com')(48);\\n                decay = effect('Bounce & Drop - ukramedia.com')(49);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        }\\n    } else if (opacityBounceBack == 1) {\\n        if (effect('Bounce & Drop - ukramedia.com')(64) == 1) {\\n            e = effect('Bounce & Drop - ukramedia.com')(65);\\n            g = effect('Bounce & Drop - ukramedia.com')(66);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(67);\\n        } else {\\n            e = effect('Bounce & Drop - ukramedia.com')(52);\\n            g = effect('Bounce & Drop - ukramedia.com')(53);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(54);\\n        }\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time)\\n                n--;\\n        }\\n        if (n > 0) {\\n            t = $bm_sub(time, key(n).time);\\n            v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\\n            vl = length(v);\\n            if ($bm_isInstanceOfArray(value)) {\\n                vu = vl > 0 ? normalize(v) : [\\n                    0,\\n                    0,\\n                    0\\n                ];\\n            } else {\\n                vu = v < 0 ? -1 : 1;\\n            }\\n            tCur = 0;\\n            segDur = $bm_div($bm_mul(2, vl), g);\\n            tNext = segDur;\\n            nb = 1;\\n            while (tNext < t && nb <= nMax) {\\n                vl *= e;\\n                segDur *= e;\\n                tCur = tNext;\\n                tNext = $bm_sum(tNext, segDur);\\n                nb++;\\n            }\\n            if (nb <= nMax) {\\n                delta = $bm_sub(t, tCur);\\n                $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else\\n            $bm_rt = value;\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (err) {\\n    $bm_rt = value;\\n}"},"r":{"a":0,"k":0,"ix":10,"x":"var $bm_rt;\\nvar rotationInertialBounce, rotationBounceBack, n, n, t, t, v, amp, freq, decay, v, amp, freq, decay, e, g, nMax, e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\\nrotationInertialBounce = effect('Bounce & Drop - ukramedia.com')(30);\\nrotationBounceBack = effect('Bounce & Drop - ukramedia.com')(31);\\ntry {\\n    if (rotationInertialBounce == 1) {\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time) {\\n                n--;\\n            }\\n        }\\n        if (n == 0) {\\n            $bm_rt = t = 0;\\n        } else {\\n            $bm_rt = t = $bm_sub(time, key(n).time);\\n        }\\n        if (effect('Bounce & Drop - ukramedia.com')(58) == 1) {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(59);\\n                freq = effect('Bounce & Drop - ukramedia.com')(60);\\n                decay = effect('Bounce & Drop - ukramedia.com')(61);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(33);\\n                freq = effect('Bounce & Drop - ukramedia.com')(34);\\n                decay = effect('Bounce & Drop - ukramedia.com')(35);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        }\\n    } else if (rotationBounceBack == 1) {\\n        if (effect('Bounce & Drop - ukramedia.com')(64) == 1) {\\n            e = effect('Bounce & Drop - ukramedia.com')(65);\\n            g = effect('Bounce & Drop - ukramedia.com')(66);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(67);\\n        } else {\\n            e = effect('Bounce & Drop - ukramedia.com')(38);\\n            g = effect('Bounce & Drop - ukramedia.com')(39);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(40);\\n        }\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time)\\n                n--;\\n        }\\n        if (n > 0) {\\n            t = $bm_sub(time, key(n).time);\\n            v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\\n            vl = length(v);\\n            if ($bm_isInstanceOfArray(value)) {\\n                vu = vl > 0 ? normalize(v) : [\\n                    0,\\n                    0,\\n                    0\\n                ];\\n            } else {\\n                vu = v < 0 ? -1 : 1;\\n            }\\n            tCur = 0;\\n            segDur = $bm_div($bm_mul(2, vl), g);\\n            tNext = segDur;\\n            nb = 1;\\n            while (tNext < t && nb <= nMax) {\\n                vl *= e;\\n                segDur *= e;\\n                tCur = tNext;\\n                tNext = $bm_sum(tNext, segDur);\\n                nb++;\\n            }\\n            if (nb <= nMax) {\\n                delta = $bm_sub(t, tCur);\\n                $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else\\n            $bm_rt = value;\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (err) {\\n    $bm_rt = value;\\n}"},"p":{"a":0,"k":[256,256,0],"ix":2,"l":2,"x":"var $bm_rt;\\nvar positionInertialBounce, positionBounceBack, n, n, t, t, v, amp, freq, decay, v, amp, freq, decay, e, g, nMax, e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\\npositionInertialBounce = effect('Bounce & Drop - ukramedia.com')(2);\\npositionBounceBack = effect('Bounce & Drop - ukramedia.com')(3);\\ntry {\\n    if (positionInertialBounce == 1) {\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time) {\\n                n--;\\n            }\\n        }\\n        if (n == 0) {\\n            $bm_rt = t = 0;\\n        } else {\\n            $bm_rt = t = $bm_sub(time, key(n).time);\\n        }\\n        if (effect('Bounce & Drop - ukramedia.com')(58) == 1) {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(59);\\n                freq = effect('Bounce & Drop - ukramedia.com')(60);\\n                decay = effect('Bounce & Drop - ukramedia.com')(61);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(5);\\n                freq = effect('Bounce & Drop - ukramedia.com')(6);\\n                decay = effect('Bounce & Drop - ukramedia.com')(7);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        }\\n    } else if (positionBounceBack == 1) {\\n        if (effect('Bounce & Drop - ukramedia.com')(64) == 1) {\\n            e = effect('Bounce & Drop - ukramedia.com')(65);\\n            g = effect('Bounce & Drop - ukramedia.com')(66);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(67);\\n        } else {\\n            e = effect('Bounce & Drop - ukramedia.com')(10);\\n            g = effect('Bounce & Drop - ukramedia.com')(11);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(12);\\n        }\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time)\\n                n--;\\n        }\\n        if (n > 0) {\\n            t = $bm_sub(time, key(n).time);\\n            v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\\n            vl = length(v);\\n            if ($bm_isInstanceOfArray(value)) {\\n                vu = vl > 0 ? normalize(v) : [\\n                    0,\\n                    0,\\n                    0\\n                ];\\n            } else {\\n                vu = v < 0 ? -1 : 1;\\n            }\\n            tCur = 0;\\n            segDur = $bm_div($bm_mul(2, vl), g);\\n            tNext = segDur;\\n            nb = 1;\\n            while (tNext < t && nb <= nMax) {\\n                vl *= e;\\n                segDur *= e;\\n                tCur = tNext;\\n                tNext = $bm_sum(tNext, segDur);\\n                nb++;\\n            }\\n            if (nb <= nMax) {\\n                delta = $bm_sub(t, tCur);\\n                $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else\\n            $bm_rt = value;\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (err) {\\n    $bm_rt = value;\\n}"},"a":{"a":0,"k":[140.061,140.061,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,1.01]},"t":10,"s":[0,0,100]},{"t":20,"s":[140,140,100]}],"ix":6,"l":2,"x":"var $bm_rt;\\nvar scaleInertialBounce, scaleBounceBack, n, n, t, t, v, amp, freq, decay, v, amp, freq, decay, e, g, nMax, e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\\nscaleInertialBounce = effect('Bounce & Drop - ukramedia.com')(16);\\nscaleBounceBack = effect('Bounce & Drop - ukramedia.com')(17);\\ntry {\\n    if (scaleInertialBounce == 1) {\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time) {\\n                n--;\\n            }\\n        }\\n        if (n == 0) {\\n            $bm_rt = t = 0;\\n        } else {\\n            $bm_rt = t = $bm_sub(time, key(n).time);\\n        }\\n        if (effect('Bounce & Drop - ukramedia.com')(58) == 1) {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(59);\\n                freq = effect('Bounce & Drop - ukramedia.com')(60);\\n                decay = effect('Bounce & Drop - ukramedia.com')(61);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(19);\\n                freq = effect('Bounce & Drop - ukramedia.com')(20);\\n                decay = effect('Bounce & Drop - ukramedia.com')(21);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        }\\n    } else if (scaleBounceBack == 1) {\\n        if (effect('Bounce & Drop - ukramedia.com')(64) == 1) {\\n            e = effect('Bounce & Drop - ukramedia.com')(65);\\n            g = effect('Bounce & Drop - ukramedia.com')(66);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(67);\\n        } else {\\n            e = effect('Bounce & Drop - ukramedia.com')(24);\\n            g = effect('Bounce & Drop - ukramedia.com')(25);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(26);\\n        }\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time)\\n                n--;\\n        }\\n        if (n > 0) {\\n            t = $bm_sub(time, key(n).time);\\n            v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\\n            vl = length(v);\\n            if ($bm_isInstanceOfArray(value)) {\\n                vu = vl > 0 ? normalize(v) : [\\n                    0,\\n                    0,\\n                    0\\n                ];\\n            } else {\\n                vu = v < 0 ? -1 : 1;\\n            }\\n            tCur = 0;\\n            segDur = $bm_div($bm_mul(2, vl), g);\\n            tNext = segDur;\\n            nb = 1;\\n            while (tNext < t && nb <= nMax) {\\n                vl *= e;\\n                segDur *= e;\\n                tCur = tNext;\\n                tNext = $bm_sum(tNext, segDur);\\n                nb++;\\n            }\\n            if (nb <= nMax) {\\n                delta = $bm_sub(t, tCur);\\n                $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else\\n            $bm_rt = value;\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (err) {\\n    $bm_rt = value;\\n}"}},"ao":0,"ef":[{"ty":5,"nm":"Bounce & Drop - ukramedia.com","np":70,"mn":"Pseudo/animationControl","ix":1,"en":1,"ef":[{"ty":6,"nm":"Position","mn":"Pseudo/animationControl-0001","ix":1,"v":0},{"ty":7,"nm":"Enable Inertial Bounce","mn":"Pseudo/animationControl-0002","ix":2,"v":{"a":0,"k":0,"ix":2}},{"ty":7,"nm":"Enable Bounce Back","mn":"Pseudo/animationControl-0003","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":6,"nm":"Inertial Bounce Options","mn":"Pseudo/animationControl-0004","ix":4,"v":0},{"ty":0,"nm":"Amplitude","mn":"Pseudo/animationControl-0005","ix":5,"v":{"a":0,"k":0.05,"ix":5}},{"ty":0,"nm":"Frequency","mn":"Pseudo/animationControl-0006","ix":6,"v":{"a":0,"k":4,"ix":6}},{"ty":0,"nm":"Decay","mn":"Pseudo/animationControl-0007","ix":7,"v":{"a":0,"k":8,"ix":7}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0008","ix":8,"v":0},{"ty":6,"nm":"Bounce Back Options","mn":"Pseudo/animationControl-0009","ix":9,"v":0},{"ty":0,"nm":"Elasticity","mn":"Pseudo/animationControl-0010","ix":10,"v":{"a":0,"k":0.7,"ix":10}},{"ty":0,"nm":"Gravity","mn":"Pseudo/animationControl-0011","ix":11,"v":{"a":0,"k":5000,"ix":11}},{"ty":0,"nm":"nMax","mn":"Pseudo/animationControl-0012","ix":12,"v":{"a":0,"k":9,"ix":12}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0013","ix":13,"v":0},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0014","ix":14,"v":0},{"ty":6,"nm":"Scale","mn":"Pseudo/animationControl-0015","ix":15,"v":0},{"ty":7,"nm":"Enable Inertial Bounce","mn":"Pseudo/animationControl-0016","ix":16,"v":{"a":0,"k":1,"ix":16}},{"ty":7,"nm":"Enable Bounce Back","mn":"Pseudo/animationControl-0017","ix":17,"v":{"a":0,"k":0,"ix":17}},{"ty":6,"nm":"Inertial Bounce Options","mn":"Pseudo/animationControl-0018","ix":18,"v":0},{"ty":0,"nm":"Amplitude","mn":"Pseudo/animationControl-0019","ix":19,"v":{"a":0,"k":0.8,"ix":19}},{"ty":0,"nm":"Frequency","mn":"Pseudo/animationControl-0020","ix":20,"v":{"a":0,"k":4,"ix":20}},{"ty":0,"nm":"Decay","mn":"Pseudo/animationControl-0021","ix":21,"v":{"a":0,"k":8,"ix":21}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0022","ix":22,"v":0},{"ty":6,"nm":"Bounce Back Options","mn":"Pseudo/animationControl-0023","ix":23,"v":0},{"ty":0,"nm":"Elasticity","mn":"Pseudo/animationControl-0024","ix":24,"v":{"a":0,"k":0.7,"ix":24}},{"ty":0,"nm":"Gravity","mn":"Pseudo/animationControl-0025","ix":25,"v":{"a":0,"k":5000,"ix":25}},{"ty":0,"nm":"nMax","mn":"Pseudo/animationControl-0026","ix":26,"v":{"a":0,"k":9,"ix":26}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0027","ix":27,"v":0},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0028","ix":28,"v":0},{"ty":6,"nm":"Rotation","mn":"Pseudo/animationControl-0029","ix":29,"v":0},{"ty":7,"nm":"Enable Inertial Bounce","mn":"Pseudo/animationControl-0030","ix":30,"v":{"a":0,"k":0,"ix":30}},{"ty":7,"nm":"Enable Bounce Back","mn":"Pseudo/animationControl-0031","ix":31,"v":{"a":0,"k":0,"ix":31}},{"ty":6,"nm":"Inertial Bounce Options","mn":"Pseudo/animationControl-0032","ix":32,"v":0},{"ty":0,"nm":"Amplitude","mn":"Pseudo/animationControl-0033","ix":33,"v":{"a":0,"k":0.05,"ix":33}},{"ty":0,"nm":"Frequency","mn":"Pseudo/animationControl-0034","ix":34,"v":{"a":0,"k":4,"ix":34}},{"ty":0,"nm":"Decay","mn":"Pseudo/animationControl-0035","ix":35,"v":{"a":0,"k":8,"ix":35}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0036","ix":36,"v":0},{"ty":6,"nm":"Bounce Back Options","mn":"Pseudo/animationControl-0037","ix":37,"v":0},{"ty":0,"nm":"Elasticity","mn":"Pseudo/animationControl-0038","ix":38,"v":{"a":0,"k":0.7,"ix":38}},{"ty":0,"nm":"Gravity","mn":"Pseudo/animationControl-0039","ix":39,"v":{"a":0,"k":5000,"ix":39}},{"ty":0,"nm":"nMax","mn":"Pseudo/animationControl-0040","ix":40,"v":{"a":0,"k":9,"ix":40}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0041","ix":41,"v":0},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0042","ix":42,"v":0},{"ty":6,"nm":"Opacity","mn":"Pseudo/animationControl-0043","ix":43,"v":0},{"ty":7,"nm":"Enable Inertial Bounce","mn":"Pseudo/animationControl-0044","ix":44,"v":{"a":0,"k":0,"ix":44}},{"ty":7,"nm":"Enable Bounce Back","mn":"Pseudo/animationControl-0045","ix":45,"v":{"a":0,"k":0,"ix":45}},{"ty":6,"nm":"Inertial Bounce Options","mn":"Pseudo/animationControl-0046","ix":46,"v":0},{"ty":0,"nm":"Amplitude","mn":"Pseudo/animationControl-0047","ix":47,"v":{"a":0,"k":0.05,"ix":47}},{"ty":0,"nm":"Frequency","mn":"Pseudo/animationControl-0048","ix":48,"v":{"a":0,"k":4,"ix":48}},{"ty":0,"nm":"Decay","mn":"Pseudo/animationControl-0049","ix":49,"v":{"a":0,"k":8,"ix":49}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0050","ix":50,"v":0},{"ty":6,"nm":"Bounce Back Options","mn":"Pseudo/animationControl-0051","ix":51,"v":0},{"ty":0,"nm":"Elasticity","mn":"Pseudo/animationControl-0052","ix":52,"v":{"a":0,"k":0.7,"ix":52}},{"ty":0,"nm":"Gravity","mn":"Pseudo/animationControl-0053","ix":53,"v":{"a":0,"k":5000,"ix":53}},{"ty":0,"nm":"nMax","mn":"Pseudo/animationControl-0054","ix":54,"v":{"a":0,"k":9,"ix":54}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0055","ix":55,"v":0},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0056","ix":56,"v":0},{"ty":6,"nm":"Global Inertial Bounce Options","mn":"Pseudo/animationControl-0057","ix":57,"v":0},{"ty":7,"nm":"Enable Global Inertial Bounce","mn":"Pseudo/animationControl-0058","ix":58,"v":{"a":0,"k":0,"ix":58}},{"ty":0,"nm":"Amplitude","mn":"Pseudo/animationControl-0059","ix":59,"v":{"a":0,"k":0.05,"ix":59}},{"ty":0,"nm":"Frequency","mn":"Pseudo/animationControl-0060","ix":60,"v":{"a":0,"k":4,"ix":60}},{"ty":0,"nm":"Decay","mn":"Pseudo/animationControl-0061","ix":61,"v":{"a":0,"k":8,"ix":61}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0062","ix":62,"v":0},{"ty":6,"nm":"Global Bounce Back Options","mn":"Pseudo/animationControl-0063","ix":63,"v":0},{"ty":7,"nm":"Enable Global Bounce Back","mn":"Pseudo/animationControl-0064","ix":64,"v":{"a":0,"k":0,"ix":64}},{"ty":0,"nm":"Elasticity","mn":"Pseudo/animationControl-0065","ix":65,"v":{"a":0,"k":0.7,"ix":65}},{"ty":0,"nm":"Gravity","mn":"Pseudo/animationControl-0066","ix":66,"v":{"a":0,"k":5000,"ix":66}},{"ty":0,"nm":"nMax","mn":"Pseudo/animationControl-0067","ix":67,"v":{"a":0,"k":9,"ix":67}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0068","ix":68,"v":0}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-77.215],[77.216,0],[0,77.215],[-77.215,0]],"o":[[0,77.215],[-77.215,0],[0,-77.215],[77.216,0]],"v":[[139.811,0],[0,139.811],[-139.811,0],[0,-139.811]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.2901960784313726,0.2901960784313726,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[140.061,140.061],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":360,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Circle 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":41.25,"s":[50]},{"t":55,"s":[0]}],"ix":11,"x":"var $bm_rt;\\nvar opacityInertialBounce, opacityBounceBack, n, n, t, t, v, amp, freq, decay, v, amp, freq, decay, e, g, nMax, e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\\nopacityInertialBounce = effect('Bounce & Drop - ukramedia.com')(44);\\nopacityBounceBack = effect('Bounce & Drop - ukramedia.com')(45);\\ntry {\\n    if (opacityInertialBounce == 1) {\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time) {\\n                n--;\\n            }\\n        }\\n        if (n == 0) {\\n            $bm_rt = t = 0;\\n        } else {\\n            $bm_rt = t = $bm_sub(time, key(n).time);\\n        }\\n        if (effect('Bounce & Drop - ukramedia.com')(58) == 1) {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(59);\\n                freq = effect('Bounce & Drop - ukramedia.com')(60);\\n                decay = effect('Bounce & Drop - ukramedia.com')(61);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(47);\\n                freq = effect('Bounce & Drop - ukramedia.com')(48);\\n                decay = effect('Bounce & Drop - ukramedia.com')(49);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        }\\n    } else if (opacityBounceBack == 1) {\\n        if (effect('Bounce & Drop - ukramedia.com')(64) == 1) {\\n            e = effect('Bounce & Drop - ukramedia.com')(65);\\n            g = effect('Bounce & Drop - ukramedia.com')(66);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(67);\\n        } else {\\n            e = effect('Bounce & Drop - ukramedia.com')(52);\\n            g = effect('Bounce & Drop - ukramedia.com')(53);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(54);\\n        }\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time)\\n                n--;\\n        }\\n        if (n > 0) {\\n            t = $bm_sub(time, key(n).time);\\n            v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\\n            vl = length(v);\\n            if ($bm_isInstanceOfArray(value)) {\\n                vu = vl > 0 ? normalize(v) : [\\n                    0,\\n                    0,\\n                    0\\n                ];\\n            } else {\\n                vu = v < 0 ? -1 : 1;\\n            }\\n            tCur = 0;\\n            segDur = $bm_div($bm_mul(2, vl), g);\\n            tNext = segDur;\\n            nb = 1;\\n            while (tNext < t && nb <= nMax) {\\n                vl *= e;\\n                segDur *= e;\\n                tCur = tNext;\\n                tNext = $bm_sum(tNext, segDur);\\n                nb++;\\n            }\\n            if (nb <= nMax) {\\n                delta = $bm_sub(t, tCur);\\n                $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else\\n            $bm_rt = value;\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (err) {\\n    $bm_rt = value;\\n}"},"r":{"a":0,"k":0,"ix":10,"x":"var $bm_rt;\\nvar rotationInertialBounce, rotationBounceBack, n, n, t, t, v, amp, freq, decay, v, amp, freq, decay, e, g, nMax, e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\\nrotationInertialBounce = effect('Bounce & Drop - ukramedia.com')(30);\\nrotationBounceBack = effect('Bounce & Drop - ukramedia.com')(31);\\ntry {\\n    if (rotationInertialBounce == 1) {\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time) {\\n                n--;\\n            }\\n        }\\n        if (n == 0) {\\n            $bm_rt = t = 0;\\n        } else {\\n            $bm_rt = t = $bm_sub(time, key(n).time);\\n        }\\n        if (effect('Bounce & Drop - ukramedia.com')(58) == 1) {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(59);\\n                freq = effect('Bounce & Drop - ukramedia.com')(60);\\n                decay = effect('Bounce & Drop - ukramedia.com')(61);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(33);\\n                freq = effect('Bounce & Drop - ukramedia.com')(34);\\n                decay = effect('Bounce & Drop - ukramedia.com')(35);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        }\\n    } else if (rotationBounceBack == 1) {\\n        if (effect('Bounce & Drop - ukramedia.com')(64) == 1) {\\n            e = effect('Bounce & Drop - ukramedia.com')(65);\\n            g = effect('Bounce & Drop - ukramedia.com')(66);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(67);\\n        } else {\\n            e = effect('Bounce & Drop - ukramedia.com')(38);\\n            g = effect('Bounce & Drop - ukramedia.com')(39);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(40);\\n        }\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time)\\n                n--;\\n        }\\n        if (n > 0) {\\n            t = $bm_sub(time, key(n).time);\\n            v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\\n            vl = length(v);\\n            if ($bm_isInstanceOfArray(value)) {\\n                vu = vl > 0 ? normalize(v) : [\\n                    0,\\n                    0,\\n                    0\\n                ];\\n            } else {\\n                vu = v < 0 ? -1 : 1;\\n            }\\n            tCur = 0;\\n            segDur = $bm_div($bm_mul(2, vl), g);\\n            tNext = segDur;\\n            nb = 1;\\n            while (tNext < t && nb <= nMax) {\\n                vl *= e;\\n                segDur *= e;\\n                tCur = tNext;\\n                tNext = $bm_sum(tNext, segDur);\\n                nb++;\\n            }\\n            if (nb <= nMax) {\\n                delta = $bm_sub(t, tCur);\\n                $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else\\n            $bm_rt = value;\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (err) {\\n    $bm_rt = value;\\n}"},"p":{"a":0,"k":[256,256,0],"ix":2,"l":2,"x":"var $bm_rt;\\nvar positionInertialBounce, positionBounceBack, n, n, t, t, v, amp, freq, decay, v, amp, freq, decay, e, g, nMax, e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\\npositionInertialBounce = effect('Bounce & Drop - ukramedia.com')(2);\\npositionBounceBack = effect('Bounce & Drop - ukramedia.com')(3);\\ntry {\\n    if (positionInertialBounce == 1) {\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time) {\\n                n--;\\n            }\\n        }\\n        if (n == 0) {\\n            $bm_rt = t = 0;\\n        } else {\\n            $bm_rt = t = $bm_sub(time, key(n).time);\\n        }\\n        if (effect('Bounce & Drop - ukramedia.com')(58) == 1) {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(59);\\n                freq = effect('Bounce & Drop - ukramedia.com')(60);\\n                decay = effect('Bounce & Drop - ukramedia.com')(61);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(5);\\n                freq = effect('Bounce & Drop - ukramedia.com')(6);\\n                decay = effect('Bounce & Drop - ukramedia.com')(7);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        }\\n    } else if (positionBounceBack == 1) {\\n        if (effect('Bounce & Drop - ukramedia.com')(64) == 1) {\\n            e = effect('Bounce & Drop - ukramedia.com')(65);\\n            g = effect('Bounce & Drop - ukramedia.com')(66);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(67);\\n        } else {\\n            e = effect('Bounce & Drop - ukramedia.com')(10);\\n            g = effect('Bounce & Drop - ukramedia.com')(11);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(12);\\n        }\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time)\\n                n--;\\n        }\\n        if (n > 0) {\\n            t = $bm_sub(time, key(n).time);\\n            v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\\n            vl = length(v);\\n            if ($bm_isInstanceOfArray(value)) {\\n                vu = vl > 0 ? normalize(v) : [\\n                    0,\\n                    0,\\n                    0\\n                ];\\n            } else {\\n                vu = v < 0 ? -1 : 1;\\n            }\\n            tCur = 0;\\n            segDur = $bm_div($bm_mul(2, vl), g);\\n            tNext = segDur;\\n            nb = 1;\\n            while (tNext < t && nb <= nMax) {\\n                vl *= e;\\n                segDur *= e;\\n                tCur = tNext;\\n                tNext = $bm_sum(tNext, segDur);\\n                nb++;\\n            }\\n            if (nb <= nMax) {\\n                delta = $bm_sub(t, tCur);\\n                $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else\\n            $bm_rt = value;\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (err) {\\n    $bm_rt = value;\\n}"},"a":{"a":0,"k":[140.061,140.061,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.794]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,-0.38]},"t":10,"s":[132,132,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,-0.21]},"t":35,"s":[130,130,100]},{"t":55,"s":[175,175,100]}],"ix":6,"l":2,"x":"var $bm_rt;\\nvar scaleInertialBounce, scaleBounceBack, n, n, t, t, v, amp, freq, decay, v, amp, freq, decay, e, g, nMax, e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\\nscaleInertialBounce = effect('Bounce & Drop - ukramedia.com')(16);\\nscaleBounceBack = effect('Bounce & Drop - ukramedia.com')(17);\\ntry {\\n    if (scaleInertialBounce == 1) {\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time) {\\n                n--;\\n            }\\n        }\\n        if (n == 0) {\\n            $bm_rt = t = 0;\\n        } else {\\n            $bm_rt = t = $bm_sub(time, key(n).time);\\n        }\\n        if (effect('Bounce & Drop - ukramedia.com')(58) == 1) {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(59);\\n                freq = effect('Bounce & Drop - ukramedia.com')(60);\\n                decay = effect('Bounce & Drop - ukramedia.com')(61);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else {\\n            if (n > 0 && t < 1) {\\n                v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n                amp = effect('Bounce & Drop - ukramedia.com')(19);\\n                freq = effect('Bounce & Drop - ukramedia.com')(20);\\n                decay = effect('Bounce & Drop - ukramedia.com')(21);\\n                $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        }\\n    } else if (scaleBounceBack == 1) {\\n        if (effect('Bounce & Drop - ukramedia.com')(64) == 1) {\\n            e = effect('Bounce & Drop - ukramedia.com')(65);\\n            g = effect('Bounce & Drop - ukramedia.com')(66);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(67);\\n        } else {\\n            e = effect('Bounce & Drop - ukramedia.com')(24);\\n            g = effect('Bounce & Drop - ukramedia.com')(25);\\n            nMax = effect('Bounce & Drop - ukramedia.com')(26);\\n        }\\n        $bm_rt = n = 0;\\n        if (numKeys > 0) {\\n            $bm_rt = n = nearestKey(time).index;\\n            if (key(n).time > time)\\n                n--;\\n        }\\n        if (n > 0) {\\n            t = $bm_sub(time, key(n).time);\\n            v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\\n            vl = length(v);\\n            if ($bm_isInstanceOfArray(value)) {\\n                vu = vl > 0 ? normalize(v) : [\\n                    0,\\n                    0,\\n                    0\\n                ];\\n            } else {\\n                vu = v < 0 ? -1 : 1;\\n            }\\n            tCur = 0;\\n            segDur = $bm_div($bm_mul(2, vl), g);\\n            tNext = segDur;\\n            nb = 1;\\n            while (tNext < t && nb <= nMax) {\\n                vl *= e;\\n                segDur *= e;\\n                tCur = tNext;\\n                tNext = $bm_sum(tNext, segDur);\\n                nb++;\\n            }\\n            if (nb <= nMax) {\\n                delta = $bm_sub(t, tCur);\\n                $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\\n            } else {\\n                $bm_rt = value;\\n            }\\n        } else\\n            $bm_rt = value;\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (err) {\\n    $bm_rt = value;\\n}"}},"ao":0,"ef":[{"ty":5,"nm":"Bounce & Drop - ukramedia.com","np":70,"mn":"Pseudo/animationControl","ix":1,"en":1,"ef":[{"ty":6,"nm":"Position","mn":"Pseudo/animationControl-0001","ix":1,"v":0},{"ty":7,"nm":"Enable Inertial Bounce","mn":"Pseudo/animationControl-0002","ix":2,"v":{"a":0,"k":0,"ix":2}},{"ty":7,"nm":"Enable Bounce Back","mn":"Pseudo/animationControl-0003","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":6,"nm":"Inertial Bounce Options","mn":"Pseudo/animationControl-0004","ix":4,"v":0},{"ty":0,"nm":"Amplitude","mn":"Pseudo/animationControl-0005","ix":5,"v":{"a":0,"k":0.05,"ix":5}},{"ty":0,"nm":"Frequency","mn":"Pseudo/animationControl-0006","ix":6,"v":{"a":0,"k":4,"ix":6}},{"ty":0,"nm":"Decay","mn":"Pseudo/animationControl-0007","ix":7,"v":{"a":0,"k":8,"ix":7}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0008","ix":8,"v":0},{"ty":6,"nm":"Bounce Back Options","mn":"Pseudo/animationControl-0009","ix":9,"v":0},{"ty":0,"nm":"Elasticity","mn":"Pseudo/animationControl-0010","ix":10,"v":{"a":0,"k":0.7,"ix":10}},{"ty":0,"nm":"Gravity","mn":"Pseudo/animationControl-0011","ix":11,"v":{"a":0,"k":5000,"ix":11}},{"ty":0,"nm":"nMax","mn":"Pseudo/animationControl-0012","ix":12,"v":{"a":0,"k":9,"ix":12}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0013","ix":13,"v":0},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0014","ix":14,"v":0},{"ty":6,"nm":"Scale","mn":"Pseudo/animationControl-0015","ix":15,"v":0},{"ty":7,"nm":"Enable Inertial Bounce","mn":"Pseudo/animationControl-0016","ix":16,"v":{"a":0,"k":1,"ix":16}},{"ty":7,"nm":"Enable Bounce Back","mn":"Pseudo/animationControl-0017","ix":17,"v":{"a":0,"k":0,"ix":17}},{"ty":6,"nm":"Inertial Bounce Options","mn":"Pseudo/animationControl-0018","ix":18,"v":0},{"ty":0,"nm":"Amplitude","mn":"Pseudo/animationControl-0019","ix":19,"v":{"a":0,"k":0.8,"ix":19}},{"ty":0,"nm":"Frequency","mn":"Pseudo/animationControl-0020","ix":20,"v":{"a":0,"k":4,"ix":20}},{"ty":0,"nm":"Decay","mn":"Pseudo/animationControl-0021","ix":21,"v":{"a":0,"k":8,"ix":21}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0022","ix":22,"v":0},{"ty":6,"nm":"Bounce Back Options","mn":"Pseudo/animationControl-0023","ix":23,"v":0},{"ty":0,"nm":"Elasticity","mn":"Pseudo/animationControl-0024","ix":24,"v":{"a":0,"k":0.7,"ix":24}},{"ty":0,"nm":"Gravity","mn":"Pseudo/animationControl-0025","ix":25,"v":{"a":0,"k":5000,"ix":25}},{"ty":0,"nm":"nMax","mn":"Pseudo/animationControl-0026","ix":26,"v":{"a":0,"k":9,"ix":26}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0027","ix":27,"v":0},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0028","ix":28,"v":0},{"ty":6,"nm":"Rotation","mn":"Pseudo/animationControl-0029","ix":29,"v":0},{"ty":7,"nm":"Enable Inertial Bounce","mn":"Pseudo/animationControl-0030","ix":30,"v":{"a":0,"k":0,"ix":30}},{"ty":7,"nm":"Enable Bounce Back","mn":"Pseudo/animationControl-0031","ix":31,"v":{"a":0,"k":0,"ix":31}},{"ty":6,"nm":"Inertial Bounce Options","mn":"Pseudo/animationControl-0032","ix":32,"v":0},{"ty":0,"nm":"Amplitude","mn":"Pseudo/animationControl-0033","ix":33,"v":{"a":0,"k":0.05,"ix":33}},{"ty":0,"nm":"Frequency","mn":"Pseudo/animationControl-0034","ix":34,"v":{"a":0,"k":4,"ix":34}},{"ty":0,"nm":"Decay","mn":"Pseudo/animationControl-0035","ix":35,"v":{"a":0,"k":8,"ix":35}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0036","ix":36,"v":0},{"ty":6,"nm":"Bounce Back Options","mn":"Pseudo/animationControl-0037","ix":37,"v":0},{"ty":0,"nm":"Elasticity","mn":"Pseudo/animationControl-0038","ix":38,"v":{"a":0,"k":0.7,"ix":38}},{"ty":0,"nm":"Gravity","mn":"Pseudo/animationControl-0039","ix":39,"v":{"a":0,"k":5000,"ix":39}},{"ty":0,"nm":"nMax","mn":"Pseudo/animationControl-0040","ix":40,"v":{"a":0,"k":9,"ix":40}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0041","ix":41,"v":0},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0042","ix":42,"v":0},{"ty":6,"nm":"Opacity","mn":"Pseudo/animationControl-0043","ix":43,"v":0},{"ty":7,"nm":"Enable Inertial Bounce","mn":"Pseudo/animationControl-0044","ix":44,"v":{"a":0,"k":0,"ix":44}},{"ty":7,"nm":"Enable Bounce Back","mn":"Pseudo/animationControl-0045","ix":45,"v":{"a":0,"k":0,"ix":45}},{"ty":6,"nm":"Inertial Bounce Options","mn":"Pseudo/animationControl-0046","ix":46,"v":0},{"ty":0,"nm":"Amplitude","mn":"Pseudo/animationControl-0047","ix":47,"v":{"a":0,"k":0.05,"ix":47}},{"ty":0,"nm":"Frequency","mn":"Pseudo/animationControl-0048","ix":48,"v":{"a":0,"k":4,"ix":48}},{"ty":0,"nm":"Decay","mn":"Pseudo/animationControl-0049","ix":49,"v":{"a":0,"k":8,"ix":49}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0050","ix":50,"v":0},{"ty":6,"nm":"Bounce Back Options","mn":"Pseudo/animationControl-0051","ix":51,"v":0},{"ty":0,"nm":"Elasticity","mn":"Pseudo/animationControl-0052","ix":52,"v":{"a":0,"k":0.7,"ix":52}},{"ty":0,"nm":"Gravity","mn":"Pseudo/animationControl-0053","ix":53,"v":{"a":0,"k":5000,"ix":53}},{"ty":0,"nm":"nMax","mn":"Pseudo/animationControl-0054","ix":54,"v":{"a":0,"k":9,"ix":54}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0055","ix":55,"v":0},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0056","ix":56,"v":0},{"ty":6,"nm":"Global Inertial Bounce Options","mn":"Pseudo/animationControl-0057","ix":57,"v":0},{"ty":7,"nm":"Enable Global Inertial Bounce","mn":"Pseudo/animationControl-0058","ix":58,"v":{"a":0,"k":0,"ix":58}},{"ty":0,"nm":"Amplitude","mn":"Pseudo/animationControl-0059","ix":59,"v":{"a":0,"k":0.05,"ix":59}},{"ty":0,"nm":"Frequency","mn":"Pseudo/animationControl-0060","ix":60,"v":{"a":0,"k":4,"ix":60}},{"ty":0,"nm":"Decay","mn":"Pseudo/animationControl-0061","ix":61,"v":{"a":0,"k":8,"ix":61}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0062","ix":62,"v":0},{"ty":6,"nm":"Global Bounce Back Options","mn":"Pseudo/animationControl-0063","ix":63,"v":0},{"ty":7,"nm":"Enable Global Bounce Back","mn":"Pseudo/animationControl-0064","ix":64,"v":{"a":0,"k":0,"ix":64}},{"ty":0,"nm":"Elasticity","mn":"Pseudo/animationControl-0065","ix":65,"v":{"a":0,"k":0.7,"ix":65}},{"ty":0,"nm":"Gravity","mn":"Pseudo/animationControl-0066","ix":66,"v":{"a":0,"k":5000,"ix":66}},{"ty":0,"nm":"nMax","mn":"Pseudo/animationControl-0067","ix":67,"v":{"a":0,"k":9,"ix":67}},{"ty":6,"nm":"","mn":"Pseudo/animationControl-0068","ix":68,"v":0}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-77.215],[77.216,0],[0,77.215],[-77.215,0]],"o":[[0,77.215],[-77.215,0],[0,-77.215],[77.216,0]],"v":[[139.811,0],[0,139.811],[-139.811,0],[0,-139.811]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.2901960784313726,0.2901960784313726,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[140.061,140.061],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":360,"st":0,"bm":0}]`,
);
const markers = [];
const AnimatedX = {
	v,
	fr,
	ip,
	op,
	w,
	h,
	nm,
	ddd,
	assets,
	layers,
	markers,
};
const CloseIcon =
	"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%20500%20500'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20xmlns:serif='http://www.serif.com/'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3e%3cg%20transform='matrix(1.28565,1.11022e-16,1.11022e-16,1.28565,-71.4122,-71.4122)'%3e%3cpath%20d='M250,214.645L409.099,55.546L444.454,90.901L285.355,250L444.454,409.099L409.099,444.454L250,285.355L90.901,444.454L55.546,409.099L214.645,250L55.546,90.901L90.901,55.546L250,214.645Z'%20style='fill:white;'/%3e%3c/g%3e%3c/svg%3e";
async function action({ request }) {
	const formData = await request.formData();
	const formParams = new URLSearchParams();
	formParams.append("name", formData.get("name"));
	formParams.append("email", formData.get("email"));
	formParams.append("message", formData.get("message"));
	formParams.append("form-name", "contact");
	const url = new URL(request.url);
	const baseUrl = url.origin;
	try {
		const response = await fetch(`${baseUrl}/form.html`, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: formParams.toString(),
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
	} catch (error) {
		console.error("Error sending form data:", error);
		return {
			success: false,
			personalEmail: process.env.PERSONAL_EMAIL,
		};
	}
	return {
		success: true,
	};
}
const ERROR_ANIMATION_DURATION = 0.5;
const contact = withComponentProps(function Contact2() {
	const data2 = useActionData();
	const submitSuccess = data2 == null ? void 0 : data2.success;
	const navigate = useNavigate();
	const formRef = useRef(null);
	const { t } = useTranslation();
	const captureFormData = () => {
		var _a;
		const formElements = (_a = formRef.current) == null ? void 0 : _a.elements;
		const name = formElements == null ? void 0 : formElements.namedItem("name");
		const email =
			formElements == null ? void 0 : formElements.namedItem("email");
		const message =
			formElements == null ? void 0 : formElements.namedItem("message");
		if (
			(name == null ? void 0 : name.value) ||
			((email == null ? void 0 : email.value) &&
				(message == null ? void 0 : message.value))
		) {
			posthog.capture("contact_form_close", {
				name: (name == null ? void 0 : name.value) ?? "",
				email: (email == null ? void 0 : email.value) ?? "",
				message: (message == null ? void 0 : message.value) ?? "",
			});
		}
	};
	useEffect(() => {
		const handleBeforeUnload = () => {
			captureFormData();
		};
		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);
	const handleClose = () => {
		captureFormData();
		void navigate("/", {
			preventScrollReset: true,
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			/* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
				},
				animate: {
					opacity: 1,
				},
				exit: {
					opacity: 0,
				},
				role: "presentation",
				className:
					"bg-neutral-dark/80 pointer-events-none fixed top-0 left-0 z-40 h-screen w-screen overscroll-contain",
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				onClick: submitSuccess === void 0 ? void 0 : handleClose,
				className:
					"fixed top-0 left-0 z-50 flex h-dvh w-screen overscroll-contain",
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						scale: 0,
						opacity: 0,
					},
					animate: {
						scale: 1,
						opacity: 1,
					},
					exit: {
						scale: 0,
						opacity: 0,
					},
					transition: {
						duration: 0.2,
					},
					tabIndex: -1,
					onClick: (event) => {
						event.stopPropagation();
					},
					className:
						"shadow-sm-purple border-secondary/10 from-neutral/50 to-neutral-dark relative/50 mx-4 my-auto w-full max-w-7xl rounded-2xl border-2 border-solid bg-linear-to-br p-6 backdrop-blur sm:m-auto sm:w-fit",
					children: [
						/* @__PURE__ */ jsx(motion.button, {
							whileTap: {
								scale: 1,
							},
							whileHover: {
								scale: 1.1,
							},
							onClick: handleClose,
							"aria-label": t("close"),
							className: "absolute top-1 right-1 cursor-pointer p-3",
							children: /* @__PURE__ */ jsx("img", {
								src: CloseIcon,
								alt: "",
								width: 15,
								height: 15,
							}),
						}),
						submitSuccess !== void 0 &&
							(submitSuccess
								? /* @__PURE__ */ jsx(SubmitSuccess, {})
								: /* @__PURE__ */ jsx(SubmitError, {
										personalEmail:
											(data2 == null ? void 0 : data2.personalEmail) ?? "",
									})),
						submitSuccess === void 0 &&
							/* @__PURE__ */ jsx(ContactForm, {
								formRef,
							}),
					],
				}),
			}),
		],
	});
});
const ContactForm = ({ formRef }) => {
	const { t } = useTranslation();
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [hasTriedToSubmit, setHasTriedToSubmit] = useState(false);
	const submit = useSubmit();
	const validateForm = () => {
		if (name === "" || email === "" || message === "") {
			setError(t("pleaseFillFields"));
			return true;
		} else if (/^\S+@\S+\.\S+$/.exec(email) === null) {
			setError(t("invalidEmail"));
			return true;
		}
		setError("");
		return false;
	};
	const onSendClick = (event) => {
		event.preventDefault();
		setHasTriedToSubmit(true);
		const hasError = validateForm();
		if (!hasError) {
			posthog.capture("contact_form_submit", {
				name,
				email,
				message,
			});
			void submit(formRef.current);
		}
	};
	return /* @__PURE__ */ jsxs(Form, {
		ref: formRef,
		className: "flex flex-col gap-5 text-left sm:w-fit",
		method: "post",
		noValidate: true,
		onChange: () => {
			validateForm();
		},
		children: [
			/* @__PURE__ */ jsx(Textbox, {
				label: t("fullName"),
				type: "text",
				name: "name",
				onChange: (e) => {
					setName(e.target.value);
				},
			}),
			/* @__PURE__ */ jsx(Textbox, {
				label: t("email"),
				type: "email",
				name: "email",
				onChange: (e) => {
					setEmail(e.target.value);
				},
			}),
			/* @__PURE__ */ jsxs("label", {
				className: "flex w-full flex-col sm:w-[400px]",
				children: [
					t("message"),
					/* @__PURE__ */ jsx("textarea", {
						onChange: (e) => {
							setMessage(e.target.value);
						},
						className:
							"mt-2 h-36 resize-none rounded-lg bg-[#3b3b3b] p-2 leading-normal focus:bg-[#3b3b3b] focus:filter-none",
						name: "message",
					}),
				],
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-2 flex gap-2",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex-1",
						children: /* @__PURE__ */ jsx(AnimatePresence, {
							children:
								error !== "" &&
								hasTriedToSubmit &&
								/* @__PURE__ */ jsx(motion.div, {
									layout: true,
									initial: {
										y: 20,
										opacity: 0,
									},
									animate: {
										y: 0,
										opacity: 1,
									},
									exit: {
										y: 20,
										opacity: 0,
									},
									transition: {
										duration: ERROR_ANIMATION_DURATION,
									},
									className: "text-primary max-w-[200px] wrap-break-word",
									children: error,
								}),
						}),
					}),
					/* @__PURE__ */ jsx(Button, {
						onClick: onSendClick,
						children: t("sendMessage"),
					}),
				],
			}),
		],
	});
};
const Textbox = ({ label, type, name, ariaLabel, onChange }) => {
	return /* @__PURE__ */ jsxs("label", {
		className: "flex flex-col",
		children: [
			label,
			/* @__PURE__ */ jsx("input", {
				onKeyDown: (e) => {
					e.key === "Enter" && e.preventDefault();
				},
				onChange,
				className:
					"focus:text-secondary mt-2 max-w-[300px] rounded-lg bg-[#3b3b3b] p-2 focus:bg-[#3b3b3b] focus:filter-none",
				type,
				name,
				"aria-label": ariaLabel,
			}),
		],
	});
};
const SubmitSuccess = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-4",
		children: [
			/* @__PURE__ */ jsx(Lottie, {
				className: "mt-1 h-16 w-16",
				animationData: AnimatedCheck,
				loop: false,
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "m-auto flex flex-1 flex-col gap-2 text-left",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-green text-md font-bold",
						children: t("messageSent"),
					}),
					/* @__PURE__ */ jsxs("div", {
						children: [
							t("responseTime"),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "font-bold",
								children: t("oneDay"),
							}),
							".",
						],
					}),
				],
			}),
		],
	});
};
const SubmitError = ({ personalEmail }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-4",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "-mt-2",
				children: /* @__PURE__ */ jsx(Lottie, {
					className: "my-auto mt-1 h-16 w-16",
					animationData: AnimatedX,
					loop: false,
				}),
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "m-auto flex flex-1 flex-col gap-2 text-left",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-md font-bold text-[#FF6347]",
						children: t("error"),
					}),
					/* @__PURE__ */ jsxs("div", {
						children: [
							t("couldNotSend"),
							" ",
							/* @__PURE__ */ jsx("a", {
								className: "text-primary font-bold underline",
								href: `mailto:${personalEmail}`,
								children: personalEmail,
							}),
						],
					}),
				],
			}),
		],
	});
};
const route2 = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			ContactForm,
			SubmitError,
			SubmitSuccess,
			Textbox,
			action,
			default: contact,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
function loader() {
	return data(null, {
		status: 404,
	});
}
const notFound = withComponentProps(function Component() {
	const { t } = useTranslation("translation");
	return /* @__PURE__ */ jsx("div", {
		className: "flex h-screen w-full items-center justify-center",
		children: /* @__PURE__ */ jsx("h1", {
			className: "text-lg",
			children: t("notFound"),
		}),
	});
});
const route3 = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			default: notFound,
			loader,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
const serverManifest = {
	entry: {
		module: "/assets/entry.client-CkOIU9JT.js",
		imports: [
			"/assets/chunk-D4RADZKF-DVqrdyfo.js",
			"/assets/i18n-CcYMxFnS.js",
			"/assets/es-U_uln9Pb.js",
		],
		css: [],
	},
	routes: {
		root: {
			id: "root",
			parentId: void 0,
			path: "",
			index: void 0,
			caseSensitive: void 0,
			hasAction: false,
			hasLoader: true,
			hasClientAction: false,
			hasClientLoader: false,
			hasClientMiddleware: false,
			hasErrorBoundary: true,
			module: "/assets/root-D-xMKFFd.js",
			imports: [
				"/assets/chunk-D4RADZKF-DVqrdyfo.js",
				"/assets/i18n-CcYMxFnS.js",
				"/assets/es-U_uln9Pb.js",
				"/assets/with-props-DPDmm-s_.js",
				"/assets/use-hydrated-Bl0M1cM4.js",
				"/assets/misc-CkINB2q5.js",
			],
			css: [],
			clientActionModule: void 0,
			clientLoaderModule: void 0,
			clientMiddlewareModule: void 0,
			hydrateFallbackModule: void 0,
		},
		"routes/_index": {
			id: "routes/_index",
			parentId: "root",
			path: "/:locale",
			index: void 0,
			caseSensitive: void 0,
			hasAction: false,
			hasLoader: false,
			hasClientAction: false,
			hasClientLoader: false,
			hasClientMiddleware: false,
			hasErrorBoundary: false,
			module: "/assets/_index-OIRC3iXb.js",
			imports: [
				"/assets/with-props-DPDmm-s_.js",
				"/assets/chunk-D4RADZKF-DVqrdyfo.js",
				"/assets/use-hydrated-Bl0M1cM4.js",
				"/assets/button-Wq5pn2Q5.js",
				"/assets/misc-CkINB2q5.js",
				"/assets/es-U_uln9Pb.js",
			],
			css: [],
			clientActionModule: void 0,
			clientLoaderModule: void 0,
			clientMiddlewareModule: void 0,
			hydrateFallbackModule: void 0,
		},
		"routes/contact": {
			id: "routes/contact",
			parentId: "routes/_index",
			path: "contact",
			index: void 0,
			caseSensitive: void 0,
			hasAction: true,
			hasLoader: false,
			hasClientAction: false,
			hasClientLoader: false,
			hasClientMiddleware: false,
			hasErrorBoundary: false,
			module: "/assets/contact-DZG6Wt4L.js",
			imports: [
				"/assets/with-props-DPDmm-s_.js",
				"/assets/chunk-D4RADZKF-DVqrdyfo.js",
				"/assets/use-hydrated-Bl0M1cM4.js",
				"/assets/button-Wq5pn2Q5.js",
			],
			css: [],
			clientActionModule: void 0,
			clientLoaderModule: void 0,
			clientMiddlewareModule: void 0,
			hydrateFallbackModule: void 0,
		},
		"routes/not-found": {
			id: "routes/not-found",
			parentId: "root",
			path: "*",
			index: void 0,
			caseSensitive: void 0,
			hasAction: false,
			hasLoader: true,
			hasClientAction: false,
			hasClientLoader: false,
			hasClientMiddleware: false,
			hasErrorBoundary: false,
			module: "/assets/not-found-8hKXd7jQ.js",
			imports: [
				"/assets/with-props-DPDmm-s_.js",
				"/assets/chunk-D4RADZKF-DVqrdyfo.js",
			],
			css: [],
			clientActionModule: void 0,
			clientLoaderModule: void 0,
			clientMiddlewareModule: void 0,
			hydrateFallbackModule: void 0,
		},
	},
	url: "/assets/manifest-e8f70707.js",
	version: "e8f70707",
	sri: void 0,
};
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = {
	unstable_middleware: false,
	unstable_optimizeDeps: false,
	unstable_splitRouteModules: false,
	unstable_subResourceIntegrity: false,
	unstable_viteEnvironmentApi: false,
};
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { mode: "lazy", manifestPath: "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
	root: {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: route0,
	},
	"routes/_index": {
		id: "routes/_index",
		parentId: "root",
		path: "/:locale",
		index: void 0,
		caseSensitive: void 0,
		module: route1,
	},
	"routes/contact": {
		id: "routes/contact",
		parentId: "routes/_index",
		path: "contact",
		index: void 0,
		caseSensitive: void 0,
		module: route2,
	},
	"routes/not-found": {
		id: "routes/not-found",
		parentId: "root",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: route3,
	},
};
const build = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			assets: serverManifest,
			assetsBuildDirectory,
			basename,
			entry,
			future,
			isSpaMode,
			prerender,
			publicPath,
			routeDiscovery,
			routes,
			ssr,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
const _virtual_netlifyServer = createRequestHandler({
	build,
	getLoadContext: async (_req, ctx) => ctx,
});
export { _virtual_netlifyServer as default };

//# debugId=0a5e6ca5-f80c-5e80-94a9-d32a59dfac4f
