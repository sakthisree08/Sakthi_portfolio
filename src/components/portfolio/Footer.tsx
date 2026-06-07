export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
        <div>
          <div className="font-serif text-2xl">
            Sakthisree J<span className="text-coral">.</span>
          </div>

          <p className="text-sm text-muted-foreground mt-2 max-w-md">
            Building intelligent software solutions through innovation, AI, and creativity.
          </p>
        </div>
      </div>

      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sakthisree J · Crafted with care.
      </div>
    </footer>
  );
}