import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 16);

    if (open) {
      setOpen(false);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => window.removeEventListener("scroll", onScroll);
}, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-serif text-xl">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-foreground">Sakthisree</span>
            <span className="text-coral">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-coral to-cyan transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Let's Talk
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg glass"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

       {open && (
  <div className="md:hidden w-64 ml-auto mt-2 rounded-2xl bg-black/35 backdrop-blur-lg border border-white/10 p-4 flex flex-col gap-3 animate-fade-up shadow-xl">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white text-xl font-medium hover:text-coral py-2 transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
