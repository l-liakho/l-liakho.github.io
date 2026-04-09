import { Link } from "react-router-dom";
import { projects, timelineEvents } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

type TimelineEntry =
  | { kind: "project"; id: string; title: string; shortDesc: string; date: string; image: string; order: number }
  | { kind: "event"; id: string; title: string; shortDesc: string; date: string; order: number };

const Timeline = () => {
  const entries: TimelineEntry[] = [
    ...projects.map((p) => ({ kind: "project" as const, id: p.id, title: p.title, shortDesc: p.shortDesc, date: p.date, image: p.image, order: p.order })),
    ...timelineEvents.map((e) => ({ kind: "event" as const, ...e })),
  ].sort((a, b) => a.order - b.order);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

      <div className="space-y-20">
        {entries.map((entry, i) => (
          <div key={entry.id} className={`flex flex-col md:flex-row ${entry.kind === "project" ? "items-center" : "items-start md:items-center"} gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            {/* Image (projects only) / Spacer (events) */}
            {entry.kind === "project" ? (
              <FadeIn direction={i % 2 === 0 ? "right" : "left"} delay={0.15} className="flex-1">
                <Link to={`/projects/${entry.id}`}>
                  <img
                    src={entry.image}
                    alt={entry.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="rounded-lg glow-border w-full max-w-sm mx-auto object-cover aspect-square hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
                  />
                </Link>
              </FadeIn>
            ) : (
              <div className="flex-1 hidden md:block" />
            )}

            {/* Dot + Horizontal Line toward text */}
            <FadeIn direction="none" delay={0.2}>
              <div className="relative z-10 flex items-center">
                <div className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                  <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  <div className="absolute h-4 w-4 rounded-full bg-primary/30 animate-pulse-glow" />
                  {/* Horizontal line from dot toward text side */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-px ${
                    i % 2 === 0
                      ? "left-full bg-gradient-to-r from-primary/50 to-transparent"
                      : "right-full bg-gradient-to-l from-primary/50 to-transparent"
                  }`} />
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn direction={i % 2 === 0 ? "left" : "right"} delay={0.1} className="flex-1">
              <div className={`${i % 2 === 1 ? "md:text-right" : ""}`}>
                {entry.kind === "project" ? (
                  <Link to={`/projects/${entry.id}`} className="group block">
                    <span className="font-display text-xs tracking-widest text-primary">{entry.date}</span>
                    <h3 className="font-display text-lg font-bold mt-1 group-hover:text-primary transition-colors">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">{entry.shortDesc}</p>
                  </Link>
                ) : (
                  <div>
                    <span className="font-display text-xs tracking-widest text-primary">{entry.date}</span>
                    <h3 className="font-display text-lg font-bold mt-1">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">{entry.shortDesc}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
