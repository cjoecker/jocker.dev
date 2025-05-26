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
			(e._sentryDebugIds[n] = "8aa71d1d-ce0e-50a4-b2b7-60c0df3459d6"));
	} catch (e) {}
})();
import "./chunk-D4RADZKF-DVqrdyfo.js";
const t = "posthog_ignore";
export { t as P };

//# debugId=8aa71d1d-ce0e-50a4-b2b7-60c0df3459d6
