import { Mail, Github, Linkedin, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-secondary/30">
      <div className="absolute inset-x-0 -top-12 h-12 bg-gradient-to-b from-transparent to-secondary/30" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold tracking-wider mb-3">
              <Wrench className="h-5 w-5 text-primary" />
              <span className="text-gradient">Lukas Liakhovitch</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Mechanical Engineering Student
            </p>
            <p className="text-sm text-muted-foreground">
              Purdue University, IN
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs tracking-widest uppercase text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Projects", path: "/projects" },
                { label: "Resume", path: "/resume" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs tracking-widest uppercase text-primary mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:lliakhov@purdue.edu" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> lliakhov@purdue.edu
              </a>
              <a href="https://linkedin.com/in/lukas-liakhovitch/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/l-liakho" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Built with passion and precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
