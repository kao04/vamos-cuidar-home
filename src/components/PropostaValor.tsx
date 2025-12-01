import { Card } from "@/components/ui/card";
import { Building2, Smile, Activity, Rocket, Zap } from "lucide-react";
import partnershipImage from "@/assets/partnership.jpg";

const propostas = [
  {
    icon: Building2,
    title: "Redução de Custos Hospitalares",
    description: "Redução significativa de custos e melhor alocação de leitos.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Smile,
    title: "Melhoria da Experiência",
    description: "Aumento da experiência e satisfação dos beneficiários Unimed através do cuidado humanizado.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Activity,
    title: "Programas Preventivos",
    description: "Expansão de programas preventivos e continuidade pós-alta para melhores resultados clínicos.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Rocket,
    title: "Escalabilidade Adaptável",
    description: "Adaptação contratual conforme a necessidade da operadora, crescendo junto com a demanda.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Zap,
    title: "Inovação Tecnológica",
    description: "Tecnologia integrada, compliance e foco em segurança do paciente.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

const PropostaValor = () => {
  return (
    <section id="proposta-valor" className="py-20 sm:py-28 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground">
              📈 Proposta de Valor para a Unimed
            </h2>
            <p className="text-xl text-primary-foreground/85 max-w-3xl mx-auto">
              Resultados tangíveis para operadora e beneficiários
            </p>
          </div>

          <div className="animate-fade-in">
            <img 
              src={partnershipImage} 
              alt="Parceria estratégica em saúde" 
              className="w-full h-[350px] object-cover rounded-2xl shadow-elegant"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propostas.map((proposta, index) => (
              <Card 
                key={index} 
                className="p-8 space-y-4 bg-white/95 backdrop-blur-sm border-white/20 hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl ${proposta.color} flex items-center justify-center`}>
                  <proposta.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {proposta.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {proposta.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropostaValor;
