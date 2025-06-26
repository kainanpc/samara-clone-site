
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "+5.000",
      text: "Alunas formadas"
    },
    {
      icon: Award,
      number: "8+",
      text: "Anos de experiência"
    },
    {
      icon: BookOpen,
      number: "17",
      text: "Anos começou na área"
    },
    {
      icon: TrendingUp,
      number: "+2M",
      text: "Visualizações mensais"
    }
  ];

  return (
    <div className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-80 h-96 bg-slate-700 rounded-3xl mx-auto overflow-hidden border border-slate-600 shadow-2xl">
                <img 
                  src="/lovable-uploads/94d25472-f1b4-4117-8bc5-bd0943a95777.png"
                  alt="Samara Duarte - Especialista em Automaquiagem"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-rose-600 rounded-full p-3 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-slate-700 text-white rounded-full px-4 py-2 shadow-lg border border-slate-600">
                <span className="font-bold">Expert</span>
              </div>
            </div>

            {/* Achievement stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center mx-auto mb-2">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-300">
                      {achievement.text}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - About content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">
                SAMARA DUARTE
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Nascida no litoral de Santa Catarina, começou os trabalhos na área da beleza aos 
                <strong className="text-white"> 17 anos</strong>, com maquiagem e penteados.
              </p>
              
              <p>
                Ao longo desses anos, atendeu inúmeras noivas, formandas e clientes, e ministrou 
                cursos tanto profissionais quanto de automaquiagem, somando 
                <strong className="text-white"> + 5.000 mil alunas</strong>.
              </p>
              
              <p>
                Hoje continua com seus atendimentos, porém trazendo agora seu conhecimento de anos 
                para o digital, alcançando <strong className="text-white">+ 2 milhões de visualizações mensais</strong> 
                e transformando a vida de milhares de mulheres.
              </p>
            </div>

            <div className="mt-8 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl p-6 border border-slate-600 shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3">
                Experiência Comprovada
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-rose-400 mr-2">✓</span>
                  Mais de 8 anos transformando vidas através da maquiagem
                </li>
                <li className="flex items-center">
                  <span className="text-rose-400 mr-2">✓</span>
                  Especialista em técnicas de pele resistente
                </li>
                <li className="flex items-center">
                  <span className="text-rose-400 mr-2">✓</span>
                  Método testado e aprovado por milhares de alunas
                </li>
                <li className="flex items-center">
                  <span className="text-rose-400 mr-2">✓</span>
                  Presença digital consolidada com milhões de views
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
