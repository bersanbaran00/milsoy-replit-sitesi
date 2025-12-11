import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin, CheckCircle, MessageCircle } from "lucide-react";
// EmailJS kütüphanesini ekledik
import emailjs from '@emailjs/browser';

const services = [
  { value: "Anahtar Teslim Tadilat", label: "Anahtar Teslim Tadilat (komple)" },
  { value: "Profesyonel Boya", label: "Profesyonel Boya" },
  { value: "Seramik & Fayans", label: "Seramik & Fayans" },
  { value: "Alçı & Sıva", label: "Alçı & Sıva" },
  { value: "Alçıpan & Asma Tavan", label: "Alçıpan & Asma Tavan" },
  { value: "Dış Cephe", label: "Dış Cephe" },
  { value: "Mantolama & İzolasyon", label: "Su ve Isı Yalıtım (Mantolama)" },
  { value: "Dekoratif Uygulamalar", label: "Kartonpiyer - Söve - Çıta (TV Ünitesi)" },
  { value: "Diğer", label: "Diğer" },
];

const contactFormSchema = z.object({
  name: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz").optional().or(z.literal("")),
  service: z.string().min(1, "Lütfen bir hizmet seçiniz"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsLoading(true);

    // --- EMAILJS AYARLARI ---
    // Buraya not aldığın 3 kodu tekrar yapıştır (öncekinde yapmıştık)
    const serviceID = "service_y0l2lio";
    const templateID = "template_6z4oxhm";
    const publicKey = "Z3GT9yfClD6IXxHkw";

    const templateParams = {
      from_name: data.name,
      from_email: data.email || "Belirtilmedi",
      phone: data.phone,
      service_type: data.service,
      message: data.message || "Mesaj yok",
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitted(true);
        setIsLoading(false);
        toast({
          title: "Talebiniz Alındı",
          description: "En kısa sürede sizinle iletişime geçeceğiz.",
        });
        form.reset();
      }, (err) => {
        console.log('FAILED...', err);
        setIsLoading(false);
        toast({
          title: "Hata",
          description: "Mesaj gönderilemedi. Lütfen WhatsApp'tan yazınız.",
          variant: "destructive",
        });
      });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-12 text-center bg-card border-card-border">
            <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Talebiniz Başarıyla Alındı
            </h3>
            <p className="text-muted-foreground mb-6">
              En kısa sürede uzman ekibimiz sizinle iletişime geçecektir.
              Milsoy Yapı'yı tercih ettiğiniz için teşekkür ederiz.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
            >
              Yeni Talep Oluştur
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ücretsiz <span className="text-primary">Keşif Talep Edin</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projeniz hakkında bilgi verin, uzman ekibimiz sizinle iletişime geçsin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form Alanı */}
          <div className="lg:col-span-3">
            <Card className="p-8 bg-card border-card-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ad Soyad <span className="text-primary">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Adınız ve soyadınız" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon <span className="text-primary">*</span></FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="05XX XXX XX XX" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-posta</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="ornek@email.com" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hizmet Türü <span className="text-primary">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Hizmet seçiniz" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service.value} value={service.value}>
                                  {service.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mesajınız</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Projeniz hakkında detaylı bilgi verebilirsiniz..." className="bg-background min-h-32 resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? "Gönderiliyor..." : (
                      <> <Send className="w-4 h-4 mr-2" /> Keşif Talep Et </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          {/* İletişim Bilgileri */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-card border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-md"> <Phone className="w-6 h-6 text-primary" /> </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <a href="tel:+905444651940" className="text-muted-foreground hover:text-primary transition-colors">+90 544 465 19 40</a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-md"> <MessageCircle className="w-6 h-6 text-primary" /> </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <a href="https://wa.me/905444651940" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">+90 544 465 19 40</a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-md"> <Mail className="w-6 h-6 text-primary" /> </div>
                <div>
                  <h4 className="font-semibold mb-1">E-posta</h4>
                  <a href="mailto:milsoyinsaat@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">milsoyinsaat@gmail.com</a>
                </div>
              </div>
            </Card>
            
             <Card className="p-6 bg-card border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-md"> <MapPin className="w-6 h-6 text-primary" /> </div>
                <div>
                  <h4 className="font-semibold mb-1">Adres</h4>
                  <p className="text-muted-foreground">Milas Merkez, Muğla<br />Türkiye</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
