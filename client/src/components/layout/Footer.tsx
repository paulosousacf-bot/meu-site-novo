import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="#home" className="block">
              <img 
                src="/images/logo.png" 
                alt="Solutyon Tech" 
                className="h-12 w-auto brightness-0 invert opacity-90" 
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Conectando você ao futuro com a melhor tecnologia em fibra óptica. 
              Velocidade, estabilidade e suporte que você pode confiar.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/solutyon.tech?igsh=eTJvdWNzN2l1aDdu" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#home" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#planos" className="hover:text-primary transition-colors">Nossos Planos</a></li>
              <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="https://solutyontech.centralassinante.com.br/#/login" target="_blank" className="hover:text-primary transition-colors">Área do Cliente</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:5121655162" className="hover:text-white transition-colors">(51) 2165-5162</a>
                  <a href="https://wa.me/5551982571909" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(51) 98257-1909</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:contato@solutyontech.com.br" className="hover:text-white transition-colors">contato@solutyontech.com.br</a>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Já é cliente?</h4>
            <p className="text-slate-400 text-sm mb-4">
              Acesse a central do assinante para emitir boletos, verificar consumo e muito mais.
            </p>
            <a href="https://solutyontech.centralassinante.com.br/#/login" target="_blank" rel="noopener noreferrer">
              <Button className="w-full rounded-full font-bold bg-primary hover:bg-primary/90 text-white">
                Acessar Central
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Solutyon Tech. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
