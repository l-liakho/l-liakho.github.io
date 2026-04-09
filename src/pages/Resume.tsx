import { Download, FileText } from "lucide-react";

import Footer from "@/components/Footer";

const Resume = () => {
  // Placeholder PDF URL — user will replace with their actual resume
  const resumeUrl = "/Liakhovitch, Lukas Resume.pdf";

  return (
    <div className="min-h-screen bg-background bg-grid">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-3xl font-bold text-center mb-4">
            <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            View or download my resume below.
          </p>

          <div className="flex justify-center mb-8">
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </div>

          <div className="rounded-lg glow-border overflow-hidden bg-card/30">
            <div className="aspect-[8.5/11] w-full flex items-center justify-center">
              <object
                data={resumeUrl}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
                  <FileText className="h-16 w-16 text-primary/40" />
                  <p className="text-muted-foreground">
                    PDF preview unavailable. Place your <code className="text-primary">resume.pdf</code> in the <code className="text-primary">public/</code> folder.
                  </p>
                  <a
                    href={resumeUrl}
                    download
                    className="text-primary hover:underline text-sm"
                  >
                    Download instead →
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
