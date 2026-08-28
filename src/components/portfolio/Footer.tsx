export function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="text-xl font-semibold tracking-tight">
              SAKTHISREE<span className="text-accent">.</span>
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Building intelligent software solutions through technology,
              AI, and creativity.
            </p>
          </div>

          <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Software · AI/ML · Cybersecurity
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:px-10">
          <span>
            © {new Date().getFullYear()} Sakthisree J
          </span>

          <span>
            Crafted with care.
          </span>
        </div>
      </div>
    </footer>
  );
}