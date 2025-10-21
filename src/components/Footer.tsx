import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Juan Santiago Molina V.</h3>
              <p className="text-xs uppercase tracking-wider opacity-90">
                Cirugía General y Laparoscópica
              </p>
            </div>
            <p className="text-sm opacity-80">
              Excelencia médica y cuidado integral para tu transformación y bienestar.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explora</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dr-molina" className="hover:text-secondary transition-colors">
                  Dr. Molina
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-secondary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/testimonios" className="hover:text-secondary transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-secondary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-secondary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/pre-evaluacion" className="hover:text-secondary transition-colors">
                  Pre-evaluación Online
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+52 (123) 456-7890</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>contacto@drmolina.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Av. Principal 123, Col. Médica, Ciudad</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>
            © {currentYear} Juan Santiago Molina V. Todos los derechos reservados. |{" "}
            <a href="#" className="hover:text-secondary transition-colors">
              Política de Privacidad
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-secondary transition-colors">
              Aviso Legal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
