
import { Button } from "@/components/ui/button";
import { Clock, Star, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-pink-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg animate-pulse-slow"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left side - Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          {/* Badge */}
          <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce-in">
            <Clock className="w-4 h-4 mr-2" />
            OFERTA POR TEMPO LIMITADO!
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Curso de
            <span className="block text-yellow-300">AUTOMAQUIAGEM</span>
            Profissional
          </h1>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in">
            Aprenda as técnicas secretas dos profissionais e se torne uma expert em maquiagem
          </p>
          
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
            <div className="flex items-center text-white">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 (2.847 avaliações)</span>
            </div>
            <div className="flex items-center text-white">
              <Users className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-semibold">+15.000 alunas</span>
            </div>
          </div>
          
          {/* Price section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <div className="text-center">
              <p className="text-white/80 text-lg mb-2">De <span className="line-through">R$ 497,00</span> por apenas:</p>
              <div className="text-5xl font-bold text-yellow-300 mb-2">R$ 97</div>
              <p className="text-white/80">ou 12x de R$ 9,70</p>
              <div className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full inline-block font-semibold animate-pulse">
                🔥 80% DE DESCONTO
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-in"
          >
            🎯 QUERO COMEÇAR AGORA!
          </Button>
          
          <p className="text-white/70 text-sm mt-4">
            ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Certificado incluso
          </p>
        </div>
        
        {/* Right side - Image placeholder */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-96 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl border border-white/30 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💄</span>
                </div>
                <p className="text-lg font-semibold">Samara Duarte</p>
                <p className="text-sm opacity-80">Especialista em Automaquiagem</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 animate-bounce-in">
              <Star className="w-6 h-6 text-black" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-full p-3 animate-bounce-in">
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
