
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="pt-32 pb-12 bg-secondary/50">
      <div className="container-custom min-w-[1024px]" ref={sectionRef}>
        {/* Greeting at the top */}
        <div className="text-center mb-8 animate-stagger">
          <span className="inline-block px-6 py-2.5 text-base font-medium bg-background rounded-full animate-slide-down">
            Hello, I'm Shail👋
          </span>
        </div>

        {/* Main heading right below greeting */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Machine Learning, AI & Systems Engineer
          </h2>
        </div>

        {/* About section with text and photo */}
        <div className="grid grid-cols-2 gap-12 items-start mb-16">
          {/* Text content */}
          <div className="space-y-6 staggered-fade-in">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-secondary rounded-full">
                About Me
              </span>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
              I am a graduate computer scientist and love working on problems in the domain of AI/ML and Systems/Backend engineering. Have primarily worked as a backend software and applied AI engineer in manufacturing, e-commerce and educational/research sectors.
              </p>
              <p>
              Collaborative by nature, curious by default. Actively searching for my next full time engineering role where I can build the infrastructure powering the next generation of AI systems and enterprise software products. Open to opportunities within the United States, and can be reached via LinkedIn or at patelshail233@gmail.com.
              </p>
            </div>
          </div>

          {/* Single Photo */}
          <div className="staggered-fade-in flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-secondary/50 rounded-xl translate-x-2 translate-y-2 -z-10"></div>
              <div className="absolute inset-0 border border-border rounded-xl overflow-hidden">
                <img
                  src="/sunset_image.JPG"
                  alt="By the lake at sunset"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons at the bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-12 mb-4 animate-slide-up flex-wrap">
          <a 
            href="#education" 
            className={cn(
              "px-5 py-2 text-sm bg-foreground text-background font-medium rounded-full transition-all",
              "hover:shadow-md hover:translate-y-[-1px]",
              "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
            )}
          >
            View my educational background
          </a>
          <a 
            href="#experience" 
            className={cn(
              "px-5 py-2 text-sm bg-foreground text-background font-medium rounded-full transition-all",
              "hover:shadow-md hover:translate-y-[-1px]",
              "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
            )}
          >
            View My Work Experience
          </a>
          <a 
            href="#projects" 
            className={cn(
              "px-5 py-2 text-sm bg-foreground text-background font-medium rounded-full transition-all",
              "hover:shadow-md hover:translate-y-[-1px]",
              "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
            )}
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className={cn(
              "px-5 py-2 text-sm border border-foreground/20 rounded-full font-medium",
              "hover:bg-secondary transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
            )}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
