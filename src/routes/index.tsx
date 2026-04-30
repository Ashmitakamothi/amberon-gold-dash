import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/amberon/Navbar";
import { AnnouncementBar } from "@/components/amberon/AnnouncementBar";
import { Hero } from "@/components/amberon/Hero";
import { StatsCards } from "@/components/amberon/StatsCards";
import { ContinueLearning } from "@/components/amberon/ContinueLearning";
import { LearningJourney } from "@/components/amberon/LearningJourney";
import { Recommended } from "@/components/amberon/Recommended";
import { Scheduler } from "@/components/amberon/Scheduler";
import { Certificates } from "@/components/amberon/Certificates";
import { Rewards } from "@/components/amberon/Rewards";
import { MobileTabs } from "@/components/amberon/MobileTabs";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dashboard — Amberon Training Institute" },
      {
        name: "description",
        content:
          "Your premium learning dashboard at Amberon Training Institute. Track progress, certificates, and curated courses.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <AnnouncementBar />

      <main className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 py-8 md:py-10">
        <Hero />
        <StatsCards />
        <ContinueLearning />
        <LearningJourney />
        <Recommended />

        <div className="grid gap-6 lg:grid-cols-2">
          <Scheduler />
          <Rewards />
        </div>

        <Certificates />

        <footer className="border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 Amberon Training Institute. Crafted for learners.
        </footer>
      </main>

      <MobileTabs />
    </div>
  );
}
