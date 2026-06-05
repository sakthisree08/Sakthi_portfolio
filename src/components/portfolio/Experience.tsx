import { GraduationCap, Briefcase, ShieldCheck } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-coral mb-4">Journey</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-2 gap-8">
          <div aria-hidden className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <TimelineCard
            side="left"
            icon={ShieldCheck}
            tag="Internship · Cybersecurity"
            title="Detection Engineering Intern"
            org="XCODITS Cybersecurity Solutions"
            time="Jan 2026 – Mar 2026"
            items={[
              "Analyzed security logs and event datasets",
              "Identified threat patterns and anomalies",
              "Documented detection use cases",
              "Studied brute-force attacks & suspicious logins",
              "Evaluated privilege escalation scenarios",
              "Improved detection accuracy, reduced false positives",
            ]}
          />

          <TimelineCard
            side="right"
            icon={GraduationCap}
            tag="Education · B.Tech IT"
            title="PSG College of Technology"
            org="Bachelor of Technology — Information Technology"
            time="2023 – 2027 · CGPA 8.11/10"
            items={[
              "Artificial Intelligence",
              "Machine Learning",
              "Data Structures & Algorithms",
              "Software Development",
              "Database Management Systems",
            ]}
          />

          <TimelineCard
            side="left"
            icon={Briefcase}
            tag="Competitive Programming"
            title="350+ Problems Solved"
            org="LeetCode · Active Competitive Programmer"
            time="Ongoing"
            items={[
              "Strong foundation in DSA",
              "Pattern recognition & optimization",
              "Consistent daily practice",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  icon: Icon,
  tag,
  title,
  org,
  time,
  items,
}: {
  side: "left" | "right";
  icon: React.ComponentType<{ size?: number }>;
  tag: string;
  title: string;
  org: string;
  time: string;
  items: string[];
}) {
  return (
    <div className="reveal glass-strong rounded-3xl p-6 md:p-8 relative group hover:bg-white/[0.06] transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-coral/30 to-cyan/30 text-foreground">
          <Icon size={18} />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{tag}</span>
      </div>
      <h3 className="font-serif text-2xl md:text-3xl">{title}</h3>
      <div className="mt-1 text-coral text-sm">{org}</div>
      <div className="mt-1 text-xs text-muted-foreground font-mono">{time}</div>
      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 inline-block h-1 w-1 rounded-full bg-cyan flex-none" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
