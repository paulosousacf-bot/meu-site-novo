import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function Streaming() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10">
            <img 
              src="/images/streaming-section.jpg" 
              alt="Família assistindo TV" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 text-white">
                <PlayCircle className="h-12 w-12 text-primary fill-current" />
                <div>
                  <p className="font-bold text-lg">Séries e Filmes Grátis</p>
                  <p className="text-sm text-slate-300">Incluso nos planos selecionados</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Sua Diversão <br/>
              <span className="text-primary">Sem Limites!</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Internet rápida, entretenimento ilimitado! Ao escolher nosso provedor de internet, você ganha acesso gratuito a plataformas exclusivas de streaming.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Transforme sua experiência online, assine hoje e aproveite o melhor do entretenimento em alta velocidade.
            </p>
            
            <div className="pt-4">
              <a href="#planos">
                <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-white text-slate-900 hover:bg-slate-100">
                  Conheça Nossos Planos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
