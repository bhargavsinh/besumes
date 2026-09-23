import { useNavigate } from "@tanstack/react-router";
import { Copy, Download, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
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
import { downloadResumePdf } from "@/lib/resume/pdf";
import { useResumeStore } from "@/lib/resume/store";
import { TEMPLATE_META, type Resume } from "@/lib/resume/types";
import { formatRelative } from "@/lib/utils";

export function ResumeCard({ resume }: { resume: Resume }) {
  const navigate = useNavigate();
  const duplicate = useResumeStore((s) => s.duplicate);
  const remove = useResumeStore((s) => s.remove);

  return (
    <article className="flex flex-col rounded-xl bg-card p-5 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold">{resume.name}</h3>
          <p className="text-sm text-muted-foreground">
            {TEMPLATE_META[resume.templateId].name} · Updated {formatRelative(resume.updatedAt)}
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button
          size="sm"
          onClick={() => navigate({ to: "/resumes/$id", params: { id: resume.id } })}
        >
          <Pencil className="size-4" />
          Edit
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            const copy = duplicate(resume.id);
            if (copy) {
              toast.success("Resume duplicated");
              navigate({ to: "/resumes/$id", params: { id: copy.id } });
            }
          }}
        >
          <Copy className="size-4" />
          Duplicate
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={async () => {
            try {
              await downloadResumePdf(resume);
            } catch (err) {
              toast.error(
                err instanceof Error
                  ? err.message
                  : "Something went wrong while generating the PDF. Please try again.",
              );
            }
          }}
        >
          <Download className="size-4" />
          Download
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="sm" variant="ghost">
              <Trash2 className="size-4" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this resume?</AlertDialogTitle>
              <AlertDialogDescription>
                “{resume.name}” will be removed from this device. This cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => remove(resume.id)}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </article>
  );
}
