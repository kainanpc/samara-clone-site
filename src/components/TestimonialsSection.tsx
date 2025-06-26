
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aluna Satisfeita",
      role: "Estudante do Curso",
      content: "Sobre as makes ensinadas no curso eu estou apaixonada sou uma grande fã da Samara e me ajudou muito! Só quero lhe dizer que amei muito mas muito o seu curso de maquiagem, já olhei os vídeos mais de dez vezes, tive um grande aprendizado e também estou adorando seu conteúdo no seu Instagram, sempre absorvendo dicas novas.",
      rating: 5,
      image: "/lovable-uploads/dec070a9-f993-4aca-bc39-1cc064e68997.png"
    },
    {
      name: "Aluna Dedicada",
      role: "Estudante do Curso",
      content: "Meu Deus, já assisti todas as aulas e queria mais! Muito didática e as aulas são super gostosas de assistir! Amei todas as dicas e já vou adquirir alguns produtos. Eu comecei o seu curso já sabendo fazer maquiagem, eu trabalhava com isso mesmo que não tivesse curso profissional, porém mesmo que fosse um curso de automaquiagem a gente aprende coisas básicas que a gente acha que faz bem mas temos que aperfeiçoar.",
      rating: 5,
      image: "/lovable-uploads/26dbbbbe-d17d-4228-a702-1b90245459b5.png"
    },
    {
      name: "Aluna Experiente",
      role: "Estudante do Curso",
      content: "Que conteúdo maravilhoso, de fácil entendimento, tudo que eu tinha dúvidas foi sanando nesse curso sem muita enrolação, um curso que tu assiste e revê com prazer, maravilhoso demais, vai me ajudar muito no meu trabalho de maquiadora, ansiosa pelo próximo! Ficou perfeito, eu nunca vi uma maquiagem durar tanto, deu 5h da manhã e a maquiagem estava intacta ainda.",
      rating: 5,
      image: "/lovable-uploads/77979456-e1e0-4e40-9d5d-98c8449633e2.png"
    },
    {
      name: "Aluna Feliz",
      role: "Estudante do Curso",
      content: "Há um mês comprei seu curso de automaquiagem para aprender e me maquiar para esse evento! E deu tudo certo! Fiquei muito orgulhosa e várias pessoas elogiaram! Obrigada pelos ensinamentos! Vou praticar para ficar ainda melhor. Amei o curso, técnicas que não conhecia que deu muito mais durabilidade pra maquiagem. Próximo curso com toda certeza irei adquirir.",
      rating: 5,
      image: "/lovable-uploads/049baed2-8135-4c8e-ac7e-6cd9d339e53c.png"
    },
    {
      name: "Juliana Santos",
      role: "Profissional Liberal",
      content: "Como alguém que nunca soube se maquiar, este curso foi uma revolução na minha vida. Samara ensina de forma muito clara e objetiva!",
      rating: 5,
      image: "J"
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
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                  {testimonial.image.startsWith('/') ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{testimonial.image}</span>
                    </div>
                  )}
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
            <div className="text-3xl font-bold text-rose-600 mb-2">15.000+</div>
            <div className="text-gray-600">Alunas Satisfeitas</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-rose-600 mb-2">4.9</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-rose-600 mb-2">98%</div>
            <div className="text-gray-600">Recomendação</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-rose-600 mb-2">2.847</div>
            <div className="text-gray-600">Avaliações</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
