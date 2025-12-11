import { Card } from "@/components/ui/card";
import { MapPin, Award, Users, Clock, Shield, ThumbsUp } from "lucide-react";

const trustItems = [
  {
    icon: MapPin,
    title: "Yerel Uzmanlık",
    description: "Muğla ve Milas bölgesinde 15 yılı aşkın deneyim ve yüzlerce başarılı proje.",
    highlight: "Milas'ta",
  },
  {
    icon: Award,
    title: "Kaliteli İşçilik",
    description: "Her projede en yüksek kalite standartlarını uygulayan uzman ekibimiz.",
    highlight: "Premium",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Mutlu Müşteri" },
  { icon: Clock, value: "15+", label: "Yıllık Deneyim" },
  { icon: Shield, value: "100%", label: "Garanti" },
  { icon: ThumbsUp, value: "98%", label: "Memnuniyet" },
];

export default function TrustSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-card"
      data-testid="trust-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Neden Biz?
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="trust-title"
          >
            Güven ve <span className="text-primary">Kalite</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milsoy Yapı olarak, her projede müşteri memnuniyetini ön planda tutuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {trustItems.map((item, index) => (
            <Card
              key={index}
              className="p-8 bg-background border-card-border flex flex-col sm:flex-row gap-6 items-start"
              data-testid={`trust-card-${index}`}
            >
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium text-primary mb-1 block">
                  {item.highlight}
                </span>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-md border border-border"
              data-testid={`stat-${index}`}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
