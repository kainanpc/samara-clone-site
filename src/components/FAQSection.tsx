
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O curso é adequado para iniciantes?",
      answer: "Sim! O curso foi desenvolvido especialmente para mulheres que nunca se maquiaram ou têm pouca experiência. Começamos do absoluto básico e evoluímos gradualmente até técnicas mais avançadas."
    },
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "Você terá acesso vitalício ao curso! Poderá assistir às aulas quantas vezes quiser, no seu ritmo e quando for mais conveniente para você."
    },
    {
      question: "Preciso comprar produtos caros para fazer o curso?",
      answer: "Não! Uma das grandes vantagens do meu método é ensinar você a conseguir resultados incríveis com produtos acessíveis. Dou dicas de produtos bons e baratos em todas as aulas."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeita com o curso, devolvemos 100% do seu investimento, sem perguntas."
    },
    {
      question: "O curso funciona para todos os tipos de pele?",
      answer: "Sim! O curso aborda técnicas para todos os tipos e tons de pele. Ensino adaptações específicas para pele oleosa, seca, mista e sensível, além de dicas para diferentes tons de pele."
    },
    {
      question: "Vou receber certificado?",
      answer: "Sim! Ao concluir o curso, você receberá um certificado digital de conclusão que comprova seu aprendizado em automaquiagem."
    },
    {
      question: "Como posso tirar dúvidas durante o curso?",
      answer: "Você terá acesso ao nosso grupo VIP no WhatsApp, onde poderá tirar dúvidas diretamente comigo e com outras alunas. Também respondo dúvidas por email."
    },
    {
      question: "O pagamento é seguro?",
      answer: "Totalmente seguro! Utilizamos a plataforma de pagamento mais segura do Brasil, com criptografia SSL e certificação PCI. Seus dados estão 100% protegidos."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire todas as suas dúvidas sobre o curso de automaquiagem
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:text-pink-600 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto border border-pink-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco pelo WhatsApp e tire todas as suas dúvidas antes de se inscrever.
            </p>
            <div className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition-colors duration-300 cursor-pointer">
              <span className="text-xl mr-2">📱</span>
              Falar no WhatsApp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
