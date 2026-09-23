import { D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-vMB5N_4x.mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Eye, c as ShieldCheck, m as LayoutTemplate, n as WifiOff, v as FileText, x as Download } from "../_libs/lucide-react.mjs";
import { E as TEMPLATE_META, T as TEMPLATE_IDS } from "./router-CPmPj-kl.mjs";
import { t as Logo } from "./logo-BQxEQj6E.mjs";
import { n as useResumeStore } from "./store-CVS9aPD1.mjs";
import { t as useHydrateApp } from "./use-hydrate-DUnnMjGn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-nHPfDExn.js
var import_jsx_runtime = require_jsx_runtime();
var FEATURES = [
	{
		title: "Easy Resume Builder",
		text: "A clear form for every section, with autosave as you type.",
		icon: FileText
	},
	{
		title: "Professional Templates",
		text: "Five layouts that share the same data — switch without losing work.",
		icon: LayoutTemplate
	},
	{
		title: "Live Preview",
		text: "See the page update instantly while you edit.",
		icon: Eye
	},
	{
		title: "PDF Export",
		text: "Download an A4, print-ready PDF with selectable text.",
		icon: Download
	},
	{
		title: "ATS-Friendly",
		text: "A dedicated mode with standard headings and a clean document structure.",
		icon: ShieldCheck
	},
	{
		title: "Works Offline",
		text: "Install Besumes as a PWA and keep working without an account.",
		icon: WifiOff
	}
];
function Home() {
	useHydrateApp();
	const navigate = useNavigate();
	const createNew = useResumeStore((s) => s.createNew);
	const start = () => {
		const resume = createNew();
		navigate({
			to: "/resumes/$id",
			params: { id: resume.id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						asChild: true,
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/templates",
							children: "Templates"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							children: "Open app"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 pt-8 pb-16 sm:pt-16 sm:pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium tracking-wide text-primary uppercase",
							children: "Resume maker"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl",
							children: "Build Your Resume. Build Your Future."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-lg text-muted-foreground",
							children: "Create professional, ATS-friendly resumes in minutes with Besumes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: start,
								children: "Create Resume"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/templates",
									children: "View Templates"
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3",
						children: FEATURES.map((feature) => {
							const Icon = feature.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-semibold",
									children: feature.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: feature.text
								})] })]
							}, feature.title);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl tracking-tight",
							children: "Templates"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "One data model. Five professional looks."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/templates",
								children: "Explore templates"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
						children: TEMPLATE_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl bg-card p-4 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: TEMPLATE_META[id].name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: TEMPLATE_META[id].blurb
							})]
						}, id))
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Besumes — resumes stay on this device." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-foreground",
							children: "Privacy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/settings",
							className: "hover:text-foreground",
							children: "Settings"
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
