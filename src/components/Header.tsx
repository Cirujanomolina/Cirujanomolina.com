import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import logoLight from "@/assets/logo.png"; // Logo claro (el original)
import logoDark from "@/assets/logo-dark.png"; // 1. Importa el logo oscuro. Asegúrate de tener este archivo.

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 1. Define las rutas que tienen un fondo claro al inicio
  const lightBgRoutes = ["/dr-molina", "/testimonios", "/faq"];

  // 2. Determina si el texto del header debe ser oscuro
  const useDarkText = !isScrolled && lightBgRoutes.includes(location.pathname);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "QUIEN SOY?", path: "/dr-molina" },
    { label: "SERVICIOS", path: "/servicios" },
    { label: "TESTIMONIOS", path: "/testimonios" },
    { label: "CONTACTO", path: "/contacto" },
    { label: "BLOG", path: "/blog" },
    { label: "PRE-EVALUACIÓN", path: "/pre-evaluacion" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          {/* 2. Reemplaza el texto por tu imagen. Puedes ajustar el ancho (w-48) y alto (h-auto) según necesites. */}
          <img
            // 3. Cambia dinámicamente el logo a mostrar
            src={useDarkText ? logoDark : logoLight}
            alt="Logo Dr. Juan Santiago Molina V."
            className="h-20 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              // 3. Aplica clases condicionales para el color del texto
              className={`text-sm font-medium transition-colors duration-300 ${
                useDarkText
                  ? "text-foreground/90 hover:text-primary" // Color oscuro sobre fondo claro
                  : "text-primary-foreground/90 hover:text-secondary" // Color claro sobre fondo oscuro (o transparente sobre imagen)
              } ${
                location.pathname === item.path
                  ? useDarkText ? "text-primary border-b-2 border-primary" : "text-primary-foreground border-b-2 border-primary-foreground" // Estilo para el enlace activo
                  : ""
              } `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gradient-to-b from-primary/80 to-[#003034]/80 backdrop-blur-lg flex flex-col items-center justify-center animate-slide-down">
          {/* Botón de cierre (X) dentro del menú */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </Button>

          {/* Enlaces del menú */}
          <div className="flex flex-col items-center space-y-8 mt-[-50px]">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-['Belleza'] tracking-wider py-2 transition-all duration-300 hover:scale-110 ${
                  location.pathname === item.path
                    ? "text-secondary"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
