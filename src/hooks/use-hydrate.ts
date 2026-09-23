import { useEffect } from "react";
import { useResumeStore } from "@/lib/resume/store";
import { useSettingsStore } from "@/lib/settings/store";

export function useHydrateApp() {
  const hydrateResumes = useResumeStore((s) => s.hydrate);
  const hydrateSettings = useSettingsStore((s) => s.hydrate);
  const resumesHydrated = useResumeStore((s) => s.hydrated);
  const settingsHydrated = useSettingsStore((s) => s.hydrated);

  useEffect(() => {
    hydrateSettings();
    hydrateResumes();
  }, [hydrateResumes, hydrateSettings]);

  return resumesHydrated && settingsHydrated;
}
