import {
  TrendingUp,
  Layers,
  ShieldCheck,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

type StatVariant = "neutral" | "blue" | "gold" | "green";

type Stat = {
  title: string;
  value: string;
  subtext: string;
  detail?: string;
  Icon: typeof TrendingUp;
  variant: StatVariant;
  progress?: number; // 0–100
  status?: "in-progress" | "ready" | "done";
};

const STATS: Stat[] = [
  {
    title: "Course Progress",
    value: "78%",
    subtext: "Professional Trading Course",
    detail: "Day 2 in progress",
    Icon: TrendingUp,
    variant: "neutral",
    progress: 78,
  },
  {
    title: "Modules Completed",
    value: "6 / 8",
    subtext: "Sessions completed",
    detail: "Technical Analysis ✓",
    Icon: Layers,
    variant: "blue",
  },
  {
    title: "Risk Framework",
    value: "In Progress",
    subtext: "Discipline & risk rules training",
    detail: "Daily drawdown • Position sizing",
    Icon: ShieldCheck,
    variant: "gold",
    status: "in-progress",
  },
  {
    title: "Assessment Readiness",
    value: "Ready",
    subtext: "Final evaluation eligibility",
    detail: "70% required to pass",
    Icon: GraduationCap,
    variant: "green",
    status: "ready",
  },
];

const GRADIENTS: Record<StatVariant, string> = {
  neutral: "linear-gradient(135deg, #FFFFFF, #F9FAFB)",
  blue: "linear-gradient(135deg, #FFFFFF, #F7FBFF)",
  gold: "linear-gradient(135deg, #FFFFFF, #FFF9F5)",
  green: "linear-gradient(135deg, #FFFFFF, #F8FFF7)",
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

function StatusPill({ status }: { status: NonNullable<Stat["status"]> }) {
  const map = {
    "in-progress": { bg: "#FFF7ED", color: "#D68910", dot: "#F5B041", label: "In Progress" },
    ready: { bg: "#F0FDF4", color: "#15803D", dot: "#22C55E", label: "Ready" },
    done: { bg: "#EFF6FF", color: "#1D4ED8", dot: "#3B82F6", label: "Completed" },
  }[status];
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
  return (
    <section>
      <style>{`
        @keyframes amberon-float-a {
          0%, 100% { transform: translate(0, 0); opacity: 0.22; }
          50% { transform: translate(6px, -8px); opacity: 0.32; }
        }
        @keyframes amberon-float-b {
          0%, 100% { transform: translate(0, 0); opacity: 0.20; }
          50% { transform: translate(-7px, -6px); opacity: 0.30; }
        }
        @keyframes amberon-float-c {
          0%, 100% { transform: translate(0, 0); opacity: 0.24; }
          50% { transform: translate(5px, 7px); opacity: 0.30; }
        }
        .amberon-stat-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          transition:
            transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 280ms cubic-bezier(0.2, 0.8, 0.2, 1),
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
          opacity: 0.55;
          pointer-events: none;
          mask-image: radial-gradient(ellipse at 70% 30%, #000 30%, transparent 80%);
        }
        .amberon-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px -12px rgba(0,0,0,0.10), 0 0 0 1px rgba(245,176,65,0.18);
          border-color: rgba(245,176,65,0.35);
        }
        .amberon-dot {
          position: absolute;
          border-radius: 9999px;
          background: #F5B041;
          z-index: 0;
          pointer-events: none;
          will-change: transform, opacity;
        }
        .amberon-dot-a { animation: amberon-float-a var(--d, 10s) ease-in-out infinite; }
        .amberon-dot-b { animation: amberon-float-b var(--d, 10s) ease-in-out infinite; }
        .amberon-dot-c { animation: amberon-float-c var(--d, 10s) ease-in-out infinite; }
        @media (max-width: 767px) {
          .amberon-dot-mobile-hide { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .amberon-dot { animation: none !important; }
          .amberon-stat-card { transition: none; }
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
          const { title, value, subtext, detail, Icon, variant, progress, status } = stat;
          const dots = DOTS[idx];
          const isStatus = !!status;
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

              <div className="relative z-10 mt-2">
                {isStatus ? (
                  <StatusPill status={status!} />
                ) : (
                  <p
                    className="text-3xl font-semibold tracking-tight"
                    style={{ color: "#D68910" }}
                  >
                    {value}
                  </p>
                )}
              </div>

              <p className="relative z-10 mt-2 text-xs text-muted-foreground">{subtext}</p>

              {typeof progress === "number" && (
                <div className="relative z-10 mt-3">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F3F4F6]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${progress}%`,
                        background:
                          "linear-gradient(90deg, #F5B041, #D68910)",
                      }}
                    />
                  </div>
                </div>
              )}

              {detail && (
                <p className="relative z-10 mt-2 text-[11px] font-medium tracking-wide text-muted-foreground">
                  {detail}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
