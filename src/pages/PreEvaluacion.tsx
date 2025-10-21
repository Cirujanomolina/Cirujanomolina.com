import { useState, FormEvent } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const PreEvaluacion = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    email: "",
    telefono: "",
    genero: "",
    peso: "",
    altura: "",
    intentosPrevios: "",
    condiciones: [] as string[],
    procedimientoInteres: "",
    comentarios: "",
    terms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const benefits = [
    "Evaluación inicial sin compromiso",
    "Orientación personalizada sobre procedimientos",
    "Respuesta en menos de 24 horas",
    "Información sobre elegibilidad",
    "Primera consulta con descuento especial",
  ];

  const handleNext = () => {
    switch (step) {
      case 1:
        if (!formData.nombre || !formData.edad || !formData.email || !formData.telefono || !formData.genero) {
          toast({
            title: "Campos incompletos",
            description: "Por favor, completa toda la información personal.",
            variant: "destructive",
          });
          return;
        }
        setStep(2);
        break;
      case 2:
        if (!formData.peso || !formData.altura || !formData.intentosPrevios) {
          toast({
            title: "Campos incompletos",
            description: "Por favor, completa toda la información de salud.",
            variant: "destructive",
          });
          return;
        }
        setStep(3);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.procedimientoInteres || !formData.terms) {
      toast({
        title: "Campos requeridos",
        description: "Por favor, selecciona un procedimiento de interés y acepta los términos.",
        variant: "destructive",
      });
      return;
    }
    console.log("Formulario enviado:", formData);
    toast({ title: "¡Gracias!", description: "Tu pre-evaluación ha sido enviada con éxito. Te contactaremos pronto." });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            Pre-evaluación Online: Tu Primer Paso hacia la Transformación.
          </h1>
          <p className="text-xl max-w-3xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
            Descubre si eres candidato para cirugía bariátrica o general con nuestra evaluación confidencial y sin compromiso.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-12 pb-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pt-10 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold text-foreground">
                      Formulario de Pre-evaluación
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      Paso {step} de 3
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {step === 1 && (
                    <div className="space-y-6 fade-in">
                      <h3 className="text-xl font-semibold text-foreground">
                        Información Personal
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="nombre">Nombre Completo *</Label>
                          <Input id="nombre" placeholder="Tu nombre" className="mt-2" value={formData.nombre} onChange={handleInputChange} />
                        </div>
                        <div>
                          <Label htmlFor="edad">Edad *</Label>
                          <Input id="edad" type="number" placeholder="Tu edad" className="mt-2" value={formData.edad} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Correo Electrónico *</Label>
                          <Input id="email" type="email" placeholder="tu@email.com" className="mt-2" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div>
                          <Label htmlFor="telefono">Teléfono *</Label>
                          <Input id="telefono" type="tel" placeholder="+52 123 456 7890" className="mt-2" value={formData.telefono} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div>
                        <Label>Género *</Label>
                        <RadioGroup
                          className="mt-2 space-y-2"
                          value={formData.genero}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, genero: value }))}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="femenino" id="femenino" />
                            <Label htmlFor="femenino" className="font-normal">
                              Femenino
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="masculino" id="masculino" />
                            <Label htmlFor="masculino" className="font-normal">
                              Masculino
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="otro" id="otro" />
                            <Label htmlFor="otro" className="font-normal">
                              Prefiero no decir
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 fade-in">
                      <h3 className="text-xl font-semibold text-foreground">
                        Información de Salud
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="peso">Peso Actual (kg) *</Label>
                          <Input id="peso" type="number" placeholder="Ej. 85" className="mt-2" value={formData.peso} onChange={handleInputChange} />
                        </div>
                        <div>
                          <Label htmlFor="altura">Altura (cm) *</Label>
                          <Input id="altura" type="number" placeholder="Ej. 170" className="mt-2" value={formData.altura} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div>
                        <Label>¿Has intentado perder peso anteriormente? *</Label>
                        <RadioGroup
                          className="mt-2 space-y-2"
                          value={formData.intentosPrevios}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, intentosPrevios: value }))}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="si-dietas" id="si-dietas" />
                            <Label htmlFor="si-dietas" className="font-normal">
                              Sí, con dietas
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="si-ejercicio" id="si-ejercicio" />
                            <Label htmlFor="si-ejercicio" className="font-normal">
                              Sí, con ejercicio
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="si-ambos" id="si-ambos" />
                            <Label htmlFor="si-ambos" className="font-normal">
                              Sí, con dietas y ejercicio
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no-intentado" />
                            <Label htmlFor="no-intentado" className="font-normal">
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div>
                        <Label>¿Tienes alguna de estas condiciones? (Marca todas las que apliquen)</Label>
                        <div className="mt-4 space-y-3">
                          {["Diabetes tipo 2", "Hipertensión", "Apnea del sueño", "Colesterol alto", "Problemas cardíacos", "Ninguna de las anteriores"].map((condition) => (
                            <div key={condition} className="flex items-center space-x-2">
                              <Checkbox
                                id={condition}
                                onCheckedChange={(checked) => {
                                  setFormData((prev) => ({
                                    ...prev,
                                    condiciones: checked ? [...prev.condiciones, condition] : prev.condiciones.filter((c) => c !== condition),
                                  }));
                                }}
                              />
                              <Label htmlFor={condition} className="font-normal">
                                {condition}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6 fade-in">
                      <h3 className="text-xl font-semibold text-foreground">
                        Intereses y Comentarios
                      </h3>
                      <div>
                        <Label>¿Qué procedimiento te interesa? *</Label>
                        <RadioGroup
                          className="mt-2 space-y-2"
                          value={formData.procedimientoInteres}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, procedimientoInteres: value }))}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bariatrica" id="bariatrica" />
                            <Label htmlFor="bariatrica" className="font-normal">
                              Cirugía Bariátrica
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="hernia" id="hernia" />
                            <Label htmlFor="hernia" className="font-normal">
                              Cirugía de Hernia
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="vesicula" id="vesicula" />
                            <Label htmlFor="vesicula" className="font-normal">
                              Cirugía de Vesícula
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="otro-cirugia" id="otro-cirugia" />
                            <Label htmlFor="otro-cirugia" className="font-normal">
                              Otro procedimiento
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="consulta" id="consulta" />
                            <Label htmlFor="consulta" className="font-normal">
                              Consulta general
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div>
                        <Label htmlFor="comentarios">
                          Comentarios Adicionales (Opcional)
                        </Label>
                        <Textarea
                          id="comentarios"
                          placeholder="Cuéntanos más sobre tus necesidades o preguntas..."
                          className="mt-2 min-h-32"
                          value={formData.comentarios}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, terms: !!checked }))}
                        />
                        <Label htmlFor="terms" className="text-sm font-normal">
                          Acepto los términos y condiciones y autorizo el uso de mis datos para fines de evaluación médica. *
                        </Label>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                      >
                        Anterior
                      </Button>
                    )}
                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="ml-auto"
                      >
                        Siguiente
                        <ArrowRight className="ml-2" />
                      </Button>
                    ) : (
                      <Button type="submit" className="ml-auto">
                        Enviar Pre-evaluación
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Privacy Notice */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              Tu información es completamente confidencial y solo será utilizada para evaluar tu candidatura y contactarte.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Qué Sucede Después de Enviar tu Pre-evaluación?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Revisión de tu Caso</h3>
              <p className="opacity-90">
                Nuestro equipo médico revisará cuidadosamente tu información en menos de 24 horas.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Contacto Personalizado</h3>
              <p className="opacity-90">
                Te contactaremos vía teléfono o email con una orientación inicial sobre tu elegibilidad.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Agenda tu Consulta</h3>
              <p className="opacity-90">
                Si eres candidato, te ayudaremos a agendar tu primera consulta con el Dr. Molina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreEvaluacion;
