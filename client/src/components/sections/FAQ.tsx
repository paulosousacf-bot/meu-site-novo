import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos pagamentos via boleto bancário, cartão de crédito, débito automático e PIX. Você pode gerenciar suas faturas diretamente na Área do Cliente."
  },
  {
    question: "Como posso consultar a disponibilidade na minha região?",
    answer: "Você pode verificar a disponibilidade entrando em contato conosco pelo WhatsApp ou preenchendo o formulário de contato aqui no site com seu endereço completo."
  },
  {
    question: "Há algum contrato de fidelidade?",
    answer: "Sim, nossos planos possuem fidelidade de 12 meses em troca da isenção da taxa de instalação e comodato dos equipamentos."
  },
  {
    question: "O que tem além da internet nas ofertas da Solutyon Tech?",
    answer: "Além da ultravelocidade, oferecemos acesso a aplicativos de streaming de filmes e séries, e em alguns planos, telefonia fixa ilimitada para todo o Brasil."
  },
  {
    question: "Todos os planos possuem Wi-Fi 6 sem custo adicional?",
    answer: "O Wi-Fi 6 (tecnologia AX) está disponível exclusivamente no Plano Premium de 700MB. Os demais planos contam com roteadores Dual Band de alta performance."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-slate-600">
            Tire suas dúvidas sobre nossos serviços e planos.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-lg font-bold text-slate-800 hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
