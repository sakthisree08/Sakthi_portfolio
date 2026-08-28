import { Brain, Shield, Code2, Palette } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    t: "Full-Stack Development",
    d: "React, Spring Boot, REST APIs, and scalable web applications.",
  },
  {
    icon: Shield,
    t: "Cybersecurity",
    d: "Detection engineering, security analysis, and log investigation.",
  },
  {
    icon: Brain,
    t: "AI / ML",
    d: "Machine learning, deep learning, data analysis, and AI systems.",
  },
  {
    icon: Palette,
    t: "Creative Design",
    d: "UI design, poster art, mandala art, and digital creativity.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="section-pad relative border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-12">

          {/* Heading */}
          <div className="lg:col-span-4 reveal">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              About Me
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Building with
              <span className="block text-accent">curiosity.</span>
            </h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 reveal">
            <div className="border-l border-white/10 pl-6 md:pl-10">
              <p className="text-lg leading-8 text-foreground md:text-xl">
                I'm an Information Technology student at{" "}
                <span className="text-accent">
                  PSG College of Technology
                </span>
                , passionate about software engineering, artificial
                intelligence, machine learning, cybersecurity, and
                problem-solving.
              </p>

              <p className="mt-6 leading-7 text-muted-foreground">
                I've worked on AI-powered healthcare solutions, fraud
                detection systems, cybersecurity analysis, and full-stack
                applications. I enjoy turning ideas into practical systems
                while continuously learning new technologies.
              </p>

              <p className="mt-6 leading-7 text-muted-foreground">
                Beyond engineering, I explore creative design through UI
                design, poster art, mandala art, and digital creativity.
                This combination of technology and creativity shapes how I
                approach problems.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.t}
                  className="group bg-background p-6 transition-all hover:bg-card"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 text-accent">
                      <pillar.icon size={18} />
                    </div>

                    <span className="text-xs text-muted-foreground">
                      0{pillars.indexOf(pillar) + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-medium">
                    {pillar.t}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {pillar.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}