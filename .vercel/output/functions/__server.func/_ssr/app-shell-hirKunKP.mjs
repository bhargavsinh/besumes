import { D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn } from "./button-vMB5N_4x.mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as LayoutGrid, l as Settings, o as SquarePen, v as FileText } from "../_libs/lucide-react.mjs";
import { t as Logo } from "./logo-BQxEQj6E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-hirKunKP.js
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: LayoutGrid
	},
	{
		to: "/resumes",
		label: "My Resumes",
		icon: FileText
	},
	{
		to: "/templates",
		label: "Templates",
		icon: SquarePen
	},
	{
		to: "/settings",
		label: "Settings",
		icon: Settings
	}
];
function navActive(pathname, to) {
	if (to === "/resumes") return pathname === "/resumes" || pathname.startsWith("/resumes/");
	return pathname === to || pathname.startsWith(`${to}/`);
}
function AppShell({ children, title, actions, wide = false }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "no-print fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-border bg-card px-4 py-5 lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { to: "/dashboard" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-8 flex flex-col gap-1",
						"aria-label": "Primary",
						children: NAV.map((item) => {
							const Icon = item.icon;
							const active = navActive(pathname, item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors", active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
								"aria-current": active ? "page" : void 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-auto px-3 text-xs leading-relaxed text-muted-foreground",
						children: "Your resumes are stored on this device."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print sticky top-0 z-20 flex h-14 items-center justify-between gap-3 border-b border-border bg-background/90 px-4 backdrop-blur-sm lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { to: "/dashboard" }),
					title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-sm font-medium",
						children: title
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1",
						children: actions
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-60",
				children: [title || actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "no-print hidden items-center justify-between gap-3 border-b border-border px-8 py-5 lg:flex",
					children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-2xl tracking-tight",
						children: title
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: actions
					})]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: cn("px-4 py-6 lg:px-8 lg:py-8", wide ? "" : "max-w-6xl", "safe-bottom lg:pb-8"),
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "no-print fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm lg:hidden",
				"aria-label": "Mobile",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-4",
					children: NAV.map((item) => {
						const Icon = item.icon;
						const active = navActive(pathname, item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium", active ? "text-primary" : "text-muted-foreground"),
							"aria-current": active ? "page" : void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), item.label === "My Resumes" ? "Resumes" : item.label]
						}) }, item.to);
					})
				})
			})
		]
	});
}
//#endregion
export { AppShell as t };
