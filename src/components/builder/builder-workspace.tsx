import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Check, Download, LoaderCircle, Printer } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppShell } from "@/components/layout/app-shell";
import { ResumeStage } from "@/components/preview/resume-stage";
import { downloadResumePdf } from "@/lib/resume/pdf";
import { useResumeStore } from "@/lib/resume/store";
import { suggestedResumeName } from "@/lib/resume/factory";
import { downloadText } from "@/lib/utils";
import type { Resume } from "@/lib/resume/types";
import {
  CertificationsForm,
  EducationForm,
  ExperienceForm,
  LanguagesForm,
  ListNotesForm,
  MetaForm,
  PersonalForm,
  ProjectsForm,
  SectionManager,
  SkillsForm,
  SummaryForm,
} from "./editor-forms";

export function BuilderWorkspace({ id }: { id: string }) {
  const navigate = useNavigate();
  const hydrate = useResumeStore((s) => s.hydrate);
  const hydrated = useResumeStore((s) => s.hydrated);
  const resume = useResumeStore((s) => s.resumes.find((r) => r.id === id));
  const update = useResumeStore((s) => s.update);
  const exportOne = useResumeStore((s) => s.exportOne);
  const saveStatus = useResumeStore((s) => s.saveStatus);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    if (hydrated && !resume) {
      toast.error("That resume could not be found.");
      navigate({ to: "/resumes" });
    }
  }, [hydrated, resume, navigate]);

  if (!resume) {
    return (
      <AppShell title="Resume">
        <p className="text-sm text-muted-foreground">Loading resume…</p>
      </AppShell>
    );
  }

  const patch = (updater: (r: Resume) => Resume) => update(resume.id, updater);

  const onPdf = async () => {
    setBusy(true);
    try {
      await downloadResumePdf(resume);
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Something went wrong while generating the PDF. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  };

  const actions = (
    <>
      <span className="hidden items-center gap-1 text-xs text-muted-foreground sm:flex">
        {saveStatus === "saving" ? (
          <>
            <LoaderCircle className="size-3.5 animate-spin" />
            Saving…
          </>
        ) : saveStatus === "error" ? (
          "Couldn’t save"
        ) : (
          <>
            <Check className="size-3.5" />
            Saved
          </>
        )}
      </span>
      <Button variant="outline" size="sm" type="button" onClick={() => window.print()}>
        <Printer className="size-4" />
        Print
      </Button>
      <Button size="sm" type="button" onClick={onPdf} disabled={busy}>
        <Download className="size-4" />
        Download PDF
      </Button>
    </>
  );

  const editor = (
    <div className="flex flex-col gap-4">
      <MetaForm resume={resume} patch={patch} />
      <PersonalForm resume={resume} patch={patch} />
      <SummaryForm resume={resume} patch={patch} />
      <ExperienceForm resume={resume} patch={patch} />
      <EducationForm resume={resume} patch={patch} />
      <SkillsForm resume={resume} patch={patch} />
      <ProjectsForm resume={resume} patch={patch} />
      <CertificationsForm resume={resume} patch={patch} />
      <LanguagesForm resume={resume} patch={patch} />
      <ListNotesForm
        title="Achievements"
        values={resume.achievements}
        onChange={(achievements) => patch((r) => ({ ...r, achievements }))}
        placeholder="Award, publication, or result"
      />
      <ListNotesForm
        title="Interests"
        values={resume.interests}
        onChange={(interests) => patch((r) => ({ ...r, interests }))}
        placeholder="Typography, running, mentoring"
      />
      <SectionManager resume={resume} patch={patch} />
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            const data = exportOne(resume.id);
            if (!data) return;
            downloadText(
              `${suggestedResumeName(resume)}.json`,
              JSON.stringify(data, null, 2),
            );
          }}
        >
          Export resume data
        </Button>
      </div>
    </div>
  );

  const preview = (
    <div className="min-w-0 lg:sticky lg:top-6">
      <p className="no-print mb-3 hidden text-xs text-muted-foreground lg:block">
        Live preview · {resume.paperSize.toUpperCase()}
      </p>
      <ResumeStage resume={resume} />
    </div>
  );

  return (
    <AppShell title={resume.name || "Resume"} actions={actions} wide>
      <div className="lg:hidden">
        <Tabs defaultValue="edit">
          <TabsList className="no-print w-full">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="edit" className="no-print">
            {editor}
          </TabsContent>
          <TabsContent value="preview">{preview}</TabsContent>
        </Tabs>
      </div>
      <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,28rem)] gap-8 lg:grid">
        <div className="no-print">{editor}</div>
        {preview}
      </div>
    </AppShell>
  );
}
