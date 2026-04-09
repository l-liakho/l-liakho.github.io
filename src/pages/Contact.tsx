import { Mail, Github, Linkedin, Youtube, MapPin, Send } from "lucide-react";
import { useState } from "react";

import Footer from "@/components/Footer";
import GradientText from "@/components/GradientText";
import FadeIn from "@/components/FadeIn";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:lliakhov@purdue.edu?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <div className="min-h-screen bg-background bg-grid">
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h1 className="font-display text-5xl font-bold text-center mb-4">
              <GradientText colors={["#3A0CA3","#9B4FDE","#B19EEF"]} animationSpeed={5} showBorder={false} yoyo={false}>
                Contact Me
              </GradientText>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-center text-muted-foreground mb-12">
              Have a question or want to collaborate? Reach out!
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info */}
            <FadeIn direction="right" delay={0.15}>
              <div className="space-y-6">
                <div className="rounded-lg glow-border bg-card/50 p-6 space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "lliakhov@purdue.edu", href: "mailto:lliakhov@purdue.edu" },
                    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/lukas-liakhovitch", href: "https://linkedin.com/in/lukas-liakhovitch/" },
                    { icon: Github, label: "GitHub", value: "github.com/l-liakho", href: "https://github.com/l-liakho" },
                    { icon: Youtube, label: "YouTube", value: "youtube.com/@l.liakho", href: "https://www.youtube.com/@l.liakho" },
                    { icon: MapPin, label: "Location", value: "Hackettstown, NJ", href: undefined },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 group">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-display tracking-wider uppercase">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="left" delay={0.25}>
              <form onSubmit={handleSubmit} className="rounded-lg glow-border bg-card/50 p-6 space-y-4">
                <div>
                  <label className="block text-xs font-display tracking-wider uppercase text-muted-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(90,39,255,0.1)] transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-display tracking-wider uppercase text-muted-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(90,39,255,0.1)] transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-display tracking-wider uppercase text-muted-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(90,39,255,0.1)] transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-xs tracking-widest uppercase hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
