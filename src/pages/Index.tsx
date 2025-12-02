import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import Beneficios from "@/components/Beneficios";
import Diferenciais from "@/components/Diferenciais";
import PropostaValor from "@/components/PropostaValor";
import Solucoes from "@/components/Solucoes";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/Header"; // Importação do novo Header

const Index = () => {
  return (
    // Adicionado id="root" para o scroll-to-top funcionar e como contêiner principal
    <div id="root" className="min-h-screen"> 
      <Header /> 
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