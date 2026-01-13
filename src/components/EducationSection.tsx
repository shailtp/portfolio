
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { MapPin, GraduationCap } from "lucide-react";

export default function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [logoErrors, setLogoErrors] = useState<Record<number, boolean>>({});

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C/C++", "JavaScript"]
    },
    {
      title: "AI/ML Frameworks & Tools",
      skills: ["PyTorch", "TensorFlow", "RAG systems", "Scikit-learn", "LangChain", "Model Context Protocol (MCP)"]
    },
    {
      title: "Development Frameworks",
      skills: ["FastAPI", "Streamlit", "OpenMP (Parallel computing in C++)", "Node.js"]
    },
    {
      title: "DevOps & MLOps",
      skills: ["Docker", "Kubernetes", "MLflow", "Git", "CI/CD (GitHub Actions, Jenkins)", "AWS (EC2, ECS, Lambda)"]
    }
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      university: "San Francisco State University",
      location: "San Francisco, CA",
      logo: "/sfsu-logo.png",
      year: "December 2025"
    },
    {
      degree: "Bachelor's in Computer Science",
      university: "Vellore Institute of Technology",
      location: "Vellore, India",
      logo: "/vit-logo.png",
      year: "May 2023"
    }
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
    <section id="education" className="py-20">
      <div className="container-custom min-w-[1024px]" ref={sectionRef}>
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto staggered-fade-in">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-secondary rounded-full">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Academic Background
            </h2>
            <p className="text-lg text-muted-foreground">
              My educational journey in Computer Science
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-fade-in mb-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={cn(
                  "p-8 bg-card border border-border/40 rounded-xl",
                  "hover:shadow-lg transition-all duration-300",
                  "staggered-fade-in"
                )}
              >
                <div className="flex items-start gap-6">
                  {/* University Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border/40">
                      {!logoErrors[index] && edu.logo ? (
                        <img
                          src={edu.logo}
                          alt={`${edu.university} logo`}
                          className="w-full h-full object-contain p-3"
                          onError={() => setLogoErrors(prev => ({ ...prev, [index]: true }))}
                        />
                      ) : (
                        <GraduationCap size={32} className="text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-lg font-medium text-foreground/90">{edu.university}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <span className="text-foreground/60">•</span>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills section */}
          <div className="space-y-8 staggered-fade-in pb-8">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="flex items-start gap-8">
                  <h4 className="text-lg font-serif min-w-[200px] pt-1">{category.title}</h4>
                  <div className="flex items-center gap-3 flex-wrap">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
