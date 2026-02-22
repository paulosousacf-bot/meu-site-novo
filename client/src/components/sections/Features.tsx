import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Velocidade Extrema",
    description: "Conexão de fibra óptica com velocidades de até 700 MB para atender todas as suas necessidades.",
    image: "/images/feature-speed.png"
  },
  {
    title: "Wi-Fi 6ª Geração",
    description: "Tecnologia de ponta para conectar múltiplos dispositivos com estabilidade e alcance superior.",
    image: "/images/feature-wifi.png"
  },
  {
    title: "Suporte Humanizado",
    description: "Equipe técnica dedicada e amigável disponível 24 horas por dia para ajudá-lo.",
    image: "/images/feature-support.png"
  }
];

export default function Features() {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Mais do Que <span className="text-primary">Internet Rápida</span>
          </h2>
          <p className="text-lg text-slate-600">
            Descubra uma experiência de internet sem limites, respaldada por nossa dedicação à qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent text-center group">
              <CardContent className="pt-6">
                <div className="mb-6 relative mx-auto w-48 h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-orange-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="relative z-10 w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
