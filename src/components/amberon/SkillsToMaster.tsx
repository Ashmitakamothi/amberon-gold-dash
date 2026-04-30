import { useState } from "react";
import { ArrowRight, Eye, Heart } from "lucide-react";
import technical from "@/assets/blog-technical.jpg";
import risk from "@/assets/blog-risk.jpg";
import mindset from "@/assets/blog-mindset.jpg";
import strategy from "@/assets/blog-strategy.jpg";

type Blog = {
  id: string;
  category: string;
  title: string;
  description: string;
  views: string;
  likes: number;
  img: string;
};

const BLOGS: Blog[] = [
  {
    id: "technical",
    category: "Technical Analysis",
    title: "Mastering Technical Analysis for Smarter Trades",
    description: "Understand charts, patterns, and market trends with practical insights.",
    views: "1.2K",
    likes: 184,
    img: technical,
  },
  {
    id: "risk",
    category: "Risk Management",
    title: "Risk Management Strategies Every Trader Must Know",
    description: "Learn how to protect your capital and control losses effectively.",
    views: "2.4K",
    likes: 312,
    img: risk,
  },
  {
    id: "mindset",
    category: "Trading Psychology",
    title: "Building a Winning Trading Mindset",
    description: "Develop discipline and emotional control in trading decisions.",
    views: "3.1K",
    likes: 421,
    img: mindset,
  },
  {
    id: "strategy",
    category: "Strategy Building",
    title: "How to Develop Profitable Trading Strategies",
    description: "Create and test strategies for consistent, repeatable results.",
    views: "1.8K",
    likes: 256,
    img: strategy,
  },
];

export function SkillsToMaster() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Skills You Will Master
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Explore essential knowledge and insights to become a disciplined professional trader.
          </p>
        </div>
        <button className="shrink-0 text-sm font-medium text-primary-deep transition-colors hover:text-foreground">
          View All
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {BLOGS.map((blog) => {
          const isLiked = liked[blog.id];
          const likeCount = blog.likes + (isLiked ? 1 : 0);

          return (
            <article
              key={blog.id}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-[14px] border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-[3px] hover:shadow-lift"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={blog.img}
                  alt={blog.title}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4">
                {/* Category pill */}
                <span className="inline-flex w-fit items-center rounded-full bg-primary-soft px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-deep">
                  {blog.category}
                </span>

                {/* Title */}
                <h3 className="mt-2.5 line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary-deep">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {blog.description}
                </p>

                {/* Engagement row */}
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      {blog.views}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(blog.id);
                      }}
                      className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                      aria-label={isLiked ? "Unlike" : "Like"}
                    >
                      <Heart
                        className={`h-3.5 w-3.5 transition-all ${
                          isLiked ? "fill-primary text-primary" : ""
                        }`}
                      />
                      {likeCount}
                    </button>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-md border border-primary/30 px-2.5 py-1 text-[11px] font-semibold text-primary-deep transition-colors hover:bg-primary-soft"
                  >
                    Read More <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
