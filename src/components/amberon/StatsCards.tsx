import { useEffect, useState } from "react";
import {
  TrendingUp,
  Layers,
  ClipboardCheck,
  Award,
  ArrowUpRight,
} from "lucide-react";

type StatVariant = "neutral" | "blue" | "gold" | "green";
type StatusKind =
  | "in-progress"
  | "completed"
  | "passed"
  | "available"
  | "not-unlocked"
  | "locked"
  | "eligible"
  | "issued"
  | "not-eligible"
  | "failed";

type Stat = {
  title: string;
  Icon: typeof TrendingUp;
  variant: StatVariant;
  // Card 1
  progress?: number;
  progressLabel?: string;
  // Generic main display
  mainValue?: string;
  mainTone?: "gold" | "neutral";
  status?: StatusKind;
  subtext: string;
  helper?: string;
};

const STATS: Stat[] = [
  {
    title: "Course Progress",
    Icon: TrendingUp,
    variant: "neutral",
    progress: 78,
    progressLabel: "78% Completed",
    subtext: "Day 2 in progress",
    status: "in-progress",
  },
  {
    title: "Sessions Completed",
    Icon: Layers,
    variant: "blue",
    mainValue: "6 / 12",
    mainTone: "gold",
    subtext: "Last session: Technical Indicators",
    helper: "Keep going — you’re halfway there",
  },
  {
    title: "Exam Status",
    Icon: ClipboardCheck,
    variant: "gold",
    status: "in-progress",
    subtext: "Attempts: 1 / 2",
    helper: "Final exam unlocks at 100%",
  },
  {
    title: "Certification Status",
    Icon: Award,
    variant: "green",
    status: "not-eligible",
    subtext: "Complete all sessions to unlock exam",
    helper: "❌ Certificate not yet available",
  },
];

const GRADIENTS: Record<StatVariant, string> = {
  neutral: "linear-gradient(135deg, #F4F6F8 0%, #EEF1F4 100%)",
  blue: "linear-gradient(135deg, #F4F6F8 0%, #EAF0F5 100%)",
  gold: "linear-gradient(135deg, #F4F6F8 0%, #F1EDE6 100%)",
  green: "linear-gradient(135deg, #F4F6F8 0%, #ECF1ED 100%)",
};

const DOTS: Array<
  Array<{
    left: string;
    top: string;
    size: number;
    delay: string;
    duration: string;
    mobileHide?: boolean;
  }>
> = [
  [
    { left: "14%", top: "22%", size: 4, delay: "0s", duration: "10s" },
    { left: "78%", top: "38%", size: 3, delay: "1.2s", duration: "11s" },
    { left: "62%", top: "72%", size: 5, delay: "2.4s", duration: "9s" },
    { left: "30%", top: "82%", size: 3, delay: "0.6s", duration: "12s", mobileHide: true },
  ],
  [
    { left: "20%", top: "28%", size: 3, delay: "0.3s", duration: "11s" },
    { left: "70%", top: "20%", size: 4, delay: "1.8s", duration: "9.5s" },
    { left: "50%", top: "78%", size: 5, delay: "2.1s", duration: "10s" },
    { left: "85%", top: "60%", size: 3, delay: "0.9s", duration: "12s", mobileHide: true },
  ],
  [
    { left: "16%", top: "30%", size: 4, delay: "0.5s", duration: "10s" },
    { left: "74%", top: "26%", size: 3, delay: "2s", duration: "11s" },
    { left: "58%", top: "80%", size: 5, delay: "1.1s", duration: "9.5s" },
    { left: "32%", top: "76%", size: 3, delay: "2.8s", duration: "12s", mobileHide: true },
  ],
  [
    { left: "22%", top: "24%", size: 5, delay: "0.4s", duration: "11s" },
    { left: "80%", top: "44%", size: 3, delay: "1.6s", duration: "9s" },
    { left: "46%", top: "82%", size: 4, delay: "2.6s", duration: "10s" },
    { left: "14%", top: "68%", size: 3, delay: "3.2s", duration: "12s", mobileHide: true },
  ],
];

const STATUS_MAP: Record<
  StatusKind,
  { bg: string; color: string; dot: string; label: string }
> = {
  "in-progress":  { bg: "#FFF7ED", color: "#D68910", dot: "#F5B041", label: "In Progress" },
  available:      { bg: "#FFF7ED", color: "#D68910", dot: "#F5B041", label: "Available" },
  eligible:       { bg: "#F0FDF4", color: "#047857", dot: "#10B981", label: "Eligible" },
  passed:         { bg: "#F0FDF4", color: "#047857", dot: "#10B981", label: "Passed" },
  completed:      { bg: "#F0FDF4", color: "#047857", dot: "#10B981", label: "Completed" },
  issued:         { bg: "#F0FDF4", color: "#047857", dot: "#10B981", label: "Issued" },
  "not-unlocked": { bg: "#F3F4F6", color: "#6B7280", dot: "#9CA3AF", label: "Not Unlocked" },
  locked:         { bg: "#F3F4F6", color: "#6B7280", dot: "#9CA3AF", label: "Locked" },
  "not-eligible": { bg: "#F3F4F6", color: "#6B7280", dot: "#9CA3AF", label: "Not Eligible" },
  failed:         { bg: "#FEF2F2", color: "#B91C1C", dot: "#EF4444", label: "Failed" },
};

function StatusPill({ status }: { status: StatusKind }) {
  const map = STATUS_MAP[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ backgroundColor: map.bg, color: map.color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: map.dot }} />
      {map.label}
    </span>
  );
}

