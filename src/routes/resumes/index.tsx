import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { ResumeCard } from "@/components/resumes/resume-actions";
import { useHydrateApp } from "@/hooks/use-hydrate";
import { useResumeStore } from "@/lib/resume/store";

export const Route = createFileRoute("/resumes/")({ component: ResumesPage });

function ResumesPage() {
  useHydrateApp();
  const navigate = useNavigate();
  const resumes = useResumeStore((s) => s.resumes);
  const createNew = useResumeStore((s) => s.createNew);
  const createFromSample = useResumeStore((s) => s.createFromSample);

  const start = () => {
    const resume = createNew();
    navigate({ to: "/resumes/$id", params: { id: resume.id } });
  };

  return (
    <AppShell
      title="My Resumes"
      actions={
        <Button onClick={start} size="sm">
          Create Resume
        </Button>
      }
    >
      {resumes.length === 0 ? (
        <div className="rounded-xl bg-card px-6 py-16 text-center shadow-card">
          <h2 className="font-serif text-2xl">No resumes yet</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Create your first professional resume and start your next opportunity.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
            <Button onClick={start}>Create Resume</Button>
            <Button
              variant="outline"
              onClick={() => {
                const sample = createFromSample();
                navigate({ to: "/resumes/$id", params: { id: sample.id } });
              }}
            >
              <Sparkles className="size-4" />
              Start from a sample
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
      <p className="mt-8 text-sm text-muted-foreground">
        Your resumes are stored on this device.
      </p>
    </AppShell>
  );
}
