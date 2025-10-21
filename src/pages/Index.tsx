import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Clock, Activity, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-reflection.jpg";
import EmpathyImage from "@/assets/EmpathyImage.jpg";
import surgeryImage from "@/assets/bariatric-surgery-concept.jpg";
import HerniaImage from "@/assets/HerniaImage.jpg";
import digestiveImage from "@/assets/digestive-system-diagram.jpg";
import doctorPortrait from "@/assets/doctor-portrait-3.png";
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Hook personalizado para detectar el tamaño de la pantalla
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const Index = () => {
  // 1. Estado para controlar la animación. Por defecto, es lenta.
  // Ahora controlamos la dirección y la velocidad por separado.
  const [isPaused, setIsPaused] = useState(false);
  const [allowPause, setAllowPause] = useState(true);

  // Detectamos si la pantalla es de escritorio (768px o más)
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const animationClass = isDesktop ? "animate-scroll-slow" : "animate-scroll-fast";

  const testimonials = [
    {
      name: "Sofia L.",
      age: 42,
      quote: "Recuperé mi vida, mi salud y mi confianza.",
      text: "Después de años luchando con mi peso y diabetes tipo 2, el Dr. Molina me ayudó a recuperar mi vida. Su enfoque humano y profesional marcó toda la diferencia.",
      rating: 5,
    },
    {
      name: "Carlos M.",
      age: 38,
      quote: "Una transformación que va más allá de lo físico.",
      text: "No solo perdí peso, gané salud mental y emocional. El acompañamiento del Dr. Molina y su equipo fue fundamental en cada paso del proceso.",
      rating: 5,
    },
    {
      name: "Ana G.",
      age: 35,
      quote: "Finalmente me siento libre y plena.",
      text: "La cirugía bariátrica cambió mi vida completamente. El Dr. Molina no solo es un excelente cirujano, sino un ser humano excepcional.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
        <div
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text-shadow float-in-down">
            Más allá del reflejo, existe una nueva plenitud.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto fade-in" style={{ animationDelay: "0.5s" }}>
            Un acompañamiento experto para tu transformación, donde la ciencia y la empatía se encuentran.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 fade-in btn-hero hover:no-underline" style={{ animationDelay: "0.5s" }} variant="link" asChild>
            <Link to="/contacto">Inicia tu Transformación Hoy <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="relative min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center" style={{ scrollSnapAlign: 'start' }}>
        {/* Fondo con imagen y tinte */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${EmpathyImage})` }}
        >
          {/* Tinte color crema (background) con opacidad */}
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animationClassName="slide-up" className="text-center max-w-4xl mx-auto mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                El eco de cada intento fallido, el anhelo de una vida plena.
              </h2>
              <p className="text-lg text-muted-foreground">
                Las dietas que fallan, la frustración silenciosa, el rechazo velado, el aislamiento, la preocupación creciente por tu salud y la sensación de que la vida plena se te escapa. Entendemos cada matiz de esos sentimientos.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Activity className="w-8 h-8" />, label: "Ciclos sin fin" },
              { icon: <Heart className="w-8 h-8" />, label: "El peso emocional" },
              { icon: <Activity className="w-8 h-8" />, label: "Salud al límite" },
              { icon: <Clock className="w-8 h-8" />, label: "Momentos pospuestos" },
            ].map((item, index) => (
              <AnimateOnScroll
                key={index}
                delay={index * 150} // Pasamos el retraso como un número
                animationClasses="translate-y-10"
                transitionClasses="duration-700"
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground">
                    {item.icon}
                  </div>
                  <p className="font-medium text-foreground">{item.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Molina Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:h-[calc(100vh-7rem)] bg-background flex flex-col md:flex-row" style={{ scrollSnapAlign: 'start' }}>
        {/* Columna de la imagen */}
        <AnimateOnScroll animationClassName="fade-in" className="w-full md:w-1/2 h-64 md:h-full">
          <div className="w-full h-full">
            <img
              src={doctorPortrait}
              alt="Dr. Juan Santiago Molina V."
              className="w-full h-full object-cover object-top"
            />
          </div>
        </AnimateOnScroll>
        {/* Columna del texto */}
        <div className="w-full md:w-1/2 flex items-center overflow-y-auto">
          <div className="container mx-auto px-8 md:px-16 py-12">
              <AnimateOnScroll animationClassName="fade-in" animationDelay="0.2s">
                <div className="space-y-6 max-w-xl mx-auto">
                  <h2 className="text-4xl font-bold text-foreground">
                    Conoce al Dr. Juan Santiago Molina V: Experiencia, Empatía y Resultados Comprobados.
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Mi compromiso inquebrantable con la excelencia médica y el cuidado integral del paciente define mi práctica profesional. Mi enfoque metódico y humanístico no se limita a las habilidades técnicas dentro del quirófano, sino que busca abordar las complejidades emocionales que rodean la enfermedad.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    En un campo impulsado por la ciencia, creo fielmente en la atención médica integral, fusionando la técnica precisa con el toque humano esencial para lograr una recuperación completa y significativa.
                  </p>
                  <Button variant="default" size="lg" asChild className="btn-interactive">
                    <Link to="/dr-molina#formacion-experiencia">
                      Mi Filosofía y Credenciales
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-primary text-primary-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <AnimateOnScroll animationClassName="float-in-down">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Más Allá de Cirugía: Soluciones Integrales para tu Bienestar.</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Cirugía Bariátrica Laparoscópica",
                description: "Transformación integral con procedimientos avanzados para obesidad y enfermedades metabólicas.",
                image: digestiveImage,
              },
              {
                title: "Cirugía de Hernia por Mínima Invasión",
                description: "Técnicas laparoscópicas para una recuperación más rápida y menos dolorosa.",
                image: HerniaImage,
              },
              {
                title: "Cirugía de Vesícula Laparoscópica",
                description: "Colecistectomía laparoscópica con la más alta calidad y cuidado.",
                image: surgeryImage,
              },
            ].map((service, index) => {
              if (index === 0) { // Animación para la primera tarjeta (desde la izquierda)
                return (
                  <AnimateOnScroll
                    key={index}
                    animationClasses="-translate-x-10" // Empieza 10 unidades a la izquierda
                    transitionClasses="duration-700"
                    delay={300} // Retraso de 300ms
                    className="h-full"
                  >
                    <Card className="bg-background text-foreground flex flex-col h-full transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]">
                      <CardContent className="p-0 flex flex-col flex-grow">
                        <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-6 space-y-4 flex flex-col flex-grow">
                          <h3 className="text-2xl font-bold min-h-[4rem]">{service.title}</h3>
                          <p className="text-muted-foreground flex-grow">{service.description}</p>
                          <Button variant="default" className="w-full btn-interactive" asChild>
                            <Link to="/servicios">Ver Más Detalles</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                );
              }
              if (index === 1) { // Animación para la tarjeta del medio (fade-in)
                return (
                  <AnimateOnScroll
                    key={index}
                    animationClasses="" // Sin transformación, solo fade
                    duration={1200} // Duración de 1200ms
                    delay={300} // Mismo retraso que las otras
                    className="h-full"
                  >
                    <Card className="bg-background text-foreground flex flex-col h-full transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]">
                      <CardContent className="p-0 flex flex-col flex-grow">
                        <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-6 space-y-4 flex flex-col flex-grow">
                          <h3 className="text-2xl font-bold min-h-[4rem]">{service.title}</h3>
                          <p className="text-muted-foreground flex-grow">{service.description}</p>
                          <Button variant="default" className="w-full btn-interactive" asChild>
                            <Link to="/servicios">Ver Más Detalles</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                );
              }
              if (index === 2) { // Animación para la tercera tarjeta (desde la derecha)
                return (
                  <AnimateOnScroll
                    key={index}
                    animationClasses="translate-x-10" // Empieza 10 unidades a la derecha
                    transitionClasses="duration-700"
                    delay={300} // Mismo retraso que la primera
                    className="h-full"
                  >
                    <Card className="bg-background text-foreground flex flex-col h-full transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]">
                      <CardContent className="p-0 flex flex-col flex-grow">
                        <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-6 space-y-4 flex flex-col flex-grow">
                          <h3 className="text-2xl font-bold min-h-[4rem]">{service.title}</h3>
                          <p className="text-muted-foreground flex-grow">{service.description}</p>
                          <Button variant="default" className="w-full btn-interactive" asChild>
                            <Link to="/servicios">Ver Más Detalles</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                );
              }
              return (
                <div key={index} className="h-full">
                  <Card className="bg-background text-foreground flex flex-col h-full">
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="p-6 space-y-4 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold min-h-[4rem]">{service.title}</h3>
                        <p className="text-muted-foreground flex-grow">{service.description}</p>
                        <Button variant="default" className="w-full btn-interactive" asChild>
                          <Link to="/servicios">Ver Más Detalles</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <AnimateOnScroll animationClasses="" duration={900} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sus Historias. Tu Inspiración.
            </h2>
          </AnimateOnScroll>

          {/* --- Inicio del Carrusel --- */}
          <div
            className="group relative w-full overflow-hidden py-12"
            style={{ maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)" }}
          >
            {/* Contenedor principal que se anima */}
            <div className={`flex w-max ${animationClass} ${isPaused ? "paused" : ""}`}>
              {/* Renderizamos el bloque de testimonios dos veces */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-shrink-0">
                  {testimonials.map((testimonial, index) => (
                    <Card
                      key={index}
                      onMouseEnter={() => { if (allowPause) setIsPaused(true); }}
                      onMouseLeave={() => { if (allowPause) setIsPaused(false); }}
                      onTouchStart={() => { if (allowPause) setIsPaused(true); }}
                      onTouchEnd={() => { if (allowPause) setIsPaused(false); }}
                      className="mx-4 w-80 flex-shrink-0 cursor-pointer md:w-96 transform bg-secondary text-secondary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                    >
                      <CardContent className="p-8 flex h-full flex-col items-center justify-center space-y-4 text-center">
                        <p className="text-2xl font-bold italic">"{testimonial.quote}"</p>
                        <p className="text-base opacity-90 h-24 line-clamp-4">{testimonial.text}</p>
                        <div className="flex items-center justify-center space-x-1 pt-2">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                        <p className="font-semibold text-lg pt-2">{testimonial.name}, {testimonial.age} años</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
            {/* 3. Zonas de aceleración que cambian el estado de la animación */}
            <div
              className="absolute top-0 left-0 h-full w-[15%]"
              onMouseEnter={() => setAllowPause(false)}
              onMouseLeave={() => setAllowPause(true)}
            ></div>
            <div
              className="absolute top-0 right-0 h-full w-[15%]"
              onMouseEnter={() => setAllowPause(false)}
              onMouseLeave={() => setAllowPause(true)}
            ></div>
          </div>
          {/* --- Fin del Carrusel --- */}

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6 btn-hero hover:no-underline" variant="link" asChild>
              <Link to="/testimonios" className="hover:no-underline">
                Conoce Todas las Transformaciones
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA & Contact Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-primary text-primary-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                Tu Viaje hacia una Vida Plena Comienza Hoy.
              </h2>
              <Button size="lg" variant="secondary" asChild className="w-full md:w-auto btn-interactive">
                <Link to="/pre-evaluacion" className="flex items-center justify-center">
                  <Calendar className="mr-2" />
                  Agenda tu Cita Online
                </Link>
              </Button>
            </div>

            <Card className="bg-background text-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">¿Prefieres una Consulta Directa?</h3>
                <form className="space-y-4">
                  <Input
                    placeholder="Nombre Completo"
                    className="bg-background border-input"
                  />
                  <Input
                    placeholder="Correo Electrónico"
                    type="email"
                    className="bg-background border-input"
                  />
                  <Input
                    placeholder="Teléfono"
                    type="tel"
                    className="bg-background border-input"
                  />
                  <Textarea
                    placeholder="Mensaje"
                    className="bg-background border-input min-h-32"
                  />
                  <Button type="submit" className="w-full btn-interactive">
                    Enviar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section style={{ scrollSnapAlign: 'start' }}>
        <Footer />
      </section>
    </div>
  );
};

export default Index;
