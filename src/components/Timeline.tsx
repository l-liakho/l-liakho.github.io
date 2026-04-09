import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

const Timeline = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

      <div className="space-y-12">
        {projects.map((project, i) => (
          <div key={project.id} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            {/* Content */}
            <FadeIn direction={i % 2 === 0 ? "right" : "left"} delay={0.1} className="flex-1">
              <div className={`${i % 2 === 1 ? "md:text-right" : ""}`}>
                <Link to={`/projects/${project.id}`} className="group block">
                  <span className="font-display text-xs tracking-widest text-primary">{project.date}</span>
                  <h3 className="font-display text-lg font-bold mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{project.shortDesc}</p>
                </Link>
              </div>
            </FadeIn>

            {/* Dot */}
            <FadeIn direction="none" delay={0.2}>
              <div className="relative z-10 flex h-4 w-4 items-center justify-center">
                <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute h-4 w-4 rounded-full bg-primary/30 animate-pulse-glow" />
              </div>
            </FadeIn>

            {/* Image */}
            <FadeIn direction={i % 2 === 0 ? "left" : "right"} delay={0.15} className="flex-1">
              <Link to={`/projects/${project.id}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="rounded-lg glow-border w-full max-w-sm mx-auto object-cover aspect-square hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
                />
              </Link>
            </FadeIn>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
