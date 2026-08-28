const groups = [
  {
    t: "Programming",
    items: ["Java", "Python", "C", "Data Structures & Algorithms"],
  },
  {
    t: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Spring Boot", "REST APIs"],
  },
  {
    t: "AI / ML",
    items: ["TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    t: "Cybersecurity",
    items: [
      "Detection Engineering",
      "Log Analysis",
      "SIEM Concepts",
      "Network Security",
    ],
  },
  {
    t: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    t: "Tools",
    items: ["VS Code", "Wireshark", "Cisco Packet Tracer", "Keil"],
  },
  {
    t: "Design",
    items: ["Figma", "Photoshop", "Illustrator", "Canva"],
  },
  {
    t: "Problem Solving",
    items: ["LeetCode 420+", "Competitive Programming", "Problem Solving"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Header */}
        <div className="reveal mb-14 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Toolkit
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Skills &
              <span className="block text-muted-foreground">Stack</span>
            </h2>
          </div>

          <div className="flex items-end md:col-span-7">
            <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              A growing technical toolkit spanning software development,
              artificial intelligence, cybersecurity, databases, and creative
              technologies.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => (
            <div
              key={group.t}
              className="reveal group bg-background p-5 transition-colors hover:bg-card"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
                  {group.t}
                </span>

                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>

              <div className="space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 border-b border-white/5 pb-2 text-sm text-muted-foreground transition-colors last:border-0 hover:text-foreground"
                  >
                    <span className="h-1 w-1 flex-none bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}