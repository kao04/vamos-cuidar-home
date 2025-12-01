import { Card } from "@/components/ui/card";
import { Home, Shield, TrendingDown, User, Users as UsersIcon, HeartHandshake } from "lucide-react";

const beneficios = [
  {
    icon: Home,
    title: "Humanização e Conforto do Lar",
    description: "O atendimento em ambiente familiar favorece a recuperação, qualidade de vida e sensação de dignidade.",
  },
  {
    icon: Shield,
    title: "Redução de Riscos e Internações",
    description: "Menor exposição a infecções hospitalares, com monitoramento próximo e resposta rápida.",
  },
  {
    icon: TrendingDown,
    title: "Eficiência e Economia",
    description: "Redução de internações desnecessárias, uso racional de recursos e desospitalização segura.",
  },
  {
    icon: User,
    title: "Personalização do Cuidado",
    description: "Planos de cuidado moldados ao perfil do paciente, adaptáveis conforme a evolução clínica.",
  },
  {
    icon: UsersIcon,
    title: "Atendimento Multidisciplinar Integrado",
    description: "Foco no cuidado integral, com comunicação eficaz entre os profissionais.",
  },
  {
    icon: HeartHandshake,
    title: "Apoio Ativo à Família",
    description: "Treinamento, orientação e suporte emocional, fortalecendo o vínculo familiar no cuidado.",
  },
];

const Beneficios = () => {
  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              💡 Benefícios da Parceria
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Por que escolher o cuidado domiciliar humanizado?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <Card 
                key={index} 
                className="p-6 space-y-4 bg-card border-border hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <beneficio.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {beneficio.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {beneficio.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
