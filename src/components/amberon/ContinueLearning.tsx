import { useMemo, useRef, useState, useEffect } from "react";
import { Play, RotateCcw, Lock, Check, Clock, ChevronLeft, ChevronRight } from "lucide-react";
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

const TOTAL = 12;
const IMAGES = [session1, session2, session3];

const TITLES = [
  "Introduction to Trading",
  "Market Basics",
  "Technical Analysis",
  "Chart Patterns & Trends",
  "Risk Management",
  "Trading Psychology",
  "Forex Fundamentals",
  "Trading Strategies",
  "Indicators & Oscillators",
  "Position Sizing",
  "Building a Trading Plan",
  "Live Market Application",
];

const DURATIONS = [
  "12 min", "14 min", "15 min", "13 min", "16 min", "11 min",
  "18 min", "20 min", "14 min", "12 min", "17 min", "22 min",
];

// Demo progression: 5 completed, 1 in-progress, rest locked
const STATUS_BY_INDEX = (i: number): SessionStatus => {
  if (i <= 5) return "completed";
  if (i === 6) return "in-progress";
  return "locked";
};

const SESSIONS: Session[] = Array.from({ length: TOTAL }, (_, i) => ({
  index: i + 1,
  total: TOTAL,
  title: TITLES[i],
  duration: DURATIONS[i],
  status: STATUS_BY_INDEX(i + 1),
  img: IMAGES[i % IMAGES.length],
}));

const STATUS_COPY: Record<SessionStatus, string> = {
  "not-started": "Start your first session",
  "in-progress": "You're making great progress — keep going!",
  completed: "Well done! You've completed this session",
  locked: "Complete the previous session to unlock",
};

function ActionButton({ status }: { status: SessionStatus }) {
  if (status === "locked") {
    return (
      <Button size="sm" disabled variant="secondary" className="rounded-full opacity-70">
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
  const hasStarted = useMemo(
    () => SESSIONS.some((s) => s.status === "in-progress" || s.status === "completed"),
    [],
  );
  const sectionTitle = hasStarted ? "Continue Learning" : "Start Learning";

  // Page-based carousel: 4 cards per page on desktop -> 3 pages of 12
  const PER_PAGE = 4;
  const pageCount = Math.ceil(TOTAL / PER_PAGE);
  const [page, setPage] = useState(() => {
    // Start on page containing the in-progress session
    const idx = SESSIONS.findIndex((s) => s.status === "in-progress");
    return idx >= 0 ? Math.floor(idx / PER_PAGE) : 0;
  });

  const trackRef = useRef<HTMLDivElement>(null);

  const canPrev = page > 0;
  const canNext = page < pageCount - 1;

  const goPrev = () => canPrev && setPage((p) => p - 1);
  const goNext = () => canNext && setPage((p) => p + 1);

  // Sync mobile scroll position to page (so swipe + arrows stay aligned)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[page * PER_PAGE] as HTMLElement | undefined;
    if (child && window.matchMedia("(max-width: 767px)").matches) {
      el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: "smooth" });
    }
  }, [page]);

  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">{sectionTitle}</h2>
          <p className="text-sm text-muted-foreground">Pick up right where you left off.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-xs text-muted-foreground sm:inline">
            Page {page + 1} of {pageCount}
          </span>
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
            View all
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Arrow: Prev */}
        <button
          type="button"
          aria-label="Previous sessions"
          onClick={goPrev}
          disabled={!canPrev}
          className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-soft transition-all hover:-translate-y-[calc(50%+2px)] hover:shadow-card disabled:opacity-40 disabled:hover:translate-y-[-50%] disabled:hover:shadow-soft"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>

        {/* Arrow: Next */}
        <button
          type="button"
          aria-label="Next sessions"
          onClick={goNext}
          disabled={!canNext}
          className="absolute right-0 top-1/2 z-10 hidden translate-x-1/2 -translate-y-1/2 md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-soft transition-all hover:-translate-y-[calc(50%+2px)] hover:shadow-card disabled:opacity-40 disabled:hover:translate-y-[-50%] disabled:hover:shadow-soft"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        {/* Desktop: paged track with transform; Mobile: horizontal snap-scroll */}
        <div className="overflow-hidden md:overflow-hidden -mx-6 px-6 md:mx-0 md:px-0">
          <div
            ref={trackRef}
            className="
              flex gap-4 md:gap-5
              md:transition-transform md:duration-500 md:ease-out
              overflow-x-auto md:overflow-visible no-scrollbar
              snap-x snap-mandatory md:snap-none
              pb-2
            "
            style={{
              transform:
                typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
                  ? `translateX(calc(-${page * 100}%))`
                  : undefined,
            }}
          >
            {SESSIONS.map((s) => {
              const isLocked = s.status === "locked";
              const isCurrent = s.status === "in-progress" || s.status === "not-started";
              return (
                <article
                  key={s.index}
                  className={`group snap-start shrink-0
                    w-[78%] sm:w-[55%]
                    md:w-[calc((100%-3*1.25rem)/4)]
                    overflow-hidden rounded-[14px] border bg-card shadow-soft transition-all
                    hover:-translate-y-[3px] hover:shadow-card
                    ${isCurrent ? "border-primary/40 ring-1 ring-primary/15" : "border-border"}
                    ${isLocked ? "opacity-75" : ""}`}
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
                    <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground line-clamp-1">
                      {s.title}
                    </h3>

                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {s.duration}
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2 min-h-[2.5rem]">
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

        {/* Page dots */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === page ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
