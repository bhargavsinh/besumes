import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { D as require_jsx_runtime } from "./_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { c as resizeImageFile, i as downloadText, r as cn, t as Button } from "./_ssr/button-vMB5N_4x.mjs";
import { y as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { C as ChevronUp, T as Check, a as Trash2, d as Plus, g as GripVertical, p as LoaderCircle, r as Upload, t as X, u as Printer, w as ChevronDown, x as Download } from "./_libs/lucide-react.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { E as TEMPLATE_META, S as suggestedResumeName, T as TEMPLATE_IDS, _ as emptyExperience, b as emptySkill, g as emptyEducation, h as emptyCertification, n as Route, v as emptyLanguage, w as LANGUAGE_LEVELS, y as emptyProject } from "./_ssr/router-CPmPj-kl.mjs";
import { t as AppShell } from "./_ssr/app-shell-hirKunKP.mjs";
import { t as downloadResumePdf } from "./_ssr/pdf-nOKFMC-L.mjs";
import { n as useResumeStore } from "./_ssr/store-CVS9aPD1.mjs";
import { t as ResumeStage } from "./_ssr/resume-stage-Tk86TheY.mjs";
import { a as SelectTrigger, i as SelectItem, n as Select, o as SelectValue, r as SelectContent, t as Label } from "./_ssr/select-C8Zp2-iB.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "./_libs/radix-ui__react-tabs.mjs";
import { n as SwitchThumb, t as Switch$1 } from "./_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-SKtZl6hF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-11 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex min-h-9 flex-1 items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-3 focus-visible:outline-none", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block size-5 rounded-full bg-card shadow-sm transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function Field({ id, label, hint, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-2", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: id,
				children: label
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: hint
			}) : null
		]
	});
}
function TextField({ id, label, value, onChange, placeholder, type = "text", hint, optional }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		id,
		label: optional ? `${label} (optional)` : label,
		hint,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			type,
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value),
			autoComplete: "off"
		})
	});
}
function AreaField({ id, label, value, onChange, placeholder, hint, rows = 5 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		id,
		label,
		hint,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
			id,
			value,
			rows,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		})
	});
}
function CardBlock({ title, children, onAdd, addLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-card p-4 shadow-card sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-base font-semibold",
				children: title
			}), onAdd ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				variant: "outline",
				type: "button",
				onClick: onAdd,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), addLabel]
			}) : null]
		}), children]
	});
}
function ItemChrome({ onRemove, onUp, onDown, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 rounded-lg border border-border p-3 last:mb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex justify-end gap-1",
			children: [
				onUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					type: "button",
					onClick: onUp,
					"aria-label": "Move up",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
				}) : null,
				onDown ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					type: "button",
					onClick: onDown,
					"aria-label": "Move down",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					type: "button",
					onClick: onRemove,
					"aria-label": "Remove",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
				})
			]
		}), children]
	});
}
function move(list, index, dir) {
	const next = [...list];
	const target = index + dir;
	if (target < 0 || target >= next.length) return list;
	const [item] = next.splice(index, 1);
	next.splice(target, 0, item);
	return next;
}
function PersonalForm({ resume, patch }) {
	const fileRef = (0, import_react.useRef)(null);
	const p = resume.personal;
	const set = (key, value) => patch((r) => ({
		...r,
		personal: {
			...r.personal,
			[key]: value
		}
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBlock, {
		title: "Personal information",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "fullName",
					label: "Full name",
					value: p.fullName,
					onChange: (v) => set("fullName", v),
					placeholder: "Aisha Rahman"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "title",
					label: "Professional title",
					value: p.title,
					onChange: (v) => set("title", v),
					placeholder: "Product Designer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "email",
					label: "Email",
					type: "email",
					value: p.email,
					onChange: (v) => set("email", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "phone",
					label: "Phone",
					type: "tel",
					value: p.phone,
					onChange: (v) => set("phone", v),
					optional: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "location",
					label: "Location",
					value: p.location,
					onChange: (v) => set("location", v),
					placeholder: "San Francisco, CA",
					optional: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "website",
					label: "Website",
					value: p.website,
					onChange: (v) => set("website", v),
					optional: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "linkedin",
					label: "LinkedIn",
					value: p.linkedin,
					onChange: (v) => set("linkedin", v),
					optional: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "github",
					label: "GitHub",
					value: p.github,
					onChange: (v) => set("github", v),
					optional: true
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-center gap-4",
			children: [p.photoDataUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: p.photoDataUrl,
				alt: "",
				className: "size-16 rounded-md object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-16 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground",
				children: "Photo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: "image/*",
						className: "sr-only",
						onChange: async (e) => {
							const file = e.target.files?.[0];
							e.target.value = "";
							if (!file) return;
							try {
								const data = await resizeImageFile(file);
								set("photoDataUrl", data);
							} catch {
								toast.error("That image could not be added. Try a smaller JPG or PNG.");
							}
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: () => fileRef.current?.click(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), "Upload photo"]
					}),
					p.photoDataUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						onClick: () => set("photoDataUrl", null),
						children: "Remove"
					}) : null
				]
			})]
		})]
	});
}
function SummaryForm({ resume, patch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBlock, {
		title: "Professional summary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaField, {
			id: "summary",
			label: "Summary",
			value: resume.summary,
			onChange: (summary) => patch((r) => ({
				...r,
				summary
			})),
			hint: "Write 2–4 sentences describing your professional background, strengths and career goals.",
			placeholder: "Product designer with a focus on calm, trustworthy career tools…"
		})
	});
}
function EducationForm({ resume, patch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBlock, {
		title: "Education",
		addLabel: "Add education",
		onAdd: () => patch((r) => ({
			...r,
			education: [...r.education, emptyEducation()]
		})),
		children: [resume.education.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No education yet. Add your first school or program."
		}) : null, resume.education.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemChrome, {
			onRemove: () => patch((r) => ({
				...r,
				education: r.education.filter((e) => e.id !== item.id)
			})),
			onUp: () => patch((r) => ({
				...r,
				education: move(r.education, index, -1)
			})),
			onDown: () => patch((r) => ({
				...r,
				education: move(r.education, index, 1)
			})),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-inst`,
						label: "Institution",
						value: item.institution,
						onChange: (institution) => patch((r) => ({
							...r,
							education: r.education.map((e) => e.id === item.id ? {
								...e,
								institution
							} : e)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-deg`,
						label: "Degree",
						value: item.degree,
						onChange: (degree) => patch((r) => ({
							...r,
							education: r.education.map((e) => e.id === item.id ? {
								...e,
								degree
							} : e)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-field`,
						label: "Field of study",
						value: item.field,
						onChange: (field) => patch((r) => ({
							...r,
							education: r.education.map((e) => e.id === item.id ? {
								...e,
								field
							} : e)
						})),
						optional: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-grade`,
						label: "Grade / CGPA",
						value: item.grade,
						onChange: (grade) => patch((r) => ({
							...r,
							education: r.education.map((e) => e.id === item.id ? {
								...e,
								grade
							} : e)
						})),
						optional: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-start`,
						label: "Start date",
						type: "month",
						value: item.startDate,
						onChange: (startDate) => patch((r) => ({
							...r,
							education: r.education.map((e) => e.id === item.id ? {
								...e,
								startDate
							} : e)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-end`,
						label: "End date",
						type: "month",
						value: item.endDate,
						onChange: (endDate) => patch((r) => ({
							...r,
							education: r.education.map((e) => e.id === item.id ? {
								...e,
								endDate
							} : e)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaField, {
						id: `${item.id}-desc`,
						label: "Description",
						value: item.description,
						onChange: (description) => patch((r) => ({
							...r,
							education: r.education.map((e) => e.id === item.id ? {
								...e,
								description
							} : e)
						})),
						rows: 3
					})
				]
			})
		}, item.id))]
	});
}
function ExperienceForm({ resume, patch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBlock, {
		title: "Experience",
		addLabel: "Add experience",
		onAdd: () => patch((r) => ({
			...r,
			experience: [...r.experience, emptyExperience()]
		})),
		children: [resume.experience.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No roles yet. Add internships, jobs, or freelance work."
		}) : null, resume.experience.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ItemChrome, {
			onRemove: () => patch((r) => ({
				...r,
				experience: r.experience.filter((e) => e.id !== item.id)
			})),
			onUp: () => patch((r) => ({
				...r,
				experience: move(r.experience, index, -1)
			})),
			onDown: () => patch((r) => ({
				...r,
				experience: move(r.experience, index, 1)
			})),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-title`,
						label: "Job title",
						value: item.jobTitle,
						onChange: (jobTitle) => patch((r) => ({
							...r,
							experience: r.experience.map((e) => e.id === item.id ? {
								...e,
								jobTitle
							} : e)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-co`,
						label: "Company",
						value: item.company,
						onChange: (company) => patch((r) => ({
							...r,
							experience: r.experience.map((e) => e.id === item.id ? {
								...e,
								company
							} : e)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-loc`,
						label: "Location",
						value: item.location,
						onChange: (location) => patch((r) => ({
							...r,
							experience: r.experience.map((e) => e.id === item.id ? {
								...e,
								location
							} : e)
						})),
						optional: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							id: `${item.id}-cur`,
							checked: item.current,
							onCheckedChange: (current) => patch((r) => ({
								...r,
								experience: r.experience.map((e) => e.id === item.id ? {
									...e,
									current,
									endDate: current ? "" : e.endDate
								} : e)
							}))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: `${item.id}-cur`,
							children: "Currently working"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-start`,
						label: "Start date",
						type: "month",
						value: item.startDate,
						onChange: (startDate) => patch((r) => ({
							...r,
							experience: r.experience.map((e) => e.id === item.id ? {
								...e,
								startDate
							} : e)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-end`,
						label: "End date",
						type: "month",
						value: item.endDate,
						onChange: (endDate) => patch((r) => ({
							...r,
							experience: r.experience.map((e) => e.id === item.id ? {
								...e,
								endDate
							} : e)
						}))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Responsibilities and achievements" }),
					item.bullets.map((bullet, bi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: bullet,
							placeholder: "Led redesign of the applicant workspace…",
							onChange: (e) => patch((r) => ({
								...r,
								experience: r.experience.map((ex) => ex.id === item.id ? {
									...ex,
									bullets: ex.bullets.map((b, i) => i === bi ? e.target.value : b)
								} : ex)
							}))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "icon",
							variant: "ghost",
							"aria-label": "Remove bullet",
							onClick: () => patch((r) => ({
								...r,
								experience: r.experience.map((ex) => ex.id === item.id ? {
									...ex,
									bullets: ex.bullets.filter((_, i) => i !== bi)
								} : ex)
							})),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}, bi)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "self-start",
						onClick: () => patch((r) => ({
							...r,
							experience: r.experience.map((ex) => ex.id === item.id ? {
								...ex,
								bullets: [...ex.bullets, ""]
							} : ex)
						})),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add bullet"]
					})
				]
			})]
		}, item.id))]
	});
}
function SkillsForm({ resume, patch }) {
	const [draft, setDraft] = (0, import_react.useState)("");
	const add = () => {
		const name = draft.trim();
		if (!name) return;
		patch((r) => ({
			...r,
			skills: [...r.skills, emptySkill(name)]
		}));
		setDraft("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBlock, {
		title: "Skills",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: draft,
				placeholder: "Add a skill and press Enter",
				onChange: (e) => setDraft(e.target.value),
				onKeyDown: (e) => {
					if (e.key === "Enter") {
						e.preventDefault();
						add();
					}
				},
				"aria-label": "New skill"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				onClick: add,
				children: "Add"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 flex flex-wrap gap-2",
			children: resume.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-1 rounded-full border border-border bg-secondary px-3 py-1 text-sm",
				children: [skill.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-full p-1 hover:bg-muted",
					"aria-label": `Remove ${skill.name}`,
					onClick: () => patch((r) => ({
						...r,
						skills: r.skills.filter((s) => s.id !== skill.id)
					})),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				})]
			}, skill.id))
		})]
	});
}
function ProjectsForm({ resume, patch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBlock, {
		title: "Projects",
		addLabel: "Add project",
		onAdd: () => patch((r) => ({
			...r,
			projects: [...r.projects, emptyProject()]
		})),
		children: resume.projects.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemChrome, {
			onRemove: () => patch((r) => ({
				...r,
				projects: r.projects.filter((p) => p.id !== item.id)
			})),
			onUp: () => patch((r) => ({
				...r,
				projects: move(r.projects, index, -1)
			})),
			onDown: () => patch((r) => ({
				...r,
				projects: move(r.projects, index, 1)
			})),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-name`,
						label: "Project name",
						value: item.name,
						onChange: (name) => patch((r) => ({
							...r,
							projects: r.projects.map((p) => p.id === item.id ? {
								...p,
								name
							} : p)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-role`,
						label: "Role",
						value: item.role,
						onChange: (role) => patch((r) => ({
							...r,
							projects: r.projects.map((p) => p.id === item.id ? {
								...p,
								role
							} : p)
						})),
						optional: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-tech`,
						label: "Technologies",
						value: item.technologies,
						onChange: (technologies) => patch((r) => ({
							...r,
							projects: r.projects.map((p) => p.id === item.id ? {
								...p,
								technologies
							} : p)
						})),
						optional: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-url`,
						label: "Project URL",
						value: item.url,
						onChange: (url) => patch((r) => ({
							...r,
							projects: r.projects.map((p) => p.id === item.id ? {
								...p,
								url
							} : p)
						})),
						optional: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-gh`,
						label: "GitHub URL",
						value: item.github,
						onChange: (github) => patch((r) => ({
							...r,
							projects: r.projects.map((p) => p.id === item.id ? {
								...p,
								github
							} : p)
						})),
						optional: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaField, {
						id: `${item.id}-desc`,
						label: "Description",
						value: item.description,
						onChange: (description) => patch((r) => ({
							...r,
							projects: r.projects.map((p) => p.id === item.id ? {
								...p,
								description
							} : p)
						})),
						rows: 3
					})
				]
			})
		}, item.id))
	});
}
function CertificationsForm({ resume, patch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBlock, {
		title: "Certifications",
		addLabel: "Add certification",
		onAdd: () => patch((r) => ({
			...r,
			certifications: [...r.certifications, emptyCertification()]
		})),
		children: resume.certifications.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemChrome, {
			onRemove: () => patch((r) => ({
				...r,
				certifications: r.certifications.filter((c) => c.id !== item.id)
			})),
			onUp: () => patch((r) => ({
				...r,
				certifications: move(r.certifications, index, -1)
			})),
			onDown: () => patch((r) => ({
				...r,
				certifications: move(r.certifications, index, 1)
			})),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-name`,
						label: "Certificate name",
						value: item.name,
						onChange: (name) => patch((r) => ({
							...r,
							certifications: r.certifications.map((c) => c.id === item.id ? {
								...c,
								name
							} : c)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-iss`,
						label: "Issuing organization",
						value: item.issuer,
						onChange: (issuer) => patch((r) => ({
							...r,
							certifications: r.certifications.map((c) => c.id === item.id ? {
								...c,
								issuer
							} : c)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-date`,
						label: "Issue date",
						type: "month",
						value: item.date,
						onChange: (date) => patch((r) => ({
							...r,
							certifications: r.certifications.map((c) => c.id === item.id ? {
								...c,
								date
							} : c)
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-cid`,
						label: "Credential ID",
						value: item.credentialId,
						onChange: (credentialId) => patch((r) => ({
							...r,
							certifications: r.certifications.map((c) => c.id === item.id ? {
								...c,
								credentialId
							} : c)
						})),
						optional: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: `${item.id}-url`,
						label: "Credential URL",
						value: item.url,
						onChange: (url) => patch((r) => ({
							...r,
							certifications: r.certifications.map((c) => c.id === item.id ? {
								...c,
								url
							} : c)
						})),
						optional: true
					})
				]
			})
		}, item.id))
	});
}
function LanguagesForm({ resume, patch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBlock, {
		title: "Languages",
		addLabel: "Add language",
		onAdd: () => patch((r) => ({
			...r,
			languages: [...r.languages, emptyLanguage()]
		})),
		children: resume.languages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 grid gap-2 sm:grid-cols-[1fr_10rem_auto] sm:items-end",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: `${item.id}-name`,
					label: "Language",
					value: item.name,
					onChange: (name) => patch((r) => ({
						...r,
						languages: r.languages.map((l) => l.id === item.id ? {
							...l,
							name
						} : l)
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Proficiency",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: item.proficiency,
						onValueChange: (proficiency) => patch((r) => ({
							...r,
							languages: r.languages.map((l) => l.id === item.id ? {
								...l,
								proficiency
							} : l)
						})),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							"aria-label": "Proficiency",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: LANGUAGE_LEVELS.map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: level,
							children: level
						}, level)) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					size: "icon",
					variant: "ghost",
					"aria-label": "Remove language",
					onClick: () => patch((r) => ({
						...r,
						languages: r.languages.filter((l) => l.id !== item.id)
					})),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
				})
			]
		}, item.id))
	});
}
function ListNotesForm({ title, values, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBlock, {
		title,
		addLabel: "Add",
		onAdd: () => onChange([...values, ""]),
		children: [values.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Nothing here yet."
		}) : null, values.map((value, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value,
				placeholder,
				onChange: (e) => onChange(values.map((v, i) => i === index ? e.target.value : v))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				size: "icon",
				variant: "ghost",
				"aria-label": "Remove",
				onClick: () => onChange(values.filter((_, i) => i !== index)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		}, index))]
	});
}
function MetaForm({ resume, patch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBlock, {
		title: "Resume options",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "resume-name",
					label: "Resume name",
					value: resume.name,
					onChange: (name) => patch((r) => ({
						...r,
						name
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Template",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: resume.templateId,
						onValueChange: (templateId) => patch((r) => ({
							...r,
							templateId
						})),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							"aria-label": "Template",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: TEMPLATE_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: id,
							children: TEMPLATE_META[id].name
						}, id)) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Paper size",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: resume.paperSize,
						onValueChange: (paperSize) => patch((r) => ({
							...r,
							paperSize
						})),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							"aria-label": "Paper size",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "a4",
							children: "A4"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "letter",
							children: "Letter"
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "ats",
						children: "ATS-friendly resume"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Standard headings, no decorative graphics."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						id: "ats",
						checked: resume.atsMode,
						onCheckedChange: (atsMode) => patch((r) => ({
							...r,
							atsMode
						}))
					})]
				})
			]
		})
	});
}
function SectionManager({ resume, patch }) {
	const [dragging, setDragging] = (0, import_react.useState)(null);
	const reorder = (from, to) => {
		if (from === to) return;
		patch((r) => {
			const order = [...r.sectionOrder];
			const fi = order.indexOf(from);
			const ti = order.indexOf(to);
			if (fi < 0 || ti < 0) return r;
			order.splice(fi, 1);
			order.splice(ti, 0, from);
			return {
				...r,
				sectionOrder: order
			};
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBlock, {
		title: "Sections",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-sm text-muted-foreground",
			children: "Drag to reorder, or use this list to rename and hide sections. Empty sections stay hidden on the resume automatically."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2",
			children: resume.sectionOrder.map((id, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				draggable: true,
				onDragStart: () => setDragging(id),
				onDragOver: (e) => e.preventDefault(),
				onDrop: () => {
					if (dragging) reorder(dragging, id);
					setDragging(null);
				},
				onDragEnd: () => setDragging(null),
				className: cn("flex items-center gap-2 rounded-lg border border-border bg-background px-2 py-2", dragging === id && "opacity-60"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cursor-grab text-muted-foreground",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						"aria-label": `${id} section title`,
						value: resume.sectionTitles[id],
						onChange: (e) => patch((r) => ({
							...r,
							sectionTitles: {
								...r.sectionTitles,
								[id]: e.target.value
							}
						})),
						className: "h-9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "icon",
							variant: "ghost",
							"aria-label": "Move section up",
							onClick: () => {
								const order = [...resume.sectionOrder];
								if (index === 0) return;
								[order[index - 1], order[index]] = [order[index], order[index - 1]];
								patch((r) => ({
									...r,
									sectionOrder: order
								}));
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "icon",
							variant: "ghost",
							"aria-label": "Move section down",
							onClick: () => {
								const order = [...resume.sectionOrder];
								if (index === order.length - 1) return;
								[order[index + 1], order[index]] = [order[index], order[index + 1]];
								patch((r) => ({
									...r,
									sectionOrder: order
								}));
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: resume.sectionEnabled[id],
						onCheckedChange: (on) => patch((r) => ({
							...r,
							sectionEnabled: {
								...r.sectionEnabled,
								[id]: on
							}
						})),
						"aria-label": `Show ${resume.sectionTitles[id]}`
					})
				]
			}, id))
		})]
	});
}
function BuilderWorkspace({ id }) {
	const navigate = useNavigate();
	const hydrate = useResumeStore((s) => s.hydrate);
	const hydrated = useResumeStore((s) => s.hydrated);
	const resume = useResumeStore((s) => s.resumes.find((r) => r.id === id));
	const update = useResumeStore((s) => s.update);
	const exportOne = useResumeStore((s) => s.exportOne);
	const saveStatus = useResumeStore((s) => s.saveStatus);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		if (hydrated && !resume) {
			toast.error("That resume could not be found.");
			navigate({ to: "/resumes" });
		}
	}, [
		hydrated,
		resume,
		navigate
	]);
	if (!resume) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Resume",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading resume…"
		})
	});
	const patch = (updater) => update(resume.id, updater);
	const onPdf = async () => {
		setBusy(true);
		try {
			await downloadResumePdf(resume);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Something went wrong while generating the PDF. Please try again.");
		} finally {
			setBusy(false);
		}
	};
	const actions = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden items-center gap-1 text-xs text-muted-foreground sm:flex",
			children: saveStatus === "saving" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }), "Saving…"] }) : saveStatus === "error" ? "Couldn’t save" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), "Saved"] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			size: "sm",
			type: "button",
			onClick: () => window.print(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Print"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			size: "sm",
			type: "button",
			onClick: onPdf,
			disabled: busy,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Download PDF"]
		})
	] });
	const editor = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaForm, {
				resume,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalForm, {
				resume,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryForm, {
				resume,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceForm, {
				resume,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationForm, {
				resume,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsForm, {
				resume,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsForm, {
				resume,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationsForm, {
				resume,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagesForm, {
				resume,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListNotesForm, {
				title: "Achievements",
				values: resume.achievements,
				onChange: (achievements) => patch((r) => ({
					...r,
					achievements
				})),
				placeholder: "Award, publication, or result"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListNotesForm, {
				title: "Interests",
				values: resume.interests,
				onChange: (interests) => patch((r) => ({
					...r,
					interests
				})),
				placeholder: "Typography, running, mentoring"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionManager, {
				resume,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => {
						const data = exportOne(resume.id);
						if (!data) return;
						downloadText(`${suggestedResumeName(resume)}.json`, JSON.stringify(data, null, 2));
					},
					children: "Export resume data"
				})
			})
		]
	});
	const preview = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:sticky lg:top-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "no-print mb-3 hidden text-xs text-muted-foreground lg:block",
			children: ["Live preview · ", resume.paperSize.toUpperCase()]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeStage, { resume })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: resume.name || "Resume",
		actions,
		wide: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "edit",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "no-print w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "edit",
							children: "Edit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "preview",
							children: "Preview"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "edit",
						className: "no-print",
						children: editor
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "preview",
						children: preview
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden grid-cols-[minmax(0,1fr)_minmax(20rem,34rem)] gap-8 lg:grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print",
				children: editor
			}), preview]
		})]
	});
}
function BuilderPage() {
	const { id } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuilderWorkspace, { id });
}
//#endregion
export { BuilderPage as component };
