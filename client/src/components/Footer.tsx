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

// POLİTİKA LİNKLERİNİ GÜNCELLEDİK (HTML dosyalarına gidecek)
const policies = [
  { label: "Gizlilik Politikası", href: "/gizlilik.html" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari.html" },
  { label: "Çerez Politikası", href: "/cerez-politikasi.html" },
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
      className="bg-card pt-16 lg:pt-24 pb-8"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. SÜTUN: LOGO, AÇIKLAMA VE SOSYAL MEDYA */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
  src="/milsoylogo.png" 
  alt="Milsoy Yapı Logo" 
  className="h-12 w-auto" 
  style={{ filter: 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.5))' }}
/>

            </div>
            {/* Açıklamayı daha samimi hale getirdik */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              Muğla ve Milas bölgesinde boya, seramik, tadilat ve dekorasyon işlerinizi 
              itina ile yapıyoruz. Evinizin ustası, güvenilir çözüm ortağınız.
            </p>
            <div className="flex gap-3">
              {/* FACEBOOK LİNKİ */}
              <a
                href="https://m.facebook.com/milsoyinsaat/" 
                target="_blank"
                className="p-2 bg-primary/10 rounded-md hover-elevate"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              {/* INSTAGRAM LİNKİ */}
              <a
                href="https://www.instagram.com/milsoyinsaat/" 
                target="_blank"
                className="p-2 bg-primary/10 rounded-md hover-elevate"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              {/* LINKEDIN (Kullanmıyorsan silebilir veya boş bırakabilirsin) */}
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-md hover-elevate"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* 2. SÜTUN: HIZLI LİNKLER (Değişmedi) */}
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

          {/* 3. SÜTUN: HİZMETLER (Değişmedi) */}
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

          {/* 4. SÜTUN: İLETİŞİM BİLGİLERİ (GÜNCELLENDİ) */}
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
                {/* TELEFON GÜNCELLENDİ */}
                <a
                  href="tel:+905444651940"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-phone"
                >
                  +90 544 465 19 40
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                {/* EMAIL GÜNCELLENDİ */}
                <a
                  href="mailto:milsoyinsaat@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-email"
                >
                  milsoyinsaat@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Pzt - Cmt: 08:00 - 19:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border/50 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Milsoy İnşaat. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {policies.map((policy) => (
              <a
                key={policy.label}
                href={policy.href}
                target="_blank" 
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
