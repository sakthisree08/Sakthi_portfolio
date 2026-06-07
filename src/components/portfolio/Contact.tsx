import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Code2, FileText, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_mhnt3a5",
        "template_vo1q1fc",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.from_email, // ← makes "Reply" go to the visitor
        },
        "zwkm5483Fo0kFaB1E"
      );

      setSent(true);
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 reveal space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-coral mb-4">Contact</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Let's build <span className="text-gradient">something great</span>.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md">
              Open to internships and full-time roles in Software Engineering, AI/ML, and Cybersecurity.
            </p>
          </div>

          <div className="space-y-3">
            <a href="mailto:sakthisreejayaprakash@gmail.com" className="flex items-center gap-3 glass rounded-2xl p-4 hover:bg-white/[0.06] transition">
              <Mail size={18} className="text-coral" />
              <span className="text-sm">sakthisreejayaprakash@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 glass rounded-2xl p-4">
              <MapPin size={18} className="text-cyan" />
              <span className="text-sm">Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sakthi-sree-1745a2292/" },
              { icon: Github, label: "GitHub", href: "https://github.com/sakthisree08" },
              { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/sakthisreej/" },
              { icon: FileText, label: "Resume", href: "https://drive.google.com/file/d/1Tv26TCWN6EWH0oGSlC6AC0OK02p-lcdO/view?usp=drive_link" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-white/10 transition"
              >
                <s.icon size={15} />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 reveal glass-strong rounded-3xl p-6 md:p-8 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-2xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-coral transition"
            />
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="mt-2 w-full rounded-2xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-coral transition"
            />
          </div>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What's this about?"
            className="mt-2 w-full rounded-2xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-coral transition"
          />
          <div>
            <textarea
              id="msg"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me a bit about the opportunity…"
              className="mt-2 w-full rounded-2xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-coral transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            {sent ? "Thanks — I'll reply soon!" : "Let's Connect"}
            <Send size={15} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}
