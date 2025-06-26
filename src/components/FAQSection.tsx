
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "PARA QUEM É ESSE CURSO",
      answer: "Este curso é perfeito para qualquer mulher que deseja aprender a se maquiar profissionalmente em casa. Desde iniciantes completas até quem já tem algum conhecimento e quer aperfeiçoar suas técnicas. Se você tem dificuldade em fazer sua maquiagem durar, não sabe quais produtos usar ou quer aprender técnicas profissionais, este curso é para você!"
    },
    {
      question: "POSSO ASSISTIR O CONTEÚDO ATÉ QUE DIA?",
      answer: "Você terá acesso vitalício ao curso! Isso significa que poderá assistir às aulas quantas vezes quiser, no seu ritmo e quando for mais conveniente para você. O conteúdo ficará disponível para sempre em sua área de membros."
    },
    {
      question: "POSSO COMPRAR PARA DAR DE PRESENTE?",
      answer: "Sim! Você pode adquirir o curso como presente. Após a compra, você receberá os dados de acesso que poderá repassar para a pessoa presenteada. É um presente incrível para qualquer mulher que deseja se sentir mais bonita e confiante!"
    },
    {
      question: "COMO FUNCIONA O CERTIFICADO DE CONCLUSÃO?",
      answer: "Ao concluir todas as aulas do curso, você receberá automaticamente um certificado digital de conclusão. Este certificado comprova que você completou o Curso de Automaquiagem da Samara Duarte e pode ser usado para comprovar seus conhecimentos na área."
    },
    {
      question: "COMO ACESSAR O CURSO",
      answer: "Após a confirmação do pagamento, você receberá por e-mail os dados de acesso à plataforma do curso. O acesso é liberado imediatamente após a confirmação da compra. Você poderá assistir pelo computador, tablet ou celular, onde e quando quiser."
    },
    {
      question: "COMO FAÇO PARA COMPRAR?",
      answer: "É muito simples! Clique no botão 'EU QUERO!' e você será direcionado para nossa página de pagamento segura. Você pode pagar no cartão de crédito (até 12x) ou no PIX com desconto adicional. Após a confirmação do pagamento, você receberá os dados de acesso imediatamente."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-600 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-white hover:text-rose-400 transition-colors duration-300 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <a 
            href="https://pay.kiwify.com.br/2Tqyr5C?afid=k0Syu8TA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-in">
              COMPRAR AGORA COM DESCONTO
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
