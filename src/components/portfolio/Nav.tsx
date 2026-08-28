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
      setScrolled(window.scrollY > 20);

      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div
          className={`flex items-center justify-between py-3 transition-all duration-300 ${
            scrolled
              ? "border border-white/10 bg-black/90 px-5 backdrop-blur-md"
              : "px-1"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <span className="text-foreground">SAKTHISREE</span>
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center border border-white/20 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-all hover:bg-foreground hover:text-background"
          >
            Let's Talk
          </a>

          {/* Mobile Menu */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/10 bg-black md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="mt-2 border border-white/10 bg-black/95 p-5 backdrop-blur-md md:hidden">
            <nav className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}