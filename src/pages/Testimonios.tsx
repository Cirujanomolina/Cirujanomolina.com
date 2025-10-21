import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Testimonios = () => {
  const testimonials = [
    {
      name: "Sofia L.",
      age: 42,
      condition: "Diabetes tipo 2",
      quote: "Recuperé mi vida, mi salud y mi confianza.",
      text: "Después de años luchando con mi peso y diabetes tipo 2, el Dr. Molina me ayudó a recuperar mi vida. Su enfoque humano y profesional marcó toda la diferencia. No solo perdí 40 kilos, sino que mi diabetes está controlada sin medicamentos. Me siento renovada y llena de energía.",
      rating: 5,
    },
    {
      name: "Carlos M.",
      age: 38,
      condition: "Obesidad mórbida",
      quote: "Una transformación que va más allá de lo físico.",
      text: "No solo perdí peso, gané salud mental y emocional. El acompañamiento del Dr. Molina y su equipo fue fundamental en cada paso del proceso. Desde la primera consulta hasta el seguimiento post-operatorio, me sentí apoyado y comprendido. Mi vida cambió completamente.",
      rating: 5,
    },
    {
      name: "Ana G.",
      age: 35,
      condition: "Depresión relacionada al peso",
      quote: "Finalmente me siento libre y plena.",
      text: "La cirugía bariátrica cambió mi vida completamente. El Dr. Molina no solo es un excelente cirujano, sino un ser humano excepcional. Su empatía y profesionalismo hicieron que el proceso fuera mucho más llevadero. Hoy puedo jugar con mis hijos sin cansarme y me siento hermosa.",
      rating: 5,
    },
    {
      name: "Roberto S.",
      age: 45,
      condition: "Hipertensión y apnea del sueño",
      quote: "Volví a dormir bien por primera vez en años.",
      text: "Mi apnea del sueño desapareció y mi presión arterial se normalizó. El Dr. Molina y su equipo me dieron una segunda oportunidad de vida. El seguimiento nutricional y psicológico fue clave para mi éxito. Recomiendo al Dr. Molina sin dudarlo.",
      rating: 5,
    },
    {
      name: "María P.",
      age: 29,
      condition: "Obesidad desde la adolescencia",
      quote: "Ahora puedo vivir la vida que siempre soñé.",
      text: "Desde adolescente luché con mi peso. El Dr. Molina me ayudó a entender que esto iba más allá de la comida. Su enfoque integral me transformó por dentro y por fuera. Perdí 35 kilos y gané una autoestima que nunca tuve. Gracias por devolverme mi vida.",
      rating: 5,
    },
    {
      name: "Luis T.",
      age: 52,
      condition: "Hernia inguinal recurrente",
      quote: "Profesionalismo y resultados excepcionales.",
      text: "Tuve una hernia inguinal que me causaba dolor constante. El Dr. Molina realizó la cirugía laparoscópica con resultados perfectos. La recuperación fue rápida y sin complicaciones. Su atención y seguimiento fueron impecables. Un médico de primer nivel.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="h-screen bg-background flex items-center" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4 text-center pt-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 fade-in">
            Historias Reales, Transformaciones Reales: Tu Inspiración Comienza Aquí.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
            Descubre el impacto de un acompañamiento experto en la vida de quienes eligieron dar un paso hacia su bienestar.
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-primary text-primary-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Sus Voces: El Impacto de una Decisión.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <Card key={index} className="bg-background text-foreground zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}, {testimonial.age} años</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-2xl font-bold italic text-foreground">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-muted-foreground">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery of Transformations */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Transformaciones que Inspiran: Una Galería de Éxito.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada imagen cuenta una historia de valentía, dedicación y una nueva oportunidad de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(2).map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-lg font-semibold italic text-foreground">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-muted-foreground line-clamp-4">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-accent text-accent-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Has vivido tu propia Transformación con Nosotros?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tu experiencia puede inspirar y guiar a otros en su camino hacia una vida plena. Nos encantaría escuchar tu historia.
          </p>
          <Button size="lg" variant="default" asChild>
            <Link to="/contacto">
              Envía tu Testimonio
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-primary text-primary-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Tu Historia de Éxito Podría Ser la Siguiente.
          </h2>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/pre-evaluacion">
              Agenda tu Consulta Confidencial
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section style={{ scrollSnapAlign: 'start' }}>
        <Footer />
      </section>
    </div>
  );
};

export default Testimonios;
