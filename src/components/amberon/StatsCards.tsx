import { BookOpen, CheckCircle2, Award, Flame, ArrowUpRight } from "lucide-react";

type StatVariant = "neutral" | "blue" | "gold" | "green";

const STATS: Array<{
  label: string;
  value: string;
  suffix?: string;
  delta: string;
  Icon: typeof BookOpen;
  variant: StatVariant;
}> = [
  { label: "Active courses", value: "6", delta: "+2 this month", Icon: BookOpen, variant: "neutral" },
  { label: "Completion", value: "78%", delta: "+12% this week", Icon: CheckCircle2, variant: "blue" },
  { label: "Certificates", value: "14", delta: "2 ready to claim", Icon: Award, variant: "gold" },
  { label: "Learning streak", value: "21", suffix: "days", delta: "Personal best", Icon: Flame, variant: "green" },
];

const GRADIENTS: Record<StatVariant, string> = {
  neutral: "linear-gradient(135deg, #FFFFFF, #F9FAFB)",
  blue: "linear-gradient(135deg, #FFFFFF, #F7FBFF)",
  gold: "linear-gradient(135deg, #FFFFFF, #FFF9F5)",
  green: "linear-gradient(135deg, #FFFFFF, #F8FFF7)",
};

// Pre-computed dot configs per card so SSR & client match.
const DOTS: Array<Array<{ left: string; top: string; size: number; delay: string; duration: string; mobileHide?: boolean }>> = [
  [
    { left: "14%", top: "22%", size: 4, delay: "0s", duration: "10s" },
    { left: "78%", top: "38%", size: 3, delay: "1.2s", duration: "11s" },
    { left: "62%", top: "72%", size: 5, delay: "2.4s", duration: "9s" },
    { left: "30%", top: "82%", size: 3, delay: "0.6s", duration: "12s", mobileHide: true },
    { left: "88%", top: "78%", size: 4, delay: "3s", duration: "10.5s", mobileHide: true },
  ],
  [
    { left: "20%", top: "28%", size: 3, delay: "0.3s", duration: "11s" },
    { left: "70%", top: "20%", size: 4, delay: "1.8s", duration: "9.5s" },
    { left: "50%", top: "78%", size: 5, delay: "2.1s", duration: "10s" },
    { left: "85%", top: "60%", size: 3, delay: "0.9s", duration: "12s", mobileHide: true },
    { left: "12%", top: "70%", size: 4, delay: "3.4s", duration: "11.5s", mobileHide: true },
  ],
  [
    { left: "16%", top: "30%", size: 4, delay: "0.5s", duration: "10s" },
    { left: "74%", top: "26%", size: 3, delay: "2s", duration: "11s" },
    { left: "58%", top: "80%", size: 5, delay: "1.1s", duration: "9.5s" },
    { left: "32%", top: "76%", size: 3, delay: "2.8s", duration: "12s", mobileHide: true },
    { left: "90%", top: "70%", size: 4, delay: "0.2s", duration: "10.5s", mobileHide: true },
  ],
  [
    { left: "22%", top: "24%", size: 5, delay: "0.4s", duration: "11s" },
    { left: "80%", top: "44%", size: 3, delay: "1.6s", duration: "9s" },
    { left: "46%", top: "82%", size: 4, delay: "2.6s", duration: "10s" },
    { left: "14%", top: "68%", size: 3, delay: "3.2s", duration: "12s", mobileHide: true },
    { left: "70%", top: "78%", size: 4, delay: "0.8s", duration: "11s", mobileHide: true },
  ],
];

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
          transform: translateY(-4px);
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
          <p className="text-sm text-muted-foreground">Your progress at a glance.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map(({ label, value, suffix, delta, Icon, variant }, idx) => {
          const dots = DOTS[idx];
          return (
            <div
              key={label}
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

              <div className="relative z-10 mt-5 flex items-baseline gap-1.5">
                <p className="text-3xl font-semibold tracking-tight" style={{ color: "#D68910" }}>
                  {value}
                </p>
                {suffix && (
                  <span className="text-sm font-medium text-muted-foreground">{suffix}</span>
                )}
              </div>
              <p className="relative z-10 mt-1 text-sm font-medium text-foreground">{label}</p>
              <p className="relative z-10 mt-1 text-xs text-muted-foreground">{delta}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
