import React, { useRef, useState, useEffect, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  duration?: number; // Nueva prop para la duración en ms
  delay?: number; // Nueva prop para el retraso en ms
  animationClasses: string; // Clases de la animación (ej. "translate-y-10")
  transitionClasses?: string; // Clases de la transición (ej. "duration-700")
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimateOnScroll = ({
  children,
  className,
  duration = 500, // Valor por defecto de 500ms
  delay = 0, // Valor por defecto de 0
  animationClasses,
  transitionClasses = "duration-500", // Un valor por defecto
  threshold = 0.1,
  triggerOnce = true,
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);
  
  return (
    <div
      ref={ref}
      className={`${className || ''} transition-all ease-in-out ${transitionClasses} ${
        isVisible
          ? 'opacity-100 translate-y-0' // Estado final visible
          : `opacity-0 ${animationClasses}` // Estado inicial oculto y transformado
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
