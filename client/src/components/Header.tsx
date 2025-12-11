import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetlerimiz", href: "#services" },
  { label: "Hakkımızda", href: "#about" },
  { label: "İletişim", href: "#contact" },
];

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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-2"
            data-testid="logo-link"
          >
            <img 
              src="/milsoyinsaatsaydam.png" 
              alt="Milsoy Yapı" 
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="default"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-contact-cta"
            >
              <Phone className="w-4 h-4 mr-2" />
              Bize Ulaşın
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-primary/20 py-4"
            data-testid="nav-mobile"
          >
            <nav className="flex flex-col gap-2 px-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border/50"
                  data-testid={`nav-mobile-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="default"
                className="mt-4"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-mobile-contact"
              >
                <Phone className="w-4 h-4 mr-2" />
                Bize Ulaşın
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}