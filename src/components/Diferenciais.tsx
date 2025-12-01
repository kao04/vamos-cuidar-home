import { Card } from "@/components/ui/card";
import { 
  Stethoscope, 
  GraduationCap, 
  Clock, 
  Smartphone, 
  MapPin, 
  UserCheck,
  DollarSign,
  Star
} from "lucide-react";

const diferenciais = [
  {
    icon: Stethoscope,
    title: "Especialização em Cuidados Complexos",
    description: "Expertise em sondas, dietas enterais, curativos e procedimentos de alta complexidade.",
  },
  {
    icon: GraduationCap,
    title: "Equipe Técnica Certificada",
    description: "Profissionais com formação especializada e experiência comprovada em cuidado domiciliar.",
  },
  {
    icon: Clock,
    title: "Disponibilidade 24 Horas",
    description: "Atendimento contínuo, incluindo plantões emergenciais para situações críticas.",
  },
  {
    icon: Smartphone,
    title: "Tecnologia Assistencial",
    description: "Uso de tecnologia avançada para monitoramento e gestão integrada do cuidado.",
  },
  {
    icon: MapPin,
    title: "Flexibilidade Geográfica",
    description: "Atendimento, inclusive, em regiões remotas de Florianópolis com logística eficiente.",
  },
  {
    icon: UserCheck,
    title: "Coordenação Especializada",
    description: "Coordenação de cuidados feita por profissionais experientes para garantir excelência.",
  },
  {
    icon: DollarSign,
    title: "Transparência Financeira",
    description: "Custos transparentes, com planejamento prévio e sem surpresas.",
  },
  {
    icon: Star,
    title: "Cultura de Qualidade",
    description: "Cultura organizacional orientada por processos de qualidade e melhoria contínua.",
  },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              🥇 Nossos Diferenciais
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O que nos torna únicos no mercado
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((diferencial, index) => (
              <Card 
                key={index} 
                className="p-6 space-y-4 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <diferencial.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-base font-semibold text-card-foreground leading-snug">
                  {diferencial.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {diferencial.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
