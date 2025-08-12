
import { useEffect, useRef } from "react";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

export default function ContactSection() {
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
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom space-y-16" ref={sectionRef}>
        <div className="space-y-4 text-center max-w-3xl mx-auto staggered-fade-in">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-background rounded-full">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'm always open to new challenges and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 staggered-fade-in">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
