import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import Beneficios from "@/components/Beneficios";
import Diferenciais from "@/components/Diferenciais";
import PropostaValor from "@/components/PropostaValor";
import Solucoes from "@/components/Solucoes";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuemSomos />
      <Beneficios />
      <Diferenciais />
      <PropostaValor />
      <Solucoes />
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;
