import { Link } from "react-router-dom";
import { ArrowRight, FileText, Cog, Cpu, Ruler, Code } from "lucide-react";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LightPillar from "@/components/LightPillar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LightPillar
            topColor="#ad74d2"
            bottomColor="#7001df"
            intensity={0.9}
            rotationSpeed={0.2}
            interactive={false}
            glowAmount={0.003}
            pillarWidth={7.5}
            pillarHeight={0.65}
            noiseIntensity={0}
            pillarRotation={60}
            quality="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/30 bg-white/5 mb-8">
            <Cog className="h-5 w-5 text-white animate-spin" style={{ animationDuration: "8s" }} />
            <span className="font-display text-[13px] tracking-[0.3em] uppercase text-white">Mechanical Engineering Portfolio</span>
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tight leading-tight">
            <span className="text">Lukas Liakhovitch</span>
          </h1>

          <p className="mt-8 text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
            Aspiring mechanical engineer with a passion for robotics, manufacturing, and innovative design.
            Building solutions from concept to prototype.
          </p>

          <div className="flex flex-wrap gap-5 justify-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              View Projects <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary/50 bg-primary/20 text-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/30 transition-colors"
            >
              <FileText className="h-5 w-5" /> Resume
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-center mb-6">
            <span className="text-gradient">About Me</span>
          </h2>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm a mechanical engineering student at Purdue University with a hands-on approach to problem solving.
            Whether it's designing parts in CAD, machining them in the shop, or writing code to bring systems to life,
            I love turning ideas into reality. I'm driven by curiosity and a desire to build things that work,
            from robots and mechanisms to software tools and embedded systems. Outside of school and technical projects
            I love hiking, rock climbing, volleyball, and hanging out with friends.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Ruler, title: "Design", desc: "Fusion 360, NX, ANSYS for CAD and FEA" },
              { icon: Cog, title: "Fabrication", desc: "3D printing, CNC machining, welding, soldering, and more" },
              { icon: Cpu, title: "Programming", desc: "C, C++, Python, Java: from control systems to financial processing" },
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
