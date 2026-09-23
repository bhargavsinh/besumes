import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-4 py-5">
        <Logo />
        <Button variant="outline" asChild>
          <Link to="/dashboard">Open app</Link>
        </Button>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-serif text-4xl tracking-tight">Privacy</h1>
        <p className="mt-6 text-lg leading-relaxed">
          Your resume information stays on your device unless you explicitly choose to use a
          future cloud feature.
        </p>
        <div className="mt-8 space-y-4 text-muted-foreground">
          <p>
            Besumes does not require a login, email registration, phone verification, or social
            sign-in to create a resume.
          </p>
          <p>
            Resumes, photos, and settings are saved in this browser using local storage. They are
            not sent to a Besumes server.
          </p>
          <p>
            You can export JSON backups, import them on another device, or delete all local data
            from Settings at any time.
          </p>
        </div>
      </main>
    </div>
  );
}
