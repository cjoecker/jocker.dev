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
			(e._sentryDebugIds[n] = "02a18ca1-eec3-54f1-af02-0e740593a145"));
	} catch (e) {}
})();
import { u as N, w as O, a as A } from "./with-props-DPDmm-s_.js";
import {
	b as x,
	q as M,
	p as i,
	M as j,
	L as F,
	O as U,
	S as B,
	t as Y,
	v as G,
} from "./chunk-D4RADZKF-DVqrdyfo.js";
import { u as W, i as H } from "./use-hydrated-Bl0M1cM4.js";
import { P as K } from "./misc-CkINB2q5.js";
import { f as $, s as z } from "./i18n-CcYMxFnS.js";
import "./es-U_uln9Pb.js";
const C = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
	h = "9.19.0",
	a = globalThis;
function I() {
	return _(a), a;
}
function _(e) {
	const t = (e.__SENTRY__ = e.__SENTRY__ || {});
	return (t.version = t.version || h), (t[h] = t[h] || {});
}
function g(e, t, n = a) {
	const s = (n.__SENTRY__ = n.__SENTRY__ || {}),
		r = (s[h] = s[h] || {});
	return r[e] || (r[e] = t());
}
const J = Object.prototype.toString;
function V(e, t) {
	return J.call(e) === `[object ${t}]`;
}
function X(e) {
	return V(e, "Object");
}
function q(e) {
	return !!(e != null && e.then && typeof e.then == "function");
}
const Q = "Sentry Logger ",
	w = ["debug", "info", "warn", "error", "log", "assert", "trace"],
	E = {};
