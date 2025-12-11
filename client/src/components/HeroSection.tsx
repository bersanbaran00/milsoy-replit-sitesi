import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_dark_interior_hero.png";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Premium İnşaat & Dekorasyon
          </span>
          <Sparkles className="w-5 h-5 text-primary" />
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
          data-testid="hero-headline"
        >
          Hayallerinizi
          <br />
          <span className="text-primary">İnşa Ediyoruz</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          data-testid="hero-subheadline"
        >
          Muğla ve Milas bölgesinde, ustalık ve zarafetin buluştuğu
          premium inşaat ve dekorasyon hizmetleri sunuyoruz.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="min-w-48 text-base"
            data-testid="button-hero-cta"
          >
            Ücretsiz Keşif Talep Edin
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToServices}
            className="min-w-48 text-base bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-hero-services"
          >
            Hizmetlerimizi Keşfedin
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-primary transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
}
