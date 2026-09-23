import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { i as downloadText, t as Button } from "./button-vMB5N_4x.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as TEMPLATE_META, T as TEMPLATE_IDS, i as useSettingsStore } from "./router-CPmPj-kl.mjs";
import { t as AppShell } from "./app-shell-hirKunKP.mjs";
import { n as useResumeStore } from "./store-CVS9aPD1.mjs";
import { a as SelectTrigger, i as SelectItem, n as Select, o as SelectValue, r as SelectContent, t as Label } from "./select-C8Zp2-iB.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, l as AlertDialogTrigger, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-DgZIWHSL.mjs";
import { t as useHydrateApp } from "./use-hydrate-DUnnMjGn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-UoRy1f9b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	useHydrateApp();
	const settings = useSettingsStore((s) => s.settings);
	const patch = useSettingsStore((s) => s.patch);
	const exportAll = useResumeStore((s) => s.exportAll);
	const importPayload = useResumeStore((s) => s.importPayload);
	const wipe = useResumeStore((s) => s.wipe);
	const fileRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Settings",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex max-w-2xl flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-card p-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "Appearance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Theme" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: settings.theme,
							onValueChange: (theme) => patch({ theme }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "mt-2",
								"aria-label": "Theme",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "light",
									children: "Light mode"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "dark",
									children: "Dark mode"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "system",
									children: "System default"
								})
							] })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-card p-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "Resume"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Default template" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: settings.defaultTemplate,
								onValueChange: (defaultTemplate) => patch({ defaultTemplate }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-2",
									"aria-label": "Default template",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: TEMPLATE_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: id,
									children: TEMPLATE_META[id].name
								}, id)) })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Default paper size" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: settings.defaultPaperSize,
								onValueChange: (defaultPaperSize) => patch({ defaultPaperSize }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-2",
									"aria-label": "Default paper size",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "a4",
									children: "A4"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "letter",
									children: "Letter"
								})] })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Default language" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: settings.defaultLanguage,
									onValueChange: (defaultLanguage) => patch({ defaultLanguage }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "mt-2",
										"aria-label": "Default language",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "en",
											children: "English"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "hi",
											children: "Hindi"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "gu",
											children: "Gujarati"
										})
									] })]
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-card p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "Data"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Your resume information stays on your device unless you explicitly choose to use a future cloud feature."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									onClick: () => downloadText("besumes-backup.json", JSON.stringify(exportAll(), null, 2)),
									children: "Export data"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileRef,
									type: "file",
									accept: "application/json",
									className: "sr-only",
									onChange: async (e) => {
										const file = e.target.files?.[0];
										e.target.value = "";
										if (!file) return;
										try {
											const raw = JSON.parse(await file.text());
											const result = importPayload(raw);
											toast.success(result.added === 1 ? "Imported 1 resume" : `Imported ${result.added} resumes`);
										} catch (err) {
											toast.error(err instanceof Error ? err.message : "That file could not be imported.");
										}
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									onClick: () => fileRef.current?.click(),
									children: "Import data"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "destructive",
										children: "Delete all local data"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Delete all local data?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "Every resume and setting on this device will be removed. Export a backup first if you want to keep them." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
									onClick: () => {
										wipe();
										toast.success("Local data deleted");
									},
									children: "Delete everything"
								})] })] })] })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Read the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "underline underline-offset-4",
							children: "privacy note"
						}),
						"."
					]
				})
			]
		})
	});
}
//#endregion
export { SettingsPage as component };
