import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="font-display text-3xl font-bold text-center mb-4">
            <span className="text-gradient">Projects</span>
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
