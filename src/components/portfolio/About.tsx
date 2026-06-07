import { Brain, Shield, Code2, Palette } from "lucide-react";

const pillars = [
  { icon: Code2, t: "Full-Stack Development", d: "React, Spring Boot, REST APIs, scalable systems." },
  { icon: Shield, t: "Cybersecurity", d: "Detection engineering, log analysis." },
  { icon: Brain, t: "AI / ML", d: "TensorFlow, Keras, NumPy, Pandas, Matplotlib." },
  { icon: Palette, t: "Creative Design", d: "UI design, poster art, mandala art, digital creativity." },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-coral mb-4">About</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Where <span className="text-gradient">engineering</span> meets <span className="italic">creativity</span>.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 reveal">
          <div className="glass-strong rounded-3xl p-6 md:p-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm an Information Technology student at <span className="text-foreground">PSG College of Technology</span>,
              passionate about software engineering, machine learning, artificial intelligence,
              cybersecurity, and problem-solving.
            </p>
            <p>
              I've built AI-powered healthcare solutions, fraud detection systems, and scalable
              full-stack web applications. My technical strengths span full-stack development,
              machine learning, cybersecurity analysis, and database systems.
            </p>
            <p>
              Alongside engineering, I create — through mandala art, poster design, UI design, and
              digital creativity — a blend that lets me design innovative, user-focused solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.t} className="glass rounded-2xl p-5 group hover:bg-white/[0.06] transition">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-coral mb-3 group-hover:scale-110 transition">
                  <p.icon size={18} />
                </div>
                <div className="font-medium">{p.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
