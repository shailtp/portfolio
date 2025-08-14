
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href="#home"
              className="text-xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity"
            >
              portfolio.
            </a>
            <p className="text-sm text-muted-foreground">
              Designed and built with care
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <nav className="flex items-center gap-6">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <p className="text-sm text-muted-foreground">
              © {currentYear} Shail Patel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
