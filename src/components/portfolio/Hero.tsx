import { useEffect, useState } from "react";
import { ArrowRight, FileText, Mail } from "lucide-react";
const HERO_IMG = "https://i.postimg.cc/W4ZzSyJc/1780506856095.jpg";

const roles = [
  "Software Engineer",
  "Full Stack Explorer",
  "Creative Thinker",
  "Problem Solver",
  "Continuous Learner",
  "AI & ML Enthusiast",
  "Cybersecurity Enthusiast",
];

const badges = ["Java", "Python", "AI", "ML", "Cybersecurity", "DSA", "TensorFlow", "React", "Flask", "REST API", "Spring Boot", "C"];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Floating gradient blobs */}
      <div aria-hidden className="absolute -top-32 -left-20 h-[520px] w-[520px] rounded-full bg-coral/20 blur-3xl animate-blob" />
      <div aria-hidden className="absolute top-40 -right-32 h-[460px] w-[460px] rounded-full bg-cyan/20 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      <div aria-hidden className="absolute inset-0 grid-noise opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7 space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to Software / AI / ML / Cybersecurity roles
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Hi, I'm <span className="text-gradient">Sakthisree J</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground font-mono h-8">
            <span className="text-foreground">&gt;</span> {text}
            <span className="ml-0.5 inline-block w-0.5 h-6 align-middle bg-coral animate-pulse" />
          </div>


          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
  href="https://drive.google.com/file/d/1Tv26TCWN6EWH0oGSlC6AC0OK02p-lcdO/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm"
>
  <FileText size={16} />
  Resume
</a>
           <a
  href="#contact"
  className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm"
>
  <Mail size={16} />
  Contact Me
</a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
            {[
              { k: "350+", v: "LeetCode Solved" },
              { k: "4+", v: "Major Projects" },
              { k: "> AI & ML Enthusiast", v: "Enthusiast" },
              { k: "Cyber", v: "Intern" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-2xl md:text-3xl font-serif text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="relative mx-auto max-w-md">
            <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-coral/40 via-transparent to-cyan/40 blur-2xl opacity-70" />
            <div className="relative overflow-hidden rounded-[2rem] glass-strong p-2">
              <img
                src={HERO_IMG}
                alt="Sakthisree J portrait"
                width={1024}
                height={1024}
                className="w-full aspect-square object-cover"
              />
            </div>
            {/* floating chips */}
            <div className="absolute -left-6 top-10 glass rounded-2xl px-3 py-2 text-xs font-mono animate-float">
              <span className="text-cyan">{"{ "}</span>ai: "ML"<span className="text-cyan">{" }"}</span>
            </div>
            <div className="absolute -right-4 top-1/3 glass rounded-2xl px-3 py-2 text-xs font-mono animate-float-slow">
              <span className="text-coral">●</span> Detection Engineer
            </div>
            <div className="absolute -left-4 bottom-10 glass rounded-2xl px-3 py-2 text-xs font-mono animate-float" style={{ animationDelay: "-3s" }}>
              CGPA <span className="text-gradient">8.11</span>
            </div>
            <div className="absolute -right-6 bottom-20 glass rounded-2xl px-3 py-2 text-xs font-mono animate-float-slow" style={{ animationDelay: "-2s" }}>
              <span className="text-coral">✦</span> Creative Thinker
            </div>
            <div
  className="absolute right-2 top-16 glass rounded-2xl px-3 py-2 text-xs font-mono animate-float"
  style={{ animationDelay: "-6s" }}
>
  <span className="text-coral">🏆</span> Competitive Programmer
</div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 glass rounded-2xl px-3 py-2 text-xs font-mono animate-float" style={{ animationDelay: "-1s" }}>
              <span className="text-cyan">◆</span> Problem Solver
            </div>
            <div className="absolute -left-8 top-1/2 glass rounded-2xl px-3 py-2 text-xs font-mono animate-float-slow" style={{ animationDelay: "-4s" }}>
              <span className="text-coral">❋</span> Mandala Artist
            </div>
            <div className="absolute -right-8 bottom-4 glass rounded-2xl px-3 py-2 text-xs font-mono animate-float" style={{ animationDelay: "-5s" }}>
              <span className="text-cyan">?</span> Curious Learner
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 glass rounded-2xl px-3 py-2 text-xs font-mono animate-float-slow" style={{ animationDelay: "-2.5s" }}>
              <span className="text-gradient">⟨/⟩</span> Full Stack Explorer
            </div>
          </div>
        </div>
      </div>

      {/* Marquee of tech badges */}
      <div className="relative mt-20 overflow-hidden border-y border-border/60 py-5">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...badges, ...badges, ...badges].map((b, i) => (
            <span key={i} className="text-2xl md:text-3xl font-serif text-muted-foreground/70">
              {b} <span className="text-coral mx-3">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
