import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useHydrateApp } from "@/hooks/use-hydrate";
import { useResumeStore } from "@/lib/resume/store";
import { useSettingsStore } from "@/lib/settings/store";
import { TEMPLATE_IDS, TEMPLATE_META } from "@/lib/resume/types";
import { downloadText } from "@/lib/utils";

export const Route = createFileRoute("/settings")({ component: SettingsPage });

function SettingsPage() {
  useHydrateApp();
  const settings = useSettingsStore((s) => s.settings);
  const patch = useSettingsStore((s) => s.patch);
  const exportAll = useResumeStore((s) => s.exportAll);
  const importPayload = useResumeStore((s) => s.importPayload);
  const wipe = useResumeStore((s) => s.wipe);
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <AppShell title="Settings">
      <div className="flex max-w-2xl flex-col gap-6">
        <section className="rounded-xl bg-card p-5 shadow-card">
          <h2 className="font-semibold">Appearance</h2>
          <div className="mt-4">
            <Label>Theme</Label>
            <Select
              value={settings.theme}
              onValueChange={(theme) =>
                patch({ theme: theme as typeof settings.theme })
              }
            >
              <SelectTrigger className="mt-2" aria-label="Theme">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light mode</SelectItem>
                <SelectItem value="dark">Dark mode</SelectItem>
                <SelectItem value="system">System default</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <section className="rounded-xl bg-card p-5 shadow-card">
          <h2 className="font-semibold">Resume</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Default template</Label>
              <Select
                value={settings.defaultTemplate}
                onValueChange={(defaultTemplate) =>
                  patch({ defaultTemplate: defaultTemplate as typeof settings.defaultTemplate })
                }
              >
                <SelectTrigger className="mt-2" aria-label="Default template">
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
            </div>
            <div>
              <Label>Default paper size</Label>
              <Select
                value={settings.defaultPaperSize}
                onValueChange={(defaultPaperSize) =>
                  patch({
                    defaultPaperSize: defaultPaperSize as typeof settings.defaultPaperSize,
                  })
                }
              >
                <SelectTrigger className="mt-2" aria-label="Default paper size">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a4">A4</SelectItem>
                  <SelectItem value="letter">Letter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2">
              <Label>Default language</Label>
              <Select
                value={settings.defaultLanguage}
                onValueChange={(defaultLanguage) => patch({ defaultLanguage })}
              >
                <SelectTrigger className="mt-2" aria-label="Default language">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                  <SelectItem value="gu">Gujarati</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section className="rounded-xl bg-card p-5 shadow-card">
          <h2 className="font-semibold">Data</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Your resume information stays on your device unless you explicitly choose to use a
            future cloud feature.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() =>
                downloadText(
                  "besumes-backup.json",
                  JSON.stringify(exportAll(), null, 2),
                )
              }
            >
              Export data
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json"
              className="sr-only"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                e.target.value = "";
                if (!file) return;
                try {
                  const raw = JSON.parse(await file.text());
                  const result = importPayload(raw);
                  toast.success(
                    result.added === 1
                      ? "Imported 1 resume"
                      : `Imported ${result.added} resumes`,
                  );
                } catch (err) {
                  toast.error(
                    err instanceof Error
                      ? err.message
                      : "That file could not be imported.",
                  );
                }
              }}
            />
            <Button variant="outline" onClick={() => fileRef.current?.click()}>
              Import data
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete all local data</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete all local data?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Every resume and setting on this device will be removed. Export a backup first
                    if you want to keep them.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      wipe();
                      toast.success("Local data deleted");
                    }}
                  >
                    Delete everything
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        <p className="text-sm text-muted-foreground">
          Read the{" "}
          <Link to="/privacy" className="underline underline-offset-4">
            privacy note
          </Link>
          .
        </p>
      </div>
    </AppShell>
  );
}
