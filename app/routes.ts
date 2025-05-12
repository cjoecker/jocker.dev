import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
	route("/", "./routes/_index.tsx", [route("contact", "routes/contact.tsx")]),
] satisfies RouteConfig;
