import { ArrowRight, BadgeCheck, LineChart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-trading.jpg";

const TRUST = [
  { Icon: BadgeCheck, label: "KHDA Certification Ready" },
  { Icon: LineChart, label: "Practice Trading Challenge" },
  { Icon: Sparkles, label: "Industry Expert Designed" },
];

export function Hero() {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
      <div className="grid gap-0 md:grid-cols-[1.15fr_1fr]">
        {/* LEFT — content */}
        <div className="relative flex flex-col justify-center gap-6 p-8 md:p-12">
          {/* KHDA pill */}
          <div
            className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: "#FFF7ED", color: "#D68910" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            KHDA-Aligned Program
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[42px] lg:leading-[1.1]">
              Master professional <span className="text-primary-deep">trading</span> with
              structured discipline.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Comprehensive 2-day intensive program covering technical analysis, risk
              management, and real-world trading strategies.
            </p>

            {/* Arabic line */}
            <p
              dir="rtl"
              lang="ar"
              className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground/70"
            >
              دورة تداول احترافية معتمدة لتطوير مهاراتك في الأسواق المالية
            </p>

            {/* Meta line */}
            <p className="mt-3 text-xs font-medium tracking-wide text-muted-foreground">
              Arabic &amp; English &nbsp;•&nbsp; 16 Hours &nbsp;•&nbsp; Beginner to
              Intermediate &nbsp;•&nbsp; Dubai, UAE
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              variant="gold"
              size="lg"
              className="w-full rounded-full sm:w-auto"
            >
              Resume Learning <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-full sm:w-auto"
            >
              View Course Details
            </Button>
            <a
              href="#curriculum"
              className="text-sm font-medium text-primary-deep underline-offset-4 hover:underline sm:ml-2"
            >
              View Full Curriculum →
            </a>
          </div>

          {/* Trust row */}
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5">
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

        {/* RIGHT — visual */}
        <div
          className="relative hidden min-h-[360px] md:block"
          style={{
            background:
              "linear-gradient(135deg, #FAFAFA, #F3F4F6)",
          }}
        >
          {/* subtle vertical separator fade */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(17,24,39,0.08), transparent)",
            }}
          />
          <img
            src={heroImg}
            alt="Abstract trading chart visual"
            width={1280}
            height={960}
            className="h-full w-full object-cover opacity-90 mix-blend-multiply"
          />
          {/* soft fade into left column */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-surface/30" />
        </div>
      </div>
    </section>
  );
}
