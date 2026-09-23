import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  Download,
  Eye,
  FileText,
  LayoutTemplate,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/lib/resume/store";
import { useHydrateApp } from "@/hooks/use-hydrate";
import { TEMPLATE_IDS, TEMPLATE_META } from "@/lib/resume/types";

export const Route = createFileRoute("/")({ component: Home });

const FEATURES = [
  {
    title: "Easy Resume Builder",
    text: "A clear form for every section, with autosave as you type.",
    icon: FileText,
  },
  {
    title: "Professional Templates",
    text: "Five layouts that share the same data — switch without losing work.",
    icon: LayoutTemplate,
  },
  {
    title: "Live Preview",
    text: "See the page update instantly while you edit.",
    icon: Eye,
  },
  {
    title: "PDF Export",
    text: "Download an A4, print-ready PDF with selectable text.",
    icon: Download,
  },
  {
    title: "ATS-Friendly",
    text: "A dedicated mode with standard headings and a clean document structure.",
    icon: ShieldCheck,
  },
  {
    title: "Works Offline",
    text: "Install Besumes as a PWA and keep working without an account.",
    icon: WifiOff,
  },
];

function Home() {
  useHydrateApp();
  const navigate = useNavigate();
  const createNew = useResumeStore((s) => s.createNew);

  const start = () => {
    const resume = createNew();
    navigate({ to: "/resumes/$id", params: { id: resume.id } });
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5">
        <Logo />
        <nav className="flex items-center gap-2">
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link to="/templates">Templates</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard">Open app</Link>
          </Button>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:pt-16 sm:pb-24">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Resume maker
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
            Build Your Resume. Build Your Future.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Create professional, ATS-friendly resumes in minutes with Besumes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={start}>
              Create Resume
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/templates">View Templates</Link>
            </Button>
          </div>
        </section>

        <section className="border-t border-border bg-card">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="flex gap-4">
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h2 className="font-semibold">{feature.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl tracking-tight">Templates</h2>
              <p className="mt-2 text-muted-foreground">
                One data model. Five professional looks.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/templates">Explore templates</Link>
            </Button>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {TEMPLATE_IDS.map((id) => (
              <li key={id} className="rounded-xl bg-card p-4 shadow-card">
                <p className="font-medium">{TEMPLATE_META[id].name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{TEMPLATE_META[id].blurb}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Besumes — resumes stay on this device.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link to="/settings" className="hover:text-foreground">
              Settings
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
