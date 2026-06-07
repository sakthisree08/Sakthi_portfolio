const groups = [
  { t: "Programming Languages", items: [["Java", 90], ["Python", 88], ["C", 80]] },
  { t: "Web Development", items: [["HTML", 92], ["CSS", 88], ["JavaScript", 85]] },
  { t: "Databases", items: [["MySQL", 85], ["PostgreSQL", 80], ["MongoDB", 75]] },
  { t: "AI / ML", items: [["TensorFlow", 85], ["Keras", 82]] },
  { t: "Cybersecurity", items: [["Detection Engineering", 80], ["Log Analysis", 82], ["SIEM Concepts", 75], ["Network Security", 75]] },
  { t: "Tools & Platforms", items: [["VS Code", 95], ["Wireshark", 78], ["Cisco Packet Tracer", 75], ["Keil", 70]] },
  { t: "Design", items: [["Figma", 90], ["Photoshop", 82], ["Illustrator", 78], ["Canva", 92]] },
  { t: "Problem Solving", items: [["DSA", 88], ["LeetCode (350+)", 90], ["Competitive Programming", 82]] },
] as const;

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-coral mb-4">Toolkit</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Skills & <span className="text-gradient">Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div
              key={g.t}
              className="reveal glass rounded-2xl p-5 hover:bg-white/[0.06] transition group"
            >
              <div className="text-sm font-medium mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                {g.t}
              </div>
              <div className="space-y-3">
                {g.items.map(([name, lvl]) => (
                  <div key={name as string}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{name}</span>
                      <span className="font-mono">{lvl}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-coral to-cyan transition-all duration-700 group-hover:opacity-100 opacity-90"
                        style={{ width: `${lvl}%` }}
                      />
                    </div>
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
