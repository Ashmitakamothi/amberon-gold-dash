import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AnnouncementBar() {
  return (
    <div className="border-b border-border bg-primary-soft">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-2 px-6 py-2.5 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex items-center gap-2 text-sm text-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary-deep" />
          <span>
            <span className="font-semibold">New cohort:</span>{" "}
            <span className="text-muted-foreground">
              Advanced AI for Professionals — starts May 12
            </span>
          </span>
        </div>
        <Button variant="goldOutline" size="sm" className="sm:ml-auto h-7 rounded-full px-3 text-xs">
          Reserve seat
        </Button>
      </div>
    </div>
  );
}
