import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground",
        className,
      )}
      aria-hidden="true"
    >
      <span className="font-serif text-lg leading-none font-medium">B</span>
    </span>
  );
}

export function Logo({
  className,
  to = "/",
  compact = false,
}: {
  className?: string;
  to?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn("flex items-center gap-2 text-foreground no-underline", className)}
      aria-label="Besumes home"
    >
      <Mark />
      {!compact ? (
        <span className="font-serif text-xl tracking-tight">
          Besumes
        </span>
      ) : null}
    </Link>
  );
}
