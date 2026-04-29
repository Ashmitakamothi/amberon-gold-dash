import { ArrowRight } from "lucide-react";
import ux from "@/assets/course-ux.jpg";
import data from "@/assets/course-data.jpg";
import marketing from "@/assets/course-marketing.jpg";
import finance from "@/assets/course-finance.jpg";
import leadership from "@/assets/course-leadership.jpg";

const REC = [
  { title: "Design Systems at Scale", tag: "Design", duration: "6h", img: ux },
  { title: "SQL for Decision Makers", tag: "Data", duration: "4h", img: data },
  { title: "Brand Storytelling", tag: "Marketing", duration: "3h", img: marketing },
  { title: "Investor Conversations", tag: "Finance", duration: "5h", img: finance },
  { title: "Coaching Conversations", tag: "Leadership", duration: "4h", img: leadership },
];

export function Recommended() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Recommended for you
          </h2>
          <p className="text-sm text-muted-foreground">Based on your learning.</p>
        </div>
      </div>
      <div className="no-scrollbar -mx-6 flex gap-4 overflow-x-auto px-6 pb-2">
        {REC.map((c) => (
          <article
            key={c.title}
            className="lift group flex w-[260px] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
              <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {c.tag} • {c.duration}
              </p>
              <h3 className="mt-1 text-sm font-semibold tracking-tight text-foreground">
                {c.title}
              </h3>
              <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary-deep transition-colors hover:text-foreground">
                Preview <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
