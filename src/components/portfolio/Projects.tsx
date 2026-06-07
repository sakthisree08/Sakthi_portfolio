import { useState } from "react";
import { Github } from "lucide-react";

type P = {
  name: string;
  tag: string;
  desc: string;
  tech: string[];
  bullets: string[];
  category: "AI/ML" | "Full-Stack" | "Web";
  github: string;
};

const projects: P[] = [
  {
    name: "StudyHub",
    tag: "Study Room Booking System",
    desc: "Scalable full-stack web application for managing study room reservations with booking, cancellation, rescheduling, and real-time slot validation.",
    tech: ["React", "Spring Boot", "PostgreSQL", "REST API"],
    bullets: ["Real-time booking", "Double-booking prevention", "Schedule management"],
    category: "Full-Stack",
    github: "https://github.com/sakthisree08/study-room-booking",
  },
  {
    name: "AI Job Fraud Detection",
    tag: "Recruitment Safety System",
    desc: "Machine learning-powered recruitment screening platform that detects fraudulent job postings using NLP, feature engineering, and predictive analytics.",
    tech: ["Python", "Scikit-Learn", "NLP", "Machine Learning"],
    bullets: ["Fraud classification", "NLP-based analysis", "High detection accuracy"],
    category: "AI/ML",
    github: "https://github.com/sakthisree08/AI-Job-Fraud-Detection",
  },
  {
    name: "Personalized Wellness App",
    tag: "Smart Lifestyle Monitoring Platform",
    desc: "Engineered a wellness platform for monitoring daily lifestyle habits and routine activities. Integrated a Python-based recommendation engine with Flask to generate adaptive wellness suggestions based on user behavior patterns.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "PostgreSQL"],
    bullets: ["Personalized recommendations", "Habit tracking dashboard", "Wellness analytics"],
    category: "Full-Stack",
    github: "https://github.com/sakthisree08/Personalized_Wellness_website",
  },
  {
    name: "Rentoby",
    tag: "Furniture Rental & Purchase Platform",
    desc: "Modern furniture rental and buying platform featuring categorized products, wishlist management, cart functionality, and responsive user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    bullets: ["Furniture categorization", "Cart & wishlist system", "Rental and purchase options"],
    category: "Web",
    github: "https://github.com/sakthisree08/RentoBy",
  },
];


const filters = ["All", "AI/ML", "Full-Stack", "Web"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-coral mb-4">Selected Work</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-xs transition border ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "glass border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {shown.map((p, i) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl glass-strong p-7 transition-all duration-500 h-full flex flex-col hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                aria-hidden
                className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-coral/20 to-cyan/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"
              />

              <div className="relative flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="text-xs font-mono text-cyan">{p.category}</div>
                    <h3 className="mt-1 font-serif text-3xl">{p.name}</h3>
                    <div className="text-sm text-muted-foreground">{p.tag}</div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a aria-label="GitHub" href={p.github} target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90">
                      <Github size={15} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="rounded-xl bg-white/5 px-3 py-2 text-xs text-foreground/80">
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-border px-2.5 py-1 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
