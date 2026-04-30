import { ArrowRight, BadgeCheck, GraduationCap, LineChart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-trading.jpg";

const TRUST = [
  { Icon: BadgeCheck, label: "KHDA Certification Ready" },
  { Icon: LineChart, label: "Practice Trading Challenge" },
  { Icon: Sparkles, label: "Industry Expert Designed" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
      {/* Background chart image — full banner */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        {/* Readability overlay (stronger on left, fades right) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.97) 35%, rgba(255,255,255,0.78) 60%, rgba(255,255,255,0.42) 100%)",
          }}
        />
        {/* Mobile: stronger flat overlay for readability */}
        <div className="absolute inset-0 bg-white/80 md:hidden" />
      </div>

      {/* KHDA credibility badge — top right */}
      <div className="absolute right-4 top-4 z-10 hidden sm:block">
        <div className="flex items-center gap-2 rounded-full border border-border bg-white/90 px-3 py-1.5 text-[11px] font-medium text-muted-foreground shadow-soft backdrop-blur">
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary-deep/70" />
          KHDA Aligned Curriculum
        </div>
      </div>

      {/* Subtle Amberon watermark */}
      <div className="pointer-events-none absolute bottom-4 right-5 z-10 hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/15 md:block">
        Amberon Training Institute
      </div>

      {/* Foreground content */}
      <div className="relative z-[1] grid gap-0 md:grid-cols-[1.15fr_1fr]">
        <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
          {/* Pill */}
          <div
            className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: "#FFF7ED", color: "#D68910" }}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            KHDA-Aligned Training Program
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[42px] lg:leading-[1.1]">
              Become a disciplined{" "}
              <span className="text-primary-deep">professional</span> trader.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Master technical analysis, risk management, and real-world trading
              strategies in a structured 2-day intensive program.
            </p>

            <p
              dir="rtl"
              lang="ar"
              className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground/70"
            >
              دورة تداول احترافية معتمدة لتطوير مهاراتك في الأسواق المالية
            </p>

            <p className="mt-3 text-xs font-medium tracking-wide text-muted-foreground">
              16 Hours &nbsp;•&nbsp; Beginner to Intermediate &nbsp;•&nbsp;
              Arabic &amp; English &nbsp;•&nbsp; Dubai, UAE
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button variant="gold" size="lg" className="w-full rounded-full sm:w-auto">
              Resume Learning <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full rounded-full sm:w-auto">
              View Curriculum
            </Button>
          </div>

          {/* Trust row */}
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/70 pt-5">
            {TRUST.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-primary-deep/70" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column reserved for chart visibility */}
        <div className="hidden min-h-[380px] md:block" />
      </div>
    </section>
  );
}
