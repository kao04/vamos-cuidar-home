import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Quem Somos", id: "quem-somos" },
  { name: "Benefícios", id: "beneficios" },
  { name: "Diferenciais", id: "diferenciais" },
  { name: "Proposta", id: "proposta-valor" },
  { name: "Soluções", id: "solucoes" },
  { name: "Contato", id: "contato" },
];

// Função auxiliar para rolar a página para a seção com smooth behavior
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  return (
    <header className={cn(
      "sticky top-0 z-40 w-full backdrop-blur-md transition-all duration-300",
      "bg-background/90 border-b border-border shadow-md dark:bg-background/80"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo/Título que rola para o topo da página */}
        <div 
          className="flex items-center gap-2 text-primary font-bold text-xl cursor-pointer" 
          onClick={() => scrollToSection("root")}
          aria-label="Voltar para o topo"
        >
          <Heart className="w-5 h-5 fill-primary" />
          Vamos Cuidar
        </div>

        {/* Links de Navegação Interna (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button 
              key={item.id} 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection(item.id)}
              className="text-muted-foreground hover:text-primary"
            >
              {item.name}
            </Button>
          ))}
        </nav>
        
        {/* Botão de Contato Separado */}
        <Button 
          size="sm" 
          onClick={() => scrollToSection("contato")}
          className="hidden sm:inline-flex"
        >
          Fale Conosco
        </Button>
      </div>
    </header>
  );
};

export default Header;