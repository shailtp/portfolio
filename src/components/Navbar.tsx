
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Nav items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-apple backdrop-blur-md",
        isScrolled
          ? "py-4 bg-white/80 dark:bg-black/80 shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity select-none"
        >
          portfolio.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-secondary transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={18} className="opacity-80" />
            ) : (
              <Sun size={18} className="opacity-80" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-secondary transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={18} className="opacity-80" />
            ) : (
              <Sun size={18} className="opacity-80" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2 rounded-md"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-all duration-300 ease-apple pt-20",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="container-custom flex flex-col items-center justify-center h-full space-y-8 animate-stagger">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-2xl font-medium transition-all duration-300",
                isMobileMenuOpen ? "animate-slide-up" : ""
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
