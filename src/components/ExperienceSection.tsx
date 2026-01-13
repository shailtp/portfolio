import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar, Briefcase, ChevronDown } from "lucide-react";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [logoErrors, setLogoErrors] = useState<Record<number, boolean>>({});
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const campusRoles = [
    {
      title: "Graduate Assistant",
      company: "San Francisco State University | College of Professional & Global Education",
      logo: "/sfsu-logo.png",
      location: "San Francisco, California, United States",
      workType: "On-site",
      startDate: "April 2025",
      endDate: "December 2025",
      duration: "9 months",
      description: "Responsible for designing and deploying multiple custom AI agent workflows using LangChain, Python scripts, and Box MCP for Enrollment application services, student communication, and file handling.",
      skills: ["Artificial Intelligence (AI)", "LangChain", "Automation", "Python", "Model Context Protocol"]
    },
    {
      title: "Graduate Teaching Assistant",
      company: "San Francisco State University | Department of Computer Science",
      logo: "/sfsu-logo.png",
      location: "San Francisco, California, United States",
      workType: "On-site",
      startDate: "January 2024",
      endDate: "December 2025",
      duration: "2 years",
      description: "CSC810 Analysis of Algorithms II (Graduate course) and CSC510 Analysis of Algorithms I (Undergrad course) by Prof. Timothy Sun.",
      skills: ["Graph Algorithms", "Data Structures", "Algorithm Analysis", "Algorithms"]
    },
    {
      title: "Research Assistant - Machine Learning",
      company: "San Francisco State University | Department of Computer Science",
      logo: "/sfsu-logo.png",
      location: "San Francisco, California, United States",
      workType: "On-site",
      startDate: "August 2024",
      endDate: "May 2025",
      duration: "10 months",
      description: "Research study on enhancing search results for Walmart e-commerce data by fine-tuning LLMs (Low rank adaptation) and testing of Large Language Models in recommendation systems.",
      skills: ["MLOps", "Software Infrastructure", "Machine Learning", "Recommender Systems", "TensorFlow", "Python", "Large Language Models (LLM)"]
    }
  ];

  const industryExperience = [
    {
      title: "Software Engineer",
      company: "Flowjet Valves Private Limited",
      logo: "/flowjet-logo.png",
      location: "Ahmedabad, Gujarat, India",
      workType: "On-site",
      startDate: "January 2023",
      endDate: "May 2023",
      duration: "5 months",
      description: "Payment services integration and monitoring, backend performance optimization and database management for company e-commerce portal used by 1300+ client companies across South East Asia.",
      skills: ["Amazon Web Services (AWS)", "MongoDB", "Node.js", "REST APIs", "Microservices", "Distributed Systems", "Agile Methodologies"]
    },
    {
      title: "Data Analyst Intern",
      company: "J-PAL South Asia",
      logo: "/jpal-logo.png",
      location: "New Delhi, Delhi, India",
      workType: "On-site",
      startDate: "May 2022",
      endDate: "August 2022",
      duration: "4 months",
      description: "Conducted quantitative data analysis for a randomized evaluation at J-PAL South Asia, using Python and SQL to clean and prepare large datasets. Supported research teams by performing exploratory data analysis, statistical analysis, and generating visualizations to inform project briefs and reports.",
      skills: ["Exploratory Data Analysis", "Statistical Modeling", "NumPy", "Data Science", "Python", "MySQL"]
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
    <section id="experience" className="pt-8 pb-20 bg-secondary/50">
      <div className="container-custom min-w-[1024px]" ref={sectionRef}>
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto staggered-fade-in">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-background rounded-full">
              Work Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Professional Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my professional journey and contributions <span className="text-base">(💡 Click on a card to see details!)</span>
            </p>
          </div>

          {/* On Campus Assistantship Roles */}
          <div className="space-y-8 staggered-fade-in">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">On Campus Assistantship Roles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {campusRoles.map((exp, index) => {
                  const cardId = `campus-${index}`;
                  const isExpanded = expandedCards[cardId] || false;
                  
                  return (
                    <div
                      key={index}
                      className={cn(
                        "bg-card border border-border/40 rounded-xl",
                        "hover:shadow-lg transition-all duration-300 cursor-pointer",
                        "staggered-fade-in overflow-hidden"
                      )}
                      onClick={() => setExpandedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }))}
                    >
                      <div className="p-5">
                        {/* Company Logo */}
                        <div className="flex justify-center mb-3">
                          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border/40">
                            {!logoErrors[cardId] && exp.logo ? (
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain p-2"
                                onError={() => setLogoErrors(prev => ({ ...prev, [cardId]: true }))}
                              />
                            ) : (
                              <Briefcase size={20} className="text-muted-foreground" />
                            )}
                          </div>
                        </div>

                        {/* Always Visible: Title, Company */}
                        <div className="text-center space-y-2 mb-3">
                          <h3 className="text-base font-semibold">{exp.title}</h3>
                          <p className="text-xs font-medium text-foreground/90">{exp.company}</p>
                        </div>

                        {/* Expandable Content */}
                        <div className={cn(
                          "transition-all duration-300 overflow-hidden",
                          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        )}>
                          <div className="pt-3 space-y-3 border-t border-border/40">
                            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                              <Calendar size={12} />
                              <span>{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                              <MapPin size={12} />
                              <span>{exp.location}</span>
                            </div>
                            
                            <p className="text-xs text-muted-foreground leading-relaxed text-center">
                              {exp.description}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-1.5 justify-center pt-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className={cn(
                                    "px-2 py-0.5 text-xs bg-secondary rounded-full text-foreground/80",
                                    "transition-all hover:bg-secondary/70"
                                  )}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Expand/Collapse Indicator */}
                        <div className="flex justify-center mt-3">
                          <ChevronDown 
                            size={16} 
                            className={cn(
                              "text-muted-foreground transition-transform duration-300",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Industry Experience */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Industry Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industryExperience.map((exp, index) => {
                  const cardId = `industry-${index}`;
                  const isExpanded = expandedCards[cardId] || false;
                  
                  return (
                    <div
                      key={index}
                      className={cn(
                        "bg-card border border-border/40 rounded-xl",
                        "hover:shadow-lg transition-all duration-300 cursor-pointer",
                        "staggered-fade-in overflow-hidden"
                      )}
                      onClick={() => setExpandedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }))}
                    >
                      <div className="p-5">
                        {/* Company Logo */}
                        <div className="flex justify-center mb-3">
                          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border/40">
                            {!logoErrors[cardId] && exp.logo ? (
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain p-2"
                                onError={() => setLogoErrors(prev => ({ ...prev, [cardId]: true }))}
                              />
                            ) : (
                              <Briefcase size={20} className="text-muted-foreground" />
                            )}
                          </div>
                        </div>

                        {/* Always Visible: Title, Company */}
                        <div className="text-center space-y-2 mb-3">
                          <h3 className="text-base font-semibold">{exp.title}</h3>
                          <p className="text-xs font-medium text-foreground/90">{exp.company}</p>
                        </div>

                        {/* Expandable Content */}
                        <div className={cn(
                          "transition-all duration-300 overflow-hidden",
                          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        )}>
                          <div className="pt-3 space-y-3 border-t border-border/40">
                            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                              <Calendar size={12} />
                              <span>{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                              <MapPin size={12} />
                              <span>{exp.location}</span>
                            </div>
                            
                            <p className="text-xs text-muted-foreground leading-relaxed text-center">
                              {exp.description}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-1.5 justify-center pt-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className={cn(
                                    "px-2 py-0.5 text-xs bg-secondary rounded-full text-foreground/80",
                                    "transition-all hover:bg-secondary/70"
                                  )}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Expand/Collapse Indicator */}
                        <div className="flex justify-center mt-3">
                          <ChevronDown 
                            size={16} 
                            className={cn(
                              "text-muted-foreground transition-transform duration-300",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 