import { Card } from "@/components/ui/card";
import { FileText, Navigation } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

const Solucoes = () => {
  return (
    <section id="solucoes" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              🚀 Soluções Inovadoras
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prontuário Eletrônico + Enfermeiros Navegadores
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-10 space-y-6 bg-gradient-card border-border shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                    Prontuário Eletrônico
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Sugestão de implementação de um Prontuário Eletrônico, que permita:
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {[
                  "Acesso simultâneo por profissionais, familiares e Unimed",
                  "Registro preciso e ágil da evolução clínica com dados em tempo real",
                  "Alertas automatizados de mudanças no quadro do paciente",
                  "Maior segurança e rastreabilidade do cuidado com histórico completo"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-10 space-y-6 bg-gradient-card border-border shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                    Enfermeiros Navegadores
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Implementação de profissionais especializados que atuam como coordenadores do cuidado, garantindo:
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {[
                  "Fluxo de comunicação eficiente",
                  "Antecipação de demandas clínicas e prevenção de agravos",
                  "Melhores resultados clínicos e organizacionais"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solucoes;
