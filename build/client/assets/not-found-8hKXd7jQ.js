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
			(e._sentryDebugIds[n] = "65c03668-2040-5b9f-93b2-b583e6a3bea8"));
	} catch (e) {}
})();
import { w as s, u as e } from "./with-props-DPDmm-s_.js";
import { p as t } from "./chunk-D4RADZKF-DVqrdyfo.js";
const i = s(function () {
	const { t: n } = e("translation");
	return t.jsx("div", {
		className: "flex h-screen w-full items-center justify-center",
		children: t.jsx("h1", { className: "text-lg", children: n("notFound") }),
	});
});
export { i as default };

//# debugId=65c03668-2040-5b9f-93b2-b583e6a3bea8
