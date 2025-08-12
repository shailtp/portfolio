
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    "JavaScript / TypeScript",
    "React.js / Next.js",
    "Python / Django",
    "Node.js / Express",
    "AWS / Azure",
    "MongoDB / PostgreSQL",
    "GraphQL / REST API",
    "Machine Learning / Generative AI",
  ];

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
    <section id="about" className="section-padding">
      <div className="container-custom" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 staggered-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-secondary rounded-full">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Software, Machine Learning, Artificial Intelligence
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate software and machine learning engineering  with a Master's in Computer Science from San Francisco State University, and a Bachelors in Computer Science from Vellore Institute of Technology, India. With a diverse background in full-stack development, AI, and machine learning, I craft technology solutions that combine technical excellence with real-world impact.
              </p>
              <p>
                My approach bridges cutting-edge technology with practical applications, whether building real-time data visualization tools or creating AI-powered recommendation systems. I'm driven by the challenge of turning complex problems into elegant, efficient solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={cn(
                      "px-4 py-2 text-sm bg-secondary rounded-full text-foreground/80",
                      "transition-all hover:bg-secondary/70"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 staggered-fade-in aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-secondary/50 rounded-2xl translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 border border-border rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
