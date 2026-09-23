import { create } from "zustand";
import {
  createResume,
  duplicateResume,
  touch,
} from "./factory";
import { createSampleResume } from "./sample";
import {
  clearAllData,
  isBackupFile,
  isResumeLike,
  loadResumes,
  loadSettings,
  normalizeImportedResume,
  saveResumes,
  type BackupFile,
} from "./storage";
import type { Resume } from "./types";
import { DEFAULT_SETTINGS } from "./factory";
import { useSettingsStore } from "@/lib/settings/store";

type SaveStatus = "idle" | "saving" | "saved" | "error";

interface ResumeState {
  resumes: Resume[];
  hydrated: boolean;
  saveStatus: SaveStatus;
  hydrate: () => void;
  persist: (resumes: Resume[]) => void;
  createNew: (templateId?: Resume["templateId"]) => Resume;
  createFromSample: () => Resume;
  update: (id: string, updater: (resume: Resume) => Resume) => void;
  replace: (resume: Resume) => void;
  duplicate: (id: string) => Resume | null;
  remove: (id: string) => void;
  importPayload: (raw: unknown) => { added: number };
  exportAll: () => BackupFile;
  exportOne: (id: string) => BackupFile | null;
  wipe: () => void;
  getById: (id: string) => Resume | undefined;
}

let saveTimer: ReturnType<typeof setTimeout> | null = null;

export const useResumeStore = create<ResumeState>((set, get) => ({
  resumes: [],
  hydrated: false,
  saveStatus: "idle",
  hydrate: () => {
    if (get().hydrated) return;
    set({ resumes: loadResumes(), hydrated: true, saveStatus: "saved" });
  },
  persist: (resumes) => {
    set({ resumes, saveStatus: "saving" });
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try {
        saveResumes(resumes);
        set({ saveStatus: "saved" });
      } catch {
        set({ saveStatus: "error" });
      }
    }, 280);
  },
  createNew: (templateId) => {
    if (!get().hydrated) get().hydrate();
    const settings = useSettingsStore.getState().settings;
    const resume = createResume({
      templateId: templateId ?? settings.defaultTemplate,
      paperSize: settings.defaultPaperSize,
      atsMode: (templateId ?? settings.defaultTemplate) === "minimal",
    });
    get().persist([resume, ...get().resumes]);
    return resume;
  },
  createFromSample: () => {
    if (!get().hydrated) get().hydrate();
    const resume = createSampleResume();
    get().persist([resume, ...get().resumes]);
    return resume;
  },
  update: (id, updater) => {
    if (!get().hydrated) get().hydrate();
    const resumes = get().resumes.map((item) =>
      item.id === id ? touch(updater(item)) : item,
    );
    get().persist(resumes);
  },
  replace: (resume) => {
    if (!get().hydrated) get().hydrate();
    const exists = get().resumes.some((item) => item.id === resume.id);
    const resumes = exists
      ? get().resumes.map((item) => (item.id === resume.id ? touch(resume) : item))
      : [touch(resume), ...get().resumes];
    get().persist(resumes);
  },
  duplicate: (id) => {
    if (!get().hydrated) get().hydrate();
    const source = get().resumes.find((item) => item.id === id);
    if (!source) return null;
    const copy = duplicateResume(source);
    get().persist([copy, ...get().resumes]);
    return copy;
  },
  remove: (id) => {
    if (!get().hydrated) get().hydrate();
    get().persist(get().resumes.filter((item) => item.id !== id));
  },
  importPayload: (raw) => {
    if (!get().hydrated) get().hydrate();
    const incoming: Resume[] = [];
    if (isBackupFile(raw)) {
      incoming.push(...raw.resumes.filter(isResumeLike).map(normalizeImportedResume));
      if (raw.settings) {
        useSettingsStore.getState().replace({ ...DEFAULT_SETTINGS, ...raw.settings });
      }
    } else if (isResumeLike(raw)) {
      incoming.push(normalizeImportedResume(raw));
    } else if (Array.isArray(raw)) {
      incoming.push(...raw.filter(isResumeLike).map(normalizeImportedResume));
    } else {
      throw new Error("That file does not look like Besumes resume data.");
    }
    if (!incoming.length) {
      throw new Error("No resumes were found in that file.");
    }
    const stamped = incoming.map((item) =>
      touch({
        ...item,
        id: item.id || crypto.randomUUID(),
      }),
    );
    get().persist([...stamped, ...get().resumes]);
    return { added: stamped.length };
  },
  exportAll: () => ({
    app: "besumes",
    version: 1,
    exportedAt: new Date().toISOString(),
    resumes: get().resumes,
    settings: loadSettings(),
  }),
  exportOne: (id) => {
    const resume = get().resumes.find((item) => item.id === id);
    if (!resume) return null;
    return {
      app: "besumes",
      version: 1,
      exportedAt: new Date().toISOString(),
      resumes: [resume],
    };
  },
  wipe: () => {
    clearAllData();
    useSettingsStore.getState().reset();
    set({ resumes: [], saveStatus: "saved" });
  },
  getById: (id) => get().resumes.find((item) => item.id === id),
}));
