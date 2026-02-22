# Solutyon Tech - Documentação Completa do Projeto

## 📋 Visão Geral

Este é um site institucional moderno e responsivo para a **Solutyon Tech**, um provedor de internet com fibra óptica. O projeto foi desenvolvido com as tecnologias mais modernas e segue as melhores práticas de design e desenvolvimento web.

**Design Philosophy:** Hybrid approach combining Clean Modernism + Fluid Tech/Organic Gradient
- Base branca limpa com gradientes de laranja vibrante
- Formas arredondadas e orgânicas
- Paleta de cores: Laranja vibrante (#FF6B35 range) com texto preto/branco

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 19.2.1** - Framework UI moderno
- **TypeScript 5.6.3** - Tipagem estática
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Vite 7.1.7** - Build tool e dev server ultrarrápido
- **shadcn/ui** - Componentes UI reutilizáveis baseados em Radix UI
- **Wouter 3.3.5** - Roteamento leve para React
- **Framer Motion 12.23.22** - Animações suaves

### Backend (Placeholder)
- **Express.js 4.21.2** - Servidor Node.js
- **ESBuild 0.25.0** - Bundler otimizado

### Ferramentas de Desenvolvimento
- **pnpm 10.15.1** - Gerenciador de pacotes rápido
- **Prettier 3.6.2** - Formatação de código
- **TypeScript** - Verificação de tipos

---

## 📁 Estrutura do Projeto

```
solutyon-tech-redesign/
├── client/                          # Frontend React
│   ├── public/                      # Arquivos estáticos
│   │   └── images/                  # Imagens do site
│   │       ├── hero-bg.jpg          # Fundo do banner principal
│   │       ├── logo-clean-v2.png    # Logo principal
│   │       ├── logo_original.png    # Logo alternativa
│   │       └── logo_white_text.png  # Logo com texto branco
│   │
│   ├── src/
│   │   ├── pages/                   # Páginas principais
│   │   │   ├── Home.tsx             # Página inicial
│   │   │   └── NotFound.tsx         # Página 404
│   │   │
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx       # Cabeçalho com navegação
│   │   │   │   └── Footer.tsx       # Rodapé
│   │   │   │
│   │   │   ├── sections/            # Seções da página
│   │   │   │   ├── Hero.tsx         # Banner principal
│   │   │   │   ├── Plans.tsx        # Seção de planos
│   │   │   │   ├── Features.tsx     # Benefícios
│   │   │   │   ├── Streaming.tsx    # Serviços de streaming
│   │   │   │   ├── FAQ.tsx          # Perguntas frequentes
│   │   │   │   └── Contact.tsx      # Contato
│   │   │   │
│   │   │   ├── ui/                  # Componentes shadcn/ui
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── accordion.tsx
│   │   │   │   └── ... (mais componentes)
│   │   │   │
│   │   │   ├── ErrorBoundary.tsx    # Tratamento de erros
│   │   │   └── Map.tsx              # Integração Google Maps
│   │   │
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx     # Contexto de tema
│   │   │
│   │   ├── hooks/
│   │   │   ├── useMobile.tsx        # Hook para responsividade
│   │   │   ├── useComposition.ts    # Composição de componentes
│   │   │   └── usePersistFn.ts      # Persistência de funções
│   │   │
│   │   ├── lib/
│   │   │   └── utils.ts             # Utilitários (cn, etc)
│   │   │
│   │   ├── App.tsx                  # Componente raiz
│   │   ├── main.tsx                 # Entrada React
│   │   └── index.css                # Estilos globais e design tokens
│   │
│   └── index.html                   # HTML template
│
├── server/                          # Backend Express (placeholder)
│   └── index.ts
│
├── shared/                          # Código compartilhado
│   └── const.ts
│
├── vite.config.ts                   # Configuração Vite
├── tailwind.config.ts               # Configuração Tailwind
├── tsconfig.json                    # Configuração TypeScript
├── package.json                     # Dependências e scripts
├── pnpm-lock.yaml                   # Lock file do pnpm
│
├── ideas.md                         # Documentação de design
├── content_map.md                   # Mapa de conteúdo
└── PROJETO-DOCUMENTACAO.md          # Este arquivo
```

---

## 🎨 Design System

### Paleta de Cores (OKLCH)

**Cores Primárias:**
- **Primary Orange:** `oklch(0.65 0.22 45)` - Laranja vibrante principal
- **Primary Foreground:** `oklch(1 0 0)` - Branco para texto sobre laranja

**Cores Base:**
- **Background:** `oklch(1 0 0)` - Branco puro
- **Foreground:** `oklch(0.20 0.02 260)` - Preto profundo para texto

**Cores Secundárias:**
- **Secondary:** `oklch(0.97 0.01 60)` - Laranja muito claro
- **Secondary Foreground:** `oklch(0.45 0.18 35)` - Laranja escuro

**Cores de Gráficos (Espectro Laranja):**
- Chart 1: `oklch(0.85 0.15 60)` - Laranja claro
- Chart 2: `oklch(0.75 0.18 50)`
- Chart 3: `oklch(0.65 0.22 45)` - Base laranja
- Chart 4: `oklch(0.55 0.20 40)`
- Chart 5: `oklch(0.45 0.18 35)` - Laranja/vermelho escuro

### Tipografia

- **Font Primária:** Sistema de fontes padrão (Montserrat, Poppins, Open Sans via Tailwind)
- **Tamanhos de Fonte:**
  - Cabeçalho: `text-2xl` (24px) - Links de navegação
  - Botão: `text-xl` (20px) - "Área do Cliente"
  - Títulos: `text-5xl` a `text-7xl` - Headings principais
  - Corpo: `text-lg` a `text-xl` - Descrições

### Espaçamento

- **Radius Base:** `0.75rem` (12px)
- **Container:** Centralizado com padding responsivo
- **Gap:** Espaçamentos consistentes de 4px a 12px

---

## 🚀 Como Executar

### Instalação

```bash
# Instalar dependências
pnpm install

# Ou com npm
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# O site estará disponível em http://localhost:3000
```

### Build para Produção

```bash
# Compilar para produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

### Verificação de Tipos

```bash
# Verificar tipos TypeScript
pnpm check
```

### Formatação de Código

```bash
# Formatar código com Prettier
pnpm format
```

---

## 📄 Componentes Principais

### Header (client/src/components/layout/Header.tsx)

Cabeçalho responsivo com:
- Logo adaptativa (muda ao fazer scroll)
- Menu de navegação com 5 links
- Botão "Área do Cliente" com link externo
- Menu mobile colapsável
- Transição suave ao fazer scroll

**Links de Navegação:**
- Início → #home
- Benefícios → #beneficios
- Planos → #planos
- FAQ → #faq
- Contato → #contato

**Links Externos:**
- Central do Assinante: https://solutyontech.centralassinante.com.br/#/login
- Instagram: https://www.instagram.com/solutyon.tech?igsh=eTJvdWNzN2l1aDdu
- WhatsApp: https://wa.me/

### Hero (client/src/components/sections/Hero.tsx)

Banner principal com:
- Fundo de imagem com overlay escuro uniforme (bg-slate-900/90)
- Texto grande e gradiente laranja
- Logo gigante da Solutyon Tech (lado direito)
- Dois botões de CTA (Ver Planos / Fale Conosco)
- Indicadores de recursos (Wi-Fi 6, Instalação Rápida)
- Divisor SVG ondulado na base

### Plans (client/src/components/sections/Plans.tsx)

Seção de planos com:
- Cards de planos com preços
- Benefícios destacados
- Botões de ação

### Features (client/src/components/sections/Features.tsx)

Seção de benefícios com:
- Grid de recursos
- Ícones e descrições
- Destaque em laranja

### FAQ (client/src/components/sections/FAQ.tsx)

Perguntas frequentes com:
- Accordion expansível
- Perguntas e respostas estruturadas

### Contact (client/src/components/sections/Contact.tsx)

Seção de contato com:
- Formulário de contato
- Informações de contato
- Links para redes sociais

---

## 🔧 Customização

### Alterar Cores

Edite `client/src/index.css` na seção `:root {}`:

```css
:root {
  --primary: oklch(0.65 0.22 45); /* Mude este valor */
  --primary-foreground: oklch(1 0 0);
  /* ... outras cores */
}
```

### Alterar Tipografia

Edite `client/src/index.css` ou `tailwind.config.ts` para adicionar fontes customizadas.

### Adicionar Nova Seção

1. Crie um novo arquivo em `client/src/components/sections/NovaSecao.tsx`
2. Importe em `client/src/pages/Home.tsx`
3. Adicione a seção no JSX

### Alterar Imagens

Substitua arquivos em `client/public/images/` e atualize as referências nos componentes.

---

## 📱 Responsividade

O site é totalmente responsivo com breakpoints Tailwind:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Componentes usam `hidden md:flex` ou `md:grid-cols-2` para adaptar-se.

---

## 🔗 Links Importantes

- **Site ao vivo:** https://solutyontech.com.br (após configurar domínio)
- **Central do Assinante:** https://solutyontech.centralassinante.com.br/#/login
- **Instagram:** https://www.instagram.com/solutyon.tech
- **WhatsApp:** https://wa.me/

---

## 📦 Dependências Principais

| Pacote | Versão | Uso |
|--------|--------|-----|
| React | 19.2.1 | Framework UI |
| TypeScript | 5.6.3 | Tipagem estática |
| Tailwind CSS | 4.1.14 | Estilos |
| Vite | 7.1.7 | Build tool |
| shadcn/ui | Latest | Componentes UI |
| Framer Motion | 12.23.22 | Animações |
| Wouter | 3.3.5 | Roteamento |
| Recharts | 2.15.2 | Gráficos |

---

## 🎯 Próximas Melhorias Sugeridas

1. **Botão de WhatsApp Flutuante** - Ícone fixo no canto para contato rápido
2. **Widget de Speedtest** - Teste de velocidade integrado
3. **Animações de Entrada** - Fade-in e slide-in em elementos
4. **Pop-up Promocional** - Banner temporário para ofertas especiais
5. **Integração com CRM** - Captura de leads automática
6. **Chat ao Vivo** - Suporte em tempo real

---

## 📞 Suporte

Para dúvidas ou alterações, entre em contato com a equipe de desenvolvimento.

---

**Última atualização:** Fevereiro de 2026
**Versão do Projeto:** 1.0.0
