import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FilePlus, Files, Sparkles } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { InstallBanner } from "@/components/pwa/install-banner";
import { Button } from "@/components/ui/button";
import { ResumeCard } from "@/components/resumes/resume-actions";
import { useHydrateApp } from "@/hooks/use-hydrate";
import { useResumeStore } from "@/lib/resume/store";

export const Route = createFileRoute("/dashboard")({ component: DashboardPage });

function DashboardPage() {
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
    <AppShell title="Dashboard">
      <InstallBanner />
      <div className="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={start}
          className="rounded-xl bg-primary p-6 text-left text-primary-foreground shadow-card"
        >
          <FilePlus className="size-6" />
          <h2 className="mt-4 font-serif text-2xl">Create new resume</h2>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Start from a blank, professional template.
          </p>
        </button>
        <Link
          to="/resumes"
          className="rounded-xl bg-card p-6 text-left shadow-card"
        >
          <Files className="size-6" />
          <h2 className="mt-4 font-serif text-2xl">My resumes</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {resumes.length
              ? `${resumes.length} saved on this device`
              : "Open your library when you are ready."}
          </p>
        </Link>
      </div>

      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold">Recent</h2>
          <Button variant="ghost" asChild>
            <Link to="/resumes">View all</Link>
          </Button>
        </div>
        {resumes.length === 0 ? (
          <div className="rounded-xl bg-card px-6 py-12 text-center shadow-card">
            <h3 className="font-serif text-2xl">No resumes yet</h3>
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
            {resumes.slice(0, 4).map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
      <p className="mt-8 text-sm text-muted-foreground">
        Your resumes are stored on this device.
      </p>
    </AppShell>
  );
}
