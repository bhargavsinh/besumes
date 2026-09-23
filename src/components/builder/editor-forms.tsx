import { useRef, useState, type ReactNode } from "react";
import {
  ChevronDown,
  ChevronUp,
  GripVertical,
  Plus,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AreaField, Field, TextField } from "./field";
import {
  emptyCertification,
  emptyEducation,
  emptyExperience,
  emptyLanguage,
  emptyProject,
  emptySkill,
} from "@/lib/resume/factory";
import {
  LANGUAGE_LEVELS,
  TEMPLATE_IDS,
  TEMPLATE_META,
  type Resume,
  type SectionId,
} from "@/lib/resume/types";
import { cn, resizeImageFile } from "@/lib/utils";
import { toast } from "sonner";

type Patch = (updater: (resume: Resume) => Resume) => void;

function CardBlock({
  title,
  children,
  onAdd,
  addLabel,
}: {
  title: string;
  children: ReactNode;
  onAdd?: () => void;
  addLabel?: string;
}) {
  return (
    <section className="rounded-xl bg-card p-4 shadow-card sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold">{title}</h2>
        {onAdd ? (
          <Button size="sm" variant="outline" type="button" onClick={onAdd}>
            <Plus className="size-4" />
            {addLabel}
          </Button>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function ItemChrome({
  onRemove,
  onUp,
  onDown,
  children,
}: {
  onRemove: () => void;
  onUp?: () => void;
  onDown?: () => void;
  children: ReactNode;
}) {
  return (
    <div className="mb-3 rounded-lg border border-border p-3 last:mb-0">
      <div className="mb-3 flex justify-end gap-1">
        {onUp ? (
          <Button size="icon" variant="ghost" type="button" onClick={onUp} aria-label="Move up">
            <ChevronUp className="size-4" />
          </Button>
        ) : null}
        {onDown ? (
          <Button size="icon" variant="ghost" type="button" onClick={onDown} aria-label="Move down">
            <ChevronDown className="size-4" />
          </Button>
        ) : null}
        <Button
          size="icon"
          variant="ghost"
          type="button"
          onClick={onRemove}
          aria-label="Remove"
        >
          <Trash2 className="size-4" />
        </Button>
      </div>
      {children}
    </div>
  );
}

function move<T>(list: T[], index: number, dir: -1 | 1): T[] {
  const next = [...list];
  const target = index + dir;
  if (target < 0 || target >= next.length) return list;
  const [item] = next.splice(index, 1);
  next.splice(target, 0, item);
  return next;
}

export function PersonalForm({ resume, patch }: { resume: Resume; patch: Patch }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const p = resume.personal;

  const set = (key: keyof Resume["personal"], value: string | null) =>
    patch((r) => ({ ...r, personal: { ...r.personal, [key]: value } }));

  return (
    <CardBlock title="Personal information">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          id="fullName"
          label="Full name"
          value={p.fullName}
          onChange={(v) => set("fullName", v)}
          placeholder="Aisha Rahman"
        />
        <TextField
          id="title"
          label="Professional title"
          value={p.title}
          onChange={(v) => set("title", v)}
          placeholder="Product Designer"
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={p.email}
          onChange={(v) => set("email", v)}
        />
        <TextField
          id="phone"
          label="Phone"
          type="tel"
          value={p.phone}
          onChange={(v) => set("phone", v)}
          optional
        />
        <TextField
          id="location"
          label="Location"
          value={p.location}
          onChange={(v) => set("location", v)}
          placeholder="San Francisco, CA"
          optional
        />
        <TextField
          id="website"
          label="Website"
          value={p.website}
          onChange={(v) => set("website", v)}
          optional
        />
        <TextField
          id="linkedin"
          label="LinkedIn"
          value={p.linkedin}
          onChange={(v) => set("linkedin", v)}
          optional
        />
        <TextField
          id="github"
          label="GitHub"
          value={p.github}
          onChange={(v) => set("github", v)}
          optional
        />
      </div>
      <div className="mt-4 flex items-center gap-4">
        {p.photoDataUrl ? (
          <img
            src={p.photoDataUrl}
            alt=""
            className="size-16 rounded-md object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
          />
        ) : (
          <div className="flex size-16 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
            Photo
          </div>
        )}
        <div className="flex flex-col gap-2">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              e.target.value = "";
              if (!file) return;
              try {
                const data = await resizeImageFile(file);
                set("photoDataUrl", data);
              } catch {
                toast.error("That image could not be added. Try a smaller JPG or PNG.");
              }
            }}
          />
          <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
            <Upload className="size-4" />
            Upload photo
          </Button>
          {p.photoDataUrl ? (
            <Button type="button" variant="ghost" size="sm" onClick={() => set("photoDataUrl", null)}>
              Remove
            </Button>
          ) : null}
        </div>
      </div>
    </CardBlock>
  );
}

export function SummaryForm({ resume, patch }: { resume: Resume; patch: Patch }) {
  return (
    <CardBlock title="Professional summary">
      <AreaField
        id="summary"
        label="Summary"
        value={resume.summary}
        onChange={(summary) => patch((r) => ({ ...r, summary }))}
        hint="Write 2–4 sentences describing your professional background, strengths and career goals."
        placeholder="Product designer with a focus on calm, trustworthy career tools…"
      />
    </CardBlock>
  );
}

export function EducationForm({ resume, patch }: { resume: Resume; patch: Patch }) {
  return (
    <CardBlock
      title="Education"
      addLabel="Add education"
      onAdd={() => patch((r) => ({ ...r, education: [...r.education, emptyEducation()] }))}
    >
      {resume.education.length === 0 ? (
        <p className="text-sm text-muted-foreground">No education yet. Add your first school or program.</p>
      ) : null}
      {resume.education.map((item, index) => (
        <ItemChrome
          key={item.id}
          onRemove={() =>
            patch((r) => ({ ...r, education: r.education.filter((e) => e.id !== item.id) }))
          }
          onUp={() => patch((r) => ({ ...r, education: move(r.education, index, -1) }))}
          onDown={() => patch((r) => ({ ...r, education: move(r.education, index, 1) }))}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <TextField
              id={`${item.id}-inst`}
              label="Institution"
              value={item.institution}
              onChange={(institution) =>
                patch((r) => ({
                  ...r,
                  education: r.education.map((e) => (e.id === item.id ? { ...e, institution } : e)),
                }))
              }
            />
            <TextField
              id={`${item.id}-deg`}
              label="Degree"
              value={item.degree}
              onChange={(degree) =>
                patch((r) => ({
                  ...r,
                  education: r.education.map((e) => (e.id === item.id ? { ...e, degree } : e)),
                }))
              }
            />
            <TextField
              id={`${item.id}-field`}
              label="Field of study"
              value={item.field}
              onChange={(field) =>
                patch((r) => ({
                  ...r,
                  education: r.education.map((e) => (e.id === item.id ? { ...e, field } : e)),
                }))
              }
              optional
            />
            <TextField
              id={`${item.id}-grade`}
              label="Grade / CGPA"
              value={item.grade}
              onChange={(grade) =>
                patch((r) => ({
                  ...r,
                  education: r.education.map((e) => (e.id === item.id ? { ...e, grade } : e)),
                }))
              }
              optional
            />
            <TextField
              id={`${item.id}-start`}
              label="Start date"
              type="month"
              value={item.startDate}
              onChange={(startDate) =>
                patch((r) => ({
                  ...r,
                  education: r.education.map((e) => (e.id === item.id ? { ...e, startDate } : e)),
                }))
              }
            />
            <TextField
              id={`${item.id}-end`}
              label="End date"
              type="month"
              value={item.endDate}
              onChange={(endDate) =>
                patch((r) => ({
                  ...r,
                  education: r.education.map((e) => (e.id === item.id ? { ...e, endDate } : e)),
                }))
              }
            />
            <AreaField
              id={`${item.id}-desc`}
              label="Description"
              value={item.description}
              onChange={(description) =>
                patch((r) => ({
                  ...r,
                  education: r.education.map((e) => (e.id === item.id ? { ...e, description } : e)),
                }))
              }
              rows={3}
            />
          </div>
        </ItemChrome>
      ))}
    </CardBlock>
  );
}

export function ExperienceForm({ resume, patch }: { resume: Resume; patch: Patch }) {
  return (
    <CardBlock
      title="Experience"
      addLabel="Add experience"
      onAdd={() => patch((r) => ({ ...r, experience: [...r.experience, emptyExperience()] }))}
    >
      {resume.experience.length === 0 ? (
        <p className="text-sm text-muted-foreground">No roles yet. Add internships, jobs, or freelance work.</p>
      ) : null}
      {resume.experience.map((item, index) => (
        <ItemChrome
          key={item.id}
          onRemove={() =>
            patch((r) => ({ ...r, experience: r.experience.filter((e) => e.id !== item.id) }))
          }
          onUp={() => patch((r) => ({ ...r, experience: move(r.experience, index, -1) }))}
          onDown={() => patch((r) => ({ ...r, experience: move(r.experience, index, 1) }))}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <TextField
              id={`${item.id}-title`}
              label="Job title"
              value={item.jobTitle}
              onChange={(jobTitle) =>
                patch((r) => ({
                  ...r,
                  experience: r.experience.map((e) => (e.id === item.id ? { ...e, jobTitle } : e)),
                }))
              }
            />
            <TextField
              id={`${item.id}-co`}
              label="Company"
              value={item.company}
              onChange={(company) =>
                patch((r) => ({
                  ...r,
                  experience: r.experience.map((e) => (e.id === item.id ? { ...e, company } : e)),
                }))
              }
            />
            <TextField
              id={`${item.id}-loc`}
              label="Location"
              value={item.location}
              onChange={(location) =>
                patch((r) => ({
                  ...r,
                  experience: r.experience.map((e) => (e.id === item.id ? { ...e, location } : e)),
                }))
              }
              optional
            />
            <div className="flex items-center gap-3 pt-6">
              <Switch
                id={`${item.id}-cur`}
                checked={item.current}
                onCheckedChange={(current) =>
                  patch((r) => ({
                    ...r,
                    experience: r.experience.map((e) =>
                      e.id === item.id ? { ...e, current, endDate: current ? "" : e.endDate } : e,
                    ),
                  }))
                }
              />
              <Label htmlFor={`${item.id}-cur`}>Currently working</Label>
            </div>
            <TextField
              id={`${item.id}-start`}
              label="Start date"
              type="month"
              value={item.startDate}
              onChange={(startDate) =>
                patch((r) => ({
                  ...r,
                  experience: r.experience.map((e) => (e.id === item.id ? { ...e, startDate } : e)),
                }))
              }
            />
            <TextField
              id={`${item.id}-end`}
              label="End date"
              type="month"
              value={item.endDate}
              onChange={(endDate) =>
                patch((r) => ({
                  ...r,
                  experience: r.experience.map((e) => (e.id === item.id ? { ...e, endDate } : e)),
                }))
              }
            />
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <Label>Responsibilities and achievements</Label>
            {item.bullets.map((bullet, bi) => (
              <div key={bi} className="flex gap-2">
                <Input
                  value={bullet}
                  placeholder="Led redesign of the applicant workspace…"
                  onChange={(e) =>
                    patch((r) => ({
                      ...r,
                      experience: r.experience.map((ex) =>
                        ex.id === item.id
                          ? {
                              ...ex,
                              bullets: ex.bullets.map((b, i) => (i === bi ? e.target.value : b)),
                            }
                          : ex,
                      ),
                    }))
                  }
                />
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label="Remove bullet"
                  onClick={() =>
                    patch((r) => ({
                      ...r,
                      experience: r.experience.map((ex) =>
                        ex.id === item.id
                          ? { ...ex, bullets: ex.bullets.filter((_, i) => i !== bi) }
                          : ex,
                      ),
                    }))
                  }
                >
                  <X className="size-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="self-start"
              onClick={() =>
                patch((r) => ({
                  ...r,
                  experience: r.experience.map((ex) =>
                    ex.id === item.id ? { ...ex, bullets: [...ex.bullets, ""] } : ex,
                  ),
                }))
              }
            >
              <Plus className="size-4" />
              Add bullet
            </Button>
          </div>
        </ItemChrome>
      ))}
    </CardBlock>
  );
}

export function SkillsForm({ resume, patch }: { resume: Resume; patch: Patch }) {
  const [draft, setDraft] = useState("");
  const add = () => {
    const name = draft.trim();
    if (!name) return;
    patch((r) => ({ ...r, skills: [...r.skills, emptySkill(name)] }));
    setDraft("");
  };
  return (
    <CardBlock title="Skills">
      <div className="flex gap-2">
        <Input
          value={draft}
          placeholder="Add a skill and press Enter"
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
          aria-label="New skill"
        />
        <Button type="button" onClick={add}>
          Add
        </Button>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {resume.skills.map((skill) => (
          <li
            key={skill.id}
            className="flex items-center gap-1 rounded-full border border-border bg-secondary px-3 py-1 text-sm"
          >
            {skill.name}
            <button
              type="button"
              className="rounded-full p-1 hover:bg-muted"
              aria-label={`Remove ${skill.name}`}
              onClick={() =>
                patch((r) => ({ ...r, skills: r.skills.filter((s) => s.id !== skill.id) }))
              }
            >
              <X className="size-3.5" />
            </button>
          </li>
        ))}
      </ul>
    </CardBlock>
  );
}

export function ProjectsForm({ resume, patch }: { resume: Resume; patch: Patch }) {
  return (
    <CardBlock
      title="Projects"
      addLabel="Add project"
      onAdd={() => patch((r) => ({ ...r, projects: [...r.projects, emptyProject()] }))}
    >
      {resume.projects.map((item, index) => (
        <ItemChrome
          key={item.id}
          onRemove={() =>
            patch((r) => ({ ...r, projects: r.projects.filter((p) => p.id !== item.id) }))
          }
          onUp={() => patch((r) => ({ ...r, projects: move(r.projects, index, -1) }))}
          onDown={() => patch((r) => ({ ...r, projects: move(r.projects, index, 1) }))}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <TextField
              id={`${item.id}-name`}
              label="Project name"
              value={item.name}
              onChange={(name) =>
                patch((r) => ({
                  ...r,
                  projects: r.projects.map((p) => (p.id === item.id ? { ...p, name } : p)),
                }))
              }
            />
            <TextField
              id={`${item.id}-role`}
              label="Role"
              value={item.role}
              onChange={(role) =>
                patch((r) => ({
                  ...r,
                  projects: r.projects.map((p) => (p.id === item.id ? { ...p, role } : p)),
                }))
              }
              optional
            />
            <TextField
              id={`${item.id}-tech`}
              label="Technologies"
              value={item.technologies}
              onChange={(technologies) =>
                patch((r) => ({
                  ...r,
                  projects: r.projects.map((p) => (p.id === item.id ? { ...p, technologies } : p)),
                }))
              }
              optional
            />
            <TextField
              id={`${item.id}-url`}
              label="Project URL"
              value={item.url}
              onChange={(url) =>
                patch((r) => ({
                  ...r,
                  projects: r.projects.map((p) => (p.id === item.id ? { ...p, url } : p)),
                }))
              }
              optional
            />
            <TextField
              id={`${item.id}-gh`}
              label="GitHub URL"
              value={item.github}
              onChange={(github) =>
                patch((r) => ({
                  ...r,
                  projects: r.projects.map((p) => (p.id === item.id ? { ...p, github } : p)),
                }))
              }
              optional
            />
            <AreaField
              id={`${item.id}-desc`}
              label="Description"
              value={item.description}
              onChange={(description) =>
                patch((r) => ({
                  ...r,
                  projects: r.projects.map((p) => (p.id === item.id ? { ...p, description } : p)),
                }))
              }
              rows={3}
            />
          </div>
        </ItemChrome>
      ))}
    </CardBlock>
  );
}

export function CertificationsForm({ resume, patch }: { resume: Resume; patch: Patch }) {
  return (
    <CardBlock
      title="Certifications"
      addLabel="Add certification"
      onAdd={() =>
        patch((r) => ({ ...r, certifications: [...r.certifications, emptyCertification()] }))
      }
    >
      {resume.certifications.map((item, index) => (
        <ItemChrome
          key={item.id}
          onRemove={() =>
            patch((r) => ({
              ...r,
              certifications: r.certifications.filter((c) => c.id !== item.id),
            }))
          }
          onUp={() => patch((r) => ({ ...r, certifications: move(r.certifications, index, -1) }))}
          onDown={() => patch((r) => ({ ...r, certifications: move(r.certifications, index, 1) }))}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <TextField
              id={`${item.id}-name`}
              label="Certificate name"
              value={item.name}
              onChange={(name) =>
                patch((r) => ({
                  ...r,
                  certifications: r.certifications.map((c) =>
                    c.id === item.id ? { ...c, name } : c,
                  ),
                }))
              }
            />
            <TextField
              id={`${item.id}-iss`}
              label="Issuing organization"
              value={item.issuer}
              onChange={(issuer) =>
                patch((r) => ({
                  ...r,
                  certifications: r.certifications.map((c) =>
                    c.id === item.id ? { ...c, issuer } : c,
                  ),
                }))
              }
            />
            <TextField
              id={`${item.id}-date`}
              label="Issue date"
              type="month"
              value={item.date}
              onChange={(date) =>
                patch((r) => ({
                  ...r,
                  certifications: r.certifications.map((c) =>
                    c.id === item.id ? { ...c, date } : c,
                  ),
                }))
              }
            />
            <TextField
              id={`${item.id}-cid`}
              label="Credential ID"
              value={item.credentialId}
              onChange={(credentialId) =>
                patch((r) => ({
                  ...r,
                  certifications: r.certifications.map((c) =>
                    c.id === item.id ? { ...c, credentialId } : c,
                  ),
                }))
              }
              optional
            />
            <TextField
              id={`${item.id}-url`}
              label="Credential URL"
              value={item.url}
              onChange={(url) =>
                patch((r) => ({
                  ...r,
                  certifications: r.certifications.map((c) =>
                    c.id === item.id ? { ...c, url } : c,
                  ),
                }))
              }
              optional
            />
          </div>
        </ItemChrome>
      ))}
    </CardBlock>
  );
}

export function LanguagesForm({ resume, patch }: { resume: Resume; patch: Patch }) {
  return (
    <CardBlock
      title="Languages"
      addLabel="Add language"
      onAdd={() => patch((r) => ({ ...r, languages: [...r.languages, emptyLanguage()] }))}
    >
      {resume.languages.map((item) => (
        <div key={item.id} className="mb-3 grid gap-2 sm:grid-cols-[1fr_10rem_auto] sm:items-end">
          <TextField
            id={`${item.id}-name`}
            label="Language"
            value={item.name}
            onChange={(name) =>
              patch((r) => ({
                ...r,
                languages: r.languages.map((l) => (l.id === item.id ? { ...l, name } : l)),
              }))
            }
          />
          <Field label="Proficiency">
            <Select
              value={item.proficiency}
              onValueChange={(proficiency) =>
                patch((r) => ({
                  ...r,
                  languages: r.languages.map((l) =>
                    l.id === item.id ? { ...l, proficiency: proficiency as typeof item.proficiency } : l,
                  ),
                }))
              }
            >
              <SelectTrigger aria-label="Proficiency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {LANGUAGE_LEVELS.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label="Remove language"
            onClick={() =>
              patch((r) => ({ ...r, languages: r.languages.filter((l) => l.id !== item.id) }))
            }
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      ))}
    </CardBlock>
  );
}

export function ListNotesForm({
  title,
  values,
  onChange,
  placeholder,
}: {
  title: string;
  values: string[];
  onChange: (values: string[]) => void;
  placeholder: string;
}) {
  return (
    <CardBlock
      title={title}
      addLabel="Add"
      onAdd={() => onChange([...values, ""])}
    >
      {values.length === 0 ? (
        <p className="text-sm text-muted-foreground">Nothing here yet.</p>
      ) : null}
      {values.map((value, index) => (
        <div key={index} className="mb-2 flex gap-2">
          <Input
            value={value}
            placeholder={placeholder}
            onChange={(e) =>
              onChange(values.map((v, i) => (i === index ? e.target.value : v)))
            }
          />
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label="Remove"
            onClick={() => onChange(values.filter((_, i) => i !== index))}
          >
            <X className="size-4" />
          </Button>
        </div>
      ))}
    </CardBlock>
  );
}

export function MetaForm({ resume, patch }: { resume: Resume; patch: Patch }) {
  return (
    <CardBlock title="Resume options">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          id="resume-name"
          label="Resume name"
          value={resume.name}
          onChange={(name) => patch((r) => ({ ...r, name }))}
        />
        <Field label="Template">
          <Select
            value={resume.templateId}
            onValueChange={(templateId) =>
              patch((r) => ({ ...r, templateId: templateId as Resume["templateId"] }))
            }
          >
            <SelectTrigger aria-label="Template">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TEMPLATE_IDS.map((id) => (
                <SelectItem key={id} value={id}>
                  {TEMPLATE_META[id].name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Paper size">
          <Select
            value={resume.paperSize}
            onValueChange={(paperSize) =>
              patch((r) => ({ ...r, paperSize: paperSize as Resume["paperSize"] }))
            }
          >
            <SelectTrigger aria-label="Paper size">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a4">A4</SelectItem>
              <SelectItem value="letter">Letter</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <div className="flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2">
          <div>
            <Label htmlFor="ats">ATS-friendly resume</Label>
            <p className="text-xs text-muted-foreground">
              Standard headings, no decorative graphics.
            </p>
          </div>
          <Switch
            id="ats"
            checked={resume.atsMode}
            onCheckedChange={(atsMode) => patch((r) => ({ ...r, atsMode }))}
          />
        </div>
      </div>
    </CardBlock>
  );
}

export function SectionManager({ resume, patch }: { resume: Resume; patch: Patch }) {
  const [dragging, setDragging] = useState<SectionId | null>(null);

  const reorder = (from: SectionId, to: SectionId) => {
    if (from === to) return;
    patch((r) => {
      const order = [...r.sectionOrder];
      const fi = order.indexOf(from);
      const ti = order.indexOf(to);
      if (fi < 0 || ti < 0) return r;
      order.splice(fi, 1);
      order.splice(ti, 0, from);
      return { ...r, sectionOrder: order };
    });
  };

  return (
    <CardBlock title="Sections">
      <p className="mb-3 text-sm text-muted-foreground">
        Drag to reorder, or use this list to rename and hide sections. Empty sections stay hidden
        on the resume automatically.
      </p>
      <ul className="flex flex-col gap-2">
        {resume.sectionOrder.map((id, index) => (
          <li
            key={id}
            draggable
            onDragStart={() => setDragging(id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (dragging) reorder(dragging, id);
              setDragging(null);
            }}
            onDragEnd={() => setDragging(null)}
            className={cn(
              "flex items-center gap-2 rounded-lg border border-border bg-background px-2 py-2",
              dragging === id && "opacity-60",
            )}
          >
            <span className="cursor-grab text-muted-foreground" aria-hidden="true">
              <GripVertical className="size-4" />
            </span>
            <Input
              aria-label={`${id} section title`}
              value={resume.sectionTitles[id]}
              onChange={(e) =>
                patch((r) => ({
                  ...r,
                  sectionTitles: { ...r.sectionTitles, [id]: e.target.value },
                }))
              }
              className="h-9"
            />
            <div className="hidden sm:flex">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                aria-label="Move section up"
                onClick={() => {
                  const order = [...resume.sectionOrder];
                  if (index === 0) return;
                  [order[index - 1], order[index]] = [order[index], order[index - 1]];
                  patch((r) => ({ ...r, sectionOrder: order }));
                }}
              >
                <ChevronUp className="size-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                aria-label="Move section down"
                onClick={() => {
                  const order = [...resume.sectionOrder];
                  if (index === order.length - 1) return;
                  [order[index + 1], order[index]] = [order[index], order[index + 1]];
                  patch((r) => ({ ...r, sectionOrder: order }));
                }}
              >
                <ChevronDown className="size-4" />
              </Button>
            </div>
            <Switch
              checked={resume.sectionEnabled[id]}
              onCheckedChange={(on) =>
                patch((r) => ({
                  ...r,
                  sectionEnabled: { ...r.sectionEnabled, [id]: on },
                }))
              }
              aria-label={`Show ${resume.sectionTitles[id]}`}
            />
          </li>
        ))}
      </ul>
    </CardBlock>
  );
}
