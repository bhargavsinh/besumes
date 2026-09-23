import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as Slot, D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-vMB5N_4x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid() {
	if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
	return `id_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}
function formatMonth(value) {
	if (!value) return "";
	const [year, month] = value.split("-");
	const y = Number(year);
	const m = Number(month);
	if (!y || !m) return value;
	return new Date(y, m - 1, 1).toLocaleDateString("en-US", {
		month: "short",
		year: "numeric"
	});
}
function formatRange(start, end, current) {
	const a = formatMonth(start);
	const b = current ? "Present" : formatMonth(end);
	if (a && b) return `${a} – ${b}`;
	return a || b || "";
}
function formatRelative(iso) {
	const then = new Date(iso).getTime();
	if (!Number.isFinite(then)) return "";
	const delta = Date.now() - then;
	const minutes = Math.round(delta / 6e4);
	if (minutes < 1) return "Just now";
	if (minutes < 60) return `${minutes}m ago`;
	const hours = Math.round(minutes / 60);
	if (hours < 24) return `${hours}h ago`;
	const days = Math.round(hours / 24);
	if (days < 14) return `${days}d ago`;
	return new Date(iso).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function downloadBlob(filename, blob) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.rel = "noopener";
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
function downloadText(filename, text, type = "application/json") {
	downloadBlob(filename, new Blob([text], { type }));
}
async function resizeImageFile(file, max = 480) {
	const url = URL.createObjectURL(file);
	try {
		const img = await new Promise((resolve, reject) => {
			const image = new Image();
			image.onload = () => resolve(image);
			image.onerror = () => reject(/* @__PURE__ */ new Error("Could not read that image."));
			image.src = url;
		});
		const scale = Math.min(max / img.width, max / img.height, 1);
		const canvas = document.createElement("canvas");
		canvas.width = Math.max(1, Math.round(img.width * scale));
		canvas.height = Math.max(1, Math.round(img.height * scale));
		const ctx = canvas.getContext("2d");
		if (!ctx) throw new Error("Could not process that image.");
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		return canvas.toDataURL("image/jpeg", .86);
	} finally {
		URL.revokeObjectURL(url);
	}
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-input bg-card text-foreground hover:bg-muted",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-muted hover:text-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			lg: "h-12 rounded-lg px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { formatMonth as a, resizeImageFile as c, downloadText as i, uid as l, buttonVariants as n, formatRange as o, cn as r, formatRelative as s, Button as t };
