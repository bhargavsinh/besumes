import { createFileRoute } from "@tanstack/react-router";
import { BuilderWorkspace } from "@/components/builder/builder-workspace";

export const Route = createFileRoute("/resumes/$id")({
  component: BuilderPage,
});

function BuilderPage() {
  const { id } = Route.useParams();
  return <BuilderWorkspace id={id} />;
}
