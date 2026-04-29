import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-learning.jpg";

export function Hero() {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
      <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Welcome back, Sara
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[42px] lg:leading-[1.1]">
              Master skills that move <br className="hidden lg:block" />
              your <span className="text-primary-deep">career</span> forward.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Resume your last lesson or explore curated tracks designed by
              industry experts at Amberon.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="gold" size="lg" className="rounded-full">
              Resume learning <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <PlayCircle className="h-4 w-4" /> Watch intro
            </Button>
          </div>
        </div>
        <div className="relative hidden bg-secondary md:block">
          <img
            src={heroImg}
            alt="Premium learning illustration"
            width={1280}
            height={768}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-surface/40" />
        </div>
      </div>
    </section>
  );
}
