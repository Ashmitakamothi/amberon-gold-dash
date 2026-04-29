import { useState } from "react";
import { Home, BookOpen, Compass, Bell, User } from "lucide-react";

const TABS = [
  { label: "Home", Icon: Home },
  { label: "Courses", Icon: BookOpen },
  { label: "Explore", Icon: Compass },
  { label: "Alerts", Icon: Bell },
  { label: "Profile", Icon: User },
];

export function MobileTabs() {
  const [active, setActive] = useState("Home");
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur-md md:hidden">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {TABS.map(({ label, Icon }) => {
          const isActive = label === active;
          return (
            <li key={label} className="flex-1">
              <button
                onClick={() => setActive(label)}
                className="relative flex w-full flex-col items-center gap-1 py-2.5"
              >
                <Icon
                  className={`h-5 w-5 transition-colors ${
                    isActive ? "text-primary-deep" : "text-muted-foreground"
                  }`}
                />
                <span
                  className={`text-[10px] font-medium ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
                {isActive && (
                  <span className="absolute bottom-1 h-0.5 w-6 rounded-full bg-primary" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
