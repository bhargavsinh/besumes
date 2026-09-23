import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { i as useSettingsStore } from "./router-CPmPj-kl.mjs";
import { n as useResumeStore } from "./store-CVS9aPD1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-hydrate-DUnnMjGn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useHydrateApp() {
	const hydrateResumes = useResumeStore((s) => s.hydrate);
	const hydrateSettings = useSettingsStore((s) => s.hydrate);
	const resumesHydrated = useResumeStore((s) => s.hydrated);
	const settingsHydrated = useSettingsStore((s) => s.hydrated);
	(0, import_react.useEffect)(() => {
		hydrateSettings();
		hydrateResumes();
	}, [hydrateResumes, hydrateSettings]);
	return resumesHydrated && settingsHydrated;
}
//#endregion
export { useHydrateApp as t };
