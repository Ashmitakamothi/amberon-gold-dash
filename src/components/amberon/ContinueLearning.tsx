import { Play, RotateCcw, Lock, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import session1 from "@/assets/session-intro.jpg";
import session2 from "@/assets/session-market.jpg";
import session3 from "@/assets/session-technical.jpg";

type SessionStatus = "not-started" | "in-progress" | "completed" | "locked";

interface Session {
  index: number;
  total: number;
  title: string;
  duration: string;
  status: SessionStatus;
  img: string;
}

const SESSIONS: Session[] = [
  { index: 1, total: 12, title: "Introduction to Trading", duration: "12 min", status: "in-progress", img: session1 },
  { index: 2, total: 12, title: "Market Basics", duration: "14 min", status: "locked", img: session2 },
  { index: 3, total: 12, title: "Technical Analysis", duration: "15 min", status: "locked", img: session3 },
];

// Dynamic section title — based on whether any session is in-progress/completed
const hasStarted = SESSIONS.some((s) => s.status === "in-progress" || s.status === "completed");
const SECTION_TITLE = hasStarted ? "Continue Learning" : "Start Learning";

const STATUS_COPY: Record<SessionStatus, string> = {
  "not-started": "Start your first session",
  "in-progress": "You’re making great progress — keep going!",
  completed: "Well done! You’ve completed this session",
  locked: "Complete the previous session to unlock",
};

function ActionButton({ status }: { status: SessionStatus }) {
  if (status === "locked") {
    return (
      <Button
        size="sm"
        disabled
        variant="secondary"
        className="rounded-full opacity-70"
      >
        <Lock className="h-3.5 w-3.5" /> Locked
      </Button>
    );
  }
  if (status === "completed") {
    return (
      <Button variant="goldOutline" size="sm" className="rounded-full">
        <RotateCcw className="h-3.5 w-3.5" /> Watch Again
      </Button>
    );
  }
  if (status === "in-progress") {
    return (
      <Button variant="gold" size="sm" className="rounded-full">
        <Play className="h-3.5 w-3.5" /> Resume
      </Button>
    );
  }
  return (
    <Button variant="gold" size="sm" className="rounded-full">
      <Play className="h-3.5 w-3.5" /> Start
    </Button>
  );
}

function StatusChip({ status }: { status: SessionStatus }) {
  const map: Record<SessionStatus, { bg: string; color: string; label: string }> = {
    "not-started": { bg: "#F3F4F6", color: "#6B7280", label: "Not Started" },
    "in-progress": { bg: "#FFF7ED", color: "#D68910", label: "In Progress" },
    completed: { bg: "#F0FDF4", color: "#047857", label: "Completed" },
    locked: { bg: "#F3F4F6", color: "#9CA3AF", label: "Locked" },
  };
  const s = map[status];
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
      style={{ background: s.bg, color: s.color }}
    >
      {status === "completed" && <Check className="h-2.5 w-2.5" />}
      {status === "locked" && <Lock className="h-2.5 w-2.5" />}
      {s.label}
    </span>
  );
}

export function ContinueLearning() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            {SECTION_TITLE}
          </h2>
          <p className="text-sm text-muted-foreground">Pick up right where you left off.</p>
        </div>
        <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
          View all
        </button>
      </div>

      {/* Horizontal scroll with snap */}
      <div className="-mx-6 px-6 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 snap-x snap-mandatory pb-2 pr-6">
          {SESSIONS.map((s) => {
            const isLocked = s.status === "locked";
            const isCurrent = s.status === "in-progress" || s.status === "not-started";
            return (
              <article
                key={s.index}
                className={`group lift snap-start shrink-0 w-[300px] sm:w-[340px] overflow-hidden rounded-[14px] border bg-card shadow-soft transition-all ${
                  isCurrent
                    ? "border-primary/40 shadow-card ring-1 ring-primary/15"
                    : "border-border"
                } ${isLocked ? "opacity-75" : ""}`}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                      isLocked ? "blur-[1px] saturate-50" : ""
                    }`}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0) 55%, rgba(255,255,255,0.85) 100%)",
                    }}
                  />
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-soft">
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  )}
                  <div className="absolute left-3 top-3">
                    <StatusChip status={s.status} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Session {s.index} of {s.total}
                  </p>
                  <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>

                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {s.duration}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {STATUS_COPY[s.status]}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <ActionButton status={s.status} />
                    {!isLocked && (
                      <span className="text-xs text-muted-foreground">
                        {s.status === "completed" ? "Reviewed" : "~ " + s.duration + " left"}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
