import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Users } from "lucide-react";

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              ✨ Quem Somos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visão Geral e Experiência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 bg-gradient-card border-border shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Visão Geral</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Vamos Cuidar é uma empresa especializada em <strong>cuidado domiciliar humanizado</strong>, 
                com sólida experiência na região e um modelo de atendimento focado em excelência 
                clínica, acolhimento familiar e eficiência operacional.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-gradient-card border-border shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Diferencial</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossa combinação de cuidado humanizado, tecnologia assistencial e equipe 
                multidisciplinar altamente capacitada nos posiciona à frente no setor.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-gradient-card border-border shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Experiência Comprovada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atuamos há quase 5 anos conduzindo um contrato específico com resultados 
                expressivos em casos de alta complexidade e atenção domiciliar contínua.
              </p>
            </Card>
          </div>

          <div className="bg-accent/30 border-l-4 border-primary p-8 rounded-r-lg">
            <blockquote className="text-lg sm:text-xl text-foreground italic leading-relaxed">
              "Nossa experiência de quase 5 anos com a Unimed Grande Florianópolis demonstra 
              resultados concretos em redução de custos, melhoria da qualidade assistencial 
              e satisfação dos beneficiários."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
