"use client";

import { useEffect, useState } from "react";

export function MalaysiaClock({ label }: { label: string }) {
  const [time, setTime] = useState("");
  const [isoTime, setIsoTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-MY", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kuala_Lumpur",
      timeZoneName: "short",
    });

    const update = () => {
      const now = new Date();
      setTime(formatter.format(now));
      setIsoTime(now.toISOString());
    };
    update();
    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ark-gold)]">
      {label}
      <span className="h-px w-8 bg-[var(--ark-gold-soft)]" />
      <time dateTime={isoTime || undefined}>{time || "MYT"}</time>
    </span>
  );
}
