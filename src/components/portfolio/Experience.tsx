import { GraduationCap, Briefcase, ShieldCheck } from "lucide-react";

const experiences = [
  {
    icon: ShieldCheck,
    number: "01",
    tag: "INTERNSHIP · CYBERSECURITY",
    title: "Detection Engineering Intern",
    org: "XCODITS Cybersecurity Solutions",
    time: "JAN 2026 — MAR 2026",
    items: [
      "Analyzed security logs and event datasets",
      "Identified threat patterns and anomalies",
      "Documented detection use cases",
      "Studied brute-force attacks and suspicious logins",
      "Evaluated privilege escalation scenarios",
      "Worked on improving detection accuracy",
    ],
  },
  {
    icon: GraduationCap,
    number: "02",
    tag: "EDUCATION · B.TECH IT",
    title: "PSG College of Technology",
    org: "Bachelor of Technology — Information Technology",
    time: "2023 — 2027 · CGPA 8.11/10",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Structures & Algorithms",
      "Software Development",
      "Database Management Systems",
    ],
  },
  {
    icon: Briefcase,
    number: "03",
    tag: "COMPETITIVE PROGRAMMING",
    title: "420+ Problems Solved",
    org: "LeetCode · Active Competitive Programmer",
    time: "ONGOING",
    items: [
      "Strong foundation in DSA",
      "Pattern recognition and optimization",
      "Consistent problem-solving practice",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad relative border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Header */}
        <div className="reveal mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Journey
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Experience
              <span className="block text-muted-foreground">
                & Education
              </span>
            </h2>
          </div>

          <div className="md:col-span-8 md:flex md:items-end">
            <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              A continuous journey across technology, cybersecurity,
              software development, and competitive problem solving.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-12">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <div
                  key={experience.number}
                  className="reveal relative grid gap-8 md:grid-cols-12"
                >
                  {/* Number / Icon */}
                  <div className="relative hidden md:col-span-1 md:flex md:justify-center">
                    <div className="z-10 flex h-10 w-10 items-center justify-center border border-white/15 bg-background text-accent">
                      <Icon size={17} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="border border-white/10 bg-card p-6 transition-all hover:border-accent/40 md:col-span-11 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="text-xs text-accent">
                            {experience.number}
                          </span>

                          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            {experience.tag}
                          </span>
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                          {experience.title}
                        </h3>

                        <p className="mt-2 text-sm text-accent">
                          {experience.org}
                        </p>
                      </div>

                      <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground">
                        {experience.time}
                      </span>
                    </div>

                    <div className="mt-7 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                      {experience.items.map((item) => (
                        <div
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 flex-none bg-accent" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}