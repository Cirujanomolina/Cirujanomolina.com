import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Testimonios from "./pages/Testimonios";
import DrMolina from "./pages/DrMolina";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import PreEvaluacion from "./pages/PreEvaluacion";
import NotFound from "./pages/NotFound";
import ScrollToAnchor from "./components/ScrollToAnchor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollToAnchor /> {/* El componente de scroll va dentro del Router */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/dr-molina" element={<DrMolina />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/pre-evaluacion" element={<PreEvaluacion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
