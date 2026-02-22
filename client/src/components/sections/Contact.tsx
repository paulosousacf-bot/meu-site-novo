import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Fale Conosco e <br/>
              <span className="text-primary">Assine Já!</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato para oferecer o melhor plano para sua necessidade.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-xl mb-4 text-slate-800">Por que escolher a Solutyon?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Instalação rápida e profissional
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Suporte técnico local e acessível
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Planos sem surpresas na fatura
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input id="name" placeholder="Insira seu nome completo" className="h-12 rounded-lg" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input id="phone" placeholder="(XX) XXXXX-XXXX" type="tel" className="h-12 rounded-lg" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">Estado *</Label>
                  <Select>
                    <SelectTrigger className="h-12 rounded-lg">
                      <SelectValue placeholder="UF" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                      <SelectItem value="sc">Santa Catarina</SelectItem>
                      <SelectItem value="pr">Paraná</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Cidade *</Label>
                  <Select>
                    <SelectTrigger className="h-12 rounded-lg">
                      <SelectValue placeholder="Cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="poa">Porto Alegre</SelectItem>
                      <SelectItem value="canoas">Canoas</SelectItem>
                      <SelectItem value="gravatai">Gravataí</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan">Plano Desejado *</Label>
                <Select>
                  <SelectTrigger className="h-12 rounded-lg">
                    <SelectValue placeholder="Selecione o plano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="300">Plano Essencial - 300MB</SelectItem>
                    <SelectItem value="500">Plano Avançado - 500MB</SelectItem>
                    <SelectItem value="700">Plano Premium - 700MB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm font-normal text-slate-500 leading-tight">
                  Declaro que li e aceito os termos da <a href="#" className="text-primary hover:underline">política de privacidade</a>.
                </Label>
              </div>

              <Button type="submit" className="w-full h-12 text-lg font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                Enviar Solicitação
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
