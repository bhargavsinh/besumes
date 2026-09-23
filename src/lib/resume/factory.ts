import { uid } from "@/lib/utils";
import {
  DEFAULT_SECTION_ORDER,
  DEFAULT_SECTION_TITLES,
  SECTION_IDS,
  STUDENT_SECTION_ORDER,
  type AppSettings,
  type CertificationItem,
  type EducationItem,
  type ExperienceItem,
  type LanguageItem,
  type PersonalInfo,
  type ProjectItem,
  type Resume,
  type SectionId,
  type SkillItem,
  type TemplateId,
} from "./types";

export const DEFAULT_SETTINGS: AppSettings = {
  theme: "system",
  defaultTemplate: "modern",
  defaultPaperSize: "a4",
  defaultLanguage: "en",
};

export function emptyPersonal(): PersonalInfo {
  return {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
    photoDataUrl: null,
  };
}

export function emptyEducation(): EducationItem {
  return {
    id: uid(),
    institution: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
    grade: "",
    description: "",
  };
}

export function emptyExperience(): ExperienceItem {
  return {
    id: uid(),
    jobTitle: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    bullets: [""],
  };
}

export function emptySkill(name = ""): SkillItem {
  return { id: uid(), name, proficiency: null };
}

export function emptyProject(): ProjectItem {
  return {
    id: uid(),
    name: "",
    role: "",
    description: "",
    technologies: "",
    url: "",
    github: "",
  };
}

export function emptyCertification(): CertificationItem {
  return {
    id: uid(),
    name: "",
    issuer: "",
    date: "",
    credentialId: "",
    url: "",
  };
}

export function emptyLanguage(): LanguageItem {
  return { id: uid(), name: "", proficiency: "Professional" };
}

export function enabledMap(value = true): Record<SectionId, boolean> {
  return Object.fromEntries(SECTION_IDS.map((id) => [id, value])) as Record<
    SectionId,
    boolean
  >;
}

export function createResume(partial?: Partial<Resume> & { templateId?: TemplateId }): Resume {
  const now = new Date().toISOString();
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
    sectionOrder:
      templateId === "student" ? [...STUDENT_SECTION_ORDER] : [...DEFAULT_SECTION_ORDER],
    ...partial,
    personal: { ...emptyPersonal(), ...partial?.personal },
    sectionEnabled: { ...enabledMap(true), ...partial?.sectionEnabled },
    sectionTitles: { ...DEFAULT_SECTION_TITLES, ...partial?.sectionTitles },
  };
}

export function duplicateResume(source: Resume): Resume {
  const now = new Date().toISOString();
  return {
    ...structuredClone(source),
    id: uid(),
    name: source.name.endsWith(" copy") ? `${source.name} 2` : `${source.name} copy`,
    createdAt: now,
    updatedAt: now,
  };
}

export function touch(resume: Resume, patch: Partial<Resume> = {}): Resume {
  return {
    ...resume,
    ...patch,
    updatedAt: new Date().toISOString(),
  };
}

export function hasContent(resume: Resume): boolean {
  const p = resume.personal;
  return Boolean(
    p.fullName ||
      p.title ||
      p.email ||
      resume.summary ||
      resume.education.length ||
      resume.experience.length ||
      resume.skills.length ||
      resume.projects.length,
  );
}

export function isSectionVisible(resume: Resume, id: SectionId): boolean {
  if (!resume.sectionEnabled[id]) return false;
  switch (id) {
    case "summary":
      return Boolean(resume.summary.trim());
    case "experience":
      return resume.experience.some((item) => item.jobTitle || item.company);
    case "education":
      return resume.education.some((item) => item.institution || item.degree);
    case "skills":
      return resume.skills.some((item) => item.name.trim());
    case "projects":
      return resume.projects.some((item) => item.name.trim());
    case "certifications":
      return resume.certifications.some((item) => item.name.trim());
    case "languages":
      return resume.languages.some((item) => item.name.trim());
    case "achievements":
      return resume.achievements.some((item) => item.trim());
    case "interests":
      return resume.interests.some((item) => item.trim());
    default:
      return false;
  }
}

export function suggestedResumeName(resume: Resume): string {
  const person = resume.personal.fullName.trim();
  if (person) return `${person} Resume`;
  return resume.name || "Untitled Resume";
}
