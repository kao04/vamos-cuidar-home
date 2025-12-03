// src/components/SejaAssociado.tsx
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const SejaAssociado = () => {
  const externalLink = "https://maxxagenciadigital.com.br/vamoscuidarassociado/";

  return (
    <section id="associado" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={cn(
            "max-w-6xl mx-auto p-10 sm:p-16 rounded-3xl text-center shadow-2xl",
            "bg-gradient-hero border border-primary/50"
          )}
        >
          <div className="space-y-4">
            {/* Título Principal (Letra Grande) */}
            <h2 className="text-5xl sm:text-6xl font-extrabold text-primary-foreground leading-tight animate-slide-up">
              Seja Nosso Associado
            </h2>
            
            {/* Subtítulo (Letras Pequenas) */}
            <p className="text-xl sm:text-2xl text-primary-foreground/80 max-w-4xl mx-auto font-light animate-fade-in delay-100">
              Represente a Vamos Cuidar em sua cidade
            </p>
          </div>
          
          <div className="pt-8">
            {/* Botão com link externo */}
            <a href={externalLink} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className={cn(
                  "bg-secondary text-secondary-foreground hover:bg-secondary/90",
                  "shadow-lg shadow-secondary/50 hover:shadow-xl hover:shadow-secondary/60",
                  "transition-all duration-300 transform hover:scale-[1.02] text-lg px-10"
                )}
              >
                <Zap className="w-5 h-5 mr-2" />
                Saiba Como
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SejaAssociado;