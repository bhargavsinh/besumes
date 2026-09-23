import { o as __toESM } from "../_runtime.mjs";
import { a as formatMonth, o as formatRange } from "./button-vMB5N_4x.mjs";
import { S as suggestedResumeName, x as isSectionVisible } from "./router-CPmPj-kl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pdf-nOKFMC-L.js
function paletteFor(template, ats) {
	if (ats || template === "minimal") return {
		ink: [
			28,
			25,
			23
		],
		muted: [
			87,
			83,
			78
		],
		accent: [
			28,
			25,
			23
		],
		rule: [
			214,
			211,
			209
		],
		headerBg: null,
		headerFg: [
			28,
			25,
			23
		],
		font: "times"
	};
	if (template === "classic") return {
		ink: [
			28,
			25,
			23
		],
		muted: [
			87,
			83,
			78
		],
		accent: [
			28,
			25,
			23
		],
		rule: [
			168,
			162,
			158
		],
		headerBg: null,
		headerFg: [
			28,
			25,
			23
		],
		font: "times"
	};
	if (template === "professional") return {
		ink: [
			28,
			25,
			23
		],
		muted: [
			87,
			83,
			78
		],
		accent: [
			30,
			58,
			95
		],
		rule: [
			203,
			213,
			225
		],
		headerBg: [
			30,
			58,
			95
		],
		headerFg: [
			246,
			244,
			240
		],
		font: "helvetica"
	};
	if (template === "student") return {
		ink: [
			28,
			25,
			23
		],
		muted: [
			87,
			83,
			78
		],
		accent: [
			30,
			58,
			95
		],
		rule: [
			214,
			211,
			209
		],
		headerBg: null,
		headerFg: [
			28,
			25,
			23
		],
		font: "helvetica"
	};
	return {
		ink: [
			28,
			25,
			23
		],
		muted: [
			87,
			83,
			78
		],
		accent: [
			30,
			58,
			95
		],
		rule: [
			203,
			213,
			225
		],
		headerBg: null,
		headerFg: [
			28,
			25,
			23
		],
		font: "helvetica"
	};
}
async function downloadResumePdf(resume) {
	if (typeof window === "undefined") return;
	const name = resume.personal.fullName.trim();
	if (!name) throw new Error("Please enter your name before exporting your resume.");
	const { jsPDF } = await import("../_libs/jspdf.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
	const doc = new jsPDF({
		unit: "mm",
		format: resume.paperSize === "letter" ? "letter" : "a4",
		orientation: "portrait"
	});
	const pageW = doc.internal.pageSize.getWidth();
	const pageH = doc.internal.pageSize.getHeight();
	const margin = 16;
	const maxW = pageW - 32;
	const pal = paletteFor(resume.templateId, resume.atsMode);
	const ats = resume.atsMode || resume.templateId === "minimal";
	let y = margin;
	const ensure = (need) => {
		if (y + need > pageH - margin) {
			doc.addPage();
			y = margin;
		}
	};
	const setFace = (style = "normal", size = 10) => {
		doc.setFont(pal.font, style);
		doc.setFontSize(size);
	};
	const ink = () => doc.setTextColor(...pal.ink);
	const muted = () => doc.setTextColor(...pal.muted);
	const paragraph = (text, width = maxW, size = 10, leading = 4.6) => {
		if (!text.trim()) return;
		setFace("normal", size);
		ink();
		const lines = doc.splitTextToSize(text.trim(), width);
		for (const line of lines) {
			ensure(leading);
			doc.text(line, margin, y);
			y += leading;
		}
	};
	const rule = () => {
		doc.setDrawColor(...pal.rule);
		doc.setLineWidth(.2);
		doc.line(margin, y, pageW - margin, y);
		y += 4;
	};
	const heading = (label) => {
		ensure(12);
		y += 3;
		setFace("bold", 11);
		doc.setTextColor(...pal.accent);
		const title = ats ? label.toUpperCase() : label;
		doc.text(title, margin, y);
		y += 2.2;
		if (resume.templateId === "professional" && !ats) {
			doc.setFillColor(...pal.accent);
			doc.rect(margin, y, 12, .7, "F");
			y += 4;
		} else rule();
	};
	const contactBits = [
		resume.personal.email,
		resume.personal.phone,
		resume.personal.location,
		resume.personal.website,
		resume.personal.linkedin,
		resume.personal.github
	].filter(Boolean);
	const showPhoto = Boolean(resume.personal.photoDataUrl) && !ats && resume.templateId !== "minimal";
	if (pal.headerBg) {
		doc.setFillColor(...pal.headerBg);
		doc.rect(0, 0, pageW, showPhoto ? 42 : 36, "F");
		doc.setTextColor(...pal.headerFg);
		setFace("bold", 20);
		doc.text(name, margin, 16);
		if (resume.personal.title) {
			setFace("normal", 11);
			doc.text(resume.personal.title, margin, 23);
		}
		setFace("normal", 8.5);
		const contact = doc.splitTextToSize(contactBits.join("  ·  "), maxW - (showPhoto ? 28 : 0));
		doc.text(contact, margin, 30);
		if (showPhoto && resume.personal.photoDataUrl) try {
			doc.addImage(resume.personal.photoDataUrl, "JPEG", pageW - margin - 22, 8, 22, 22);
		} catch {}
		y = 46;
	} else {
		if (showPhoto && resume.personal.photoDataUrl) try {
			doc.addImage(resume.personal.photoDataUrl, "JPEG", pageW - margin - 22, y, 22, 22);
		} catch {}
		const center = resume.templateId === "classic";
		setFace("bold", resume.templateId === "student" ? 22 : 20);
		ink();
		if (center) doc.text(name, pageW / 2, y + 4, { align: "center" });
		else doc.text(name, margin, y + 4);
		y += 11;
		if (resume.personal.title) {
			setFace(resume.templateId === "classic" ? "italic" : "normal", 11);
			muted();
			if (center) doc.text(resume.personal.title, pageW / 2, y, { align: "center" });
			else doc.text(resume.personal.title, margin, y);
			y += 6;
		}
		setFace("normal", 8.5);
		muted();
		const line = contactBits.join("  ·  ");
		const wrapped = doc.splitTextToSize(line, maxW - (showPhoto ? 26 : 0));
		if (center) for (const row of wrapped) {
			doc.text(row, pageW / 2, y, { align: "center" });
			y += 4;
		}
		else for (const row of wrapped) {
			doc.text(row, margin, y);
			y += 4;
		}
		y += 2;
		rule();
	}
	const renderSection = (id) => {
		if (!isSectionVisible(resume, id)) return;
		const title = resume.sectionTitles[id] || id;
		if (id === "summary") {
			heading(title);
			paragraph(resume.summary, maxW, 10, 4.7);
			return;
		}
		if (id === "experience") {
			heading(title);
			for (const item of resume.experience) {
				if (!item.jobTitle && !item.company) continue;
				ensure(16);
				setFace("bold", 10.5);
				ink();
				doc.text(item.jobTitle || item.company, margin, y);
				const dates = formatRange(item.startDate, item.endDate, item.current);
				if (dates) {
					setFace("normal", 9);
					muted();
					doc.text(dates, pageW - margin, y, { align: "right" });
				}
				y += 4.6;
				const sub = [item.company, item.location].filter(Boolean).join(" · ");
				if (sub) {
					setFace("italic", 9.5);
					muted();
					doc.text(sub, margin, y);
					y += 4.4;
				}
				for (const bullet of item.bullets.filter((b) => b.trim())) {
					const lines = doc.splitTextToSize(bullet.trim(), maxW - 5);
					ensure(lines.length * 4.4 + 1);
					setFace("normal", 10);
					ink();
					doc.circle(17.1, y - 1.1, .55, "F");
					doc.text(lines, 20.2, y);
					y += lines.length * 4.4;
				}
				y += 2.2;
			}
			return;
		}
		if (id === "education") {
			heading(title);
			for (const item of resume.education) {
				if (!item.institution && !item.degree) continue;
				ensure(14);
				setFace("bold", 10.5);
				ink();
				const left = [
					item.institution,
					item.degree,
					item.field
				].filter(Boolean).join(" · ");
				doc.text(left, margin, y);
				const dates = formatRange(item.startDate, item.endDate);
				if (dates) {
					setFace("normal", 9);
					muted();
					doc.text(dates, pageW - margin, y, { align: "right" });
				}
				y += 4.6;
				const meta = item.grade;
				if (meta) {
					setFace("normal", 9.5);
					muted();
					doc.text(meta, margin, y);
					y += 4.2;
				}
				if (item.description) paragraph(item.description, maxW, 10, 4.4);
				y += 1.6;
			}
			return;
		}
		if (id === "skills") {
			heading(title);
			const names = resume.skills.map((s) => s.name.trim()).filter(Boolean);
			paragraph(names.join("  ·  "), maxW, 10, 4.6);
			return;
		}
		if (id === "projects") {
			heading(title);
			for (const item of resume.projects) {
				if (!item.name.trim()) continue;
				ensure(14);
				setFace("bold", 10.5);
				ink();
				doc.text(item.name, margin, y);
				y += 4.5;
				const sub = [item.role, item.technologies].filter(Boolean).join(" · ");
				if (sub) {
					setFace("italic", 9.5);
					muted();
					doc.text(sub, margin, y);
					y += 4.3;
				}
				if (item.description) paragraph(item.description, maxW, 10, 4.4);
				const links = [item.url, item.github].filter(Boolean).join("  ·  ");
				if (links) {
					setFace("normal", 8.5);
					muted();
					paragraph(links, maxW, 8.5, 4);
				}
				y += 1.8;
			}
			return;
		}
		if (id === "certifications") {
			heading(title);
			for (const item of resume.certifications) {
				if (!item.name.trim()) continue;
				ensure(10);
				setFace("bold", 10);
				ink();
				doc.text(item.name, margin, y);
				const date = formatMonth(item.date);
				if (date) {
					setFace("normal", 9);
					muted();
					doc.text(date, pageW - margin, y, { align: "right" });
				}
				y += 4.4;
				const sub = [item.issuer, item.credentialId].filter(Boolean).join(" · ");
				if (sub) {
					setFace("normal", 9.5);
					muted();
					doc.text(sub, margin, y);
					y += 4.2;
				}
				y += 1.2;
			}
			return;
		}
		if (id === "languages") {
			heading(title);
			const line = resume.languages.filter((l) => l.name.trim()).map((l) => `${l.name} — ${l.proficiency}`).join("  ·  ");
			paragraph(line, maxW, 10, 4.6);
			return;
		}
		if (id === "achievements") {
			heading(title);
			for (const item of resume.achievements.filter((a) => a.trim())) {
				const lines = doc.splitTextToSize(item.trim(), maxW - 5);
				ensure(lines.length * 4.4 + 1);
				setFace("normal", 10);
				ink();
				doc.circle(17.1, y - 1.1, .55, "F");
				doc.text(lines, 20.2, y);
				y += lines.length * 4.4 + .8;
			}
			return;
		}
		if (id === "interests") {
			heading(title);
			paragraph(resume.interests.filter((i) => i.trim()).join("  ·  "), maxW, 10, 4.6);
		}
	};
	for (const id of resume.sectionOrder) renderSection(id);
	const filename = `${suggestedResumeName(resume).replace(/[\\/:*?"<>|]+/g, "-")}.pdf`;
	doc.save(filename);
}
//#endregion
export { downloadResumePdf as t };
