
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Setup intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Target all staggered elements
    document.querySelectorAll(".staggered-fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".staggered-fade-in").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
