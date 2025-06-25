
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "Nunca pensei que conseguiria me maquiar tão bem! O curso da Samara mudou minha autoestima completamente. Agora me sinto linda todos os dias!",
      rating: 5,
      image: "M"
    },
    {
      name: "Ana Costa",
      role: "Estudante",
      content: "Comprei o curso em promoção e foi o melhor investimento que fiz! As aulas são muito didáticas e aprendi técnicas que nem imaginava existir.",
      rating: 5,
      image: "A"
    },
    {
      name: "Juliana Santos",
      role: "Profissional Liberal",
      content: "Como alguém que nunca soube se maquiar, este curso foi uma revolução na minha vida. Samara ensina de forma muito clara e objetiva!",
      rating: 5,
      image: "J"
    },
    {
      name: "Carla Oliveira",
      role: "Mãe e Dona de Casa",
      content: "Finalmente encontrei tempo para mim! O curso me ensinou a me valorizar e agora me maquio em poucos minutos. Meu marido não para de elogiar!",
      rating: 5,
      image: "C"
    },
    {
      name: "Fernanda Lima",
      role: "Vendedora",
      content: "Sempre tive dificuldade com maquiagem, mas a Samara tornou tudo muito simples. Hoje me sinto mais confiante no trabalho e na vida pessoal!",
      rating: 5,
      image: "F"
    },
    {
      name: "Patricia Rocha",
      role: "Enfermeira",
      content: "O curso superou minhas expectativas! Aprendi não só a técnica, mas também a escolher os produtos certos. Recomendo para todas as mulheres!",
      rating: 5,
      image: "P"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            O que nossas alunas estão dizendo:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 15.000 mulheres já transformaram suas vidas com nosso curso
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.image}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">15.000+</div>
            <div className="text-gray-600">Alunas Satisfeitas</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
            <div className="text-gray-600">Recomendação</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">2.847</div>
            <div className="text-gray-600">Avaliações</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
