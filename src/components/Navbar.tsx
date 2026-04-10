import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Wrench } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Logo */}
      <div className="fixed top-0 left-0 z-[60] p-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-wider px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm border border-border/30">
          <Wrench className="h-5 w-5 text-primary" />
          <span className="text-gradient">PORTFOLIO</span>
        </Link>
      </div>

      {/* Hamburger button */}
      <button
        className="fixed top-4 right-4 z-[60] flex flex-col justify-center items-center w-10 h-10 gap-[6px] group rounded-lg bg-background/80 backdrop-blur-sm border border-border/30"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-[2px] w-6 bg-foreground rounded-full transition-all duration-300 ease-in-out origin-center ${
            open ? "rotate-45 translate-y-[8px]" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-6 bg-foreground rounded-full transition-all duration-300 ease-in-out ${
            open ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-6 bg-foreground rounded-full transition-all duration-300 ease-in-out origin-center ${
            open ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[50] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-out menu */}
      <nav
        className={`fixed top-0 right-0 z-[55] h-full w-72 bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-10">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block py-5 font-display text-2xl tracking-widest uppercase transition-all duration-500 ease-out hover:text-primary hover:translate-x-2 ${
                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
              } ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              style={{
                transitionDelay: open ? `${150 + i * 75}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
