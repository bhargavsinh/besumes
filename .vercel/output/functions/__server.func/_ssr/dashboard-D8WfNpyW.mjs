import { D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-vMB5N_4x.mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Files, s as Sparkles, y as FilePlus } from "../_libs/lucide-react.mjs";
import { r as InstallBanner } from "./router-CPmPj-kl.mjs";
import { t as AppShell } from "./app-shell-hirKunKP.mjs";
import { n as useResumeStore } from "./store-CVS9aPD1.mjs";
import { t as ResumeCard } from "./resume-actions-DGLUB-08.mjs";
import { t as useHydrateApp } from "./use-hydrate-DUnnMjGn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-D8WfNpyW.js
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	useHydrateApp();
	const navigate = useNavigate();
	const resumes = useResumeStore((s) => s.resumes);
	const createNew = useResumeStore((s) => s.createNew);
	const createFromSample = useResumeStore((s) => s.createFromSample);
	const start = () => {
		const resume = createNew();
		navigate({
			to: "/resumes/$id",
			params: { id: resume.id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Dashboard",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: start,
					className: "rounded-xl bg-primary p-6 text-left text-primary-foreground shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlus, { className: "size-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-2xl",
							children: "Create new resume"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-primary-foreground/80",
							children: "Start from a blank, professional template."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/resumes",
					className: "rounded-xl bg-card p-6 text-left shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Files, { className: "size-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-2xl",
							children: "My resumes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: resumes.length ? `${resumes.length} saved on this device` : "Open your library when you are ready."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "Recent"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/resumes",
							children: "View all"
						})
					})]
				}), resumes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card px-6 py-12 text-center shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl",
							children: "No resumes yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-2 max-w-md text-muted-foreground",
							children: "Create your first professional resume and start your next opportunity."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col justify-center gap-2 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: start,
								children: "Create Resume"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => {
									const sample = createFromSample();
									navigate({
										to: "/resumes/$id",
										params: { id: sample.id }
									});
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Start from a sample"]
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: resumes.slice(0, 4).map((resume) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeCard, { resume }, resume.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted-foreground",
				children: "Your resumes are stored on this device."
			})
		]
	});
}
//#endregion
export { DashboardPage as component };
