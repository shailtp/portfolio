
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container-custom min-w-[1024px]" ref={sectionRef}>
        {/* About section with text and photos */}
        <div className="grid grid-cols-2 gap-16 items-start mb-16">
          {/* Text content */}
          <div className="space-y-6 staggered-fade-in">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-secondary rounded-full">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Software, Machine Learning, Artificial Intelligence
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="flex-wrap">
                <span className="whitespace-normal">I'm a passionate Data Scientist and AI/ML engineer with a{" "}</span>
                <span className="decoration-yellow-300 decoration-2 underline-animation whitespace-nowrap">
                  Master's in Computer Science from San Francisco State University
                </span>{" "}
                <span className="whitespace-normal">(graduated December 2025), and a{" "}</span>
                <span className="decoration-yellow-300 decoration-2 underline-animation whitespace-nowrap">
                  Bachelors in Computer Science from Vellore Institute of Technology, India
                </span>{" "}
                <span className="whitespace-normal">(graduated May 2023)</span>. With a diverse background in full-stack development, AI, and machine learning, I craft technology solutions that combine technical excellence with real-world impact.
              </p>
              <p>
                My approach bridges cutting-edge technology with practical applications, whether building real-time data visualization tools or creating AI-powered recommendation systems. I'm driven by the challenge of turning complex problems into elegant, efficient solutions.
              </p>
            </div>
          </div>

          {/* Photos grid */}
          <div className="grid grid-cols-1 gap-4 staggered-fade-in">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-secondary/50 rounded-2xl translate-x-2 translate-y-2"></div>
              <div className="absolute inset-0 border border-border rounded-2xl overflow-hidden">
                <img
                  src="/main_image.jpeg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-secondary/50 rounded-2xl translate-x-2 translate-y-2"></div>
                <div className="absolute inset-0 border border-border rounded-2xl overflow-hidden">
                  <img
                    src="/snow_image.jpeg"
                    alt="In snowy forest"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-secondary/50 rounded-2xl translate-x-2 translate-y-2"></div>
                <div className="absolute inset-0 border border-border rounded-2xl overflow-hidden">
                  <img
                    src="/sunset_image.JPG"
                    alt="By the lake at sunset"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="space-y-8">
          <h3 className="text-xl font-serif font-bold">Technical Skills</h3>
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="flex items-center gap-8">
                <h4 className="text-lg font-serif min-w-[200px]">{category.title}</h4>
                <div className="flex items-center gap-3">
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
    </section>
  );
}
