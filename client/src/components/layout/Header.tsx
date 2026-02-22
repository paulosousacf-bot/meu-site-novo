import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Planos", href: "#planos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2"
          onClick={(e) => scrollToSection(e, "#home")}
        >
          <img 
            src={isScrolled ? "/images/logo_original.png" : "/images/logo_white_text.png"}
            alt="Solutyon Tech" 
            className="h-12 md:h-16 w-auto transition-all object-contain" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "text-2xl font-bold hover:text-primary transition-colors",
                !isScrolled ? "text-white/90 hover:text-white" : "text-slate-700"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://solutyontech.centralassinante.com.br/#/login" target="_blank" rel="noopener noreferrer">
            <Button 
              variant={isScrolled ? "default" : "secondary"}
              className={cn(
                "text-xl font-extrabold rounded-full px-10 py-6",
                !isScrolled && "bg-white text-primary hover:bg-white/90"
              )}
            >
              Área do Cliente
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden p-2", !isScrolled ? "text-white" : "text-slate-900")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/50"
            >
              {link.name}
            </a>
          ))}
          <a href="https://solutyontech.centralassinante.com.br/#/login" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full rounded-full font-bold">
              Área do Cliente
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
