export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
        <span className="text-sm font-semibold text-primary">A</span>
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-primary" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold tracking-tight text-foreground">Amberon</p>
        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          Training Institute
        </p>
      </div>
    </div>
  );
}
