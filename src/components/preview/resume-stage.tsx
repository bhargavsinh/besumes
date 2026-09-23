import { useEffect, useRef, useState } from "react";
import type { Resume } from "@/lib/resume/types";
import { ResumeDocument } from "./resume-document";
import { cn } from "@/lib/utils";

function paperPx(size: Resume["paperSize"]) {
  return size === "letter"
    ? { width: 816, height: 1056 }
    : { width: 794, height: 1123 };
}

export function ResumeStage({
  resume,
  className,
}: {
  resume: Resume;
  className?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.35);
  const [sheetHeight, setSheetHeight] = useState(paperPx(resume.paperSize).height);
  const { width: paperWidth } = paperPx(resume.paperSize);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const update = () => {
      const width = host.clientWidth;
      if (width < 8) return;
      setScale(Math.min(1, width / paperWidth));
    };
    update();
    const obs = new ResizeObserver(update);
    obs.observe(host);
    return () => obs.disconnect();
  }, [paperWidth]);

  useEffect(() => {
    const sheet = sheetRef.current;
    if (!sheet) return;
    const update = () => setSheetHeight(sheet.offsetHeight);
    update();
    const obs = new ResizeObserver(update);
    obs.observe(sheet);
    return () => obs.disconnect();
  }, [resume]);

  return (
    <div ref={hostRef} className={cn("w-full min-w-0", className)}>
      <div
        className="resume-scale relative mx-auto overflow-hidden"
        style={{
          width: paperWidth * scale,
          height: sheetHeight * scale,
        }}
      >
        <div
          ref={sheetRef}
          className="print-root absolute top-0 left-0 shadow-card"
          style={{
            width: paperWidth,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <ResumeDocument resume={resume} />
        </div>
      </div>
    </div>
  );
}
