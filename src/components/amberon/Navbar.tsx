import { useState } from "react";
import { Bell, HelpCircle, Search } from "lucide-react";
import { Logo } from "./Logo";

const NAV = ["Dashboard", "My Courses", "Explore Courses", "Notifications", "Help & Support"];

export function Navbar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-6 px-6">
        <Logo />

        <div className="ml-2 hidden flex-1 max-w-md md:block">
          <div className="group flex h-10 items-center gap-2 rounded-full border border-transparent bg-secondary px-4 transition-colors focus-within:border-primary/40 focus-within:bg-surface">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search courses, instructors, certificates..."
              className="h-full w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <kbd className="hidden rounded border border-border bg-surface px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground lg:block">
              ⌘K
            </kbd>
          </div>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.slice(0, 3).map((item) => {
            const isActive = item === active;
            return (
              <button
                key={item}
                onClick={() => setActive(item)}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className={isActive ? "text-foreground" : ""}>{item}</span>
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full bg-primary" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <button
            aria-label="Notifications"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-surface" />
          </button>
          <button
            aria-label="Help"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex"
          >
            <HelpCircle className="h-4 w-4" />
          </button>
          <div className="ml-2 flex items-center gap-2 rounded-full border border-border py-1 pl-1 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-primary">
              SM
            </div>
            <span className="hidden text-sm font-medium text-foreground sm:block">Sara M.</span>
          </div>
        </div>
      </div>
    </header>
  );
}
