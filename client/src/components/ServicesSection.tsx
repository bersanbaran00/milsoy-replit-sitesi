import { Card } from "@/components/ui/card";
import { Home, Paintbrush, Grid3X3, Layers, Building } from "lucide-react";
import turnkeyImage from "@assets/generated_images/turnkey_renovation_service.png";
import paintingImage from "@assets/generated_images/professional_painting_service.png";
import ceramicImage from "@assets/generated_images/ceramic_tiles_service.png";
import plasterImage from "@assets/generated_images/plasterboard_ceiling_service.png";
import facadeImage from "@assets/generated_images/facade_insulation_service.png";

const services = [
  {
    icon: Home,
    title: "Anahtar Teslim Tadilat",
    description:
      "Projelendirmeden uygulamaya, her aşamada yanınızdayız. Evinizi veya iş yerinizi baştan aşağı yeniliyoruz.",
    image: turnkeyImage,
  },
  {
    icon: Paintbrush,
    title: "Profesyonel Boya",
    description:
      "İç ve dış cephe boyama işlemlerinizi premium malzemelerle, kusursuz bir işçilikle gerçekleştiriyoruz.",
    image: paintingImage,
  },
  {
    icon: Grid3X3,
    title: "Seramik & Fayans",
    description:
      "Banyo, mutfak ve zemin kaplamaları için kaliteli seramik ve fayans uygulamaları sunuyoruz.",
    image: ceramicImage,
  },
  {
    icon: Layers,
    title: "Alçıpan & Asma Tavan",
    description:
      "Modern tasarımlar ve LED aydınlatma entegrasyonu ile zarif asma tavan çözümleri sunuyoruz.",
    image: plasterImage,
  },
  {
    icon: Building,
    title: "Dış Cephe İzolasyonu",
    description:
      "Mantolama ve ısı yalıtımı ile enerji tasarrufu sağlayan, estetik dış cephe çözümleri sunuyoruz.",
    image: facadeImage,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-background"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Hizmetlerimiz
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="services-title"
          >
            Uzman Kadromuzla
            <br />
            <span className="text-primary">Kaliteli Hizmet</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Yılların deneyimiyle, her projede mükemmeliyeti hedefliyoruz.
            İhtiyacınıza özel çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-visible bg-card border-card-border hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`service-card-${index}`}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 p-3 bg-primary/90 rounded-md">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
