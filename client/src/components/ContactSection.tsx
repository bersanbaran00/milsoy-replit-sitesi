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
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const services = [
  { value: "turnkey", label: "Anahtar Teslim Tadilat" },
  { value: "painting", label: "Profesyonel Boya" },
  { value: "ceramic", label: "Seramik & Fayans" },
  { value: "plasterboard", label: "Alçıpan & Asma Tavan" },
  { value: "facade", label: "Dış Cephe İzolasyonu" },
  { value: "other", label: "Diğer" },
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

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", {
        ...data,
        email: data.email || null,
        message: data.message || null,
      });
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Talebiniz Alındı",
        description: "En kısa sürede sizinle iletişime geçeceğiz.",
      });
    },
    onError: () => {
      toast({
        title: "Hata",
        description: "Bir hata oluştu. Lütfen tekrar deneyiniz.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section
        id="contact-form"
        className="py-24 lg:py-32 bg-background"
        data-testid="contact-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-12 text-center bg-card border-card-border">
            <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-success-title">
              Talebiniz Başarıyla Alındı
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="text-success-message">
              En kısa sürede uzman ekibimiz sizinle iletişime geçecektir.
              Milsoy Yapı'yı tercih ettiğiniz için teşekkür ederiz.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                form.reset();
              }}
              data-testid="button-new-request"
            >
              Yeni Talep Oluştur
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact-form"
      className="py-24 lg:py-32 bg-background"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            İletişim
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="contact-title"
          >
            Ücretsiz <span className="text-primary">Keşif Talep Edin</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projeniz hakkında bilgi verin, uzman ekibimiz sizinle iletişime geçsin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
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
                          <FormLabel className="text-foreground">
                            Ad Soyad <span className="text-primary">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Adınız ve soyadınız"
                              className="bg-background border-border"
                              data-testid="input-name"
                              {...field}
                            />
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
                          <FormLabel className="text-foreground">
                            Telefon <span className="text-primary">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="05XX XXX XX XX"
                              className="bg-background border-border"
                              data-testid="input-phone"
                              {...field}
                            />
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
                          <FormLabel className="text-foreground">E-posta</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="ornek@email.com"
                              className="bg-background border-border"
                              data-testid="input-email"
                              {...field}
                            />
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
                          <FormLabel className="text-foreground">
                            Hizmet Türü <span className="text-primary">*</span>
                          </FormLabel>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger
                                className="bg-background border-border"
                                data-testid="select-service"
                              >
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
                        <FormLabel className="text-foreground">Mesajınız</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Projeniz hakkında detaylı bilgi verebilirsiniz..."
                            className="bg-background border-border min-h-32 resize-none"
                            data-testid="textarea-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={mutation.isPending}
                    data-testid="button-submit"
                  >
                    {mutation.isPending ? (
                      "Gönderiliyor..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Keşif Talep Et
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-card border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                  <a
                    href="tel:+905551234567"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="contact-phone"
                  >
                    +90 555 123 45 67
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-posta</h4>
                  <a
                    href="mailto:info@milsoyyapi.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="contact-email"
                  >
                    info@milsoyyapi.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Adres</h4>
                  <p className="text-muted-foreground" data-testid="contact-address">
                    Milas Merkez, Muğla
                    <br />
                    Türkiye
                  </p>
                </div>
              </div>
            </Card>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-md">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Hızlı Yanıt:</span>{" "}
                Taleplerinize 24 saat içinde dönüş yapıyoruz. Acil projeler için
                direkt arayabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
