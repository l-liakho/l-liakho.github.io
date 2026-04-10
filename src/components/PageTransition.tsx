import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [phase, setPhase] = useState<"visible" | "fade-out" | "fade-in">("visible");
  const prevKey = useRef(location.key);

  const childrenRef = useRef(children);
  childrenRef.current = children;

  useEffect(() => {
    if (location.key === prevKey.current) return;
    prevKey.current = location.key;

    // Start fade out
    setPhase("fade-out");

    const fadeOutTimer = setTimeout(() => {
      // Swap content and scroll to top
      setDisplayedChildren(childrenRef.current);
      window.scrollTo(0, 0);
      setPhase("fade-in");

      const fadeInTimer = setTimeout(() => {
        setPhase("visible");
      }, 400);

      return () => clearTimeout(fadeInTimer);
    }, 300);

    return () => clearTimeout(fadeOutTimer);
  }, [location.key]);

  // On first render, just show children directly
  useEffect(() => {
    setDisplayedChildren(childrenRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const style: React.CSSProperties = {
    transition: phase === "fade-out"
      ? "opacity 300ms ease-out, transform 300ms ease-out"
      : "opacity 400ms ease-out, transform 400ms ease-out",
    opacity: phase === "fade-out" ? 0 : 1,
    transform:
      phase === "fade-out"
        ? "translateY(-12px)"
        : phase === "fade-in"
        ? "translateY(0)"
        : "translateY(0)",
  };

  return <div style={style}>{displayedChildren}</div>;
};

export default PageTransition;
