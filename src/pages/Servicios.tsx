import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import surgeryImage from "@/assets/bariatric-surgery-concept.jpg";
import digestiveImage from "@/assets/digestive-system-diagram.jpg";

const Servicios = () => {
  const bariatricProcedures = [
    {
      name: "Manga Gástrica",
      description: "Reducción del estómago para limitar la ingesta de alimentos y promover la pérdida de peso sostenida.",
    },
    {
      name: "Bypass Gástrico",
      description: "Procedimiento que reduce el tamaño del estómago y desvía parte del intestino delgado.",
    },
    {
      name: "Cruce Duodenal",
      description: "Combina restricción gástrica con malabsorción para una pérdida de peso significativa.",
    },
    {
      name: "Balón Intragástrico",
      description: "Opción no quirúrgica temporal para iniciar el proceso de pérdida de peso.",
    },
  ];

  const generalServices = [
    {
      title: "Cirugía de Hernia por Mínima Invasión",
      description: "Reparación laparoscópica de hernias inguinales, umbilicales y ventrales con técnicas avanzadas para recuperación rápida y menor dolor post-operatorio.",
      image: surgeryImage,
    },
    {
      title: "Cirugía de Vesícula",
      description: "Colecistectomía laparoscópica para tratamiento de cálculos biliares y problemas de vesícula con mínima invasión.",
      image: digestiveImage,
    },
    {
      title: "Cirugía de Apéndice",
      description: "Apendicectomía laparoscópica de emergencia o programada con técnicas de vanguardia.",
      image: surgeryImage,
    },
  ];

  const supportPillars = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Asesoría Nutricional",
      description: "Guía experta para una alimentación saludable y sostenible adaptada a tus necesidades.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Soporte Psicológico",
      description: "Fortaleciendo tu mente para una transformación integral y duradera.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Seguimiento Post-Operatorio",
      description: "Tu éxito es nuestra prioridad, hoy y siempre. Acompañamiento continuo en cada etapa.",
    },
  ];

  const faqs = [
    {
      question: "¿Soy candidato para cirugía bariátrica?",
      answer: "Los candidatos ideales tienen un IMC mayor a 35 con comorbilidades o mayor a 40, y han intentado otros métodos de pérdida de peso sin éxito sostenido. Realizamos una evaluación completa para determinar la mejor opción para cada paciente.",
    },
    {
      question: "¿Qué riesgos implica la cirugía?",
      answer: "Como cualquier procedimiento quirúrgico, existen riesgos. Sin embargo, utilizamos técnicas mínimamente invasivas y protocolos de seguridad estrictos para minimizarlos. Discutimos todos los riesgos y beneficios durante la consulta inicial.",
    },
    {
      question: "¿Cuál es el tiempo de recuperación?",
      answer: "La mayoría de los pacientes regresan a actividades ligeras en 1-2 semanas y a actividades normales en 4-6 semanas. La recuperación varía según el procedimiento y cada paciente.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="h-screen bg-primary text-primary-foreground flex items-center" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4 text-center pt-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            Servicios Integrales: Ciencia, Innovación y Cuidado Humano.
          </h1>
          <p className="text-xl max-w-3xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
            Un abanico de soluciones personalizadas para tu bienestar y transformación definitiva.
          </p>
        </div>
      </section>

      {/* Bariatric Surgery Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 slide-up">
              <h2 className="text-4xl font-bold text-foreground">
                Cirugía Bariátrica y Metabólica: Un Nuevo Horizonte.
              </h2>
              <p className="text-lg text-muted-foreground">
                La cirugía bariátrica no es solo pérdida de peso, es una solución integral para enfermedades metabólicas como diabetes tipo 2, hipertensión y apnea del sueño. Con mi enfoque personalizado, cada procedimiento se adapta a tus necesidades específicas.
              </p>

              <div className="space-y-4 mt-8">
                <h3 className="text-2xl font-bold text-foreground">Procedimientos Comunes:</h3>
                {bariatricProcedures.map((procedure, index) => (
                  <div key={index} className="border-l-4 border-secondary pl-4 py-2">
                    <h4 className="text-xl font-semibold text-foreground">{procedure.name}</h4>
                    <p className="text-muted-foreground">{procedure.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="slide-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={digestiveImage}
                alt="Sistema Digestivo"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* General Surgery Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-primary text-primary-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cirugía General Avanzada: Precisión y Recuperación Rápida.
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Técnicas mínimamente invasivas para una recuperación más rápida, menor dolor y mejores resultados estéticos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {generalServices.map((service, index) => (
              <Card key={index} className="bg-background text-foreground zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Más Allá del Quirófano: Un Acompañamiento 360° para tu Éxito.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mi enfoque multidisciplinario incluye asesoría nutricional personalizada, soporte psicológico y seguimiento a largo plazo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportPillars.map((pillar, index) => (
              <div key={index} className="text-center space-y-4 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary text-secondary-foreground">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-accent text-accent-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              ¿Tienes Dudas? Respondemos a tus Preguntas más Frecuentes.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                  <AccordionTrigger className="text-foreground font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <Button variant="default" size="lg" asChild>
                <Link to="/faq">
                  Ver Todas las Preguntas Frecuentes
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Tu Transformación te Espera.
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agenda una consulta confidencial con el Dr. Juan Santiago Molina V. y exploremos juntos el mejor camino para tu salud y bienestar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/pre-evaluacion">Agenda tu Cita Online</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacto">Contáctanos Directamente</Link>
            </Button>
          </div>
        </div>
      </section>

      <section style={{ scrollSnapAlign: 'start' }}>
        <Footer />
      </section>
    </div>
  );
};

export default Servicios;
