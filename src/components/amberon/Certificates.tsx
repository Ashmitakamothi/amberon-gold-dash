import { Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CERTS = [
  { title: "UX Foundations", date: "Mar 2026", id: "AMB-2731" },
  { title: "Marketing Analytics", date: "Feb 2026", id: "AMB-2614" },
  { title: "Product Strategy", date: "Jan 2026", id: "AMB-2502" },
];

export function Certificates() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Certificates</h2>
          <p className="text-sm text-muted-foreground">Earned credentials, ready to share.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {CERTS.map((c) => (
          <article
            key={c.id}
            className="lift rounded-xl border border-border bg-card p-5 shadow-soft"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft">
                <Award className="h-4 w-4 text-primary-deep" />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                {c.id}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
              {c.title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">Issued {c.date}</p>
            <Button variant="outline" size="sm" className="mt-4 w-full rounded-full">
              <Download className="h-3.5 w-3.5" /> Download
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
