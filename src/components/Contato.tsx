import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, MessageCircle } from "lucide-react"; // Importei MessageCircle

const Contato = () => {
  // Número de telefone para o WhatsApp (com código do país + DDD)
  const phoneNumber = "5511930786188"; // +55 11 93078-6188
  
  // Mensagem pré-preenchida
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de agendar uma reunião sobre a proposta de cuidado domiciliar."
  );
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              📞 Próximos Passos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vamos construir juntos o futuro do cuidado domiciliar
            </p>
          </div>

          <Card className="p-10 sm:p-14 space-y-8 bg-gradient-card border-border shadow-glow text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Estamos prontos para apresentar um plano detalhado de implementação, incluindo 
              cronograma, investimentos necessários e métricas de acompanhamento para esta 
              parceria estratégica.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">contato@grupodomum.com.br</span>
              </div>
              
              {/* Novo bloco: WhatsApp */}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 transition-colors hover:bg-muted"
              >
                <MessageCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">(11) 93078-6188 (WhatsApp)</span>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">(11) 93078-6188</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Florianópolis, SC</span>
              </div>
            </div>

            <div className="pt-4">
              {/* Botão Principal agora é o CTA para o WhatsApp */}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-secondary text-secondary-foreground hover:opacity-90 shadow-glow text-lg px-10"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Entre em Contato por WhatsApp
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contato;