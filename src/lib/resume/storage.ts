import { DEFAULT_SETTINGS } from "./factory";
import type { AppSettings, Resume } from "./types";
import { SECTION_IDS, TEMPLATE_IDS } from "./types";

const RESUME_KEY = "besumes.resumes.v1";
const SETTINGS_KEY = "besumes.settings.v1";
export const STORAGE_VERSION = 1;

export interface BackupFile {
  app: "besumes";
  version: number;
  exportedAt: string;
  resumes: Resume[];
  settings?: AppSettings;
}

function readJson<T>(key: string, fallback: T): T {
  if (typeof localStorage === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadResumes(): Resume[] {
  const data = readJson<Resume[]>(RESUME_KEY, []);
  if (!Array.isArray(data)) return [];
  return data.filter((item) => item && typeof item.id === "string");
}

export function saveResumes(resumes: Resume[]) {
  writeJson(RESUME_KEY, resumes);
}

export function loadSettings(): AppSettings {
  const stored = readJson<Partial<AppSettings>>(SETTINGS_KEY, {});
  return { ...DEFAULT_SETTINGS, ...stored };
}

export function saveSettings(settings: AppSettings) {
  writeJson(SETTINGS_KEY, settings);
}

export function clearAllData() {
  if (typeof localStorage === "undefined") return;
  localStorage.removeItem(RESUME_KEY);
  localStorage.removeItem(SETTINGS_KEY);
}

export function isBackupFile(value: unknown): value is BackupFile {
  if (!value || typeof value !== "object") return false;
  const v = value as BackupFile;
  return v.app === "besumes" && Array.isArray(v.resumes);
}

export function isResumeLike(value: unknown): value is Resume {
  if (!value || typeof value !== "object") return false;
  const v = value as Resume;
  return typeof v.id === "string" && typeof v.personal === "object" && v.personal !== null;
}

export function normalizeImportedResume(raw: Resume): Resume {
  const templateId = TEMPLATE_IDS.includes(raw.templateId) ? raw.templateId : "modern";
  const order = Array.isArray(raw.sectionOrder)
    ? raw.sectionOrder.filter((id): id is Resume["sectionOrder"][number] =>
        (SECTION_IDS as readonly string[]).includes(id),
      )
    : [...SECTION_IDS];
  const missing = SECTION_IDS.filter((id) => !order.includes(id));
  return {
    ...raw,
    templateId,
    sectionOrder: [...order, ...missing],
    atsMode: Boolean(raw.atsMode),
    paperSize: raw.paperSize === "letter" ? "letter" : "a4",
  };
}
