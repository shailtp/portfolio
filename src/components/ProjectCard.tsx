
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link = "#",
  delay = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border/40 transition-all duration-500",
        "opacity-0 translate-y-8",
        "animate-slide-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="aspect-video overflow-hidden"
      >
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-apple",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{title}</h3>
          
          <a 
            href={link} 
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              "text-foreground/60 hover:text-foreground",
              "hover:bg-secondary"
            )}
            aria-label={`View ${title} project`}
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
        
        <p className="text-muted-foreground text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-secondary rounded-full text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
