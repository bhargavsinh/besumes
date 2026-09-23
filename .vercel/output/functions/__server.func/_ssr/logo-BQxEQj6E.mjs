import { D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn } from "./button-vMB5N_4x.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-BQxEQj6E.js
var import_jsx_runtime = require_jsx_runtime();
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-serif text-lg leading-none font-medium",
			children: "B"
		})
	});
}
function Logo({ className, to = "/", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("flex items-center gap-2 text-foreground no-underline", className),
		"aria-label": "Besumes home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-serif text-xl tracking-tight",
			children: "Besumes"
		}) : null]
	});
}
//#endregion
export { Logo as t };
