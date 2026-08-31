import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const aiProjects = [
    {
      id: "codecontext",
      title: "CodeContext: Automated Multi-Source LLM Ingestion"
    },
    {
      id: "course-buddy",
      title: "Course Buddy - RAG system for SF State's CS course selection process"
    },
    {
      id: "e1-gene-cluster",
      title: "E1 Gene Cluster - Random Forest Classifier Model & Streamlit Website"
    }
  ];

  const softwareProjects = [
    {
      id: "openmp-molecular-dynamics",
      title: "OpenMP Parallel Computing Simulation of Molecular Dynamics"
    },
    {
      id: "edubridge",
      title: "Edubridge: A learning management system"
    },
    {
      id: "sfo-traffic-visualization",
      title: "SFO Passenger Traffic Visualization System"
    },
    {
      id: "no-escape",
      title: "No-Escape: Action maze chase game"
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

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="pt-8 pb-20 bg-secondary/50">
      <div className="container-custom min-w-[1024px]" ref={sectionRef}>
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto staggered-fade-in">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-background rounded-full">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my technical projects in various sub-domains of Computer Science
            </p>
            <p className="text-sm text-muted-foreground">
              💡 Click on a card to see details!
            </p>
          </div>

          {/* Generative AI, Transformer models & ML engineering */}
          <div className="space-y-8 staggered-fade-in">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Generative AI, Transformer models & ML engineering</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aiProjects.map((project) => (
                  <button
                    type="button"
                    key={project.id}
                    onClick={() => handleCardClick(project.id)}
                    className={cn(
                      "w-full p-6 bg-card border border-border/40 rounded-xl text-foreground",
                      "hover:shadow-lg transition-all duration-300 cursor-pointer",
                      "staggered-fade-in focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    )}
                  >
                    <h4 className="text-base font-semibold text-center">{project.title}</h4>
                  </button>
                ))}
              </div>
            </div>

            {/* Software Engineering */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Software Engineering</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareProjects.map((project) => (
                  <button
                    type="button"
                    key={project.id}
                    onClick={() => handleCardClick(project.id)}
                    className={cn(
                      "w-full p-6 bg-card border border-border/40 rounded-xl text-foreground",
                      "hover:shadow-lg transition-all duration-300 cursor-pointer",
                      "staggered-fade-in focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    )}
                  >
                    <h4 className="text-base font-semibold text-center">{project.title}</h4>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
