
import Footer from "@/components/Footer";
import GradientText from "@/components/GradientText";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h1 className="font-display text-5xl font-bold text-center mb-4">
              <GradientText colors={["#3A0CA3","#9B4FDE","#B19EEF"]} animationSpeed={5} showBorder={false} yoyo={false}>
                Projects
              </GradientText>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
              A collection of all my previous work
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={0.1 * i} distance={40}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
