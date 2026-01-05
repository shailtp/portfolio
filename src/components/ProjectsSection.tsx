
import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Project data from resume
  const projects = [
    {
      title: "RAG-based Course Recommendation System",
      description: "AI-powered course recommendation system for CS students using LLAMA 7B model and web scraping techniques.",
      tags: ["React.js", "AWS", "MongoDB", "LLAMA"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2000",
    },
    {
      title: "Leetcode AI Assistant",
      description: "Google Chrome extension leveraging Google Gemini API to provide auto-suggestions and detailed solutions for coding challenges.",
      tags: ["JavaScript", "Gemini API", "Chrome Extension"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000",
    },
    {
      title: "Edu Bridge LMS",
      description: "Full-stack Learning Management System with video streaming, content sharing, and real-time collaboration features.",
      tags: ["React.js", "Node.js", "MySQL", "AWS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000",
    },
    {
      title: "Stock Visualization App",
      description: "Real-time stock dashboard displaying live data for NYSE and NASDAQ stocks with advanced analytics capabilities.",
      tags: ["React.js", "Node.js", "Redis", "AlphaVantage API"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000",
    },
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
    <section id="projects" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-custom space-y-16" ref={sectionRef}>
        <div className="space-y-4 text-center max-w-3xl mx-auto staggered-fade-in">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-background rounded-full">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects that demonstrate problem-solving skills and innovative thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-fade-in">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
