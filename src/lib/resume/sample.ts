import { createResume } from "./factory";
import { uid } from "@/lib/utils";
import type { Resume } from "./types";

export function createSampleResume(): Resume {
  return createResume({
    name: "Aisha Rahman — Product Resume",
    templateId: "modern",
    atsMode: false,
    personal: {
      fullName: "Aisha Rahman",
      title: "Product Designer",
      email: "aisha.rahman@email.com",
      phone: "+1 (415) 555-0148",
      location: "San Francisco, CA",
      website: "aisharahman.design",
      linkedin: "linkedin.com/in/aisharahman",
      github: "github.com/aisharahman",
      photoDataUrl: null,
    },
    summary:
      "Product designer with 4 years of experience shaping end-to-end product surfaces for career and productivity tools. I combine research, systems thinking, and precise visual craft to ship interfaces that stay clear under pressure. Looking to help a focused product team turn complex workflows into calm, trustworthy software.",
    experience: [
      {
        id: uid(),
        jobTitle: "Product Designer",
        company: "Northline",
        location: "San Francisco, CA",
        startDate: "2023-03",
        endDate: "",
        current: true,
        bullets: [
          "Led redesign of the applicant workspace used by 80k monthly active users, lifting task completion by 18%.",
          "Built a shared component language with engineering, cutting design-to-dev handoff time in half.",
          "Ran quarterly research with hiring managers and candidates to prioritize accessibility and ATS-safe layouts.",
        ],
      },
      {
        id: uid(),
        jobTitle: "UI Designer",
        company: "Fieldnote",
        location: "Remote",
        startDate: "2021-07",
        endDate: "2023-02",
        current: false,
        bullets: [
          "Designed onboarding, billing, and settings for a B2B notes product used by distributed teams.",
          "Introduced content guidelines that reduced support tickets about unclear empty states by 22%.",
        ],
      },
    ],
    education: [
      {
        id: uid(),
        institution: "California College of the Arts",
        degree: "B.F.A.",
        field: "Graphic Design",
        startDate: "2017-08",
        endDate: "2021-05",
        grade: "3.8 GPA",
        description: "Capstone: hiring-toolkit design system for first-generation job seekers.",
      },
    ],
    skills: [
      { id: uid(), name: "Product design", proficiency: 90 },
      { id: uid(), name: "Figma", proficiency: 95 },
      { id: uid(), name: "Design systems", proficiency: 88 },
      { id: uid(), name: "User research", proficiency: 80 },
      { id: uid(), name: "HTML / CSS", proficiency: 70 },
      { id: uid(), name: "Accessibility", proficiency: 85 },
    ],
    projects: [
      {
        id: uid(),
        name: "Hirepath",
        role: "Lead designer",
        description:
          "A guided resume and cover-letter studio for students. Focused on plain-language prompts and print-faithful preview.",
        technologies: "Figma, React, Tailwind CSS",
        url: "https://hirepath.example",
        github: "",
      },
    ],
    certifications: [
      {
        id: uid(),
        name: "NN/g UX Certification",
        issuer: "Nielsen Norman Group",
        date: "2024-04",
        credentialId: "NN-UX-20418",
        url: "",
      },
    ],
    languages: [
      { id: uid(), name: "English", proficiency: "Professional" },
      { id: uid(), name: "Hindi", proficiency: "Native" },
      { id: uid(), name: "Urdu", proficiency: "Fluent" },
    ],
    achievements: [
      "Speaker, Config 2025 — “Print-faithful product design”",
      "Internal design excellence award, Northline, 2024",
    ],
    interests: ["Editorial typography", "Long-distance running", "Community design critiques"],
  });
}
