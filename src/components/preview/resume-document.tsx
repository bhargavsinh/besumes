import type { ReactNode } from "react";
import { formatMonth, formatRange } from "@/lib/utils";
import { isSectionVisible } from "@/lib/resume/factory";
import type { Resume, SectionId } from "@/lib/resume/types";
import { cn } from "@/lib/utils";

function Contacts({ resume }: { resume: Resume }) {
  const items = [
    resume.personal.email,
    resume.personal.phone,
    resume.personal.location,
    resume.personal.website,
    resume.personal.linkedin,
    resume.personal.github,
  ].filter(Boolean);
  if (!items.length) return null;
  return (
    <ul className="resume-contacts">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Header({ resume }: { resume: Resume }) {
  const ats = resume.atsMode;
  const showPhoto = Boolean(resume.personal.photoDataUrl) && !ats;
  const inner = (
    <header className="resume-header">
      <div>
        <h1 className="resume-name">{resume.personal.fullName || "Your Name"}</h1>
        {resume.personal.title ? (
          <p className="resume-title">{resume.personal.title}</p>
        ) : null}
        <Contacts resume={resume} />
      </div>
      {showPhoto ? (
        <img
          className="resume-photo"
          src={resume.personal.photoDataUrl ?? ""}
          alt=""
        />
      ) : null}
    </header>
  );
  if (resume.templateId === "professional") {
    return <div className="resume-masthead">{inner}</div>;
  }
  return inner;
}

function Summary({ resume }: { resume: Resume }) {
  return <p>{resume.summary}</p>;
}

function Experience({ resume }: { resume: Resume }) {
  return (
    <div>
      {resume.experience.map((item) =>
        item.jobTitle || item.company ? (
          <article key={item.id} className="resume-entry">
            <div className="resume-entry-head">
              <div className="resume-entry-role">{item.jobTitle}</div>
              <div className="resume-entry-dates">
                {formatRange(item.startDate, item.endDate, item.current)}
              </div>
            </div>
            <div className="resume-entry-sub">
              {[item.company, item.location].filter(Boolean).join(" · ")}
            </div>
            {item.bullets.some((b) => b.trim()) ? (
              <ul className="resume-bullets">
                {item.bullets
                  .filter((b) => b.trim())
                  .map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
              </ul>
            ) : null}
          </article>
        ) : null,
      )}
    </div>
  );
}

function Education({ resume }: { resume: Resume }) {
  return (
    <div>
      {resume.education.map((item) =>
        item.institution || item.degree ? (
          <article key={item.id} className="resume-entry">
            <div className="resume-entry-head">
              <div className="resume-entry-role">
                {[item.institution, item.degree].filter(Boolean).join(" · ")}
              </div>
              <div className="resume-entry-dates">
                {formatRange(item.startDate, item.endDate)}
              </div>
            </div>
            <div className="resume-entry-sub">
              {[item.field, item.grade].filter(Boolean).join(" · ")}
            </div>
            {item.description ? <p>{item.description}</p> : null}
          </article>
        ) : null,
      )}
    </div>
  );
}

function Skills({ resume }: { resume: Resume }) {
  const names = resume.skills.map((s) => s.name.trim()).filter(Boolean);
  if (resume.templateId === "student" && !resume.atsMode) {
    return (
      <div className="resume-skills">
        {names.map((name) => (
          <span key={name} className="resume-chip">
            {name}
          </span>
        ))}
      </div>
    );
  }
  return <p>{names.join("  ·  ")}</p>;
}

function Projects({ resume }: { resume: Resume }) {
  return (
    <div>
      {resume.projects.map((item) =>
        item.name.trim() ? (
          <article key={item.id} className="resume-entry">
            <div className="resume-entry-head">
              <div className="resume-entry-role">{item.name}</div>
            </div>
            <div className="resume-entry-sub">
              {[item.role, item.technologies].filter(Boolean).join(" · ")}
            </div>
            {item.description ? <p>{item.description}</p> : null}
            <p className="resume-muted">
              {[item.url, item.github].filter(Boolean).join("  ·  ")}
            </p>
          </article>
        ) : null,
      )}
    </div>
  );
}

function Certifications({ resume }: { resume: Resume }) {
  return (
    <div>
      {resume.certifications.map((item) =>
        item.name.trim() ? (
          <article key={item.id} className="resume-entry">
            <div className="resume-entry-head">
              <div className="resume-entry-role">{item.name}</div>
              <div className="resume-entry-dates">{formatMonth(item.date)}</div>
            </div>
            <div className="resume-entry-sub">
              {[item.issuer, item.credentialId].filter(Boolean).join(" · ")}
            </div>
          </article>
        ) : null,
      )}
    </div>
  );
}

function Languages({ resume }: { resume: Resume }) {
  return (
    <p>
      {resume.languages
        .filter((l) => l.name.trim())
        .map((l) => `${l.name} — ${l.proficiency}`)
        .join("  ·  ")}
    </p>
  );
}

function Achievements({ resume }: { resume: Resume }) {
  return (
    <ul className="resume-bullets">
      {resume.achievements
        .filter((a) => a.trim())
        .map((a, i) => (
          <li key={i}>{a}</li>
        ))}
    </ul>
  );
}

function Interests({ resume }: { resume: Resume }) {
  return <p>{resume.interests.filter((i) => i.trim()).join("  ·  ")}</p>;
}

const SECTION_BODY: Record<SectionId, (props: { resume: Resume }) => ReactNode> = {
  summary: Summary,
  experience: Experience,
  education: Education,
  skills: Skills,
  projects: Projects,
  certifications: Certifications,
  languages: Languages,
  achievements: Achievements,
  interests: Interests,
};

export function ResumeDocument({ resume }: { resume: Resume }) {
  const sections = resume.sectionOrder.filter((id) => isSectionVisible(resume, id));
  const body = (
    <>
      {sections.map((id) => {
        const Body = SECTION_BODY[id];
        return (
          <section key={id} className="resume-section">
            <h2 className="resume-h2">{resume.sectionTitles[id]}</h2>
            <Body resume={resume} />
          </section>
        );
      })}
    </>
  );

  return (
    <article
      className={cn(
        "resume-sheet",
        `resume-${resume.templateId}`,
        resume.paperSize === "letter" && "resume-letter",
        resume.atsMode && "resume-ats",
      )}
    >
      <Header resume={resume} />
      {resume.templateId === "professional" ? (
        <div className="resume-body">{body}</div>
      ) : (
        body
      )}
    </article>
  );
}
