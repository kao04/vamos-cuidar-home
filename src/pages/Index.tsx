// src/pages/Index.tsx
import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import Beneficios from "@/components/Beneficios";
import Diferenciais from "@/components/Diferenciais";
import PropostaValor from "@/components/PropostaValor";
import Solucoes from "@/components/Solucoes";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import SejaAssociado from "@/components/SejaAssociado"; // Importação do novo componente
import { Header } from "@radix-ui/react-accordion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuemSomos />
      <Beneficios />
      <Diferenciais />
      <PropostaValor />
      <Solucoes />
      <SejaAssociado /> {/* Adicionado aqui */}
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;