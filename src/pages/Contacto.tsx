import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacto = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="h-screen bg-primary text-primary-foreground flex items-center" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4 text-center pt-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Estamos Listos para Escucharte.
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tu camino hacia una vida plena comienza con una conversación. Contáctanos de la manera que te sea más cómoda.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */} 
            <Card className="h-full">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Envíanos un Mensaje Directo
                </h2>
                <p className="text-muted-foreground mb-8">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad posible.
                </p>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="nombre" className="text-sm font-medium">Nombre Completo</Label>
                    <Input
                      id="nombre"
                      placeholder="Ej: María Fernanda Cortés"
                      className="bg-background border-input mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Correo Electrónico</Label>
                    <Input
                      id="email"
                      placeholder="Ej: maria.cortes@email.com"
                      type="email"
                      className="bg-background border-input mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono" className="text-sm font-medium">Número de Teléfono</Label>
                    <Input
                      id="telefono"
                      placeholder="Ej: 300 123 4567"
                      type="tel"
                      className="bg-background border-input mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mensaje" className="text-sm font-medium">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      className="bg-background border-input min-h-40 mt-2"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 ">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Datos Clave para tu Visita
                </h2>
              </div>

              <div className="space-y-6">
                  <Card >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
                          <p className="text-muted-foreground">318 607 2444</p>
                          <p className="text-sm text-muted-foreground mt-1">Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Email</h3>
                          <p className="text-muted-foreground">cirujanomolina@gmail.com</p>
                          <p className="text-sm text-muted-foreground mt-1">Respuesta en 24 horas</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
                          <p className="text-muted-foreground">
                            Cra 13. #105-131, Consultorio 417<br />
                            Clínica Central del Eje, Pereira, Risaralda<br />
                            Colombia
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Horarios de Atención</h3>
                          <p className="text-muted-foreground">
                            Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                            Sábados: 9:00 AM - 2:00 PM<br />
                            Domingos: Cerrado
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              </div>

              <div className="pt-6">
                <Button size="lg" className="w-full" variant="default">
                  Agenda tu Cita Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-primary text-primary-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Encuentra la Clínica en el Mapa
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-background rounded-lg overflow-hidden shadow-xl" style={{ height: "500px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.9371309032025!2d-75.76596423038374!3d4.813186499697654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e387d104675d1f9%3A0xe297e48b21246e21!2sDr.%20Juan%20Santiago%20Molina%20Vel%C3%A1squez!5e0!3m2!1sen!2smx!4v1760891286620!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ubicación de la Clínica"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Mantengamos la Conexión
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Síguenos en redes sociales para contenido exclusivo, testimonios y actualizaciones.
          </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
        </div>
      </section>

      <section style={{ scrollSnapAlign: 'start' }}>
        <Footer />
      </section>
    </div>
  );
};

export default Contacto;
