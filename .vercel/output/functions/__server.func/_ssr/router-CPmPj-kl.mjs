import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { l as uid, r as cn, t as Button } from "./button-vMB5N_4x.mjs";
import { _ as createRootRoute, b as useRouter, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as TriangleAlert, x as Download } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CPmPj-kl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var SECTION_IDS = [
	"summary",
	"experience",
	"education",
	"skills",
	"projects",
	"certifications",
	"languages",
	"achievements",
	"interests"
];
var TEMPLATE_IDS = [
	"classic",
	"modern",
	"minimal",
	"professional",
	"student"
];
var LANGUAGE_LEVELS = [
	"Native",
	"Fluent",
	"Professional",
	"Intermediate",
	"Basic"
];
var DEFAULT_SECTION_TITLES = {
	summary: "Professional Summary",
	experience: "Experience",
	education: "Education",
	skills: "Skills",
	projects: "Projects",
	certifications: "Certifications",
	languages: "Languages",
	achievements: "Achievements",
	interests: "Interests"
};
var DEFAULT_SECTION_ORDER = [...SECTION_IDS];
var STUDENT_SECTION_ORDER = [
	"summary",
	"education",
	"projects",
	"skills",
	"experience",
	"certifications",
	"languages",
	"achievements",
	"interests"
];
var TEMPLATE_META = {
	classic: {
		name: "Classic",
		blurb: "Traditional professional layout with serif headings and clear rules.",
		audience: "Most industries"
	},
	modern: {
		name: "Modern",
		blurb: "Clean hierarchy, navy accents, and a contemporary single-column flow.",
		audience: "Tech and product"
	},
	minimal: {
		name: "Minimal",
		blurb: "Highly readable black-and-white design built for ATS parsers.",
		audience: "ATS-first applications"
	},
	professional: {
		name: "Professional",
		blurb: "Corporate header band and structured sections for formal roles.",
		audience: "Finance, consulting, ops"
	},
	student: {
		name: "Student",
		blurb: "Education and projects first — made for students and freshers.",
		audience: "Students and freshers"
	}
};
var DEFAULT_SETTINGS = {
	theme: "system",
	defaultTemplate: "modern",
	defaultPaperSize: "a4",
	defaultLanguage: "en"
};
function emptyPersonal() {
	return {
		fullName: "",
		title: "",
		email: "",
		phone: "",
		location: "",
		website: "",
		linkedin: "",
		github: "",
		photoDataUrl: null
	};
}
function emptyEducation() {
	return {
		id: uid(),
		institution: "",
		degree: "",
		field: "",
		startDate: "",
		endDate: "",
		grade: "",
		description: ""
	};
}
function emptyExperience() {
	return {
		id: uid(),
		jobTitle: "",
		company: "",
		location: "",
		startDate: "",
		endDate: "",
		current: false,
		bullets: [""]
	};
}
function emptySkill(name = "") {
	return {
		id: uid(),
		name,
		proficiency: null
	};
}
function emptyProject() {
	return {
		id: uid(),
		name: "",
		role: "",
		description: "",
		technologies: "",
		url: "",
		github: ""
	};
}
function emptyCertification() {
	return {
		id: uid(),
		name: "",
		issuer: "",
		date: "",
		credentialId: "",
		url: ""
	};
}
function emptyLanguage() {
	return {
		id: uid(),
		name: "",
		proficiency: "Professional"
	};
}
function enabledMap(value = true) {
	return Object.fromEntries(SECTION_IDS.map((id) => [id, value]));
}
function createResume(partial) {
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const templateId = partial?.templateId ?? "modern";
	return {
		id: uid(),
		name: "Untitled Resume",
		createdAt: now,
		updatedAt: now,
		templateId,
		atsMode: templateId === "minimal",
		paperSize: "a4",
		summary: "",
		education: [],
		experience: [],
		skills: [],
		projects: [],
		certifications: [],
		languages: [],
		achievements: [],
		interests: [],
		sectionOrder: templateId === "student" ? [...STUDENT_SECTION_ORDER] : [...DEFAULT_SECTION_ORDER],
		...partial,
		personal: {
			...emptyPersonal(),
			...partial?.personal
		},
		sectionEnabled: {
			...enabledMap(true),
			...partial?.sectionEnabled
		},
		sectionTitles: {
			...DEFAULT_SECTION_TITLES,
			...partial?.sectionTitles
		}
	};
}
function duplicateResume(source) {
	const now = (/* @__PURE__ */ new Date()).toISOString();
	return {
		...structuredClone(source),
		id: uid(),
		name: source.name.endsWith(" copy") ? `${source.name} 2` : `${source.name} copy`,
		createdAt: now,
		updatedAt: now
	};
}
function touch(resume, patch = {}) {
	return {
		...resume,
		...patch,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function isSectionVisible(resume, id) {
	if (!resume.sectionEnabled[id]) return false;
	switch (id) {
		case "summary": return Boolean(resume.summary.trim());
		case "experience": return resume.experience.some((item) => item.jobTitle || item.company);
		case "education": return resume.education.some((item) => item.institution || item.degree);
		case "skills": return resume.skills.some((item) => item.name.trim());
		case "projects": return resume.projects.some((item) => item.name.trim());
		case "certifications": return resume.certifications.some((item) => item.name.trim());
		case "languages": return resume.languages.some((item) => item.name.trim());
		case "achievements": return resume.achievements.some((item) => item.trim());
		case "interests": return resume.interests.some((item) => item.trim());
		default: return false;
	}
}
function suggestedResumeName(resume) {
	const person = resume.personal.fullName.trim();
	if (person) return `${person} Resume`;
	return resume.name || "Untitled Resume";
}
var RESUME_KEY = "besumes.resumes.v1";
var SETTINGS_KEY = "besumes.settings.v1";
function readJson(key, fallback) {
	if (typeof localStorage === "undefined") return fallback;
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function writeJson(key, value) {
	if (typeof localStorage === "undefined") return;
	localStorage.setItem(key, JSON.stringify(value));
}
function loadResumes() {
	const data = readJson(RESUME_KEY, []);
	if (!Array.isArray(data)) return [];
	return data.filter((item) => item && typeof item.id === "string");
}
function saveResumes(resumes) {
	writeJson(RESUME_KEY, resumes);
}
function loadSettings() {
	const stored = readJson(SETTINGS_KEY, {});
	return {
		...DEFAULT_SETTINGS,
		...stored
	};
}
function saveSettings(settings) {
	writeJson(SETTINGS_KEY, settings);
}
function clearAllData() {
	if (typeof localStorage === "undefined") return;
	localStorage.removeItem(RESUME_KEY);
	localStorage.removeItem(SETTINGS_KEY);
}
function isBackupFile(value) {
	if (!value || typeof value !== "object") return false;
	const v = value;
	return v.app === "besumes" && Array.isArray(v.resumes);
}
function isResumeLike(value) {
	if (!value || typeof value !== "object") return false;
	const v = value;
	return typeof v.id === "string" && typeof v.personal === "object" && v.personal !== null;
}
function normalizeImportedResume(raw) {
	const templateId = TEMPLATE_IDS.includes(raw.templateId) ? raw.templateId : "modern";
	const order = Array.isArray(raw.sectionOrder) ? raw.sectionOrder.filter((id) => SECTION_IDS.includes(id)) : [...SECTION_IDS];
	const missing = SECTION_IDS.filter((id) => !order.includes(id));
	return {
		...raw,
		templateId,
		sectionOrder: [...order, ...missing],
		atsMode: Boolean(raw.atsMode),
		paperSize: raw.paperSize === "letter" ? "letter" : "a4"
	};
}
var useSettingsStore = create((set, get) => ({
	settings: DEFAULT_SETTINGS,
	hydrated: false,
	hydrate: () => {
		if (get().hydrated) return;
		set({
			settings: loadSettings(),
			hydrated: true
		});
	},
	patch: (partial) => {
		const settings = {
			...get().settings,
			...partial
		};
		saveSettings(settings);
		set({ settings });
	},
	replace: (settings) => {
		saveSettings(settings);
		set({ settings });
	},
	reset: () => {
		saveSettings(DEFAULT_SETTINGS);
		set({ settings: DEFAULT_SETTINGS });
	}
}));
function applyTheme(theme) {
	const root = document.documentElement;
	const dark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
	root.classList.toggle("dark", dark);
	root.style.colorScheme = dark ? "dark" : "light";
}
function ThemeProvider({ children }) {
	const theme = useSettingsStore((s) => s.settings.theme);
	const hydrate = useSettingsStore((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		applyTheme(theme);
		if (theme !== "system") return;
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyTheme("system");
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, [theme]);
	return children;
}
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-foreground px-2.5 py-1.5 text-xs text-background", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
function InstallBanner() {
	const [event, setEvent] = (0, import_react.useState)(null);
	const [hidden, setHidden] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onPrompt = (e) => {
			e.preventDefault();
			setEvent(e);
		};
		window.addEventListener("beforeinstallprompt", onPrompt);
		return () => window.removeEventListener("beforeinstallprompt", onPrompt);
	}, []);
	if (!event || hidden) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-col gap-3 rounded-xl bg-card p-4 shadow-card sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: "Install Besumes"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Add it to your home screen and keep building resumes offline."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: () => setHidden(true),
				children: "Not now"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: async () => {
					await event.prompt();
					setEvent(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Install"]
			})]
		})]
	});
}
function registerServiceWorker() {
	if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
	window.addEventListener("load", () => {
		navigator.serviceWorker.register("/sw.js").catch(() => {});
	});
}
var styles_default = "/assets/styles-DS8gAaQY.css";
var APP_NAME = "Besumes";
var THEME_BOOT = `(function(){try{var s=JSON.parse(localStorage.getItem("besumes.settings.v1")||"{}");var t=s.theme||"system";var d=t==="dark"||(t==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark");document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;
if (typeof window !== "undefined") registerServiceWorker();
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Create professional, ATS-friendly resumes in minutes. Stored on your device."
			},
			{
				name: "theme-color",
				content: "#1e3a5f"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-title",
				content: APP_NAME
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		className: "antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: THEME_BOOT } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
				delayDuration: 200,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					richColors: true,
					position: "bottom-right"
				})]
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-nHPfDExn.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./dashboard-D8WfNpyW.mjs");
var Route$5 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./privacy-IwGADxsi.mjs");
var Route$4 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./settings-UoRy1f9b.mjs");
var Route$3 = createFileRoute("/settings")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./templates-DZFpHuku.mjs");
var Route$2 = createFileRoute("/templates")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./resumes-CXgeSjKx.mjs");
var Route$1 = createFileRoute("/resumes/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("../_id-SKtZl6hF.mjs");
var Route = createFileRoute("/resumes/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var DashboardRoute = Route$5.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$7
});
var PrivacyRoute = Route$4.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$7
});
var SettingsRoute = Route$3.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$7
});
var TemplatesRoute = Route$2.update({
	id: "/templates",
	path: "/templates",
	getParentRoute: () => Route$7
});
var ResumesIndexRoute = Route$1.update({
	id: "/resumes/",
	path: "/resumes/",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute,
	DashboardRoute,
	PrivacyRoute,
	SettingsRoute,
	TemplatesRoute,
	ResumesIdRoute: Route.update({
		id: "/resumes/$id",
		path: "/resumes/$id",
		getParentRoute: () => Route$7
	}),
	ResumesIndexRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { touch as C, TEMPLATE_META as E, suggestedResumeName as S, TEMPLATE_IDS as T, emptyExperience as _, clearAllData as a, emptySkill as b, loadResumes as c, saveResumes as d, DEFAULT_SETTINGS as f, emptyEducation as g, emptyCertification as h, useSettingsStore as i, loadSettings as l, duplicateResume as m, Route as n, isBackupFile as o, createResume as p, InstallBanner as r, isResumeLike as s, router_exports as t, normalizeImportedResume as u, emptyLanguage as v, LANGUAGE_LEVELS as w, isSectionVisible as x, emptyProject as y };
