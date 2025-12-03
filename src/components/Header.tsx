// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navItems = [
  { name: "Quem Somos", id: "quem-somos" },
  { name: "Benefícios", id: "beneficios" },
  { name: "Diferenciais", id: "diferenciais" },
  { name: "Proposta", id: "proposta-valor" },
  { name: "Soluções", id: "solucoes" },
  { name: "Associado", id: "associado" }, // Item adicionado
  { name: "Contato", id: "contato" },
];

// Função auxiliar para rolar a página para a seção com smooth behavior
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  const externalLink = "https://maxxagenciadigital.com.br/vamoscuidarassociado/";

  // Função para navegar e fechar o menu (usada no mobile)
  const handleScrollAndClose = (id: string) => {
    scrollToSection(id);
  };

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

        {/* Links de Navegação Interna (Desktop - Visível apenas em lg+) */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button 
              key={item.id} 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                // Se for o link do associado, navega externamente
                if (item.id === 'associado') {
                  window.open(externalLink, '_blank', 'noopener noreferrer');
                } else {
                  scrollToSection(item.id);
                }
              }}
              className="text-muted-foreground hover:text-primary"
            >
              {item.name}
            </Button>
          ))}
        </nav>
        
        {/* Botão de Contato Separado (Desktop/Tablet) */}
        <Button 
          size="sm" 
          onClick={() => scrollToSection("contato")}
          className="hidden sm:inline-flex lg:mr-0"
        >
          Fale Conosco
        </Button>

        {/* Menu Mobile (Visível em telas pequenas até o breakpoint lg) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="lg:hidden ml-4" // CORREÇÃO AQUI: Fica visível até a tela LG
              aria-label="Abrir Menu de Navegação"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col space-y-3 pt-6">
              {navItems.map((item) => {
                const isExternal = item.id === 'associado';
                return (
                  <SheetClose asChild key={item.id}>
                    <Button
                      variant={isExternal ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => {
                        if (isExternal) {
                          window.open(externalLink, '_blank', 'noopener noreferrer');
                        } else {
                          handleScrollAndClose(item.id);
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;