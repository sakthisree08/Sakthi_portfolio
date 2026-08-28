import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import HeroImage from "../../assets/sakthi.png";

const roles = [
  "Software Engineer",
  "AI & ML Enthusiast",
  "Full Stack Explorer",
  "Problem Solver",
  "Continuous Learner",
];

const badges = [
  "Java",
  "Python",
  "AI",
  "ML",
  "Cybersecurity",
  "DSA",
  "TensorFlow",
  "React",
  "Spring Boot",
  "C",
];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);

        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);

        if (next === "") {
          setDeleting(false);
          setRoleIdx((index) => (index + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden border-b border-white/10 pt-32 pb-16"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid min-h-[75vh] items-center gap-12 lg:grid-cols-12">
          
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-10 bg-accent" />
              Portfolio / 2026
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Hi, I'm{" "}
              <span className="text-accent">Sakthisree J</span>
            </h1>

            <div className="mt-8 flex items-center gap-3 font-mono text-base text-muted-foreground md:text-xl">
              <span className="text-accent">&gt;</span>
              <span>{text}</span>
              <span className="h-5 w-px animate-pulse bg-accent" />
            </div>

            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Information Technology student passionate about building
              intelligent, scalable and practical solutions across software,
              AI, machine learning and cybersecurity.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-accent"
              >
                View Projects
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://drive.google.com/file/d/1ondgmKJwY8ecYwADAAqkuJgtZ2zKii9B/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 px-6 py-3 text-sm text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <FileText size={16} />
                Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/15 px-6 py-3 text-sm text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 border-y border-white/10 md:grid-cols-4">
              {[
                ["420+", "LeetCode"],
                ["4+", "Projects"],
                ["AI / ML", "Focus"],
                ["Cyber", "Experience"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-white/10 px-4 py-6 last:border-r-0"
                >
                  <div className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {value}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 border border-accent/20" />

              <div className="relative overflow-hidden border border-white/15 bg-card p-2">
                <img
                  src={HeroImage}
                  alt="Sakthisree J portrait"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover object-[center_30%] grayscale-[15%]"
                />

                <div className="absolute bottom-5 left-5 border border-white/15 bg-black/80 px-4 py-3 backdrop-blur-md">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Currently
                  </div>
                  <div className="mt-1 text-sm font-medium">
                    Building with AI
                  </div>
                </div>
              </div>

              <div className="absolute -right-5 -top-5 border border-accent/40 bg-black px-3 py-2 font-mono text-xs text-accent">
                {"<"} / {">"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology strip */}
      <div className="mt-10 overflow-hidden border-y border-white/10 py-5">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...badges, ...badges].map((badge, index) => (
            <span
              key={index}
              className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
            >
              {badge}
              <span className="ml-12 text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}