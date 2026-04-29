import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ux from "@/assets/course-ux.jpg";
import data from "@/assets/course-data.jpg";
import marketing from "@/assets/course-marketing.jpg";

const ITEMS = [
  { title: "Designing Intuitive Interfaces", chapter: "Chapter 6 of 12", progress: 52, img: ux },
  { title: "Data Analytics with Python", chapter: "Chapter 3 of 9", progress: 28, img: data },
  { title: "Modern Marketing Strategy", chapter: "Chapter 8 of 10", progress: 84, img: marketing },
];

export function ContinueLearning() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Continue learning
          </h2>
          <p className="text-sm text-muted-foreground">Pick up right where you left off.</p>
        </div>
        <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
          View all
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((c) => (
          <article
            key={c.title}
            className="lift overflow-hidden rounded-xl border border-border bg-card shadow-soft"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {c.chapter}
              </p>
              <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">
                {c.title}
              </h3>

              <div className="mt-4">
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{c.progress}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <Button variant="gold" size="sm" className="rounded-full">
                  <Play className="h-3.5 w-3.5" /> Resume
                </Button>
                <span className="text-xs text-muted-foreground">~22 min left</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
