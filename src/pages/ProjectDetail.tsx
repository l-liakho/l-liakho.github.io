import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";

import Footer from "@/components/Footer";
import GradientText from "@/components/GradientText";
import FadeIn from "@/components/FadeIn";
import { projects, GalleryItem } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-gradient mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary hover:underline">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : project.gallery.length - 1));
  const nextImage = () => setLightboxIndex((i) => (i !== null && i < project.gallery.length - 1 ? i + 1 : 0));

  return (
    <div className="min-h-screen bg-background bg-grid">
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          {/* Cover Image */}
          <FadeIn>
            <div className="rounded-lg overflow-hidden glow-border mb-8">
              <img src={project.image} alt={project.title} width={800} height={600} className="w-full object-cover aspect-video" />
            </div>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={0.1}>
            <h1 className="font-display text-3xl font-bold mb-3 text-center">
              <GradientText colors={["#3A0CA3","#9B4FDE","#B19EEF"]} animationSpeed={5} showBorder={false} yoyo={false}>
                {project.title}
              </GradientText>
            </h1>
          </FadeIn>

          {/* Short Description & Date */}
          <FadeIn delay={0.15}>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              {project.shortDesc}
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground ml-3 align-middle">
                <Calendar className="h-4 w-4 text-primary" /> {project.date}
              </span>
            </p>
          </FadeIn>

          {/* What / How / Results */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {([
                { label: "What", content: project.what },
                { label: "How", content: project.how },
                { label: "Results", content: project.results },
              ] as const).map((cell) => (
                <div key={cell.label} className="rounded-lg glow-border bg-card/50 p-5">
                  <h2 className="font-display text-sm tracking-widest uppercase text-primary mb-3">{cell.label}</h2>
                  <p className="text-sm text-foreground/80 leading-relaxed">{cell.content}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* YouTube Video */}
          {project.youtubeUrl && (
            <FadeIn delay={0.25}>
              <div className="mb-12">
                <div className="rounded-lg overflow-hidden glow-border aspect-video">
                  <iframe
                    src={project.youtubeUrl.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                    title={`${project.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </FadeIn>
          )}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <FadeIn>
              <div>
                <h2 className="font-display text-2xl font-bold mb-8">
                  <GradientText colors={["#3A0CA3","#9B4FDE","#B19EEF"]} animationSpeed={5} showBorder={false} yoyo={false} className="!mx-0">
                    Gallery
                  </GradientText>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((item, i) => (
                    <FadeIn key={i} delay={0.05 * i} distance={20}>
                      {item.type === "video" ? (
                        <div className="rounded-lg overflow-hidden glow-border bg-card/50">
                          <video
                            src={item.src}
                            controls
                            className="w-full aspect-video object-cover"
                          />
                          {item.caption && (
                            <p className="text-xs text-muted-foreground p-2 text-center">{item.caption}</p>
                          )}
                        </div>
                      ) : (
                        <div
                          className="rounded-lg overflow-hidden glow-border cursor-pointer group"
                          onClick={() => openLightbox(i)}
                        >
                          <img
                            src={item.src}
                            alt={item.caption || `${project.title} gallery ${i + 1}`}
                            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {item.caption && (
                            <p className="text-xs text-muted-foreground p-2 text-center bg-card/50">{item.caption}</p>
                          )}
                        </div>
                      )}
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>

          <button
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div className="max-w-4xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            {project.gallery[lightboxIndex].type === "video" ? (
              <video
                src={project.gallery[lightboxIndex].src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg"
              />
            ) : (
              <img
                src={project.gallery[lightboxIndex].src}
                alt={project.gallery[lightboxIndex].caption || ""}
                className="max-w-full max-h-[85vh] rounded-lg object-contain"
              />
            )}
            {project.gallery[lightboxIndex].caption && (
              <p className="text-center text-white/70 text-sm mt-4">{project.gallery[lightboxIndex].caption}</p>
            )}
          </div>

          <button
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;
