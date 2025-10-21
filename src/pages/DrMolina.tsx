import { Link } from "react-router-dom";
import { Award, Globe, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import doctorPortrait from "@/assets/doctor-portrait-2.png";
import clinicReception from "@/assets/clinic-reception.jpg";

const DrMolina = () => {
  const credentials = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Especialista en Cirugía General y Laparoscópica",
      description: "Médico especialista con amplia experiencia en procedimientos de Cirugía General, destacando el uso de técnicas avanzadas de laparoscopia para una recuperación más rápida y menos invasiva.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Fellowship en Cirugía Laparoscópica Avanzada",
      description: "Formación especializada en Nueva Delhi, India, avalado por instituciones de renombre como Max Healthcare y Medicity Gurugram, consolidando técnicas de vanguardia en procedimientos mínimamente invasivos.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Cirujano Bariátrico Certificado",
      description: "Certificación como Cirujano Bariátrico por parte de la Federación Internacional para la Cirugía de la Obesidad y Trastornos Metabólicos (IFSO) en alianza con la Universidad de Monterrey, garantizando la más alta calidad en la atención de la obesidad y enfermedades metabólicas.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="h-screen bg-background flex items-center" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4 text-center pt-16">
          {/* Contenedor que actúa como máscara */}
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-reveal-up">
              Dr. Juan Santiago Molina V.: Ciencia, Humanidad y Compromiso.
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
            Un especialista dedicado a tu bienestar, donde cada historia es tratada con excelencia y calidez.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-primary text-primary-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 slide-up">
              <h2 className="text-4xl font-bold">
                Mi Compromiso: Excelencia Técnica, Cuidado Humano.
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  Mi nombre es Juan Santiago Molina, soy médico especialista en Cirugía General, con experiencia en Cirugía Laparoscópica. Mi enfoque metódico y humanístico no se limita a las habilidades técnicas dentro del quirófano, sino que busca abordar las complejidades emocionales que rodean la enfermedad.
                </p>
                <p>
                  Creo firmemente en la importancia de tratar al paciente con calidad y calidez humana, extendiendo mi atención a las preocupaciones de sus seres queridos y brindando una atención personalizada, a la medida de sus necesidades.
                </p>
                <p>
                  Mi objetivo va más allá de la sola resolución quirúrgica: me esfuerzo en proporcionar consuelo y comprensión en momentos difíciles, reconociendo la importancia de la dimensión emocional en el proceso de recuperación.
                </p>
                <p className="font-semibold">
                  En un campo impulsado por la ciencia, creo fielmente en la atención médica integral, fusionando la técnica precisa con el toque humano esencial para lograr una recuperación completa y significativa.
                </p>
              </div>
            </div>

            <div className="slide-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={doctorPortrait}
                alt="Dr. Juan Santiago Molina V."
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="formacion-experiencia" className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Formación y Experiencia: Un Camino de Especialización.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {credentials.map((credential, index) => (
              <Card key={index} className="text-center zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary text-secondary-foreground">
                    {credential.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{credential.title}</h3>
                  <p className="text-muted-foreground">{credential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-accent text-accent-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nuestras Instalaciones: Modernidad y Confort.
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Contamos con tecnología de vanguardia y un ambiente diseñado para tu comodidad y seguridad, asegurando la mejor experiencia posible.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img
              src={clinicReception}
              alt="Instalaciones de la Clínica"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Los Pilares de Mi Práctica
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Excelencia Técnica",
                  description: "Utilizo las técnicas quirúrgicas más avanzadas y actualizadas, con formación internacional y certificaciones vigentes.",
                },
                {
                  title: "Atención Personalizada",
                  description: "Cada paciente es único. Adapto mi enfoque a las necesidades específicas de cada persona y su familia.",
                },
                {
                  title: "Cuidado Integral",
                  description: "No solo trato la enfermedad, sino que acompaño al paciente en su proceso emocional y de recuperación completa.",
                },
                {
                  title: "Compromiso Continuo",
                  description: "Mi responsabilidad no termina en el quirófano. El seguimiento post-operatorio es parte fundamental de mi práctica.",
                },
              ].map((value, index) => (
                <Card key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-primary text-primary-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Tu Salud y Bienestar son mi Prioridad.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Te invito a agendar una consulta para que podamos conversar en persona sobre tus necesidades y cómo puedo acompañarte en tu camino hacia una vida más plena.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/pre-evaluacion">
              Agenda tu Consulta Personalizada
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

export default DrMolina;
