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
			(e._sentryDebugIds[n] = "4707ae4b-ab80-5acd-bb9a-8d21ca236169"));
	} catch (e) {}
})();
import {
	r as Cd,
	s as o0,
	a as d0,
	b as Xt,
	I as h0,
	i as Bd,
	u as g0,
	F as m0,
	R as y0,
	c as v0,
	d as p0,
	e as S0,
	g as b0,
	f as O0,
	h as T0,
	j as x0,
	k as E0,
	l as A0,
	m as D0,
	n as z0,
	o as M0,
	p as oc,
} from "./chunk-D4RADZKF-DVqrdyfo.js";
import { i as R0 } from "./i18n-CcYMxFnS.js";
import "./es-U_uln9Pb.js";
var dc = { exports: {} },
	bu = {},
	hc = { exports: {} },
	gc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od;
function U0() {
	return (
		od ||
			((od = 1),
			(function (d) {
				function i(D, N) {
					var Y = D.length;
					D.push(N);
					t: for (; 0 < Y; ) {
						var I = (Y - 1) >>> 1,
							at = D[I];
						if (0 < r(at, N)) (D[I] = N), (D[Y] = at), (Y = I);
						else break t;
					}
				}
				function s(D) {
					return D.length === 0 ? null : D[0];
				}
				function f(D) {
					if (D.length === 0) return null;
					var N = D[0],
						Y = D.pop();
					if (Y !== N) {
						D[0] = Y;
						t: for (var I = 0, at = D.length, tt = at >>> 1; I < tt; ) {
							var W = 2 * (I + 1) - 1,
								k = D[W],
								yt = W + 1,
								Pt = D[yt];
							if (0 > r(k, Y))
								yt < at && 0 > r(Pt, k)
									? ((D[I] = Pt), (D[yt] = Y), (I = yt))
									: ((D[I] = k), (D[W] = Y), (I = W));
							else if (yt < at && 0 > r(Pt, Y))
								(D[I] = Pt), (D[yt] = Y), (I = yt);
							else break t;
						}
					}
					return N;
				}
				function r(D, N) {
					var Y = D.sortIndex - N.sortIndex;
					return Y !== 0 ? Y : D.id - N.id;
				}
				if (
					((d.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var h = performance;
					d.unstable_now = function () {
						return h.now();
					};
				} else {
					var v = Date,
						S = v.now();
					d.unstable_now = function () {
						return v.now() - S;
					};
				}
				var p = [],
					m = [],
					A = 1,
					U = null,
					_ = 3,
					L = !1,
					H = !1,
					J = !1,
					st = !1,
					Yt = typeof setTimeout == "function" ? setTimeout : null,
					Dt = typeof clearTimeout == "function" ? clearTimeout : null,
					mt = typeof setImmediate < "u" ? setImmediate : null;
				function ot(D) {
					for (var N = s(m); N !== null; ) {
						if (N.callback === null) f(m);
						else if (N.startTime <= D)
							f(m), (N.sortIndex = N.expirationTime), i(p, N);
						else break;
						N = s(m);
					}
				}
				function Nt(D) {
					if (((J = !1), ot(D), !H))
						if (s(p) !== null) (H = !0), Vt || ((Vt = !0), wt());
						else {
							var N = s(m);
							N !== null && ce(Nt, N.startTime - D);
						}
				}
				var Vt = !1,
					xt = -1,
					_t = 5,
					St = -1;
				function bt() {
					return st ? !0 : !(d.unstable_now() - St < _t);
				}
				function Ve() {
					if (((st = !1), Vt)) {
						var D = d.unstable_now();
						St = D;
						var N = !0;
						try {
							t: {
								(H = !1), J && ((J = !1), Dt(xt), (xt = -1)), (L = !0);
								var Y = _;
								try {
									e: {
										for (
											ot(D), U = s(p);
											U !== null && !(U.expirationTime > D && bt());

										) {
											var I = U.callback;
											if (typeof I == "function") {
												(U.callback = null), (_ = U.priorityLevel);
												var at = I(U.expirationTime <= D);
												if (((D = d.unstable_now()), typeof at == "function")) {
													(U.callback = at), ot(D), (N = !0);
													break e;
												}
												U === s(p) && f(p), ot(D);
											} else f(p);
											U = s(p);
										}
										if (U !== null) N = !0;
										else {
											var tt = s(m);
											tt !== null && ce(Nt, tt.startTime - D), (N = !1);
										}
									}
									break t;
								} finally {
									(U = null), (_ = Y), (L = !1);
								}
								N = void 0;
							}
						} finally {
							N ? wt() : (Vt = !1);
						}
					}
				}
				var wt;
				if (typeof mt == "function")
					wt = function () {
						mt(Ve);
					};
				else if (typeof MessageChannel < "u") {
					var Zt = new MessageChannel(),
						Ht = Zt.port2;
					(Zt.port1.onmessage = Ve),
						(wt = function () {
							Ht.postMessage(null);
						});
				} else
					wt = function () {
						Yt(Ve, 0);
					};
				function ce(D, N) {
					xt = Yt(function () {
						D(d.unstable_now());
					}, N);
				}
				(d.unstable_IdlePriority = 5),
					(d.unstable_ImmediatePriority = 1),
					(d.unstable_LowPriority = 4),
					(d.unstable_NormalPriority = 3),
					(d.unstable_Profiling = null),
					(d.unstable_UserBlockingPriority = 2),
					(d.unstable_cancelCallback = function (D) {
						D.callback = null;
					}),
					(d.unstable_forceFrameRate = function (D) {
						0 > D || 125 < D
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
								)
							: (_t = 0 < D ? Math.floor(1e3 / D) : 5);
					}),
					(d.unstable_getCurrentPriorityLevel = function () {
						return _;
					}),
					(d.unstable_next = function (D) {
						switch (_) {
							case 1:
							case 2:
							case 3:
								var N = 3;
								break;
							default:
								N = _;
						}
						var Y = _;
						_ = N;
						try {
							return D();
						} finally {
							_ = Y;
						}
					}),
					(d.unstable_requestPaint = function () {
						st = !0;
					}),
					(d.unstable_runWithPriority = function (D, N) {
						switch (D) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								D = 3;
						}
						var Y = _;
						_ = D;
						try {
							return N();
						} finally {
							_ = Y;
						}
					}),
					(d.unstable_scheduleCallback = function (D, N, Y) {
						var I = d.unstable_now();
						switch (
							(typeof Y == "object" && Y !== null
								? ((Y = Y.delay),
									(Y = typeof Y == "number" && 0 < Y ? I + Y : I))
								: (Y = I),
							D)
						) {
							case 1:
								var at = -1;
								break;
							case 2:
								at = 250;
								break;
							case 5:
								at = 1073741823;
								break;
							case 4:
								at = 1e4;
								break;
							default:
								at = 5e3;
						}
						return (
							(at = Y + at),
							(D = {
								id: A++,
								callback: N,
								priorityLevel: D,
								startTime: Y,
								expirationTime: at,
								sortIndex: -1,
							}),
							Y > I
								? ((D.sortIndex = Y),
									i(m, D),
									s(p) === null &&
										D === s(m) &&
										(J ? (Dt(xt), (xt = -1)) : (J = !0), ce(Nt, Y - I)))
								: ((D.sortIndex = at),
									i(p, D),
									H || L || ((H = !0), Vt || ((Vt = !0), wt()))),
							D
						);
					}),
					(d.unstable_shouldYield = bt),
					(d.unstable_wrapCallback = function (D) {
						var N = _;
						return function () {
							var Y = _;
							_ = N;
							try {
								return D.apply(this, arguments);
							} finally {
								_ = Y;
							}
						};
					});
			})(gc)),
		gc
	);
}
var dd;
function N0() {
	return dd || ((dd = 1), (hc.exports = U0())), hc.exports;
}
var mc = { exports: {} },
	Qt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function _0() {
	if (hd) return Qt;
	hd = 1;
	var d = Cd();
	function i(p) {
		var m = "https://react.dev/errors/" + p;
		if (1 < arguments.length) {
			m += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var A = 2; A < arguments.length; A++)
				m += "&args[]=" + encodeURIComponent(arguments[A]);
		}
		return (
			"Minified React error #" +
			p +
			"; visit " +
			m +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function s() {}
	var f = {
			d: {
				f: s,
				r: function () {
					throw Error(i(522));
				},
				D: s,
				C: s,
				L: s,
				m: s,
				X: s,
				S: s,
				M: s,
			},
			p: 0,
			findDOMNode: null,
		},
		r = Symbol.for("react.portal");
	function h(p, m, A) {
		var U =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: r,
			key: U == null ? null : "" + U,
			children: p,
			containerInfo: m,
			implementation: A,
		};
	}
	var v = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function S(p, m) {
		if (p === "font") return "";
		if (typeof m == "string") return m === "use-credentials" ? m : "";
	}
	return (
		(Qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
		(Qt.createPortal = function (p, m) {
			var A =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
				throw Error(i(299));
			return h(p, m, null, A);
		}),
		(Qt.flushSync = function (p) {
			var m = v.T,
				A = f.p;
			try {
				if (((v.T = null), (f.p = 2), p)) return p();
			} finally {
				(v.T = m), (f.p = A), f.d.f();
			}
		}),
		(Qt.preconnect = function (p, m) {
			typeof p == "string" &&
				(m
					? ((m = m.crossOrigin),
						(m =
							typeof m == "string"
								? m === "use-credentials"
									? m
									: ""
								: void 0))
					: (m = null),
				f.d.C(p, m));
		}),
		(Qt.prefetchDNS = function (p) {
			typeof p == "string" && f.d.D(p);
		}),
		(Qt.preinit = function (p, m) {
			if (typeof p == "string" && m && typeof m.as == "string") {
				var A = m.as,
					U = S(A, m.crossOrigin),
					_ = typeof m.integrity == "string" ? m.integrity : void 0,
					L = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
				A === "style"
					? f.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
							crossOrigin: U,
							integrity: _,
							fetchPriority: L,
						})
					: A === "script" &&
						f.d.X(p, {
							crossOrigin: U,
							integrity: _,
							fetchPriority: L,
							nonce: typeof m.nonce == "string" ? m.nonce : void 0,
						});
			}
		}),
		(Qt.preinitModule = function (p, m) {
			if (typeof p == "string")
				if (typeof m == "object" && m !== null) {
					if (m.as == null || m.as === "script") {
						var A = S(m.as, m.crossOrigin);
						f.d.M(p, {
							crossOrigin: A,
							integrity: typeof m.integrity == "string" ? m.integrity : void 0,
							nonce: typeof m.nonce == "string" ? m.nonce : void 0,
						});
					}
				} else m == null && f.d.M(p);
		}),
		(Qt.preload = function (p, m) {
			if (
				typeof p == "string" &&
				typeof m == "object" &&
				m !== null &&
				typeof m.as == "string"
			) {
				var A = m.as,
					U = S(A, m.crossOrigin);
				f.d.L(p, A, {
					crossOrigin: U,
					integrity: typeof m.integrity == "string" ? m.integrity : void 0,
					nonce: typeof m.nonce == "string" ? m.nonce : void 0,
					type: typeof m.type == "string" ? m.type : void 0,
					fetchPriority:
						typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
					referrerPolicy:
						typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
					imageSrcSet:
						typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
					imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
					media: typeof m.media == "string" ? m.media : void 0,
				});
			}
		}),
		(Qt.preloadModule = function (p, m) {
			if (typeof p == "string")
				if (m) {
					var A = S(m.as, m.crossOrigin);
					f.d.m(p, {
						as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
						crossOrigin: A,
						integrity: typeof m.integrity == "string" ? m.integrity : void 0,
					});
				} else f.d.m(p);
		}),
		(Qt.requestFormReset = function (p) {
			f.d.r(p);
		}),
		(Qt.unstable_batchedUpdates = function (p, m) {
			return p(m);
		}),
		(Qt.useFormState = function (p, m, A) {
			return v.H.useFormState(p, m, A);
		}),
		(Qt.useFormStatus = function () {
			return v.H.useHostTransitionStatus();
		}),
		(Qt.version = "19.1.0"),
		Qt
	);
}
var gd;
function qd() {
	if (gd) return mc.exports;
	gd = 1;
	function d() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
			} catch (i) {
				console.error(i);
			}
	}
	return d(), (mc.exports = _0()), mc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function H0() {
	if (md) return bu;
	md = 1;
	var d = N0(),
		i = Cd(),
		s = qd();
	function f(t) {
		var e = "https://react.dev/errors/" + t;
		if (1 < arguments.length) {
			e += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var l = 2; l < arguments.length; l++)
				e += "&args[]=" + encodeURIComponent(arguments[l]);
		}
		return (
			"Minified React error #" +
			t +
			"; visit " +
			e +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function r(t) {
		return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
	}
	function h(t) {
		var e = t,
			l = t;
		if (t.alternate) for (; e.return; ) e = e.return;
		else {
			t = e;
			do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
			while (t);
		}
		return e.tag === 3 ? l : null;
	}
	function v(t) {
		if (t.tag === 13) {
			var e = t.memoizedState;
			if (
				(e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
				e !== null)
			)
				return e.dehydrated;
		}
		return null;
	}
	function S(t) {
		if (h(t) !== t) throw Error(f(188));
	}
	function p(t) {
		var e = t.alternate;
		if (!e) {
			if (((e = h(t)), e === null)) throw Error(f(188));
			return e !== t ? null : t;
		}
		for (var l = t, a = e; ; ) {
			var u = l.return;
			if (u === null) break;
			var n = u.alternate;
			if (n === null) {
				if (((a = u.return), a !== null)) {
					l = a;
					continue;
				}
				break;
			}
			if (u.child === n.child) {
				for (n = u.child; n; ) {
					if (n === l) return S(u), t;
					if (n === a) return S(u), e;
					n = n.sibling;
				}
				throw Error(f(188));
			}
			if (l.return !== a.return) (l = u), (a = n);
			else {
				for (var c = !1, o = u.child; o; ) {
					if (o === l) {
						(c = !0), (l = u), (a = n);
						break;
					}
					if (o === a) {
						(c = !0), (a = u), (l = n);
						break;
					}
					o = o.sibling;
				}
				if (!c) {
					for (o = n.child; o; ) {
						if (o === l) {
							(c = !0), (l = n), (a = u);
							break;
						}
						if (o === a) {
							(c = !0), (a = n), (l = u);
							break;
						}
						o = o.sibling;
					}
					if (!c) throw Error(f(189));
				}
			}
			if (l.alternate !== a) throw Error(f(190));
		}
		if (l.tag !== 3) throw Error(f(188));
		return l.stateNode.current === l ? t : e;
	}
	function m(t) {
		var e = t.tag;
		if (e === 5 || e === 26 || e === 27 || e === 6) return t;
		for (t = t.child; t !== null; ) {
			if (((e = m(t)), e !== null)) return e;
			t = t.sibling;
		}
		return null;
	}
	var A = Object.assign,
		U = Symbol.for("react.element"),
		_ = Symbol.for("react.transitional.element"),
		L = Symbol.for("react.portal"),
		H = Symbol.for("react.fragment"),
		J = Symbol.for("react.strict_mode"),
		st = Symbol.for("react.profiler"),
		Yt = Symbol.for("react.provider"),
		Dt = Symbol.for("react.consumer"),
		mt = Symbol.for("react.context"),
		ot = Symbol.for("react.forward_ref"),
		Nt = Symbol.for("react.suspense"),
		Vt = Symbol.for("react.suspense_list"),
		xt = Symbol.for("react.memo"),
		_t = Symbol.for("react.lazy"),
		St = Symbol.for("react.activity"),
		bt = Symbol.for("react.memo_cache_sentinel"),
		Ve = Symbol.iterator;
	function wt(t) {
		return t === null || typeof t != "object"
			? null
			: ((t = (Ve && t[Ve]) || t["@@iterator"]),
				typeof t == "function" ? t : null);
	}
	var Zt = Symbol.for("react.client.reference");
	function Ht(t) {
		if (t == null) return null;
		if (typeof t == "function")
			return t.$$typeof === Zt ? null : t.displayName || t.name || null;
		if (typeof t == "string") return t;
		switch (t) {
			case H:
				return "Fragment";
			case st:
				return "Profiler";
			case J:
				return "StrictMode";
			case Nt:
				return "Suspense";
			case Vt:
				return "SuspenseList";
			case St:
				return "Activity";
		}
		if (typeof t == "object")
			switch (t.$$typeof) {
				case L:
					return "Portal";
				case mt:
					return (t.displayName || "Context") + ".Provider";
				case Dt:
					return (t._context.displayName || "Context") + ".Consumer";
				case ot:
					var e = t.render;
					return (
						(t = t.displayName),
						t ||
							((t = e.displayName || e.name || ""),
							(t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
						t
					);
				case xt:
					return (
						(e = t.displayName || null), e !== null ? e : Ht(t.type) || "Memo"
					);
				case _t:
					(e = t._payload), (t = t._init);
					try {
						return Ht(t(e));
					} catch {}
			}
		return null;
	}
	var ce = Array.isArray,
		D = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		N = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		Y = { pending: !1, data: null, method: null, action: null },
		I = [],
		at = -1;
	function tt(t) {
		return { current: t };
	}
	function W(t) {
		0 > at || ((t.current = I[at]), (I[at] = null), at--);
	}
	function k(t, e) {
		at++, (I[at] = t.current), (t.current = e);
	}
	var yt = tt(null),
		Pt = tt(null),
		Ze = tt(null),
		Au = tt(null);
	function Du(t, e) {
		switch ((k(Ze, e), k(Pt, t), k(yt, null), e.nodeType)) {
			case 9:
			case 11:
				t = (t = e.documentElement) && (t = t.namespaceURI) ? jo(t) : 0;
				break;
			default:
				if (((t = e.tagName), (e = e.namespaceURI)))
					(e = jo(e)), (t = Go(e, t));
				else
					switch (t) {
						case "svg":
							t = 1;
							break;
						case "math":
							t = 2;
							break;
						default:
							t = 0;
					}
		}
		W(yt), k(yt, t);
	}
	function Hl() {
		W(yt), W(Pt), W(Ze);
	}
	function $n(t) {
		t.memoizedState !== null && k(Au, t);
		var e = yt.current,
			l = Go(e, t.type);
		e !== l && (k(Pt, t), k(yt, l));
	}
	function zu(t) {
		Pt.current === t && (W(yt), W(Pt)),
			Au.current === t && (W(Au), (mu._currentValue = Y));
	}
	var Fn = Object.prototype.hasOwnProperty,
		Wn = d.unstable_scheduleCallback,
		Pn = d.unstable_cancelCallback,
		Vd = d.unstable_shouldYield,
		Zd = d.unstable_requestPaint,
		Oe = d.unstable_now,
		Kd = d.unstable_getCurrentPriorityLevel,
		pc = d.unstable_ImmediatePriority,
		Sc = d.unstable_UserBlockingPriority,
		Mu = d.unstable_NormalPriority,
		wd = d.unstable_LowPriority,
		bc = d.unstable_IdlePriority,
		Jd = d.log,
		kd = d.unstable_setDisableYieldValue,
		xa = null,
		It = null;
	function Ke(t) {
		if (
			(typeof Jd == "function" && kd(t),
			It && typeof It.setStrictMode == "function")
		)
			try {
				It.setStrictMode(xa, t);
			} catch {}
	}
	var te = Math.clz32 ? Math.clz32 : Wd,
		$d = Math.log,
		Fd = Math.LN2;
	function Wd(t) {
		return (t >>>= 0), t === 0 ? 32 : (31 - (($d(t) / Fd) | 0)) | 0;
	}
	var Ru = 256,
		Uu = 4194304;
	function ml(t) {
		var e = t & 42;
		if (e !== 0) return e;
		switch (t & -t) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return t & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return t;
		}
	}
	function Nu(t, e, l) {
		var a = t.pendingLanes;
		if (a === 0) return 0;
		var u = 0,
			n = t.suspendedLanes,
			c = t.pingedLanes;
		t = t.warmLanes;
		var o = a & 134217727;
		return (
			o !== 0
				? ((a = o & ~n),
					a !== 0
						? (u = ml(a))
						: ((c &= o),
							c !== 0
								? (u = ml(c))
								: l || ((l = o & ~t), l !== 0 && (u = ml(l)))))
				: ((o = a & ~n),
					o !== 0
						? (u = ml(o))
						: c !== 0
							? (u = ml(c))
							: l || ((l = a & ~t), l !== 0 && (u = ml(l)))),
			u === 0
				? 0
				: e !== 0 &&
					  e !== u &&
					  (e & n) === 0 &&
					  ((n = u & -u),
					  (l = e & -e),
					  n >= l || (n === 32 && (l & 4194048) !== 0))
					? e
					: u
		);
	}
	function Ea(t, e) {
		return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
	}
	function Pd(t, e) {
		switch (t) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return e + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function Oc() {
		var t = Ru;
		return (Ru <<= 1), (Ru & 4194048) === 0 && (Ru = 256), t;
	}
	function Tc() {
		var t = Uu;
		return (Uu <<= 1), (Uu & 62914560) === 0 && (Uu = 4194304), t;
	}
	function In(t) {
		for (var e = [], l = 0; 31 > l; l++) e.push(t);
		return e;
	}
	function Aa(t, e) {
		(t.pendingLanes |= e),
			e !== 268435456 &&
				((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
	}
	function Id(t, e, l, a, u, n) {
		var c = t.pendingLanes;
		(t.pendingLanes = l),
			(t.suspendedLanes = 0),
			(t.pingedLanes = 0),
			(t.warmLanes = 0),
			(t.expiredLanes &= l),
			(t.entangledLanes &= l),
			(t.errorRecoveryDisabledLanes &= l),
			(t.shellSuspendCounter = 0);
		var o = t.entanglements,
			g = t.expirationTimes,
			T = t.hiddenUpdates;
		for (l = c & ~l; 0 < l; ) {
			var z = 31 - te(l),
				R = 1 << z;
			(o[z] = 0), (g[z] = -1);
			var x = T[z];
			if (x !== null)
				for (T[z] = null, z = 0; z < x.length; z++) {
					var E = x[z];
					E !== null && (E.lane &= -536870913);
				}
			l &= ~R;
		}
		a !== 0 && xc(t, a, 0),
			n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~e));
	}
	function xc(t, e, l) {
		(t.pendingLanes |= e), (t.suspendedLanes &= ~e);
		var a = 31 - te(e);
		(t.entangledLanes |= e),
			(t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090));
	}
	function Ec(t, e) {
		var l = (t.entangledLanes |= e);
		for (t = t.entanglements; l; ) {
			var a = 31 - te(l),
				u = 1 << a;
			(u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u);
		}
	}
	function ti(t) {
		switch (t) {
			case 2:
				t = 1;
				break;
			case 8:
				t = 4;
				break;
			case 32:
				t = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				t = 128;
				break;
			case 268435456:
				t = 134217728;
				break;
			default:
				t = 0;
		}
		return t;
	}
	function ei(t) {
		return (
			(t &= -t),
			2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function Ac() {
		var t = N.p;
		return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : nd(t.type));
	}
	function th(t, e) {
		var l = N.p;
		try {
			return (N.p = t), e();
		} finally {
			N.p = l;
		}
	}
	var we = Math.random().toString(36).slice(2),
		jt = "__reactFiber$" + we,
		Jt = "__reactProps$" + we,
		Ll = "__reactContainer$" + we,
		li = "__reactEvents$" + we,
		eh = "__reactListeners$" + we,
		lh = "__reactHandles$" + we,
		Dc = "__reactResources$" + we,
		Da = "__reactMarker$" + we;
	function ai(t) {
		delete t[jt], delete t[Jt], delete t[li], delete t[eh], delete t[lh];
	}
	function Cl(t) {
		var e = t[jt];
		if (e) return e;
		for (var l = t.parentNode; l; ) {
			if ((e = l[Ll] || l[jt])) {
				if (
					((l = e.alternate),
					e.child !== null || (l !== null && l.child !== null))
				)
					for (t = Zo(t); t !== null; ) {
						if ((l = t[jt])) return l;
						t = Zo(t);
					}
				return e;
			}
			(t = l), (l = t.parentNode);
		}
		return null;
	}
	function Bl(t) {
		if ((t = t[jt] || t[Ll])) {
			var e = t.tag;
			if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
				return t;
		}
		return null;
	}
	function za(t) {
		var e = t.tag;
		if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
		throw Error(f(33));
	}
	function ql(t) {
		var e = t[Dc];
		return (
			e ||
				(e = t[Dc] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			e
		);
	}
	function zt(t) {
		t[Da] = !0;
	}
	var zc = new Set(),
		Mc = {};
	function yl(t, e) {
		Yl(t, e), Yl(t + "Capture", e);
	}
	function Yl(t, e) {
		for (Mc[t] = e, t = 0; t < e.length; t++) zc.add(e[t]);
	}
	var ah = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
		),
		Rc = {},
		Uc = {};
	function uh(t) {
		return Fn.call(Uc, t)
			? !0
			: Fn.call(Rc, t)
				? !1
				: ah.test(t)
					? (Uc[t] = !0)
					: ((Rc[t] = !0), !1);
	}
	function _u(t, e, l) {
		if (uh(e))
			if (l === null) t.removeAttribute(e);
			else {
				switch (typeof l) {
					case "undefined":
					case "function":
					case "symbol":
						t.removeAttribute(e);
						return;
					case "boolean":
						var a = e.toLowerCase().slice(0, 5);
						if (a !== "data-" && a !== "aria-") {
							t.removeAttribute(e);
							return;
						}
				}
				t.setAttribute(e, "" + l);
			}
	}
	function Hu(t, e, l) {
		if (l === null) t.removeAttribute(e);
		else {
			switch (typeof l) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					t.removeAttribute(e);
					return;
			}
			t.setAttribute(e, "" + l);
		}
	}
	function Me(t, e, l, a) {
		if (a === null) t.removeAttribute(l);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					t.removeAttribute(l);
					return;
			}
			t.setAttributeNS(e, l, "" + a);
		}
	}
	var ui, Nc;
	function jl(t) {
		if (ui === void 0)
			try {
				throw Error();
			} catch (l) {
				var e = l.stack.trim().match(/\n( *(at )?)/);
				(ui = (e && e[1]) || ""),
					(Nc =
						-1 <
						l.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < l.stack.indexOf("@")
								? "@unknown:0:0"
								: "");
			}
		return (
			`
` +
			ui +
			t +
			Nc
		);
	}
	var ni = !1;
	function ii(t, e) {
		if (!t || ni) return "";
		ni = !0;
		var l = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function () {
					try {
						if (e) {
							var R = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(R.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(R, []);
								} catch (E) {
									var x = E;
								}
								Reflect.construct(t, [], R);
							} else {
								try {
									R.call();
								} catch (E) {
									x = E;
								}
								t.call(R.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (E) {
								x = E;
							}
							(R = t()) &&
								typeof R.catch == "function" &&
								R.catch(function () {});
						}
					} catch (E) {
						if (E && x && typeof E.stack == "string") return [E.stack, x.stack];
					}
					return [null, null];
				},
			};
			a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var u = Object.getOwnPropertyDescriptor(
				a.DetermineComponentFrameRoot,
				"name",
			);
			u &&
				u.configurable &&
				Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var n = a.DetermineComponentFrameRoot(),
				c = n[0],
				o = n[1];
			if (c && o) {
				var g = c.split(`
`),
					T = o.split(`
`);
				for (
					u = a = 0;
					a < g.length && !g[a].includes("DetermineComponentFrameRoot");

				)
					a++;
				for (; u < T.length && !T[u].includes("DetermineComponentFrameRoot"); )
					u++;
				if (a === g.length || u === T.length)
					for (
						a = g.length - 1, u = T.length - 1;
						1 <= a && 0 <= u && g[a] !== T[u];

					)
						u--;
				for (; 1 <= a && 0 <= u; a--, u--)
					if (g[a] !== T[u]) {
						if (a !== 1 || u !== 1)
							do
								if ((a--, u--, 0 > u || g[a] !== T[u])) {
									var z =
										`
` + g[a].replace(" at new ", " at ");
									return (
										t.displayName &&
											z.includes("<anonymous>") &&
											(z = z.replace("<anonymous>", t.displayName)),
										z
									);
								}
							while (1 <= a && 0 <= u);
						break;
					}
			}
		} finally {
			(ni = !1), (Error.prepareStackTrace = l);
		}
		return (l = t ? t.displayName || t.name : "") ? jl(l) : "";
	}
	function nh(t) {
		switch (t.tag) {
			case 26:
			case 27:
			case 5:
				return jl(t.type);
			case 16:
				return jl("Lazy");
			case 13:
				return jl("Suspense");
			case 19:
				return jl("SuspenseList");
			case 0:
			case 15:
				return ii(t.type, !1);
			case 11:
				return ii(t.type.render, !1);
			case 1:
				return ii(t.type, !0);
			case 31:
				return jl("Activity");
			default:
				return "";
		}
	}
	function _c(t) {
		try {
			var e = "";
			do (e += nh(t)), (t = t.return);
			while (t);
			return e;
		} catch (l) {
			return (
				`
Error generating stack: ` +
				l.message +
				`
` +
				l.stack
			);
		}
	}
	function se(t) {
		switch (typeof t) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return t;
			case "object":
				return t;
			default:
				return "";
		}
	}
	function Hc(t) {
		var e = t.type;
		return (
			(t = t.nodeName) &&
			t.toLowerCase() === "input" &&
			(e === "checkbox" || e === "radio")
		);
	}
	function ih(t) {
		var e = Hc(t) ? "checked" : "value",
			l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
			a = "" + t[e];
		if (
			!t.hasOwnProperty(e) &&
			typeof l < "u" &&
			typeof l.get == "function" &&
			typeof l.set == "function"
		) {
			var u = l.get,
				n = l.set;
			return (
				Object.defineProperty(t, e, {
					configurable: !0,
					get: function () {
						return u.call(this);
					},
					set: function (c) {
						(a = "" + c), n.call(this, c);
					},
				}),
				Object.defineProperty(t, e, { enumerable: l.enumerable }),
				{
					getValue: function () {
						return a;
					},
					setValue: function (c) {
						a = "" + c;
					},
					stopTracking: function () {
						(t._valueTracker = null), delete t[e];
					},
				}
			);
		}
	}
	function Lu(t) {
		t._valueTracker || (t._valueTracker = ih(t));
	}
	function Lc(t) {
		if (!t) return !1;
		var e = t._valueTracker;
		if (!e) return !0;
		var l = e.getValue(),
			a = "";
		return (
			t && (a = Hc(t) ? (t.checked ? "true" : "false") : t.value),
			(t = a),
			t !== l ? (e.setValue(t), !0) : !1
		);
	}
	function Cu(t) {
		if (
			((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
		)
			return null;
		try {
			return t.activeElement || t.body;
		} catch {
			return t.body;
		}
	}
	var fh = /[\n"\\]/g;
	function re(t) {
		return t.replace(fh, function (e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function fi(t, e, l, a, u, n, c, o) {
		(t.name = ""),
			c != null &&
			typeof c != "function" &&
			typeof c != "symbol" &&
			typeof c != "boolean"
				? (t.type = c)
				: t.removeAttribute("type"),
			e != null
				? c === "number"
					? ((e === 0 && t.value === "") || t.value != e) &&
						(t.value = "" + se(e))
					: t.value !== "" + se(e) && (t.value = "" + se(e))
				: (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
			e != null
				? ci(t, c, se(e))
				: l != null
					? ci(t, c, se(l))
					: a != null && t.removeAttribute("value"),
			u == null && n != null && (t.defaultChecked = !!n),
			u != null &&
				(t.checked = u && typeof u != "function" && typeof u != "symbol"),
			o != null &&
			typeof o != "function" &&
			typeof o != "symbol" &&
			typeof o != "boolean"
				? (t.name = "" + se(o))
				: t.removeAttribute("name");
	}
	function Cc(t, e, l, a, u, n, c, o) {
		if (
			(n != null &&
				typeof n != "function" &&
				typeof n != "symbol" &&
				typeof n != "boolean" &&
				(t.type = n),
			e != null || l != null)
		) {
			if (!((n !== "submit" && n !== "reset") || e != null)) return;
			(l = l != null ? "" + se(l) : ""),
				(e = e != null ? "" + se(e) : l),
				o || e === t.value || (t.value = e),
				(t.defaultValue = e);
		}
		(a = a ?? u),
			(a = typeof a != "function" && typeof a != "symbol" && !!a),
			(t.checked = o ? t.checked : !!a),
			(t.defaultChecked = !!a),
			c != null &&
				typeof c != "function" &&
				typeof c != "symbol" &&
				typeof c != "boolean" &&
				(t.name = c);
	}
	function ci(t, e, l) {
		(e === "number" && Cu(t.ownerDocument) === t) ||
			t.defaultValue === "" + l ||
			(t.defaultValue = "" + l);
	}
	function Gl(t, e, l, a) {
		if (((t = t.options), e)) {
			e = {};
			for (var u = 0; u < l.length; u++) e["$" + l[u]] = !0;
			for (l = 0; l < t.length; l++)
				(u = e.hasOwnProperty("$" + t[l].value)),
					t[l].selected !== u && (t[l].selected = u),
					u && a && (t[l].defaultSelected = !0);
		} else {
			for (l = "" + se(l), e = null, u = 0; u < t.length; u++) {
				if (t[u].value === l) {
					(t[u].selected = !0), a && (t[u].defaultSelected = !0);
					return;
				}
				e !== null || t[u].disabled || (e = t[u]);
			}
			e !== null && (e.selected = !0);
		}
	}
	function Bc(t, e, l) {
		if (
			e != null &&
			((e = "" + se(e)), e !== t.value && (t.value = e), l == null)
		) {
			t.defaultValue !== e && (t.defaultValue = e);
			return;
		}
		t.defaultValue = l != null ? "" + se(l) : "";
	}
	function qc(t, e, l, a) {
		if (e == null) {
			if (a != null) {
				if (l != null) throw Error(f(92));
				if (ce(a)) {
					if (1 < a.length) throw Error(f(93));
					a = a[0];
				}
				l = a;
			}
			l == null && (l = ""), (e = l);
		}
		(l = se(e)),
			(t.defaultValue = l),
			(a = t.textContent),
			a === l && a !== "" && a !== null && (t.value = a);
	}
	function Ql(t, e) {
		if (e) {
			var l = t.firstChild;
			if (l && l === t.lastChild && l.nodeType === 3) {
				l.nodeValue = e;
				return;
			}
		}
		t.textContent = e;
	}
	var ch = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" ",
		),
	);
	function Yc(t, e, l) {
		var a = e.indexOf("--") === 0;
		l == null || typeof l == "boolean" || l === ""
			? a
				? t.setProperty(e, "")
				: e === "float"
					? (t.cssFloat = "")
					: (t[e] = "")
			: a
				? t.setProperty(e, l)
				: typeof l != "number" || l === 0 || ch.has(e)
					? e === "float"
						? (t.cssFloat = l)
						: (t[e] = ("" + l).trim())
					: (t[e] = l + "px");
	}
	function jc(t, e, l) {
		if (e != null && typeof e != "object") throw Error(f(62));
		if (((t = t.style), l != null)) {
			for (var a in l)
				!l.hasOwnProperty(a) ||
					(e != null && e.hasOwnProperty(a)) ||
					(a.indexOf("--") === 0
						? t.setProperty(a, "")
						: a === "float"
							? (t.cssFloat = "")
							: (t[a] = ""));
			for (var u in e)
				(a = e[u]), e.hasOwnProperty(u) && l[u] !== a && Yc(t, u, a);
		} else for (var n in e) e.hasOwnProperty(n) && Yc(t, n, e[n]);
	}
	function si(t) {
		if (t.indexOf("-") === -1) return !1;
		switch (t) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var sh = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		rh =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Bu(t) {
		return rh.test("" + t)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: t;
	}
	var ri = null;
	function oi(t) {
		return (
			(t = t.target || t.srcElement || window),
			t.correspondingUseElement && (t = t.correspondingUseElement),
			t.nodeType === 3 ? t.parentNode : t
		);
	}
	var Xl = null,
		Vl = null;
	function Gc(t) {
		var e = Bl(t);
		if (e && (t = e.stateNode)) {
			var l = t[Jt] || null;
			t: switch (((t = e.stateNode), e.type)) {
				case "input":
					if (
						(fi(
							t,
							l.value,
							l.defaultValue,
							l.defaultValue,
							l.checked,
							l.defaultChecked,
							l.type,
							l.name,
						),
						(e = l.name),
						l.type === "radio" && e != null)
					) {
						for (l = t; l.parentNode; ) l = l.parentNode;
						for (
							l = l.querySelectorAll(
								'input[name="' + re("" + e) + '"][type="radio"]',
							),
								e = 0;
							e < l.length;
							e++
						) {
							var a = l[e];
							if (a !== t && a.form === t.form) {
								var u = a[Jt] || null;
								if (!u) throw Error(f(90));
								fi(
									a,
									u.value,
									u.defaultValue,
									u.defaultValue,
									u.checked,
									u.defaultChecked,
									u.type,
									u.name,
								);
							}
						}
						for (e = 0; e < l.length; e++)
							(a = l[e]), a.form === t.form && Lc(a);
					}
					break t;
				case "textarea":
					Bc(t, l.value, l.defaultValue);
					break t;
				case "select":
					(e = l.value), e != null && Gl(t, !!l.multiple, e, !1);
			}
		}
	}
	var di = !1;
	function Qc(t, e, l) {
		if (di) return t(e, l);
		di = !0;
		try {
			var a = t(e);
			return a;
		} finally {
			if (
				((di = !1),
				(Xl !== null || Vl !== null) &&
					(Tn(), Xl && ((e = Xl), (t = Vl), (Vl = Xl = null), Gc(e), t)))
			)
				for (e = 0; e < t.length; e++) Gc(t[e]);
		}
	}
	function Ma(t, e) {
		var l = t.stateNode;
		if (l === null) return null;
		var a = l[Jt] || null;
		if (a === null) return null;
		l = a[e];
		t: switch (e) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(a = !a.disabled) ||
					((t = t.type),
					(a = !(
						t === "button" ||
						t === "input" ||
						t === "select" ||
						t === "textarea"
					))),
					(t = !a);
				break t;
			default:
				t = !1;
		}
		if (t) return null;
		if (l && typeof l != "function") throw Error(f(231, e, typeof l));
		return l;
	}
	var Re = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		hi = !1;
	if (Re)
		try {
			var Ra = {};
			Object.defineProperty(Ra, "passive", {
				get: function () {
					hi = !0;
				},
			}),
				window.addEventListener("test", Ra, Ra),
				window.removeEventListener("test", Ra, Ra);
		} catch {
			hi = !1;
		}
	var Je = null,
		gi = null,
		qu = null;
	function Xc() {
		if (qu) return qu;
		var t,
			e = gi,
			l = e.length,
			a,
			u = "value" in Je ? Je.value : Je.textContent,
			n = u.length;
		for (t = 0; t < l && e[t] === u[t]; t++);
		var c = l - t;
		for (a = 1; a <= c && e[l - a] === u[n - a]; a++);
		return (qu = u.slice(t, 1 < a ? 1 - a : void 0));
	}
	function Yu(t) {
		var e = t.keyCode;
		return (
			"charCode" in t
				? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
				: (t = e),
			t === 10 && (t = 13),
			32 <= t || t === 13 ? t : 0
		);
	}
	function ju() {
		return !0;
	}
	function Vc() {
		return !1;
	}
	function kt(t) {
		function e(l, a, u, n, c) {
			(this._reactName = l),
				(this._targetInst = u),
				(this.type = a),
				(this.nativeEvent = n),
				(this.target = c),
				(this.currentTarget = null);
			for (var o in t)
				t.hasOwnProperty(o) && ((l = t[o]), (this[o] = l ? l(n) : n[o]));
			return (
				(this.isDefaultPrevented = (
					n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
				)
					? ju
					: Vc),
				(this.isPropagationStopped = Vc),
				this
			);
		}
		return (
			A(e.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var l = this.nativeEvent;
					l &&
						(l.preventDefault
							? l.preventDefault()
							: typeof l.returnValue != "unknown" && (l.returnValue = !1),
						(this.isDefaultPrevented = ju));
				},
				stopPropagation: function () {
					var l = this.nativeEvent;
					l &&
						(l.stopPropagation
							? l.stopPropagation()
							: typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
						(this.isPropagationStopped = ju));
				},
				persist: function () {},
				isPersistent: ju,
			}),
			e
		);
	}
	var vl = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (t) {
				return t.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Gu = kt(vl),
		Ua = A({}, vl, { view: 0, detail: 0 }),
		oh = kt(Ua),
		mi,
		yi,
		Na,
		Qu = A({}, Ua, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: pi,
			button: 0,
			buttons: 0,
			relatedTarget: function (t) {
				return t.relatedTarget === void 0
					? t.fromElement === t.srcElement
						? t.toElement
						: t.fromElement
					: t.relatedTarget;
			},
			movementX: function (t) {
				return "movementX" in t
					? t.movementX
					: (t !== Na &&
							(Na && t.type === "mousemove"
								? ((mi = t.screenX - Na.screenX), (yi = t.screenY - Na.screenY))
								: (yi = mi = 0),
							(Na = t)),
						mi);
			},
			movementY: function (t) {
				return "movementY" in t ? t.movementY : yi;
			},
		}),
		Zc = kt(Qu),
		dh = A({}, Qu, { dataTransfer: 0 }),
		hh = kt(dh),
		gh = A({}, Ua, { relatedTarget: 0 }),
		vi = kt(gh),
		mh = A({}, vl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		yh = kt(mh),
		vh = A({}, vl, {
			clipboardData: function (t) {
				return "clipboardData" in t ? t.clipboardData : window.clipboardData;
			},
		}),
		ph = kt(vh),
		Sh = A({}, vl, { data: 0 }),
		Kc = kt(Sh),
		bh = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		Oh = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		Th = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function xh(t) {
		var e = this.nativeEvent;
		return e.getModifierState
			? e.getModifierState(t)
			: (t = Th[t])
				? !!e[t]
				: !1;
	}
	function pi() {
		return xh;
	}
	var Eh = A({}, Ua, {
			key: function (t) {
				if (t.key) {
					var e = bh[t.key] || t.key;
					if (e !== "Unidentified") return e;
				}
				return t.type === "keypress"
					? ((t = Yu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
					: t.type === "keydown" || t.type === "keyup"
						? Oh[t.keyCode] || "Unidentified"
						: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: pi,
			charCode: function (t) {
				return t.type === "keypress" ? Yu(t) : 0;
			},
			keyCode: function (t) {
				return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
			},
			which: function (t) {
				return t.type === "keypress"
					? Yu(t)
					: t.type === "keydown" || t.type === "keyup"
						? t.keyCode
						: 0;
			},
		}),
		Ah = kt(Eh),
		Dh = A({}, Qu, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		wc = kt(Dh),
		zh = A({}, Ua, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: pi,
		}),
		Mh = kt(zh),
		Rh = A({}, vl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Uh = kt(Rh),
		Nh = A({}, Qu, {
			deltaX: function (t) {
				return "deltaX" in t
					? t.deltaX
					: "wheelDeltaX" in t
						? -t.wheelDeltaX
						: 0;
			},
			deltaY: function (t) {
				return "deltaY" in t
					? t.deltaY
					: "wheelDeltaY" in t
						? -t.wheelDeltaY
						: "wheelDelta" in t
							? -t.wheelDelta
							: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		_h = kt(Nh),
		Hh = A({}, vl, { newState: 0, oldState: 0 }),
		Lh = kt(Hh),
		Ch = [9, 13, 27, 32],
		Si = Re && "CompositionEvent" in window,
		_a = null;
	Re && "documentMode" in document && (_a = document.documentMode);
	var Bh = Re && "TextEvent" in window && !_a,
		Jc = Re && (!Si || (_a && 8 < _a && 11 >= _a)),
		kc = " ",
		$c = !1;
	function Fc(t, e) {
		switch (t) {
			case "keyup":
				return Ch.indexOf(e.keyCode) !== -1;
			case "keydown":
				return e.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function Wc(t) {
		return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
	}
	var Zl = !1;
	function qh(t, e) {
		switch (t) {
			case "compositionend":
				return Wc(e);
			case "keypress":
				return e.which !== 32 ? null : (($c = !0), kc);
			case "textInput":
				return (t = e.data), t === kc && $c ? null : t;
			default:
				return null;
		}
	}
	function Yh(t, e) {
		if (Zl)
			return t === "compositionend" || (!Si && Fc(t, e))
				? ((t = Xc()), (qu = gi = Je = null), (Zl = !1), t)
				: null;
		switch (t) {
			case "paste":
				return null;
			case "keypress":
				if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
					if (e.char && 1 < e.char.length) return e.char;
					if (e.which) return String.fromCharCode(e.which);
				}
				return null;
			case "compositionend":
				return Jc && e.locale !== "ko" ? null : e.data;
			default:
				return null;
		}
	}
	var jh = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function Pc(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return e === "input" ? !!jh[t.type] : e === "textarea";
	}
	function Ic(t, e, l, a) {
		Xl ? (Vl ? Vl.push(a) : (Vl = [a])) : (Xl = a),
			(e = Mn(e, "onChange")),
			0 < e.length &&
				((l = new Gu("onChange", "change", null, l, a)),
				t.push({ event: l, listeners: e }));
	}
	var Ha = null,
		La = null;
	function Gh(t) {
		Lo(t, 0);
	}
	function Xu(t) {
		var e = za(t);
		if (Lc(e)) return t;
	}
	function ts(t, e) {
		if (t === "change") return e;
	}
	var es = !1;
	if (Re) {
		var bi;
		if (Re) {
			var Oi = "oninput" in document;
			if (!Oi) {
				var ls = document.createElement("div");
				ls.setAttribute("oninput", "return;"),
					(Oi = typeof ls.oninput == "function");
			}
			bi = Oi;
		} else bi = !1;
		es = bi && (!document.documentMode || 9 < document.documentMode);
	}
	function as() {
		Ha && (Ha.detachEvent("onpropertychange", us), (La = Ha = null));
	}
	function us(t) {
		if (t.propertyName === "value" && Xu(La)) {
			var e = [];
			Ic(e, La, t, oi(t)), Qc(Gh, e);
		}
	}
	function Qh(t, e, l) {
		t === "focusin"
			? (as(), (Ha = e), (La = l), Ha.attachEvent("onpropertychange", us))
			: t === "focusout" && as();
	}
	function Xh(t) {
		if (t === "selectionchange" || t === "keyup" || t === "keydown")
			return Xu(La);
	}
	function Vh(t, e) {
		if (t === "click") return Xu(e);
	}
	function Zh(t, e) {
		if (t === "input" || t === "change") return Xu(e);
	}
	function Kh(t, e) {
		return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
	}
	var ee = typeof Object.is == "function" ? Object.is : Kh;
	function Ca(t, e) {
		if (ee(t, e)) return !0;
		if (
			typeof t != "object" ||
			t === null ||
			typeof e != "object" ||
			e === null
		)
			return !1;
		var l = Object.keys(t),
			a = Object.keys(e);
		if (l.length !== a.length) return !1;
		for (a = 0; a < l.length; a++) {
			var u = l[a];
			if (!Fn.call(e, u) || !ee(t[u], e[u])) return !1;
		}
		return !0;
	}
	function ns(t) {
		for (; t && t.firstChild; ) t = t.firstChild;
		return t;
	}
	function is(t, e) {
		var l = ns(t);
		t = 0;
		for (var a; l; ) {
			if (l.nodeType === 3) {
				if (((a = t + l.textContent.length), t <= e && a >= e))
					return { node: l, offset: e - t };
				t = a;
			}
			t: {
				for (; l; ) {
					if (l.nextSibling) {
						l = l.nextSibling;
						break t;
					}
					l = l.parentNode;
				}
				l = void 0;
			}
			l = ns(l);
		}
	}
	function fs(t, e) {
		return t && e
			? t === e
				? !0
				: t && t.nodeType === 3
					? !1
					: e && e.nodeType === 3
						? fs(t, e.parentNode)
						: "contains" in t
							? t.contains(e)
							: t.compareDocumentPosition
								? !!(t.compareDocumentPosition(e) & 16)
								: !1
			: !1;
	}
	function cs(t) {
		t =
			t != null &&
			t.ownerDocument != null &&
			t.ownerDocument.defaultView != null
				? t.ownerDocument.defaultView
				: window;
		for (var e = Cu(t.document); e instanceof t.HTMLIFrameElement; ) {
			try {
				var l = typeof e.contentWindow.location.href == "string";
			} catch {
				l = !1;
			}
			if (l) t = e.contentWindow;
			else break;
			e = Cu(t.document);
		}
		return e;
	}
	function Ti(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return (
			e &&
			((e === "input" &&
				(t.type === "text" ||
					t.type === "search" ||
					t.type === "tel" ||
					t.type === "url" ||
					t.type === "password")) ||
				e === "textarea" ||
				t.contentEditable === "true")
		);
	}
	var wh = Re && "documentMode" in document && 11 >= document.documentMode,
		Kl = null,
		xi = null,
		Ba = null,
		Ei = !1;
	function ss(t, e, l) {
		var a =
			l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
		Ei ||
			Kl == null ||
			Kl !== Cu(a) ||
			((a = Kl),
			"selectionStart" in a && Ti(a)
				? (a = { start: a.selectionStart, end: a.selectionEnd })
				: ((a = (
						(a.ownerDocument && a.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(a = {
						anchorNode: a.anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset,
					})),
			(Ba && Ca(Ba, a)) ||
				((Ba = a),
				(a = Mn(xi, "onSelect")),
				0 < a.length &&
					((e = new Gu("onSelect", "select", null, e, l)),
					t.push({ event: e, listeners: a }),
					(e.target = Kl))));
	}
	function pl(t, e) {
		var l = {};
		return (
			(l[t.toLowerCase()] = e.toLowerCase()),
			(l["Webkit" + t] = "webkit" + e),
			(l["Moz" + t] = "moz" + e),
			l
		);
	}
	var wl = {
			animationend: pl("Animation", "AnimationEnd"),
			animationiteration: pl("Animation", "AnimationIteration"),
			animationstart: pl("Animation", "AnimationStart"),
			transitionrun: pl("Transition", "TransitionRun"),
			transitionstart: pl("Transition", "TransitionStart"),
			transitioncancel: pl("Transition", "TransitionCancel"),
			transitionend: pl("Transition", "TransitionEnd"),
		},
		Ai = {},
		rs = {};
	Re &&
		((rs = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete wl.animationend.animation,
			delete wl.animationiteration.animation,
			delete wl.animationstart.animation),
		"TransitionEvent" in window || delete wl.transitionend.transition);
	function Sl(t) {
		if (Ai[t]) return Ai[t];
		if (!wl[t]) return t;
		var e = wl[t],
			l;
		for (l in e) if (e.hasOwnProperty(l) && l in rs) return (Ai[t] = e[l]);
		return t;
	}
	var os = Sl("animationend"),
		ds = Sl("animationiteration"),
		hs = Sl("animationstart"),
		Jh = Sl("transitionrun"),
		kh = Sl("transitionstart"),
		$h = Sl("transitioncancel"),
		gs = Sl("transitionend"),
		ms = new Map(),
		Di =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	Di.push("scrollEnd");
	function pe(t, e) {
		ms.set(t, e), yl(e, [t]);
	}
	var ys = new WeakMap();
	function oe(t, e) {
		if (typeof t == "object" && t !== null) {
			var l = ys.get(t);
			return l !== void 0
				? l
				: ((e = { value: t, source: e, stack: _c(e) }), ys.set(t, e), e);
		}
		return { value: t, source: e, stack: _c(e) };
	}
	var de = [],
		Jl = 0,
		zi = 0;
	function Vu() {
		for (var t = Jl, e = (zi = Jl = 0); e < t; ) {
			var l = de[e];
			de[e++] = null;
			var a = de[e];
			de[e++] = null;
			var u = de[e];
			de[e++] = null;
			var n = de[e];
			if (((de[e++] = null), a !== null && u !== null)) {
				var c = a.pending;
				c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
					(a.pending = u);
			}
			n !== 0 && vs(l, u, n);
		}
	}
	function Zu(t, e, l, a) {
		(de[Jl++] = t),
			(de[Jl++] = e),
			(de[Jl++] = l),
			(de[Jl++] = a),
			(zi |= a),
			(t.lanes |= a),
			(t = t.alternate),
			t !== null && (t.lanes |= a);
	}
	function Mi(t, e, l, a) {
		return Zu(t, e, l, a), Ku(t);
	}
	function kl(t, e) {
		return Zu(t, null, null, e), Ku(t);
	}
	function vs(t, e, l) {
		t.lanes |= l;
		var a = t.alternate;
		a !== null && (a.lanes |= l);
		for (var u = !1, n = t.return; n !== null; )
			(n.childLanes |= l),
				(a = n.alternate),
				a !== null && (a.childLanes |= l),
				n.tag === 22 &&
					((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
				(t = n),
				(n = n.return);
		return t.tag === 3
			? ((n = t.stateNode),
				u &&
					e !== null &&
					((u = 31 - te(l)),
					(t = n.hiddenUpdates),
					(a = t[u]),
					a === null ? (t[u] = [e]) : a.push(e),
					(e.lane = l | 536870912)),
				n)
			: null;
	}
	function Ku(t) {
		if (50 < fu) throw ((fu = 0), (Cf = null), Error(f(185)));
		for (var e = t.return; e !== null; ) (t = e), (e = t.return);
		return t.tag === 3 ? t.stateNode : null;
	}
	var $l = {};
	function Fh(t, e, l, a) {
		(this.tag = t),
			(this.key = l),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = e),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = a),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function le(t, e, l, a) {
		return new Fh(t, e, l, a);
	}
	function Ri(t) {
		return (t = t.prototype), !(!t || !t.isReactComponent);
	}
	function Ue(t, e) {
		var l = t.alternate;
		return (
			l === null
				? ((l = le(t.tag, e, t.key, t.mode)),
					(l.elementType = t.elementType),
					(l.type = t.type),
					(l.stateNode = t.stateNode),
					(l.alternate = t),
					(t.alternate = l))
				: ((l.pendingProps = e),
					(l.type = t.type),
					(l.flags = 0),
					(l.subtreeFlags = 0),
					(l.deletions = null)),
			(l.flags = t.flags & 65011712),
			(l.childLanes = t.childLanes),
			(l.lanes = t.lanes),
			(l.child = t.child),
			(l.memoizedProps = t.memoizedProps),
			(l.memoizedState = t.memoizedState),
			(l.updateQueue = t.updateQueue),
			(e = t.dependencies),
			(l.dependencies =
				e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
			(l.sibling = t.sibling),
			(l.index = t.index),
			(l.ref = t.ref),
			(l.refCleanup = t.refCleanup),
			l
		);
	}
	function ps(t, e) {
		t.flags &= 65011714;
		var l = t.alternate;
		return (
			l === null
				? ((t.childLanes = 0),
					(t.lanes = e),
					(t.child = null),
					(t.subtreeFlags = 0),
					(t.memoizedProps = null),
					(t.memoizedState = null),
					(t.updateQueue = null),
					(t.dependencies = null),
					(t.stateNode = null))
				: ((t.childLanes = l.childLanes),
					(t.lanes = l.lanes),
					(t.child = l.child),
					(t.subtreeFlags = 0),
					(t.deletions = null),
					(t.memoizedProps = l.memoizedProps),
					(t.memoizedState = l.memoizedState),
					(t.updateQueue = l.updateQueue),
					(t.type = l.type),
					(e = l.dependencies),
					(t.dependencies =
						e === null
							? null
							: { lanes: e.lanes, firstContext: e.firstContext })),
			t
		);
	}
	function wu(t, e, l, a, u, n) {
		var c = 0;
		if (((a = t), typeof t == "function")) Ri(t) && (c = 1);
		else if (typeof t == "string")
			c = Pg(t, l, yt.current)
				? 26
				: t === "html" || t === "head" || t === "body"
					? 27
					: 5;
		else
			t: switch (t) {
				case St:
					return (t = le(31, l, e, u)), (t.elementType = St), (t.lanes = n), t;
				case H:
					return bl(l.children, u, n, e);
				case J:
					(c = 8), (u |= 24);
					break;
				case st:
					return (
						(t = le(12, l, e, u | 2)), (t.elementType = st), (t.lanes = n), t
					);
				case Nt:
					return (t = le(13, l, e, u)), (t.elementType = Nt), (t.lanes = n), t;
				case Vt:
					return (t = le(19, l, e, u)), (t.elementType = Vt), (t.lanes = n), t;
				default:
					if (typeof t == "object" && t !== null)
						switch (t.$$typeof) {
							case Yt:
							case mt:
								c = 10;
								break t;
							case Dt:
								c = 9;
								break t;
							case ot:
								c = 11;
								break t;
							case xt:
								c = 14;
								break t;
							case _t:
								(c = 16), (a = null);
								break t;
						}
					(c = 29),
						(l = Error(f(130, t === null ? "null" : typeof t, ""))),
						(a = null);
			}
		return (
			(e = le(c, l, e, u)), (e.elementType = t), (e.type = a), (e.lanes = n), e
		);
	}
	function bl(t, e, l, a) {
		return (t = le(7, t, a, e)), (t.lanes = l), t;
	}
	function Ui(t, e, l) {
		return (t = le(6, t, null, e)), (t.lanes = l), t;
	}
	function Ni(t, e, l) {
		return (
			(e = le(4, t.children !== null ? t.children : [], t.key, e)),
			(e.lanes = l),
			(e.stateNode = {
				containerInfo: t.containerInfo,
				pendingChildren: null,
				implementation: t.implementation,
			}),
			e
		);
	}
	var Fl = [],
		Wl = 0,
		Ju = null,
		ku = 0,
		he = [],
		ge = 0,
		Ol = null,
		Ne = 1,
		_e = "";
	function Tl(t, e) {
		(Fl[Wl++] = ku), (Fl[Wl++] = Ju), (Ju = t), (ku = e);
	}
	function Ss(t, e, l) {
		(he[ge++] = Ne), (he[ge++] = _e), (he[ge++] = Ol), (Ol = t);
		var a = Ne;
		t = _e;
		var u = 32 - te(a) - 1;
		(a &= ~(1 << u)), (l += 1);
		var n = 32 - te(e) + u;
		if (30 < n) {
			var c = u - (u % 5);
			(n = (a & ((1 << c) - 1)).toString(32)),
				(a >>= c),
				(u -= c),
				(Ne = (1 << (32 - te(e) + u)) | (l << u) | a),
				(_e = n + t);
		} else (Ne = (1 << n) | (l << u) | a), (_e = t);
	}
	function _i(t) {
		t.return !== null && (Tl(t, 1), Ss(t, 1, 0));
	}
	function Hi(t) {
		for (; t === Ju; )
			(Ju = Fl[--Wl]), (Fl[Wl] = null), (ku = Fl[--Wl]), (Fl[Wl] = null);
		for (; t === Ol; )
			(Ol = he[--ge]),
				(he[ge] = null),
				(_e = he[--ge]),
				(he[ge] = null),
				(Ne = he[--ge]),
				(he[ge] = null);
	}
	var Kt = null,
		ht = null,
		P = !1,
		xl = null,
		Te = !1,
		Li = Error(f(519));
	function El(t) {
		var e = Error(f(418, ""));
		throw (ja(oe(e, t)), Li);
	}
	function bs(t) {
		var e = t.stateNode,
			l = t.type,
			a = t.memoizedProps;
		switch (((e[jt] = t), (e[Jt] = a), l)) {
			case "dialog":
				w("cancel", e), w("close", e);
				break;
			case "iframe":
			case "object":
			case "embed":
				w("load", e);
				break;
			case "video":
			case "audio":
				for (l = 0; l < su.length; l++) w(su[l], e);
				break;
			case "source":
				w("error", e);
				break;
			case "img":
			case "image":
			case "link":
				w("error", e), w("load", e);
				break;
			case "details":
				w("toggle", e);
				break;
			case "input":
				w("invalid", e),
					Cc(
						e,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0,
					),
					Lu(e);
				break;
			case "select":
				w("invalid", e);
				break;
			case "textarea":
				w("invalid", e), qc(e, a.value, a.defaultValue, a.children), Lu(e);
		}
		(l = a.children),
			(typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
			e.textContent === "" + l ||
			a.suppressHydrationWarning === !0 ||
			Yo(e.textContent, l)
				? (a.popover != null && (w("beforetoggle", e), w("toggle", e)),
					a.onScroll != null && w("scroll", e),
					a.onScrollEnd != null && w("scrollend", e),
					a.onClick != null && (e.onclick = Rn),
					(e = !0))
				: (e = !1),
			e || El(t);
	}
	function Os(t) {
		for (Kt = t.return; Kt; )
			switch (Kt.tag) {
				case 5:
				case 13:
					Te = !1;
					return;
				case 27:
				case 3:
					Te = !0;
					return;
				default:
					Kt = Kt.return;
			}
	}
	function qa(t) {
		if (t !== Kt) return !1;
		if (!P) return Os(t), (P = !0), !1;
		var e = t.tag,
			l;
		if (
			((l = e !== 3 && e !== 27) &&
				((l = e === 5) &&
					((l = t.type),
					(l =
						!(l !== "form" && l !== "button") || Wf(t.type, t.memoizedProps))),
				(l = !l)),
			l && ht && El(t),
			Os(t),
			e === 13)
		) {
			if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
				throw Error(f(317));
			t: {
				for (t = t.nextSibling, e = 0; t; ) {
					if (t.nodeType === 8)
						if (((l = t.data), l === "/$")) {
							if (e === 0) {
								ht = be(t.nextSibling);
								break t;
							}
							e--;
						} else (l !== "$" && l !== "$!" && l !== "$?") || e++;
					t = t.nextSibling;
				}
				ht = null;
			}
		} else
			e === 27
				? ((e = ht), sl(t.type) ? ((t = ec), (ec = null), (ht = t)) : (ht = e))
				: (ht = Kt ? be(t.stateNode.nextSibling) : null);
		return !0;
	}
	function Ya() {
		(ht = Kt = null), (P = !1);
	}
	function Ts() {
		var t = xl;
		return (
			t !== null &&
				(Wt === null ? (Wt = t) : Wt.push.apply(Wt, t), (xl = null)),
			t
		);
	}
	function ja(t) {
		xl === null ? (xl = [t]) : xl.push(t);
	}
	var Ci = tt(null),
		Al = null,
		He = null;
	function ke(t, e, l) {
		k(Ci, e._currentValue), (e._currentValue = l);
	}
	function Le(t) {
		(t._currentValue = Ci.current), W(Ci);
	}
	function Bi(t, e, l) {
		for (; t !== null; ) {
			var a = t.alternate;
			if (
				((t.childLanes & e) !== e
					? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
					: a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
				t === l)
			)
				break;
			t = t.return;
		}
	}
	function qi(t, e, l, a) {
		var u = t.child;
		for (u !== null && (u.return = t); u !== null; ) {
			var n = u.dependencies;
			if (n !== null) {
				var c = u.child;
				n = n.firstContext;
				t: for (; n !== null; ) {
					var o = n;
					n = u;
					for (var g = 0; g < e.length; g++)
						if (o.context === e[g]) {
							(n.lanes |= l),
								(o = n.alternate),
								o !== null && (o.lanes |= l),
								Bi(n.return, l, t),
								a || (c = null);
							break t;
						}
					n = o.next;
				}
			} else if (u.tag === 18) {
				if (((c = u.return), c === null)) throw Error(f(341));
				(c.lanes |= l),
					(n = c.alternate),
					n !== null && (n.lanes |= l),
					Bi(c, l, t),
					(c = null);
			} else c = u.child;
			if (c !== null) c.return = u;
			else
				for (c = u; c !== null; ) {
					if (c === t) {
						c = null;
						break;
					}
					if (((u = c.sibling), u !== null)) {
						(u.return = c.return), (c = u);
						break;
					}
					c = c.return;
				}
			u = c;
		}
	}
	function Ga(t, e, l, a) {
		t = null;
		for (var u = e, n = !1; u !== null; ) {
			if (!n) {
				if ((u.flags & 524288) !== 0) n = !0;
				else if ((u.flags & 262144) !== 0) break;
			}
			if (u.tag === 10) {
				var c = u.alternate;
				if (c === null) throw Error(f(387));
				if (((c = c.memoizedProps), c !== null)) {
					var o = u.type;
					ee(u.pendingProps.value, c.value) ||
						(t !== null ? t.push(o) : (t = [o]));
				}
			} else if (u === Au.current) {
				if (((c = u.alternate), c === null)) throw Error(f(387));
				c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
					(t !== null ? t.push(mu) : (t = [mu]));
			}
			u = u.return;
		}
		t !== null && qi(e, t, l, a), (e.flags |= 262144);
	}
	function $u(t) {
		for (t = t.firstContext; t !== null; ) {
			if (!ee(t.context._currentValue, t.memoizedValue)) return !0;
			t = t.next;
		}
		return !1;
	}
	function Dl(t) {
		(Al = t),
			(He = null),
			(t = t.dependencies),
			t !== null && (t.firstContext = null);
	}
	function Gt(t) {
		return xs(Al, t);
	}
	function Fu(t, e) {
		return Al === null && Dl(t), xs(t, e);
	}
	function xs(t, e) {
		var l = e._currentValue;
		if (((e = { context: e, memoizedValue: l, next: null }), He === null)) {
			if (t === null) throw Error(f(308));
			(He = e),
				(t.dependencies = { lanes: 0, firstContext: e }),
				(t.flags |= 524288);
		} else He = He.next = e;
		return l;
	}
	var Wh =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var t = [],
							e = (this.signal = {
								aborted: !1,
								addEventListener: function (l, a) {
									t.push(a);
								},
							});
						this.abort = function () {
							(e.aborted = !0),
								t.forEach(function (l) {
									return l();
								});
						};
					},
		Ph = d.unstable_scheduleCallback,
		Ih = d.unstable_NormalPriority,
		Et = {
			$$typeof: mt,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Yi() {
		return { controller: new Wh(), data: new Map(), refCount: 0 };
	}
	function Qa(t) {
		t.refCount--,
			t.refCount === 0 &&
				Ph(Ih, function () {
					t.controller.abort();
				});
	}
	var Xa = null,
		ji = 0,
		Pl = 0,
		Il = null;
	function tg(t, e) {
		if (Xa === null) {
			var l = (Xa = []);
			(ji = 0),
				(Pl = Xf()),
				(Il = {
					status: "pending",
					value: void 0,
					then: function (a) {
						l.push(a);
					},
				});
		}
		return ji++, e.then(Es, Es), e;
	}
	function Es() {
		if (--ji === 0 && Xa !== null) {
			Il !== null && (Il.status = "fulfilled");
			var t = Xa;
			(Xa = null), (Pl = 0), (Il = null);
			for (var e = 0; e < t.length; e++) (0, t[e])();
		}
	}
	function eg(t, e) {
		var l = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: function (u) {
					l.push(u);
				},
			};
		return (
			t.then(
				function () {
					(a.status = "fulfilled"), (a.value = e);
					for (var u = 0; u < l.length; u++) (0, l[u])(e);
				},
				function (u) {
					for (a.status = "rejected", a.reason = u, u = 0; u < l.length; u++)
						(0, l[u])(void 0);
				},
			),
			a
		);
	}
	var As = D.S;
	D.S = function (t, e) {
		typeof e == "object" &&
			e !== null &&
			typeof e.then == "function" &&
			tg(t, e),
			As !== null && As(t, e);
	};
	var zl = tt(null);
	function Gi() {
		var t = zl.current;
		return t !== null ? t : ct.pooledCache;
	}
	function Wu(t, e) {
		e === null ? k(zl, zl.current) : k(zl, e.pool);
	}
	function Ds() {
		var t = Gi();
		return t === null ? null : { parent: Et._currentValue, pool: t };
	}
	var Va = Error(f(460)),
		zs = Error(f(474)),
		Pu = Error(f(542)),
		Qi = { then: function () {} };
	function Ms(t) {
		return (t = t.status), t === "fulfilled" || t === "rejected";
	}
	function Iu() {}
	function Rs(t, e, l) {
		switch (
			((l = t[l]),
			l === void 0 ? t.push(e) : l !== e && (e.then(Iu, Iu), (e = l)),
			e.status)
		) {
			case "fulfilled":
				return e.value;
			case "rejected":
				throw ((t = e.reason), Ns(t), t);
			default:
				if (typeof e.status == "string") e.then(Iu, Iu);
				else {
					if (((t = ct), t !== null && 100 < t.shellSuspendCounter))
						throw Error(f(482));
					(t = e),
						(t.status = "pending"),
						t.then(
							function (a) {
								if (e.status === "pending") {
									var u = e;
									(u.status = "fulfilled"), (u.value = a);
								}
							},
							function (a) {
								if (e.status === "pending") {
									var u = e;
									(u.status = "rejected"), (u.reason = a);
								}
							},
						);
				}
				switch (e.status) {
					case "fulfilled":
						return e.value;
					case "rejected":
						throw ((t = e.reason), Ns(t), t);
				}
				throw ((Za = e), Va);
		}
	}
	var Za = null;
	function Us() {
		if (Za === null) throw Error(f(459));
		var t = Za;
		return (Za = null), t;
	}
	function Ns(t) {
		if (t === Va || t === Pu) throw Error(f(483));
	}
	var $e = !1;
	function Xi(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function Vi(t, e) {
		(t = t.updateQueue),
			e.updateQueue === t &&
				(e.updateQueue = {
					baseState: t.baseState,
					firstBaseUpdate: t.firstBaseUpdate,
					lastBaseUpdate: t.lastBaseUpdate,
					shared: t.shared,
					callbacks: null,
				});
	}
	function Fe(t) {
		return { lane: t, tag: 0, payload: null, callback: null, next: null };
	}
	function We(t, e, l) {
		var a = t.updateQueue;
		if (a === null) return null;
		if (((a = a.shared), (et & 2) !== 0)) {
			var u = a.pending;
			return (
				u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
				(a.pending = e),
				(e = Ku(t)),
				vs(t, null, l),
				e
			);
		}
		return Zu(t, a, e, l), Ku(t);
	}
	function Ka(t, e, l) {
		if (
			((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
		) {
			var a = e.lanes;
			(a &= t.pendingLanes), (l |= a), (e.lanes = l), Ec(t, l);
		}
	}
	function Zi(t, e) {
		var l = t.updateQueue,
			a = t.alternate;
		if (a !== null && ((a = a.updateQueue), l === a)) {
			var u = null,
				n = null;
			if (((l = l.firstBaseUpdate), l !== null)) {
				do {
					var c = {
						lane: l.lane,
						tag: l.tag,
						payload: l.payload,
						callback: null,
						next: null,
					};
					n === null ? (u = n = c) : (n = n.next = c), (l = l.next);
				} while (l !== null);
				n === null ? (u = n = e) : (n = n.next = e);
			} else u = n = e;
			(l = {
				baseState: a.baseState,
				firstBaseUpdate: u,
				lastBaseUpdate: n,
				shared: a.shared,
				callbacks: a.callbacks,
			}),
				(t.updateQueue = l);
			return;
		}
		(t = l.lastBaseUpdate),
			t === null ? (l.firstBaseUpdate = e) : (t.next = e),
			(l.lastBaseUpdate = e);
	}
	var Ki = !1;
	function wa() {
		if (Ki) {
			var t = Il;
			if (t !== null) throw t;
		}
	}
	function Ja(t, e, l, a) {
		Ki = !1;
		var u = t.updateQueue;
		$e = !1;
		var n = u.firstBaseUpdate,
			c = u.lastBaseUpdate,
			o = u.shared.pending;
		if (o !== null) {
			u.shared.pending = null;
			var g = o,
				T = g.next;
			(g.next = null), c === null ? (n = T) : (c.next = T), (c = g);
			var z = t.alternate;
			z !== null &&
				((z = z.updateQueue),
				(o = z.lastBaseUpdate),
				o !== c &&
					(o === null ? (z.firstBaseUpdate = T) : (o.next = T),
					(z.lastBaseUpdate = g)));
		}
		if (n !== null) {
			var R = u.baseState;
			(c = 0), (z = T = g = null), (o = n);
			do {
				var x = o.lane & -536870913,
					E = x !== o.lane;
				if (E ? ($ & x) === x : (a & x) === x) {
					x !== 0 && x === Pl && (Ki = !0),
						z !== null &&
							(z = z.next =
								{
									lane: 0,
									tag: o.tag,
									payload: o.payload,
									callback: null,
									next: null,
								});
					t: {
						var Q = t,
							j = o;
						x = e;
						var it = l;
						switch (j.tag) {
							case 1:
								if (((Q = j.payload), typeof Q == "function")) {
									R = Q.call(it, R, x);
									break t;
								}
								R = Q;
								break t;
							case 3:
								Q.flags = (Q.flags & -65537) | 128;
							case 0:
								if (
									((Q = j.payload),
									(x = typeof Q == "function" ? Q.call(it, R, x) : Q),
									x == null)
								)
									break t;
								R = A({}, R, x);
								break t;
							case 2:
								$e = !0;
						}
					}
					(x = o.callback),
						x !== null &&
							((t.flags |= 64),
							E && (t.flags |= 8192),
							(E = u.callbacks),
							E === null ? (u.callbacks = [x]) : E.push(x));
				} else
					(E = {
						lane: x,
						tag: o.tag,
						payload: o.payload,
						callback: o.callback,
						next: null,
					}),
						z === null ? ((T = z = E), (g = R)) : (z = z.next = E),
						(c |= x);
				if (((o = o.next), o === null)) {
					if (((o = u.shared.pending), o === null)) break;
					(E = o),
						(o = E.next),
						(E.next = null),
						(u.lastBaseUpdate = E),
						(u.shared.pending = null);
				}
			} while (!0);
			z === null && (g = R),
				(u.baseState = g),
				(u.firstBaseUpdate = T),
				(u.lastBaseUpdate = z),
				n === null && (u.shared.lanes = 0),
				(nl |= c),
				(t.lanes = c),
				(t.memoizedState = R);
		}
	}
	function _s(t, e) {
		if (typeof t != "function") throw Error(f(191, t));
		t.call(e);
	}
	function Hs(t, e) {
		var l = t.callbacks;
		if (l !== null)
			for (t.callbacks = null, t = 0; t < l.length; t++) _s(l[t], e);
	}
	var ta = tt(null),
		tn = tt(0);
	function Ls(t, e) {
		(t = Qe), k(tn, t), k(ta, e), (Qe = t | e.baseLanes);
	}
	function wi() {
		k(tn, Qe), k(ta, ta.current);
	}
	function Ji() {
		(Qe = tn.current), W(ta), W(tn);
	}
	var Pe = 0,
		V = null,
		ut = null,
		Ot = null,
		en = !1,
		ea = !1,
		Ml = !1,
		ln = 0,
		ka = 0,
		la = null,
		lg = 0;
	function vt() {
		throw Error(f(321));
	}
	function ki(t, e) {
		if (e === null) return !1;
		for (var l = 0; l < e.length && l < t.length; l++)
			if (!ee(t[l], e[l])) return !1;
		return !0;
	}
	function $i(t, e, l, a, u, n) {
		return (
			(Pe = n),
			(V = e),
			(e.memoizedState = null),
			(e.updateQueue = null),
			(e.lanes = 0),
			(D.H = t === null || t.memoizedState === null ? vr : pr),
			(Ml = !1),
			(n = l(a, u)),
			(Ml = !1),
			ea && (n = Bs(e, l, a, u)),
			Cs(t),
			n
		);
	}
	function Cs(t) {
		D.H = sn;
		var e = ut !== null && ut.next !== null;
		if (((Pe = 0), (Ot = ut = V = null), (en = !1), (ka = 0), (la = null), e))
			throw Error(f(300));
		t === null ||
			Mt ||
			((t = t.dependencies), t !== null && $u(t) && (Mt = !0));
	}
	function Bs(t, e, l, a) {
		V = t;
		var u = 0;
		do {
			if ((ea && (la = null), (ka = 0), (ea = !1), 25 <= u))
				throw Error(f(301));
			if (((u += 1), (Ot = ut = null), t.updateQueue != null)) {
				var n = t.updateQueue;
				(n.lastEffect = null),
					(n.events = null),
					(n.stores = null),
					n.memoCache != null && (n.memoCache.index = 0);
			}
			(D.H = sg), (n = e(l, a));
		} while (ea);
		return n;
	}
	function ag() {
		var t = D.H,
			e = t.useState()[0];
		return (
			(e = typeof e.then == "function" ? $a(e) : e),
			(t = t.useState()[0]),
			(ut !== null ? ut.memoizedState : null) !== t && (V.flags |= 1024),
			e
		);
	}
	function Fi() {
		var t = ln !== 0;
		return (ln = 0), t;
	}
	function Wi(t, e, l) {
		(e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
	}
	function Pi(t) {
		if (en) {
			for (t = t.memoizedState; t !== null; ) {
				var e = t.queue;
				e !== null && (e.pending = null), (t = t.next);
			}
			en = !1;
		}
		(Pe = 0), (Ot = ut = V = null), (ea = !1), (ka = ln = 0), (la = null);
	}
	function $t() {
		var t = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return Ot === null ? (V.memoizedState = Ot = t) : (Ot = Ot.next = t), Ot;
	}
	function Tt() {
		if (ut === null) {
			var t = V.alternate;
			t = t !== null ? t.memoizedState : null;
		} else t = ut.next;
		var e = Ot === null ? V.memoizedState : Ot.next;
		if (e !== null) (Ot = e), (ut = t);
		else {
			if (t === null)
				throw V.alternate === null ? Error(f(467)) : Error(f(310));
			(ut = t),
				(t = {
					memoizedState: ut.memoizedState,
					baseState: ut.baseState,
					baseQueue: ut.baseQueue,
					queue: ut.queue,
					next: null,
				}),
				Ot === null ? (V.memoizedState = Ot = t) : (Ot = Ot.next = t);
		}
		return Ot;
	}
	function Ii() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function $a(t) {
		var e = ka;
		return (
			(ka += 1),
			la === null && (la = []),
			(t = Rs(la, t, e)),
			(e = V),
			(Ot === null ? e.memoizedState : Ot.next) === null &&
				((e = e.alternate),
				(D.H = e === null || e.memoizedState === null ? vr : pr)),
			t
		);
	}
	function an(t) {
		if (t !== null && typeof t == "object") {
			if (typeof t.then == "function") return $a(t);
			if (t.$$typeof === mt) return Gt(t);
		}
		throw Error(f(438, String(t)));
	}
	function tf(t) {
		var e = null,
			l = V.updateQueue;
		if ((l !== null && (e = l.memoCache), e == null)) {
			var a = V.alternate;
			a !== null &&
				((a = a.updateQueue),
				a !== null &&
					((a = a.memoCache),
					a != null &&
						(e = {
							data: a.data.map(function (u) {
								return u.slice();
							}),
							index: 0,
						})));
		}
		if (
			(e == null && (e = { data: [], index: 0 }),
			l === null && ((l = Ii()), (V.updateQueue = l)),
			(l.memoCache = e),
			(l = e.data[e.index]),
			l === void 0)
		)
			for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = bt;
		return e.index++, l;
	}
	function Ce(t, e) {
		return typeof e == "function" ? e(t) : e;
	}
	function un(t) {
		var e = Tt();
		return ef(e, ut, t);
	}
	function ef(t, e, l) {
		var a = t.queue;
		if (a === null) throw Error(f(311));
		a.lastRenderedReducer = l;
		var u = t.baseQueue,
			n = a.pending;
		if (n !== null) {
			if (u !== null) {
				var c = u.next;
				(u.next = n.next), (n.next = c);
			}
			(e.baseQueue = u = n), (a.pending = null);
		}
		if (((n = t.baseState), u === null)) t.memoizedState = n;
		else {
			e = u.next;
			var o = (c = null),
				g = null,
				T = e,
				z = !1;
			do {
				var R = T.lane & -536870913;
				if (R !== T.lane ? ($ & R) === R : (Pe & R) === R) {
					var x = T.revertLane;
					if (x === 0)
						g !== null &&
							(g = g.next =
								{
									lane: 0,
									revertLane: 0,
									action: T.action,
									hasEagerState: T.hasEagerState,
									eagerState: T.eagerState,
									next: null,
								}),
							R === Pl && (z = !0);
					else if ((Pe & x) === x) {
						(T = T.next), x === Pl && (z = !0);
						continue;
					} else
						(R = {
							lane: 0,
							revertLane: T.revertLane,
							action: T.action,
							hasEagerState: T.hasEagerState,
							eagerState: T.eagerState,
							next: null,
						}),
							g === null ? ((o = g = R), (c = n)) : (g = g.next = R),
							(V.lanes |= x),
							(nl |= x);
					(R = T.action),
						Ml && l(n, R),
						(n = T.hasEagerState ? T.eagerState : l(n, R));
				} else
					(x = {
						lane: R,
						revertLane: T.revertLane,
						action: T.action,
						hasEagerState: T.hasEagerState,
						eagerState: T.eagerState,
						next: null,
					}),
						g === null ? ((o = g = x), (c = n)) : (g = g.next = x),
						(V.lanes |= R),
						(nl |= R);
				T = T.next;
			} while (T !== null && T !== e);
			if (
				(g === null ? (c = n) : (g.next = o),
				!ee(n, t.memoizedState) && ((Mt = !0), z && ((l = Il), l !== null)))
			)
				throw l;
			(t.memoizedState = n),
				(t.baseState = c),
				(t.baseQueue = g),
				(a.lastRenderedState = n);
		}
		return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
	}
	function lf(t) {
		var e = Tt(),
			l = e.queue;
		if (l === null) throw Error(f(311));
		l.lastRenderedReducer = t;
		var a = l.dispatch,
			u = l.pending,
			n = e.memoizedState;
		if (u !== null) {
			l.pending = null;
			var c = (u = u.next);
			do (n = t(n, c.action)), (c = c.next);
			while (c !== u);
			ee(n, e.memoizedState) || (Mt = !0),
				(e.memoizedState = n),
				e.baseQueue === null && (e.baseState = n),
				(l.lastRenderedState = n);
		}
		return [n, a];
	}
	function qs(t, e, l) {
		var a = V,
			u = Tt(),
			n = P;
		if (n) {
			if (l === void 0) throw Error(f(407));
			l = l();
		} else l = e();
		var c = !ee((ut || u).memoizedState, l);
		c && ((u.memoizedState = l), (Mt = !0)), (u = u.queue);
		var o = Gs.bind(null, a, u, t);
		if (
			(Fa(2048, 8, o, [t]),
			u.getSnapshot !== e || c || (Ot !== null && Ot.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				aa(9, nn(), js.bind(null, a, u, l, e), null),
				ct === null)
			)
				throw Error(f(349));
			n || (Pe & 124) !== 0 || Ys(a, e, l);
		}
		return l;
	}
	function Ys(t, e, l) {
		(t.flags |= 16384),
			(t = { getSnapshot: e, value: l }),
			(e = V.updateQueue),
			e === null
				? ((e = Ii()), (V.updateQueue = e), (e.stores = [t]))
				: ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
	}
	function js(t, e, l, a) {
		(e.value = l), (e.getSnapshot = a), Qs(e) && Xs(t);
	}
	function Gs(t, e, l) {
		return l(function () {
			Qs(e) && Xs(t);
		});
	}
	function Qs(t) {
		var e = t.getSnapshot;
		t = t.value;
		try {
			var l = e();
			return !ee(t, l);
		} catch {
			return !0;
		}
	}
	function Xs(t) {
		var e = kl(t, 2);
		e !== null && fe(e, t, 2);
	}
	function af(t) {
		var e = $t();
		if (typeof t == "function") {
			var l = t;
			if (((t = l()), Ml)) {
				Ke(!0);
				try {
					l();
				} finally {
					Ke(!1);
				}
			}
		}
		return (
			(e.memoizedState = e.baseState = t),
			(e.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ce,
				lastRenderedState: t,
			}),
			e
		);
	}
	function Vs(t, e, l, a) {
		return (t.baseState = l), ef(t, ut, typeof a == "function" ? a : Ce);
	}
	function ug(t, e, l, a, u) {
		if (cn(t)) throw Error(f(485));
		if (((t = e.action), t !== null)) {
			var n = {
				payload: u,
				action: t,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (c) {
					n.listeners.push(c);
				},
			};
			D.T !== null ? l(!0) : (n.isTransition = !1),
				a(n),
				(l = e.pending),
				l === null
					? ((n.next = e.pending = n), Zs(e, n))
					: ((n.next = l.next), (e.pending = l.next = n));
		}
	}
	function Zs(t, e) {
		var l = e.action,
			a = e.payload,
			u = t.state;
		if (e.isTransition) {
			var n = D.T,
				c = {};
			D.T = c;
			try {
				var o = l(u, a),
					g = D.S;
				g !== null && g(c, o), Ks(t, e, o);
			} catch (T) {
				uf(t, e, T);
			} finally {
				D.T = n;
			}
		} else
			try {
				(n = l(u, a)), Ks(t, e, n);
			} catch (T) {
				uf(t, e, T);
			}
	}
	function Ks(t, e, l) {
		l !== null && typeof l == "object" && typeof l.then == "function"
			? l.then(
					function (a) {
						ws(t, e, a);
					},
					function (a) {
						return uf(t, e, a);
					},
				)
			: ws(t, e, l);
	}
	function ws(t, e, l) {
		(e.status = "fulfilled"),
			(e.value = l),
			Js(e),
			(t.state = l),
			(e = t.pending),
			e !== null &&
				((l = e.next),
				l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Zs(t, l)));
	}
	function uf(t, e, l) {
		var a = t.pending;
		if (((t.pending = null), a !== null)) {
			a = a.next;
			do (e.status = "rejected"), (e.reason = l), Js(e), (e = e.next);
			while (e !== a);
		}
		t.action = null;
	}
	function Js(t) {
		t = t.listeners;
		for (var e = 0; e < t.length; e++) (0, t[e])();
	}
	function ks(t, e) {
		return e;
	}
	function $s(t, e) {
		if (P) {
			var l = ct.formState;
			if (l !== null) {
				t: {
					var a = V;
					if (P) {
						if (ht) {
							e: {
								for (var u = ht, n = Te; u.nodeType !== 8; ) {
									if (!n) {
										u = null;
										break e;
									}
									if (((u = be(u.nextSibling)), u === null)) {
										u = null;
										break e;
									}
								}
								(n = u.data), (u = n === "F!" || n === "F" ? u : null);
							}
							if (u) {
								(ht = be(u.nextSibling)), (a = u.data === "F!");
								break t;
							}
						}
						El(a);
					}
					a = !1;
				}
				a && (e = l[0]);
			}
		}
		return (
			(l = $t()),
			(l.memoizedState = l.baseState = e),
			(a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ks,
				lastRenderedState: e,
			}),
			(l.queue = a),
			(l = gr.bind(null, V, a)),
			(a.dispatch = l),
			(a = af(!1)),
			(n = rf.bind(null, V, !1, a.queue)),
			(a = $t()),
			(u = { state: e, dispatch: null, action: t, pending: null }),
			(a.queue = u),
			(l = ug.bind(null, V, u, n, l)),
			(u.dispatch = l),
			(a.memoizedState = t),
			[e, l, !1]
		);
	}
	function Fs(t) {
		var e = Tt();
		return Ws(e, ut, t);
	}
	function Ws(t, e, l) {
		if (
			((e = ef(t, e, ks)[0]),
			(t = un(Ce)[0]),
			typeof e == "object" && e !== null && typeof e.then == "function")
		)
			try {
				var a = $a(e);
			} catch (c) {
				throw c === Va ? Pu : c;
			}
		else a = e;
		e = Tt();
		var u = e.queue,
			n = u.dispatch;
		return (
			l !== e.memoizedState &&
				((V.flags |= 2048), aa(9, nn(), ng.bind(null, u, l), null)),
			[a, n, t]
		);
	}
	function ng(t, e) {
		t.action = e;
	}
	function Ps(t) {
		var e = Tt(),
			l = ut;
		if (l !== null) return Ws(e, l, t);
		Tt(), (e = e.memoizedState), (l = Tt());
		var a = l.queue.dispatch;
		return (l.memoizedState = t), [e, a, !1];
	}
	function aa(t, e, l, a) {
		return (
			(t = { tag: t, create: l, deps: a, inst: e, next: null }),
			(e = V.updateQueue),
			e === null && ((e = Ii()), (V.updateQueue = e)),
			(l = e.lastEffect),
			l === null
				? (e.lastEffect = t.next = t)
				: ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
			t
		);
	}
	function nn() {
		return { destroy: void 0, resource: void 0 };
	}
	function Is() {
		return Tt().memoizedState;
	}
	function fn(t, e, l, a) {
		var u = $t();
		(a = a === void 0 ? null : a),
			(V.flags |= t),
			(u.memoizedState = aa(1 | e, nn(), l, a));
	}
	function Fa(t, e, l, a) {
		var u = Tt();
		a = a === void 0 ? null : a;
		var n = u.memoizedState.inst;
		ut !== null && a !== null && ki(a, ut.memoizedState.deps)
			? (u.memoizedState = aa(e, n, l, a))
			: ((V.flags |= t), (u.memoizedState = aa(1 | e, n, l, a)));
	}
	function tr(t, e) {
		fn(8390656, 8, t, e);
	}
	function er(t, e) {
		Fa(2048, 8, t, e);
	}
	function lr(t, e) {
		return Fa(4, 2, t, e);
	}
	function ar(t, e) {
		return Fa(4, 4, t, e);
	}
	function ur(t, e) {
		if (typeof e == "function") {
			t = t();
			var l = e(t);
			return function () {
				typeof l == "function" ? l() : e(null);
			};
		}
		if (e != null)
			return (
				(t = t()),
				(e.current = t),
				function () {
					e.current = null;
				}
			);
	}
	function nr(t, e, l) {
		(l = l != null ? l.concat([t]) : null), Fa(4, 4, ur.bind(null, e, t), l);
	}
	function nf() {}
	function ir(t, e) {
		var l = Tt();
		e = e === void 0 ? null : e;
		var a = l.memoizedState;
		return e !== null && ki(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
	}
	function fr(t, e) {
		var l = Tt();
		e = e === void 0 ? null : e;
		var a = l.memoizedState;
		if (e !== null && ki(e, a[1])) return a[0];
		if (((a = t()), Ml)) {
			Ke(!0);
			try {
				t();
			} finally {
				Ke(!1);
			}
		}
		return (l.memoizedState = [a, e]), a;
	}
	function ff(t, e, l) {
		return l === void 0 || (Pe & 1073741824) !== 0
			? (t.memoizedState = e)
			: ((t.memoizedState = l), (t = ro()), (V.lanes |= t), (nl |= t), l);
	}
	function cr(t, e, l, a) {
		return ee(l, e)
			? l
			: ta.current !== null
				? ((t = ff(t, l, a)), ee(t, e) || (Mt = !0), t)
				: (Pe & 42) === 0
					? ((Mt = !0), (t.memoizedState = l))
					: ((t = ro()), (V.lanes |= t), (nl |= t), e);
	}
	function sr(t, e, l, a, u) {
		var n = N.p;
		N.p = n !== 0 && 8 > n ? n : 8;
		var c = D.T,
			o = {};
		(D.T = o), rf(t, !1, e, l);
		try {
			var g = u(),
				T = D.S;
			if (
				(T !== null && T(o, g),
				g !== null && typeof g == "object" && typeof g.then == "function")
			) {
				var z = eg(g, a);
				Wa(t, e, z, ie(t));
			} else Wa(t, e, a, ie(t));
		} catch (R) {
			Wa(t, e, { then: function () {}, status: "rejected", reason: R }, ie());
		} finally {
			(N.p = n), (D.T = c);
		}
	}
	function ig() {}
	function cf(t, e, l, a) {
		if (t.tag !== 5) throw Error(f(476));
		var u = rr(t).queue;
		sr(
			t,
			u,
			e,
			Y,
			l === null
				? ig
				: function () {
						return or(t), l(a);
					},
		);
	}
	function rr(t) {
		var e = t.memoizedState;
		if (e !== null) return e;
		e = {
			memoizedState: Y,
			baseState: Y,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ce,
				lastRenderedState: Y,
			},
			next: null,
		};
		var l = {};
		return (
			(e.next = {
				memoizedState: l,
				baseState: l,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Ce,
					lastRenderedState: l,
				},
				next: null,
			}),
			(t.memoizedState = e),
			(t = t.alternate),
			t !== null && (t.memoizedState = e),
			e
		);
	}
	function or(t) {
		var e = rr(t).next.queue;
		Wa(t, e, {}, ie());
	}
	function sf() {
		return Gt(mu);
	}
	function dr() {
		return Tt().memoizedState;
	}
	function hr() {
		return Tt().memoizedState;
	}
	function fg(t) {
		for (var e = t.return; e !== null; ) {
			switch (e.tag) {
				case 24:
				case 3:
					var l = ie();
					t = Fe(l);
					var a = We(e, t, l);
					a !== null && (fe(a, e, l), Ka(a, e, l)),
						(e = { cache: Yi() }),
						(t.payload = e);
					return;
			}
			e = e.return;
		}
	}
	function cg(t, e, l) {
		var a = ie();
		(l = {
			lane: a,
			revertLane: 0,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			cn(t)
				? mr(e, l)
				: ((l = Mi(t, e, l, a)), l !== null && (fe(l, t, a), yr(l, e, a)));
	}
	function gr(t, e, l) {
		var a = ie();
		Wa(t, e, l, a);
	}
	function Wa(t, e, l, a) {
		var u = {
			lane: a,
			revertLane: 0,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (cn(t)) mr(e, u);
		else {
			var n = t.alternate;
			if (
				t.lanes === 0 &&
				(n === null || n.lanes === 0) &&
				((n = e.lastRenderedReducer), n !== null)
			)
				try {
					var c = e.lastRenderedState,
						o = n(c, l);
					if (((u.hasEagerState = !0), (u.eagerState = o), ee(o, c)))
						return Zu(t, e, u, 0), ct === null && Vu(), !1;
				} catch {
				} finally {
				}
			if (((l = Mi(t, e, u, a)), l !== null))
				return fe(l, t, a), yr(l, e, a), !0;
		}
		return !1;
	}
	function rf(t, e, l, a) {
		if (
			((a = {
				lane: 2,
				revertLane: Xf(),
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			cn(t))
		) {
			if (e) throw Error(f(479));
		} else (e = Mi(t, l, a, 2)), e !== null && fe(e, t, 2);
	}
	function cn(t) {
		var e = t.alternate;
		return t === V || (e !== null && e === V);
	}
	function mr(t, e) {
		ea = en = !0;
		var l = t.pending;
		l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
			(t.pending = e);
	}
	function yr(t, e, l) {
		if ((l & 4194048) !== 0) {
			var a = e.lanes;
			(a &= t.pendingLanes), (l |= a), (e.lanes = l), Ec(t, l);
		}
	}
	var sn = {
			readContext: Gt,
			use: an,
			useCallback: vt,
			useContext: vt,
			useEffect: vt,
			useImperativeHandle: vt,
			useLayoutEffect: vt,
			useInsertionEffect: vt,
			useMemo: vt,
			useReducer: vt,
			useRef: vt,
			useState: vt,
			useDebugValue: vt,
			useDeferredValue: vt,
			useTransition: vt,
			useSyncExternalStore: vt,
			useId: vt,
			useHostTransitionStatus: vt,
			useFormState: vt,
			useActionState: vt,
			useOptimistic: vt,
			useMemoCache: vt,
			useCacheRefresh: vt,
		},
		vr = {
			readContext: Gt,
			use: an,
			useCallback: function (t, e) {
				return ($t().memoizedState = [t, e === void 0 ? null : e]), t;
			},
			useContext: Gt,
			useEffect: tr,
			useImperativeHandle: function (t, e, l) {
				(l = l != null ? l.concat([t]) : null),
					fn(4194308, 4, ur.bind(null, e, t), l);
			},
			useLayoutEffect: function (t, e) {
				return fn(4194308, 4, t, e);
			},
			useInsertionEffect: function (t, e) {
				fn(4, 2, t, e);
			},
			useMemo: function (t, e) {
				var l = $t();
				e = e === void 0 ? null : e;
				var a = t();
				if (Ml) {
					Ke(!0);
					try {
						t();
					} finally {
						Ke(!1);
					}
				}
				return (l.memoizedState = [a, e]), a;
			},
			useReducer: function (t, e, l) {
				var a = $t();
				if (l !== void 0) {
					var u = l(e);
					if (Ml) {
						Ke(!0);
						try {
							l(e);
						} finally {
							Ke(!1);
						}
					}
				} else u = e;
				return (
					(a.memoizedState = a.baseState = u),
					(t = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: u,
					}),
					(a.queue = t),
					(t = t.dispatch = cg.bind(null, V, t)),
					[a.memoizedState, t]
				);
			},
			useRef: function (t) {
				var e = $t();
				return (t = { current: t }), (e.memoizedState = t);
			},
			useState: function (t) {
				t = af(t);
				var e = t.queue,
					l = gr.bind(null, V, e);
				return (e.dispatch = l), [t.memoizedState, l];
			},
			useDebugValue: nf,
			useDeferredValue: function (t, e) {
				var l = $t();
				return ff(l, t, e);
			},
			useTransition: function () {
				var t = af(!1);
				return (
					(t = sr.bind(null, V, t.queue, !0, !1)),
					($t().memoizedState = t),
					[!1, t]
				);
			},
			useSyncExternalStore: function (t, e, l) {
				var a = V,
					u = $t();
				if (P) {
					if (l === void 0) throw Error(f(407));
					l = l();
				} else {
					if (((l = e()), ct === null)) throw Error(f(349));
					($ & 124) !== 0 || Ys(a, e, l);
				}
				u.memoizedState = l;
				var n = { value: l, getSnapshot: e };
				return (
					(u.queue = n),
					tr(Gs.bind(null, a, n, t), [t]),
					(a.flags |= 2048),
					aa(9, nn(), js.bind(null, a, n, l, e), null),
					l
				);
			},
			useId: function () {
				var t = $t(),
					e = ct.identifierPrefix;
				if (P) {
					var l = _e,
						a = Ne;
					(l = (a & ~(1 << (32 - te(a) - 1))).toString(32) + l),
						(e = "«" + e + "R" + l),
						(l = ln++),
						0 < l && (e += "H" + l.toString(32)),
						(e += "»");
				} else (l = lg++), (e = "«" + e + "r" + l.toString(32) + "»");
				return (t.memoizedState = e);
			},
			useHostTransitionStatus: sf,
			useFormState: $s,
			useActionState: $s,
			useOptimistic: function (t) {
				var e = $t();
				e.memoizedState = e.baseState = t;
				var l = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(e.queue = l), (e = rf.bind(null, V, !0, l)), (l.dispatch = e), [t, e]
				);
			},
			useMemoCache: tf,
			useCacheRefresh: function () {
				return ($t().memoizedState = fg.bind(null, V));
			},
		},
		pr = {
			readContext: Gt,
			use: an,
			useCallback: ir,
			useContext: Gt,
			useEffect: er,
			useImperativeHandle: nr,
			useInsertionEffect: lr,
			useLayoutEffect: ar,
			useMemo: fr,
			useReducer: un,
			useRef: Is,
			useState: function () {
				return un(Ce);
			},
			useDebugValue: nf,
			useDeferredValue: function (t, e) {
				var l = Tt();
				return cr(l, ut.memoizedState, t, e);
			},
			useTransition: function () {
				var t = un(Ce)[0],
					e = Tt().memoizedState;
				return [typeof t == "boolean" ? t : $a(t), e];
			},
			useSyncExternalStore: qs,
			useId: dr,
			useHostTransitionStatus: sf,
			useFormState: Fs,
			useActionState: Fs,
			useOptimistic: function (t, e) {
				var l = Tt();
				return Vs(l, ut, t, e);
			},
			useMemoCache: tf,
			useCacheRefresh: hr,
		},
		sg = {
			readContext: Gt,
			use: an,
			useCallback: ir,
			useContext: Gt,
			useEffect: er,
			useImperativeHandle: nr,
			useInsertionEffect: lr,
			useLayoutEffect: ar,
			useMemo: fr,
			useReducer: lf,
			useRef: Is,
			useState: function () {
				return lf(Ce);
			},
			useDebugValue: nf,
			useDeferredValue: function (t, e) {
				var l = Tt();
				return ut === null ? ff(l, t, e) : cr(l, ut.memoizedState, t, e);
			},
			useTransition: function () {
				var t = lf(Ce)[0],
					e = Tt().memoizedState;
				return [typeof t == "boolean" ? t : $a(t), e];
			},
			useSyncExternalStore: qs,
			useId: dr,
			useHostTransitionStatus: sf,
			useFormState: Ps,
			useActionState: Ps,
			useOptimistic: function (t, e) {
				var l = Tt();
				return ut !== null
					? Vs(l, ut, t, e)
					: ((l.baseState = t), [t, l.queue.dispatch]);
			},
			useMemoCache: tf,
			useCacheRefresh: hr,
		},
		ua = null,
		Pa = 0;
	function rn(t) {
		var e = Pa;
		return (Pa += 1), ua === null && (ua = []), Rs(ua, t, e);
	}
	function Ia(t, e) {
		(e = e.props.ref), (t.ref = e !== void 0 ? e : null);
	}
	function on(t, e) {
		throw e.$$typeof === U
			? Error(f(525))
			: ((t = Object.prototype.toString.call(e)),
				Error(
					f(
						31,
						t === "[object Object]"
							? "object with keys {" + Object.keys(e).join(", ") + "}"
							: t,
					),
				));
	}
	function Sr(t) {
		var e = t._init;
		return e(t._payload);
	}
	function br(t) {
		function e(b, y) {
			if (t) {
				var O = b.deletions;
				O === null ? ((b.deletions = [y]), (b.flags |= 16)) : O.push(y);
			}
		}
		function l(b, y) {
			if (!t) return null;
			for (; y !== null; ) e(b, y), (y = y.sibling);
			return null;
		}
		function a(b) {
			for (var y = new Map(); b !== null; )
				b.key !== null ? y.set(b.key, b) : y.set(b.index, b), (b = b.sibling);
			return y;
		}
		function u(b, y) {
			return (b = Ue(b, y)), (b.index = 0), (b.sibling = null), b;
		}
		function n(b, y, O) {
			return (
				(b.index = O),
				t
					? ((O = b.alternate),
						O !== null
							? ((O = O.index), O < y ? ((b.flags |= 67108866), y) : O)
							: ((b.flags |= 67108866), y))
					: ((b.flags |= 1048576), y)
			);
		}
		function c(b) {
			return t && b.alternate === null && (b.flags |= 67108866), b;
		}
		function o(b, y, O, M) {
			return y === null || y.tag !== 6
				? ((y = Ui(O, b.mode, M)), (y.return = b), y)
				: ((y = u(y, O)), (y.return = b), y);
		}
		function g(b, y, O, M) {
			var C = O.type;
			return C === H
				? z(b, y, O.props.children, M, O.key)
				: y !== null &&
					  (y.elementType === C ||
							(typeof C == "object" &&
								C !== null &&
								C.$$typeof === _t &&
								Sr(C) === y.type))
					? ((y = u(y, O.props)), Ia(y, O), (y.return = b), y)
					: ((y = wu(O.type, O.key, O.props, null, b.mode, M)),
						Ia(y, O),
						(y.return = b),
						y);
		}
		function T(b, y, O, M) {
			return y === null ||
				y.tag !== 4 ||
				y.stateNode.containerInfo !== O.containerInfo ||
				y.stateNode.implementation !== O.implementation
				? ((y = Ni(O, b.mode, M)), (y.return = b), y)
				: ((y = u(y, O.children || [])), (y.return = b), y);
		}
		function z(b, y, O, M, C) {
			return y === null || y.tag !== 7
				? ((y = bl(O, b.mode, M, C)), (y.return = b), y)
				: ((y = u(y, O)), (y.return = b), y);
		}
		function R(b, y, O) {
			if (
				(typeof y == "string" && y !== "") ||
				typeof y == "number" ||
				typeof y == "bigint"
			)
				return (y = Ui("" + y, b.mode, O)), (y.return = b), y;
			if (typeof y == "object" && y !== null) {
				switch (y.$$typeof) {
					case _:
						return (
							(O = wu(y.type, y.key, y.props, null, b.mode, O)),
							Ia(O, y),
							(O.return = b),
							O
						);
					case L:
						return (y = Ni(y, b.mode, O)), (y.return = b), y;
					case _t:
						var M = y._init;
						return (y = M(y._payload)), R(b, y, O);
				}
				if (ce(y) || wt(y))
					return (y = bl(y, b.mode, O, null)), (y.return = b), y;
				if (typeof y.then == "function") return R(b, rn(y), O);
				if (y.$$typeof === mt) return R(b, Fu(b, y), O);
				on(b, y);
			}
			return null;
		}
		function x(b, y, O, M) {
			var C = y !== null ? y.key : null;
			if (
				(typeof O == "string" && O !== "") ||
				typeof O == "number" ||
				typeof O == "bigint"
			)
				return C !== null ? null : o(b, y, "" + O, M);
			if (typeof O == "object" && O !== null) {
				switch (O.$$typeof) {
					case _:
						return O.key === C ? g(b, y, O, M) : null;
					case L:
						return O.key === C ? T(b, y, O, M) : null;
					case _t:
						return (C = O._init), (O = C(O._payload)), x(b, y, O, M);
				}
				if (ce(O) || wt(O)) return C !== null ? null : z(b, y, O, M, null);
				if (typeof O.then == "function") return x(b, y, rn(O), M);
				if (O.$$typeof === mt) return x(b, y, Fu(b, O), M);
				on(b, O);
			}
			return null;
		}
		function E(b, y, O, M, C) {
			if (
				(typeof M == "string" && M !== "") ||
				typeof M == "number" ||
				typeof M == "bigint"
			)
				return (b = b.get(O) || null), o(y, b, "" + M, C);
			if (typeof M == "object" && M !== null) {
				switch (M.$$typeof) {
					case _:
						return (
							(b = b.get(M.key === null ? O : M.key) || null), g(y, b, M, C)
						);
					case L:
						return (
							(b = b.get(M.key === null ? O : M.key) || null), T(y, b, M, C)
						);
					case _t:
						var Z = M._init;
						return (M = Z(M._payload)), E(b, y, O, M, C);
				}
				if (ce(M) || wt(M)) return (b = b.get(O) || null), z(y, b, M, C, null);
				if (typeof M.then == "function") return E(b, y, O, rn(M), C);
				if (M.$$typeof === mt) return E(b, y, O, Fu(y, M), C);
				on(y, M);
			}
			return null;
		}
		function Q(b, y, O, M) {
			for (
				var C = null, Z = null, q = y, G = (y = 0), Ut = null;
				q !== null && G < O.length;
				G++
			) {
				q.index > G ? ((Ut = q), (q = null)) : (Ut = q.sibling);
				var F = x(b, q, O[G], M);
				if (F === null) {
					q === null && (q = Ut);
					break;
				}
				t && q && F.alternate === null && e(b, q),
					(y = n(F, y, G)),
					Z === null ? (C = F) : (Z.sibling = F),
					(Z = F),
					(q = Ut);
			}
			if (G === O.length) return l(b, q), P && Tl(b, G), C;
			if (q === null) {
				for (; G < O.length; G++)
					(q = R(b, O[G], M)),
						q !== null &&
							((y = n(q, y, G)),
							Z === null ? (C = q) : (Z.sibling = q),
							(Z = q));
				return P && Tl(b, G), C;
			}
			for (q = a(q); G < O.length; G++)
				(Ut = E(q, b, G, O[G], M)),
					Ut !== null &&
						(t &&
							Ut.alternate !== null &&
							q.delete(Ut.key === null ? G : Ut.key),
						(y = n(Ut, y, G)),
						Z === null ? (C = Ut) : (Z.sibling = Ut),
						(Z = Ut));
			return (
				t &&
					q.forEach(function (gl) {
						return e(b, gl);
					}),
				P && Tl(b, G),
				C
			);
		}
		function j(b, y, O, M) {
			if (O == null) throw Error(f(151));
			for (
				var C = null, Z = null, q = y, G = (y = 0), Ut = null, F = O.next();
				q !== null && !F.done;
				G++, F = O.next()
			) {
				q.index > G ? ((Ut = q), (q = null)) : (Ut = q.sibling);
				var gl = x(b, q, F.value, M);
				if (gl === null) {
					q === null && (q = Ut);
					break;
				}
				t && q && gl.alternate === null && e(b, q),
					(y = n(gl, y, G)),
					Z === null ? (C = gl) : (Z.sibling = gl),
					(Z = gl),
					(q = Ut);
			}
			if (F.done) return l(b, q), P && Tl(b, G), C;
			if (q === null) {
				for (; !F.done; G++, F = O.next())
					(F = R(b, F.value, M)),
						F !== null &&
							((y = n(F, y, G)),
							Z === null ? (C = F) : (Z.sibling = F),
							(Z = F));
				return P && Tl(b, G), C;
			}
			for (q = a(q); !F.done; G++, F = O.next())
				(F = E(q, b, G, F.value, M)),
					F !== null &&
						(t && F.alternate !== null && q.delete(F.key === null ? G : F.key),
						(y = n(F, y, G)),
						Z === null ? (C = F) : (Z.sibling = F),
						(Z = F));
			return (
				t &&
					q.forEach(function (r0) {
						return e(b, r0);
					}),
				P && Tl(b, G),
				C
			);
		}
		function it(b, y, O, M) {
			if (
				(typeof O == "object" &&
					O !== null &&
					O.type === H &&
					O.key === null &&
					(O = O.props.children),
				typeof O == "object" && O !== null)
			) {
				switch (O.$$typeof) {
					case _:
						t: {
							for (var C = O.key; y !== null; ) {
								if (y.key === C) {
									if (((C = O.type), C === H)) {
										if (y.tag === 7) {
											l(b, y.sibling),
												(M = u(y, O.props.children)),
												(M.return = b),
												(b = M);
											break t;
										}
									} else if (
										y.elementType === C ||
										(typeof C == "object" &&
											C !== null &&
											C.$$typeof === _t &&
											Sr(C) === y.type)
									) {
										l(b, y.sibling),
											(M = u(y, O.props)),
											Ia(M, O),
											(M.return = b),
											(b = M);
										break t;
									}
									l(b, y);
									break;
								} else e(b, y);
								y = y.sibling;
							}
							O.type === H
								? ((M = bl(O.props.children, b.mode, M, O.key)),
									(M.return = b),
									(b = M))
								: ((M = wu(O.type, O.key, O.props, null, b.mode, M)),
									Ia(M, O),
									(M.return = b),
									(b = M));
						}
						return c(b);
					case L:
						t: {
							for (C = O.key; y !== null; ) {
								if (y.key === C)
									if (
										y.tag === 4 &&
										y.stateNode.containerInfo === O.containerInfo &&
										y.stateNode.implementation === O.implementation
									) {
										l(b, y.sibling),
											(M = u(y, O.children || [])),
											(M.return = b),
											(b = M);
										break t;
									} else {
										l(b, y);
										break;
									}
								else e(b, y);
								y = y.sibling;
							}
							(M = Ni(O, b.mode, M)), (M.return = b), (b = M);
						}
						return c(b);
					case _t:
						return (C = O._init), (O = C(O._payload)), it(b, y, O, M);
				}
				if (ce(O)) return Q(b, y, O, M);
				if (wt(O)) {
					if (((C = wt(O)), typeof C != "function")) throw Error(f(150));
					return (O = C.call(O)), j(b, y, O, M);
				}
				if (typeof O.then == "function") return it(b, y, rn(O), M);
				if (O.$$typeof === mt) return it(b, y, Fu(b, O), M);
				on(b, O);
			}
			return (typeof O == "string" && O !== "") ||
				typeof O == "number" ||
				typeof O == "bigint"
				? ((O = "" + O),
					y !== null && y.tag === 6
						? (l(b, y.sibling), (M = u(y, O)), (M.return = b), (b = M))
						: (l(b, y), (M = Ui(O, b.mode, M)), (M.return = b), (b = M)),
					c(b))
				: l(b, y);
		}
		return function (b, y, O, M) {
			try {
				Pa = 0;
				var C = it(b, y, O, M);
				return (ua = null), C;
			} catch (q) {
				if (q === Va || q === Pu) throw q;
				var Z = le(29, q, null, b.mode);
				return (Z.lanes = M), (Z.return = b), Z;
			} finally {
			}
		};
	}
	var na = br(!0),
		Or = br(!1),
		me = tt(null),
		xe = null;
	function Ie(t) {
		var e = t.alternate;
		k(At, At.current & 1),
			k(me, t),
			xe === null &&
				(e === null || ta.current !== null || e.memoizedState !== null) &&
				(xe = t);
	}
	function Tr(t) {
		if (t.tag === 22) {
			if ((k(At, At.current), k(me, t), xe === null)) {
				var e = t.alternate;
				e !== null && e.memoizedState !== null && (xe = t);
			}
		} else tl();
	}
	function tl() {
		k(At, At.current), k(me, me.current);
	}
	function Be(t) {
		W(me), xe === t && (xe = null), W(At);
	}
	var At = tt(0);
	function dn(t) {
		for (var e = t; e !== null; ) {
			if (e.tag === 13) {
				var l = e.memoizedState;
				if (
					l !== null &&
					((l = l.dehydrated), l === null || l.data === "$?" || tc(l))
				)
					return e;
			} else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
				if ((e.flags & 128) !== 0) return e;
			} else if (e.child !== null) {
				(e.child.return = e), (e = e.child);
				continue;
			}
			if (e === t) break;
			for (; e.sibling === null; ) {
				if (e.return === null || e.return === t) return null;
				e = e.return;
			}
			(e.sibling.return = e.return), (e = e.sibling);
		}
		return null;
	}
	function of(t, e, l, a) {
		(e = t.memoizedState),
			(l = l(a, e)),
			(l = l == null ? e : A({}, e, l)),
			(t.memoizedState = l),
			t.lanes === 0 && (t.updateQueue.baseState = l);
	}
	var df = {
		enqueueSetState: function (t, e, l) {
			t = t._reactInternals;
			var a = ie(),
				u = Fe(a);
			(u.payload = e),
				l != null && (u.callback = l),
				(e = We(t, u, a)),
				e !== null && (fe(e, t, a), Ka(e, t, a));
		},
		enqueueReplaceState: function (t, e, l) {
			t = t._reactInternals;
			var a = ie(),
				u = Fe(a);
			(u.tag = 1),
				(u.payload = e),
				l != null && (u.callback = l),
				(e = We(t, u, a)),
				e !== null && (fe(e, t, a), Ka(e, t, a));
		},
		enqueueForceUpdate: function (t, e) {
			t = t._reactInternals;
			var l = ie(),
				a = Fe(l);
			(a.tag = 2),
				e != null && (a.callback = e),
				(e = We(t, a, l)),
				e !== null && (fe(e, t, l), Ka(e, t, l));
		},
	};
	function xr(t, e, l, a, u, n, c) {
		return (
			(t = t.stateNode),
			typeof t.shouldComponentUpdate == "function"
				? t.shouldComponentUpdate(a, n, c)
				: e.prototype && e.prototype.isPureReactComponent
					? !Ca(l, a) || !Ca(u, n)
					: !0
		);
	}
	function Er(t, e, l, a) {
		(t = e.state),
			typeof e.componentWillReceiveProps == "function" &&
				e.componentWillReceiveProps(l, a),
			typeof e.UNSAFE_componentWillReceiveProps == "function" &&
				e.UNSAFE_componentWillReceiveProps(l, a),
			e.state !== t && df.enqueueReplaceState(e, e.state, null);
	}
	function Rl(t, e) {
		var l = e;
		if ("ref" in e) {
			l = {};
			for (var a in e) a !== "ref" && (l[a] = e[a]);
		}
		if ((t = t.defaultProps)) {
			l === e && (l = A({}, l));
			for (var u in t) l[u] === void 0 && (l[u] = t[u]);
		}
		return l;
	}
	var hn =
		typeof reportError == "function"
			? reportError
			: function (t) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var e = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof t == "object" &&
								t !== null &&
								typeof t.message == "string"
									? String(t.message)
									: String(t),
							error: t,
						});
						if (!window.dispatchEvent(e)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", t);
						return;
					}
					console.error(t);
				};
	function Ar(t) {
		hn(t);
	}
	function Dr(t) {
		console.error(t);
	}
	function zr(t) {
		hn(t);
	}
	function gn(t, e) {
		try {
			var l = t.onUncaughtError;
			l(e.value, { componentStack: e.stack });
		} catch (a) {
			setTimeout(function () {
				throw a;
			});
		}
	}
	function Mr(t, e, l) {
		try {
			var a = t.onCaughtError;
			a(l.value, {
				componentStack: l.stack,
				errorBoundary: e.tag === 1 ? e.stateNode : null,
			});
		} catch (u) {
			setTimeout(function () {
				throw u;
			});
		}
	}
	function hf(t, e, l) {
		return (
			(l = Fe(l)),
			(l.tag = 3),
			(l.payload = { element: null }),
			(l.callback = function () {
				gn(t, e);
			}),
			l
		);
	}
	function Rr(t) {
		return (t = Fe(t)), (t.tag = 3), t;
	}
	function Ur(t, e, l, a) {
		var u = l.type.getDerivedStateFromError;
		if (typeof u == "function") {
			var n = a.value;
			(t.payload = function () {
				return u(n);
			}),
				(t.callback = function () {
					Mr(e, l, a);
				});
		}
		var c = l.stateNode;
		c !== null &&
			typeof c.componentDidCatch == "function" &&
			(t.callback = function () {
				Mr(e, l, a),
					typeof u != "function" &&
						(il === null ? (il = new Set([this])) : il.add(this));
				var o = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: o !== null ? o : "",
				});
			});
	}
	function rg(t, e, l, a, u) {
		if (
			((l.flags |= 32768),
			a !== null && typeof a == "object" && typeof a.then == "function")
		) {
			if (
				((e = l.alternate),
				e !== null && Ga(e, l, u, !0),
				(l = me.current),
				l !== null)
			) {
				switch (l.tag) {
					case 13:
						return (
							xe === null ? qf() : l.alternate === null && gt === 0 && (gt = 3),
							(l.flags &= -257),
							(l.flags |= 65536),
							(l.lanes = u),
							a === Qi
								? (l.flags |= 16384)
								: ((e = l.updateQueue),
									e === null ? (l.updateQueue = new Set([a])) : e.add(a),
									jf(t, a, u)),
							!1
						);
					case 22:
						return (
							(l.flags |= 65536),
							a === Qi
								? (l.flags |= 16384)
								: ((e = l.updateQueue),
									e === null
										? ((e = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([a]),
											}),
											(l.updateQueue = e))
										: ((l = e.retryQueue),
											l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
									jf(t, a, u)),
							!1
						);
				}
				throw Error(f(435, l.tag));
			}
			return jf(t, a, u), qf(), !1;
		}
		if (P)
			return (
				(e = me.current),
				e !== null
					? ((e.flags & 65536) === 0 && (e.flags |= 256),
						(e.flags |= 65536),
						(e.lanes = u),
						a !== Li && ((t = Error(f(422), { cause: a })), ja(oe(t, l))))
					: (a !== Li && ((e = Error(f(423), { cause: a })), ja(oe(e, l))),
						(t = t.current.alternate),
						(t.flags |= 65536),
						(u &= -u),
						(t.lanes |= u),
						(a = oe(a, l)),
						(u = hf(t.stateNode, a, u)),
						Zi(t, u),
						gt !== 4 && (gt = 2)),
				!1
			);
		var n = Error(f(520), { cause: a });
		if (
			((n = oe(n, l)),
			iu === null ? (iu = [n]) : iu.push(n),
			gt !== 4 && (gt = 2),
			e === null)
		)
			return !0;
		(a = oe(a, l)), (l = e);
		do {
			switch (l.tag) {
				case 3:
					return (
						(l.flags |= 65536),
						(t = u & -u),
						(l.lanes |= t),
						(t = hf(l.stateNode, a, t)),
						Zi(l, t),
						!1
					);
				case 1:
					if (
						((e = l.type),
						(n = l.stateNode),
						(l.flags & 128) === 0 &&
							(typeof e.getDerivedStateFromError == "function" ||
								(n !== null &&
									typeof n.componentDidCatch == "function" &&
									(il === null || !il.has(n)))))
					)
						return (
							(l.flags |= 65536),
							(u &= -u),
							(l.lanes |= u),
							(u = Rr(u)),
							Ur(u, t, l, a),
							Zi(l, u),
							!1
						);
			}
			l = l.return;
		} while (l !== null);
		return !1;
	}
	var Nr = Error(f(461)),
		Mt = !1;
	function Lt(t, e, l, a) {
		e.child = t === null ? Or(e, null, l, a) : na(e, t.child, l, a);
	}
	function _r(t, e, l, a, u) {
		l = l.render;
		var n = e.ref;
		if ("ref" in a) {
			var c = {};
			for (var o in a) o !== "ref" && (c[o] = a[o]);
		} else c = a;
		return (
			Dl(e),
			(a = $i(t, e, l, c, n, u)),
			(o = Fi()),
			t !== null && !Mt
				? (Wi(t, e, u), qe(t, e, u))
				: (P && o && _i(e), (e.flags |= 1), Lt(t, e, a, u), e.child)
		);
	}
	function Hr(t, e, l, a, u) {
		if (t === null) {
			var n = l.type;
			return typeof n == "function" &&
				!Ri(n) &&
				n.defaultProps === void 0 &&
				l.compare === null
				? ((e.tag = 15), (e.type = n), Lr(t, e, n, a, u))
				: ((t = wu(l.type, null, a, e, e.mode, u)),
					(t.ref = e.ref),
					(t.return = e),
					(e.child = t));
		}
		if (((n = t.child), !Of(t, u))) {
			var c = n.memoizedProps;
			if (
				((l = l.compare), (l = l !== null ? l : Ca), l(c, a) && t.ref === e.ref)
			)
				return qe(t, e, u);
		}
		return (
			(e.flags |= 1),
			(t = Ue(n, a)),
			(t.ref = e.ref),
			(t.return = e),
			(e.child = t)
		);
	}
	function Lr(t, e, l, a, u) {
		if (t !== null) {
			var n = t.memoizedProps;
			if (Ca(n, a) && t.ref === e.ref)
				if (((Mt = !1), (e.pendingProps = a = n), Of(t, u)))
					(t.flags & 131072) !== 0 && (Mt = !0);
				else return (e.lanes = t.lanes), qe(t, e, u);
		}
		return gf(t, e, l, a, u);
	}
	function Cr(t, e, l) {
		var a = e.pendingProps,
			u = a.children,
			n = t !== null ? t.memoizedState : null;
		if (a.mode === "hidden") {
			if ((e.flags & 128) !== 0) {
				if (((a = n !== null ? n.baseLanes | l : l), t !== null)) {
					for (u = e.child = t.child, n = 0; u !== null; )
						(n = n | u.lanes | u.childLanes), (u = u.sibling);
					e.childLanes = n & ~a;
				} else (e.childLanes = 0), (e.child = null);
				return Br(t, e, a, l);
			}
			if ((l & 536870912) !== 0)
				(e.memoizedState = { baseLanes: 0, cachePool: null }),
					t !== null && Wu(e, n !== null ? n.cachePool : null),
					n !== null ? Ls(e, n) : wi(),
					Tr(e);
			else
				return (
					(e.lanes = e.childLanes = 536870912),
					Br(t, e, n !== null ? n.baseLanes | l : l, l)
				);
		} else
			n !== null
				? (Wu(e, n.cachePool), Ls(e, n), tl(), (e.memoizedState = null))
				: (t !== null && Wu(e, null), wi(), tl());
		return Lt(t, e, u, l), e.child;
	}
	function Br(t, e, l, a) {
		var u = Gi();
		return (
			(u = u === null ? null : { parent: Et._currentValue, pool: u }),
			(e.memoizedState = { baseLanes: l, cachePool: u }),
			t !== null && Wu(e, null),
			wi(),
			Tr(e),
			t !== null && Ga(t, e, a, !0),
			null
		);
	}
	function mn(t, e) {
		var l = e.ref;
		if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
		else {
			if (typeof l != "function" && typeof l != "object") throw Error(f(284));
			(t === null || t.ref !== l) && (e.flags |= 4194816);
		}
	}
	function gf(t, e, l, a, u) {
		return (
			Dl(e),
			(l = $i(t, e, l, a, void 0, u)),
			(a = Fi()),
			t !== null && !Mt
				? (Wi(t, e, u), qe(t, e, u))
				: (P && a && _i(e), (e.flags |= 1), Lt(t, e, l, u), e.child)
		);
	}
	function qr(t, e, l, a, u, n) {
		return (
			Dl(e),
			(e.updateQueue = null),
			(l = Bs(e, a, l, u)),
			Cs(t),
			(a = Fi()),
			t !== null && !Mt
				? (Wi(t, e, n), qe(t, e, n))
				: (P && a && _i(e), (e.flags |= 1), Lt(t, e, l, n), e.child)
		);
	}
	function Yr(t, e, l, a, u) {
		if ((Dl(e), e.stateNode === null)) {
			var n = $l,
				c = l.contextType;
			typeof c == "object" && c !== null && (n = Gt(c)),
				(n = new l(a, n)),
				(e.memoizedState =
					n.state !== null && n.state !== void 0 ? n.state : null),
				(n.updater = df),
				(e.stateNode = n),
				(n._reactInternals = e),
				(n = e.stateNode),
				(n.props = a),
				(n.state = e.memoizedState),
				(n.refs = {}),
				Xi(e),
				(c = l.contextType),
				(n.context = typeof c == "object" && c !== null ? Gt(c) : $l),
				(n.state = e.memoizedState),
				(c = l.getDerivedStateFromProps),
				typeof c == "function" && (of(e, l, c, a), (n.state = e.memoizedState)),
				typeof l.getDerivedStateFromProps == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function" ||
					(typeof n.UNSAFE_componentWillMount != "function" &&
						typeof n.componentWillMount != "function") ||
					((c = n.state),
					typeof n.componentWillMount == "function" && n.componentWillMount(),
					typeof n.UNSAFE_componentWillMount == "function" &&
						n.UNSAFE_componentWillMount(),
					c !== n.state && df.enqueueReplaceState(n, n.state, null),
					Ja(e, a, n, u),
					wa(),
					(n.state = e.memoizedState)),
				typeof n.componentDidMount == "function" && (e.flags |= 4194308),
				(a = !0);
		} else if (t === null) {
			n = e.stateNode;
			var o = e.memoizedProps,
				g = Rl(l, o);
			n.props = g;
			var T = n.context,
				z = l.contextType;
			(c = $l), typeof z == "object" && z !== null && (c = Gt(z));
			var R = l.getDerivedStateFromProps;
			(z =
				typeof R == "function" ||
				typeof n.getSnapshotBeforeUpdate == "function"),
				(o = e.pendingProps !== o),
				z ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((o || T !== c) && Er(e, n, a, c)),
				($e = !1);
			var x = e.memoizedState;
			(n.state = x),
				Ja(e, a, n, u),
				wa(),
				(T = e.memoizedState),
				o || x !== T || $e
					? (typeof R == "function" && (of(e, l, R, a), (T = e.memoizedState)),
						(g = $e || xr(e, l, g, a, x, T, c))
							? (z ||
									(typeof n.UNSAFE_componentWillMount != "function" &&
										typeof n.componentWillMount != "function") ||
									(typeof n.componentWillMount == "function" &&
										n.componentWillMount(),
									typeof n.UNSAFE_componentWillMount == "function" &&
										n.UNSAFE_componentWillMount()),
								typeof n.componentDidMount == "function" &&
									(e.flags |= 4194308))
							: (typeof n.componentDidMount == "function" &&
									(e.flags |= 4194308),
								(e.memoizedProps = a),
								(e.memoizedState = T)),
						(n.props = a),
						(n.state = T),
						(n.context = c),
						(a = g))
					: (typeof n.componentDidMount == "function" && (e.flags |= 4194308),
						(a = !1));
		} else {
			(n = e.stateNode),
				Vi(t, e),
				(c = e.memoizedProps),
				(z = Rl(l, c)),
				(n.props = z),
				(R = e.pendingProps),
				(x = n.context),
				(T = l.contextType),
				(g = $l),
				typeof T == "object" && T !== null && (g = Gt(T)),
				(o = l.getDerivedStateFromProps),
				(T =
					typeof o == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function") ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((c !== R || x !== g) && Er(e, n, a, g)),
				($e = !1),
				(x = e.memoizedState),
				(n.state = x),
				Ja(e, a, n, u),
				wa();
			var E = e.memoizedState;
			c !== R ||
			x !== E ||
			$e ||
			(t !== null && t.dependencies !== null && $u(t.dependencies))
				? (typeof o == "function" && (of(e, l, o, a), (E = e.memoizedState)),
					(z =
						$e ||
						xr(e, l, z, a, x, E, g) ||
						(t !== null && t.dependencies !== null && $u(t.dependencies)))
						? (T ||
								(typeof n.UNSAFE_componentWillUpdate != "function" &&
									typeof n.componentWillUpdate != "function") ||
								(typeof n.componentWillUpdate == "function" &&
									n.componentWillUpdate(a, E, g),
								typeof n.UNSAFE_componentWillUpdate == "function" &&
									n.UNSAFE_componentWillUpdate(a, E, g)),
							typeof n.componentDidUpdate == "function" && (e.flags |= 4),
							typeof n.getSnapshotBeforeUpdate == "function" &&
								(e.flags |= 1024))
						: (typeof n.componentDidUpdate != "function" ||
								(c === t.memoizedProps && x === t.memoizedState) ||
								(e.flags |= 4),
							typeof n.getSnapshotBeforeUpdate != "function" ||
								(c === t.memoizedProps && x === t.memoizedState) ||
								(e.flags |= 1024),
							(e.memoizedProps = a),
							(e.memoizedState = E)),
					(n.props = a),
					(n.state = E),
					(n.context = g),
					(a = z))
				: (typeof n.componentDidUpdate != "function" ||
						(c === t.memoizedProps && x === t.memoizedState) ||
						(e.flags |= 4),
					typeof n.getSnapshotBeforeUpdate != "function" ||
						(c === t.memoizedProps && x === t.memoizedState) ||
						(e.flags |= 1024),
					(a = !1));
		}
		return (
			(n = a),
			mn(t, e),
			(a = (e.flags & 128) !== 0),
			n || a
				? ((n = e.stateNode),
					(l =
						a && typeof l.getDerivedStateFromError != "function"
							? null
							: n.render()),
					(e.flags |= 1),
					t !== null && a
						? ((e.child = na(e, t.child, null, u)),
							(e.child = na(e, null, l, u)))
						: Lt(t, e, l, u),
					(e.memoizedState = n.state),
					(t = e.child))
				: (t = qe(t, e, u)),
			t
		);
	}
	function jr(t, e, l, a) {
		return Ya(), (e.flags |= 256), Lt(t, e, l, a), e.child;
	}
	var mf = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function yf(t) {
		return { baseLanes: t, cachePool: Ds() };
	}
	function vf(t, e, l) {
		return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= ye), t;
	}
	function Gr(t, e, l) {
		var a = e.pendingProps,
			u = !1,
			n = (e.flags & 128) !== 0,
			c;
		if (
			((c = n) ||
				(c =
					t !== null && t.memoizedState === null ? !1 : (At.current & 2) !== 0),
			c && ((u = !0), (e.flags &= -129)),
			(c = (e.flags & 32) !== 0),
			(e.flags &= -33),
			t === null)
		) {
			if (P) {
				if ((u ? Ie(e) : tl(), P)) {
					var o = ht,
						g;
					if ((g = o)) {
						t: {
							for (g = o, o = Te; g.nodeType !== 8; ) {
								if (!o) {
									o = null;
									break t;
								}
								if (((g = be(g.nextSibling)), g === null)) {
									o = null;
									break t;
								}
							}
							o = g;
						}
						o !== null
							? ((e.memoizedState = {
									dehydrated: o,
									treeContext: Ol !== null ? { id: Ne, overflow: _e } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(g = le(18, null, null, 0)),
								(g.stateNode = o),
								(g.return = e),
								(e.child = g),
								(Kt = e),
								(ht = null),
								(g = !0))
							: (g = !1);
					}
					g || El(e);
				}
				if (
					((o = e.memoizedState),
					o !== null && ((o = o.dehydrated), o !== null))
				)
					return tc(o) ? (e.lanes = 32) : (e.lanes = 536870912), null;
				Be(e);
			}
			return (
				(o = a.children),
				(a = a.fallback),
				u
					? (tl(),
						(u = e.mode),
						(o = yn({ mode: "hidden", children: o }, u)),
						(a = bl(a, u, l, null)),
						(o.return = e),
						(a.return = e),
						(o.sibling = a),
						(e.child = o),
						(u = e.child),
						(u.memoizedState = yf(l)),
						(u.childLanes = vf(t, c, l)),
						(e.memoizedState = mf),
						a)
					: (Ie(e), pf(e, o))
			);
		}
		if (
			((g = t.memoizedState), g !== null && ((o = g.dehydrated), o !== null))
		) {
			if (n)
				e.flags & 256
					? (Ie(e), (e.flags &= -257), (e = Sf(t, e, l)))
					: e.memoizedState !== null
						? (tl(), (e.child = t.child), (e.flags |= 128), (e = null))
						: (tl(),
							(u = a.fallback),
							(o = e.mode),
							(a = yn({ mode: "visible", children: a.children }, o)),
							(u = bl(u, o, l, null)),
							(u.flags |= 2),
							(a.return = e),
							(u.return = e),
							(a.sibling = u),
							(e.child = a),
							na(e, t.child, null, l),
							(a = e.child),
							(a.memoizedState = yf(l)),
							(a.childLanes = vf(t, c, l)),
							(e.memoizedState = mf),
							(e = u));
			else if ((Ie(e), tc(o))) {
				if (((c = o.nextSibling && o.nextSibling.dataset), c)) var T = c.dgst;
				(c = T),
					(a = Error(f(419))),
					(a.stack = ""),
					(a.digest = c),
					ja({ value: a, source: null, stack: null }),
					(e = Sf(t, e, l));
			} else if (
				(Mt || Ga(t, e, l, !1), (c = (l & t.childLanes) !== 0), Mt || c)
			) {
				if (
					((c = ct),
					c !== null &&
						((a = l & -l),
						(a = (a & 42) !== 0 ? 1 : ti(a)),
						(a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
						a !== 0 && a !== g.retryLane))
				)
					throw ((g.retryLane = a), kl(t, a), fe(c, t, a), Nr);
				o.data === "$?" || qf(), (e = Sf(t, e, l));
			} else
				o.data === "$?"
					? ((e.flags |= 192), (e.child = t.child), (e = null))
					: ((t = g.treeContext),
						(ht = be(o.nextSibling)),
						(Kt = e),
						(P = !0),
						(xl = null),
						(Te = !1),
						t !== null &&
							((he[ge++] = Ne),
							(he[ge++] = _e),
							(he[ge++] = Ol),
							(Ne = t.id),
							(_e = t.overflow),
							(Ol = e)),
						(e = pf(e, a.children)),
						(e.flags |= 4096));
			return e;
		}
		return u
			? (tl(),
				(u = a.fallback),
				(o = e.mode),
				(g = t.child),
				(T = g.sibling),
				(a = Ue(g, { mode: "hidden", children: a.children })),
				(a.subtreeFlags = g.subtreeFlags & 65011712),
				T !== null ? (u = Ue(T, u)) : ((u = bl(u, o, l, null)), (u.flags |= 2)),
				(u.return = e),
				(a.return = e),
				(a.sibling = u),
				(e.child = a),
				(a = u),
				(u = e.child),
				(o = t.child.memoizedState),
				o === null
					? (o = yf(l))
					: ((g = o.cachePool),
						g !== null
							? ((T = Et._currentValue),
								(g = g.parent !== T ? { parent: T, pool: T } : g))
							: (g = Ds()),
						(o = { baseLanes: o.baseLanes | l, cachePool: g })),
				(u.memoizedState = o),
				(u.childLanes = vf(t, c, l)),
				(e.memoizedState = mf),
				a)
			: (Ie(e),
				(l = t.child),
				(t = l.sibling),
				(l = Ue(l, { mode: "visible", children: a.children })),
				(l.return = e),
				(l.sibling = null),
				t !== null &&
					((c = e.deletions),
					c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
				(e.child = l),
				(e.memoizedState = null),
				l);
	}
	function pf(t, e) {
		return (
			(e = yn({ mode: "visible", children: e }, t.mode)),
			(e.return = t),
			(t.child = e)
		);
	}
	function yn(t, e) {
		return (
			(t = le(22, t, null, e)),
			(t.lanes = 0),
			(t.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			t
		);
	}
	function Sf(t, e, l) {
		return (
			na(e, t.child, null, l),
			(t = pf(e, e.pendingProps.children)),
			(t.flags |= 2),
			(e.memoizedState = null),
			t
		);
	}
	function Qr(t, e, l) {
		t.lanes |= e;
		var a = t.alternate;
		a !== null && (a.lanes |= e), Bi(t.return, e, l);
	}
	function bf(t, e, l, a, u) {
		var n = t.memoizedState;
		n === null
			? (t.memoizedState = {
					isBackwards: e,
					rendering: null,
					renderingStartTime: 0,
					last: a,
					tail: l,
					tailMode: u,
				})
			: ((n.isBackwards = e),
				(n.rendering = null),
				(n.renderingStartTime = 0),
				(n.last = a),
				(n.tail = l),
				(n.tailMode = u));
	}
	function Xr(t, e, l) {
		var a = e.pendingProps,
			u = a.revealOrder,
			n = a.tail;
		if ((Lt(t, e, a.children, l), (a = At.current), (a & 2) !== 0))
			(a = (a & 1) | 2), (e.flags |= 128);
		else {
			if (t !== null && (t.flags & 128) !== 0)
				t: for (t = e.child; t !== null; ) {
					if (t.tag === 13) t.memoizedState !== null && Qr(t, l, e);
					else if (t.tag === 19) Qr(t, l, e);
					else if (t.child !== null) {
						(t.child.return = t), (t = t.child);
						continue;
					}
					if (t === e) break t;
					for (; t.sibling === null; ) {
						if (t.return === null || t.return === e) break t;
						t = t.return;
					}
					(t.sibling.return = t.return), (t = t.sibling);
				}
			a &= 1;
		}
		switch ((k(At, a), u)) {
			case "forwards":
				for (l = e.child, u = null; l !== null; )
					(t = l.alternate),
						t !== null && dn(t) === null && (u = l),
						(l = l.sibling);
				(l = u),
					l === null
						? ((u = e.child), (e.child = null))
						: ((u = l.sibling), (l.sibling = null)),
					bf(e, !1, u, l, n);
				break;
			case "backwards":
				for (l = null, u = e.child, e.child = null; u !== null; ) {
					if (((t = u.alternate), t !== null && dn(t) === null)) {
						e.child = u;
						break;
					}
					(t = u.sibling), (u.sibling = l), (l = u), (u = t);
				}
				bf(e, !0, l, null, n);
				break;
			case "together":
				bf(e, !1, null, null, void 0);
				break;
			default:
				e.memoizedState = null;
		}
		return e.child;
	}
	function qe(t, e, l) {
		if (
			(t !== null && (e.dependencies = t.dependencies),
			(nl |= e.lanes),
			(l & e.childLanes) === 0)
		)
			if (t !== null) {
				if ((Ga(t, e, l, !1), (l & e.childLanes) === 0)) return null;
			} else return null;
		if (t !== null && e.child !== t.child) throw Error(f(153));
		if (e.child !== null) {
			for (
				t = e.child, l = Ue(t, t.pendingProps), e.child = l, l.return = e;
				t.sibling !== null;

			)
				(t = t.sibling),
					(l = l.sibling = Ue(t, t.pendingProps)),
					(l.return = e);
			l.sibling = null;
		}
		return e.child;
	}
	function Of(t, e) {
		return (t.lanes & e) !== 0
			? !0
			: ((t = t.dependencies), !!(t !== null && $u(t)));
	}
	function og(t, e, l) {
		switch (e.tag) {
			case 3:
				Du(e, e.stateNode.containerInfo),
					ke(e, Et, t.memoizedState.cache),
					Ya();
				break;
			case 27:
			case 5:
				$n(e);
				break;
			case 4:
				Du(e, e.stateNode.containerInfo);
				break;
			case 10:
				ke(e, e.type, e.memoizedProps.value);
				break;
			case 13:
				var a = e.memoizedState;
				if (a !== null)
					return a.dehydrated !== null
						? (Ie(e), (e.flags |= 128), null)
						: (l & e.child.childLanes) !== 0
							? Gr(t, e, l)
							: (Ie(e), (t = qe(t, e, l)), t !== null ? t.sibling : null);
				Ie(e);
				break;
			case 19:
				var u = (t.flags & 128) !== 0;
				if (
					((a = (l & e.childLanes) !== 0),
					a || (Ga(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
					u)
				) {
					if (a) return Xr(t, e, l);
					e.flags |= 128;
				}
				if (
					((u = e.memoizedState),
					u !== null &&
						((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
					k(At, At.current),
					a)
				)
					break;
				return null;
			case 22:
			case 23:
				return (e.lanes = 0), Cr(t, e, l);
			case 24:
				ke(e, Et, t.memoizedState.cache);
		}
		return qe(t, e, l);
	}
	function Vr(t, e, l) {
		if (t !== null)
			if (t.memoizedProps !== e.pendingProps) Mt = !0;
			else {
				if (!Of(t, l) && (e.flags & 128) === 0) return (Mt = !1), og(t, e, l);
				Mt = (t.flags & 131072) !== 0;
			}
		else (Mt = !1), P && (e.flags & 1048576) !== 0 && Ss(e, ku, e.index);
		switch (((e.lanes = 0), e.tag)) {
			case 16:
				t: {
					t = e.pendingProps;
					var a = e.elementType,
						u = a._init;
					if (((a = u(a._payload)), (e.type = a), typeof a == "function"))
						Ri(a)
							? ((t = Rl(a, t)), (e.tag = 1), (e = Yr(null, e, a, t, l)))
							: ((e.tag = 0), (e = gf(null, e, a, t, l)));
					else {
						if (a != null) {
							if (((u = a.$$typeof), u === ot)) {
								(e.tag = 11), (e = _r(null, e, a, t, l));
								break t;
							} else if (u === xt) {
								(e.tag = 14), (e = Hr(null, e, a, t, l));
								break t;
							}
						}
						throw ((e = Ht(a) || a), Error(f(306, e, "")));
					}
				}
				return e;
			case 0:
				return gf(t, e, e.type, e.pendingProps, l);
			case 1:
				return (a = e.type), (u = Rl(a, e.pendingProps)), Yr(t, e, a, u, l);
			case 3:
				t: {
					if ((Du(e, e.stateNode.containerInfo), t === null))
						throw Error(f(387));
					a = e.pendingProps;
					var n = e.memoizedState;
					(u = n.element), Vi(t, e), Ja(e, a, null, l);
					var c = e.memoizedState;
					if (
						((a = c.cache),
						ke(e, Et, a),
						a !== n.cache && qi(e, [Et], l, !0),
						wa(),
						(a = c.element),
						n.isDehydrated)
					)
						if (
							((n = { element: a, isDehydrated: !1, cache: c.cache }),
							(e.updateQueue.baseState = n),
							(e.memoizedState = n),
							e.flags & 256)
						) {
							e = jr(t, e, a, l);
							break t;
						} else if (a !== u) {
							(u = oe(Error(f(424)), e)), ja(u), (e = jr(t, e, a, l));
							break t;
						} else {
							switch (((t = e.stateNode.containerInfo), t.nodeType)) {
								case 9:
									t = t.body;
									break;
								default:
									t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
							}
							for (
								ht = be(t.firstChild),
									Kt = e,
									P = !0,
									xl = null,
									Te = !0,
									l = Or(e, null, a, l),
									e.child = l;
								l;

							)
								(l.flags = (l.flags & -3) | 4096), (l = l.sibling);
						}
					else {
						if ((Ya(), a === u)) {
							e = qe(t, e, l);
							break t;
						}
						Lt(t, e, a, l);
					}
					e = e.child;
				}
				return e;
			case 26:
				return (
					mn(t, e),
					t === null
						? (l = ko(e.type, null, e.pendingProps, null))
							? (e.memoizedState = l)
							: P ||
								((l = e.type),
								(t = e.pendingProps),
								(a = Un(Ze.current).createElement(l)),
								(a[jt] = e),
								(a[Jt] = t),
								Bt(a, l, t),
								zt(a),
								(e.stateNode = a))
						: (e.memoizedState = ko(
								e.type,
								t.memoizedProps,
								e.pendingProps,
								t.memoizedState,
							)),
					null
				);
			case 27:
				return (
					$n(e),
					t === null &&
						P &&
						((a = e.stateNode = Ko(e.type, e.pendingProps, Ze.current)),
						(Kt = e),
						(Te = !0),
						(u = ht),
						sl(e.type) ? ((ec = u), (ht = be(a.firstChild))) : (ht = u)),
					Lt(t, e, e.pendingProps.children, l),
					mn(t, e),
					t === null && (e.flags |= 4194304),
					e.child
				);
			case 5:
				return (
					t === null &&
						P &&
						((u = a = ht) &&
							((a = jg(a, e.type, e.pendingProps, Te)),
							a !== null
								? ((e.stateNode = a),
									(Kt = e),
									(ht = be(a.firstChild)),
									(Te = !1),
									(u = !0))
								: (u = !1)),
						u || El(e)),
					$n(e),
					(u = e.type),
					(n = e.pendingProps),
					(c = t !== null ? t.memoizedProps : null),
					(a = n.children),
					Wf(u, n) ? (a = null) : c !== null && Wf(u, c) && (e.flags |= 32),
					e.memoizedState !== null &&
						((u = $i(t, e, ag, null, null, l)), (mu._currentValue = u)),
					mn(t, e),
					Lt(t, e, a, l),
					e.child
				);
			case 6:
				return (
					t === null &&
						P &&
						((t = l = ht) &&
							((l = Gg(l, e.pendingProps, Te)),
							l !== null
								? ((e.stateNode = l), (Kt = e), (ht = null), (t = !0))
								: (t = !1)),
						t || El(e)),
					null
				);
			case 13:
				return Gr(t, e, l);
			case 4:
				return (
					Du(e, e.stateNode.containerInfo),
					(a = e.pendingProps),
					t === null ? (e.child = na(e, null, a, l)) : Lt(t, e, a, l),
					e.child
				);
			case 11:
				return _r(t, e, e.type, e.pendingProps, l);
			case 7:
				return Lt(t, e, e.pendingProps, l), e.child;
			case 8:
				return Lt(t, e, e.pendingProps.children, l), e.child;
			case 12:
				return Lt(t, e, e.pendingProps.children, l), e.child;
			case 10:
				return (
					(a = e.pendingProps),
					ke(e, e.type, a.value),
					Lt(t, e, a.children, l),
					e.child
				);
			case 9:
				return (
					(u = e.type._context),
					(a = e.pendingProps.children),
					Dl(e),
					(u = Gt(u)),
					(a = a(u)),
					(e.flags |= 1),
					Lt(t, e, a, l),
					e.child
				);
			case 14:
				return Hr(t, e, e.type, e.pendingProps, l);
			case 15:
				return Lr(t, e, e.type, e.pendingProps, l);
			case 19:
				return Xr(t, e, l);
			case 31:
				return (
					(a = e.pendingProps),
					(l = e.mode),
					(a = { mode: a.mode, children: a.children }),
					t === null
						? ((l = yn(a, l)),
							(l.ref = e.ref),
							(e.child = l),
							(l.return = e),
							(e = l))
						: ((l = Ue(t.child, a)),
							(l.ref = e.ref),
							(e.child = l),
							(l.return = e),
							(e = l)),
					e
				);
			case 22:
				return Cr(t, e, l);
			case 24:
				return (
					Dl(e),
					(a = Gt(Et)),
					t === null
						? ((u = Gi()),
							u === null &&
								((u = ct),
								(n = Yi()),
								(u.pooledCache = n),
								n.refCount++,
								n !== null && (u.pooledCacheLanes |= l),
								(u = n)),
							(e.memoizedState = { parent: a, cache: u }),
							Xi(e),
							ke(e, Et, u))
						: ((t.lanes & l) !== 0 && (Vi(t, e), Ja(e, null, null, l), wa()),
							(u = t.memoizedState),
							(n = e.memoizedState),
							u.parent !== a
								? ((u = { parent: a, cache: a }),
									(e.memoizedState = u),
									e.lanes === 0 &&
										(e.memoizedState = e.updateQueue.baseState = u),
									ke(e, Et, a))
								: ((a = n.cache),
									ke(e, Et, a),
									a !== u.cache && qi(e, [Et], l, !0))),
					Lt(t, e, e.pendingProps.children, l),
					e.child
				);
			case 29:
				throw e.pendingProps;
		}
		throw Error(f(156, e.tag));
	}
	function Ye(t) {
		t.flags |= 4;
	}
	function Zr(t, e) {
		if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
			t.flags &= -16777217;
		else if (((t.flags |= 16777216), !Io(e))) {
			if (
				((e = me.current),
				e !== null &&
					(($ & 4194048) === $
						? xe !== null
						: (($ & 62914560) !== $ && ($ & 536870912) === 0) || e !== xe))
			)
				throw ((Za = Qi), zs);
			t.flags |= 8192;
		}
	}
	function vn(t, e) {
		e !== null && (t.flags |= 4),
			t.flags & 16384 &&
				((e = t.tag !== 22 ? Tc() : 536870912), (t.lanes |= e), (sa |= e));
	}
	function tu(t, e) {
		if (!P)
			switch (t.tailMode) {
				case "hidden":
					e = t.tail;
					for (var l = null; e !== null; )
						e.alternate !== null && (l = e), (e = e.sibling);
					l === null ? (t.tail = null) : (l.sibling = null);
					break;
				case "collapsed":
					l = t.tail;
					for (var a = null; l !== null; )
						l.alternate !== null && (a = l), (l = l.sibling);
					a === null
						? e || t.tail === null
							? (t.tail = null)
							: (t.tail.sibling = null)
						: (a.sibling = null);
			}
	}
	function dt(t) {
		var e = t.alternate !== null && t.alternate.child === t.child,
			l = 0,
			a = 0;
		if (e)
			for (var u = t.child; u !== null; )
				(l |= u.lanes | u.childLanes),
					(a |= u.subtreeFlags & 65011712),
					(a |= u.flags & 65011712),
					(u.return = t),
					(u = u.sibling);
		else
			for (u = t.child; u !== null; )
				(l |= u.lanes | u.childLanes),
					(a |= u.subtreeFlags),
					(a |= u.flags),
					(u.return = t),
					(u = u.sibling);
		return (t.subtreeFlags |= a), (t.childLanes = l), e;
	}
	function dg(t, e, l) {
		var a = e.pendingProps;
		switch ((Hi(e), e.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return dt(e), null;
			case 1:
				return dt(e), null;
			case 3:
				return (
					(l = e.stateNode),
					(a = null),
					t !== null && (a = t.memoizedState.cache),
					e.memoizedState.cache !== a && (e.flags |= 2048),
					Le(Et),
					Hl(),
					l.pendingContext &&
						((l.context = l.pendingContext), (l.pendingContext = null)),
					(t === null || t.child === null) &&
						(qa(e)
							? Ye(e)
							: t === null ||
								(t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
								((e.flags |= 1024), Ts())),
					dt(e),
					null
				);
			case 26:
				return (
					(l = e.memoizedState),
					t === null
						? (Ye(e),
							l !== null ? (dt(e), Zr(e, l)) : (dt(e), (e.flags &= -16777217)))
						: l
							? l !== t.memoizedState
								? (Ye(e), dt(e), Zr(e, l))
								: (dt(e), (e.flags &= -16777217))
							: (t.memoizedProps !== a && Ye(e), dt(e), (e.flags &= -16777217)),
					null
				);
			case 27:
				zu(e), (l = Ze.current);
				var u = e.type;
				if (t !== null && e.stateNode != null) t.memoizedProps !== a && Ye(e);
				else {
					if (!a) {
						if (e.stateNode === null) throw Error(f(166));
						return dt(e), null;
					}
					(t = yt.current),
						qa(e) ? bs(e) : ((t = Ko(u, a, l)), (e.stateNode = t), Ye(e));
				}
				return dt(e), null;
			case 5:
				if ((zu(e), (l = e.type), t !== null && e.stateNode != null))
					t.memoizedProps !== a && Ye(e);
				else {
					if (!a) {
						if (e.stateNode === null) throw Error(f(166));
						return dt(e), null;
					}
					if (((t = yt.current), qa(e))) bs(e);
					else {
						switch (((u = Un(Ze.current)), t)) {
							case 1:
								t = u.createElementNS("http://www.w3.org/2000/svg", l);
								break;
							case 2:
								t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
								break;
							default:
								switch (l) {
									case "svg":
										t = u.createElementNS("http://www.w3.org/2000/svg", l);
										break;
									case "math":
										t = u.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											l,
										);
										break;
									case "script":
										(t = u.createElement("div")),
											(t.innerHTML = "<script><\/script>"),
											(t = t.removeChild(t.firstChild));
										break;
									case "select":
										(t =
											typeof a.is == "string"
												? u.createElement("select", { is: a.is })
												: u.createElement("select")),
											a.multiple
												? (t.multiple = !0)
												: a.size && (t.size = a.size);
										break;
									default:
										t =
											typeof a.is == "string"
												? u.createElement(l, { is: a.is })
												: u.createElement(l);
								}
						}
						(t[jt] = e), (t[Jt] = a);
						t: for (u = e.child; u !== null; ) {
							if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
							else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
								(u.child.return = u), (u = u.child);
								continue;
							}
							if (u === e) break t;
							for (; u.sibling === null; ) {
								if (u.return === null || u.return === e) break t;
								u = u.return;
							}
							(u.sibling.return = u.return), (u = u.sibling);
						}
						e.stateNode = t;
						t: switch ((Bt(t, l, a), l)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								t = !!a.autoFocus;
								break t;
							case "img":
								t = !0;
								break t;
							default:
								t = !1;
						}
						t && Ye(e);
					}
				}
				return dt(e), (e.flags &= -16777217), null;
			case 6:
				if (t && e.stateNode != null) t.memoizedProps !== a && Ye(e);
				else {
					if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
					if (((t = Ze.current), qa(e))) {
						if (
							((t = e.stateNode),
							(l = e.memoizedProps),
							(a = null),
							(u = Kt),
							u !== null)
						)
							switch (u.tag) {
								case 27:
								case 5:
									a = u.memoizedProps;
							}
						(t[jt] = e),
							(t = !!(
								t.nodeValue === l ||
								(a !== null && a.suppressHydrationWarning === !0) ||
								Yo(t.nodeValue, l)
							)),
							t || El(e);
					} else (t = Un(t).createTextNode(a)), (t[jt] = e), (e.stateNode = t);
				}
				return dt(e), null;
			case 13:
				if (
					((a = e.memoizedState),
					t === null ||
						(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
				) {
					if (((u = qa(e)), a !== null && a.dehydrated !== null)) {
						if (t === null) {
							if (!u) throw Error(f(318));
							if (
								((u = e.memoizedState),
								(u = u !== null ? u.dehydrated : null),
								!u)
							)
								throw Error(f(317));
							u[jt] = e;
						} else
							Ya(),
								(e.flags & 128) === 0 && (e.memoizedState = null),
								(e.flags |= 4);
						dt(e), (u = !1);
					} else
						(u = Ts()),
							t !== null &&
								t.memoizedState !== null &&
								(t.memoizedState.hydrationErrors = u),
							(u = !0);
					if (!u) return e.flags & 256 ? (Be(e), e) : (Be(e), null);
				}
				if ((Be(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
				if (
					((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
				) {
					(a = e.child),
						(u = null),
						a.alternate !== null &&
							a.alternate.memoizedState !== null &&
							a.alternate.memoizedState.cachePool !== null &&
							(u = a.alternate.memoizedState.cachePool.pool);
					var n = null;
					a.memoizedState !== null &&
						a.memoizedState.cachePool !== null &&
						(n = a.memoizedState.cachePool.pool),
						n !== u && (a.flags |= 2048);
				}
				return (
					l !== t && l && (e.child.flags |= 8192),
					vn(e, e.updateQueue),
					dt(e),
					null
				);
			case 4:
				return Hl(), t === null && wf(e.stateNode.containerInfo), dt(e), null;
			case 10:
				return Le(e.type), dt(e), null;
			case 19:
				if ((W(At), (u = e.memoizedState), u === null)) return dt(e), null;
				if (((a = (e.flags & 128) !== 0), (n = u.rendering), n === null))
					if (a) tu(u, !1);
					else {
						if (gt !== 0 || (t !== null && (t.flags & 128) !== 0))
							for (t = e.child; t !== null; ) {
								if (((n = dn(t)), n !== null)) {
									for (
										e.flags |= 128,
											tu(u, !1),
											t = n.updateQueue,
											e.updateQueue = t,
											vn(e, t),
											e.subtreeFlags = 0,
											t = l,
											l = e.child;
										l !== null;

									)
										ps(l, t), (l = l.sibling);
									return k(At, (At.current & 1) | 2), e.child;
								}
								t = t.sibling;
							}
						u.tail !== null &&
							Oe() > bn &&
							((e.flags |= 128), (a = !0), tu(u, !1), (e.lanes = 4194304));
					}
				else {
					if (!a)
						if (((t = dn(n)), t !== null)) {
							if (
								((e.flags |= 128),
								(a = !0),
								(t = t.updateQueue),
								(e.updateQueue = t),
								vn(e, t),
								tu(u, !0),
								u.tail === null &&
									u.tailMode === "hidden" &&
									!n.alternate &&
									!P)
							)
								return dt(e), null;
						} else
							2 * Oe() - u.renderingStartTime > bn &&
								l !== 536870912 &&
								((e.flags |= 128), (a = !0), tu(u, !1), (e.lanes = 4194304));
					u.isBackwards
						? ((n.sibling = e.child), (e.child = n))
						: ((t = u.last),
							t !== null ? (t.sibling = n) : (e.child = n),
							(u.last = n));
				}
				return u.tail !== null
					? ((e = u.tail),
						(u.rendering = e),
						(u.tail = e.sibling),
						(u.renderingStartTime = Oe()),
						(e.sibling = null),
						(t = At.current),
						k(At, a ? (t & 1) | 2 : t & 1),
						e)
					: (dt(e), null);
			case 22:
			case 23:
				return (
					Be(e),
					Ji(),
					(a = e.memoizedState !== null),
					t !== null
						? (t.memoizedState !== null) !== a && (e.flags |= 8192)
						: a && (e.flags |= 8192),
					a
						? (l & 536870912) !== 0 &&
							(e.flags & 128) === 0 &&
							(dt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
						: dt(e),
					(l = e.updateQueue),
					l !== null && vn(e, l.retryQueue),
					(l = null),
					t !== null &&
						t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(l = t.memoizedState.cachePool.pool),
					(a = null),
					e.memoizedState !== null &&
						e.memoizedState.cachePool !== null &&
						(a = e.memoizedState.cachePool.pool),
					a !== l && (e.flags |= 2048),
					t !== null && W(zl),
					null
				);
			case 24:
				return (
					(l = null),
					t !== null && (l = t.memoizedState.cache),
					e.memoizedState.cache !== l && (e.flags |= 2048),
					Le(Et),
					dt(e),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(f(156, e.tag));
	}
	function hg(t, e) {
		switch ((Hi(e), e.tag)) {
			case 1:
				return (
					(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 3:
				return (
					Le(Et),
					Hl(),
					(t = e.flags),
					(t & 65536) !== 0 && (t & 128) === 0
						? ((e.flags = (t & -65537) | 128), e)
						: null
				);
			case 26:
			case 27:
			case 5:
				return zu(e), null;
			case 13:
				if (
					(Be(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
				) {
					if (e.alternate === null) throw Error(f(340));
					Ya();
				}
				return (
					(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 19:
				return W(At), null;
			case 4:
				return Hl(), null;
			case 10:
				return Le(e.type), null;
			case 22:
			case 23:
				return (
					Be(e),
					Ji(),
					t !== null && W(zl),
					(t = e.flags),
					t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 24:
				return Le(Et), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Kr(t, e) {
		switch ((Hi(e), e.tag)) {
			case 3:
				Le(Et), Hl();
				break;
			case 26:
			case 27:
			case 5:
				zu(e);
				break;
			case 4:
				Hl();
				break;
			case 13:
				Be(e);
				break;
			case 19:
				W(At);
				break;
			case 10:
				Le(e.type);
				break;
			case 22:
			case 23:
				Be(e), Ji(), t !== null && W(zl);
				break;
			case 24:
				Le(Et);
		}
	}
	function eu(t, e) {
		try {
			var l = e.updateQueue,
				a = l !== null ? l.lastEffect : null;
			if (a !== null) {
				var u = a.next;
				l = u;
				do {
					if ((l.tag & t) === t) {
						a = void 0;
						var n = l.create,
							c = l.inst;
						(a = n()), (c.destroy = a);
					}
					l = l.next;
				} while (l !== u);
			}
		} catch (o) {
			ft(e, e.return, o);
		}
	}
	function el(t, e, l) {
		try {
			var a = e.updateQueue,
				u = a !== null ? a.lastEffect : null;
			if (u !== null) {
				var n = u.next;
				a = n;
				do {
					if ((a.tag & t) === t) {
						var c = a.inst,
							o = c.destroy;
						if (o !== void 0) {
							(c.destroy = void 0), (u = e);
							var g = l,
								T = o;
							try {
								T();
							} catch (z) {
								ft(u, g, z);
							}
						}
					}
					a = a.next;
				} while (a !== n);
			}
		} catch (z) {
			ft(e, e.return, z);
		}
	}
	function wr(t) {
		var e = t.updateQueue;
		if (e !== null) {
			var l = t.stateNode;
			try {
				Hs(e, l);
			} catch (a) {
				ft(t, t.return, a);
			}
		}
	}
	function Jr(t, e, l) {
		(l.props = Rl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
		try {
			l.componentWillUnmount();
		} catch (a) {
			ft(t, e, a);
		}
	}
	function lu(t, e) {
		try {
			var l = t.ref;
			if (l !== null) {
				switch (t.tag) {
					case 26:
					case 27:
					case 5:
						var a = t.stateNode;
						break;
					case 30:
						a = t.stateNode;
						break;
					default:
						a = t.stateNode;
				}
				typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
			}
		} catch (u) {
			ft(t, e, u);
		}
	}
	function Ee(t, e) {
		var l = t.ref,
			a = t.refCleanup;
		if (l !== null)
			if (typeof a == "function")
				try {
					a();
				} catch (u) {
					ft(t, e, u);
				} finally {
					(t.refCleanup = null),
						(t = t.alternate),
						t != null && (t.refCleanup = null);
				}
			else if (typeof l == "function")
				try {
					l(null);
				} catch (u) {
					ft(t, e, u);
				}
			else l.current = null;
	}
	function kr(t) {
		var e = t.type,
			l = t.memoizedProps,
			a = t.stateNode;
		try {
			t: switch (e) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					l.autoFocus && a.focus();
					break t;
				case "img":
					l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
			}
		} catch (u) {
			ft(t, t.return, u);
		}
	}
	function Tf(t, e, l) {
		try {
			var a = t.stateNode;
			Lg(a, t.type, l, e), (a[Jt] = e);
		} catch (u) {
			ft(t, t.return, u);
		}
	}
	function $r(t) {
		return (
			t.tag === 5 ||
			t.tag === 3 ||
			t.tag === 26 ||
			(t.tag === 27 && sl(t.type)) ||
			t.tag === 4
		);
	}
	function xf(t) {
		t: for (;;) {
			for (; t.sibling === null; ) {
				if (t.return === null || $r(t.return)) return null;
				t = t.return;
			}
			for (
				t.sibling.return = t.return, t = t.sibling;
				t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

			) {
				if (
					(t.tag === 27 && sl(t.type)) ||
					t.flags & 2 ||
					t.child === null ||
					t.tag === 4
				)
					continue t;
				(t.child.return = t), (t = t.child);
			}
			if (!(t.flags & 2)) return t.stateNode;
		}
	}
	function Ef(t, e, l) {
		var a = t.tag;
		if (a === 5 || a === 6)
			(t = t.stateNode),
				e
					? (l.nodeType === 9
							? l.body
							: l.nodeName === "HTML"
								? l.ownerDocument.body
								: l
						).insertBefore(t, e)
					: ((e =
							l.nodeType === 9
								? l.body
								: l.nodeName === "HTML"
									? l.ownerDocument.body
									: l),
						e.appendChild(t),
						(l = l._reactRootContainer),
						l != null || e.onclick !== null || (e.onclick = Rn));
		else if (
			a !== 4 &&
			(a === 27 && sl(t.type) && ((l = t.stateNode), (e = null)),
			(t = t.child),
			t !== null)
		)
			for (Ef(t, e, l), t = t.sibling; t !== null; )
				Ef(t, e, l), (t = t.sibling);
	}
	function pn(t, e, l) {
		var a = t.tag;
		if (a === 5 || a === 6)
			(t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
		else if (
			a !== 4 &&
			(a === 27 && sl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
		)
			for (pn(t, e, l), t = t.sibling; t !== null; )
				pn(t, e, l), (t = t.sibling);
	}
	function Fr(t) {
		var e = t.stateNode,
			l = t.memoizedProps;
		try {
			for (var a = t.type, u = e.attributes; u.length; )
				e.removeAttributeNode(u[0]);
			Bt(e, a, l), (e[jt] = t), (e[Jt] = l);
		} catch (n) {
			ft(t, t.return, n);
		}
	}
	var je = !1,
		pt = !1,
		Af = !1,
		Wr = typeof WeakSet == "function" ? WeakSet : Set,
		Rt = null;
	function gg(t, e) {
		if (((t = t.containerInfo), ($f = Bn), (t = cs(t)), Ti(t))) {
			if ("selectionStart" in t)
				var l = { start: t.selectionStart, end: t.selectionEnd };
			else
				t: {
					l = ((l = t.ownerDocument) && l.defaultView) || window;
					var a = l.getSelection && l.getSelection();
					if (a && a.rangeCount !== 0) {
						l = a.anchorNode;
						var u = a.anchorOffset,
							n = a.focusNode;
						a = a.focusOffset;
						try {
							l.nodeType, n.nodeType;
						} catch {
							l = null;
							break t;
						}
						var c = 0,
							o = -1,
							g = -1,
							T = 0,
							z = 0,
							R = t,
							x = null;
						e: for (;;) {
							for (
								var E;
								R !== l || (u !== 0 && R.nodeType !== 3) || (o = c + u),
									R !== n || (a !== 0 && R.nodeType !== 3) || (g = c + a),
									R.nodeType === 3 && (c += R.nodeValue.length),
									(E = R.firstChild) !== null;

							)
								(x = R), (R = E);
							for (;;) {
								if (R === t) break e;
								if (
									(x === l && ++T === u && (o = c),
									x === n && ++z === a && (g = c),
									(E = R.nextSibling) !== null)
								)
									break;
								(R = x), (x = R.parentNode);
							}
							R = E;
						}
						l = o === -1 || g === -1 ? null : { start: o, end: g };
					} else l = null;
				}
			l = l || { start: 0, end: 0 };
		} else l = null;
		for (
			Ff = { focusedElem: t, selectionRange: l }, Bn = !1, Rt = e;
			Rt !== null;

		)
			if (
				((e = Rt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
			)
				(t.return = e), (Rt = t);
			else
				for (; Rt !== null; ) {
					switch (((e = Rt), (n = e.alternate), (t = e.flags), e.tag)) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((t & 1024) !== 0 && n !== null) {
								(t = void 0),
									(l = e),
									(u = n.memoizedProps),
									(n = n.memoizedState),
									(a = l.stateNode);
								try {
									var Q = Rl(l.type, u, l.elementType === l.type);
									(t = a.getSnapshotBeforeUpdate(Q, n)),
										(a.__reactInternalSnapshotBeforeUpdate = t);
								} catch (j) {
									ft(l, l.return, j);
								}
							}
							break;
						case 3:
							if ((t & 1024) !== 0) {
								if (
									((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
								)
									If(t);
								else if (l === 1)
									switch (t.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											If(t);
											break;
										default:
											t.textContent = "";
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((t & 1024) !== 0) throw Error(f(163));
					}
					if (((t = e.sibling), t !== null)) {
						(t.return = e.return), (Rt = t);
						break;
					}
					Rt = e.return;
				}
	}
	function Pr(t, e, l) {
		var a = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				ll(t, l), a & 4 && eu(5, l);
				break;
			case 1:
				if ((ll(t, l), a & 4))
					if (((t = l.stateNode), e === null))
						try {
							t.componentDidMount();
						} catch (c) {
							ft(l, l.return, c);
						}
					else {
						var u = Rl(l.type, e.memoizedProps);
						e = e.memoizedState;
						try {
							t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
						} catch (c) {
							ft(l, l.return, c);
						}
					}
				a & 64 && wr(l), a & 512 && lu(l, l.return);
				break;
			case 3:
				if ((ll(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
					if (((e = null), l.child !== null))
						switch (l.child.tag) {
							case 27:
							case 5:
								e = l.child.stateNode;
								break;
							case 1:
								e = l.child.stateNode;
						}
					try {
						Hs(t, e);
					} catch (c) {
						ft(l, l.return, c);
					}
				}
				break;
			case 27:
				e === null && a & 4 && Fr(l);
			case 26:
			case 5:
				ll(t, l), e === null && a & 4 && kr(l), a & 512 && lu(l, l.return);
				break;
			case 12:
				ll(t, l);
				break;
			case 13:
				ll(t, l),
					a & 4 && eo(t, l),
					a & 64 &&
						((t = l.memoizedState),
						t !== null &&
							((t = t.dehydrated),
							t !== null && ((l = xg.bind(null, l)), Qg(t, l))));
				break;
			case 22:
				if (((a = l.memoizedState !== null || je), !a)) {
					(e = (e !== null && e.memoizedState !== null) || pt), (u = je);
					var n = pt;
					(je = a),
						(pt = e) && !n ? al(t, l, (l.subtreeFlags & 8772) !== 0) : ll(t, l),
						(je = u),
						(pt = n);
				}
				break;
			case 30:
				break;
			default:
				ll(t, l);
		}
	}
	function Ir(t) {
		var e = t.alternate;
		e !== null && ((t.alternate = null), Ir(e)),
			(t.child = null),
			(t.deletions = null),
			(t.sibling = null),
			t.tag === 5 && ((e = t.stateNode), e !== null && ai(e)),
			(t.stateNode = null),
			(t.return = null),
			(t.dependencies = null),
			(t.memoizedProps = null),
			(t.memoizedState = null),
			(t.pendingProps = null),
			(t.stateNode = null),
			(t.updateQueue = null);
	}
	var rt = null,
		Ft = !1;
	function Ge(t, e, l) {
		for (l = l.child; l !== null; ) to(t, e, l), (l = l.sibling);
	}
	function to(t, e, l) {
		if (It && typeof It.onCommitFiberUnmount == "function")
			try {
				It.onCommitFiberUnmount(xa, l);
			} catch {}
		switch (l.tag) {
			case 26:
				pt || Ee(l, e),
					Ge(t, e, l),
					l.memoizedState
						? l.memoizedState.count--
						: l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
				break;
			case 27:
				pt || Ee(l, e);
				var a = rt,
					u = Ft;
				sl(l.type) && ((rt = l.stateNode), (Ft = !1)),
					Ge(t, e, l),
					ou(l.stateNode),
					(rt = a),
					(Ft = u);
				break;
			case 5:
				pt || Ee(l, e);
			case 6:
				if (
					((a = rt),
					(u = Ft),
					(rt = null),
					Ge(t, e, l),
					(rt = a),
					(Ft = u),
					rt !== null)
				)
					if (Ft)
						try {
							(rt.nodeType === 9
								? rt.body
								: rt.nodeName === "HTML"
									? rt.ownerDocument.body
									: rt
							).removeChild(l.stateNode);
						} catch (n) {
							ft(l, e, n);
						}
					else
						try {
							rt.removeChild(l.stateNode);
						} catch (n) {
							ft(l, e, n);
						}
				break;
			case 18:
				rt !== null &&
					(Ft
						? ((t = rt),
							Vo(
								t.nodeType === 9
									? t.body
									: t.nodeName === "HTML"
										? t.ownerDocument.body
										: t,
								l.stateNode,
							),
							Su(t))
						: Vo(rt, l.stateNode));
				break;
			case 4:
				(a = rt),
					(u = Ft),
					(rt = l.stateNode.containerInfo),
					(Ft = !0),
					Ge(t, e, l),
					(rt = a),
					(Ft = u);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				pt || el(2, l, e), pt || el(4, l, e), Ge(t, e, l);
				break;
			case 1:
				pt ||
					(Ee(l, e),
					(a = l.stateNode),
					typeof a.componentWillUnmount == "function" && Jr(l, e, a)),
					Ge(t, e, l);
				break;
			case 21:
				Ge(t, e, l);
				break;
			case 22:
				(pt = (a = pt) || l.memoizedState !== null), Ge(t, e, l), (pt = a);
				break;
			default:
				Ge(t, e, l);
		}
	}
	function eo(t, e) {
		if (
			e.memoizedState === null &&
			((t = e.alternate),
			t !== null &&
				((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
		)
			try {
				Su(t);
			} catch (l) {
				ft(e, e.return, l);
			}
	}
	function mg(t) {
		switch (t.tag) {
			case 13:
			case 19:
				var e = t.stateNode;
				return e === null && (e = t.stateNode = new Wr()), e;
			case 22:
				return (
					(t = t.stateNode),
					(e = t._retryCache),
					e === null && (e = t._retryCache = new Wr()),
					e
				);
			default:
				throw Error(f(435, t.tag));
		}
	}
	function Df(t, e) {
		var l = mg(t);
		e.forEach(function (a) {
			var u = Eg.bind(null, t, a);
			l.has(a) || (l.add(a), a.then(u, u));
		});
	}
	function ae(t, e) {
		var l = e.deletions;
		if (l !== null)
			for (var a = 0; a < l.length; a++) {
				var u = l[a],
					n = t,
					c = e,
					o = c;
				t: for (; o !== null; ) {
					switch (o.tag) {
						case 27:
							if (sl(o.type)) {
								(rt = o.stateNode), (Ft = !1);
								break t;
							}
							break;
						case 5:
							(rt = o.stateNode), (Ft = !1);
							break t;
						case 3:
						case 4:
							(rt = o.stateNode.containerInfo), (Ft = !0);
							break t;
					}
					o = o.return;
				}
				if (rt === null) throw Error(f(160));
				to(n, c, u),
					(rt = null),
					(Ft = !1),
					(n = u.alternate),
					n !== null && (n.return = null),
					(u.return = null);
			}
		if (e.subtreeFlags & 13878)
			for (e = e.child; e !== null; ) lo(e, t), (e = e.sibling);
	}
	var Se = null;
	function lo(t, e) {
		var l = t.alternate,
			a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				ae(e, t),
					ue(t),
					a & 4 && (el(3, t, t.return), eu(3, t), el(5, t, t.return));
				break;
			case 1:
				ae(e, t),
					ue(t),
					a & 512 && (pt || l === null || Ee(l, l.return)),
					a & 64 &&
						je &&
						((t = t.updateQueue),
						t !== null &&
							((a = t.callbacks),
							a !== null &&
								((l = t.shared.hiddenCallbacks),
								(t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
				break;
			case 26:
				var u = Se;
				if (
					(ae(e, t),
					ue(t),
					a & 512 && (pt || l === null || Ee(l, l.return)),
					a & 4)
				) {
					var n = l !== null ? l.memoizedState : null;
					if (((a = t.memoizedState), l === null))
						if (a === null)
							if (t.stateNode === null) {
								t: {
									(a = t.type),
										(l = t.memoizedProps),
										(u = u.ownerDocument || u);
									e: switch (a) {
										case "title":
											(n = u.getElementsByTagName("title")[0]),
												(!n ||
													n[Da] ||
													n[jt] ||
													n.namespaceURI === "http://www.w3.org/2000/svg" ||
													n.hasAttribute("itemprop")) &&
													((n = u.createElement(a)),
													u.head.insertBefore(
														n,
														u.querySelector("head > title"),
													)),
												Bt(n, a, l),
												(n[jt] = t),
												zt(n),
												(a = n);
											break t;
										case "link":
											var c = Wo("link", "href", u).get(a + (l.href || ""));
											if (c) {
												for (var o = 0; o < c.length; o++)
													if (
														((n = c[o]),
														n.getAttribute("href") ===
															(l.href == null || l.href === ""
																? null
																: l.href) &&
															n.getAttribute("rel") ===
																(l.rel == null ? null : l.rel) &&
															n.getAttribute("title") ===
																(l.title == null ? null : l.title) &&
															n.getAttribute("crossorigin") ===
																(l.crossOrigin == null ? null : l.crossOrigin))
													) {
														c.splice(o, 1);
														break e;
													}
											}
											(n = u.createElement(a)),
												Bt(n, a, l),
												u.head.appendChild(n);
											break;
										case "meta":
											if (
												(c = Wo("meta", "content", u).get(
													a + (l.content || ""),
												))
											) {
												for (o = 0; o < c.length; o++)
													if (
														((n = c[o]),
														n.getAttribute("content") ===
															(l.content == null ? null : "" + l.content) &&
															n.getAttribute("name") ===
																(l.name == null ? null : l.name) &&
															n.getAttribute("property") ===
																(l.property == null ? null : l.property) &&
															n.getAttribute("http-equiv") ===
																(l.httpEquiv == null ? null : l.httpEquiv) &&
															n.getAttribute("charset") ===
																(l.charSet == null ? null : l.charSet))
													) {
														c.splice(o, 1);
														break e;
													}
											}
											(n = u.createElement(a)),
												Bt(n, a, l),
												u.head.appendChild(n);
											break;
										default:
											throw Error(f(468, a));
									}
									(n[jt] = t), zt(n), (a = n);
								}
								t.stateNode = a;
							} else Po(u, t.type, t.stateNode);
						else t.stateNode = Fo(u, a, t.memoizedProps);
					else
						n !== a
							? (n === null
									? l.stateNode !== null &&
										((l = l.stateNode), l.parentNode.removeChild(l))
									: n.count--,
								a === null
									? Po(u, t.type, t.stateNode)
									: Fo(u, a, t.memoizedProps))
							: a === null &&
								t.stateNode !== null &&
								Tf(t, t.memoizedProps, l.memoizedProps);
				}
				break;
			case 27:
				ae(e, t),
					ue(t),
					a & 512 && (pt || l === null || Ee(l, l.return)),
					l !== null && a & 4 && Tf(t, t.memoizedProps, l.memoizedProps);
				break;
			case 5:
				if (
					(ae(e, t),
					ue(t),
					a & 512 && (pt || l === null || Ee(l, l.return)),
					t.flags & 32)
				) {
					u = t.stateNode;
					try {
						Ql(u, "");
					} catch (E) {
						ft(t, t.return, E);
					}
				}
				a & 4 &&
					t.stateNode != null &&
					((u = t.memoizedProps), Tf(t, u, l !== null ? l.memoizedProps : u)),
					a & 1024 && (Af = !0);
				break;
			case 6:
				if ((ae(e, t), ue(t), a & 4)) {
					if (t.stateNode === null) throw Error(f(162));
					(a = t.memoizedProps), (l = t.stateNode);
					try {
						l.nodeValue = a;
					} catch (E) {
						ft(t, t.return, E);
					}
				}
				break;
			case 3:
				if (
					((Hn = null),
					(u = Se),
					(Se = Nn(e.containerInfo)),
					ae(e, t),
					(Se = u),
					ue(t),
					a & 4 && l !== null && l.memoizedState.isDehydrated)
				)
					try {
						Su(e.containerInfo);
					} catch (E) {
						ft(t, t.return, E);
					}
				Af && ((Af = !1), ao(t));
				break;
			case 4:
				(a = Se),
					(Se = Nn(t.stateNode.containerInfo)),
					ae(e, t),
					ue(t),
					(Se = a);
				break;
			case 12:
				ae(e, t), ue(t);
				break;
			case 13:
				ae(e, t),
					ue(t),
					t.child.flags & 8192 &&
						(t.memoizedState !== null) !=
							(l !== null && l.memoizedState !== null) &&
						(_f = Oe()),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), Df(t, a)));
				break;
			case 22:
				u = t.memoizedState !== null;
				var g = l !== null && l.memoizedState !== null,
					T = je,
					z = pt;
				if (
					((je = T || u),
					(pt = z || g),
					ae(e, t),
					(pt = z),
					(je = T),
					ue(t),
					a & 8192)
				)
					t: for (
						e = t.stateNode,
							e._visibility = u ? e._visibility & -2 : e._visibility | 1,
							u && (l === null || g || je || pt || Ul(t)),
							l = null,
							e = t;
						;

					) {
						if (e.tag === 5 || e.tag === 26) {
							if (l === null) {
								g = l = e;
								try {
									if (((n = g.stateNode), u))
										(c = n.style),
											typeof c.setProperty == "function"
												? c.setProperty("display", "none", "important")
												: (c.display = "none");
									else {
										o = g.stateNode;
										var R = g.memoizedProps.style,
											x =
												R != null && R.hasOwnProperty("display")
													? R.display
													: null;
										o.style.display =
											x == null || typeof x == "boolean" ? "" : ("" + x).trim();
									}
								} catch (E) {
									ft(g, g.return, E);
								}
							}
						} else if (e.tag === 6) {
							if (l === null) {
								g = e;
								try {
									g.stateNode.nodeValue = u ? "" : g.memoizedProps;
								} catch (E) {
									ft(g, g.return, E);
								}
							}
						} else if (
							((e.tag !== 22 && e.tag !== 23) ||
								e.memoizedState === null ||
								e === t) &&
							e.child !== null
						) {
							(e.child.return = e), (e = e.child);
							continue;
						}
						if (e === t) break t;
						for (; e.sibling === null; ) {
							if (e.return === null || e.return === t) break t;
							l === e && (l = null), (e = e.return);
						}
						l === e && (l = null),
							(e.sibling.return = e.return),
							(e = e.sibling);
					}
				a & 4 &&
					((a = t.updateQueue),
					a !== null &&
						((l = a.retryQueue),
						l !== null && ((a.retryQueue = null), Df(t, l))));
				break;
			case 19:
				ae(e, t),
					ue(t),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), Df(t, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				ae(e, t), ue(t);
		}
	}
	function ue(t) {
		var e = t.flags;
		if (e & 2) {
			try {
				for (var l, a = t.return; a !== null; ) {
					if ($r(a)) {
						l = a;
						break;
					}
					a = a.return;
				}
				if (l == null) throw Error(f(160));
				switch (l.tag) {
					case 27:
						var u = l.stateNode,
							n = xf(t);
						pn(t, n, u);
						break;
					case 5:
						var c = l.stateNode;
						l.flags & 32 && (Ql(c, ""), (l.flags &= -33));
						var o = xf(t);
						pn(t, o, c);
						break;
					case 3:
					case 4:
						var g = l.stateNode.containerInfo,
							T = xf(t);
						Ef(t, T, g);
						break;
					default:
						throw Error(f(161));
				}
			} catch (z) {
				ft(t, t.return, z);
			}
			t.flags &= -3;
		}
		e & 4096 && (t.flags &= -4097);
	}
	function ao(t) {
		if (t.subtreeFlags & 1024)
			for (t = t.child; t !== null; ) {
				var e = t;
				ao(e),
					e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
					(t = t.sibling);
			}
	}
	function ll(t, e) {
		if (e.subtreeFlags & 8772)
			for (e = e.child; e !== null; ) Pr(t, e.alternate, e), (e = e.sibling);
	}
	function Ul(t) {
		for (t = t.child; t !== null; ) {
			var e = t;
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					el(4, e, e.return), Ul(e);
					break;
				case 1:
					Ee(e, e.return);
					var l = e.stateNode;
					typeof l.componentWillUnmount == "function" && Jr(e, e.return, l),
						Ul(e);
					break;
				case 27:
					ou(e.stateNode);
				case 26:
				case 5:
					Ee(e, e.return), Ul(e);
					break;
				case 22:
					e.memoizedState === null && Ul(e);
					break;
				case 30:
					Ul(e);
					break;
				default:
					Ul(e);
			}
			t = t.sibling;
		}
	}
	function al(t, e, l) {
		for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
			var a = e.alternate,
				u = t,
				n = e,
				c = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					al(u, n, l), eu(4, n);
					break;
				case 1:
					if (
						(al(u, n, l),
						(a = n),
						(u = a.stateNode),
						typeof u.componentDidMount == "function")
					)
						try {
							u.componentDidMount();
						} catch (T) {
							ft(a, a.return, T);
						}
					if (((a = n), (u = a.updateQueue), u !== null)) {
						var o = a.stateNode;
						try {
							var g = u.shared.hiddenCallbacks;
							if (g !== null)
								for (u.shared.hiddenCallbacks = null, u = 0; u < g.length; u++)
									_s(g[u], o);
						} catch (T) {
							ft(a, a.return, T);
						}
					}
					l && c & 64 && wr(n), lu(n, n.return);
					break;
				case 27:
					Fr(n);
				case 26:
				case 5:
					al(u, n, l), l && a === null && c & 4 && kr(n), lu(n, n.return);
					break;
				case 12:
					al(u, n, l);
					break;
				case 13:
					al(u, n, l), l && c & 4 && eo(u, n);
					break;
				case 22:
					n.memoizedState === null && al(u, n, l), lu(n, n.return);
					break;
				case 30:
					break;
				default:
					al(u, n, l);
			}
			e = e.sibling;
		}
	}
	function zf(t, e) {
		var l = null;
		t !== null &&
			t.memoizedState !== null &&
			t.memoizedState.cachePool !== null &&
			(l = t.memoizedState.cachePool.pool),
			(t = null),
			e.memoizedState !== null &&
				e.memoizedState.cachePool !== null &&
				(t = e.memoizedState.cachePool.pool),
			t !== l && (t != null && t.refCount++, l != null && Qa(l));
	}
	function Mf(t, e) {
		(t = null),
			e.alternate !== null && (t = e.alternate.memoizedState.cache),
			(e = e.memoizedState.cache),
			e !== t && (e.refCount++, t != null && Qa(t));
	}
	function Ae(t, e, l, a) {
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) uo(t, e, l, a), (e = e.sibling);
	}
	function uo(t, e, l, a) {
		var u = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Ae(t, e, l, a), u & 2048 && eu(9, e);
				break;
			case 1:
				Ae(t, e, l, a);
				break;
			case 3:
				Ae(t, e, l, a),
					u & 2048 &&
						((t = null),
						e.alternate !== null && (t = e.alternate.memoizedState.cache),
						(e = e.memoizedState.cache),
						e !== t && (e.refCount++, t != null && Qa(t)));
				break;
			case 12:
				if (u & 2048) {
					Ae(t, e, l, a), (t = e.stateNode);
					try {
						var n = e.memoizedProps,
							c = n.id,
							o = n.onPostCommit;
						typeof o == "function" &&
							o(
								c,
								e.alternate === null ? "mount" : "update",
								t.passiveEffectDuration,
								-0,
							);
					} catch (g) {
						ft(e, e.return, g);
					}
				} else Ae(t, e, l, a);
				break;
			case 13:
				Ae(t, e, l, a);
				break;
			case 23:
				break;
			case 22:
				(n = e.stateNode),
					(c = e.alternate),
					e.memoizedState !== null
						? n._visibility & 2
							? Ae(t, e, l, a)
							: au(t, e)
						: n._visibility & 2
							? Ae(t, e, l, a)
							: ((n._visibility |= 2),
								ia(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
					u & 2048 && zf(c, e);
				break;
			case 24:
				Ae(t, e, l, a), u & 2048 && Mf(e.alternate, e);
				break;
			default:
				Ae(t, e, l, a);
		}
	}
	function ia(t, e, l, a, u) {
		for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
			var n = t,
				c = e,
				o = l,
				g = a,
				T = c.flags;
			switch (c.tag) {
				case 0:
				case 11:
				case 15:
					ia(n, c, o, g, u), eu(8, c);
					break;
				case 23:
					break;
				case 22:
					var z = c.stateNode;
					c.memoizedState !== null
						? z._visibility & 2
							? ia(n, c, o, g, u)
							: au(n, c)
						: ((z._visibility |= 2), ia(n, c, o, g, u)),
						u && T & 2048 && zf(c.alternate, c);
					break;
				case 24:
					ia(n, c, o, g, u), u && T & 2048 && Mf(c.alternate, c);
					break;
				default:
					ia(n, c, o, g, u);
			}
			e = e.sibling;
		}
	}
	function au(t, e) {
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) {
				var l = t,
					a = e,
					u = a.flags;
				switch (a.tag) {
					case 22:
						au(l, a), u & 2048 && zf(a.alternate, a);
						break;
					case 24:
						au(l, a), u & 2048 && Mf(a.alternate, a);
						break;
					default:
						au(l, a);
				}
				e = e.sibling;
			}
	}
	var uu = 8192;
	function fa(t) {
		if (t.subtreeFlags & uu)
			for (t = t.child; t !== null; ) no(t), (t = t.sibling);
	}
	function no(t) {
		switch (t.tag) {
			case 26:
				fa(t),
					t.flags & uu &&
						t.memoizedState !== null &&
						t0(Se, t.memoizedState, t.memoizedProps);
				break;
			case 5:
				fa(t);
				break;
			case 3:
			case 4:
				var e = Se;
				(Se = Nn(t.stateNode.containerInfo)), fa(t), (Se = e);
				break;
			case 22:
				t.memoizedState === null &&
					((e = t.alternate),
					e !== null && e.memoizedState !== null
						? ((e = uu), (uu = 16777216), fa(t), (uu = e))
						: fa(t));
				break;
			default:
				fa(t);
		}
	}
	function io(t) {
		var e = t.alternate;
		if (e !== null && ((t = e.child), t !== null)) {
			e.child = null;
			do (e = t.sibling), (t.sibling = null), (t = e);
			while (t !== null);
		}
	}
	function nu(t) {
		var e = t.deletions;
		if ((t.flags & 16) !== 0) {
			if (e !== null)
				for (var l = 0; l < e.length; l++) {
					var a = e[l];
					(Rt = a), co(a, t);
				}
			io(t);
		}
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) fo(t), (t = t.sibling);
	}
	function fo(t) {
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				nu(t), t.flags & 2048 && el(9, t, t.return);
				break;
			case 3:
				nu(t);
				break;
			case 12:
				nu(t);
				break;
			case 22:
				var e = t.stateNode;
				t.memoizedState !== null &&
				e._visibility & 2 &&
				(t.return === null || t.return.tag !== 13)
					? ((e._visibility &= -3), Sn(t))
					: nu(t);
				break;
			default:
				nu(t);
		}
	}
	function Sn(t) {
		var e = t.deletions;
		if ((t.flags & 16) !== 0) {
			if (e !== null)
				for (var l = 0; l < e.length; l++) {
					var a = e[l];
					(Rt = a), co(a, t);
				}
			io(t);
		}
		for (t = t.child; t !== null; ) {
			switch (((e = t), e.tag)) {
				case 0:
				case 11:
				case 15:
					el(8, e, e.return), Sn(e);
					break;
				case 22:
					(l = e.stateNode),
						l._visibility & 2 && ((l._visibility &= -3), Sn(e));
					break;
				default:
					Sn(e);
			}
			t = t.sibling;
		}
	}
	function co(t, e) {
		for (; Rt !== null; ) {
			var l = Rt;
			switch (l.tag) {
				case 0:
				case 11:
				case 15:
					el(8, l, e);
					break;
				case 23:
				case 22:
					if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
						var a = l.memoizedState.cachePool.pool;
						a != null && a.refCount++;
					}
					break;
				case 24:
					Qa(l.memoizedState.cache);
			}
			if (((a = l.child), a !== null)) (a.return = l), (Rt = a);
			else
				t: for (l = t; Rt !== null; ) {
					a = Rt;
					var u = a.sibling,
						n = a.return;
					if ((Ir(a), a === l)) {
						Rt = null;
						break t;
					}
					if (u !== null) {
						(u.return = n), (Rt = u);
						break t;
					}
					Rt = n;
				}
		}
	}
	var yg = {
			getCacheForType: function (t) {
				var e = Gt(Et),
					l = e.data.get(t);
				return l === void 0 && ((l = t()), e.data.set(t, l)), l;
			},
		},
		vg = typeof WeakMap == "function" ? WeakMap : Map,
		et = 0,
		ct = null,
		K = null,
		$ = 0,
		lt = 0,
		ne = null,
		ul = !1,
		ca = !1,
		Rf = !1,
		Qe = 0,
		gt = 0,
		nl = 0,
		Nl = 0,
		Uf = 0,
		ye = 0,
		sa = 0,
		iu = null,
		Wt = null,
		Nf = !1,
		_f = 0,
		bn = 1 / 0,
		On = null,
		il = null,
		Ct = 0,
		fl = null,
		ra = null,
		oa = 0,
		Hf = 0,
		Lf = null,
		so = null,
		fu = 0,
		Cf = null;
	function ie() {
		if ((et & 2) !== 0 && $ !== 0) return $ & -$;
		if (D.T !== null) {
			var t = Pl;
			return t !== 0 ? t : Xf();
		}
		return Ac();
	}
	function ro() {
		ye === 0 && (ye = ($ & 536870912) === 0 || P ? Oc() : 536870912);
		var t = me.current;
		return t !== null && (t.flags |= 32), ye;
	}
	function fe(t, e, l) {
		((t === ct && (lt === 2 || lt === 9)) || t.cancelPendingCommit !== null) &&
			(da(t, 0), cl(t, $, ye, !1)),
			Aa(t, l),
			((et & 2) === 0 || t !== ct) &&
				(t === ct &&
					((et & 2) === 0 && (Nl |= l), gt === 4 && cl(t, $, ye, !1)),
				De(t));
	}
	function oo(t, e, l) {
		if ((et & 6) !== 0) throw Error(f(327));
		var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Ea(t, e),
			u = a ? bg(t, e) : Yf(t, e, !0),
			n = a;
		do {
			if (u === 0) {
				ca && !a && cl(t, e, 0, !1);
				break;
			} else {
				if (((l = t.current.alternate), n && !pg(l))) {
					(u = Yf(t, e, !1)), (n = !1);
					continue;
				}
				if (u === 2) {
					if (((n = e), t.errorRecoveryDisabledLanes & n)) var c = 0;
					else
						(c = t.pendingLanes & -536870913),
							(c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
					if (c !== 0) {
						e = c;
						t: {
							var o = t;
							u = iu;
							var g = o.current.memoizedState.isDehydrated;
							if ((g && (da(o, c).flags |= 256), (c = Yf(o, c, !1)), c !== 2)) {
								if (Rf && !g) {
									(o.errorRecoveryDisabledLanes |= n), (Nl |= n), (u = 4);
									break t;
								}
								(n = Wt),
									(Wt = u),
									n !== null && (Wt === null ? (Wt = n) : Wt.push.apply(Wt, n));
							}
							u = c;
						}
						if (((n = !1), u !== 2)) continue;
					}
				}
				if (u === 1) {
					da(t, 0), cl(t, e, 0, !0);
					break;
				}
				t: {
					switch (((a = t), (n = u), n)) {
						case 0:
						case 1:
							throw Error(f(345));
						case 4:
							if ((e & 4194048) !== e) break;
						case 6:
							cl(a, e, ye, !ul);
							break t;
						case 2:
							Wt = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(f(329));
					}
					if ((e & 62914560) === e && ((u = _f + 300 - Oe()), 10 < u)) {
						if ((cl(a, e, ye, !ul), Nu(a, 0, !0) !== 0)) break t;
						a.timeoutHandle = Qo(
							ho.bind(null, a, l, Wt, On, Nf, e, ye, Nl, sa, ul, n, 2, -0, 0),
							u,
						);
						break t;
					}
					ho(a, l, Wt, On, Nf, e, ye, Nl, sa, ul, n, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		De(t);
	}
	function ho(t, e, l, a, u, n, c, o, g, T, z, R, x, E) {
		if (
			((t.timeoutHandle = -1),
			(R = e.subtreeFlags),
			(R & 8192 || (R & 16785408) === 16785408) &&
				((gu = { stylesheets: null, count: 0, unsuspend: Ig }),
				no(e),
				(R = e0()),
				R !== null))
		) {
			(t.cancelPendingCommit = R(
				bo.bind(null, t, e, n, l, a, u, c, o, g, z, 1, x, E),
			)),
				cl(t, n, c, !T);
			return;
		}
		bo(t, e, n, l, a, u, c, o, g);
	}
	function pg(t) {
		for (var e = t; ; ) {
			var l = e.tag;
			if (
				(l === 0 || l === 11 || l === 15) &&
				e.flags & 16384 &&
				((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
			)
				for (var a = 0; a < l.length; a++) {
					var u = l[a],
						n = u.getSnapshot;
					u = u.value;
					try {
						if (!ee(n(), u)) return !1;
					} catch {
						return !1;
					}
				}
			if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
				(l.return = e), (e = l);
			else {
				if (e === t) break;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) return !0;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		}
		return !0;
	}
	function cl(t, e, l, a) {
		(e &= ~Uf),
			(e &= ~Nl),
			(t.suspendedLanes |= e),
			(t.pingedLanes &= ~e),
			a && (t.warmLanes |= e),
			(a = t.expirationTimes);
		for (var u = e; 0 < u; ) {
			var n = 31 - te(u),
				c = 1 << n;
			(a[n] = -1), (u &= ~c);
		}
		l !== 0 && xc(t, l, e);
	}
	function Tn() {
		return (et & 6) === 0 ? (cu(0), !1) : !0;
	}
	function Bf() {
		if (K !== null) {
			if (lt === 0) var t = K.return;
			else (t = K), (He = Al = null), Pi(t), (ua = null), (Pa = 0), (t = K);
			for (; t !== null; ) Kr(t.alternate, t), (t = t.return);
			K = null;
		}
	}
	function da(t, e) {
		var l = t.timeoutHandle;
		l !== -1 && ((t.timeoutHandle = -1), Bg(l)),
			(l = t.cancelPendingCommit),
			l !== null && ((t.cancelPendingCommit = null), l()),
			Bf(),
			(ct = t),
			(K = l = Ue(t.current, null)),
			($ = e),
			(lt = 0),
			(ne = null),
			(ul = !1),
			(ca = Ea(t, e)),
			(Rf = !1),
			(sa = ye = Uf = Nl = nl = gt = 0),
			(Wt = iu = null),
			(Nf = !1),
			(e & 8) !== 0 && (e |= e & 32);
		var a = t.entangledLanes;
		if (a !== 0)
			for (t = t.entanglements, a &= e; 0 < a; ) {
				var u = 31 - te(a),
					n = 1 << u;
				(e |= t[u]), (a &= ~n);
			}
		return (Qe = e), Vu(), l;
	}
	function go(t, e) {
		(V = null),
			(D.H = sn),
			e === Va || e === Pu
				? ((e = Us()), (lt = 3))
				: e === zs
					? ((e = Us()), (lt = 4))
					: (lt =
							e === Nr
								? 8
								: e !== null &&
									  typeof e == "object" &&
									  typeof e.then == "function"
									? 6
									: 1),
			(ne = e),
			K === null && ((gt = 1), gn(t, oe(e, t.current)));
	}
	function mo() {
		var t = D.H;
		return (D.H = sn), t === null ? sn : t;
	}
	function yo() {
		var t = D.A;
		return (D.A = yg), t;
	}
	function qf() {
		(gt = 4),
			ul || (($ & 4194048) !== $ && me.current !== null) || (ca = !0),
			((nl & 134217727) === 0 && (Nl & 134217727) === 0) ||
				ct === null ||
				cl(ct, $, ye, !1);
	}
	function Yf(t, e, l) {
		var a = et;
		et |= 2;
		var u = mo(),
			n = yo();
		(ct !== t || $ !== e) && ((On = null), da(t, e)), (e = !1);
		var c = gt;
		t: do
			try {
				if (lt !== 0 && K !== null) {
					var o = K,
						g = ne;
					switch (lt) {
						case 8:
							Bf(), (c = 6);
							break t;
						case 3:
						case 2:
						case 9:
						case 6:
							me.current === null && (e = !0);
							var T = lt;
							if (((lt = 0), (ne = null), ha(t, o, g, T), l && ca)) {
								c = 0;
								break t;
							}
							break;
						default:
							(T = lt), (lt = 0), (ne = null), ha(t, o, g, T);
					}
				}
				Sg(), (c = gt);
				break;
			} catch (z) {
				go(t, z);
			}
		while (!0);
		return (
			e && t.shellSuspendCounter++,
			(He = Al = null),
			(et = a),
			(D.H = u),
			(D.A = n),
			K === null && ((ct = null), ($ = 0), Vu()),
			c
		);
	}
	function Sg() {
		for (; K !== null; ) vo(K);
	}
	function bg(t, e) {
		var l = et;
		et |= 2;
		var a = mo(),
			u = yo();
		ct !== t || $ !== e
			? ((On = null), (bn = Oe() + 500), da(t, e))
			: (ca = Ea(t, e));
		t: do
			try {
				if (lt !== 0 && K !== null) {
					e = K;
					var n = ne;
					e: switch (lt) {
						case 1:
							(lt = 0), (ne = null), ha(t, e, n, 1);
							break;
						case 2:
						case 9:
							if (Ms(n)) {
								(lt = 0), (ne = null), po(e);
								break;
							}
							(e = function () {
								(lt !== 2 && lt !== 9) || ct !== t || (lt = 7), De(t);
							}),
								n.then(e, e);
							break t;
						case 3:
							lt = 7;
							break t;
						case 4:
							lt = 5;
							break t;
						case 7:
							Ms(n)
								? ((lt = 0), (ne = null), po(e))
								: ((lt = 0), (ne = null), ha(t, e, n, 7));
							break;
						case 5:
							var c = null;
							switch (K.tag) {
								case 26:
									c = K.memoizedState;
								case 5:
								case 27:
									var o = K;
									if (!c || Io(c)) {
										(lt = 0), (ne = null);
										var g = o.sibling;
										if (g !== null) K = g;
										else {
											var T = o.return;
											T !== null ? ((K = T), xn(T)) : (K = null);
										}
										break e;
									}
							}
							(lt = 0), (ne = null), ha(t, e, n, 5);
							break;
						case 6:
							(lt = 0), (ne = null), ha(t, e, n, 6);
							break;
						case 8:
							Bf(), (gt = 6);
							break t;
						default:
							throw Error(f(462));
					}
				}
				Og();
				break;
			} catch (z) {
				go(t, z);
			}
		while (!0);
		return (
			(He = Al = null),
			(D.H = a),
			(D.A = u),
			(et = l),
			K !== null ? 0 : ((ct = null), ($ = 0), Vu(), gt)
		);
	}
	function Og() {
		for (; K !== null && !Vd(); ) vo(K);
	}
	function vo(t) {
		var e = Vr(t.alternate, t, Qe);
		(t.memoizedProps = t.pendingProps), e === null ? xn(t) : (K = e);
	}
	function po(t) {
		var e = t,
			l = e.alternate;
		switch (e.tag) {
			case 15:
			case 0:
				e = qr(l, e, e.pendingProps, e.type, void 0, $);
				break;
			case 11:
				e = qr(l, e, e.pendingProps, e.type.render, e.ref, $);
				break;
			case 5:
				Pi(e);
			default:
				Kr(l, e), (e = K = ps(e, Qe)), (e = Vr(l, e, Qe));
		}
		(t.memoizedProps = t.pendingProps), e === null ? xn(t) : (K = e);
	}
	function ha(t, e, l, a) {
		(He = Al = null), Pi(e), (ua = null), (Pa = 0);
		var u = e.return;
		try {
			if (rg(t, u, e, l, $)) {
				(gt = 1), gn(t, oe(l, t.current)), (K = null);
				return;
			}
		} catch (n) {
			if (u !== null) throw ((K = u), n);
			(gt = 1), gn(t, oe(l, t.current)), (K = null);
			return;
		}
		e.flags & 32768
			? (P || a === 1
					? (t = !0)
					: ca || ($ & 536870912) !== 0
						? (t = !1)
						: ((ul = t = !0),
							(a === 2 || a === 9 || a === 3 || a === 6) &&
								((a = me.current),
								a !== null && a.tag === 13 && (a.flags |= 16384))),
				So(e, t))
			: xn(e);
	}
	function xn(t) {
		var e = t;
		do {
			if ((e.flags & 32768) !== 0) {
				So(e, ul);
				return;
			}
			t = e.return;
			var l = dg(e.alternate, e, Qe);
			if (l !== null) {
				K = l;
				return;
			}
			if (((e = e.sibling), e !== null)) {
				K = e;
				return;
			}
			K = e = t;
		} while (e !== null);
		gt === 0 && (gt = 5);
	}
	function So(t, e) {
		do {
			var l = hg(t.alternate, t);
			if (l !== null) {
				(l.flags &= 32767), (K = l);
				return;
			}
			if (
				((l = t.return),
				l !== null &&
					((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
				!e && ((t = t.sibling), t !== null))
			) {
				K = t;
				return;
			}
			K = t = l;
		} while (t !== null);
		(gt = 6), (K = null);
	}
	function bo(t, e, l, a, u, n, c, o, g) {
		t.cancelPendingCommit = null;
		do En();
		while (Ct !== 0);
		if ((et & 6) !== 0) throw Error(f(327));
		if (e !== null) {
			if (e === t.current) throw Error(f(177));
			if (
				((n = e.lanes | e.childLanes),
				(n |= zi),
				Id(t, l, n, c, o, g),
				t === ct && ((K = ct = null), ($ = 0)),
				(ra = e),
				(fl = t),
				(oa = l),
				(Hf = n),
				(Lf = u),
				(so = a),
				(e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
					? ((t.callbackNode = null),
						(t.callbackPriority = 0),
						Ag(Mu, function () {
							return Ao(), null;
						}))
					: ((t.callbackNode = null), (t.callbackPriority = 0)),
				(a = (e.flags & 13878) !== 0),
				(e.subtreeFlags & 13878) !== 0 || a)
			) {
				(a = D.T), (D.T = null), (u = N.p), (N.p = 2), (c = et), (et |= 4);
				try {
					gg(t, e, l);
				} finally {
					(et = c), (N.p = u), (D.T = a);
				}
			}
			(Ct = 1), Oo(), To(), xo();
		}
	}
	function Oo() {
		if (Ct === 1) {
			Ct = 0;
			var t = fl,
				e = ra,
				l = (e.flags & 13878) !== 0;
			if ((e.subtreeFlags & 13878) !== 0 || l) {
				(l = D.T), (D.T = null);
				var a = N.p;
				N.p = 2;
				var u = et;
				et |= 4;
				try {
					lo(e, t);
					var n = Ff,
						c = cs(t.containerInfo),
						o = n.focusedElem,
						g = n.selectionRange;
					if (
						c !== o &&
						o &&
						o.ownerDocument &&
						fs(o.ownerDocument.documentElement, o)
					) {
						if (g !== null && Ti(o)) {
							var T = g.start,
								z = g.end;
							if ((z === void 0 && (z = T), "selectionStart" in o))
								(o.selectionStart = T),
									(o.selectionEnd = Math.min(z, o.value.length));
							else {
								var R = o.ownerDocument || document,
									x = (R && R.defaultView) || window;
								if (x.getSelection) {
									var E = x.getSelection(),
										Q = o.textContent.length,
										j = Math.min(g.start, Q),
										it = g.end === void 0 ? j : Math.min(g.end, Q);
									!E.extend && j > it && ((c = it), (it = j), (j = c));
									var b = is(o, j),
										y = is(o, it);
									if (
										b &&
										y &&
										(E.rangeCount !== 1 ||
											E.anchorNode !== b.node ||
											E.anchorOffset !== b.offset ||
											E.focusNode !== y.node ||
											E.focusOffset !== y.offset)
									) {
										var O = R.createRange();
										O.setStart(b.node, b.offset),
											E.removeAllRanges(),
											j > it
												? (E.addRange(O), E.extend(y.node, y.offset))
												: (O.setEnd(y.node, y.offset), E.addRange(O));
									}
								}
							}
						}
						for (R = [], E = o; (E = E.parentNode); )
							E.nodeType === 1 &&
								R.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
						for (
							typeof o.focus == "function" && o.focus(), o = 0;
							o < R.length;
							o++
						) {
							var M = R[o];
							(M.element.scrollLeft = M.left), (M.element.scrollTop = M.top);
						}
					}
					(Bn = !!$f), (Ff = $f = null);
				} finally {
					(et = u), (N.p = a), (D.T = l);
				}
			}
			(t.current = e), (Ct = 2);
		}
	}
	function To() {
		if (Ct === 2) {
			Ct = 0;
			var t = fl,
				e = ra,
				l = (e.flags & 8772) !== 0;
			if ((e.subtreeFlags & 8772) !== 0 || l) {
				(l = D.T), (D.T = null);
				var a = N.p;
				N.p = 2;
				var u = et;
				et |= 4;
				try {
					Pr(t, e.alternate, e);
				} finally {
					(et = u), (N.p = a), (D.T = l);
				}
			}
			Ct = 3;
		}
	}
	function xo() {
		if (Ct === 4 || Ct === 3) {
			(Ct = 0), Zd();
			var t = fl,
				e = ra,
				l = oa,
				a = so;
			(e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
				? (Ct = 5)
				: ((Ct = 0), (ra = fl = null), Eo(t, t.pendingLanes));
			var u = t.pendingLanes;
			if (
				(u === 0 && (il = null),
				ei(l),
				(e = e.stateNode),
				It && typeof It.onCommitFiberRoot == "function")
			)
				try {
					It.onCommitFiberRoot(xa, e, void 0, (e.current.flags & 128) === 128);
				} catch {}
			if (a !== null) {
				(e = D.T), (u = N.p), (N.p = 2), (D.T = null);
				try {
					for (var n = t.onRecoverableError, c = 0; c < a.length; c++) {
						var o = a[c];
						n(o.value, { componentStack: o.stack });
					}
				} finally {
					(D.T = e), (N.p = u);
				}
			}
			(oa & 3) !== 0 && En(),
				De(t),
				(u = t.pendingLanes),
				(l & 4194090) !== 0 && (u & 42) !== 0
					? t === Cf
						? fu++
						: ((fu = 0), (Cf = t))
					: (fu = 0),
				cu(0);
		}
	}
	function Eo(t, e) {
		(t.pooledCacheLanes &= e) === 0 &&
			((e = t.pooledCache), e != null && ((t.pooledCache = null), Qa(e)));
	}
	function En(t) {
		return Oo(), To(), xo(), Ao();
	}
	function Ao() {
		if (Ct !== 5) return !1;
		var t = fl,
			e = Hf;
		Hf = 0;
		var l = ei(oa),
			a = D.T,
			u = N.p;
		try {
			(N.p = 32 > l ? 32 : l), (D.T = null), (l = Lf), (Lf = null);
			var n = fl,
				c = oa;
			if (((Ct = 0), (ra = fl = null), (oa = 0), (et & 6) !== 0))
				throw Error(f(331));
			var o = et;
			if (
				((et |= 4),
				fo(n.current),
				uo(n, n.current, c, l),
				(et = o),
				cu(0, !1),
				It && typeof It.onPostCommitFiberRoot == "function")
			)
				try {
					It.onPostCommitFiberRoot(xa, n);
				} catch {}
			return !0;
		} finally {
			(N.p = u), (D.T = a), Eo(t, e);
		}
	}
	function Do(t, e, l) {
		(e = oe(l, e)),
			(e = hf(t.stateNode, e, 2)),
			(t = We(t, e, 2)),
			t !== null && (Aa(t, 2), De(t));
	}
	function ft(t, e, l) {
		if (t.tag === 3) Do(t, t, l);
		else
			for (; e !== null; ) {
				if (e.tag === 3) {
					Do(e, t, l);
					break;
				} else if (e.tag === 1) {
					var a = e.stateNode;
					if (
						typeof e.type.getDerivedStateFromError == "function" ||
						(typeof a.componentDidCatch == "function" &&
							(il === null || !il.has(a)))
					) {
						(t = oe(l, t)),
							(l = Rr(2)),
							(a = We(e, l, 2)),
							a !== null && (Ur(l, a, e, t), Aa(a, 2), De(a));
						break;
					}
				}
				e = e.return;
			}
	}
	function jf(t, e, l) {
		var a = t.pingCache;
		if (a === null) {
			a = t.pingCache = new vg();
			var u = new Set();
			a.set(e, u);
		} else (u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u));
		u.has(l) ||
			((Rf = !0), u.add(l), (t = Tg.bind(null, t, e, l)), e.then(t, t));
	}
	function Tg(t, e, l) {
		var a = t.pingCache;
		a !== null && a.delete(e),
			(t.pingedLanes |= t.suspendedLanes & l),
			(t.warmLanes &= ~l),
			ct === t &&
				($ & l) === l &&
				(gt === 4 || (gt === 3 && ($ & 62914560) === $ && 300 > Oe() - _f)
					? (et & 2) === 0 && da(t, 0)
					: (Uf |= l),
				sa === $ && (sa = 0)),
			De(t);
	}
	function zo(t, e) {
		e === 0 && (e = Tc()), (t = kl(t, e)), t !== null && (Aa(t, e), De(t));
	}
	function xg(t) {
		var e = t.memoizedState,
			l = 0;
		e !== null && (l = e.retryLane), zo(t, l);
	}
	function Eg(t, e) {
		var l = 0;
		switch (t.tag) {
			case 13:
				var a = t.stateNode,
					u = t.memoizedState;
				u !== null && (l = u.retryLane);
				break;
			case 19:
				a = t.stateNode;
				break;
			case 22:
				a = t.stateNode._retryCache;
				break;
			default:
				throw Error(f(314));
		}
		a !== null && a.delete(e), zo(t, l);
	}
	function Ag(t, e) {
		return Wn(t, e);
	}
	var An = null,
		ga = null,
		Gf = !1,
		Dn = !1,
		Qf = !1,
		_l = 0;
	function De(t) {
		t !== ga &&
			t.next === null &&
			(ga === null ? (An = ga = t) : (ga = ga.next = t)),
			(Dn = !0),
			Gf || ((Gf = !0), zg());
	}
	function cu(t, e) {
		if (!Qf && Dn) {
			Qf = !0;
			do
				for (var l = !1, a = An; a !== null; ) {
					if (t !== 0) {
						var u = a.pendingLanes;
						if (u === 0) var n = 0;
						else {
							var c = a.suspendedLanes,
								o = a.pingedLanes;
							(n = (1 << (31 - te(42 | t) + 1)) - 1),
								(n &= u & ~(c & ~o)),
								(n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
						}
						n !== 0 && ((l = !0), No(a, n));
					} else
						(n = $),
							(n = Nu(
								a,
								a === ct ? n : 0,
								a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
							)),
							(n & 3) === 0 || Ea(a, n) || ((l = !0), No(a, n));
					a = a.next;
				}
			while (l);
			Qf = !1;
		}
	}
	function Dg() {
		Mo();
	}
	function Mo() {
		Dn = Gf = !1;
		var t = 0;
		_l !== 0 && (Cg() && (t = _l), (_l = 0));
		for (var e = Oe(), l = null, a = An; a !== null; ) {
			var u = a.next,
				n = Ro(a, e);
			n === 0
				? ((a.next = null),
					l === null ? (An = u) : (l.next = u),
					u === null && (ga = l))
				: ((l = a), (t !== 0 || (n & 3) !== 0) && (Dn = !0)),
				(a = u);
		}
		cu(t);
	}
	function Ro(t, e) {
		for (
			var l = t.suspendedLanes,
				a = t.pingedLanes,
				u = t.expirationTimes,
				n = t.pendingLanes & -62914561;
			0 < n;

		) {
			var c = 31 - te(n),
				o = 1 << c,
				g = u[c];
			g === -1
				? ((o & l) === 0 || (o & a) !== 0) && (u[c] = Pd(o, e))
				: g <= e && (t.expiredLanes |= o),
				(n &= ~o);
		}
		if (
			((e = ct),
			(l = $),
			(l = Nu(
				t,
				t === e ? l : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			(a = t.callbackNode),
			l === 0 ||
				(t === e && (lt === 2 || lt === 9)) ||
				t.cancelPendingCommit !== null)
		)
			return (
				a !== null && a !== null && Pn(a),
				(t.callbackNode = null),
				(t.callbackPriority = 0)
			);
		if ((l & 3) === 0 || Ea(t, l)) {
			if (((e = l & -l), e === t.callbackPriority)) return e;
			switch ((a !== null && Pn(a), ei(l))) {
				case 2:
				case 8:
					l = Sc;
					break;
				case 32:
					l = Mu;
					break;
				case 268435456:
					l = bc;
					break;
				default:
					l = Mu;
			}
			return (
				(a = Uo.bind(null, t)),
				(l = Wn(l, a)),
				(t.callbackPriority = e),
				(t.callbackNode = l),
				e
			);
		}
		return (
			a !== null && a !== null && Pn(a),
			(t.callbackPriority = 2),
			(t.callbackNode = null),
			2
		);
	}
	function Uo(t, e) {
		if (Ct !== 0 && Ct !== 5)
			return (t.callbackNode = null), (t.callbackPriority = 0), null;
		var l = t.callbackNode;
		if (En() && t.callbackNode !== l) return null;
		var a = $;
		return (
			(a = Nu(
				t,
				t === ct ? a : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			a === 0
				? null
				: (oo(t, a, e),
					Ro(t, Oe()),
					t.callbackNode != null && t.callbackNode === l
						? Uo.bind(null, t)
						: null)
		);
	}
	function No(t, e) {
		if (En()) return null;
		oo(t, e, !0);
	}
	function zg() {
		qg(function () {
			(et & 6) !== 0 ? Wn(pc, Dg) : Mo();
		});
	}
	function Xf() {
		return _l === 0 && (_l = Oc()), _l;
	}
	function _o(t) {
		return t == null || typeof t == "symbol" || typeof t == "boolean"
			? null
			: typeof t == "function"
				? t
				: Bu("" + t);
	}
	function Ho(t, e) {
		var l = e.ownerDocument.createElement("input");
		return (
			(l.name = e.name),
			(l.value = e.value),
			t.id && l.setAttribute("form", t.id),
			e.parentNode.insertBefore(l, e),
			(t = new FormData(t)),
			l.parentNode.removeChild(l),
			t
		);
	}
	function Mg(t, e, l, a, u) {
		if (e === "submit" && l && l.stateNode === u) {
			var n = _o((u[Jt] || null).action),
				c = a.submitter;
			c &&
				((e = (e = c[Jt] || null)
					? _o(e.formAction)
					: c.getAttribute("formAction")),
				e !== null && ((n = e), (c = null)));
			var o = new Gu("action", "action", null, a, u);
			t.push({
				event: o,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (a.defaultPrevented) {
								if (_l !== 0) {
									var g = c ? Ho(u, c) : new FormData(u);
									cf(
										l,
										{ pending: !0, data: g, method: u.method, action: n },
										null,
										g,
									);
								}
							} else
								typeof n == "function" &&
									(o.preventDefault(),
									(g = c ? Ho(u, c) : new FormData(u)),
									cf(
										l,
										{ pending: !0, data: g, method: u.method, action: n },
										n,
										g,
									));
						},
						currentTarget: u,
					},
				],
			});
		}
	}
	for (var Vf = 0; Vf < Di.length; Vf++) {
		var Zf = Di[Vf],
			Rg = Zf.toLowerCase(),
			Ug = Zf[0].toUpperCase() + Zf.slice(1);
		pe(Rg, "on" + Ug);
	}
	pe(os, "onAnimationEnd"),
		pe(ds, "onAnimationIteration"),
		pe(hs, "onAnimationStart"),
		pe("dblclick", "onDoubleClick"),
		pe("focusin", "onFocus"),
		pe("focusout", "onBlur"),
		pe(Jh, "onTransitionRun"),
		pe(kh, "onTransitionStart"),
		pe($h, "onTransitionCancel"),
		pe(gs, "onTransitionEnd"),
		Yl("onMouseEnter", ["mouseout", "mouseover"]),
		Yl("onMouseLeave", ["mouseout", "mouseover"]),
		Yl("onPointerEnter", ["pointerout", "pointerover"]),
		Yl("onPointerLeave", ["pointerout", "pointerover"]),
		yl(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		yl(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		yl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		yl(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		yl(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		yl(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		);
	var su =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		Ng = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(su),
		);
	function Lo(t, e) {
		e = (e & 4) !== 0;
		for (var l = 0; l < t.length; l++) {
			var a = t[l],
				u = a.event;
			a = a.listeners;
			t: {
				var n = void 0;
				if (e)
					for (var c = a.length - 1; 0 <= c; c--) {
						var o = a[c],
							g = o.instance,
							T = o.currentTarget;
						if (((o = o.listener), g !== n && u.isPropagationStopped()))
							break t;
						(n = o), (u.currentTarget = T);
						try {
							n(u);
						} catch (z) {
							hn(z);
						}
						(u.currentTarget = null), (n = g);
					}
				else
					for (c = 0; c < a.length; c++) {
						if (
							((o = a[c]),
							(g = o.instance),
							(T = o.currentTarget),
							(o = o.listener),
							g !== n && u.isPropagationStopped())
						)
							break t;
						(n = o), (u.currentTarget = T);
						try {
							n(u);
						} catch (z) {
							hn(z);
						}
						(u.currentTarget = null), (n = g);
					}
			}
		}
	}
	function w(t, e) {
		var l = e[li];
		l === void 0 && (l = e[li] = new Set());
		var a = t + "__bubble";
		l.has(a) || (Co(e, t, 2, !1), l.add(a));
	}
	function Kf(t, e, l) {
		var a = 0;
		e && (a |= 4), Co(l, t, a, e);
	}
	var zn = "_reactListening" + Math.random().toString(36).slice(2);
	function wf(t) {
		if (!t[zn]) {
			(t[zn] = !0),
				zc.forEach(function (l) {
					l !== "selectionchange" && (Ng.has(l) || Kf(l, !1, t), Kf(l, !0, t));
				});
			var e = t.nodeType === 9 ? t : t.ownerDocument;
			e === null || e[zn] || ((e[zn] = !0), Kf("selectionchange", !1, e));
		}
	}
	function Co(t, e, l, a) {
		switch (nd(e)) {
			case 2:
				var u = u0;
				break;
			case 8:
				u = n0;
				break;
			default:
				u = ic;
		}
		(l = u.bind(null, e, l, t)),
			(u = void 0),
			!hi ||
				(e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
				(u = !0),
			a
				? u !== void 0
					? t.addEventListener(e, l, { capture: !0, passive: u })
					: t.addEventListener(e, l, !0)
				: u !== void 0
					? t.addEventListener(e, l, { passive: u })
					: t.addEventListener(e, l, !1);
	}
	function Jf(t, e, l, a, u) {
		var n = a;
		if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
			t: for (;;) {
				if (a === null) return;
				var c = a.tag;
				if (c === 3 || c === 4) {
					var o = a.stateNode.containerInfo;
					if (o === u) break;
					if (c === 4)
						for (c = a.return; c !== null; ) {
							var g = c.tag;
							if ((g === 3 || g === 4) && c.stateNode.containerInfo === u)
								return;
							c = c.return;
						}
					for (; o !== null; ) {
						if (((c = Cl(o)), c === null)) return;
						if (((g = c.tag), g === 5 || g === 6 || g === 26 || g === 27)) {
							a = n = c;
							continue t;
						}
						o = o.parentNode;
					}
				}
				a = a.return;
			}
		Qc(function () {
			var T = n,
				z = oi(l),
				R = [];
			t: {
				var x = ms.get(t);
				if (x !== void 0) {
					var E = Gu,
						Q = t;
					switch (t) {
						case "keypress":
							if (Yu(l) === 0) break t;
						case "keydown":
						case "keyup":
							E = Ah;
							break;
						case "focusin":
							(Q = "focus"), (E = vi);
							break;
						case "focusout":
							(Q = "blur"), (E = vi);
							break;
						case "beforeblur":
						case "afterblur":
							E = vi;
							break;
						case "click":
							if (l.button === 2) break t;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							E = Zc;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							E = hh;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							E = Mh;
							break;
						case os:
						case ds:
						case hs:
							E = yh;
							break;
						case gs:
							E = Uh;
							break;
						case "scroll":
						case "scrollend":
							E = oh;
							break;
						case "wheel":
							E = _h;
							break;
						case "copy":
						case "cut":
						case "paste":
							E = ph;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							E = wc;
							break;
						case "toggle":
						case "beforetoggle":
							E = Lh;
					}
					var j = (e & 4) !== 0,
						it = !j && (t === "scroll" || t === "scrollend"),
						b = j ? (x !== null ? x + "Capture" : null) : x;
					j = [];
					for (var y = T, O; y !== null; ) {
						var M = y;
						if (
							((O = M.stateNode),
							(M = M.tag),
							(M !== 5 && M !== 26 && M !== 27) ||
								O === null ||
								b === null ||
								((M = Ma(y, b)), M != null && j.push(ru(y, M, O))),
							it)
						)
							break;
						y = y.return;
					}
					0 < j.length &&
						((x = new E(x, Q, null, l, z)), R.push({ event: x, listeners: j }));
				}
			}
			if ((e & 7) === 0) {
				t: {
					if (
						((x = t === "mouseover" || t === "pointerover"),
						(E = t === "mouseout" || t === "pointerout"),
						x &&
							l !== ri &&
							(Q = l.relatedTarget || l.fromElement) &&
							(Cl(Q) || Q[Ll]))
					)
						break t;
					if (
						(E || x) &&
						((x =
							z.window === z
								? z
								: (x = z.ownerDocument)
									? x.defaultView || x.parentWindow
									: window),
						E
							? ((Q = l.relatedTarget || l.toElement),
								(E = T),
								(Q = Q ? Cl(Q) : null),
								Q !== null &&
									((it = h(Q)),
									(j = Q.tag),
									Q !== it || (j !== 5 && j !== 27 && j !== 6)) &&
									(Q = null))
							: ((E = null), (Q = T)),
						E !== Q)
					) {
						if (
							((j = Zc),
							(M = "onMouseLeave"),
							(b = "onMouseEnter"),
							(y = "mouse"),
							(t === "pointerout" || t === "pointerover") &&
								((j = wc),
								(M = "onPointerLeave"),
								(b = "onPointerEnter"),
								(y = "pointer")),
							(it = E == null ? x : za(E)),
							(O = Q == null ? x : za(Q)),
							(x = new j(M, y + "leave", E, l, z)),
							(x.target = it),
							(x.relatedTarget = O),
							(M = null),
							Cl(z) === T &&
								((j = new j(b, y + "enter", Q, l, z)),
								(j.target = O),
								(j.relatedTarget = it),
								(M = j)),
							(it = M),
							E && Q)
						)
							e: {
								for (j = E, b = Q, y = 0, O = j; O; O = ma(O)) y++;
								for (O = 0, M = b; M; M = ma(M)) O++;
								for (; 0 < y - O; ) (j = ma(j)), y--;
								for (; 0 < O - y; ) (b = ma(b)), O--;
								for (; y--; ) {
									if (j === b || (b !== null && j === b.alternate)) break e;
									(j = ma(j)), (b = ma(b));
								}
								j = null;
							}
						else j = null;
						E !== null && Bo(R, x, E, j, !1),
							Q !== null && it !== null && Bo(R, it, Q, j, !0);
					}
				}
				t: {
					if (
						((x = T ? za(T) : window),
						(E = x.nodeName && x.nodeName.toLowerCase()),
						E === "select" || (E === "input" && x.type === "file"))
					)
						var C = ts;
					else if (Pc(x))
						if (es) C = Zh;
						else {
							C = Xh;
							var Z = Qh;
						}
					else
						(E = x.nodeName),
							!E ||
							E.toLowerCase() !== "input" ||
							(x.type !== "checkbox" && x.type !== "radio")
								? T && si(T.elementType) && (C = ts)
								: (C = Vh);
					if (C && (C = C(t, T))) {
						Ic(R, C, l, z);
						break t;
					}
					Z && Z(t, x, T),
						t === "focusout" &&
							T &&
							x.type === "number" &&
							T.memoizedProps.value != null &&
							ci(x, "number", x.value);
				}
				switch (((Z = T ? za(T) : window), t)) {
					case "focusin":
						(Pc(Z) || Z.contentEditable === "true") &&
							((Kl = Z), (xi = T), (Ba = null));
						break;
					case "focusout":
						Ba = xi = Kl = null;
						break;
					case "mousedown":
						Ei = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(Ei = !1), ss(R, l, z);
						break;
					case "selectionchange":
						if (wh) break;
					case "keydown":
					case "keyup":
						ss(R, l, z);
				}
				var q;
				if (Si)
					t: {
						switch (t) {
							case "compositionstart":
								var G = "onCompositionStart";
								break t;
							case "compositionend":
								G = "onCompositionEnd";
								break t;
							case "compositionupdate":
								G = "onCompositionUpdate";
								break t;
						}
						G = void 0;
					}
				else
					Zl
						? Fc(t, l) && (G = "onCompositionEnd")
						: t === "keydown" &&
							l.keyCode === 229 &&
							(G = "onCompositionStart");
				G &&
					(Jc &&
						l.locale !== "ko" &&
						(Zl || G !== "onCompositionStart"
							? G === "onCompositionEnd" && Zl && (q = Xc())
							: ((Je = z),
								(gi = "value" in Je ? Je.value : Je.textContent),
								(Zl = !0))),
					(Z = Mn(T, G)),
					0 < Z.length &&
						((G = new Kc(G, t, null, l, z)),
						R.push({ event: G, listeners: Z }),
						q ? (G.data = q) : ((q = Wc(l)), q !== null && (G.data = q)))),
					(q = Bh ? qh(t, l) : Yh(t, l)) &&
						((G = Mn(T, "onBeforeInput")),
						0 < G.length &&
							((Z = new Kc("onBeforeInput", "beforeinput", null, l, z)),
							R.push({ event: Z, listeners: G }),
							(Z.data = q))),
					Mg(R, t, T, l, z);
			}
			Lo(R, e);
		});
	}
	function ru(t, e, l) {
		return { instance: t, listener: e, currentTarget: l };
	}
	function Mn(t, e) {
		for (var l = e + "Capture", a = []; t !== null; ) {
			var u = t,
				n = u.stateNode;
			if (
				((u = u.tag),
				(u !== 5 && u !== 26 && u !== 27) ||
					n === null ||
					((u = Ma(t, l)),
					u != null && a.unshift(ru(t, u, n)),
					(u = Ma(t, e)),
					u != null && a.push(ru(t, u, n))),
				t.tag === 3)
			)
				return a;
			t = t.return;
		}
		return [];
	}
	function ma(t) {
		if (t === null) return null;
		do t = t.return;
		while (t && t.tag !== 5 && t.tag !== 27);
		return t || null;
	}
	function Bo(t, e, l, a, u) {
		for (var n = e._reactName, c = []; l !== null && l !== a; ) {
			var o = l,
				g = o.alternate,
				T = o.stateNode;
			if (((o = o.tag), g !== null && g === a)) break;
			(o !== 5 && o !== 26 && o !== 27) ||
				T === null ||
				((g = T),
				u
					? ((T = Ma(l, n)), T != null && c.unshift(ru(l, T, g)))
					: u || ((T = Ma(l, n)), T != null && c.push(ru(l, T, g)))),
				(l = l.return);
		}
		c.length !== 0 && t.push({ event: e, listeners: c });
	}
	var _g = /\r\n?/g,
		Hg = /\u0000|\uFFFD/g;
	function qo(t) {
		return (typeof t == "string" ? t : "" + t)
			.replace(
				_g,
				`
`,
			)
			.replace(Hg, "");
	}
	function Yo(t, e) {
		return (e = qo(e)), qo(t) === e;
	}
	function Rn() {}
	function nt(t, e, l, a, u, n) {
		switch (l) {
			case "children":
				typeof a == "string"
					? e === "body" || (e === "textarea" && a === "") || Ql(t, a)
					: (typeof a == "number" || typeof a == "bigint") &&
						e !== "body" &&
						Ql(t, "" + a);
				break;
			case "className":
				Hu(t, "class", a);
				break;
			case "tabIndex":
				Hu(t, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Hu(t, l, a);
				break;
			case "style":
				jc(t, a, n);
				break;
			case "data":
				if (e !== "object") {
					Hu(t, "data", a);
					break;
				}
			case "src":
			case "href":
				if (a === "" && (e !== "a" || l !== "href")) {
					t.removeAttribute(l);
					break;
				}
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					t.removeAttribute(l);
					break;
				}
				(a = Bu("" + a)), t.setAttribute(l, a);
				break;
			case "action":
			case "formAction":
				if (typeof a == "function") {
					t.setAttribute(
						l,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
					);
					break;
				} else
					typeof n == "function" &&
						(l === "formAction"
							? (e !== "input" && nt(t, e, "name", u.name, u, null),
								nt(t, e, "formEncType", u.formEncType, u, null),
								nt(t, e, "formMethod", u.formMethod, u, null),
								nt(t, e, "formTarget", u.formTarget, u, null))
							: (nt(t, e, "encType", u.encType, u, null),
								nt(t, e, "method", u.method, u, null),
								nt(t, e, "target", u.target, u, null)));
				if (a == null || typeof a == "symbol" || typeof a == "boolean") {
					t.removeAttribute(l);
					break;
				}
				(a = Bu("" + a)), t.setAttribute(l, a);
				break;
			case "onClick":
				a != null && (t.onclick = Rn);
				break;
			case "onScroll":
				a != null && w("scroll", t);
				break;
			case "onScrollEnd":
				a != null && w("scrollend", t);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
					if (((l = a.__html), l != null)) {
						if (u.children != null) throw Error(f(60));
						t.innerHTML = l;
					}
				}
				break;
			case "multiple":
				t.multiple = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				t.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "boolean" ||
					typeof a == "symbol"
				) {
					t.removeAttribute("xlink:href");
					break;
				}
				(l = Bu("" + a)),
					t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol"
					? t.setAttribute(l, "" + a)
					: t.removeAttribute(l);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol"
					? t.setAttribute(l, "")
					: t.removeAttribute(l);
				break;
			case "capture":
			case "download":
				a === !0
					? t.setAttribute(l, "")
					: a !== !1 &&
						  a != null &&
						  typeof a != "function" &&
						  typeof a != "symbol"
						? t.setAttribute(l, a)
						: t.removeAttribute(l);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null &&
				typeof a != "function" &&
				typeof a != "symbol" &&
				!isNaN(a) &&
				1 <= a
					? t.setAttribute(l, a)
					: t.removeAttribute(l);
				break;
			case "rowSpan":
			case "start":
				a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
					? t.removeAttribute(l)
					: t.setAttribute(l, a);
				break;
			case "popover":
				w("beforetoggle", t), w("toggle", t), _u(t, "popover", a);
				break;
			case "xlinkActuate":
				Me(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				Me(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				Me(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				Me(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				Me(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				Me(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				Me(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				Me(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				Me(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				_u(t, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < l.length) ||
					(l[0] !== "o" && l[0] !== "O") ||
					(l[1] !== "n" && l[1] !== "N")) &&
					((l = sh.get(l) || l), _u(t, l, a));
		}
	}
	function kf(t, e, l, a, u, n) {
		switch (l) {
			case "style":
				jc(t, a, n);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
					if (((l = a.__html), l != null)) {
						if (u.children != null) throw Error(f(60));
						t.innerHTML = l;
					}
				}
				break;
			case "children":
				typeof a == "string"
					? Ql(t, a)
					: (typeof a == "number" || typeof a == "bigint") && Ql(t, "" + a);
				break;
			case "onScroll":
				a != null && w("scroll", t);
				break;
			case "onScrollEnd":
				a != null && w("scrollend", t);
				break;
			case "onClick":
				a != null && (t.onclick = Rn);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!Mc.hasOwnProperty(l))
					t: {
						if (
							l[0] === "o" &&
							l[1] === "n" &&
							((u = l.endsWith("Capture")),
							(e = l.slice(2, u ? l.length - 7 : void 0)),
							(n = t[Jt] || null),
							(n = n != null ? n[l] : null),
							typeof n == "function" && t.removeEventListener(e, n, u),
							typeof a == "function")
						) {
							typeof n != "function" &&
								n !== null &&
								(l in t
									? (t[l] = null)
									: t.hasAttribute(l) && t.removeAttribute(l)),
								t.addEventListener(e, a, u);
							break t;
						}
						l in t
							? (t[l] = a)
							: a === !0
								? t.setAttribute(l, "")
								: _u(t, l, a);
					}
		}
	}
	function Bt(t, e, l) {
		switch (e) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				w("error", t), w("load", t);
				var a = !1,
					u = !1,
					n;
				for (n in l)
					if (l.hasOwnProperty(n)) {
						var c = l[n];
						if (c != null)
							switch (n) {
								case "src":
									a = !0;
									break;
								case "srcSet":
									u = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(f(137, e));
								default:
									nt(t, e, n, c, l, null);
							}
					}
				u && nt(t, e, "srcSet", l.srcSet, l, null),
					a && nt(t, e, "src", l.src, l, null);
				return;
			case "input":
				w("invalid", t);
				var o = (n = c = u = null),
					g = null,
					T = null;
				for (a in l)
					if (l.hasOwnProperty(a)) {
						var z = l[a];
						if (z != null)
							switch (a) {
								case "name":
									u = z;
									break;
								case "type":
									c = z;
									break;
								case "checked":
									g = z;
									break;
								case "defaultChecked":
									T = z;
									break;
								case "value":
									n = z;
									break;
								case "defaultValue":
									o = z;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (z != null) throw Error(f(137, e));
									break;
								default:
									nt(t, e, a, z, l, null);
							}
					}
				Cc(t, n, o, g, T, c, u, !1), Lu(t);
				return;
			case "select":
				w("invalid", t), (a = c = n = null);
				for (u in l)
					if (l.hasOwnProperty(u) && ((o = l[u]), o != null))
						switch (u) {
							case "value":
								n = o;
								break;
							case "defaultValue":
								c = o;
								break;
							case "multiple":
								a = o;
							default:
								nt(t, e, u, o, l, null);
						}
				(e = n),
					(l = c),
					(t.multiple = !!a),
					e != null ? Gl(t, !!a, e, !1) : l != null && Gl(t, !!a, l, !0);
				return;
			case "textarea":
				w("invalid", t), (n = u = a = null);
				for (c in l)
					if (l.hasOwnProperty(c) && ((o = l[c]), o != null))
						switch (c) {
							case "value":
								a = o;
								break;
							case "defaultValue":
								u = o;
								break;
							case "children":
								n = o;
								break;
							case "dangerouslySetInnerHTML":
								if (o != null) throw Error(f(91));
								break;
							default:
								nt(t, e, c, o, l, null);
						}
				qc(t, a, u, n), Lu(t);
				return;
			case "option":
				for (g in l)
					if (l.hasOwnProperty(g) && ((a = l[g]), a != null))
						switch (g) {
							case "selected":
								t.selected =
									a && typeof a != "function" && typeof a != "symbol";
								break;
							default:
								nt(t, e, g, a, l, null);
						}
				return;
			case "dialog":
				w("beforetoggle", t), w("toggle", t), w("cancel", t), w("close", t);
				break;
			case "iframe":
			case "object":
				w("load", t);
				break;
			case "video":
			case "audio":
				for (a = 0; a < su.length; a++) w(su[a], t);
				break;
			case "image":
				w("error", t), w("load", t);
				break;
			case "details":
				w("toggle", t);
				break;
			case "embed":
			case "source":
			case "link":
				w("error", t), w("load", t);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (T in l)
					if (l.hasOwnProperty(T) && ((a = l[T]), a != null))
						switch (T) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(f(137, e));
							default:
								nt(t, e, T, a, l, null);
						}
				return;
			default:
				if (si(e)) {
					for (z in l)
						l.hasOwnProperty(z) &&
							((a = l[z]), a !== void 0 && kf(t, e, z, a, l, void 0));
					return;
				}
		}
		for (o in l)
			l.hasOwnProperty(o) && ((a = l[o]), a != null && nt(t, e, o, a, l, null));
	}
	function Lg(t, e, l, a) {
		switch (e) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var u = null,
					n = null,
					c = null,
					o = null,
					g = null,
					T = null,
					z = null;
				for (E in l) {
					var R = l[E];
					if (l.hasOwnProperty(E) && R != null)
						switch (E) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								g = R;
							default:
								a.hasOwnProperty(E) || nt(t, e, E, null, a, R);
						}
				}
				for (var x in a) {
					var E = a[x];
					if (((R = l[x]), a.hasOwnProperty(x) && (E != null || R != null)))
						switch (x) {
							case "type":
								n = E;
								break;
							case "name":
								u = E;
								break;
							case "checked":
								T = E;
								break;
							case "defaultChecked":
								z = E;
								break;
							case "value":
								c = E;
								break;
							case "defaultValue":
								o = E;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (E != null) throw Error(f(137, e));
								break;
							default:
								E !== R && nt(t, e, x, E, a, R);
						}
				}
				fi(t, c, o, g, T, z, n, u);
				return;
			case "select":
				E = c = o = x = null;
				for (n in l)
					if (((g = l[n]), l.hasOwnProperty(n) && g != null))
						switch (n) {
							case "value":
								break;
							case "multiple":
								E = g;
							default:
								a.hasOwnProperty(n) || nt(t, e, n, null, a, g);
						}
				for (u in a)
					if (
						((n = a[u]),
						(g = l[u]),
						a.hasOwnProperty(u) && (n != null || g != null))
					)
						switch (u) {
							case "value":
								x = n;
								break;
							case "defaultValue":
								o = n;
								break;
							case "multiple":
								c = n;
							default:
								n !== g && nt(t, e, u, n, a, g);
						}
				(e = o),
					(l = c),
					(a = E),
					x != null
						? Gl(t, !!l, x, !1)
						: !!a != !!l &&
							(e != null ? Gl(t, !!l, e, !0) : Gl(t, !!l, l ? [] : "", !1));
				return;
			case "textarea":
				E = x = null;
				for (o in l)
					if (
						((u = l[o]),
						l.hasOwnProperty(o) && u != null && !a.hasOwnProperty(o))
					)
						switch (o) {
							case "value":
								break;
							case "children":
								break;
							default:
								nt(t, e, o, null, a, u);
						}
				for (c in a)
					if (
						((u = a[c]),
						(n = l[c]),
						a.hasOwnProperty(c) && (u != null || n != null))
					)
						switch (c) {
							case "value":
								x = u;
								break;
							case "defaultValue":
								E = u;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (u != null) throw Error(f(91));
								break;
							default:
								u !== n && nt(t, e, c, u, a, n);
						}
				Bc(t, x, E);
				return;
			case "option":
				for (var Q in l)
					if (
						((x = l[Q]),
						l.hasOwnProperty(Q) && x != null && !a.hasOwnProperty(Q))
					)
						switch (Q) {
							case "selected":
								t.selected = !1;
								break;
							default:
								nt(t, e, Q, null, a, x);
						}
				for (g in a)
					if (
						((x = a[g]),
						(E = l[g]),
						a.hasOwnProperty(g) && x !== E && (x != null || E != null))
					)
						switch (g) {
							case "selected":
								t.selected =
									x && typeof x != "function" && typeof x != "symbol";
								break;
							default:
								nt(t, e, g, x, a, E);
						}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var j in l)
					(x = l[j]),
						l.hasOwnProperty(j) &&
							x != null &&
							!a.hasOwnProperty(j) &&
							nt(t, e, j, null, a, x);
				for (T in a)
					if (
						((x = a[T]),
						(E = l[T]),
						a.hasOwnProperty(T) && x !== E && (x != null || E != null))
					)
						switch (T) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (x != null) throw Error(f(137, e));
								break;
							default:
								nt(t, e, T, x, a, E);
						}
				return;
			default:
				if (si(e)) {
					for (var it in l)
						(x = l[it]),
							l.hasOwnProperty(it) &&
								x !== void 0 &&
								!a.hasOwnProperty(it) &&
								kf(t, e, it, void 0, a, x);
					for (z in a)
						(x = a[z]),
							(E = l[z]),
							!a.hasOwnProperty(z) ||
								x === E ||
								(x === void 0 && E === void 0) ||
								kf(t, e, z, x, a, E);
					return;
				}
		}
		for (var b in l)
			(x = l[b]),
				l.hasOwnProperty(b) &&
					x != null &&
					!a.hasOwnProperty(b) &&
					nt(t, e, b, null, a, x);
		for (R in a)
			(x = a[R]),
				(E = l[R]),
				!a.hasOwnProperty(R) ||
					x === E ||
					(x == null && E == null) ||
					nt(t, e, R, x, a, E);
	}
	var $f = null,
		Ff = null;
	function Un(t) {
		return t.nodeType === 9 ? t : t.ownerDocument;
	}
	function jo(t) {
		switch (t) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function Go(t, e) {
		if (t === 0)
			switch (e) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return t === 1 && e === "foreignObject" ? 0 : t;
	}
	function Wf(t, e) {
		return (
			t === "textarea" ||
			t === "noscript" ||
			typeof e.children == "string" ||
			typeof e.children == "number" ||
			typeof e.children == "bigint" ||
			(typeof e.dangerouslySetInnerHTML == "object" &&
				e.dangerouslySetInnerHTML !== null &&
				e.dangerouslySetInnerHTML.__html != null)
		);
	}
	var Pf = null;
	function Cg() {
		var t = window.event;
		return t && t.type === "popstate"
			? t === Pf
				? !1
				: ((Pf = t), !0)
			: ((Pf = null), !1);
	}
	var Qo = typeof setTimeout == "function" ? setTimeout : void 0,
		Bg = typeof clearTimeout == "function" ? clearTimeout : void 0,
		Xo = typeof Promise == "function" ? Promise : void 0,
		qg =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof Xo < "u"
					? function (t) {
							return Xo.resolve(null).then(t).catch(Yg);
						}
					: Qo;
	function Yg(t) {
		setTimeout(function () {
			throw t;
		});
	}
	function sl(t) {
		return t === "head";
	}
	function Vo(t, e) {
		var l = e,
			a = 0,
			u = 0;
		do {
			var n = l.nextSibling;
			if ((t.removeChild(l), n && n.nodeType === 8))
				if (((l = n.data), l === "/$")) {
					if (0 < a && 8 > a) {
						l = a;
						var c = t.ownerDocument;
						if ((l & 1 && ou(c.documentElement), l & 2 && ou(c.body), l & 4))
							for (l = c.head, ou(l), c = l.firstChild; c; ) {
								var o = c.nextSibling,
									g = c.nodeName;
								c[Da] ||
									g === "SCRIPT" ||
									g === "STYLE" ||
									(g === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
									l.removeChild(c),
									(c = o);
							}
					}
					if (u === 0) {
						t.removeChild(n), Su(e);
						return;
					}
					u--;
				} else
					l === "$" || l === "$?" || l === "$!"
						? u++
						: (a = l.charCodeAt(0) - 48);
			else a = 0;
			l = n;
		} while (l);
		Su(e);
	}
	function If(t) {
		var e = t.firstChild;
		for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
			var l = e;
			switch (((e = e.nextSibling), l.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					If(l), ai(l);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (l.rel.toLowerCase() === "stylesheet") continue;
			}
			t.removeChild(l);
		}
	}
	function jg(t, e, l, a) {
		for (; t.nodeType === 1; ) {
			var u = l;
			if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
				if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
			} else if (a) {
				if (!t[Da])
					switch (e) {
						case "meta":
							if (!t.hasAttribute("itemprop")) break;
							return t;
						case "link":
							if (
								((n = t.getAttribute("rel")),
								n === "stylesheet" && t.hasAttribute("data-precedence"))
							)
								break;
							if (
								n !== u.rel ||
								t.getAttribute("href") !==
									(u.href == null || u.href === "" ? null : u.href) ||
								t.getAttribute("crossorigin") !==
									(u.crossOrigin == null ? null : u.crossOrigin) ||
								t.getAttribute("title") !== (u.title == null ? null : u.title)
							)
								break;
							return t;
						case "style":
							if (t.hasAttribute("data-precedence")) break;
							return t;
						case "script":
							if (
								((n = t.getAttribute("src")),
								(n !== (u.src == null ? null : u.src) ||
									t.getAttribute("type") !== (u.type == null ? null : u.type) ||
									t.getAttribute("crossorigin") !==
										(u.crossOrigin == null ? null : u.crossOrigin)) &&
									n &&
									t.hasAttribute("async") &&
									!t.hasAttribute("itemprop"))
							)
								break;
							return t;
						default:
							return t;
					}
			} else if (e === "input" && t.type === "hidden") {
				var n = u.name == null ? null : "" + u.name;
				if (u.type === "hidden" && t.getAttribute("name") === n) return t;
			} else return t;
			if (((t = be(t.nextSibling)), t === null)) break;
		}
		return null;
	}
	function Gg(t, e, l) {
		if (e === "") return null;
		for (; t.nodeType !== 3; )
			if (
				((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
					!l) ||
				((t = be(t.nextSibling)), t === null)
			)
				return null;
		return t;
	}
	function tc(t) {
		return (
			t.data === "$!" ||
			(t.data === "$?" && t.ownerDocument.readyState === "complete")
		);
	}
	function Qg(t, e) {
		var l = t.ownerDocument;
		if (t.data !== "$?" || l.readyState === "complete") e();
		else {
			var a = function () {
				e(), l.removeEventListener("DOMContentLoaded", a);
			};
			l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
		}
	}
	function be(t) {
		for (; t != null; t = t.nextSibling) {
			var e = t.nodeType;
			if (e === 1 || e === 3) break;
			if (e === 8) {
				if (
					((e = t.data),
					e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
				)
					break;
				if (e === "/$") return null;
			}
		}
		return t;
	}
	var ec = null;
	function Zo(t) {
		t = t.previousSibling;
		for (var e = 0; t; ) {
			if (t.nodeType === 8) {
				var l = t.data;
				if (l === "$" || l === "$!" || l === "$?") {
					if (e === 0) return t;
					e--;
				} else l === "/$" && e++;
			}
			t = t.previousSibling;
		}
		return null;
	}
	function Ko(t, e, l) {
		switch (((e = Un(l)), t)) {
			case "html":
				if (((t = e.documentElement), !t)) throw Error(f(452));
				return t;
			case "head":
				if (((t = e.head), !t)) throw Error(f(453));
				return t;
			case "body":
				if (((t = e.body), !t)) throw Error(f(454));
				return t;
			default:
				throw Error(f(451));
		}
	}
	function ou(t) {
		for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
		ai(t);
	}
	var ve = new Map(),
		wo = new Set();
	function Nn(t) {
		return typeof t.getRootNode == "function"
			? t.getRootNode()
			: t.nodeType === 9
				? t
				: t.ownerDocument;
	}
	var Xe = N.d;
	N.d = { f: Xg, r: Vg, D: Zg, C: Kg, L: wg, m: Jg, X: $g, S: kg, M: Fg };
	function Xg() {
		var t = Xe.f(),
			e = Tn();
		return t || e;
	}
	function Vg(t) {
		var e = Bl(t);
		e !== null && e.tag === 5 && e.type === "form" ? or(e) : Xe.r(t);
	}
	var ya = typeof document > "u" ? null : document;
	function Jo(t, e, l) {
		var a = ya;
		if (a && typeof e == "string" && e) {
			var u = re(e);
			(u = 'link[rel="' + t + '"][href="' + u + '"]'),
				typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
				wo.has(u) ||
					(wo.add(u),
					(t = { rel: t, crossOrigin: l, href: e }),
					a.querySelector(u) === null &&
						((e = a.createElement("link")),
						Bt(e, "link", t),
						zt(e),
						a.head.appendChild(e)));
		}
	}
	function Zg(t) {
		Xe.D(t), Jo("dns-prefetch", t, null);
	}
	function Kg(t, e) {
		Xe.C(t, e), Jo("preconnect", t, e);
	}
	function wg(t, e, l) {
		Xe.L(t, e, l);
		var a = ya;
		if (a && t && e) {
			var u = 'link[rel="preload"][as="' + re(e) + '"]';
			e === "image" && l && l.imageSrcSet
				? ((u += '[imagesrcset="' + re(l.imageSrcSet) + '"]'),
					typeof l.imageSizes == "string" &&
						(u += '[imagesizes="' + re(l.imageSizes) + '"]'))
				: (u += '[href="' + re(t) + '"]');
			var n = u;
			switch (e) {
				case "style":
					n = va(t);
					break;
				case "script":
					n = pa(t);
			}
			ve.has(n) ||
				((t = A(
					{
						rel: "preload",
						href: e === "image" && l && l.imageSrcSet ? void 0 : t,
						as: e,
					},
					l,
				)),
				ve.set(n, t),
				a.querySelector(u) !== null ||
					(e === "style" && a.querySelector(du(n))) ||
					(e === "script" && a.querySelector(hu(n))) ||
					((e = a.createElement("link")),
					Bt(e, "link", t),
					zt(e),
					a.head.appendChild(e)));
		}
	}
	function Jg(t, e) {
		Xe.m(t, e);
		var l = ya;
		if (l && t) {
			var a = e && typeof e.as == "string" ? e.as : "script",
				u =
					'link[rel="modulepreload"][as="' + re(a) + '"][href="' + re(t) + '"]',
				n = u;
			switch (a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					n = pa(t);
			}
			if (
				!ve.has(n) &&
				((t = A({ rel: "modulepreload", href: t }, e)),
				ve.set(n, t),
				l.querySelector(u) === null)
			) {
				switch (a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (l.querySelector(hu(n))) return;
				}
				(a = l.createElement("link")),
					Bt(a, "link", t),
					zt(a),
					l.head.appendChild(a);
			}
		}
	}
	function kg(t, e, l) {
		Xe.S(t, e, l);
		var a = ya;
		if (a && t) {
			var u = ql(a).hoistableStyles,
				n = va(t);
			e = e || "default";
			var c = u.get(n);
			if (!c) {
				var o = { loading: 0, preload: null };
				if ((c = a.querySelector(du(n)))) o.loading = 5;
				else {
					(t = A({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
						(l = ve.get(n)) && lc(t, l);
					var g = (c = a.createElement("link"));
					zt(g),
						Bt(g, "link", t),
						(g._p = new Promise(function (T, z) {
							(g.onload = T), (g.onerror = z);
						})),
						g.addEventListener("load", function () {
							o.loading |= 1;
						}),
						g.addEventListener("error", function () {
							o.loading |= 2;
						}),
						(o.loading |= 4),
						_n(c, e, a);
				}
				(c = { type: "stylesheet", instance: c, count: 1, state: o }),
					u.set(n, c);
			}
		}
	}
	function $g(t, e) {
		Xe.X(t, e);
		var l = ya;
		if (l && t) {
			var a = ql(l).hoistableScripts,
				u = pa(t),
				n = a.get(u);
			n ||
				((n = l.querySelector(hu(u))),
				n ||
					((t = A({ src: t, async: !0 }, e)),
					(e = ve.get(u)) && ac(t, e),
					(n = l.createElement("script")),
					zt(n),
					Bt(n, "link", t),
					l.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function Fg(t, e) {
		Xe.M(t, e);
		var l = ya;
		if (l && t) {
			var a = ql(l).hoistableScripts,
				u = pa(t),
				n = a.get(u);
			n ||
				((n = l.querySelector(hu(u))),
				n ||
					((t = A({ src: t, async: !0, type: "module" }, e)),
					(e = ve.get(u)) && ac(t, e),
					(n = l.createElement("script")),
					zt(n),
					Bt(n, "link", t),
					l.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function ko(t, e, l, a) {
		var u = (u = Ze.current) ? Nn(u) : null;
		if (!u) throw Error(f(446));
		switch (t) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof l.precedence == "string" && typeof l.href == "string"
					? ((e = va(l.href)),
						(l = ql(u).hoistableStyles),
						(a = l.get(e)),
						a ||
							((a = { type: "style", instance: null, count: 0, state: null }),
							l.set(e, a)),
						a)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					l.rel === "stylesheet" &&
					typeof l.href == "string" &&
					typeof l.precedence == "string"
				) {
					t = va(l.href);
					var n = ql(u).hoistableStyles,
						c = n.get(t);
					if (
						(c ||
							((u = u.ownerDocument || u),
							(c = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							n.set(t, c),
							(n = u.querySelector(du(t))) &&
								!n._p &&
								((c.instance = n), (c.state.loading = 5)),
							ve.has(t) ||
								((l = {
									rel: "preload",
									as: "style",
									href: l.href,
									crossOrigin: l.crossOrigin,
									integrity: l.integrity,
									media: l.media,
									hrefLang: l.hrefLang,
									referrerPolicy: l.referrerPolicy,
								}),
								ve.set(t, l),
								n || Wg(u, t, l, c.state))),
						e && a === null)
					)
						throw Error(f(528, ""));
					return c;
				}
				if (e && a !== null) throw Error(f(529, ""));
				return null;
			case "script":
				return (
					(e = l.async),
					(l = l.src),
					typeof l == "string" &&
					e &&
					typeof e != "function" &&
					typeof e != "symbol"
						? ((e = pa(l)),
							(l = ql(u).hoistableScripts),
							(a = l.get(e)),
							a ||
								((a = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								l.set(e, a)),
							a)
						: { type: "void", instance: null, count: 0, state: null }
				);
			default:
				throw Error(f(444, t));
		}
	}
	function va(t) {
		return 'href="' + re(t) + '"';
	}
	function du(t) {
		return 'link[rel="stylesheet"][' + t + "]";
	}
	function $o(t) {
		return A({}, t, { "data-precedence": t.precedence, precedence: null });
	}
	function Wg(t, e, l, a) {
		t.querySelector('link[rel="preload"][as="style"][' + e + "]")
			? (a.loading = 1)
			: ((e = t.createElement("link")),
				(a.preload = e),
				e.addEventListener("load", function () {
					return (a.loading |= 1);
				}),
				e.addEventListener("error", function () {
					return (a.loading |= 2);
				}),
				Bt(e, "link", l),
				zt(e),
				t.head.appendChild(e));
	}
	function pa(t) {
		return '[src="' + re(t) + '"]';
	}
	function hu(t) {
		return "script[async]" + t;
	}
	function Fo(t, e, l) {
		if ((e.count++, e.instance === null))
			switch (e.type) {
				case "style":
					var a = t.querySelector('style[data-href~="' + re(l.href) + '"]');
					if (a) return (e.instance = a), zt(a), a;
					var u = A({}, l, {
						"data-href": l.href,
						"data-precedence": l.precedence,
						href: null,
						precedence: null,
					});
					return (
						(a = (t.ownerDocument || t).createElement("style")),
						zt(a),
						Bt(a, "style", u),
						_n(a, l.precedence, t),
						(e.instance = a)
					);
				case "stylesheet":
					u = va(l.href);
					var n = t.querySelector(du(u));
					if (n) return (e.state.loading |= 4), (e.instance = n), zt(n), n;
					(a = $o(l)),
						(u = ve.get(u)) && lc(a, u),
						(n = (t.ownerDocument || t).createElement("link")),
						zt(n);
					var c = n;
					return (
						(c._p = new Promise(function (o, g) {
							(c.onload = o), (c.onerror = g);
						})),
						Bt(n, "link", a),
						(e.state.loading |= 4),
						_n(n, l.precedence, t),
						(e.instance = n)
					);
				case "script":
					return (
						(n = pa(l.src)),
						(u = t.querySelector(hu(n)))
							? ((e.instance = u), zt(u), u)
							: ((a = l),
								(u = ve.get(n)) && ((a = A({}, l)), ac(a, u)),
								(t = t.ownerDocument || t),
								(u = t.createElement("script")),
								zt(u),
								Bt(u, "link", a),
								t.head.appendChild(u),
								(e.instance = u))
					);
				case "void":
					return null;
				default:
					throw Error(f(443, e.type));
			}
		else
			e.type === "stylesheet" &&
				(e.state.loading & 4) === 0 &&
				((a = e.instance), (e.state.loading |= 4), _n(a, l.precedence, t));
		return e.instance;
	}
	function _n(t, e, l) {
		for (
			var a = l.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]',
				),
				u = a.length ? a[a.length - 1] : null,
				n = u,
				c = 0;
			c < a.length;
			c++
		) {
			var o = a[c];
			if (o.dataset.precedence === e) n = o;
			else if (n !== u) break;
		}
		n
			? n.parentNode.insertBefore(t, n.nextSibling)
			: ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
	}
	function lc(t, e) {
		t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
			t.title == null && (t.title = e.title);
	}
	function ac(t, e) {
		t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
			t.integrity == null && (t.integrity = e.integrity);
	}
	var Hn = null;
	function Wo(t, e, l) {
		if (Hn === null) {
			var a = new Map(),
				u = (Hn = new Map());
			u.set(l, a);
		} else (u = Hn), (a = u.get(l)), a || ((a = new Map()), u.set(l, a));
		if (a.has(t)) return a;
		for (
			a.set(t, null), l = l.getElementsByTagName(t), u = 0;
			u < l.length;
			u++
		) {
			var n = l[u];
			if (
				!(
					n[Da] ||
					n[jt] ||
					(t === "link" && n.getAttribute("rel") === "stylesheet")
				) &&
				n.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var c = n.getAttribute(e) || "";
				c = t + c;
				var o = a.get(c);
				o ? o.push(n) : a.set(c, [n]);
			}
		}
		return a;
	}
	function Po(t, e, l) {
		(t = t.ownerDocument || t),
			t.head.insertBefore(
				l,
				e === "title" ? t.querySelector("head > title") : null,
			);
	}
	function Pg(t, e, l) {
		if (l === 1 || e.itemProp != null) return !1;
		switch (t) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof e.precedence != "string" ||
					typeof e.href != "string" ||
					e.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof e.rel != "string" ||
					typeof e.href != "string" ||
					e.href === "" ||
					e.onLoad ||
					e.onError
				)
					break;
				switch (e.rel) {
					case "stylesheet":
						return (
							(t = e.disabled), typeof e.precedence == "string" && t == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					e.async &&
					typeof e.async != "function" &&
					typeof e.async != "symbol" &&
					!e.onLoad &&
					!e.onError &&
					e.src &&
					typeof e.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function Io(t) {
		return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
	}
	var gu = null;
	function Ig() {}
	function t0(t, e, l) {
		if (gu === null) throw Error(f(475));
		var a = gu;
		if (
			e.type === "stylesheet" &&
			(typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
			(e.state.loading & 4) === 0
		) {
			if (e.instance === null) {
				var u = va(l.href),
					n = t.querySelector(du(u));
				if (n) {
					(t = n._p),
						t !== null &&
							typeof t == "object" &&
							typeof t.then == "function" &&
							(a.count++, (a = Ln.bind(a)), t.then(a, a)),
						(e.state.loading |= 4),
						(e.instance = n),
						zt(n);
					return;
				}
				(n = t.ownerDocument || t),
					(l = $o(l)),
					(u = ve.get(u)) && lc(l, u),
					(n = n.createElement("link")),
					zt(n);
				var c = n;
				(c._p = new Promise(function (o, g) {
					(c.onload = o), (c.onerror = g);
				})),
					Bt(n, "link", l),
					(e.instance = n);
			}
			a.stylesheets === null && (a.stylesheets = new Map()),
				a.stylesheets.set(e, t),
				(t = e.state.preload) &&
					(e.state.loading & 3) === 0 &&
					(a.count++,
					(e = Ln.bind(a)),
					t.addEventListener("load", e),
					t.addEventListener("error", e));
		}
	}
	function e0() {
		if (gu === null) throw Error(f(475));
		var t = gu;
		return (
			t.stylesheets && t.count === 0 && uc(t, t.stylesheets),
			0 < t.count
				? function (e) {
						var l = setTimeout(function () {
							if ((t.stylesheets && uc(t, t.stylesheets), t.unsuspend)) {
								var a = t.unsuspend;
								(t.unsuspend = null), a();
							}
						}, 6e4);
						return (
							(t.unsuspend = e),
							function () {
								(t.unsuspend = null), clearTimeout(l);
							}
						);
					}
				: null
		);
	}
	function Ln() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) uc(this, this.stylesheets);
			else if (this.unsuspend) {
				var t = this.unsuspend;
				(this.unsuspend = null), t();
			}
		}
	}
	var Cn = null;
	function uc(t, e) {
		(t.stylesheets = null),
			t.unsuspend !== null &&
				(t.count++,
				(Cn = new Map()),
				e.forEach(l0, t),
				(Cn = null),
				Ln.call(t));
	}
	function l0(t, e) {
		if (!(e.state.loading & 4)) {
			var l = Cn.get(t);
			if (l) var a = l.get(null);
			else {
				(l = new Map()), Cn.set(t, l);
				for (
					var u = t.querySelectorAll(
							"link[data-precedence],style[data-precedence]",
						),
						n = 0;
					n < u.length;
					n++
				) {
					var c = u[n];
					(c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
						(l.set(c.dataset.precedence, c), (a = c));
				}
				a && l.set(null, a);
			}
			(u = e.instance),
				(c = u.getAttribute("data-precedence")),
				(n = l.get(c) || a),
				n === a && l.set(null, u),
				l.set(c, u),
				this.count++,
				(a = Ln.bind(this)),
				u.addEventListener("load", a),
				u.addEventListener("error", a),
				n
					? n.parentNode.insertBefore(u, n.nextSibling)
					: ((t = t.nodeType === 9 ? t.head : t),
						t.insertBefore(u, t.firstChild)),
				(e.state.loading |= 4);
		}
	}
	var mu = {
		$$typeof: mt,
		Provider: null,
		Consumer: null,
		_currentValue: Y,
		_currentValue2: Y,
		_threadCount: 0,
	};
	function a0(t, e, l, a, u, n, c, o) {
		(this.tag = 1),
			(this.containerInfo = t),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = In(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = In(0)),
			(this.hiddenUpdates = In(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = u),
			(this.onCaughtError = n),
			(this.onRecoverableError = c),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = o),
			(this.incompleteTransitions = new Map());
	}
	function td(t, e, l, a, u, n, c, o, g, T, z, R) {
		return (
			(t = new a0(t, e, l, c, o, g, T, R)),
			(e = 1),
			n === !0 && (e |= 24),
			(n = le(3, null, null, e)),
			(t.current = n),
			(n.stateNode = t),
			(e = Yi()),
			e.refCount++,
			(t.pooledCache = e),
			e.refCount++,
			(n.memoizedState = { element: a, isDehydrated: l, cache: e }),
			Xi(n),
			t
		);
	}
	function ed(t) {
		return t ? ((t = $l), t) : $l;
	}
	function ld(t, e, l, a, u, n) {
		(u = ed(u)),
			a.context === null ? (a.context = u) : (a.pendingContext = u),
			(a = Fe(e)),
			(a.payload = { element: l }),
			(n = n === void 0 ? null : n),
			n !== null && (a.callback = n),
			(l = We(t, a, e)),
			l !== null && (fe(l, t, e), Ka(l, t, e));
	}
	function ad(t, e) {
		if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
			var l = t.retryLane;
			t.retryLane = l !== 0 && l < e ? l : e;
		}
	}
	function nc(t, e) {
		ad(t, e), (t = t.alternate) && ad(t, e);
	}
	function ud(t) {
		if (t.tag === 13) {
			var e = kl(t, 67108864);
			e !== null && fe(e, t, 67108864), nc(t, 67108864);
		}
	}
	var Bn = !0;
	function u0(t, e, l, a) {
		var u = D.T;
		D.T = null;
		var n = N.p;
		try {
			(N.p = 2), ic(t, e, l, a);
		} finally {
			(N.p = n), (D.T = u);
		}
	}
	function n0(t, e, l, a) {
		var u = D.T;
		D.T = null;
		var n = N.p;
		try {
			(N.p = 8), ic(t, e, l, a);
		} finally {
			(N.p = n), (D.T = u);
		}
	}
	function ic(t, e, l, a) {
		if (Bn) {
			var u = fc(a);
			if (u === null) Jf(t, e, a, qn, l), id(t, a);
			else if (f0(u, t, e, l, a)) a.stopPropagation();
			else if ((id(t, a), e & 4 && -1 < i0.indexOf(t))) {
				for (; u !== null; ) {
					var n = Bl(u);
					if (n !== null)
						switch (n.tag) {
							case 3:
								if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
									var c = ml(n.pendingLanes);
									if (c !== 0) {
										var o = n;
										for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
											var g = 1 << (31 - te(c));
											(o.entanglements[1] |= g), (c &= ~g);
										}
										De(n), (et & 6) === 0 && ((bn = Oe() + 500), cu(0));
									}
								}
								break;
							case 13:
								(o = kl(n, 2)), o !== null && fe(o, n, 2), Tn(), nc(n, 2);
						}
					if (((n = fc(a)), n === null && Jf(t, e, a, qn, l), n === u)) break;
					u = n;
				}
				u !== null && a.stopPropagation();
			} else Jf(t, e, a, null, l);
		}
	}
	function fc(t) {
		return (t = oi(t)), cc(t);
	}
	var qn = null;
	function cc(t) {
		if (((qn = null), (t = Cl(t)), t !== null)) {
			var e = h(t);
			if (e === null) t = null;
			else {
				var l = e.tag;
				if (l === 13) {
					if (((t = v(e)), t !== null)) return t;
					t = null;
				} else if (l === 3) {
					if (e.stateNode.current.memoizedState.isDehydrated)
						return e.tag === 3 ? e.stateNode.containerInfo : null;
					t = null;
				} else e !== t && (t = null);
			}
		}
		return (qn = t), null;
	}
	function nd(t) {
		switch (t) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (Kd()) {
					case pc:
						return 2;
					case Sc:
						return 8;
					case Mu:
					case wd:
						return 32;
					case bc:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var sc = !1,
		rl = null,
		ol = null,
		dl = null,
		yu = new Map(),
		vu = new Map(),
		hl = [],
		i0 =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" ",
			);
	function id(t, e) {
		switch (t) {
			case "focusin":
			case "focusout":
				rl = null;
				break;
			case "dragenter":
			case "dragleave":
				ol = null;
				break;
			case "mouseover":
			case "mouseout":
				dl = null;
				break;
			case "pointerover":
			case "pointerout":
				yu.delete(e.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				vu.delete(e.pointerId);
		}
	}
	function pu(t, e, l, a, u, n) {
		return t === null || t.nativeEvent !== n
			? ((t = {
					blockedOn: e,
					domEventName: l,
					eventSystemFlags: a,
					nativeEvent: n,
					targetContainers: [u],
				}),
				e !== null && ((e = Bl(e)), e !== null && ud(e)),
				t)
			: ((t.eventSystemFlags |= a),
				(e = t.targetContainers),
				u !== null && e.indexOf(u) === -1 && e.push(u),
				t);
	}
	function f0(t, e, l, a, u) {
		switch (e) {
			case "focusin":
				return (rl = pu(rl, t, e, l, a, u)), !0;
			case "dragenter":
				return (ol = pu(ol, t, e, l, a, u)), !0;
			case "mouseover":
				return (dl = pu(dl, t, e, l, a, u)), !0;
			case "pointerover":
				var n = u.pointerId;
				return yu.set(n, pu(yu.get(n) || null, t, e, l, a, u)), !0;
			case "gotpointercapture":
				return (
					(n = u.pointerId), vu.set(n, pu(vu.get(n) || null, t, e, l, a, u)), !0
				);
		}
		return !1;
	}
	function fd(t) {
		var e = Cl(t.target);
		if (e !== null) {
			var l = h(e);
			if (l !== null) {
				if (((e = l.tag), e === 13)) {
					if (((e = v(l)), e !== null)) {
						(t.blockedOn = e),
							th(t.priority, function () {
								if (l.tag === 13) {
									var a = ie();
									a = ti(a);
									var u = kl(l, a);
									u !== null && fe(u, l, a), nc(l, a);
								}
							});
						return;
					}
				} else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
					t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
					return;
				}
			}
		}
		t.blockedOn = null;
	}
	function Yn(t) {
		if (t.blockedOn !== null) return !1;
		for (var e = t.targetContainers; 0 < e.length; ) {
			var l = fc(t.nativeEvent);
			if (l === null) {
				l = t.nativeEvent;
				var a = new l.constructor(l.type, l);
				(ri = a), l.target.dispatchEvent(a), (ri = null);
			} else return (e = Bl(l)), e !== null && ud(e), (t.blockedOn = l), !1;
			e.shift();
		}
		return !0;
	}
	function cd(t, e, l) {
		Yn(t) && l.delete(e);
	}
	function c0() {
		(sc = !1),
			rl !== null && Yn(rl) && (rl = null),
			ol !== null && Yn(ol) && (ol = null),
			dl !== null && Yn(dl) && (dl = null),
			yu.forEach(cd),
			vu.forEach(cd);
	}
	function jn(t, e) {
		t.blockedOn === e &&
			((t.blockedOn = null),
			sc ||
				((sc = !0),
				d.unstable_scheduleCallback(d.unstable_NormalPriority, c0)));
	}
	var Gn = null;
	function sd(t) {
		Gn !== t &&
			((Gn = t),
			d.unstable_scheduleCallback(d.unstable_NormalPriority, function () {
				Gn === t && (Gn = null);
				for (var e = 0; e < t.length; e += 3) {
					var l = t[e],
						a = t[e + 1],
						u = t[e + 2];
					if (typeof a != "function") {
						if (cc(a || l) === null) continue;
						break;
					}
					var n = Bl(l);
					n !== null &&
						(t.splice(e, 3),
						(e -= 3),
						cf(n, { pending: !0, data: u, method: l.method, action: a }, a, u));
				}
			}));
	}
	function Su(t) {
		function e(g) {
			return jn(g, t);
		}
		rl !== null && jn(rl, t),
			ol !== null && jn(ol, t),
			dl !== null && jn(dl, t),
			yu.forEach(e),
			vu.forEach(e);
		for (var l = 0; l < hl.length; l++) {
			var a = hl[l];
			a.blockedOn === t && (a.blockedOn = null);
		}
		for (; 0 < hl.length && ((l = hl[0]), l.blockedOn === null); )
			fd(l), l.blockedOn === null && hl.shift();
		if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
			for (a = 0; a < l.length; a += 3) {
				var u = l[a],
					n = l[a + 1],
					c = u[Jt] || null;
				if (typeof n == "function") c || sd(l);
				else if (c) {
					var o = null;
					if (n && n.hasAttribute("formAction")) {
						if (((u = n), (c = n[Jt] || null))) o = c.formAction;
						else if (cc(u) !== null) continue;
					} else o = c.action;
					typeof o == "function" ? (l[a + 1] = o) : (l.splice(a, 3), (a -= 3)),
						sd(l);
				}
			}
	}
	function rc(t) {
		this._internalRoot = t;
	}
	(Qn.prototype.render = rc.prototype.render =
		function (t) {
			var e = this._internalRoot;
			if (e === null) throw Error(f(409));
			var l = e.current,
				a = ie();
			ld(l, a, t, e, null, null);
		}),
		(Qn.prototype.unmount = rc.prototype.unmount =
			function () {
				var t = this._internalRoot;
				if (t !== null) {
					this._internalRoot = null;
					var e = t.containerInfo;
					ld(t.current, 2, null, t, null, null), Tn(), (e[Ll] = null);
				}
			});
	function Qn(t) {
		this._internalRoot = t;
	}
	Qn.prototype.unstable_scheduleHydration = function (t) {
		if (t) {
			var e = Ac();
			t = { blockedOn: null, target: t, priority: e };
			for (var l = 0; l < hl.length && e !== 0 && e < hl[l].priority; l++);
			hl.splice(l, 0, t), l === 0 && fd(t);
		}
	};
	var rd = i.version;
	if (rd !== "19.1.0") throw Error(f(527, rd, "19.1.0"));
	N.findDOMNode = function (t) {
		var e = t._reactInternals;
		if (e === void 0)
			throw typeof t.render == "function"
				? Error(f(188))
				: ((t = Object.keys(t).join(",")), Error(f(268, t)));
		return (
			(t = p(e)),
			(t = t !== null ? m(t) : null),
			(t = t === null ? null : t.stateNode),
			t
		);
	};
	var s0 = {
		bundleType: 0,
		version: "19.1.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: D,
		reconcilerVersion: "19.1.0",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Xn.isDisabled && Xn.supportsFiber)
			try {
				(xa = Xn.inject(s0)), (It = Xn);
			} catch {}
	}
	return (
		(bu.createRoot = function (t, e) {
			if (!r(t)) throw Error(f(299));
			var l = !1,
				a = "",
				u = Ar,
				n = Dr,
				c = zr,
				o = null;
			return (
				e != null &&
					(e.unstable_strictMode === !0 && (l = !0),
					e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
					e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
					e.onCaughtError !== void 0 && (n = e.onCaughtError),
					e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
					e.unstable_transitionCallbacks !== void 0 &&
						(o = e.unstable_transitionCallbacks)),
				(e = td(t, 1, !1, null, null, l, a, u, n, c, o, null)),
				(t[Ll] = e.current),
				wf(t),
				new rc(e)
			);
		}),
		(bu.hydrateRoot = function (t, e, l) {
			if (!r(t)) throw Error(f(299));
			var a = !1,
				u = "",
				n = Ar,
				c = Dr,
				o = zr,
				g = null,
				T = null;
			return (
				l != null &&
					(l.unstable_strictMode === !0 && (a = !0),
					l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
					l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
					l.onCaughtError !== void 0 && (c = l.onCaughtError),
					l.onRecoverableError !== void 0 && (o = l.onRecoverableError),
					l.unstable_transitionCallbacks !== void 0 &&
						(g = l.unstable_transitionCallbacks),
					l.formState !== void 0 && (T = l.formState)),
				(e = td(t, 1, !0, e, l ?? null, a, u, n, c, o, g, T)),
				(e.context = ed(null)),
				(l = e.current),
				(a = ie()),
				(a = ti(a)),
				(u = Fe(a)),
				(u.callback = null),
				We(l, u, a),
				(l = a),
				(e.current.lanes = l),
				Aa(e, l),
				De(e),
				(t[Ll] = e.current),
				wf(t),
				new Qn(e)
			);
		}),
		(bu.version = "19.1.0"),
		bu
	);
}
var yd;
function L0() {
	if (yd) return dc.exports;
	yd = 1;
	function d() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
			} catch (i) {
				console.error(i);
			}
	}
	return d(), (dc.exports = H0()), dc.exports;
}
var C0 = L0();
const X = (d) => typeof d == "string",
	Ou = () => {
		let d, i;
		const s = new Promise((f, r) => {
			(d = f), (i = r);
		});
		return (s.resolve = d), (s.reject = i), s;
	},
	vd = (d) => (d == null ? "" : "" + d),
	B0 = (d, i, s) => {
		d.forEach((f) => {
			i[f] && (s[f] = i[f]);
		});
	},
	q0 = /###/g,
	pd = (d) => (d && d.indexOf("###") > -1 ? d.replace(q0, ".") : d),
	Sd = (d) => !d || X(d),
	xu = (d, i, s) => {
		const f = X(i) ? i.split(".") : i;
		let r = 0;
		for (; r < f.length - 1; ) {
			if (Sd(d)) return {};
			const h = pd(f[r]);
			!d[h] && s && (d[h] = new s()),
				Object.prototype.hasOwnProperty.call(d, h) ? (d = d[h]) : (d = {}),
				++r;
		}
		return Sd(d) ? {} : { obj: d, k: pd(f[r]) };
	},
	bd = (d, i, s) => {
		const { obj: f, k: r } = xu(d, i, Object);
		if (f !== void 0 || i.length === 1) {
			f[r] = s;
			return;
		}
		let h = i[i.length - 1],
			v = i.slice(0, i.length - 1),
			S = xu(d, v, Object);
		for (; S.obj === void 0 && v.length; )
			(h = `${v[v.length - 1]}.${h}`),
				(v = v.slice(0, v.length - 1)),
				(S = xu(d, v, Object)),
				S != null &&
					S.obj &&
					typeof S.obj[`${S.k}.${h}`] < "u" &&
					(S.obj = void 0);
		S.obj[`${S.k}.${h}`] = s;
	},
	Y0 = (d, i, s, f) => {
		const { obj: r, k: h } = xu(d, i, Object);
		(r[h] = r[h] || []), r[h].push(s);
	},
	Zn = (d, i) => {
		const { obj: s, k: f } = xu(d, i);
		if (s && Object.prototype.hasOwnProperty.call(s, f)) return s[f];
	},
	j0 = (d, i, s) => {
		const f = Zn(d, s);
		return f !== void 0 ? f : Zn(i, s);
	},
	Yd = (d, i, s) => {
		for (const f in i)
			f !== "__proto__" &&
				f !== "constructor" &&
				(f in d
					? X(d[f]) ||
						d[f] instanceof String ||
						X(i[f]) ||
						i[f] instanceof String
						? s && (d[f] = i[f])
						: Yd(d[f], i[f], s)
					: (d[f] = i[f]));
		return d;
	},
	Sa = (d) => d.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var G0 = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
	"/": "&#x2F;",
};
const Q0 = (d) => (X(d) ? d.replace(/[&<>"'\/]/g, (i) => G0[i]) : d);
class X0 {
	constructor(i) {
		(this.capacity = i), (this.regExpMap = new Map()), (this.regExpQueue = []);
	}
	getRegExp(i) {
		const s = this.regExpMap.get(i);
		if (s !== void 0) return s;
		const f = new RegExp(i);
		return (
			this.regExpQueue.length === this.capacity &&
				this.regExpMap.delete(this.regExpQueue.shift()),
			this.regExpMap.set(i, f),
			this.regExpQueue.push(i),
			f
		);
	}
}
const V0 = [" ", ",", "?", "!", ";"],
	Z0 = new X0(20),
	K0 = (d, i, s) => {
		(i = i || ""), (s = s || "");
		const f = V0.filter((v) => i.indexOf(v) < 0 && s.indexOf(v) < 0);
		if (f.length === 0) return !0;
		const r = Z0.getRegExp(
			`(${f.map((v) => (v === "?" ? "\\?" : v)).join("|")})`,
		);
		let h = !r.test(d);
		if (!h) {
			const v = d.indexOf(s);
			v > 0 && !r.test(d.substring(0, v)) && (h = !0);
		}
		return h;
	},
	vc = (d, i, s = ".") => {
		if (!d) return;
		if (d[i]) return Object.prototype.hasOwnProperty.call(d, i) ? d[i] : void 0;
		const f = i.split(s);
		let r = d;
		for (let h = 0; h < f.length; ) {
			if (!r || typeof r != "object") return;
			let v,
				S = "";
			for (let p = h; p < f.length; ++p)
				if ((p !== h && (S += s), (S += f[p]), (v = r[S]), v !== void 0)) {
					if (
						["string", "number", "boolean"].indexOf(typeof v) > -1 &&
						p < f.length - 1
					)
						continue;
					h += p - h + 1;
					break;
				}
			r = v;
		}
		return r;
	},
	Kn = (d) => (d == null ? void 0 : d.replace("_", "-")),
	w0 = {
		type: "logger",
		log(d) {
			this.output("log", d);
		},
		warn(d) {
			this.output("warn", d);
		},
		error(d) {
			this.output("error", d);
		},
		output(d, i) {
			var s, f;
			(f =
				(s = console == null ? void 0 : console[d]) == null
					? void 0
					: s.apply) == null || f.call(s, console, i);
		},
	};
class wn {
	constructor(i, s = {}) {
		this.init(i, s);
	}
	init(i, s = {}) {
		(this.prefix = s.prefix || "i18next:"),
			(this.logger = i || w0),
			(this.options = s),
			(this.debug = s.debug);
	}
	log(...i) {
		return this.forward(i, "log", "", !0);
	}
	warn(...i) {
		return this.forward(i, "warn", "", !0);
	}
	error(...i) {
		return this.forward(i, "error", "");
	}
	deprecate(...i) {
		return this.forward(i, "warn", "WARNING DEPRECATED: ", !0);
	}
	forward(i, s, f, r) {
		return r && !this.debug
			? null
			: (X(i[0]) && (i[0] = `${f}${this.prefix} ${i[0]}`), this.logger[s](i));
	}
	create(i) {
		return new wn(this.logger, {
			prefix: `${this.prefix}:${i}:`,
			...this.options,
		});
	}
	clone(i) {
		return (
			(i = i || this.options),
			(i.prefix = i.prefix || this.prefix),
			new wn(this.logger, i)
		);
	}
}
var ze = new wn();
class kn {
	constructor() {
		this.observers = {};
	}
	on(i, s) {
		return (
			i.split(" ").forEach((f) => {
				this.observers[f] || (this.observers[f] = new Map());
				const r = this.observers[f].get(s) || 0;
				this.observers[f].set(s, r + 1);
			}),
			this
		);
	}
	off(i, s) {
		if (this.observers[i]) {
			if (!s) {
				delete this.observers[i];
				return;
			}
			this.observers[i].delete(s);
		}
	}
	emit(i, ...s) {
		this.observers[i] &&
			Array.from(this.observers[i].entries()).forEach(([r, h]) => {
				for (let v = 0; v < h; v++) r(...s);
			}),
			this.observers["*"] &&
				Array.from(this.observers["*"].entries()).forEach(([r, h]) => {
					for (let v = 0; v < h; v++) r.apply(r, [i, ...s]);
				});
	}
}
class Od extends kn {
	constructor(i, s = { ns: ["translation"], defaultNS: "translation" }) {
		super(),
			(this.data = i || {}),
			(this.options = s),
			this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
			this.options.ignoreJSONStructure === void 0 &&
				(this.options.ignoreJSONStructure = !0);
	}
	addNamespaces(i) {
		this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
	}
	removeNamespaces(i) {
		const s = this.options.ns.indexOf(i);
		s > -1 && this.options.ns.splice(s, 1);
	}
	getResource(i, s, f, r = {}) {
		var m, A;
		const h =
				r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
			v =
				r.ignoreJSONStructure !== void 0
					? r.ignoreJSONStructure
					: this.options.ignoreJSONStructure;
		let S;
		i.indexOf(".") > -1
			? (S = i.split("."))
			: ((S = [i, s]),
				f &&
					(Array.isArray(f)
						? S.push(...f)
						: X(f) && h
							? S.push(...f.split(h))
							: S.push(f)));
		const p = Zn(this.data, S);
		return (
			!p &&
				!s &&
				!f &&
				i.indexOf(".") > -1 &&
				((i = S[0]), (s = S[1]), (f = S.slice(2).join("."))),
			p || !v || !X(f)
				? p
				: vc(
						(A = (m = this.data) == null ? void 0 : m[i]) == null
							? void 0
							: A[s],
						f,
						h,
					)
		);
	}
	addResource(i, s, f, r, h = { silent: !1 }) {
		const v =
			h.keySeparator !== void 0 ? h.keySeparator : this.options.keySeparator;
		let S = [i, s];
		f && (S = S.concat(v ? f.split(v) : f)),
			i.indexOf(".") > -1 && ((S = i.split(".")), (r = s), (s = S[1])),
			this.addNamespaces(s),
			bd(this.data, S, r),
			h.silent || this.emit("added", i, s, f, r);
	}
	addResources(i, s, f, r = { silent: !1 }) {
		for (const h in f)
			(X(f[h]) || Array.isArray(f[h])) &&
				this.addResource(i, s, h, f[h], { silent: !0 });
		r.silent || this.emit("added", i, s, f);
	}
	addResourceBundle(i, s, f, r, h, v = { silent: !1, skipCopy: !1 }) {
		let S = [i, s];
		i.indexOf(".") > -1 && ((S = i.split(".")), (r = f), (f = s), (s = S[1])),
			this.addNamespaces(s);
		let p = Zn(this.data, S) || {};
		v.skipCopy || (f = JSON.parse(JSON.stringify(f))),
			r ? Yd(p, f, h) : (p = { ...p, ...f }),
			bd(this.data, S, p),
			v.silent || this.emit("added", i, s, f);
	}
	removeResourceBundle(i, s) {
		this.hasResourceBundle(i, s) && delete this.data[i][s],
			this.removeNamespaces(s),
			this.emit("removed", i, s);
	}
	hasResourceBundle(i, s) {
		return this.getResource(i, s) !== void 0;
	}
	getResourceBundle(i, s) {
		return s || (s = this.options.defaultNS), this.getResource(i, s);
	}
	getDataByLanguage(i) {
		return this.data[i];
	}
	hasLanguageSomeTranslations(i) {
		const s = this.getDataByLanguage(i);
		return !!((s && Object.keys(s)) || []).find(
			(r) => s[r] && Object.keys(s[r]).length > 0,
		);
	}
	toJSON() {
		return this.data;
	}
}
var jd = {
	processors: {},
	addPostProcessor(d) {
		this.processors[d.name] = d;
	},
	handle(d, i, s, f, r) {
		return (
			d.forEach((h) => {
				var v;
				i =
					((v = this.processors[h]) == null ? void 0 : v.process(i, s, f, r)) ??
					i;
			}),
			i
		);
	},
};
const Td = {},
	xd = (d) => !X(d) && typeof d != "boolean" && typeof d != "number";
class Jn extends kn {
	constructor(i, s = {}) {
		super(),
			B0(
				[
					"resourceStore",
					"languageUtils",
					"pluralResolver",
					"interpolator",
					"backendConnector",
					"i18nFormat",
					"utils",
				],
				i,
				this,
			),
			(this.options = s),
			this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
			(this.logger = ze.create("translator"));
	}
	changeLanguage(i) {
		i && (this.language = i);
	}
	exists(i, s = { interpolation: {} }) {
		const f = { ...s };
		if (i == null) return !1;
		const r = this.resolve(i, f);
		return (r == null ? void 0 : r.res) !== void 0;
	}
	extractFromKey(i, s) {
		let f = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
		f === void 0 && (f = ":");
		const r =
			s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
		let h = s.ns || this.options.defaultNS || [];
		const v = f && i.indexOf(f) > -1,
			S =
				!this.options.userDefinedKeySeparator &&
				!s.keySeparator &&
				!this.options.userDefinedNsSeparator &&
				!s.nsSeparator &&
				!K0(i, f, r);
		if (v && !S) {
			const p = i.match(this.interpolator.nestingRegexp);
			if (p && p.length > 0) return { key: i, namespaces: X(h) ? [h] : h };
			const m = i.split(f);
			(f !== r || (f === r && this.options.ns.indexOf(m[0]) > -1)) &&
				(h = m.shift()),
				(i = m.join(r));
		}
		return { key: i, namespaces: X(h) ? [h] : h };
	}
	translate(i, s, f) {
		let r = typeof s == "object" ? { ...s } : s;
		if (
			(typeof r != "object" &&
				this.options.overloadTranslationOptionHandler &&
				(r = this.options.overloadTranslationOptionHandler(arguments)),
			typeof options == "object" && (r = { ...r }),
			r || (r = {}),
			i == null)
		)
			return "";
		Array.isArray(i) || (i = [String(i)]);
		const h =
				r.returnDetails !== void 0
					? r.returnDetails
					: this.options.returnDetails,
			v =
				r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
			{ key: S, namespaces: p } = this.extractFromKey(i[i.length - 1], r),
			m = p[p.length - 1];
		let A = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
		A === void 0 && (A = ":");
		const U = r.lng || this.language,
			_ = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if ((U == null ? void 0 : U.toLowerCase()) === "cimode")
			return _
				? h
					? {
							res: `${m}${A}${S}`,
							usedKey: S,
							exactUsedKey: S,
							usedLng: U,
							usedNS: m,
							usedParams: this.getUsedParamsDetails(r),
						}
					: `${m}${A}${S}`
				: h
					? {
							res: S,
							usedKey: S,
							exactUsedKey: S,
							usedLng: U,
							usedNS: m,
							usedParams: this.getUsedParamsDetails(r),
						}
					: S;
		const L = this.resolve(i, r);
		let H = L == null ? void 0 : L.res;
		const J = (L == null ? void 0 : L.usedKey) || S,
			st = (L == null ? void 0 : L.exactUsedKey) || S,
			Yt = ["[object Number]", "[object Function]", "[object RegExp]"],
			Dt = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
			mt = !this.i18nFormat || this.i18nFormat.handleAsObject,
			ot = r.count !== void 0 && !X(r.count),
			Nt = Jn.hasDefaultValue(r),
			Vt = ot ? this.pluralResolver.getSuffix(U, r.count, r) : "",
			xt =
				r.ordinal && ot
					? this.pluralResolver.getSuffix(U, r.count, { ordinal: !1 })
					: "",
			_t = ot && !r.ordinal && r.count === 0,
			St =
				(_t && r[`defaultValue${this.options.pluralSeparator}zero`]) ||
				r[`defaultValue${Vt}`] ||
				r[`defaultValue${xt}`] ||
				r.defaultValue;
		let bt = H;
		mt && !H && Nt && (bt = St);
		const Ve = xd(bt),
			wt = Object.prototype.toString.apply(bt);
		if (mt && bt && Ve && Yt.indexOf(wt) < 0 && !(X(Dt) && Array.isArray(bt))) {
			if (!r.returnObjects && !this.options.returnObjects) {
				this.options.returnedObjectHandler ||
					this.logger.warn(
						"accessing an object - but returnObjects options is not enabled!",
					);
				const Zt = this.options.returnedObjectHandler
					? this.options.returnedObjectHandler(J, bt, { ...r, ns: p })
					: `key '${S} (${this.language})' returned an object instead of string.`;
				return h
					? ((L.res = Zt), (L.usedParams = this.getUsedParamsDetails(r)), L)
					: Zt;
			}
			if (v) {
				const Zt = Array.isArray(bt),
					Ht = Zt ? [] : {},
					ce = Zt ? st : J;
				for (const D in bt)
					if (Object.prototype.hasOwnProperty.call(bt, D)) {
						const N = `${ce}${v}${D}`;
						Nt && !H
							? (Ht[D] = this.translate(N, {
									...r,
									defaultValue: xd(St) ? St[D] : void 0,
									joinArrays: !1,
									ns: p,
								}))
							: (Ht[D] = this.translate(N, { ...r, joinArrays: !1, ns: p })),
							Ht[D] === N && (Ht[D] = bt[D]);
					}
				H = Ht;
			}
		} else if (mt && X(Dt) && Array.isArray(H))
			(H = H.join(Dt)), H && (H = this.extendTranslation(H, i, r, f));
		else {
			let Zt = !1,
				Ht = !1;
			!this.isValidLookup(H) && Nt && ((Zt = !0), (H = St)),
				this.isValidLookup(H) || ((Ht = !0), (H = S));
			const D =
					(r.missingKeyNoValueFallbackToKey ||
						this.options.missingKeyNoValueFallbackToKey) &&
					Ht
						? void 0
						: H,
				N = Nt && St !== H && this.options.updateMissing;
			if (Ht || Zt || N) {
				if (
					(this.logger.log(N ? "updateKey" : "missingKey", U, m, S, N ? St : H),
					v)
				) {
					const tt = this.resolve(S, { ...r, keySeparator: !1 });
					tt &&
						tt.res &&
						this.logger.warn(
							"Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
						);
				}
				let Y = [];
				const I = this.languageUtils.getFallbackCodes(
					this.options.fallbackLng,
					r.lng || this.language,
				);
				if (this.options.saveMissingTo === "fallback" && I && I[0])
					for (let tt = 0; tt < I.length; tt++) Y.push(I[tt]);
				else
					this.options.saveMissingTo === "all"
						? (Y = this.languageUtils.toResolveHierarchy(
								r.lng || this.language,
							))
						: Y.push(r.lng || this.language);
				const at = (tt, W, k) => {
					var Pt;
					const yt = Nt && k !== H ? k : D;
					this.options.missingKeyHandler
						? this.options.missingKeyHandler(tt, m, W, yt, N, r)
						: (Pt = this.backendConnector) != null &&
							Pt.saveMissing &&
							this.backendConnector.saveMissing(tt, m, W, yt, N, r),
						this.emit("missingKey", tt, m, W, H);
				};
				this.options.saveMissing &&
					(this.options.saveMissingPlurals && ot
						? Y.forEach((tt) => {
								const W = this.pluralResolver.getSuffixes(tt, r);
								_t &&
									r[`defaultValue${this.options.pluralSeparator}zero`] &&
									W.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
									W.push(`${this.options.pluralSeparator}zero`),
									W.forEach((k) => {
										at([tt], S + k, r[`defaultValue${k}`] || St);
									});
							})
						: at(Y, S, St));
			}
			(H = this.extendTranslation(H, i, r, L, f)),
				Ht &&
					H === S &&
					this.options.appendNamespaceToMissingKey &&
					(H = `${m}${A}${S}`),
				(Ht || Zt) &&
					this.options.parseMissingKeyHandler &&
					(H = this.options.parseMissingKeyHandler(
						this.options.appendNamespaceToMissingKey ? `${m}${A}${S}` : S,
						Zt ? H : void 0,
						r,
					));
		}
		return h
			? ((L.res = H), (L.usedParams = this.getUsedParamsDetails(r)), L)
			: H;
	}
	extendTranslation(i, s, f, r, h) {
		var p, m;
		if ((p = this.i18nFormat) != null && p.parse)
			i = this.i18nFormat.parse(
				i,
				{ ...this.options.interpolation.defaultVariables, ...f },
				f.lng || this.language || r.usedLng,
				r.usedNS,
				r.usedKey,
				{ resolved: r },
			);
		else if (!f.skipInterpolation) {
			f.interpolation &&
				this.interpolator.init({
					...f,
					interpolation: { ...this.options.interpolation, ...f.interpolation },
				});
			const A =
				X(i) &&
				(((m = f == null ? void 0 : f.interpolation) == null
					? void 0
					: m.skipOnVariables) !== void 0
					? f.interpolation.skipOnVariables
					: this.options.interpolation.skipOnVariables);
			let U;
			if (A) {
				const L = i.match(this.interpolator.nestingRegexp);
				U = L && L.length;
			}
			let _ = f.replace && !X(f.replace) ? f.replace : f;
			if (
				(this.options.interpolation.defaultVariables &&
					(_ = { ...this.options.interpolation.defaultVariables, ..._ }),
				(i = this.interpolator.interpolate(
					i,
					_,
					f.lng || this.language || r.usedLng,
					f,
				)),
				A)
			) {
				const L = i.match(this.interpolator.nestingRegexp),
					H = L && L.length;
				U < H && (f.nest = !1);
			}
			!f.lng && r && r.res && (f.lng = this.language || r.usedLng),
				f.nest !== !1 &&
					(i = this.interpolator.nest(
						i,
						(...L) =>
							(h == null ? void 0 : h[0]) === L[0] && !f.context
								? (this.logger.warn(
										`It seems you are nesting recursively key: ${L[0]} in key: ${s[0]}`,
									),
									null)
								: this.translate(...L, s),
						f,
					)),
				f.interpolation && this.interpolator.reset();
		}
		const v = f.postProcess || this.options.postProcess,
			S = X(v) ? [v] : v;
		return (
			i != null &&
				S != null &&
				S.length &&
				f.applyPostProcessor !== !1 &&
				(i = jd.handle(
					S,
					i,
					s,
					this.options && this.options.postProcessPassResolved
						? {
								i18nResolved: {
									...r,
									usedParams: this.getUsedParamsDetails(f),
								},
								...f,
							}
						: f,
					this,
				)),
			i
		);
	}
	resolve(i, s = {}) {
		let f, r, h, v, S;
		return (
			X(i) && (i = [i]),
			i.forEach((p) => {
				if (this.isValidLookup(f)) return;
				const m = this.extractFromKey(p, s),
					A = m.key;
				r = A;
				let U = m.namespaces;
				this.options.fallbackNS && (U = U.concat(this.options.fallbackNS));
				const _ = s.count !== void 0 && !X(s.count),
					L = _ && !s.ordinal && s.count === 0,
					H =
						s.context !== void 0 &&
						(X(s.context) || typeof s.context == "number") &&
						s.context !== "",
					J = s.lngs
						? s.lngs
						: this.languageUtils.toResolveHierarchy(
								s.lng || this.language,
								s.fallbackLng,
							);
				U.forEach((st) => {
					var Yt, Dt;
					this.isValidLookup(f) ||
						((S = st),
						!Td[`${J[0]}-${st}`] &&
							(Yt = this.utils) != null &&
							Yt.hasLoadedNamespace &&
							!((Dt = this.utils) != null && Dt.hasLoadedNamespace(S)) &&
							((Td[`${J[0]}-${st}`] = !0),
							this.logger.warn(
								`key "${r}" for languages "${J.join(", ")}" won't get resolved as namespace "${S}" was not yet loaded`,
								"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
							)),
						J.forEach((mt) => {
							var Vt;
							if (this.isValidLookup(f)) return;
							v = mt;
							const ot = [A];
							if ((Vt = this.i18nFormat) != null && Vt.addLookupKeys)
								this.i18nFormat.addLookupKeys(ot, A, mt, st, s);
							else {
								let xt;
								_ && (xt = this.pluralResolver.getSuffix(mt, s.count, s));
								const _t = `${this.options.pluralSeparator}zero`,
									St = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
								if (
									(_ &&
										(ot.push(A + xt),
										s.ordinal &&
											xt.indexOf(St) === 0 &&
											ot.push(A + xt.replace(St, this.options.pluralSeparator)),
										L && ot.push(A + _t)),
									H)
								) {
									const bt = `${A}${this.options.contextSeparator}${s.context}`;
									ot.push(bt),
										_ &&
											(ot.push(bt + xt),
											s.ordinal &&
												xt.indexOf(St) === 0 &&
												ot.push(
													bt + xt.replace(St, this.options.pluralSeparator),
												),
											L && ot.push(bt + _t));
								}
							}
							let Nt;
							for (; (Nt = ot.pop()); )
								this.isValidLookup(f) ||
									((h = Nt), (f = this.getResource(mt, st, Nt, s)));
						}));
				});
			}),
			{ res: f, usedKey: r, exactUsedKey: h, usedLng: v, usedNS: S }
		);
	}
	isValidLookup(i) {
		return (
			i !== void 0 &&
			!(!this.options.returnNull && i === null) &&
			!(!this.options.returnEmptyString && i === "")
		);
	}
	getResource(i, s, f, r = {}) {
		var h;
		return (h = this.i18nFormat) != null && h.getResource
			? this.i18nFormat.getResource(i, s, f, r)
			: this.resourceStore.getResource(i, s, f, r);
	}
	getUsedParamsDetails(i = {}) {
		const s = [
				"defaultValue",
				"ordinal",
				"context",
				"replace",
				"lng",
				"lngs",
				"fallbackLng",
				"ns",
				"keySeparator",
				"nsSeparator",
				"returnObjects",
				"returnDetails",
				"joinArrays",
				"postProcess",
				"interpolation",
			],
			f = i.replace && !X(i.replace);
		let r = f ? i.replace : i;
		if (
			(f && typeof i.count < "u" && (r.count = i.count),
			this.options.interpolation.defaultVariables &&
				(r = { ...this.options.interpolation.defaultVariables, ...r }),
			!f)
		) {
			r = { ...r };
			for (const h of s) delete r[h];
		}
		return r;
	}
	static hasDefaultValue(i) {
		const s = "defaultValue";
		for (const f in i)
			if (
				Object.prototype.hasOwnProperty.call(i, f) &&
				s === f.substring(0, s.length) &&
				i[f] !== void 0
			)
				return !0;
		return !1;
	}
}
class Ed {
	constructor(i) {
		(this.options = i),
			(this.supportedLngs = this.options.supportedLngs || !1),
			(this.logger = ze.create("languageUtils"));
	}
	getScriptPartFromCode(i) {
		if (((i = Kn(i)), !i || i.indexOf("-") < 0)) return null;
		const s = i.split("-");
		return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x")
			? null
			: this.formatLanguageCode(s.join("-"));
	}
	getLanguagePartFromCode(i) {
		if (((i = Kn(i)), !i || i.indexOf("-") < 0)) return i;
		const s = i.split("-");
		return this.formatLanguageCode(s[0]);
	}
	formatLanguageCode(i) {
		if (X(i) && i.indexOf("-") > -1) {
			let s;
			try {
				s = Intl.getCanonicalLocales(i)[0];
			} catch {}
			return (
				s && this.options.lowerCaseLng && (s = s.toLowerCase()),
				s || (this.options.lowerCaseLng ? i.toLowerCase() : i)
			);
		}
		return this.options.cleanCode || this.options.lowerCaseLng
			? i.toLowerCase()
			: i;
	}
	isSupportedCode(i) {
		return (
			(this.options.load === "languageOnly" ||
				this.options.nonExplicitSupportedLngs) &&
				(i = this.getLanguagePartFromCode(i)),
			!this.supportedLngs ||
				!this.supportedLngs.length ||
				this.supportedLngs.indexOf(i) > -1
		);
	}
	getBestMatchFromCodes(i) {
		if (!i) return null;
		let s;
		return (
			i.forEach((f) => {
				if (s) return;
				const r = this.formatLanguageCode(f);
				(!this.options.supportedLngs || this.isSupportedCode(r)) && (s = r);
			}),
			!s &&
				this.options.supportedLngs &&
				i.forEach((f) => {
					if (s) return;
					const r = this.getScriptPartFromCode(f);
					if (this.isSupportedCode(r)) return (s = r);
					const h = this.getLanguagePartFromCode(f);
					if (this.isSupportedCode(h)) return (s = h);
					s = this.options.supportedLngs.find((v) => {
						if (v === h) return v;
						if (
							!(v.indexOf("-") < 0 && h.indexOf("-") < 0) &&
							((v.indexOf("-") > 0 &&
								h.indexOf("-") < 0 &&
								v.substring(0, v.indexOf("-")) === h) ||
								(v.indexOf(h) === 0 && h.length > 1))
						)
							return v;
					});
				}),
			s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]),
			s
		);
	}
	getFallbackCodes(i, s) {
		if (!i) return [];
		if (
			(typeof i == "function" && (i = i(s)),
			X(i) && (i = [i]),
			Array.isArray(i))
		)
			return i;
		if (!s) return i.default || [];
		let f = i[s];
		return (
			f || (f = i[this.getScriptPartFromCode(s)]),
			f || (f = i[this.formatLanguageCode(s)]),
			f || (f = i[this.getLanguagePartFromCode(s)]),
			f || (f = i.default),
			f || []
		);
	}
	toResolveHierarchy(i, s) {
		const f = this.getFallbackCodes(s || this.options.fallbackLng || [], i),
			r = [],
			h = (v) => {
				v &&
					(this.isSupportedCode(v)
						? r.push(v)
						: this.logger.warn(
								`rejecting language code not found in supportedLngs: ${v}`,
							));
			};
		return (
			X(i) && (i.indexOf("-") > -1 || i.indexOf("_") > -1)
				? (this.options.load !== "languageOnly" &&
						h(this.formatLanguageCode(i)),
					this.options.load !== "languageOnly" &&
						this.options.load !== "currentOnly" &&
						h(this.getScriptPartFromCode(i)),
					this.options.load !== "currentOnly" &&
						h(this.getLanguagePartFromCode(i)))
				: X(i) && h(this.formatLanguageCode(i)),
			f.forEach((v) => {
				r.indexOf(v) < 0 && h(this.formatLanguageCode(v));
			}),
			r
		);
	}
}
const Ad = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
	Dd = {
		select: (d) => (d === 1 ? "one" : "other"),
		resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
	};
class J0 {
	constructor(i, s = {}) {
		(this.languageUtils = i),
			(this.options = s),
			(this.logger = ze.create("pluralResolver")),
			(this.pluralRulesCache = {});
	}
	addRule(i, s) {
		this.rules[i] = s;
	}
	clearCache() {
		this.pluralRulesCache = {};
	}
	getRule(i, s = {}) {
		const f = Kn(i === "dev" ? "en" : i),
			r = s.ordinal ? "ordinal" : "cardinal",
			h = JSON.stringify({ cleanedCode: f, type: r });
		if (h in this.pluralRulesCache) return this.pluralRulesCache[h];
		let v;
		try {
			v = new Intl.PluralRules(f, { type: r });
		} catch {
			if (!Intl)
				return (
					this.logger.error("No Intl support, please use an Intl polyfill!"), Dd
				);
			if (!i.match(/-|_/)) return Dd;
			const p = this.languageUtils.getLanguagePartFromCode(i);
			v = this.getRule(p, s);
		}
		return (this.pluralRulesCache[h] = v), v;
	}
	needsPlural(i, s = {}) {
		let f = this.getRule(i, s);
		return (
			f || (f = this.getRule("dev", s)),
			(f == null ? void 0 : f.resolvedOptions().pluralCategories.length) > 1
		);
	}
	getPluralFormsOfKey(i, s, f = {}) {
		return this.getSuffixes(i, f).map((r) => `${s}${r}`);
	}
	getSuffixes(i, s = {}) {
		let f = this.getRule(i, s);
		return (
			f || (f = this.getRule("dev", s)),
			f
				? f
						.resolvedOptions()
						.pluralCategories.sort((r, h) => Ad[r] - Ad[h])
						.map(
							(r) =>
								`${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`,
						)
				: []
		);
	}
	getSuffix(i, s, f = {}) {
		const r = this.getRule(i, f);
		return r
			? `${this.options.prepend}${f.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(s)}`
			: (this.logger.warn(`no plural rule found for: ${i}`),
				this.getSuffix("dev", s, f));
	}
}
const zd = (d, i, s, f = ".", r = !0) => {
		let h = j0(d, i, s);
		return (
			!h && r && X(s) && ((h = vc(d, s, f)), h === void 0 && (h = vc(i, s, f))),
			h
		);
	},
	yc = (d) => d.replace(/\$/g, "$$$$");
class k0 {
	constructor(i = {}) {
		var s;
		(this.logger = ze.create("interpolator")),
			(this.options = i),
			(this.format =
				((s = i == null ? void 0 : i.interpolation) == null
					? void 0
					: s.format) || ((f) => f)),
			this.init(i);
	}
	init(i = {}) {
		i.interpolation || (i.interpolation = { escapeValue: !0 });
		const {
			escape: s,
			escapeValue: f,
			useRawValueToEscape: r,
			prefix: h,
			prefixEscaped: v,
			suffix: S,
			suffixEscaped: p,
			formatSeparator: m,
			unescapeSuffix: A,
			unescapePrefix: U,
			nestingPrefix: _,
			nestingPrefixEscaped: L,
			nestingSuffix: H,
			nestingSuffixEscaped: J,
			nestingOptionsSeparator: st,
			maxReplaces: Yt,
			alwaysFormat: Dt,
		} = i.interpolation;
		(this.escape = s !== void 0 ? s : Q0),
			(this.escapeValue = f !== void 0 ? f : !0),
			(this.useRawValueToEscape = r !== void 0 ? r : !1),
			(this.prefix = h ? Sa(h) : v || "{{"),
			(this.suffix = S ? Sa(S) : p || "}}"),
			(this.formatSeparator = m || ","),
			(this.unescapePrefix = A ? "" : U || "-"),
			(this.unescapeSuffix = this.unescapePrefix ? "" : A || ""),
			(this.nestingPrefix = _ ? Sa(_) : L || Sa("$t(")),
			(this.nestingSuffix = H ? Sa(H) : J || Sa(")")),
			(this.nestingOptionsSeparator = st || ","),
			(this.maxReplaces = Yt || 1e3),
			(this.alwaysFormat = Dt !== void 0 ? Dt : !1),
			this.resetRegExp();
	}
	reset() {
		this.options && this.init(this.options);
	}
	resetRegExp() {
		const i = (s, f) =>
			(s == null ? void 0 : s.source) === f
				? ((s.lastIndex = 0), s)
				: new RegExp(f, "g");
		(this.regexp = i(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
			(this.regexpUnescape = i(
				this.regexpUnescape,
				`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
			)),
			(this.nestingRegexp = i(
				this.nestingRegexp,
				`${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
			));
	}
	interpolate(i, s, f, r) {
		var L;
		let h, v, S;
		const p =
				(this.options &&
					this.options.interpolation &&
					this.options.interpolation.defaultVariables) ||
				{},
			m = (H) => {
				if (H.indexOf(this.formatSeparator) < 0) {
					const Dt = zd(
						s,
						p,
						H,
						this.options.keySeparator,
						this.options.ignoreJSONStructure,
					);
					return this.alwaysFormat
						? this.format(Dt, void 0, f, { ...r, ...s, interpolationkey: H })
						: Dt;
				}
				const J = H.split(this.formatSeparator),
					st = J.shift().trim(),
					Yt = J.join(this.formatSeparator).trim();
				return this.format(
					zd(
						s,
						p,
						st,
						this.options.keySeparator,
						this.options.ignoreJSONStructure,
					),
					Yt,
					f,
					{ ...r, ...s, interpolationkey: st },
				);
			};
		this.resetRegExp();
		const A =
				(r == null ? void 0 : r.missingInterpolationHandler) ||
				this.options.missingInterpolationHandler,
			U =
				((L = r == null ? void 0 : r.interpolation) == null
					? void 0
					: L.skipOnVariables) !== void 0
					? r.interpolation.skipOnVariables
					: this.options.interpolation.skipOnVariables;
		return (
			[
				{ regex: this.regexpUnescape, safeValue: (H) => yc(H) },
				{
					regex: this.regexp,
					safeValue: (H) => (this.escapeValue ? yc(this.escape(H)) : yc(H)),
				},
			].forEach((H) => {
				for (S = 0; (h = H.regex.exec(i)); ) {
					const J = h[1].trim();
					if (((v = m(J)), v === void 0))
						if (typeof A == "function") {
							const Yt = A(i, h, r);
							v = X(Yt) ? Yt : "";
						} else if (r && Object.prototype.hasOwnProperty.call(r, J)) v = "";
						else if (U) {
							v = h[0];
							continue;
						} else
							this.logger.warn(
								`missed to pass in variable ${J} for interpolating ${i}`,
							),
								(v = "");
					else !X(v) && !this.useRawValueToEscape && (v = vd(v));
					const st = H.safeValue(v);
					if (
						((i = i.replace(h[0], st)),
						U
							? ((H.regex.lastIndex += v.length),
								(H.regex.lastIndex -= h[0].length))
							: (H.regex.lastIndex = 0),
						S++,
						S >= this.maxReplaces)
					)
						break;
				}
			}),
			i
		);
	}
	nest(i, s, f = {}) {
		let r, h, v;
		const S = (p, m) => {
			const A = this.nestingOptionsSeparator;
			if (p.indexOf(A) < 0) return p;
			const U = p.split(new RegExp(`${A}[ ]*{`));
			let _ = `{${U[1]}`;
			(p = U[0]), (_ = this.interpolate(_, v));
			const L = _.match(/'/g),
				H = _.match(/"/g);
			((((L == null ? void 0 : L.length) ?? 0) % 2 === 0 && !H) ||
				H.length % 2 !== 0) &&
				(_ = _.replace(/'/g, '"'));
			try {
				(v = JSON.parse(_)), m && (v = { ...m, ...v });
			} catch (J) {
				return (
					this.logger.warn(
						`failed parsing options string in nesting for key ${p}`,
						J,
					),
					`${p}${A}${_}`
				);
			}
			return (
				v.defaultValue &&
					v.defaultValue.indexOf(this.prefix) > -1 &&
					delete v.defaultValue,
				p
			);
		};
		for (; (r = this.nestingRegexp.exec(i)); ) {
			let p = [];
			(v = { ...f }),
				(v = v.replace && !X(v.replace) ? v.replace : v),
				(v.applyPostProcessor = !1),
				delete v.defaultValue;
			let m = !1;
			if (r[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(r[1])) {
				const A = r[1].split(this.formatSeparator).map((U) => U.trim());
				(r[1] = A.shift()), (p = A), (m = !0);
			}
			if (((h = s(S.call(this, r[1].trim(), v), v)), h && r[0] === i && !X(h)))
				return h;
			X(h) || (h = vd(h)),
				h ||
					(this.logger.warn(`missed to resolve ${r[1]} for nesting ${i}`),
					(h = "")),
				m &&
					(h = p.reduce(
						(A, U) =>
							this.format(A, U, f.lng, { ...f, interpolationkey: r[1].trim() }),
						h.trim(),
					)),
				(i = i.replace(r[0], h)),
				(this.regexp.lastIndex = 0);
		}
		return i;
	}
}
const $0 = (d) => {
		let i = d.toLowerCase().trim();
		const s = {};
		if (d.indexOf("(") > -1) {
			const f = d.split("(");
			i = f[0].toLowerCase().trim();
			const r = f[1].substring(0, f[1].length - 1);
			i === "currency" && r.indexOf(":") < 0
				? s.currency || (s.currency = r.trim())
				: i === "relativetime" && r.indexOf(":") < 0
					? s.range || (s.range = r.trim())
					: r.split(";").forEach((v) => {
							if (v) {
								const [S, ...p] = v.split(":"),
									m = p
										.join(":")
										.trim()
										.replace(/^'+|'+$/g, ""),
									A = S.trim();
								s[A] || (s[A] = m),
									m === "false" && (s[A] = !1),
									m === "true" && (s[A] = !0),
									isNaN(m) || (s[A] = parseInt(m, 10));
							}
						});
		}
		return { formatName: i, formatOptions: s };
	},
	ba = (d) => {
		const i = {};
		return (s, f, r) => {
			let h = r;
			r &&
				r.interpolationkey &&
				r.formatParams &&
				r.formatParams[r.interpolationkey] &&
				r[r.interpolationkey] &&
				(h = { ...h, [r.interpolationkey]: void 0 });
			const v = f + JSON.stringify(h);
			let S = i[v];
			return S || ((S = d(Kn(f), r)), (i[v] = S)), S(s);
		};
	};
class F0 {
	constructor(i = {}) {
		(this.logger = ze.create("formatter")),
			(this.options = i),
			(this.formats = {
				number: ba((s, f) => {
					const r = new Intl.NumberFormat(s, { ...f });
					return (h) => r.format(h);
				}),
				currency: ba((s, f) => {
					const r = new Intl.NumberFormat(s, { ...f, style: "currency" });
					return (h) => r.format(h);
				}),
				datetime: ba((s, f) => {
					const r = new Intl.DateTimeFormat(s, { ...f });
					return (h) => r.format(h);
				}),
				relativetime: ba((s, f) => {
					const r = new Intl.RelativeTimeFormat(s, { ...f });
					return (h) => r.format(h, f.range || "day");
				}),
				list: ba((s, f) => {
					const r = new Intl.ListFormat(s, { ...f });
					return (h) => r.format(h);
				}),
			}),
			this.init(i);
	}
	init(i, s = { interpolation: {} }) {
		this.formatSeparator = s.interpolation.formatSeparator || ",";
	}
	add(i, s) {
		this.formats[i.toLowerCase().trim()] = s;
	}
	addCached(i, s) {
		this.formats[i.toLowerCase().trim()] = ba(s);
	}
	format(i, s, f, r = {}) {
		const h = s.split(this.formatSeparator);
		if (
			h.length > 1 &&
			h[0].indexOf("(") > 1 &&
			h[0].indexOf(")") < 0 &&
			h.find((S) => S.indexOf(")") > -1)
		) {
			const S = h.findIndex((p) => p.indexOf(")") > -1);
			h[0] = [h[0], ...h.splice(1, S)].join(this.formatSeparator);
		}
		return h.reduce((S, p) => {
			var U;
			const { formatName: m, formatOptions: A } = $0(p);
			if (this.formats[m]) {
				let _ = S;
				try {
					const L =
							((U = r == null ? void 0 : r.formatParams) == null
								? void 0
								: U[r.interpolationkey]) || {},
						H = L.locale || L.lng || r.locale || r.lng || f;
					_ = this.formats[m](S, H, { ...A, ...r, ...L });
				} catch (L) {
					this.logger.warn(L);
				}
				return _;
			} else this.logger.warn(`there was no format function for ${m}`);
			return S;
		}, i);
	}
}
const W0 = (d, i) => {
	d.pending[i] !== void 0 && (delete d.pending[i], d.pendingCount--);
};
class P0 extends kn {
	constructor(i, s, f, r = {}) {
		var h, v;
		super(),
			(this.backend = i),
			(this.store = s),
			(this.services = f),
			(this.languageUtils = f.languageUtils),
			(this.options = r),
			(this.logger = ze.create("backendConnector")),
			(this.waitingReads = []),
			(this.maxParallelReads = r.maxParallelReads || 10),
			(this.readingCalls = 0),
			(this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
			(this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
			(this.state = {}),
			(this.queue = []),
			(v = (h = this.backend) == null ? void 0 : h.init) == null ||
				v.call(h, f, r.backend, r);
	}
	queueLoad(i, s, f, r) {
		const h = {},
			v = {},
			S = {},
			p = {};
		return (
			i.forEach((m) => {
				let A = !0;
				s.forEach((U) => {
					const _ = `${m}|${U}`;
					!f.reload && this.store.hasResourceBundle(m, U)
						? (this.state[_] = 2)
						: this.state[_] < 0 ||
							(this.state[_] === 1
								? v[_] === void 0 && (v[_] = !0)
								: ((this.state[_] = 1),
									(A = !1),
									v[_] === void 0 && (v[_] = !0),
									h[_] === void 0 && (h[_] = !0),
									p[U] === void 0 && (p[U] = !0)));
				}),
					A || (S[m] = !0);
			}),
			(Object.keys(h).length || Object.keys(v).length) &&
				this.queue.push({
					pending: v,
					pendingCount: Object.keys(v).length,
					loaded: {},
					errors: [],
					callback: r,
				}),
			{
				toLoad: Object.keys(h),
				pending: Object.keys(v),
				toLoadLanguages: Object.keys(S),
				toLoadNamespaces: Object.keys(p),
			}
		);
	}
	loaded(i, s, f) {
		const r = i.split("|"),
			h = r[0],
			v = r[1];
		s && this.emit("failedLoading", h, v, s),
			!s &&
				f &&
				this.store.addResourceBundle(h, v, f, void 0, void 0, { skipCopy: !0 }),
			(this.state[i] = s ? -1 : 2),
			s && f && (this.state[i] = 0);
		const S = {};
		this.queue.forEach((p) => {
			Y0(p.loaded, [h], v),
				W0(p, i),
				s && p.errors.push(s),
				p.pendingCount === 0 &&
					!p.done &&
					(Object.keys(p.loaded).forEach((m) => {
						S[m] || (S[m] = {});
						const A = p.loaded[m];
						A.length &&
							A.forEach((U) => {
								S[m][U] === void 0 && (S[m][U] = !0);
							});
					}),
					(p.done = !0),
					p.errors.length ? p.callback(p.errors) : p.callback());
		}),
			this.emit("loaded", S),
			(this.queue = this.queue.filter((p) => !p.done));
	}
	read(i, s, f, r = 0, h = this.retryTimeout, v) {
		if (!i.length) return v(null, {});
		if (this.readingCalls >= this.maxParallelReads) {
			this.waitingReads.push({
				lng: i,
				ns: s,
				fcName: f,
				tried: r,
				wait: h,
				callback: v,
			});
			return;
		}
		this.readingCalls++;
		const S = (m, A) => {
				if ((this.readingCalls--, this.waitingReads.length > 0)) {
					const U = this.waitingReads.shift();
					this.read(U.lng, U.ns, U.fcName, U.tried, U.wait, U.callback);
				}
				if (m && A && r < this.maxRetries) {
					setTimeout(() => {
						this.read.call(this, i, s, f, r + 1, h * 2, v);
					}, h);
					return;
				}
				v(m, A);
			},
			p = this.backend[f].bind(this.backend);
		if (p.length === 2) {
			try {
				const m = p(i, s);
				m && typeof m.then == "function"
					? m.then((A) => S(null, A)).catch(S)
					: S(null, m);
			} catch (m) {
				S(m);
			}
			return;
		}
		return p(i, s, S);
	}
	prepareLoading(i, s, f = {}, r) {
		if (!this.backend)
			return (
				this.logger.warn(
					"No backend was added via i18next.use. Will not load resources.",
				),
				r && r()
			);
		X(i) && (i = this.languageUtils.toResolveHierarchy(i)), X(s) && (s = [s]);
		const h = this.queueLoad(i, s, f, r);
		if (!h.toLoad.length) return h.pending.length || r(), null;
		h.toLoad.forEach((v) => {
			this.loadOne(v);
		});
	}
	load(i, s, f) {
		this.prepareLoading(i, s, {}, f);
	}
	reload(i, s, f) {
		this.prepareLoading(i, s, { reload: !0 }, f);
	}
	loadOne(i, s = "") {
		const f = i.split("|"),
			r = f[0],
			h = f[1];
		this.read(r, h, "read", void 0, void 0, (v, S) => {
			v &&
				this.logger.warn(
					`${s}loading namespace ${h} for language ${r} failed`,
					v,
				),
				!v &&
					S &&
					this.logger.log(`${s}loaded namespace ${h} for language ${r}`, S),
				this.loaded(i, v, S);
		});
	}
	saveMissing(i, s, f, r, h, v = {}, S = () => {}) {
		var p, m, A, U, _;
		if (
			(m = (p = this.services) == null ? void 0 : p.utils) != null &&
			m.hasLoadedNamespace &&
			!(
				(U = (A = this.services) == null ? void 0 : A.utils) != null &&
				U.hasLoadedNamespace(s)
			)
		) {
			this.logger.warn(
				`did not save key "${f}" as the namespace "${s}" was not yet loaded`,
				"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
			);
			return;
		}
		if (!(f == null || f === "")) {
			if ((_ = this.backend) != null && _.create) {
				const L = { ...v, isUpdate: h },
					H = this.backend.create.bind(this.backend);
				if (H.length < 6)
					try {
						let J;
						H.length === 5 ? (J = H(i, s, f, r, L)) : (J = H(i, s, f, r)),
							J && typeof J.then == "function"
								? J.then((st) => S(null, st)).catch(S)
								: S(null, J);
					} catch (J) {
						S(J);
					}
				else H(i, s, f, r, S, L);
			}
			!i || !i[0] || this.store.addResource(i[0], s, f, r);
		}
	}
}
const Md = () => ({
		debug: !1,
		initAsync: !0,
		ns: ["translation"],
		defaultNS: ["translation"],
		fallbackLng: ["dev"],
		fallbackNS: !1,
		supportedLngs: !1,
		nonExplicitSupportedLngs: !1,
		load: "all",
		preload: !1,
		simplifyPluralSuffix: !0,
		keySeparator: ".",
		nsSeparator: ":",
		pluralSeparator: "_",
		contextSeparator: "_",
		partialBundledLanguages: !1,
		saveMissing: !1,
		updateMissing: !1,
		saveMissingTo: "fallback",
		saveMissingPlurals: !0,
		missingKeyHandler: !1,
		missingInterpolationHandler: !1,
		postProcess: !1,
		postProcessPassResolved: !1,
		returnNull: !1,
		returnEmptyString: !0,
		returnObjects: !1,
		joinArrays: !1,
		returnedObjectHandler: !1,
		parseMissingKeyHandler: !1,
		appendNamespaceToMissingKey: !1,
		appendNamespaceToCIMode: !1,
		overloadTranslationOptionHandler: (d) => {
			let i = {};
			if (
				(typeof d[1] == "object" && (i = d[1]),
				X(d[1]) && (i.defaultValue = d[1]),
				X(d[2]) && (i.tDescription = d[2]),
				typeof d[2] == "object" || typeof d[3] == "object")
			) {
				const s = d[3] || d[2];
				Object.keys(s).forEach((f) => {
					i[f] = s[f];
				});
			}
			return i;
		},
		interpolation: {
			escapeValue: !0,
			format: (d) => d,
			prefix: "{{",
			suffix: "}}",
			formatSeparator: ",",
			unescapePrefix: "-",
			nestingPrefix: "$t(",
			nestingSuffix: ")",
			nestingOptionsSeparator: ",",
			maxReplaces: 1e3,
			skipOnVariables: !0,
		},
	}),
	Rd = (d) => {
		var i, s;
		return (
			X(d.ns) && (d.ns = [d.ns]),
			X(d.fallbackLng) && (d.fallbackLng = [d.fallbackLng]),
			X(d.fallbackNS) && (d.fallbackNS = [d.fallbackNS]),
			((s = (i = d.supportedLngs) == null ? void 0 : i.indexOf) == null
				? void 0
				: s.call(i, "cimode")) < 0 &&
				(d.supportedLngs = d.supportedLngs.concat(["cimode"])),
			typeof d.initImmediate == "boolean" && (d.initAsync = d.initImmediate),
			d
		);
	},
	Vn = () => {},
	I0 = (d) => {
		Object.getOwnPropertyNames(Object.getPrototypeOf(d)).forEach((s) => {
			typeof d[s] == "function" && (d[s] = d[s].bind(d));
		});
	};
class Eu extends kn {
	constructor(i = {}, s) {
		if (
			(super(),
			(this.options = Rd(i)),
			(this.services = {}),
			(this.logger = ze),
			(this.modules = { external: [] }),
			I0(this),
			s && !this.isInitialized && !i.isClone)
		) {
			if (!this.options.initAsync) return this.init(i, s), this;
			setTimeout(() => {
				this.init(i, s);
			}, 0);
		}
	}
	init(i = {}, s) {
		(this.isInitializing = !0),
			typeof i == "function" && ((s = i), (i = {})),
			i.defaultNS == null &&
				i.ns &&
				(X(i.ns)
					? (i.defaultNS = i.ns)
					: i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
		const f = Md();
		(this.options = { ...f, ...this.options, ...Rd(i) }),
			(this.options.interpolation = {
				...f.interpolation,
				...this.options.interpolation,
			}),
			i.keySeparator !== void 0 &&
				(this.options.userDefinedKeySeparator = i.keySeparator),
			i.nsSeparator !== void 0 &&
				(this.options.userDefinedNsSeparator = i.nsSeparator);
		const r = (m) => (m ? (typeof m == "function" ? new m() : m) : null);
		if (!this.options.isClone) {
			this.modules.logger
				? ze.init(r(this.modules.logger), this.options)
				: ze.init(null, this.options);
			let m;
			this.modules.formatter ? (m = this.modules.formatter) : (m = F0);
			const A = new Ed(this.options);
			this.store = new Od(this.options.resources, this.options);
			const U = this.services;
			(U.logger = ze),
				(U.resourceStore = this.store),
				(U.languageUtils = A),
				(U.pluralResolver = new J0(A, {
					prepend: this.options.pluralSeparator,
					simplifyPluralSuffix: this.options.simplifyPluralSuffix,
				})),
				m &&
					(!this.options.interpolation.format ||
						this.options.interpolation.format === f.interpolation.format) &&
					((U.formatter = r(m)),
					U.formatter.init(U, this.options),
					(this.options.interpolation.format = U.formatter.format.bind(
						U.formatter,
					))),
				(U.interpolator = new k0(this.options)),
				(U.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
				(U.backendConnector = new P0(
					r(this.modules.backend),
					U.resourceStore,
					U,
					this.options,
				)),
				U.backendConnector.on("*", (_, ...L) => {
					this.emit(_, ...L);
				}),
				this.modules.languageDetector &&
					((U.languageDetector = r(this.modules.languageDetector)),
					U.languageDetector.init &&
						U.languageDetector.init(U, this.options.detection, this.options)),
				this.modules.i18nFormat &&
					((U.i18nFormat = r(this.modules.i18nFormat)),
					U.i18nFormat.init && U.i18nFormat.init(this)),
				(this.translator = new Jn(this.services, this.options)),
				this.translator.on("*", (_, ...L) => {
					this.emit(_, ...L);
				}),
				this.modules.external.forEach((_) => {
					_.init && _.init(this);
				});
		}
		if (
			((this.format = this.options.interpolation.format),
			s || (s = Vn),
			this.options.fallbackLng &&
				!this.services.languageDetector &&
				!this.options.lng)
		) {
			const m = this.services.languageUtils.getFallbackCodes(
				this.options.fallbackLng,
			);
			m.length > 0 && m[0] !== "dev" && (this.options.lng = m[0]);
		}
		!this.services.languageDetector &&
			!this.options.lng &&
			this.logger.warn(
				"init: no languageDetector is used and no lng is defined",
			),
			[
				"getResource",
				"hasResourceBundle",
				"getResourceBundle",
				"getDataByLanguage",
			].forEach((m) => {
				this[m] = (...A) => this.store[m](...A);
			}),
			[
				"addResource",
				"addResources",
				"addResourceBundle",
				"removeResourceBundle",
			].forEach((m) => {
				this[m] = (...A) => (this.store[m](...A), this);
			});
		const S = Ou(),
			p = () => {
				const m = (A, U) => {
					(this.isInitializing = !1),
						this.isInitialized &&
							!this.initializedStoreOnce &&
							this.logger.warn(
								"init: i18next is already initialized. You should call init just once!",
							),
						(this.isInitialized = !0),
						this.options.isClone ||
							this.logger.log("initialized", this.options),
						this.emit("initialized", this.options),
						S.resolve(U),
						s(A, U);
				};
				if (this.languages && !this.isInitialized)
					return m(null, this.t.bind(this));
				this.changeLanguage(this.options.lng, m);
			};
		return (
			this.options.resources || !this.options.initAsync
				? p()
				: setTimeout(p, 0),
			S
		);
	}
	loadResources(i, s = Vn) {
		var h, v;
		let f = s;
		const r = X(i) ? i : this.language;
		if (
			(typeof i == "function" && (f = i),
			!this.options.resources || this.options.partialBundledLanguages)
		) {
			if (
				(r == null ? void 0 : r.toLowerCase()) === "cimode" &&
				(!this.options.preload || this.options.preload.length === 0)
			)
				return f();
			const S = [],
				p = (m) => {
					if (!m || m === "cimode") return;
					this.services.languageUtils.toResolveHierarchy(m).forEach((U) => {
						U !== "cimode" && S.indexOf(U) < 0 && S.push(U);
					});
				};
			r
				? p(r)
				: this.services.languageUtils
						.getFallbackCodes(this.options.fallbackLng)
						.forEach((A) => p(A)),
				(v = (h = this.options.preload) == null ? void 0 : h.forEach) == null ||
					v.call(h, (m) => p(m)),
				this.services.backendConnector.load(S, this.options.ns, (m) => {
					!m &&
						!this.resolvedLanguage &&
						this.language &&
						this.setResolvedLanguage(this.language),
						f(m);
				});
		} else f(null);
	}
	reloadResources(i, s, f) {
		const r = Ou();
		return (
			typeof i == "function" && ((f = i), (i = void 0)),
			typeof s == "function" && ((f = s), (s = void 0)),
			i || (i = this.languages),
			s || (s = this.options.ns),
			f || (f = Vn),
			this.services.backendConnector.reload(i, s, (h) => {
				r.resolve(), f(h);
			}),
			r
		);
	}
	use(i) {
		if (!i)
			throw new Error(
				"You are passing an undefined module! Please check the object you are passing to i18next.use()",
			);
		if (!i.type)
			throw new Error(
				"You are passing a wrong module! Please check the object you are passing to i18next.use()",
			);
		return (
			i.type === "backend" && (this.modules.backend = i),
			(i.type === "logger" || (i.log && i.warn && i.error)) &&
				(this.modules.logger = i),
			i.type === "languageDetector" && (this.modules.languageDetector = i),
			i.type === "i18nFormat" && (this.modules.i18nFormat = i),
			i.type === "postProcessor" && jd.addPostProcessor(i),
			i.type === "formatter" && (this.modules.formatter = i),
			i.type === "3rdParty" && this.modules.external.push(i),
			this
		);
	}
	setResolvedLanguage(i) {
		if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1)) {
			for (let s = 0; s < this.languages.length; s++) {
				const f = this.languages[s];
				if (
					!(["cimode", "dev"].indexOf(f) > -1) &&
					this.store.hasLanguageSomeTranslations(f)
				) {
					this.resolvedLanguage = f;
					break;
				}
			}
			!this.resolvedLanguage &&
				this.languages.indexOf(i) < 0 &&
				this.store.hasLanguageSomeTranslations(i) &&
				((this.resolvedLanguage = i), this.languages.unshift(i));
		}
	}
	changeLanguage(i, s) {
		this.isLanguageChangingTo = i;
		const f = Ou();
		this.emit("languageChanging", i);
		const r = (S) => {
				(this.language = S),
					(this.languages = this.services.languageUtils.toResolveHierarchy(S)),
					(this.resolvedLanguage = void 0),
					this.setResolvedLanguage(S);
			},
			h = (S, p) => {
				p
					? this.isLanguageChangingTo === i &&
						(r(p),
						this.translator.changeLanguage(p),
						(this.isLanguageChangingTo = void 0),
						this.emit("languageChanged", p),
						this.logger.log("languageChanged", p))
					: (this.isLanguageChangingTo = void 0),
					f.resolve((...m) => this.t(...m)),
					s && s(S, (...m) => this.t(...m));
			},
			v = (S) => {
				var A, U;
				!i && !S && this.services.languageDetector && (S = []);
				const p = X(S) ? S : S && S[0],
					m = this.store.hasLanguageSomeTranslations(p)
						? p
						: this.services.languageUtils.getBestMatchFromCodes(X(S) ? [S] : S);
				m &&
					(this.language || r(m),
					this.translator.language || this.translator.changeLanguage(m),
					(U =
						(A = this.services.languageDetector) == null
							? void 0
							: A.cacheUserLanguage) == null || U.call(A, m)),
					this.loadResources(m, (_) => {
						h(_, m);
					});
			};
		return (
			!i &&
			this.services.languageDetector &&
			!this.services.languageDetector.async
				? v(this.services.languageDetector.detect())
				: !i &&
					  this.services.languageDetector &&
					  this.services.languageDetector.async
					? this.services.languageDetector.detect.length === 0
						? this.services.languageDetector.detect().then(v)
						: this.services.languageDetector.detect(v)
					: v(i),
			f
		);
	}
	getFixedT(i, s, f) {
		const r = (h, v, ...S) => {
			let p;
			typeof v != "object"
				? (p = this.options.overloadTranslationOptionHandler([h, v].concat(S)))
				: (p = { ...v }),
				(p.lng = p.lng || r.lng),
				(p.lngs = p.lngs || r.lngs),
				(p.ns = p.ns || r.ns),
				p.keyPrefix !== "" && (p.keyPrefix = p.keyPrefix || f || r.keyPrefix);
			const m = this.options.keySeparator || ".";
			let A;
			return (
				p.keyPrefix && Array.isArray(h)
					? (A = h.map((U) => `${p.keyPrefix}${m}${U}`))
					: (A = p.keyPrefix ? `${p.keyPrefix}${m}${h}` : h),
				this.t(A, p)
			);
		};
		return X(i) ? (r.lng = i) : (r.lngs = i), (r.ns = s), (r.keyPrefix = f), r;
	}
	t(...i) {
		var s;
		return (s = this.translator) == null ? void 0 : s.translate(...i);
	}
	exists(...i) {
		var s;
		return (s = this.translator) == null ? void 0 : s.exists(...i);
	}
	setDefaultNamespace(i) {
		this.options.defaultNS = i;
	}
	hasLoadedNamespace(i, s = {}) {
		if (!this.isInitialized)
			return (
				this.logger.warn(
					"hasLoadedNamespace: i18next was not initialized",
					this.languages,
				),
				!1
			);
		if (!this.languages || !this.languages.length)
			return (
				this.logger.warn(
					"hasLoadedNamespace: i18n.languages were undefined or empty",
					this.languages,
				),
				!1
			);
		const f = s.lng || this.resolvedLanguage || this.languages[0],
			r = this.options ? this.options.fallbackLng : !1,
			h = this.languages[this.languages.length - 1];
		if (f.toLowerCase() === "cimode") return !0;
		const v = (S, p) => {
			const m = this.services.backendConnector.state[`${S}|${p}`];
			return m === -1 || m === 0 || m === 2;
		};
		if (s.precheck) {
			const S = s.precheck(this, v);
			if (S !== void 0) return S;
		}
		return !!(
			this.hasResourceBundle(f, i) ||
			!this.services.backendConnector.backend ||
			(this.options.resources && !this.options.partialBundledLanguages) ||
			(v(f, i) && (!r || v(h, i)))
		);
	}
	loadNamespaces(i, s) {
		const f = Ou();
		return this.options.ns
			? (X(i) && (i = [i]),
				i.forEach((r) => {
					this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
				}),
				this.loadResources((r) => {
					f.resolve(), s && s(r);
				}),
				f)
			: (s && s(), Promise.resolve());
	}
	loadLanguages(i, s) {
		const f = Ou();
		X(i) && (i = [i]);
		const r = this.options.preload || [],
			h = i.filter(
				(v) =>
					r.indexOf(v) < 0 && this.services.languageUtils.isSupportedCode(v),
			);
		return h.length
			? ((this.options.preload = r.concat(h)),
				this.loadResources((v) => {
					f.resolve(), s && s(v);
				}),
				f)
			: (s && s(), Promise.resolve());
	}
	dir(i) {
		var r, h;
		if (
			(i ||
				(i =
					this.resolvedLanguage ||
					(((r = this.languages) == null ? void 0 : r.length) > 0
						? this.languages[0]
						: this.language)),
			!i)
		)
			return "rtl";
		const s = [
				"ar",
				"shu",
				"sqr",
				"ssh",
				"xaa",
				"yhd",
				"yud",
				"aao",
				"abh",
				"abv",
				"acm",
				"acq",
				"acw",
				"acx",
				"acy",
				"adf",
				"ads",
				"aeb",
				"aec",
				"afb",
				"ajp",
				"apc",
				"apd",
				"arb",
				"arq",
				"ars",
				"ary",
				"arz",
				"auz",
				"avl",
				"ayh",
				"ayl",
				"ayn",
				"ayp",
				"bbz",
				"pga",
				"he",
				"iw",
				"ps",
				"pbt",
				"pbu",
				"pst",
				"prp",
				"prd",
				"ug",
				"ur",
				"ydd",
				"yds",
				"yih",
				"ji",
				"yi",
				"hbo",
				"men",
				"xmn",
				"fa",
				"jpr",
				"peo",
				"pes",
				"prs",
				"dv",
				"sam",
				"ckb",
			],
			f =
				((h = this.services) == null ? void 0 : h.languageUtils) ||
				new Ed(Md());
		return s.indexOf(f.getLanguagePartFromCode(i)) > -1 ||
			i.toLowerCase().indexOf("-arab") > 1
			? "rtl"
			: "ltr";
	}
	static createInstance(i = {}, s) {
		return new Eu(i, s);
	}
	cloneInstance(i = {}, s = Vn) {
		const f = i.forkResourceStore;
		f && delete i.forkResourceStore;
		const r = { ...this.options, ...i, isClone: !0 },
			h = new Eu(r);
		if (
			((i.debug !== void 0 || i.prefix !== void 0) &&
				(h.logger = h.logger.clone(i)),
			["store", "services", "language"].forEach((S) => {
				h[S] = this[S];
			}),
			(h.services = { ...this.services }),
			(h.services.utils = { hasLoadedNamespace: h.hasLoadedNamespace.bind(h) }),
			f)
		) {
			const S = Object.keys(this.store.data).reduce(
				(p, m) => (
					(p[m] = { ...this.store.data[m] }),
					(p[m] = Object.keys(p[m]).reduce(
						(A, U) => ((A[U] = { ...p[m][U] }), A),
						p[m],
					)),
					p
				),
				{},
			);
			(h.store = new Od(S, r)), (h.services.resourceStore = h.store);
		}
		return (
			(h.translator = new Jn(h.services, r)),
			h.translator.on("*", (S, ...p) => {
				h.emit(S, ...p);
			}),
			h.init(r, s),
			(h.translator.options = r),
			(h.translator.backendConnector.services.utils = {
				hasLoadedNamespace: h.hasLoadedNamespace.bind(h),
			}),
			h
		);
	}
	toJSON() {
		return {
			options: this.options,
			store: this.store,
			language: this.language,
			languages: this.languages,
			resolvedLanguage: this.resolvedLanguage,
		};
	}
}
const qt = Eu.createInstance();
qt.createInstance = Eu.createInstance;
qt.createInstance;
qt.dir;
qt.init;
qt.loadResources;
qt.reloadResources;
qt.use;
qt.changeLanguage;
qt.getFixedT;
qt.t;
qt.exists;
qt.setDefaultNamespace;
qt.hasLoadedNamespace;
qt.loadNamespaces;
qt.loadLanguages;
const tm = {
	type: "3rdParty",
	init(d) {
		o0(d.options.react), d0(d);
	},
};
function em({ i18n: d, defaultNS: i, children: s }) {
	const f = Xt.useMemo(() => ({ i18n: d, defaultNS: i }), [d, i]);
	return Xt.createElement(h0.Provider, { value: f }, s);
}
const { slice: lm, forEach: am } = [];
function um(d) {
	return (
		am.call(lm.call(arguments, 1), (i) => {
			if (i) for (const s in i) d[s] === void 0 && (d[s] = i[s]);
		}),
		d
	);
}
function nm(d) {
	return typeof d != "string"
		? !1
		: [
				/<\s*script.*?>/i,
				/<\s*\/\s*script\s*>/i,
				/<\s*img.*?on\w+\s*=/i,
				/<\s*\w+\s*on\w+\s*=.*?>/i,
				/javascript\s*:/i,
				/vbscript\s*:/i,
				/expression\s*\(/i,
				/eval\s*\(/i,
				/alert\s*\(/i,
				/document\.cookie/i,
				/document\.write\s*\(/i,
				/window\.location/i,
				/innerHTML/i,
			].some((s) => s.test(d));
}
const Ud = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
	im = function (d, i) {
		const f =
				arguments.length > 2 && arguments[2] !== void 0
					? arguments[2]
					: { path: "/" },
			r = encodeURIComponent(i);
		let h = `${d}=${r}`;
		if (f.maxAge > 0) {
			const v = f.maxAge - 0;
			if (Number.isNaN(v)) throw new Error("maxAge should be a Number");
			h += `; Max-Age=${Math.floor(v)}`;
		}
		if (f.domain) {
			if (!Ud.test(f.domain)) throw new TypeError("option domain is invalid");
			h += `; Domain=${f.domain}`;
		}
		if (f.path) {
			if (!Ud.test(f.path)) throw new TypeError("option path is invalid");
			h += `; Path=${f.path}`;
		}
		if (f.expires) {
			if (typeof f.expires.toUTCString != "function")
				throw new TypeError("option expires is invalid");
			h += `; Expires=${f.expires.toUTCString()}`;
		}
		if (
			(f.httpOnly && (h += "; HttpOnly"),
			f.secure && (h += "; Secure"),
			f.sameSite)
		)
			switch (
				typeof f.sameSite == "string" ? f.sameSite.toLowerCase() : f.sameSite
			) {
				case !0:
					h += "; SameSite=Strict";
					break;
				case "lax":
					h += "; SameSite=Lax";
					break;
				case "strict":
					h += "; SameSite=Strict";
					break;
				case "none":
					h += "; SameSite=None";
					break;
				default:
					throw new TypeError("option sameSite is invalid");
			}
		return f.partitioned && (h += "; Partitioned"), h;
	},
	Nd = {
		create(d, i, s, f) {
			let r =
				arguments.length > 4 && arguments[4] !== void 0
					? arguments[4]
					: { path: "/", sameSite: "strict" };
			s &&
				((r.expires = new Date()),
				r.expires.setTime(r.expires.getTime() + s * 60 * 1e3)),
				f && (r.domain = f),
				(document.cookie = im(d, encodeURIComponent(i), r));
		},
		read(d) {
			const i = `${d}=`,
				s = document.cookie.split(";");
			for (let f = 0; f < s.length; f++) {
				let r = s[f];
				for (; r.charAt(0) === " "; ) r = r.substring(1, r.length);
				if (r.indexOf(i) === 0) return r.substring(i.length, r.length);
			}
			return null;
		},
		remove(d) {
			this.create(d, "", -1);
		},
	};
var fm = {
		name: "cookie",
		lookup(d) {
			let { lookupCookie: i } = d;
			if (i && typeof document < "u") return Nd.read(i) || void 0;
		},
		cacheUserLanguage(d, i) {
			let {
				lookupCookie: s,
				cookieMinutes: f,
				cookieDomain: r,
				cookieOptions: h,
			} = i;
			s && typeof document < "u" && Nd.create(s, d, f, r, h);
		},
	},
	cm = {
		name: "querystring",
		lookup(d) {
			var f;
			let { lookupQuerystring: i } = d,
				s;
			if (typeof window < "u") {
				let { search: r } = window.location;
				!window.location.search &&
					((f = window.location.hash) == null ? void 0 : f.indexOf("?")) > -1 &&
					(r = window.location.hash.substring(
						window.location.hash.indexOf("?"),
					));
				const v = r.substring(1).split("&");
				for (let S = 0; S < v.length; S++) {
					const p = v[S].indexOf("=");
					p > 0 && v[S].substring(0, p) === i && (s = v[S].substring(p + 1));
				}
			}
			return s;
		},
	};
let Oa = null;
const _d = () => {
	if (Oa !== null) return Oa;
	try {
		if (((Oa = typeof window < "u" && window.localStorage !== null), !Oa))
			return !1;
		const d = "i18next.translate.boo";
		window.localStorage.setItem(d, "foo"), window.localStorage.removeItem(d);
	} catch {
		Oa = !1;
	}
	return Oa;
};
var sm = {
	name: "localStorage",
	lookup(d) {
		let { lookupLocalStorage: i } = d;
		if (i && _d()) return window.localStorage.getItem(i) || void 0;
	},
	cacheUserLanguage(d, i) {
		let { lookupLocalStorage: s } = i;
		s && _d() && window.localStorage.setItem(s, d);
	},
};
let Ta = null;
const Hd = () => {
	if (Ta !== null) return Ta;
	try {
		if (((Ta = typeof window < "u" && window.sessionStorage !== null), !Ta))
			return !1;
		const d = "i18next.translate.boo";
		window.sessionStorage.setItem(d, "foo"),
			window.sessionStorage.removeItem(d);
	} catch {
		Ta = !1;
	}
	return Ta;
};
var rm = {
		name: "sessionStorage",
		lookup(d) {
			let { lookupSessionStorage: i } = d;
			if (i && Hd()) return window.sessionStorage.getItem(i) || void 0;
		},
		cacheUserLanguage(d, i) {
			let { lookupSessionStorage: s } = i;
			s && Hd() && window.sessionStorage.setItem(s, d);
		},
	},
	om = {
		name: "navigator",
		lookup(d) {
			const i = [];
			if (typeof navigator < "u") {
				const { languages: s, userLanguage: f, language: r } = navigator;
				if (s) for (let h = 0; h < s.length; h++) i.push(s[h]);
				f && i.push(f), r && i.push(r);
			}
			return i.length > 0 ? i : void 0;
		},
	},
	dm = {
		name: "htmlTag",
		lookup(d) {
			let { htmlTag: i } = d,
				s;
			const f = i || (typeof document < "u" ? document.documentElement : null);
			return (
				f &&
					typeof f.getAttribute == "function" &&
					(s = f.getAttribute("lang")),
				s
			);
		},
	},
	hm = {
		name: "path",
		lookup(d) {
			var r;
			let { lookupFromPathIndex: i } = d;
			if (typeof window > "u") return;
			const s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
			return Array.isArray(s)
				? (r = s[typeof i == "number" ? i : 0]) == null
					? void 0
					: r.replace("/", "")
				: void 0;
		},
	},
	gm = {
		name: "subdomain",
		lookup(d) {
			var r, h;
			let { lookupFromSubdomainIndex: i } = d;
			const s = typeof i == "number" ? i + 1 : 1,
				f =
					typeof window < "u" &&
					((h = (r = window.location) == null ? void 0 : r.hostname) == null
						? void 0
						: h.match(
								/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
							));
			if (f) return f[s];
		},
	};
let Gd = !1;
try {
	document.cookie, (Gd = !0);
} catch {}
const Qd = [
	"querystring",
	"cookie",
	"localStorage",
	"sessionStorage",
	"navigator",
	"htmlTag",
];
Gd || Qd.splice(1, 1);
const mm = () => ({
	order: Qd,
	lookupQuerystring: "lng",
	lookupCookie: "i18next",
	lookupLocalStorage: "i18nextLng",
	lookupSessionStorage: "i18nextLng",
	caches: ["localStorage"],
	excludeCacheFor: ["cimode"],
	convertDetectedLanguage: (d) => d,
});
class Xd {
	constructor(i) {
		let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		(this.type = "languageDetector"), (this.detectors = {}), this.init(i, s);
	}
	init() {
		let i =
				arguments.length > 0 && arguments[0] !== void 0
					? arguments[0]
					: { languageUtils: {} },
			s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		(this.services = i),
			(this.options = um(s, this.options || {}, mm())),
			typeof this.options.convertDetectedLanguage == "string" &&
				this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
				(this.options.convertDetectedLanguage = (r) => r.replace("-", "_")),
			this.options.lookupFromUrlIndex &&
				(this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
			(this.i18nOptions = f),
			this.addDetector(fm),
			this.addDetector(cm),
			this.addDetector(sm),
			this.addDetector(rm),
			this.addDetector(om),
			this.addDetector(dm),
			this.addDetector(hm),
			this.addDetector(gm);
	}
	addDetector(i) {
		return (this.detectors[i.name] = i), this;
	}
	detect() {
		let i =
				arguments.length > 0 && arguments[0] !== void 0
					? arguments[0]
					: this.options.order,
			s = [];
		return (
			i.forEach((f) => {
				if (this.detectors[f]) {
					let r = this.detectors[f].lookup(this.options);
					r && typeof r == "string" && (r = [r]), r && (s = s.concat(r));
				}
			}),
			(s = s
				.filter((f) => f != null && !nm(f))
				.map((f) => this.options.convertDetectedLanguage(f))),
			this.services &&
			this.services.languageUtils &&
			this.services.languageUtils.getBestMatchFromCodes
				? s
				: s.length > 0
					? s[0]
					: null
		);
	}
	cacheUserLanguage(i) {
		let s =
			arguments.length > 1 && arguments[1] !== void 0
				? arguments[1]
				: this.options.caches;
		s &&
			((this.options.excludeCacheFor &&
				this.options.excludeCacheFor.indexOf(i) > -1) ||
				s.forEach((f) => {
					this.detectors[f] &&
						this.detectors[f].cacheUserLanguage(i, this.options);
				}));
	}
}
Xd.type = "languageDetector";
function ym() {
	return [
		...Object.values(window.__reactRouterRouteModules).flatMap((i) =>
			typeof (i == null ? void 0 : i.handle) != "object"
				? []
				: i.handle
					? "i18n" in i.handle
						? typeof i.handle.i18n == "string"
							? [i.handle.i18n]
							: Array.isArray(i.handle.i18n) &&
								  i.handle.i18n.every((s) => typeof s == "string")
								? i.handle.i18n
								: []
						: []
					: [],
		),
	];
}
var vm = qd();
/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pm(d) {
	return Xt.createElement(v0, { flushSync: vm.flushSync, ...d });
}
var B = null,
	Tu = null;
function Sm() {
	if (
		!B &&
		window.__reactRouterContext &&
		window.__reactRouterManifest &&
		window.__reactRouterRouteModules
	) {
		if (window.__reactRouterManifest.sri === !0) {
			const d = document.querySelector("script[rr-importmap]");
			if (d != null && d.textContent)
				try {
					window.__reactRouterManifest.sri = JSON.parse(
						d.textContent,
					).integrity;
				} catch (i) {
					console.error("Failed to parse import map", i);
				}
		}
		B = {
			context: window.__reactRouterContext,
			manifest: window.__reactRouterManifest,
			routeModules: window.__reactRouterRouteModules,
			stateDecodingPromise: void 0,
			router: void 0,
			routerInitialized: !1,
		};
	}
}
function bm({ unstable_getContext: d }) {
	var h, v;
	if ((Sm(), !B))
		throw new Error(
			"You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`",
		);
	let i = B;
	if (!B.stateDecodingPromise) {
		let S = B.context.stream;
		Bd(S, "No stream found for single fetch decoding"),
			(B.context.stream = void 0),
			(B.stateDecodingPromise = p0(S, window)
				.then((p) => {
					(B.context.state = p.value), (i.stateDecodingPromise.value = !0);
				})
				.catch((p) => {
					i.stateDecodingPromise.error = p;
				}));
	}
	if (B.stateDecodingPromise.error) throw B.stateDecodingPromise.error;
	if (!B.stateDecodingPromise.value) throw B.stateDecodingPromise;
	let s = S0(
			B.manifest.routes,
			B.routeModules,
			B.context.state,
			B.context.ssr,
			B.context.isSpaMode,
		),
		f;
	if (B.context.isSpaMode) {
		let { loaderData: S } = B.context.state;
		(h = B.manifest.routes.root) != null &&
			h.hasLoader &&
			S &&
			"root" in S &&
			(f = { loaderData: { root: S.root } });
	} else
		(f = b0(
			B.context.state,
			s,
			(S) => {
				var p, m, A;
				return {
					clientLoader:
						(p = B.routeModules[S]) == null ? void 0 : p.clientLoader,
					hasLoader:
						((m = B.manifest.routes[S]) == null ? void 0 : m.hasLoader) === !0,
					hasHydrateFallback:
						((A = B.routeModules[S]) == null ? void 0 : A.HydrateFallback) !=
						null,
				};
			},
			window.location,
			(v = window.__reactRouterContext) == null ? void 0 : v.basename,
			B.context.isSpaMode,
		)),
			f && f.errors && (f.errors = O0(f.errors));
	let r = T0({
		routes: s,
		history: A0(),
		basename: B.context.basename,
		unstable_getContext: d,
		hydrationData: f,
		hydrationRouteProperties: M0,
		mapRouteProperties: z0,
		future: { unstable_middleware: B.context.future.unstable_middleware },
		dataStrategy: E0(
			() => r,
			B.manifest,
			B.routeModules,
			B.context.ssr,
			B.context.basename,
		),
		patchRoutesOnNavigation: x0(
			B.manifest,
			B.routeModules,
			B.context.ssr,
			B.context.routeDiscovery,
			B.context.isSpaMode,
			B.context.basename,
		),
	});
	return (
		(B.router = r),
		r.state.initialized && ((B.routerInitialized = !0), r.initialize()),
		(r.createRoutesForHMR = D0),
		(window.__reactRouterDataRouter = r),
		r
	);
}
function Om(d) {
	Tu || (Tu = bm({ unstable_getContext: d.unstable_getContext }));
	let [i, s] = Xt.useState(void 0),
		[f, r] = Xt.useState(Tu.state.location);
	return (
		Xt.useLayoutEffect(() => {
			B &&
				B.router &&
				!B.routerInitialized &&
				((B.routerInitialized = !0), B.router.initialize());
		}, []),
		Xt.useLayoutEffect(() => {
			if (B && B.router)
				return B.router.subscribe((h) => {
					h.location !== f && r(h.location);
				});
		}, [f]),
		Bd(B, "ssrInfo unavailable for HydratedRouter"),
		g0(
			Tu,
			B.manifest,
			B.routeModules,
			B.context.ssr,
			B.context.routeDiscovery,
			B.context.isSpaMode,
		),
		Xt.createElement(
			Xt.Fragment,
			null,
			Xt.createElement(
				m0.Provider,
				{
					value: {
						manifest: B.manifest,
						routeModules: B.routeModules,
						future: B.context.future,
						criticalCss: i,
						ssr: B.context.ssr,
						isSpaMode: B.context.isSpaMode,
						routeDiscovery: B.context.routeDiscovery,
					},
				},
				Xt.createElement(
					y0,
					{ location: f },
					Xt.createElement(pm, { router: Tu }),
				),
			),
			Xt.createElement(Xt.Fragment, null),
		)
	);
}
async function Ld() {
	await qt
		.use(tm)
		.use(Xd)
		.init({
			react: { useSuspense: !1 },
			ns: ym(),
			detection: { order: ["htmlTag"], caches: [] },
			backend: { cache: "no-store" },
			...R0,
		}),
		Xt.startTransition(() => {
			C0.hydrateRoot(
				document,
				oc.jsx(em, {
					i18n: qt,
					children: oc.jsx(Xt.StrictMode, { children: oc.jsx(Om, {}) }),
				}),
			);
		});
}
window.requestIdleCallback
	? window.requestIdleCallback(Ld)
	: window.setTimeout(Ld, 1);

//# debugId=4707ae4b-ab80-5acd-bb9a-8d21ca236169
