import { Check, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Essencial",
    speed: "300",
    price: "79,90",
    features: [
      "Até 300MB de Download",
      "Wi-fi BASIC",
      "Instalação Grátis",
      "Suporte 24h",
      "100% Fibra Óptica"
    ],
    highlight: false,
    color: "bg-slate-50"
  },
  {
    name: "Avançado",
    speed: "500",
    price: "99,90",
    features: [
      "Até 500 MB de Download",
      "Wi-fi Plus",
      "Instalação Grátis",
      "Suporte 24h",
      "100% Fibra Óptica",
      "Séries e filmes grátis"
    ],
    highlight: true,
    tag: "MAIS POPULAR",
    color: "bg-white"
  },
  {
    name: "Premium",
    speed: "700",
    price: "129,90",
    features: [
      "Até 700 MB de Download",
      "Wi-fi 6ª Geração AX",
      "Instalação Grátis",
      "Suporte 24h",
      "100% Fibra Óptica",
      "IP fixo público",
      "Séries e filmes grátis",
      "Fixo ilimitado Brasil"
    ],
    highlight: false,
    color: "bg-slate-50"
  }
];

export default function Plans() {
  return (
    <section id="planos" className="py-24 bg-slate-50 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Escolha o Plano <span className="text-primary">Ideal para Você</span>
          </h2>
          <p className="text-lg text-slate-600">
            Pacotes flexíveis com 100% fibra óptica e custo fixo, projetados para atender todas as suas necessidades de conexão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plano, index) => (
            <Card 
              key={index} 
              className={cn(
                "relative border-0 shadow-xl transition-all duration-300 hover:-translate-y-2",
                plano.highlight ? "z-10 scale-105 shadow-primary/20 ring-2 ring-primary" : "shadow-slate-200 hover:shadow-slate-300",
                plano.color
              )}
            >
              {plano.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {plano.tag}
                </div>
              )}

              <CardHeader className="text-center pb-2 pt-8">
                <h3 className="text-xl font-bold text-slate-700">{plano.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-5xl font-extrabold text-slate-900">{plano.speed}</span>
                  <span className="text-xl font-bold text-slate-500">MEGA</span>
                </div>
              </CardHeader>

              <CardContent className="text-center space-y-6">
                <div className="flex items-center justify-center gap-1 text-primary">
                  <span className="text-sm font-medium">R$</span>
                  <span className="text-4xl font-bold">{plano.price}</span>
                  <span className="text-sm font-medium text-slate-500">/mês</span>
                </div>

                <ul className="space-y-3 text-left mx-auto max-w-[220px]">
                  {plano.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="mt-0.5 bg-green-100 p-0.5 rounded-full shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pb-8 pt-4">
                <a 
                  href={`https://wa.me/5551982571909?text=Olá, gostaria de assinar o plano ${plano.name} de ${plano.speed}MB`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    className={cn(
                      "w-full rounded-full font-bold text-lg h-12",
                      plano.highlight 
                        ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25" 
                        : "bg-slate-900 hover:bg-slate-800"
                    )}
                  >
                    Assinar Agora
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
