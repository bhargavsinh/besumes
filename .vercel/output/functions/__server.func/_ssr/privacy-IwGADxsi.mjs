import { D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-vMB5N_4x.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Logo } from "./logo-BQxEQj6E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-IwGADxsi.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto flex max-w-3xl items-center justify-between px-4 py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard",
					children: "Open app"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl tracking-tight",
					children: "Privacy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg leading-relaxed",
					children: "Your resume information stays on your device unless you explicitly choose to use a future cloud feature."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Besumes does not require a login, email registration, phone verification, or social sign-in to create a resume." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Resumes, photos, and settings are saved in this browser using local storage. They are not sent to a Besumes server." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You can export JSON backups, import them on another device, or delete all local data from Settings at any time." })
					]
				})
			]
		})]
	});
}
//#endregion
export { PrivacyPage as component };
