
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Sparkles, Eye, Brush, Users, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const courseModules = [
    {
      icon: Sparkles,
      title: "Preparação e Técnicas de Pele Resistente",
      description: "Aprenda quais produtos utilizar na preparação de pele e técnicas para deixá-la resistente"
    },
    {
      icon: Palette,
      title: "Colorimetria",
      description: "Conceitos básicos de colorimetria para quando você precisar utilizar na sua maquiagem"
    },
    {
      icon: Brush,
      title: "Técnicas de Contorno, Blush e Base",
      description: "Aprenda como e onde aplicar o contorno e blush e formas de aplicações de bases com técnicas profissionais"
    },
    {
      icon: Eye,
      title: "Técnicas de Olhos, Sobrancelhas e Cílios",
      description: "Esfumado clássico, Olho de Festa com Glitter, Foxy Eyes, delineados, cílios postiços e muito mais"
    },
    {
      icon: Users,
      title: "Guia de Pincéis e Esponjas",
      description: "Aprenda a montar um kit básico de maquiagem sem gastar fortunas para ter uma maquiagem resistente"
    }
  ];

  const stats = [
    { number: "+5.000", text: "Mil Alunos", icon: Users },
    { number: "+2", text: "Milhões de visualizações Mensais", icon: TrendingUp }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl text-gray-600 mb-8">
            Veja o que os meus alunos estão dizendo sobre o curso.<br/>
            Eles são pessoas como você e conseguiram esses resultados.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-center text-white">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <div className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            O que você vai encontrar no curso<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">
              Exclusivo de AutoMaquiagem?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {courseModules.map((module, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{module.title}</h3>
                <p className="text-gray-600 leading-relaxed">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="https://pay.kiwify.com.br/2Tqyr5C?afid=k0Syu8TA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-in">
              EU QUERO!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
