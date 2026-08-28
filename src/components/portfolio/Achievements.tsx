import { useEffect, useRef, useState } from "react";
import { Trophy, Code, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: Code,
    n: 420,
    suffix: "+",
    label: "LeetCode Problems Solved",
  },
  {
    icon: Trophy,
    n: 4,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: ShieldCheck,
    n: 1,
    suffix: "",
    label: "Cybersecurity Internship",
  },
  {
    icon: Sparkles,
    n: 3,
    suffix: "+",
    label: "Leadership & Creative Roles",
  },
];

function Counter({
  to,
  suffix,
}: {
  to: number;
  suffix: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 1400;
        const start = performance.now();

        const tick = (time: number) => {
          const progress = Math.min(
            (time - start) / duration,
            1
          );

          setN(
            Math.round(
              to * (1 - Math.pow(1 - progress, 3))
            )
          );

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section
      id="achievements"
      className="section-pad relative border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Header */}
        <div className="reveal mb-14 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Milestones
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Achievements
              <span className="block text-muted-foreground">
                in numbers
              </span>
            </h2>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="reveal group border border-white/10 bg-background p-6 transition-all duration-300 hover:border-accent/40 hover:bg-card hover:shadow-[0_0_35px_-12px_hsl(var(--accent)/0.8)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/10 text-accent transition-transform group-hover:scale-105">
                    <Icon size={17} />
                  </div>

                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-10 text-5xl font-semibold tracking-[-0.04em]">
                  <Counter
                    to={item.n}
                    suffix={item.suffix}
                  />
                </div>

                <div className="mt-3 text-xs uppercase leading-5 tracking-[0.12em] text-muted-foreground">
                  {item.label}
                </div>

                {item.label === "Leadership & Creative Roles" && (
                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs leading-5 text-muted-foreground">
                    <div>• Student Union Design Team</div>
                    <div>• IEEE Web Development Team</div>
                    <div>• Mandala Artist</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="reveal mt-8 flex flex-col justify-between gap-5 border border-white/10 bg-card p-6 md:flex-row md:items-center md:p-8">
          <div className="flex items-start gap-4">
            <Sparkles
              className="mt-0.5 flex-none text-accent"
              size={18}
            />

            <span className="max-w-3xl text-sm leading-6 text-muted-foreground">
              Active competitive programmer · AI/ML builder ·
              Detection engineer in training · Creative artist ·
              Curious learner
            </span>
          </div>

          <a
            href="#contact"
            className="flex-none text-sm text-foreground transition-colors hover:text-accent"
          >
            Let's build something →
          </a>
        </div>
      </div>
    </section>
  );
}