
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, PlayCircle, Download, Award, Clock, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: PlayCircle,
      title: "+50 Vídeo Aulas",
      description: "Conteúdo prático e didático para todos os níveis"
    },
    {
      icon: Download,
      title: "Material Exclusivo",
      description: "E-books, guias e templates para download"
    },
    {
      icon: Award,
      title: "Certificado",
      description: "Certificado de conclusão reconhecido"
    },
    {
      icon: Clock,
      title: "Acesso Vitalício",
      description: "Estude no seu tempo, sem pressa"
    },
    {
      icon: Users,
      title: "Grupo VIP",
      description: "Acesso ao grupo exclusivo de alunas"
    },
    {
      icon: CheckCircle,
      title: "Suporte Direto",
      description: "Tire suas dúvidas diretamente comigo"
    }
  ];

  const courseModules = [
    "Módulo 1: Preparação da Pele",
    "Módulo 2: Base e Corretivos",
    "Módulo 3: Olhos Básicos ao Avançado",
    "Módulo 4: Sobrancelhas Perfeitas",
    "Módulo 5: Contorno e Iluminação",
    "Módulo 6: Lábios e Finalização",
    "Módulo 7: Maquiagem para Diferentes Ocasiões",
    "Módulo 8: Cuidados e Conservação"
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Benefits Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            O que você vai receber:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um curso completo com tudo que você precisa para dominar a arte da automaquiagem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Modules */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Conteúdo do Curso
            </h2>
            <p className="text-xl text-gray-600">
              8 módulos completos do básico ao avançado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {courseModules.map((module, index) => (
              <div key={index} className="flex items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-800 font-medium">{module}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
