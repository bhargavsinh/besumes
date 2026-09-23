import { create } from "zustand";
import { DEFAULT_SETTINGS } from "@/lib/resume/factory";
import { loadSettings, saveSettings } from "@/lib/resume/storage";
import type { AppSettings } from "@/lib/resume/types";

interface SettingsState {
  settings: AppSettings;
  hydrated: boolean;
  hydrate: () => void;
  patch: (partial: Partial<AppSettings>) => void;
  replace: (settings: AppSettings) => void;
  reset: () => void;
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  settings: DEFAULT_SETTINGS,
  hydrated: false,
  hydrate: () => {
    if (get().hydrated) return;
    set({ settings: loadSettings(), hydrated: true });
  },
  patch: (partial) => {
    const settings = { ...get().settings, ...partial };
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
  },
}));
