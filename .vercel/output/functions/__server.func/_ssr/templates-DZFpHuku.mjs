import { D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-vMB5N_4x.mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as TEMPLATE_META, T as TEMPLATE_IDS } from "./router-CPmPj-kl.mjs";
import { t as AppShell } from "./app-shell-hirKunKP.mjs";
import { n as useResumeStore, t as createSampleResume } from "./store-CVS9aPD1.mjs";
import { t as ResumeStage } from "./resume-stage-Tk86TheY.mjs";
import { t as useHydrateApp } from "./use-hydrate-DUnnMjGn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/templates-DZFpHuku.js
var import_jsx_runtime = require_jsx_runtime();
function TemplatesPage() {
	useHydrateApp();
	const navigate = useNavigate();
	const createNew = useResumeStore((s) => s.createNew);
	const sample = createSampleResume();
	const useTemplate = (id) => {
		const resume = createNew(id);
		navigate({
			to: "/resumes/$id",
			params: { id: resume.id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Templates",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-8 max-w-2xl text-muted-foreground",
			children: "Every template reads the same resume data. Changing templates never deletes your information."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8",
			children: TEMPLATE_IDS.map((id) => {
				const preview = {
					...sample,
					templateId: id,
					atsMode: id === "minimal",
					name: TEMPLATE_META[id].name
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid gap-6 rounded-xl bg-card p-5 shadow-card lg:grid-cols-[18rem_minmax(0,1fr)] lg:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-primary uppercase",
							children: TEMPLATE_META[id].audience
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif text-2xl",
							children: TEMPLATE_META[id].name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: TEMPLATE_META[id].blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-5",
							onClick: () => useTemplate(id),
							children: ["Use ", TEMPLATE_META[id].name]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-lg bg-muted/60 p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeStage, { resume: preview })
					})]
				}, id);
			})
		})]
	});
}
//#endregion
export { TemplatesPage as component };
