import { Coins, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Rewards() {
  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Coins className="h-3.5 w-3.5" /> Rewards wallet
          </div>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-primary-deep">
            2,480 <span className="text-base font-medium text-muted-foreground">pts</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            320 points expire in 14 days — use them on premium courses.
          </p>
        </div>
        <div className="hidden h-12 w-12 items-center justify-center rounded-lg bg-primary-soft sm:flex">
          <Gift className="h-5 w-5 text-primary-deep" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-5">
        <div>
          <p className="text-xs text-muted-foreground">Earned</p>
          <p className="mt-1 text-sm font-semibold text-foreground">+180 this week</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Tier</p>
          <p className="mt-1 text-sm font-semibold text-foreground">Gold</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Next reward</p>
          <p className="mt-1 text-sm font-semibold text-foreground">520 pts</p>
        </div>
      </div>

      <Button variant="gold" className="mt-5 w-full rounded-full">
        Claim rewards
      </Button>
    </section>
  );
}
