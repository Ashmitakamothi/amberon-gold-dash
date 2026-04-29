import { BookOpen, CheckCircle2, Award, Flame, ArrowUpRight } from "lucide-react";

const STATS = [
  { label: "Active courses", value: "6", delta: "+2 this month", Icon: BookOpen },
  { label: "Completion", value: "78%", delta: "+12% this week", Icon: CheckCircle2 },
  { label: "Certificates", value: "14", delta: "2 ready to claim", Icon: Award },
  { label: "Learning streak", value: "21", suffix: "days", delta: "Personal best", Icon: Flame },
];

export function StatsCards() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Learning overview
          </h2>
          <p className="text-sm text-muted-foreground">Your progress at a glance.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map(({ label, value, suffix, delta, Icon }) => (
          <div
            key={label}
            className="lift group rounded-xl border border-border bg-card p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                <Icon className="h-4 w-4" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-primary-deep" />
            </div>
            <div className="mt-5 flex items-baseline gap-1.5">
              <p className="text-3xl font-semibold tracking-tight text-primary-deep">{value}</p>
              {suffix && (
                <span className="text-sm font-medium text-muted-foreground">{suffix}</span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-foreground">{label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{delta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
