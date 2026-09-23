import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  FileText,
  LayoutGrid,
  Settings,
  SquarePen,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { to: "/resumes", label: "My Resumes", icon: FileText },
  { to: "/templates", label: "Templates", icon: SquarePen },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

function navActive(pathname: string, to: string) {
  if (to === "/resumes") return pathname === "/resumes" || pathname.startsWith("/resumes/");
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function AppShell({
  children,
  title,
  actions,
  wide = false,
}: {
  children: ReactNode;
  title?: string;
  actions?: ReactNode;
  wide?: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <aside className="no-print fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-border bg-card px-4 py-5 lg:flex">
        <Logo to="/dashboard" />
        <nav className="mt-8 flex flex-col gap-1" aria-label="Primary">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = navActive(pathname, item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors",
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="mt-auto px-3 text-xs leading-relaxed text-muted-foreground">
          Your resumes are stored on this device.
        </p>
      </aside>

      <header className="no-print sticky top-0 z-20 flex h-14 items-center justify-between gap-3 border-b border-border bg-background/90 px-4 backdrop-blur-sm lg:hidden">
        <Logo to="/dashboard" />
        {title ? <span className="truncate text-sm font-medium">{title}</span> : <span />}
        <div className="flex items-center gap-1">{actions}</div>
      </header>

      <div className="lg:pl-60">
        {title || actions ? (
          <div className="no-print hidden items-center justify-between gap-3 border-b border-border px-8 py-5 lg:flex">
            {title ? <h1 className="font-serif text-2xl tracking-tight">{title}</h1> : <div />}
            <div className="flex items-center gap-2">{actions}</div>
          </div>
        ) : null}
        <main className={cn("px-4 py-6 lg:px-8 lg:py-8", wide ? "" : "max-w-6xl", "safe-bottom lg:pb-8")}>
          {children}
        </main>
      </div>

      <nav
        className="no-print fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm lg:hidden"
        aria-label="Mobile"
      >
        <ul className="grid grid-cols-4">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = navActive(pathname, item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className="size-5" />
                  {item.label === "My Resumes" ? "Resumes" : item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
