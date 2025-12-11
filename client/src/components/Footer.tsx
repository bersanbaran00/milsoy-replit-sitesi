import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetlerimiz", href: "#services" },
  { label: "Hakkımızda", href: "#about" },
  { label: "İletişim", href: "#contact" },
];

const services = [
  "Anahtar Teslim Tadilat",
  "Profesyonel Boya",
  "Seramik & Fayans",
  "Alçıpan & Asma Tavan",
  "Dış Cephe İzolasyonu",
];

const policies = [
  { label: "Gizlilik Politikası", href: "#" },
  { label: "Kullanım Koşulları", href: "#" },
  { label: "Çerez Politikası", href: "#" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="bg-card pt-16 lg:pt-24 pb-8"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-primary">MILSOY</span>
              <span className="text-2xl font-light text-foreground">YAPI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Muğla ve Milas bölgesinde premium inşaat ve dekorasyon hizmetleri
              sunuyoruz. Hayallerinizi inşa ediyoruz.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-md hover-elevate"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-md hover-elevate"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-md hover-elevate"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Milas Merkez, Muğla
                  <br />
                  Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+905551234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-phone"
                >
                  +90 555 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@milsoyyapi.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-email"
                >
                  info@milsoyyapi.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Pzt - Cmt: 08:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border/50 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Milsoy Yapı. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {policies.map((policy) => (
              <a
                key={policy.label}
                href={policy.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid={`policy-link-${policy.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {policy.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