export function StatsCards() {
  // Animate the progress bar on mount
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = window.setTimeout(() => setProgress(78), 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section>
      <style>{`
        @keyframes amberon-float-a {
          0%, 100% { transform: translate(0, 0); opacity: 0.14; }
          50% { transform: translate(6px, -8px); opacity: 0.20; }
        }
        @keyframes amberon-float-b {
          0%, 100% { transform: translate(0, 0); opacity: 0.13; }
          50% { transform: translate(-7px, -6px); opacity: 0.20; }
        }
        @keyframes amberon-float-c {
          0%, 100% { transform: translate(0, 0); opacity: 0.15; }
          50% { transform: translate(5px, 7px); opacity: 0.20; }
        }
        @keyframes amberon-wave-drift {
          0%   { transform: translate3d(0, 0, 0); }
          50%  { transform: translate3d(-18px, -6px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .amberon-stat-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          border-color: #E0E3E7 !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
          transition:
            transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 280ms cubic-bezier(0.2, 0.8, 0.2, 1),
            background 280ms ease,
            border-color 280ms ease;
        }
        .amberon-stat-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 22px 22px;
          opacity: 0.45;
          pointer-events: none;
          mask-image: radial-gradient(ellipse at 70% 30%, #000 30%, transparent 80%);
        }
        .amberon-stat-card:hover {
          transform: translateY(-3px);
          background: #FFFFFF !important;
          box-shadow: 0 12px 28px -12px rgba(0,0,0,0.10), 0 0 0 1px rgba(245,176,65,0.18);
          border-color: rgba(245,176,65,0.35) !important;
        }
        .amberon-wave {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          mask-image: radial-gradient(ellipse at 85% 85%, #000 0%, rgba(0,0,0,0.65) 40%, transparent 78%);
          -webkit-mask-image: radial-gradient(ellipse at 85% 85%, #000 0%, rgba(0,0,0,0.65) 40%, transparent 78%);
        }
        .amberon-wave svg {
          position: absolute;
          right: -15%;
          bottom: -25%;
          width: 170%;
          height: 170%;
          animation: amberon-wave-drift 16s ease-in-out infinite;
          will-change: transform;
        }
        .amberon-dot {
          position: absolute;
          border-radius: 9999px;
          background: #F5B041;
          z-index: 0;
          pointer-events: none;
          will-change: transform, opacity;
          opacity: 0.15;
        }
        .amberon-dot-a { animation: amberon-float-a var(--d, 10s) ease-in-out infinite; }
        .amberon-dot-b { animation: amberon-float-b var(--d, 10s) ease-in-out infinite; }
        .amberon-dot-c { animation: amberon-float-c var(--d, 10s) ease-in-out infinite; }
        @media (max-width: 767px) {
          .amberon-dot-mobile-hide { display: none; }
          .amberon-wave svg { animation-duration: 22s; }
          .amberon-wave-line-extra { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .amberon-dot { animation: none !important; }
          .amberon-wave svg { animation: none !important; }
          .amberon-stat-card { transition: none; }
          .amberon-progress-fill { transition: none !important; }
        }
        .amberon-progress-fill {
          height: 100%;
          border-radius: 9999px;
          background: linear-gradient(90deg, #F5B041, #D68910);
          transition: width 1100ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>

      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Learning overview
          </h2>
          <p className="text-sm text-muted-foreground">
            Your journey through the Professional Trading Course.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, idx) => {
          const {
            title,
            Icon,
            variant,
            progressLabel,
            mainValue,
            mainTone,
            status,
            subtext,
            helper,
          } = stat;
          const dots = DOTS[idx];
          const isProgressCard = typeof stat.progress === "number";

          return (
            <div
              key={title}
              className="amberon-stat-card group rounded-xl border border-border p-5 shadow-soft"
              style={{ background: GRADIENTS[variant] }}
            >
              {dots.map((d, i) => (
                <span
                  key={i}
                  className={`amberon-dot amberon-dot-${["a", "b", "c"][i % 3]} ${
                    d.mobileHide ? "amberon-dot-mobile-hide" : ""
                  }`}
                  style={{
                    left: d.left,
                    top: d.top,
                    width: `${d.size}px`,
                    height: `${d.size}px`,
                    animationDelay: d.delay,
                    ["--d" as string]: d.duration,
                  }}
                />
              ))}

              <div className="relative z-10 flex items-center justify-between">
                <div
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground"
                  style={{ background: "#F3F4F6" }}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-primary-deep" />
              </div>

              <p className="relative z-10 mt-5 text-sm font-semibold text-foreground">
                {title}
              </p>

              {/* Main value area */}
              <div className="relative z-10 mt-2">
                {isProgressCard ? (
                  <p
                    className="text-2xl font-semibold tracking-tight"
                    style={{ color: "#D68910" }}
                  >
                    {progressLabel}
                  </p>
                ) : mainValue ? (
                  <p
                    className="text-3xl font-semibold tracking-tight"
                    style={{ color: mainTone === "gold" ? "#D68910" : "#111827" }}
                  >
                    {mainValue}
                  </p>
                ) : status ? (
                  <StatusPill status={status} />
                ) : null}
              </div>

              {/* Status pill below value when both exist */}
              {(isProgressCard || mainValue) && status && (
                <div className="relative z-10 mt-2">
                  <StatusPill status={status} />
                </div>
              )}

              <p className="relative z-10 mt-2 text-xs text-muted-foreground">{subtext}</p>

              {/* Animated progress bar (Card 1) */}
              {isProgressCard && (
                <div className="relative z-10 mt-3">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F3F4F6]">
                    <div
                      className="amberon-progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {helper && (
                <p className="relative z-10 mt-2 text-[11px] font-medium tracking-wide text-muted-foreground">
                  {helper}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
