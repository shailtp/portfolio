
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 section-padding">
      <div className="container-custom flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-stagger">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-secondary rounded-full animate-slide-down">
            Hello, I'm Shail👋
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight animate-slide-up text-balance">
            Building <span className="relative inline-block">
              digital solutions
              <span className="absolute bottom-1 left-0 w-full h-1 bg-foreground/10"></span>
            </span> that matter
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up text-balance">
            Software and machine learning engineer specializing in creating powerful, intuitive applications and AI automations that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up flex-wrap">
            <a 
              href="#about" 
              className={cn(
                "px-6 py-3 bg-foreground text-background font-medium rounded-full transition-all",
                "hover:shadow-lg hover:translate-y-[-2px]",
                "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
              )}
            >
              About Me
            </a>
            <a 
              href="#experience" 
              className={cn(
                "px-6 py-3 bg-foreground text-background font-medium rounded-full transition-all",
                "hover:shadow-lg hover:translate-y-[-2px]",
                "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
              )}
            >
              View My Work Experience
            </a>
            <a 
              href="#projects" 
              className={cn(
                "px-6 py-3 bg-foreground text-background font-medium rounded-full transition-all",
                "hover:shadow-lg hover:translate-y-[-2px]",
                "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
              )}
            >
              View My Projects
            </a>
            <a 
              href="#contact" 
              className={cn(
                "px-6 py-3 border border-foreground/20 rounded-full font-medium",
                "hover:bg-secondary transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
              )}
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span className="mb-2">Scroll</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
