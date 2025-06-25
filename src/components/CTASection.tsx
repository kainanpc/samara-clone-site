
import { Button } from "@/components/ui/button";
import { Clock, Shield, CreditCard } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-rose-400/10 rounded-full blur-xl animate-pulse-slow"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Urgency Banner */}
        <div className="inline-flex items-center bg-rose-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 animate-pulse">
          <Clock className="w-5 h-5 mr-2" />
          ÚLTIMAS HORAS! Oferta encerra à meia-noite
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Não perca esta
          <span className="block text-amber-400">OPORTUNIDADE ÚNICA!</span>
        </h2>

        <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          Mais de 15.000 mulheres já transformaram suas vidas. 
          <strong className="text-white"> Seja a próxima!</strong>
        </p>

        {/* Price comparison */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-8 max-w-2xl mx-auto border border-white/10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="text-center">
              <p className="text-gray-300 text-lg mb-2">Preço normal:</p>
              <div className="text-3xl font-bold text-gray-400 line-through mb-2">R$ 497,00</div>
            </div>
            <div className="text-center">
              <p className="text-amber-400 text-lg mb-2">Hoje apenas:</p>
              <div className="text-5xl font-bold text-amber-400 mb-2">R$ 247</div>
              <p className="text-gray-300">ou 12x de R$ 24,70</p>
            </div>
          </div>
          
          <div className="mt-6 bg-rose-500 text-white px-6 py-3 rounded-full inline-block font-bold text-xl animate-bounce">
            🔥 ECONOMIA DE R$ 250,00!
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4 mb-6">
          {/* Main CTA */}
          <a 
            href="https://pay.kiwify.com.br/YaAFjE6?afid=k0Syu8TA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="w-full max-w-md mx-auto bg-amber-500 hover:bg-amber-600 text-black font-bold text-2xl px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-in"
            >
              🎯 SIM! EU QUERO COMEÇAR - R$ 247
            </Button>
          </a>

          {/* Special Offer CTA */}
          <a 
            href="https://pay.kiwify.com.br/2Tqyr5C?afid=k0Syu8TA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="w-full max-w-md mx-auto bg-rose-500 hover:bg-rose-600 text-white font-bold text-xl px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🔥 OFERTA ESPECIAL - R$ 147
            </Button>
          </a>
        </div>

        {/* Guarantees */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300 mb-8">
          <div className="flex items-center">
            <Shield className="w-5 h-5 mr-2 text-green-400" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-green-400" />
            <span>Pagamento 100% seguro</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-green-400" />
            <span>Acesso imediato</span>
          </div>
        </div>

        {/* Final urgency message */}
        <div className="bg-amber-400/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-amber-400/20">
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">⚠️ ATENÇÃO:</strong> Esta oferta especial é por tempo limitado e as vagas são limitadas. 
            Não deixe para depois, sua transformação começa hoje!
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🔒</span>
            <span>Site 100% Seguro</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">📱</span>
            <span>Acesso Mobile</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🎓</span>
            <span>Certificado Incluso</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
