import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
	route("/", "./routes/_index.tsx", [route("contact", "routes/contact.tsx")]),
	route("api/locales/:lng/:ns", "./routes/locales.ts"),
	route("*", "./routes/not-found.tsx"),
] satisfies RouteConfig;
