import { Link } from "react-router-dom";
import { Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg glow-border glow-border-hover transition-all duration-500">
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/60 rounded-tl-lg z-10 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-primary" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/60 rounded-tr-lg z-10 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-primary" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/60 rounded-bl-lg z-10 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-primary" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/60 rounded-br-lg z-10 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-primary" />

        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="p-5 w-full">
            <h3 className="font-display text-sm font-bold tracking-wider text-primary-foreground mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground">{project.shortDesc}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] font-display tracking-wider uppercase px-2 py-0.5 rounded border border-primary/30 text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
