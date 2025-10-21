import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const categories = [
    {
      title: "Sobre Cirugía Bariátrica",
      faqs: [
        {
          question: "¿Quién es candidato para cirugía bariátrica?",
          answer: "Los candidatos ideales tienen un Índice de Masa Corporal (IMC) mayor a 35 con comorbilidades asociadas (diabetes, hipertensión, apnea del sueño) o mayor a 40 sin comorbilidades. También es importante haber intentado otros métodos de pérdida de peso sin éxito sostenido y tener el compromiso de realizar cambios permanentes en el estilo de vida.",
        },
        {
          question: "¿Cuáles son los diferentes tipos de cirugía bariátrica?",
          answer: "Los procedimientos más comunes incluyen: Manga Gástrica (reducción del estómago), Bypass Gástrico (reduce el estómago y desvía el intestino), Cruce Duodenal (combina ambas técnicas) y Balón Intragástrico (opción temporal no quirúrgica). Durante la consulta evaluamos cuál es el más adecuado para cada paciente.",
        },
        {
          question: "¿Qué resultados puedo esperar de la cirugía bariátrica?",
          answer: "La mayoría de los pacientes pierden entre 50-70% de su exceso de peso en los primeros 12-18 meses. Además, muchas comorbilidades como diabetes tipo 2, hipertensión y apnea del sueño mejoran significativamente o se resuelven completamente. Los resultados varían según el compromiso del paciente con los cambios de estilo de vida.",
        },
        {
          question: "¿La cirugía bariátrica cura la diabetes tipo 2?",
          answer: "Muchos pacientes experimentan remisión completa de la diabetes tipo 2 después de la cirugía bariátrica, especialmente si la enfermedad tiene menos de 10 años de evolución. Los estudios muestran tasas de remisión del 70-80% en pacientes seleccionados adecuadamente.",
        },
      ],
    },
    {
      title: "Sobre Cirugía General",
      faqs: [
        {
          question: "¿Qué ventajas tiene la cirugía laparoscópica?",
          answer: "La cirugía laparoscópica ofrece múltiples beneficios: incisiones más pequeñas (menor cicatrización), menor dolor post-operatorio, recuperación más rápida, menor riesgo de infección, regreso más pronto a actividades normales y mejores resultados estéticos. La mayoría de mis procedimientos se realizan mediante esta técnica avanzada.",
        },
        {
          question: "¿Se tratan hernias de todo tipo?",
          answer: "Sí, tengo experiencia en el tratamiento de hernias inguinales, umbilicales, ventrales (incisionales) y epigástricas. Utilizo técnicas laparoscópicas avanzadas que reducen el riesgo de recurrencia y aceleran la recuperación. Cada caso se evalúa individualmente para determinar el mejor abordaje quirúrgico.",
        },
        {
          question: "¿Qué debo saber sobre la cirugía de vesícula?",
          answer: "La colecistectomía laparoscópica es el procedimiento estándar para problemas de vesícula biliar. Es mínimamente invasivo, con recuperación de 1-2 semanas. La mayoría de los pacientes regresan a casa el mismo día o al día siguiente. Los riesgos son mínimos y los beneficios incluyen eliminación del dolor y prevención de complicaciones futuras.",
        },
      ],
    },
    {
      title: "Proceso de Consulta",
      faqs: [
        {
          question: "¿Cómo puedo agendar una primera cita?",
          answer: "Puedes agendar tu cita llamando a nuestro consultorio, enviando un mensaje por WhatsApp, completando el formulario de contacto en la página web o mediante la opción de Pre-evaluación Online. Te contactaremos en menos de 24 horas para confirmar tu cita.",
        },
        {
          question: "¿Qué debo llevar a mi primera consulta?",
          answer: "Por favor trae: estudios médicos previos (análisis de sangre, electrocardiograma, ultrasonidos), lista de medicamentos actuales, historia clínica completa, identificación oficial y tu tarjeta de seguro médico si aplica. Esto nos ayudará a realizar una evaluación más completa.",
        },
        {
          question: "¿Ofrecen consultas virtuales?",
          answer: "Sí, ofrecemos consultas virtuales para evaluación inicial, seguimiento post-operatorio y dudas generales. Sin embargo, para la evaluación pre-quirúrgica y ciertos procedimientos es necesaria una consulta presencial. Contáctanos para determinar qué opción es mejor para tu caso.",
        },
      ],
    },
    {
      title: "Recuperación y Seguimiento",
      faqs: [
        {
          question: "¿Cuánto tiempo dura la recuperación después de la cirugía?",
          answer: "El tiempo de recuperación varía según el procedimiento: Cirugía laparoscópica general (1-2 semanas), Cirugía bariátrica (2-4 semanas para actividades ligeras, 6-8 semanas para actividad completa). La mayoría de los pacientes pueden regresar al trabajo en 2-3 semanas, dependiendo del tipo de trabajo.",
        },
        {
          question: "¿Qué tipo de seguimiento se ofrece post-cirugía?",
          answer: "Ofrecemos un programa integral de seguimiento que incluye: consultas médicas regulares, asesoría nutricional personalizada, soporte psicológico, análisis de laboratorio periódicos y disponibilidad 24/7 para emergencias. El seguimiento es fundamental para el éxito a largo plazo.",
        },
        {
          question: "¿Necesitaré cambiar mi dieta permanentemente?",
          answer: "Sí, especialmente después de cirugía bariátrica. Trabajarás con nuestra nutricionista para desarrollar un plan alimenticio sostenible que incluye proteínas adecuadas, vitaminas y minerales. Los cambios son progresivos y personalizados. Nuestro equipo te acompañará en cada etapa de esta transición.",
        },
      ],
    },
    {
      title: "Costos y Seguros",
      faqs: [
        {
          question: "¿Cuáles son los costos aproximados de la cirugía?",
          answer: "Los costos varían según el procedimiento, hospital y necesidades individuales. Durante la consulta inicial proporcionamos un presupuesto detallado y transparente. Este incluye honorarios médicos, hospital, anestesia, estudios pre-operatorios y seguimiento post-quirúrgico.",
        },
        {
          question: "¿Aceptan seguros médicos? ¿Cuáles?",
          answer: "Trabajamos con la mayoría de los principales seguros médicos. Es importante verificar tu cobertura específica con tu aseguradora antes de la cirugía. Nuestro personal administrativo puede ayudarte con el proceso de autorización y documentación necesaria.",
        },
        {
          question: "¿Ofrecen planes de financiación?",
          answer: "Sí, ofrecemos varias opciones de financiamiento para que el costo no sea un obstáculo para tu salud. Trabajamos con instituciones financieras que ofrecen planes de pago flexibles. Consulta con nuestro personal administrativo para conocer las opciones disponibles.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            Preguntas Frecuentes: Todas tus Dudas Resueltas.
          </h1>
          <p className="text-xl max-w-3xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
            Encuentra respuestas claras y precisas sobre tu tratamiento, proceso y bienestar con el Dr. Juan Santiago Molina V.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {categories.map((category, catIndex) => (
              <div key={catIndex} className="slide-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <h2 className="text-3xl font-bold text-foreground mb-8 pb-4 border-b-2 border-secondary">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${catIndex}-${faqIndex}`}
                      className="bg-card rounded-lg px-6 shadow-sm"
                    >
                      <AccordionTrigger className="text-foreground font-semibold text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Aún Tienes Dudas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para resolver cualquier inquietud personal. No dudes en contactarnos.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contacto">
              Contáctanos Directamente
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
