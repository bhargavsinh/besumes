import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { ResumeStage } from "@/components/preview/resume-stage";
import { createSampleResume } from "@/lib/resume/sample";
import { useHydrateApp } from "@/hooks/use-hydrate";
import { useResumeStore } from "@/lib/resume/store";
import { TEMPLATE_IDS, TEMPLATE_META, type TemplateId } from "@/lib/resume/types";

export const Route = createFileRoute("/templates")({ component: TemplatesPage });

function TemplatesPage() {
  useHydrateApp();
  const navigate = useNavigate();
  const createNew = useResumeStore((s) => s.createNew);
  const sample = createSampleResume();

  const useTemplate = (id: TemplateId) => {
    const resume = createNew(id);
    navigate({ to: "/resumes/$id", params: { id: resume.id } });
  };

  return (
    <AppShell title="Templates">
      <p className="mb-8 max-w-2xl text-muted-foreground">
        Every template reads the same resume data. Changing templates never deletes your
        information.
      </p>
      <div className="grid gap-8">
        {TEMPLATE_IDS.map((id) => {
          const preview = {
            ...sample,
            templateId: id,
            atsMode: id === "minimal",
            name: TEMPLATE_META[id].name,
          };
          return (
            <article
              key={id}
              className="grid gap-6 rounded-xl bg-card p-5 shadow-card lg:grid-cols-[16rem_minmax(0,1fr)] lg:p-6"
            >
              <div>
                <p className="text-xs font-medium tracking-wide text-primary uppercase">
                  {TEMPLATE_META[id].audience}
                </p>
                <h2 className="mt-2 font-serif text-2xl">{TEMPLATE_META[id].name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{TEMPLATE_META[id].blurb}</p>
                <Button className="mt-5" onClick={() => useTemplate(id)}>
                  Use {TEMPLATE_META[id].name}
                </Button>
              </div>
              <div className="min-w-0 overflow-hidden rounded-lg bg-muted/60 p-3">
                <ResumeStage resume={preview} />
              </div>
            </article>
          );
        })}
      </div>
    </AppShell>
  );
}
