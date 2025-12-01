import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
            <Heart className="w-5 h-5 fill-current" />
            <span className="text-lg font-medium">Vamos Cuidar</span>
          </div>
          
          <p className="text-primary-foreground/75 text-sm max-w-2xl mx-auto">
            Transformando o cuidado domiciliar através da humanização, tecnologia e excelência clínica.
          </p>
          
          <div className="pt-6 border-t border-white/10">
            <p className="text-primary-foreground/60 text-xs">
              © 2025 Vamos Cuidar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
