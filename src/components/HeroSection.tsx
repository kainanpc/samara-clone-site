
import { Button } from "@/components/ui/button";
import { Clock, Star, Users, CheckCircle, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-rose-400/10 rounded-full blur-lg animate-pulse-slow"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left side - Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          {/* Badge */}
          <div className="inline-flex items-center bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce-in">
            <Clock className="w-4 h-4 mr-2" />
            OFERTA POR TEMPO LIMITADO!
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            APRENDA OS
            <span className="block text-amber-400">SEGREDOS DA</span>
            AUTOMAQUIAGEM
          </h1>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 animate-fade-in">
            CHEGOU O CURSO DE AUTOMAQUIAGEM + COMPLETO QUE VOCÊ JÁ VIU. 
            <strong className="text-white"> PELE RESISTENTE COM TRUQUES PROFISSIONAIS!</strong>
          </p>
          
          {/* Problems list */}
          <div className="space-y-4 mb-8 text-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <p className="text-gray-300 text-lg">
                <strong className="text-white">Você sente que a sua maquiagem não está durando como deveria?</strong> Depois de um tempo, sua pele fica oleosa?
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Tem dificuldade em fazer uma maquiagem profissional em casa?",
                "Não sabe quais produtos usar para a sua pele? Chega de comprar produtos errados!",
                "Sente desmotivada para sair, pois não sabe qual maquiagem combina com você?"
              ].map((problem, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <span className="text-rose-400 mr-3 mt-1">•</span>
                  <span>{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-2xl p-6 mb-8 border border-amber-400/20">
            <p className="text-xl text-white font-bold text-center">
              CHEGOU A HORA DE MUDAR O JOGO E FAZER UMA MAQUIAGEM PROFISSIONAL EM VOCÊ MESMA!
            </p>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
            <div className="flex items-center text-white">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 (2.847 avaliações)</span>
            </div>
            <div className="flex items-center text-white">
              <Users className="w-5 h-5 mr-2 text-amber-400" />
              <span className="font-semibold">+5.000 alunas</span>
            </div>
          </div>
          
          {/* Price section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
            <div className="text-center">
              <p className="text-gray-300 text-lg mb-2">De <span className="line-through">R$ 297,00</span> por apenas:</p>
              <div className="text-5xl font-bold text-amber-400 mb-2">R$ 147</div>
              <p className="text-gray-300">ou 12x de R$ 15,20</p>
              <div className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-full inline-block font-semibold animate-pulse">
                VALOR PROMOCIONAL
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="space-y-4">
            {/* Main CTA Button */}
            <a 
              href="https://pay.kiwify.com.br/2Tqyr5C?afid=k0Syu8TA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-in"
              >
                <Target className="w-5 h-5 mr-2" />
                EU QUERO APRENDER - R$ 147!
              </Button>
            </a>
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center lg:justify-start items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
              <span>Certificado incluso</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden">
              <img 
                src="/lovable-uploads/f904ea98-7f29-420f-9f2e-72b599335362.png"
                alt="Samara Duarte - Especialista em Automaquiagem"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-3xl">
                <p className="text-lg font-semibold text-white">Samara Duarte</p>
                <p className="text-sm text-gray-300">Especialista em Automaquiagem</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-amber-500 rounded-full p-3 animate-bounce-in">
              <Star className="w-6 h-6 text-black" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-full p-3 animate-bounce-in">
              <Star className="w-6 h-6 text-amber-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
