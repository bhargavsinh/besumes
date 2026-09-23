import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallBanner() {
  const [event, setEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setEvent(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  if (!event || hidden) return null;

  return (
    <div className="mb-6 flex flex-col gap-3 rounded-xl bg-card p-4 shadow-card sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-medium">Install Besumes</p>
        <p className="text-sm text-muted-foreground">
          Add it to your home screen and keep building resumes offline.
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" onClick={() => setHidden(true)}>
          Not now
        </Button>
        <Button
          onClick={async () => {
            await event.prompt();
            setEvent(null);
          }}
        >
          <Download className="size-4" />
          Install
        </Button>
      </div>
    </div>
  );
}

export function registerServiceWorker() {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* offline shell is best-effort */
    });
  });
}