function Z(e) {
	if (!("console" in a)) return e();
	const t = a.console,
		n = {},
		s = Object.keys(E);
	s.forEach((r) => {
		const o = E[r];
		(n[r] = t[r]), (t[r] = o);
	});
	try {
		return e();
	} finally {
		s.forEach((r) => {
			t[r] = n[r];
		});
	}
}
function tt() {
	let e = !1;
	const t = {
		enable: () => {
			e = !0;
		},
		disable: () => {
			e = !1;
		},
		isEnabled: () => e,
	};
	return (
		C
			? w.forEach((n) => {
					t[n] = (...s) => {
						e &&
							Z(() => {
								a.console[n](`${Q}[${n}]:`, ...s);
							});
					};
				})
			: w.forEach((n) => {
					t[n] = () => {};
				}),
		t
	);
}
const p = g("logger", tt);
function et(e, t = 0) {
	return typeof e != "string" || t === 0 || e.length <= t
		? e
		: `${e.slice(0, t)}...`;
}
function nt(e, t, n) {
	try {
		Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
	} catch {
		C && p.log(`Failed to add non-enumerable property "${t}" to object`, e);
	}
}
function st() {
	const e = a;
	return e.crypto || e.msCrypto;
}
function l(e = st()) {
	let t = () => Math.random() * 16;
	try {
		if (e != null && e.randomUUID) return e.randomUUID().replace(/-/g, "");
		e != null &&
			e.getRandomValues &&
			(t = () => {
				const n = new Uint8Array(1);
				return e.getRandomValues(n), n[0];
			});
	} catch {}
	return ("10000000100040008000" + 1e11).replace(/[018]/g, (n) =>
		(n ^ ((t() & 15) >> (n / 4))).toString(16),
	);
}
const R = 1e3;
function P() {
	return Date.now() / R;
}
function rt() {
	const { performance: e } = a;
	if (!(e != null && e.now)) return P;
	const t = Date.now() - e.now(),
		n = e.timeOrigin == null ? t : e.timeOrigin;
	return () => (n + e.now()) / R;
}
const it = rt();
function ot(e, t = {}) {
	if (
		(t.user &&
			(!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
			!e.did &&
				!t.did &&
				(e.did = t.user.id || t.user.email || t.user.username)),
		(e.timestamp = t.timestamp || it()),
		t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
		t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
		t.sid && (e.sid = t.sid.length === 32 ? t.sid : l()),
		t.init !== void 0 && (e.init = t.init),
		!e.did && t.did && (e.did = `${t.did}`),
		typeof t.started == "number" && (e.started = t.started),
		e.ignoreDuration)
	)
		e.duration = void 0;
	else if (typeof t.duration == "number") e.duration = t.duration;
	else {
		const n = e.timestamp - e.started;
		e.duration = n >= 0 ? n : 0;
	}
	t.release && (e.release = t.release),
		t.environment && (e.environment = t.environment),
		!e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
		!e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
		typeof t.errors == "number" && (e.errors = t.errors),
		t.status && (e.status = t.status);
}
function T(e, t, n = 2) {
	if (!t || typeof t != "object" || n <= 0) return t;
	if (e && Object.keys(t).length === 0) return e;
	const s = { ...e };
	for (const r in t)
		Object.prototype.hasOwnProperty.call(t, r) && (s[r] = T(s[r], t[r], n - 1));
	return s;
}
const d = "_sentrySpan";
function v(e, t) {
	t ? nt(e, d, t) : delete e[d];
}
function b(e) {
	return e[d];
}
function k() {
	return l();
}
const at = 100;
class c {
	constructor() {
		(this._notifyingListeners = !1),
			(this._scopeListeners = []),
			(this._eventProcessors = []),
			(this._breadcrumbs = []),
			(this._attachments = []),
			(this._user = {}),
			(this._tags = {}),
			(this._extra = {}),
			(this._contexts = {}),
			(this._sdkProcessingMetadata = {}),
			(this._propagationContext = { traceId: k(), sampleRand: Math.random() });
	}
	clone() {
		const t = new c();
		return (
			(t._breadcrumbs = [...this._breadcrumbs]),
			(t._tags = { ...this._tags }),
			(t._extra = { ...this._extra }),
			(t._contexts = { ...this._contexts }),
			this._contexts.flags &&
				(t._contexts.flags = { values: [...this._contexts.flags.values] }),
			(t._user = this._user),
			(t._level = this._level),
			(t._session = this._session),
			(t._transactionName = this._transactionName),
			(t._fingerprint = this._fingerprint),
			(t._eventProcessors = [...this._eventProcessors]),
			(t._attachments = [...this._attachments]),
			(t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
			(t._propagationContext = { ...this._propagationContext }),
			(t._client = this._client),
			(t._lastEventId = this._lastEventId),
			v(t, b(this)),
			t
		);
	}
	setClient(t) {
		this._client = t;
	}
	setLastEventId(t) {
		this._lastEventId = t;
	}
	getClient() {
		return this._client;
	}
	lastEventId() {
		return this._lastEventId;
	}
	addScopeListener(t) {
		this._scopeListeners.push(t);
	}
	addEventProcessor(t) {
		return this._eventProcessors.push(t), this;
	}
	setUser(t) {
		return (
			(this._user = t || {
				email: void 0,
				id: void 0,
				ip_address: void 0,
				username: void 0,
			}),
			this._session && ot(this._session, { user: t }),
			this._notifyScopeListeners(),
			this
		);
	}
	getUser() {
		return this._user;
	}
	setTags(t) {
		return (
			(this._tags = { ...this._tags, ...t }), this._notifyScopeListeners(), this
		);
	}
	setTag(t, n) {
		return (
			(this._tags = { ...this._tags, [t]: n }),
			this._notifyScopeListeners(),
			this
		);
	}
	setExtras(t) {
		return (
			(this._extra = { ...this._extra, ...t }),
			this._notifyScopeListeners(),
			this
		);
	}
	setExtra(t, n) {
		return (
			(this._extra = { ...this._extra, [t]: n }),
			this._notifyScopeListeners(),
			this
		);
	}
	setFingerprint(t) {
		return (this._fingerprint = t), this._notifyScopeListeners(), this;
	}
	setLevel(t) {
		return (this._level = t), this._notifyScopeListeners(), this;
	}
	setTransactionName(t) {
		return (this._transactionName = t), this._notifyScopeListeners(), this;
	}
	setContext(t, n) {
		return (
			n === null ? delete this._contexts[t] : (this._contexts[t] = n),
			this._notifyScopeListeners(),
			this
		);
	}
	setSession(t) {
		return (
			t ? (this._session = t) : delete this._session,
			this._notifyScopeListeners(),
			this
		);
	}
	getSession() {
		return this._session;
	}
	update(t) {
		if (!t) return this;
		const n = typeof t == "function" ? t(this) : t,
			s = n instanceof c ? n.getScopeData() : X(n) ? t : void 0,
			{
				tags: r,
				extra: o,
				user: f,
				contexts: D,
				level: m,
				fingerprint: S = [],
				propagationContext: y,
			} = s || {};
		return (
			(this._tags = { ...this._tags, ...r }),
			(this._extra = { ...this._extra, ...o }),
			(this._contexts = { ...this._contexts, ...D }),
			f && Object.keys(f).length && (this._user = f),
			m && (this._level = m),
			S.length && (this._fingerprint = S),
			y && (this._propagationContext = y),
			this
		);
	}
	clear() {
		return (
			(this._breadcrumbs = []),
			(this._tags = {}),
			(this._extra = {}),
			(this._user = {}),
			(this._contexts = {}),
			(this._level = void 0),
			(this._transactionName = void 0),
			(this._fingerprint = void 0),
			(this._session = void 0),
			v(this, void 0),
			(this._attachments = []),
			this.setPropagationContext({ traceId: k(), sampleRand: Math.random() }),
			this._notifyScopeListeners(),
			this
		);
	}
	addBreadcrumb(t, n) {
		var o;
		const s = typeof n == "number" ? n : at;
		if (s <= 0) return this;
		const r = {
			timestamp: P(),
			...t,
			message: t.message ? et(t.message, 2048) : t.message,
		};
		return (
			this._breadcrumbs.push(r),
			this._breadcrumbs.length > s &&
				((this._breadcrumbs = this._breadcrumbs.slice(-s)),
				(o = this._client) == null ||
					o.recordDroppedEvent("buffer_overflow", "log_item")),
			this._notifyScopeListeners(),
			this
		);
	}
	getLastBreadcrumb() {
		return this._breadcrumbs[this._breadcrumbs.length - 1];
	}
	clearBreadcrumbs() {
		return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
	}
	addAttachment(t) {
		return this._attachments.push(t), this;
	}
	clearAttachments() {
		return (this._attachments = []), this;
	}
	getScopeData() {
		return {
			breadcrumbs: this._breadcrumbs,
			attachments: this._attachments,
			contexts: this._contexts,
			tags: this._tags,
			extra: this._extra,
			user: this._user,
			level: this._level,
			fingerprint: this._fingerprint || [],
			eventProcessors: this._eventProcessors,
			propagationContext: this._propagationContext,
			sdkProcessingMetadata: this._sdkProcessingMetadata,
			transactionName: this._transactionName,
			span: b(this),
		};
	}
	setSDKProcessingMetadata(t) {
		return (
			(this._sdkProcessingMetadata = T(this._sdkProcessingMetadata, t, 2)), this
		);
	}
	setPropagationContext(t) {
		return (this._propagationContext = t), this;
	}
	getPropagationContext() {
		return this._propagationContext;
	}
	captureException(t, n) {
		const s = (n == null ? void 0 : n.event_id) || l();
		if (!this._client)
			return (
				p.warn("No client configured on scope - will not capture exception!"), s
			);
		const r = new Error("Sentry syntheticException");
		return (
			this._client.captureException(
				t,
				{ originalException: t, syntheticException: r, ...n, event_id: s },
				this,
			),
			s
		);
	}
	captureMessage(t, n, s) {
		const r = (s == null ? void 0 : s.event_id) || l();
		if (!this._client)
			return (
				p.warn("No client configured on scope - will not capture message!"), r
			);
		const o = new Error(t);
		return (
			this._client.captureMessage(
				t,
				n,
				{ originalException: t, syntheticException: o, ...s, event_id: r },
				this,
			),
			r
		);
	}
	captureEvent(t, n) {
		const s = (n == null ? void 0 : n.event_id) || l();
		return this._client
			? (this._client.captureEvent(t, { ...n, event_id: s }, this), s)
			: (p.warn("No client configured on scope - will not capture event!"), s);
	}
	_notifyScopeListeners() {
		this._notifyingListeners ||
			((this._notifyingListeners = !0),
			this._scopeListeners.forEach((t) => {
				t(this);
			}),
			(this._notifyingListeners = !1));
	}
}
function ct() {
	return g("defaultCurrentScope", () => new c());
}
function ut() {
	return g("defaultIsolationScope", () => new c());
}
class ht {
	constructor(t, n) {
		let s;
		t ? (s = t) : (s = new c());
		let r;
		n ? (r = n) : (r = new c()),
			(this._stack = [{ scope: s }]),
			(this._isolationScope = r);
	}
	withScope(t) {
		const n = this._pushScope();
		let s;
		try {
			s = t(n);
		} catch (r) {
			throw (this._popScope(), r);
		}
		return q(s)
			? s.then(
					(r) => (this._popScope(), r),
					(r) => {
						throw (this._popScope(), r);
					},
				)
			: (this._popScope(), s);
	}
	getClient() {
		return this.getStackTop().client;
	}
	getScope() {
		return this.getStackTop().scope;
	}
	getIsolationScope() {
		return this._isolationScope;
	}
	getStackTop() {
		return this._stack[this._stack.length - 1];
	}
	_pushScope() {
		const t = this.getScope().clone();
		return this._stack.push({ client: this.getClient(), scope: t }), t;
	}
	_popScope() {
		return this._stack.length <= 1 ? !1 : !!this._stack.pop();
	}
}
function u() {
	const e = I(),
		t = _(e);
	return (t.stack = t.stack || new ht(ct(), ut()));
}
function lt(e) {
	return u().withScope(e);
}
function pt(e, t) {
	const n = u();
	return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function L(e) {
	return u().withScope(() => e(u().getIsolationScope()));
}
function ft() {
	return {
		withIsolationScope: L,
		withScope: lt,
		withSetScope: pt,
		withSetIsolationScope: (e, t) => L(t),
		getCurrentScope: () => u().getScope(),
		getIsolationScope: () => u().getIsolationScope(),
	};
}
function dt(e) {
	const t = _(e);
	return t.acs ? t.acs : ft();
}
function _t() {
	const e = I();
	return dt(e).getCurrentScope();
}
function gt(e, t) {
	return _t().captureException(e, void 0);
}
const mt = "/assets/splide.min-D7wrQ6zr.css",
	St = "/assets/raleway-v28-latin-600-C_DuyM2l.woff",
	yt = "/assets/raleway-v28-latin-600-qlcT-kco.woff2",
	wt = "/assets/raleway-v28-latin-800-CNoFq940.woff",
	Et = "/assets/raleway-v28-latin-800-GcJccCw7.woff2",
	vt = "/assets/raleway-v28-latin-regular-D2N-7lIF.woff",
	bt = "/assets/raleway-v28-latin-regular-D4TnAZR_.woff2",
	kt = "/assets/main-BhZXxUWK.css";
function Lt(e) {
	let { i18n: t } = N();
	x.useEffect(() => {
		t.language !== e && t.changeLanguage(e);
	}, [e, t]);
}
const Nt = () => [
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
		{ name: "theme-color", content: "#0F0823" },
		{ property: "og:image", content: "https://jocker.dev/og-image.png" },
		{
			property: "og:image:secure_url",
			content: "https://jocker.dev/og-image.png",
		},
		{ property: "og:image:type", content: "image/png" },
		{ property: "og:image:width", content: "320" },
		{ property: "og:image:height", content: "320" },
		{
			"script:ld+json": {
				"@context": "http://schema.org",
				"@type": "Organization",
				name: "Christian Jöcker - Freelance Full-Stack Developer and UX/UI designer",
				url: "https://jocker.dev",
				logo: "https://jocker.dev/favicons/android-chrome-256x256.png",
			},
		},
	],
	Ot = () => [
		{ rel: "stylesheet", href: kt },
		{ rel: "stylesheet", href: mt },
		{
			rel: "preload",
			as: "font",
			href: bt,
			type: "font/woff2",
			crossOrigin: "anonymous",
		},
		{
			rel: "preload",
			as: "font",
			href: vt,
			type: "font/woff",
			crossOrigin: "anonymous",
		},
		{
			rel: "preload",
			as: "font",
			href: yt,
			type: "font/woff2",
			crossOrigin: "anonymous",
		},
		{
			rel: "preload",
			as: "font",
			href: St,
			type: "font/woff",
			crossOrigin: "anonymous",
		},
		{
			rel: "preload",
			as: "font",
			href: Et,
			type: "font/woff2",
			crossOrigin: "anonymous",
		},
		{
			rel: "preload",
			as: "font",
			href: wt,
			type: "font/woff",
			crossOrigin: "anonymous",
		},
		{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
	],
	At = { i18n: ["translation"] };
function xt() {
	const e = W();
	return (
		x.useEffect(() => {
			const t = !location.hostname.includes("jocker.dev"),
				n = globalThis.localStorage.getItem(K);
			e &&
				!t &&
				!n &&
				H.init("phc_zJ008UtaAYRQuW1Q9zLwe3LiC2nK573C1gxVsoHjKQ8", {
					api_host: "https://eu.i.posthog.com",
					person_profiles: "always",
					persistence: "memory",
				});
		}, [e]),
		null
	);
}
const Mt = O(function () {
		const t = M(),
			n = (t == null ? void 0 : t.locale) ?? $;
		return (
			z(n),
			Lt(n),
			i.jsxs("html", {
				lang: n,
				children: [
					i.jsxs("head", { children: [i.jsx(j, {}), i.jsx(F, {})] }),
					i.jsxs("body", {
						children: [i.jsx(U, {}), i.jsx(B, {}), i.jsx(Y, {}), i.jsx(xt, {})],
					}),
				],
			})
		);
	}),
	jt = A(function ({ error: t }) {
		let n = "Oops!",
			s = "An unexpected error occurred.",
			r;
		return (
			G(t)
				? ((n = t.status === 404 ? "404" : "Error"),
					(s =
						t.status === 404
							? "The requested page could not be found."
							: t.statusText || s))
				: t && t instanceof Error && gt(t),
			i.jsxs("main", {
				children: [
					i.jsx("h1", { children: n }),
					i.jsx("p", { children: s }),
					r,
				],
			})
		);
	});
export {
	jt as ErrorBoundary,
	Mt as default,
	At as handle,
	Ot as links,
	Nt as meta,
};

//# debugId=02a18ca1-eec3-54f1-af02-0e740593a145
