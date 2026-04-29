import { Star } from "lucide-react";
import product from "@/assets/course-product.jpg";
import finance from "@/assets/course-finance.jpg";
import leadership from "@/assets/course-leadership.jpg";
import data from "@/assets/course-data.jpg";

const COURSES = [
  {
    title: "Product Management Essentials",
    instructor: "Daniel Ross",
    rating: 4.9,
    price: "$129",
    img: product,
    badge: "Bestseller",
  },
  {
    title: "Financial Modeling Pro",
    instructor: "Aisha Khan",
    rating: 4.8,
    price: "$149",
    img: finance,
    badge: "Premium",
  },
  {
    title: "Leadership for Modern Teams",
    instructor: "Marcus Lee",
    rating: 4.7,
    price: "$99",
    img: leadership,
  },
  {
    title: "Applied Data Analytics",
    instructor: "Elena Souza",
    rating: 4.9,
    price: "$159",
    img: data,
    badge: "Premium",
  },
];

export function TrendingCourses() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Trending this week
          </h2>
          <p className="text-sm text-muted-foreground">Most-enrolled courses across Amberon.</p>
        </div>
        <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
          Browse all
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {COURSES.map((c) => (
          <article
            key={c.title}
            className="lift group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              {c.badge && (
                <span
                  className={`absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                    c.badge === "Premium"
                      ? "bg-primary text-foreground"
                      : "bg-surface text-muted-foreground"
                  } shadow-soft`}
                >
                  {c.badge}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-sm font-semibold tracking-tight text-foreground">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.instructor}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="font-medium text-foreground">{c.rating}</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{c.price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
