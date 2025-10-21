import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const location = useLocation();
  const lastHash = useRef('');

  // Escucha los cambios en la URL, específicamente el hash
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // Guarda el ID sin el '#'
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      const element = document.getElementById(lastHash.current);
      if (element) {
        // Obtenemos la altura del header para descontarla
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        
        // Calculamos la posición correcta
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight - 20; // 20px de margen extra

        // Hacemos el scroll suave
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        lastHash.current = ''; // Limpiamos para futuros clicks
      }
    } else {
      // Si no hay hash, vamos al inicio de la página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null; // Este componente no renderiza nada
};

export default ScrollToAnchor;
