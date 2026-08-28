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
    bullets: [
      "Real-time booking",
      "Double-booking prevention",
      "Schedule management",
    ],
    category: "Full-Stack",
    github: "https://github.com/sakthisree08/study-room-booking",
  },
  {
    name: "AI Job Fraud Detection",
    tag: "Recruitment Safety System",
    desc: "Machine learning-powered recruitment screening platform that detects fraudulent job postings using NLP, feature engineering, and predictive analytics.",
    tech: ["Python", "Scikit-Learn", "NLP", "Machine Learning"],
    bullets: [
      "Fraud classification",
      "NLP-based analysis",
      "High detection accuracy",
    ],
    category: "AI/ML",
    github: "https://github.com/sakthisree08/AI-Job-Fraud-Detection",
  },
  {
    name: "Personalized Wellness App",
    tag: "Smart Lifestyle Monitoring Platform",
    desc: "Wellness platform for monitoring lifestyle habits and generating adaptive recommendations based on user behavior patterns.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "PostgreSQL"],
    bullets: [
      "Personalized recommendations",
      "Habit tracking dashboard",
      "Wellness analytics",
    ],
    category: "Full-Stack",
    github: "https://github.com/sakthisree08/Personalized_Wellness_website",
  },
  {
    name: "Rentoby",
    tag: "Furniture Rental & Purchase Platform",
    desc: "Modern furniture rental and buying platform featuring categorized products, wishlist management, cart functionality, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Furniture categorization",
      "Cart & wishlist system",
      "Rental and purchase options",
    ],
    category: "Web",
    github: "https://github.com/sakthisree08/RentoBy",
  },
];

const filters = ["All", "AI/ML", "Full-Stack", "Web"] as const;

export function Projects() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("All");

  const shown = projects.filter(
    (project) =>
      filter === "All" || project.category === filter
  );

  return (
    <section
      id="projects"
      className="section-pad relative border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Header */}
        <div className="reveal mb-14 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Selected Work
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Featured
              <span className="block text-muted-foreground">
                Projects
              </span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-end gap-2 md:col-span-6 md:justify-end">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-all ${
                  filter === item
                    ? "border-accent bg-accent text-background"
                    : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="grid gap-3 md:grid-cols-2">
          {shown.map((project, index) => (
            <article
              key={project.name}
              className="group relative flex min-h-[390px] flex-col bg-background p-6 transition-all duration-300 hover:bg-card hover:border-accent/40 hover:shadow-[0_0_35px_-12px_hsl(var(--accent)/0.8)] md:p-8"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">
                      0{index + 1}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm text-accent">
                    {project.tag}
                  </p>
                </div>

                <a
                  aria-label={`View ${project.name} on GitHub`}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 flex-none items-center justify-center border border-white/10 text-muted-foreground transition-all hover:border-accent hover:text-accent"
                >
                  <Github size={15} />
                </a>
              </div>

              {/* Description */}
              <p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground">
                {project.desc}
              </p>

              {/* Highlights */}
              <div className="mt-7 grid gap-2 sm:grid-cols-3">
                {project.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="border border-white/10 p-3 text-xs leading-5 text-muted-foreground"
                  >
                    <span className="mb-2 block h-1 w-1 bg-accent" />
                    {bullet}
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}