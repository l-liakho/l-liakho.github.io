import { Link } from "react-router-dom";
import { ArrowRight, FileText, Cog, Cpu, Ruler } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Engineering workspace" width={1920} height={800} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Cog className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: "8s" }} />
            <span className="font-display text-[10px] tracking-[0.3em] uppercase text-primary">Mechanical Engineering</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-gradient">Engineering</span> the Future
          </h1>

          <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Aspiring mechanical engineer with a passion for robotics, manufacturing, and innovative design. 
            Building solutions from concept to prototype.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-foreground font-display text-xs tracking-widest uppercase hover:bg-primary/10 transition-colors"
            >
              <FileText className="h-4 w-4" /> Resume
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-center mb-12">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Cog, title: "Design", desc: "SolidWorks, Fusion 360, ANSYS for CAD and FEA" },
              { icon: Cpu, title: "Fabrication", desc: "3D printing, CNC machining, welding, and manual machining" },
              { icon: Ruler, title: "Prototyping", desc: "From napkin sketch to working prototype, end to end" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg p-6 glow-border bg-card/50 text-center">
                <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-sm font-bold tracking-wider mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-center mb-16">
            <span className="text-gradient">Project Timeline</span>
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Resume CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-2xl font-bold mb-4">
            <span className="text-gradient">Want to Know More?</span>
          </h2>
          <p className="text-muted-foreground mb-8">Check out my full resume for education, skills, and experience.</p>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            <FileText className="h-4 w-4" /> View Resume
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
