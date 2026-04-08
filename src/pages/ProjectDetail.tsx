import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-gradient mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary hover:underline">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <div className="rounded-lg overflow-hidden glow-border mb-8">
            <img src={project.image} alt={project.title} width={800} height={600} className="w-full object-cover aspect-video" />
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4 text-primary" /> {project.date}</span>
            {project.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-primary/30 text-primary font-display text-[10px] tracking-wider uppercase">
                <Tag className="h-3 w-3" /> {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl font-bold mb-4 text-gradient">{project.title}</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>

          <div className="rounded-lg glow-border bg-card/50 p-6">
            <h2 className="font-display text-sm tracking-widest uppercase text-primary mb-4">Key Details</h2>
            <ul className="space-y-3">
              {project.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
