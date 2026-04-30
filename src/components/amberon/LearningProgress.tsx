import { Play, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LearningProgressProps {
  currentSession?: { index: number; title: string };
  completed?: number;
  total?: number;
  timeSpent?: string;
}

export function LearningProgress({
  currentSession = { index: 4, title: "Risk Management" },
  completed = 4,
  total = 12,
  timeSpent = "1h 45m",
}: LearningProgressProps) {
  const notStarted = completed === 0;
  const pct = Math.round((completed / total) * 100);

  return (
    <section className="group rounded-[14px] border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-[3px] hover:shadow-card">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5" /> Learning Progress
          </div>
          <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            {notStarted ? "Begin your course" : "Continue where you left off"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {notStarted
              ? "Start your journey through the Professional Trading Course."
              : "Continue your course and stay on track."}
          </p>
        </div>
      </div>

      {notStarted ? (
        <div className="rounded-lg border border-dashed border-border bg-secondary/40 p-5 text-center">
          <p className="text-sm text-muted-foreground">You haven't started your course yet</p>
          <Button variant="gold" className="mt-4 rounded-full">
            <Play className="h-3.5 w-3.5" /> Start Learning
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-3 rounded-lg border border-border bg-secondary/30 p-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Current
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Session {currentSession.index}
              </p>
              <p className="text-xs text-muted-foreground line-clamp-1">{currentSession.title}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Progress
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {completed} / {total}
              </p>
              <p className="text-xs text-muted-foreground">Sessions</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Time spent
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                <Clock className="h-3 w-3" /> {timeSpent}
              </p>
              <p className="text-xs text-muted-foreground">This course</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Course completion</span>
              <span className="font-semibold text-foreground">{pct}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/70">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <Button variant="gold" className="mt-5 w-full rounded-full sm:w-auto">
            <Play className="h-3.5 w-3.5" /> Resume Learning
          </Button>
        </>
      )}
    </section>
  );
}
