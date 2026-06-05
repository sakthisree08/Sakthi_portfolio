import { useEffect, useRef, useState } from "react";
import { Trophy, Code, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Code, n: 350, suffix: "+", label: "LeetCode Problems Solved" },

  { icon: Trophy, n: 4, suffix: "+", label: "Projects Completed" },

  { icon: ShieldCheck, n: 1, suffix: "", label: "Cybersecurity Internship" },

  { icon: Sparkles, n: 3, suffix: "+", label: "Leadership & Creative Roles" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const dur = 1400;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-coral mb-4">Milestones</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Achievements <span className="text-gradient">in numbers</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.label} className="reveal glass-strong rounded-3xl p-7 group hover:bg-white/[0.06] transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-coral mb-5 group-hover:scale-110 transition">
                <it.icon size={18} />
              </div>
              <div className="font-serif text-5xl text-gradient">
                <Counter to={it.n} suffix={it.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
  {it.label}

  {it.label === "Leadership & Creative Roles" && (
    <div className="mt-3 text-xs space-y-1 leading-relaxed">
      <div>• Student Union Design Team</div>
      <div>• IEEE Web Development Team</div>
      <div>• Mandala Artist</div>
    </div>
  )}
</div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 glass rounded-3xl p-6 md:p-8 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="text-coral" size={18} />
            <span className="text-sm text-muted-foreground">
              Active competitive programmer · AI/ML builder · Detection engineer in training · Creative Artist · Curious learner
            </span>
          </div>
          <a href="#contact" className="text-sm text-foreground hover:text-coral transition">
            Let's build something →
          </a>
        </div>
      </div>
    </section>
  );
}
