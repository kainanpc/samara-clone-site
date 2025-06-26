
const TestimonialsSection = () => {
  const testimonialImages = [
    "/lovable-uploads/dec070a9-f993-4aca-bc39-1cc064e68997.png",
    "/lovable-uploads/26dbbbbe-d17d-4228-a702-1b90245459b5.png",
    "/lovable-uploads/77979456-e1e0-4e40-9d5d-98c8449633e2.png",
    "/lovable-uploads/049baed2-8135-4c8e-ac7e-6cd9d339e53c.png"
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Depoimentos das Nossas Alunas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 15.000 mulheres já transformaram suas vidas com nosso curso
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonialImages.map((image, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-4">
              <img 
                src={image} 
                alt={`Depoimento ${index + 1}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
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
