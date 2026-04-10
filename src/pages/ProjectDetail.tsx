import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, Calendar, X, ChevronLeft, ChevronRight, Download } from "lucide-react";

import Footer from "@/components/Footer";
import GradientText from "@/components/GradientText";
import FadeIn from "@/components/FadeIn";
import { projects, GalleryItem } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [portraitSrcs, setPortraitSrcs] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!project) return;
    const localVideos = project.gallery.filter((item) => item.type === "video");
    if (localVideos.length === 0) return;
    const portrait: string[] = [];
    let loaded = 0;
    localVideos.forEach((item) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => {
        if (video.videoHeight > video.videoWidth) {
          portrait.push(item.src);
        }
        loaded++;
        if (loaded === localVideos.length) {
          setPortraitSrcs(new Set(portrait));
        }
      };
      video.onerror = () => {
        loaded++;
        if (loaded === localVideos.length) {
          setPortraitSrcs(new Set(portrait));
        }
      };
      video.src = item.src;
    });
  }, [project]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

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

  const allVideos = project.gallery.filter((item) => item.type === "video" || item.type === "youtube");
  const landscapeVideos = allVideos.filter((item) => item.type === "youtube" || !portraitSrcs.has(item.src));
  const portraitVideos = allVideos.filter((item) => item.type !== "youtube" && portraitSrcs.has(item.src));
  const photos = project.gallery.filter((item) => item.type === "image");

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : photos.length - 1));
  const nextImage = () => setLightboxIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : 0));

  return (
    <div className="min-h-screen bg-background bg-grid">
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-6 md:px-4 max-w-3xl">
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
                  <p className="text-sm text-foreground/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: cell.content }} />
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

          {/* Portfolio PDF */}
          {project.portfolioPdf && (
            <FadeIn delay={0.3}>
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-2 flex justify-center">
                  <GradientText colors={["#3A0CA3","#9B4FDE","#B19EEF"]} animationSpeed={5} showBorder={false} yoyo={false}>
                    Robot Engineering Portfolio
                  </GradientText>
                </h2>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  View this season's portfolio for a more in depth overview of the team (scroll to the end for robot specifications).
                </p>
                <div className="rounded-lg overflow-hidden glow-border bg-card/50">
                  <iframe
                    src={project.portfolioPdf}
                    className="w-full"
                    style={{ aspectRatio: "8.5 / 11" }}
                    title="Robot Engineering Portfolio"
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <a
                    href={project.portfolioPdf}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-display tracking-wider uppercase hover:bg-primary/20 transition-colors"
                  >
                    <Download className="h-4 w-4" /> Download PDF
                  </a>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <FadeIn>
              <div>
                <h2 className="font-display text-2xl font-bold mb-8 flex justify-center">
                  <GradientText colors={["#3A0CA3","#9B4FDE","#B19EEF"]} animationSpeed={5} showBorder={false} yoyo={false}>
                    Gallery
                  </GradientText>
                </h2>

                {/* Videos */}
                {allVideos.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center">Videos</h3>
                    {landscapeVideos.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {landscapeVideos.map((item) => (
                          <FadeIn key={item.src} delay={0} distance={20}>
                            {item.type === "youtube" ? (
                              <div className="rounded-lg overflow-hidden glow-border">
                                <iframe
                                  src={`https://www.youtube.com/embed/${new URL(item.src).searchParams.get("v")}`}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="w-full aspect-video"
                                />
                                {item.caption && (
                                  <p className="text-xs text-muted-foreground p-2 text-center">{item.caption}</p>
                                )}
                              </div>
                            ) : (
                              <div className="rounded-lg overflow-hidden glow-border">
                                <video
                                  src={item.src}
                                  controls
                                  className="w-full aspect-video object-contain bg-black"
                                />
                                {item.caption && (
                                  <p className="text-xs text-muted-foreground p-2 text-center">{item.caption}</p>
                                )}
                              </div>
                            )}
                          </FadeIn>
                        ))}
                      </div>
                    )}
                    {portraitVideos.length > 0 && (
                      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${landscapeVideos.length > 0 ? "mt-4" : ""}`}>
                        {portraitVideos.map((item) => (
                          <FadeIn key={item.src} delay={0} distance={20}>
                            <div className="rounded-lg overflow-hidden glow-border">
                              <video
                                src={item.src}
                                controls
                                className="w-full"
                              />
                              {item.caption && (
                                <p className="text-xs text-muted-foreground p-2 text-center">{item.caption}</p>
                              )}
                            </div>
                          </FadeIn>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Photos */}
                {photos.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center">Photos</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {photos.map((item, i) => (
                        <FadeIn key={i} delay={0.05 * i} distance={20}>
                          <div
                            className="rounded-lg overflow-hidden glow-border cursor-pointer group"
                            onClick={() => openLightbox(i)}
                          >
                            <img
                              src={item.src}
                              alt={item.caption || `${project.title} photo ${i + 1}`}
                              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {item.caption && (
                              <p className="text-xs text-muted-foreground p-2 text-center bg-card/50">{item.caption}</p>
                            )}
                          </div>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && createPortal(
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
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].caption || ""}
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
            />
            {photos[lightboxIndex].caption && (
              <p className="text-center text-white/70 text-sm mt-4">{photos[lightboxIndex].caption}</p>
            )}
          </div>

          <button
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>,
        document.body
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;
