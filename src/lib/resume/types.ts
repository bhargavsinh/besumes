export const SECTION_IDS = [
  "summary",
  "experience",
  "education",
  "skills",
  "projects",
  "certifications",
  "languages",
  "achievements",
  "interests",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const TEMPLATE_IDS = [
  "classic",
  "modern",
  "minimal",
  "professional",
  "student",
] as const;

export type TemplateId = (typeof TEMPLATE_IDS)[number];

export const PAPER_SIZES = ["a4", "letter"] as const;
export type PaperSize = (typeof PAPER_SIZES)[number];

export const LANGUAGE_LEVELS = [
  "Native",
  "Fluent",
  "Professional",
  "Intermediate",
  "Basic",
] as const;
export type LanguageLevel = (typeof LANGUAGE_LEVELS)[number];

export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  photoDataUrl: string | null;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  proficiency: number | null;
}

export interface ProjectItem {
  id: string;
  name: string;
  role: string;
  description: string;
  technologies: string;
  url: string;
  github: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
}

export interface LanguageItem {
  id: string;
  name: string;
  proficiency: LanguageLevel;
}

export interface Resume {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  templateId: TemplateId;
  atsMode: boolean;
  paperSize: PaperSize;
  personal: PersonalInfo;
  summary: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
  achievements: string[];
  interests: string[];
  sectionOrder: SectionId[];
  sectionEnabled: Record<SectionId, boolean>;
  sectionTitles: Record<SectionId, string>;
}

export interface AppSettings {
  theme: "light" | "dark" | "system";
  defaultTemplate: TemplateId;
  defaultPaperSize: PaperSize;
  defaultLanguage: string;
}

export const DEFAULT_SECTION_TITLES: Record<SectionId, string> = {
  summary: "Professional Summary",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
  certifications: "Certifications",
  languages: "Languages",
  achievements: "Achievements",
  interests: "Interests",
};

export const DEFAULT_SECTION_ORDER: SectionId[] = [...SECTION_IDS];

export const STUDENT_SECTION_ORDER: SectionId[] = [
  "summary",
  "education",
  "projects",
  "skills",
  "experience",
  "certifications",
  "languages",
  "achievements",
  "interests",
];

export const TEMPLATE_META: Record<
  TemplateId,
  { name: string; blurb: string; audience: string }
> = {
  classic: {
    name: "Classic",
    blurb: "Traditional professional layout with serif headings and clear rules.",
    audience: "Most industries",
  },
  modern: {
    name: "Modern",
    blurb: "Clean hierarchy, navy accents, and a contemporary single-column flow.",
    audience: "Tech and product",
  },
  minimal: {
    name: "Minimal",
    blurb: "Highly readable black-and-white design built for ATS parsers.",
    audience: "ATS-first applications",
  },
  professional: {
    name: "Professional",
    blurb: "Corporate header band and structured sections for formal roles.",
    audience: "Finance, consulting, ops",
  },
  student: {
    name: "Student",
    blurb: "Education and projects first — made for students and freshers.",
    audience: "Students and freshers",
  },
};
