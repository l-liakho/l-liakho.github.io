
import Footer from "@/components/Footer";
import GradientText from "@/components/GradientText";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="font-display text-5xl font-bold text-center mb-4">
            <GradientText colors={["#3A0CA3","#9B4FDE","#B19EEF"]} animationSpeed={5} showBorder={false}>
              Projects
            </GradientText>
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            A collection of mechanical engineering projects from concept to completion.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
