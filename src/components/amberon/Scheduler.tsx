import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const EVENTS = [
  { day: "TUE", date: "30", title: "Live Q&A — UX Research", time: "5:00 PM · 45 min" },
  { day: "THU", date: "02", title: "Workshop: Modeling SaaS Metrics", time: "6:30 PM · 1h 30m" },
  { day: "FRI", date: "03", title: "Office hours with Daniel Ross", time: "4:00 PM · 30 min" },
];

export function Scheduler() {
  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-soft">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> This week
          </div>
          <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            Learning scheduler
          </h2>
        </div>
        <Button variant="goldOutline" size="sm" className="rounded-full">
          Add session
        </Button>
      </div>
      <ul className="divide-y divide-border">
        {EVENTS.map((e) => (
          <li key={e.title} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
            <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border border-border bg-secondary">
              <span className="text-[10px] font-semibold uppercase text-muted-foreground">
                {e.day}
              </span>
              <span className="text-sm font-semibold text-foreground">{e.date}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">{e.title}</p>
              <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {e.time}
              </p>
            </div>
            <button className="text-xs font-semibold text-primary-deep hover:text-foreground">
              Join
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
