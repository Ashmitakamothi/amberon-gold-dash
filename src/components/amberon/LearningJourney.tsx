import { Check, Lock, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import learnImg from "@/assets/journey-learn.jpg";
import examImg from "@/assets/journey-exam.jpg";
import certImg from "@/assets/journey-certificate.jpg";
import practiceImg from "@/assets/journey-practice.jpg";

type StepStatus = "completed" | "in-progress" | "locked";

interface Step {
  key: string;
  title: string;
  description: string;
  cta: string;
  img: string;
  status: StepStatus;
}

const STEPS: Step[] = [
  {
    key: "learn",
    title: "Learn Course",
    description: "Complete all sessions to build strong trading foundations.",
    cta: "Continue Learning",
    img: learnImg,
    status: "in-progress",
  },
  {
    key: "exam",
    title: "Pass Exam",
    description: "Demonstrate your knowledge and pass the final assessment.",
    cta: "Unlocks after course",
    img: examImg,
    status: "locked",
  },
  {
    key: "certificate",
    title: "Get Certificate",
    description: "Earn your KHDA-aligned certification upon completion.",
    cta: "Unlocks after exam",
    img: certImg,
    status: "locked",
  },
  {
    key: "practice",
    title: "Start Practice Challenge",
    description: "Apply your skills in a real-world trading simulation.",
    cta: "Unlocks after certificate",
    img: practiceImg,
    status: "locked",
  },
];

function StatusChip({ status }: { status: StepStatus }) {
  const map: Record<StepStatus, { bg: string; color: string; label: string; Icon: typeof Check }> = {
    completed: { bg: "#F0FDF4", color: "#047857", label: "Completed", Icon: Check },
    "in-progress": { bg: "#FFF7ED", color: "#D68910", label: "In Progress", Icon: Loader2 },
    locked: { bg: "#F3F4F6", color: "#9CA3AF", label: "Locked", Icon: Lock },
  };
  const s = map[status];
  const Icon = s.Icon;
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
      style={{ background: s.bg, color: s.color }}
    >
      <Icon className="h-2.5 w-2.5" />
      {s.label}
    </span>
  );
}

export function LearningJourney() {
  const completedCount = STEPS.filter((s) => s.status === "completed").length;
  const total = STEPS.length;
  const currentIndex = STEPS.findIndex((s) => s.status === "in-progress");
  const progressPct = Math.round(
    ((completedCount + (currentIndex >= 0 ? 0.5 : 0)) / total) * 100,
  );

  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Your Learning Journey
          </h2>
          <p className="text-sm text-muted-foreground">
            Follow the structured path to become a disciplined professional trader.
          </p>
        </div>
        <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
          Step {Math.max(completedCount, currentIndex >= 0 ? currentIndex + 1 : 1)} of {total}
        </span>
      </div>

      <div className="relative">
        {/* Connector line behind cards (desktop only) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[88px] hidden md:block"
        >
          <div className="mx-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => {
            const isLocked = step.status === "locked";
            const isCurrent = step.status === "in-progress";
            const isCompleted = step.status === "completed";

            return (
              <div key={step.key} className="relative">
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-[14px] border bg-card shadow-soft transition-all hover:-translate-y-[3px] hover:shadow-card
                    ${isCurrent ? "border-primary/50 ring-1 ring-primary/15" : "border-border"}
                    ${isLocked ? "opacity-70" : ""}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                    <img
                      src={step.img}
                      alt={step.title}
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
                      <StatusChip status={step.status} />
                    </div>
                    <div className="absolute right-3 top-3">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold shadow-soft ${
                          isCompleted
                            ? "bg-emerald-500 text-white"
                            : isCurrent
                              ? "bg-primary text-foreground"
                              : "bg-white/90 text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? <Check className="h-3.5 w-3.5" /> : i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3 min-h-[3rem]">
                      {step.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      {isCurrent && (
                        <Button variant="gold" size="sm" className="rounded-full">
                          {step.cta}
                        </Button>
                      )}
                      {isCompleted && (
                        <Button variant="goldOutline" size="sm" className="rounded-full">
                          Review
                        </Button>
                      )}
                      {isLocked && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <Lock className="h-3 w-3" /> {step.cta}
                        </span>
                      )}
                    </div>
                  </div>
                </article>

                {/* Arrow connector between cards (desktop) */}
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-[14px] top-[80px] z-10 hidden lg:flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card shadow-soft"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">{completedCount}</span> of {total}{" "}
              steps completed
            </span>
            <span className="font-medium">{progressPct}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary-deep transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
