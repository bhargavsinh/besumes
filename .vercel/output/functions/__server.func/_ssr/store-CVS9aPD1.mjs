import { l as uid } from "./button-vMB5N_4x.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { C as touch, a as clearAllData, c as loadResumes, d as saveResumes, f as DEFAULT_SETTINGS, i as useSettingsStore, l as loadSettings, m as duplicateResume, o as isBackupFile, p as createResume, s as isResumeLike, u as normalizeImportedResume } from "./router-CPmPj-kl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-CVS9aPD1.js
function createSampleResume() {
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
			photoDataUrl: null
		},
		summary: "Product designer with 4 years of experience shaping end-to-end product surfaces for career and productivity tools. I combine research, systems thinking, and precise visual craft to ship interfaces that stay clear under pressure. Looking to help a focused product team turn complex workflows into calm, trustworthy software.",
		experience: [{
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
				"Ran quarterly research with hiring managers and candidates to prioritize accessibility and ATS-safe layouts."
			]
		}, {
			id: uid(),
			jobTitle: "UI Designer",
			company: "Fieldnote",
			location: "Remote",
			startDate: "2021-07",
			endDate: "2023-02",
			current: false,
			bullets: ["Designed onboarding, billing, and settings for a B2B notes product used by distributed teams.", "Introduced content guidelines that reduced support tickets about unclear empty states by 22%."]
		}],
		education: [{
			id: uid(),
			institution: "California College of the Arts",
			degree: "B.F.A.",
			field: "Graphic Design",
			startDate: "2017-08",
			endDate: "2021-05",
			grade: "3.8 GPA",
			description: "Capstone: hiring-toolkit design system for first-generation job seekers."
		}],
		skills: [
			{
				id: uid(),
				name: "Product design",
				proficiency: 90
			},
			{
				id: uid(),
				name: "Figma",
				proficiency: 95
			},
			{
				id: uid(),
				name: "Design systems",
				proficiency: 88
			},
			{
				id: uid(),
				name: "User research",
				proficiency: 80
			},
			{
				id: uid(),
				name: "HTML / CSS",
				proficiency: 70
			},
			{
				id: uid(),
				name: "Accessibility",
				proficiency: 85
			}
		],
		projects: [{
			id: uid(),
			name: "Hirepath",
			role: "Lead designer",
			description: "A guided resume and cover-letter studio for students. Focused on plain-language prompts and print-faithful preview.",
			technologies: "Figma, React, Tailwind CSS",
			url: "https://hirepath.example",
			github: ""
		}],
		certifications: [{
			id: uid(),
			name: "NN/g UX Certification",
			issuer: "Nielsen Norman Group",
			date: "2024-04",
			credentialId: "NN-UX-20418",
			url: ""
		}],
		languages: [
			{
				id: uid(),
				name: "English",
				proficiency: "Professional"
			},
			{
				id: uid(),
				name: "Hindi",
				proficiency: "Native"
			},
			{
				id: uid(),
				name: "Urdu",
				proficiency: "Fluent"
			}
		],
		achievements: ["Speaker, Config 2025 — “Print-faithful product design”", "Internal design excellence award, Northline, 2024"],
		interests: [
			"Editorial typography",
			"Long-distance running",
			"Community design critiques"
		]
	});
}
var saveTimer = null;
var useResumeStore = create((set, get) => ({
	resumes: [],
	hydrated: false,
	saveStatus: "idle",
	hydrate: () => {
		if (get().hydrated) return;
		set({
			resumes: loadResumes(),
			hydrated: true,
			saveStatus: "saved"
		});
	},
	persist: (resumes) => {
		set({
			resumes,
			saveStatus: "saving"
		});
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
			atsMode: (templateId ?? settings.defaultTemplate) === "minimal"
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
		const resumes = get().resumes.map((item) => item.id === id ? touch(updater(item)) : item);
		get().persist(resumes);
	},
	replace: (resume) => {
		if (!get().hydrated) get().hydrate();
		const resumes = get().resumes.some((item) => item.id === resume.id) ? get().resumes.map((item) => item.id === resume.id ? touch(resume) : item) : [touch(resume), ...get().resumes];
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
		const incoming = [];
		if (isBackupFile(raw)) {
			incoming.push(...raw.resumes.filter(isResumeLike).map(normalizeImportedResume));
			if (raw.settings) useSettingsStore.getState().replace({
				...DEFAULT_SETTINGS,
				...raw.settings
			});
		} else if (isResumeLike(raw)) incoming.push(normalizeImportedResume(raw));
		else if (Array.isArray(raw)) incoming.push(...raw.filter(isResumeLike).map(normalizeImportedResume));
		else throw new Error("That file does not look like Besumes resume data.");
		if (!incoming.length) throw new Error("No resumes were found in that file.");
		const stamped = incoming.map((item) => touch({
			...item,
			id: item.id || crypto.randomUUID()
		}));
		get().persist([...stamped, ...get().resumes]);
		return { added: stamped.length };
	},
	exportAll: () => ({
		app: "besumes",
		version: 1,
		exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
		resumes: get().resumes,
		settings: loadSettings()
	}),
	exportOne: (id) => {
		const resume = get().resumes.find((item) => item.id === id);
		if (!resume) return null;
		return {
			app: "besumes",
			version: 1,
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
			resumes: [resume]
		};
	},
	wipe: () => {
		clearAllData();
		useSettingsStore.getState().reset();
		set({
			resumes: [],
			saveStatus: "saved"
		});
	},
	getById: (id) => get().resumes.find((item) => item.id === id)
}));
//#endregion
export { useResumeStore as n, createSampleResume as t };
