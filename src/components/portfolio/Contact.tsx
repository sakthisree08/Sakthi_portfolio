import { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Code2,
  FileText,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
          reply_to: formData.from_email,
        },
        "zwkm5483Fo0kFaB1E"
      );

      setSent(true);

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sakthi-sree-1745a2292/",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sakthisree08",
    },
    {
      icon: Code2,
      label: "LeetCode",
      href: "https://leetcode.com/u/sakthisreej/",
    },
    {
      icon: FileText,
      label: "Resume",
      href: "https://drive.google.com/file/d/1BO1kHlvLf6TPopE-DNK7vnyL9A72iFLj/view?usp=drive_link",
    },
  ];

  return (
    <section
      id="contact"
      className="section-pad relative border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Header */}
        <div className="reveal mb-14 grid gap-10 md:grid-cols-12">

          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Contact
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Let's build
              <span className="block text-accent">
                something great.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground md:text-base">
              Open to internships and full-time opportunities in
              Software Engineering, AI/ML, and Cybersecurity.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 md:col-span-7 md:flex md:flex-col md:justify-end">

            <a
              href="mailto:sakthisreejayaprakash@gmail.com"
              className="group flex items-center gap-4 border border-white/10 bg-card p-4 transition-all hover:border-accent/40"
            >
              <Mail
                size={17}
                className="text-accent"
              />

              <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                sakthisreejayaprakash@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-4 border border-white/10 bg-card p-4">
              <MapPin
                size={17}
                className="text-accent"
              />

              <span className="text-sm text-muted-foreground">
                Coimbatore, Tamil Nadu, India
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/10 px-4 py-2.5 text-xs uppercase tracking-[0.1em] text-muted-foreground transition-all hover:border-accent hover:text-accent"
                  >
                    <Icon size={14} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal border border-white/10 bg-card p-6 md:p-8"
        >
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Send a message
            </span>

            <span className="font-mono text-xs text-accent">
              01 / CONTACT
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Your Name
              </label>

              <input
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="mt-3 w-full border border-white/10 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Email
              </label>

              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="mt-3 w-full border border-white/10 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Subject
            </label>

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="mt-3 w-full border border-white/10 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
            />
          </div>

          <div className="mt-6">
            <label className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell me a bit about the opportunity..."
              className="mt-3 w-full resize-none border border-white/10 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-accent"
            >
              {sent ? "Thanks — I'll reply soon!" : "Let's Connect"}

              <Send
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}