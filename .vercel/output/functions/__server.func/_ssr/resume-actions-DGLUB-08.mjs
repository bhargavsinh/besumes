import { D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { s as formatRelative, t as Button } from "./button-vMB5N_4x.mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Copy, a as Trash2, f as Pencil, x as Download } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as TEMPLATE_META } from "./router-CPmPj-kl.mjs";
import { t as downloadResumePdf } from "./pdf-nOKFMC-L.mjs";
import { n as useResumeStore } from "./store-CVS9aPD1.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, l as AlertDialogTrigger, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-DgZIWHSL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resume-actions-DGLUB-08.js
var import_jsx_runtime = require_jsx_runtime();
function ResumeCard({ resume }) {
	const navigate = useNavigate();
	const duplicate = useResumeStore((s) => s.duplicate);
	const remove = useResumeStore((s) => s.remove);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col rounded-xl bg-card p-5 shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-start justify-between gap-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: resume.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					TEMPLATE_META[resume.templateId].name,
					" · Updated ",
					formatRelative(resume.updatedAt)
				]
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => navigate({
						to: "/resumes/$id",
						params: { id: resume.id }
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" }), "Edit"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => {
						const copy = duplicate(resume.id);
						if (copy) {
							toast.success("Resume duplicated");
							navigate({
								to: "/resumes/$id",
								params: { id: copy.id }
							});
						}
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Duplicate"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "outline",
					onClick: async () => {
						try {
							await downloadResumePdf(resume);
						} catch (err) {
							toast.error(err instanceof Error ? err.message : "Something went wrong while generating the PDF. Please try again.");
						}
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Download"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "ghost",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "Delete"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Delete this resume?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogDescription, { children: [
					"“",
					resume.name,
					"” will be removed from this device. This cannot be undone."
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
					onClick: () => remove(resume.id),
					children: "Delete"
				})] })] })] })
			]
		})]
	});
}
//#endregion
export { ResumeCard as t };
