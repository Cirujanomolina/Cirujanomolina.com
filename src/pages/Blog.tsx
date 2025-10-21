import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const featuredArticles = [
    {
      title: "¿Es la Cirugía Bariátrica Adecuada para Ti? Guía Completa 2024",
      excerpt: "Descubre si eres candidato ideal para cirugía bariátrica y qué esperar del proceso completo de transformación.",
      category: "Cirugía Bariátrica",
      date: "15 Oct 2024",
      author: "Dr. Juan Santiago Molina V.",
    },
    {
      title: "10 Mitos sobre la Cirugía de Obesidad que Debes Conocer",
      excerpt: "Desmontamos los mitos más comunes sobre la cirugía bariátrica con evidencia científica y experiencia clínica.",
      category: "Educación",
      date: "10 Oct 2024",
      author: "Dr. Juan Santiago Molina V.",
    },
  ];

  const articles = [
    {
      title: "Nutrición Post-Bariátrica: Los Primeros 90 Días",
      excerpt: "Una guía detallada sobre cómo alimentarte correctamente después de tu cirugía para maximizar resultados.",
      category: "Nutrición",
      date: "05 Oct 2024",
    },
    {
      title: "Beneficios Psicológicos de la Pérdida de Peso Sostenida",
      excerpt: "Más allá del físico: cómo la transformación corporal impacta tu salud mental y emocional.",
      category: "Bienestar Emocional",
      date: "01 Oct 2024",
    },
    {
      title: "Cirugía Laparoscópica: Ventajas de la Mínima Invasión",
      excerpt: "Por qué las técnicas laparoscópicas representan el estándar de oro en cirugía moderna.",
      category: "Cirugía General",
      date: "28 Sep 2024",
    },
    {
      title: "Diabetes Tipo 2 y Cirugía Metabólica: La Conexión Científica",
      excerpt: "Cómo la cirugía bariátrica puede ayudar a controlar o revertir la diabetes tipo 2.",
      category: "Salud Metabólica",
      date: "25 Sep 2024",
    },
    {
      title: "Preparación Pre-Quirúrgica: Todo lo que Necesitas Saber",
      excerpt: "Una checklist completa para prepararte física y mentalmente para tu cirugía.",
      category: "Prevención",
      date: "20 Sep 2024",
    },
    {
      title: "Mantenimiento a Largo Plazo: Claves del Éxito Post-Cirugía",
      excerpt: "Estrategias comprobadas para mantener tus resultados años después de la cirugía.",
      category: "Recuperación",
      date: "15 Sep 2024",
    },
  ];

  const categories = [
    "Cirugía Bariátrica",
    "Salud Metabólica",
    "Recuperación Post-Cirugía",
    "Nutrición y Dieta",
    "Bienestar Emocional",
    "Prevención",
    "Cirugía General",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 fade-in">
            Nuestro Blog: Información para tu Salud y Bienestar.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
            Artículos especializados y consejos prácticos del Dr. Juan Santiago Molina V. para acompañarte en tu transformación.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-primary text-primary-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Artículos Destacados</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="bg-background text-foreground zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-4">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <Button variant="default" className="w-full">
                    Leer Artículo
                    <ArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Explora por Temas</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Últimos Artículos</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow zoom-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{article.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 text-sm">
                    {article.excerpt}
                  </p>
                  <Button variant="outline" className="w-full">
                    Leer Más
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Cargar Más Artículos
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="min-h-[calc(100vh-7rem)] py-20 md:py-0 md:flex md:items-center bg-primary text-primary-foreground" style={{ scrollSnapAlign: 'start' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Mantente Informado: Suscríbete a Nuestro Blog.
            </h2>
            <p className="text-xl">
              Recibe directamente en tu correo electrónico los últimos artículos, consejos y novedades del Dr. Juan Santiago Molina V.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Tu Correo Electrónico"
                type="email"
                className="bg-background text-foreground border-primary"
              />
              <Button variant="secondary" size="lg">
                Suscribirme
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
