import { Lock, Rocket, CreditCard, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type ChallengeState = "locked" | "active" | "completed";

interface PracticeChallengeProps {
  state?: ChallengeState;
  profit?: string;
  reward?: string;
}

export function PracticeChallenge({
  state = "active",
  profit = "$1,200",
  reward = "$840",
}: PracticeChallengeProps) {
  const isLocked = state === "locked";
  const isActive = state === "active";
  const isCompleted = state === "completed";

  const accent = isCompleted
    ? "border-emerald-200 ring-1 ring-emerald-100"
    : isActive
      ? "border-primary/40 ring-1 ring-primary/15"
      : "border-border";

  return (
    <section
      className={`group rounded-[14px] border bg-card p-6 shadow-soft transition-all hover:-translate-y-[3px] hover:shadow-card ${accent} ${
        isLocked ? "opacity-90" : ""
      }`}
    >
      <div className="mb-5 flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
            {isLocked && <Lock className="h-3.5 w-3.5" />}
            {isActive && <Rocket className="h-3.5 w-3.5" />}
            {isCompleted && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />}
            Practice Challenge
          </div>
          <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            Practice Trading Challenge
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Apply your knowledge in real market scenarios.
          </p>
        </div>

        <span
          className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
          style={{
            background: isCompleted ? "#F0FDF4" : isActive ? "#FFF7ED" : "#F3F4F6",
            color: isCompleted ? "#047857" : isActive ? "#D68910" : "#9CA3AF",
          }}
        >
          {isLocked && <Lock className="h-2.5 w-2.5" />}
          {isCompleted && <CheckCircle2 className="h-2.5 w-2.5" />}
          {isLocked ? "Locked" : isActive ? "Active" : "Completed"}
        </span>
      </div>

      {/* LOCKED */}
      {isLocked && (
        <div className="rounded-lg border border-dashed border-border bg-secondary/40 p-5 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft">
            <Lock className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Complete the course and pass the exam to unlock the challenge.
          </p>
        </div>
      )}

      {/* ACTIVE */}
      {isActive && (
        <>
          <div className="rounded-lg border border-primary/20 bg-primary-soft/60 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-soft">
                <Sparkles className="h-4 w-4 text-primary-deep" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Practice Token Generated</p>
                <p className="text-xs text-muted-foreground">
                  You can now start your trading challenge.
                </p>
              </div>
            </div>
          </div>
          <Button variant="gold" className="mt-5 w-full rounded-full sm:w-auto">
            <Rocket className="h-3.5 w-3.5" /> Go to Practice
          </Button>
        </>
      )}

      {/* COMPLETED */}
      {isCompleted && (
        <>
          <div className="grid grid-cols-2 gap-3 rounded-lg border border-emerald-100 bg-emerald-50/60 p-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Profit
              </p>
              <p className="mt-1 text-xl font-semibold text-emerald-700">{profit}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Reward
              </p>
              <p className="mt-1 text-xl font-semibold text-foreground">{reward}</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Congratulations! You've successfully completed the challenge.
          </p>
          <Button variant="gold" className="mt-4 w-full rounded-full sm:w-auto">
            <CreditCard className="h-3.5 w-3.5" /> Claim Reward
          </Button>
        </>
      )}
    </section>
  );
}
