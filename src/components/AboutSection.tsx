
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "15.000+",
      text: "Alunas transformadas"
    },
    {
      icon: Award,
      number: "8+",
      text: "Anos de experiência"
    },
    {
      icon: BookOpen,
      number: "50+",
      text: "Vídeo aulas exclusivas"
    },
    {
      icon: TrendingUp,
      number: "98%",
      text: "Taxa de satisfação"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Conheça a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Samara Duarte
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Olá, eu sou a <strong>Samara Duarte</strong>, especialista em automaquiagem e 
                responsável por transformar a vida de mais de <strong>15.000 mulheres</strong> 
                em todo o Brasil.
              </p>
              
              <p>
                Durante anos, estudei e pratiquei as técnicas mais eficazes de maquiagem, 
                sempre com foco em ensinar mulheres comuns a se maquiarem como verdadeiras 
                profissionais, mesmo sem experiência prévia.
              </p>
              
              <p>
                Minha missão é simples: <strong>fazer você se sentir linda e confiante todos os dias</strong>. 
                Acredito que toda mulher merece se olhar no espelho e se apaixonar pelo que vê.
              </p>
              
              <p>
                No meu curso, você vai aprender não apenas as técnicas, mas também como 
                adaptar cada look ao seu rosto, estilo de vida e personalidade.
              </p>
            </div>

            <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Por que escolher meu método?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  Método testado e aprovado por milhares de alunas
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  Técnicas adaptadas para iniciantes
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  Suporte personalizado durante todo o curso
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  Resultados garantidos ou seu dinheiro de volta
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Image and stats */}
          <div className="text-center">
            {/* Placeholder for instructor image */}
            <div className="relative mb-8">
              <div className="w-80 h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl mx-auto flex items-center justify-center border-4 border-white shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-white font-bold">SD</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">Samara Duarte</p>
                  <p className="text-lg text-gray-600">Especialista em Automaquiagem</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce-in">
                <Award className="w-6 h-6 text-black" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-pink-500 text-white rounded-full px-4 py-2 shadow-lg animate-bounce-in">
                <span className="font-bold">Expert</span>
              </div>
            </div>

            {/* Achievement stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.text}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
