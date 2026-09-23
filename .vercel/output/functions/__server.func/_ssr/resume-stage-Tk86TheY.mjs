import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { D as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { a as formatMonth, o as formatRange, r as cn } from "./button-vMB5N_4x.mjs";
import { x as isSectionVisible } from "./router-CPmPj-kl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resume-stage-Tk86TheY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contacts({ resume }) {
	const items = [
		resume.personal.email,
		resume.personal.phone,
		resume.personal.location,
		resume.personal.website,
		resume.personal.linkedin,
		resume.personal.github
	].filter(Boolean);
	if (!items.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "resume-contacts",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
	});
}
function Header({ resume }) {
	const ats = resume.atsMode;
	const showPhoto = Boolean(resume.personal.photoDataUrl) && !ats;
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "resume-header",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "resume-name",
				children: resume.personal.fullName || "Your Name"
			}),
			resume.personal.title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "resume-title",
				children: resume.personal.title
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contacts, { resume })
		] }), showPhoto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "resume-photo",
			src: resume.personal.photoDataUrl ?? "",
			alt: ""
		}) : null]
	});
	if (resume.templateId === "professional") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "resume-masthead",
		children: inner
	});
	return inner;
}
function Summary({ resume }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: resume.summary });
}
function Experience({ resume }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: resume.experience.map((item) => item.jobTitle || item.company ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "resume-entry",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "resume-entry-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "resume-entry-role",
					children: item.jobTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "resume-entry-dates",
					children: formatRange(item.startDate, item.endDate, item.current)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "resume-entry-sub",
				children: [item.company, item.location].filter(Boolean).join(" · ")
			}),
			item.bullets.some((b) => b.trim()) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "resume-bullets",
				children: item.bullets.filter((b) => b.trim()).map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: b }, i))
			}) : null
		]
	}, item.id) : null) });
}
function Education({ resume }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: resume.education.map((item) => item.institution || item.degree ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "resume-entry",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "resume-entry-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "resume-entry-role",
					children: [item.institution, item.degree].filter(Boolean).join(" · ")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "resume-entry-dates",
					children: formatRange(item.startDate, item.endDate)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "resume-entry-sub",
				children: [item.field, item.grade].filter(Boolean).join(" · ")
			}),
			item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.description }) : null
		]
	}, item.id) : null) });
}
function Skills({ resume }) {
	const names = resume.skills.map((s) => s.name.trim()).filter(Boolean);
	if (resume.templateId === "student" && !resume.atsMode) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "resume-skills",
		children: names.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "resume-chip",
			children: name
		}, name))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: names.join("  ·  ") });
}
function Projects({ resume }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: resume.projects.map((item) => item.name.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "resume-entry",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "resume-entry-head",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "resume-entry-role",
					children: item.name
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "resume-entry-sub",
				children: [item.role, item.technologies].filter(Boolean).join(" · ")
			}),
			item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.description }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "resume-muted",
				children: [item.url, item.github].filter(Boolean).join("  ·  ")
			})
		]
	}, item.id) : null) });
}
function Certifications({ resume }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: resume.certifications.map((item) => item.name.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "resume-entry",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "resume-entry-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "resume-entry-role",
				children: item.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "resume-entry-dates",
				children: formatMonth(item.date)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "resume-entry-sub",
			children: [item.issuer, item.credentialId].filter(Boolean).join(" · ")
		})]
	}, item.id) : null) });
}
function Languages({ resume }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: resume.languages.filter((l) => l.name.trim()).map((l) => `${l.name} — ${l.proficiency}`).join("  ·  ") });
}
function Achievements({ resume }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "resume-bullets",
		children: resume.achievements.filter((a) => a.trim()).map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: a }, i))
	});
}
function Interests({ resume }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: resume.interests.filter((i) => i.trim()).join("  ·  ") });
}
var SECTION_BODY = {
	summary: Summary,
	experience: Experience,
	education: Education,
	skills: Skills,
	projects: Projects,
	certifications: Certifications,
	languages: Languages,
	achievements: Achievements,
	interests: Interests
};
function ResumeDocument({ resume }) {
	const sections = resume.sectionOrder.filter((id) => isSectionVisible(resume, id));
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: sections.map((id) => {
		const Body = SECTION_BODY[id];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "resume-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "resume-h2",
				children: resume.sectionTitles[id]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { resume })]
		}, id);
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("resume-sheet", `resume-${resume.templateId}`, resume.paperSize === "letter" && "resume-letter", resume.atsMode && "resume-ats"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { resume }), resume.templateId === "professional" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "resume-body",
			children: body
		}) : body]
	});
}
function ResumeStage({ resume, className }) {
	const hostRef = (0, import_react.useRef)(null);
	const [scale, setScale] = (0, import_react.useState)(.5);
	(0, import_react.useEffect)(() => {
		const host = hostRef.current;
		if (!host) return;
		const paperWidth = resume.paperSize === "letter" ? 816 : 794;
		const update = () => {
			const width = host.clientWidth;
			setScale(Math.min(1, width / paperWidth));
		};
		update();
		const obs = new ResizeObserver(update);
		obs.observe(host);
		return () => obs.disconnect();
	}, [resume.paperSize]);
	const paperWidth = resume.paperSize === "letter" ? 816 : 794;
	const paperHeight = resume.paperSize === "letter" ? 1056 : 1123;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: hostRef,
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "resume-scale mx-auto origin-top",
			style: {
				width: paperWidth * scale,
				height: paperHeight * scale
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "print-root shadow-card origin-top",
				style: {
					width: paperWidth,
					transform: `scale(${scale})`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeDocument, { resume })
			})
		})
	});
}
//#endregion
export { ResumeStage as t };
