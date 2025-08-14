import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className={cn(
        "py-24 md:py-32",
        "staggered-fade-in opacity-0 transition-all duration-700"
      )}
    >
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Work Experience</h2>
          <p className="text-muted-foreground">
            A showcase of my professional journey and contributions.
          </p>
        </div>
        
        {/* Placeholder for experience content - to be implemented */}
        <div className="space-y-12">
          <p className="text-center text-muted-foreground">
            Work experience section coming soon...
          </p>
        </div>
      </div>
    </section>
  );
} 