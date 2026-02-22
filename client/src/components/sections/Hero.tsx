import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Uniform Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Background Fibra Óptica" 
          className="w-full h-full object-cover"
        />
        {/* Uniform dark overlay across the entire banner */}
        <div className="absolute inset-0 bg-slate-900/90"></div>
      </div>

      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Internet 100% Fibra Óptica
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
            Conecte-se à <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Velocidade do Futuro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 max-w-xl leading-relaxed">
            Navegue, jogue e assista em 4K sem interrupções. A Solutyon Tech traz a estabilidade que você precisa com a velocidade que você merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#planos">
              <Button size="lg" className="w-full sm:w-auto rounded-full text-lg px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                Ver Planos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#contato">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-slate-900 transition-all">
                Fale Conosco
              </Button>
            </a>
          </div>
          
          <div className="pt-8 flex items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Wifi className="h-5 w-5 text-primary" />
              <span className="font-medium">Wi-Fi 6 Grátis</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-medium">Instalação Rápida</span>
            </div>
          </div>
        </div>
        
        {/* Right side: Giant Logo Integration - Clean Version */}
        <div className="hidden md:flex justify-center items-center relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
           <div className="relative">
             {/* No glow/shadow behind logo as requested */}
             <img 
               src="/images/logo-clean-v2.png" 
               alt="Solutyon Tech Giant Logo" 
               className="relative z-10 w-full max-w-lg object-contain transform hover:scale-105 transition-transform duration-500"
             />
           </div>
        </div>
      </div>
      
      {/* Wave Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white fill-current">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
