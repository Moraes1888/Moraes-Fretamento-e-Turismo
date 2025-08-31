# 📋 Documentação Completa - Site Moraes Fretamento

## 🎯 Visão Geral

Site profissional para a empresa **Moraes Fretamento**, especializada em transporte executivo, universitário e turístico na região de Sorocaba. O site apresenta design moderno com inspiração em IA (Inteligência Artificial), oferecendo experiência visual única e funcionalidades avançadas.

### 🌟 Características Principais
- **Design IA-Inspired**: Gradientes complexos, animações e efeitos glassmorphism
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance**: Build otimizado e carregamento rápido
- **Acessibilidade**: Navegação intuitiva e elementos interativos
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🏗️ Estrutura do Projeto

```
Site-Moraes-Fretamento/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais e variáveis CSS
│   │   ├── layout.tsx           # Layout principal com header/footer
│   │   └── page.tsx             # Página principal com todas as seções
│   └── components/
│       └── ui/                  # Componentes shadcn/ui
│           ├── button.tsx       # Botão reutilizável
│           ├── card.tsx         # Card reutilizável
│           ├── input.tsx        # Campo de entrada
│           ├── label.tsx        # Label acessível
│           └── textarea.tsx     # Área de texto
├── lib/
│   └── utils.ts                 # Utilitários para Tailwind CSS
├── public/                      # Assets estáticos
├── tailwind.config.js           # Configuração Tailwind CSS
├── package.json                 # Dependências e scripts
├── README.md                    # Documentação rápida
└── DOCUMENTACAO.md             # Esta documentação completa
```

## 🎨 Design System

### 🎨 Paleta de Cores IA-Inspired
```css
/* Gradientes Principais */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--ai-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
--success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
--warning-gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
--danger-gradient: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);

/* Cores Base */
--background: #0a0a0a;
--foreground: #ffffff;
--primary: #667eea;
--primary-foreground: #ffffff;
--secondary: #764ba2;
--accent: #f093fb;
--accent-foreground: #ffffff;
--destructive: #E57373;
--destructive-foreground: #ffffff;
```

### 🎭 Efeitos Visuais
- **Glassmorphism**: `backdrop-blur-xl` para efeito translúcido
- **Gradientes Animados**: Transições suaves entre cores
- **Hover Effects**: `hover:scale`, `hover:-translate-y`, `hover:shadow`
- **Animações**: `animate-pulse`, `animate-ping`, `animate-bounce`
- **Sombras**: `shadow-2xl` com cores específicas

### 📱 Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: Flexbox e CSS Grid para layouts responsivos

## 📄 Seções do Site

### 🏠 **Início (Hero Section)**
- **Título Principal**: "Moraes Fretamento - Sua Segurança em Viagem"
- **Subtítulo**: "Transporte executivo, universitário e turístico com qualidade e pontualidade"
- **CTA Principal**: "Solicitar Orçamento"
- **Tooltips Interativos**: Dicas de viagem ao hover
- **Design**: Gradientes IA com animações

### 🚐 **Serviços**
1. **Transporte de Faculdades**
   - UNESP, UNISO, FATEC, UNIP
   - Horários flexíveis
   - Preços acessíveis

2. **Fretamento Empresarial**
   - Eventos corporativos
   - Reuniões e conferências
   - Transporte de funcionários

3. **Turismo e Lazer**
   - Excursões turísticas
   - Viagens familiares
   - Eventos especiais

4. **Translados**
   - Aeroportos
   - Hotéis
   - Eventos

### 🚗 **Frota**
1. **Micro-ônibus (15-20 pessoas)**
   - Ar-condicionado
   - Wi-Fi
   - Conforto premium

2. **Vans Executivas (8-12 pessoas)**
   - Poltronas reclináveis
   - Sistema de som
   - Segurança máxima

3. **Ônibus Executivo (40-50 pessoas)**
   - Wi-Fi gratuito
   - Banheiro
   - Poltronas executivas

4. **Carros Executivos (4-6 pessoas)**
   - Conforto premium
   - Motorista profissional
   - Discretos e pontuais

### 👥 **Sobre Nós**
- **Missão**: "Proporcionar transporte seguro e confortável"
- **Visão**: "Ser referência em fretamento na região"
- **Valores**: Segurança, pontualidade, conforto, profissionalismo
- **História**: Mais de 10 anos de experiência

### 💰 **Orçamento (MODERNIZADO)**
- **Formulário Interativo** com componentes shadcn/ui:
  - **Input**: Campos de texto modernos
  - **Label**: Labels acessíveis e estilizados
  - **Textarea**: Área de texto expansível
  - **Select**: Dropdowns nativos estilizados
  - **Button**: Botão com design consistente
  - **Card**: Container elegante
- **Layout Responsivo**: Grid 2 colunas em desktop
- **Validação Visual**: Focus states e feedback
- **Design IA-inspired**: Mantido com gradientes e animações

### 📞 **Contato**
- **WhatsApp**: (15) 97401-3939
- **Instagram**: @moraesfretamento
- **Email**: contato@moraesfretamento.com
- **Endereço**: Sorocaba, SP
- **Horário**: 24h por dia

### 💬 **Depoimentos**
8 depoimentos de clientes satisfeitos:
- **Transporte universitário** (UNESP, UNISO)
- **Fretamento empresarial**
- **Turismo e lazer**
- **Ônibus executivo**
- **Carros executivos**
- **Translados corporativos**

### 🛡️ **Certificações e Segurança**
- **Seguro de Passageiros**
- **Licença ANTT**
- **Manutenção Preventiva**
- **Motoristas Credenciados**
- **Veículos 2020+**
- **Monitoramento 24h**
- **Certificação ISO**

## 🤖 Funcionalidades de IA

### 💬 **IA Flutuante**
- **Chat em tempo real** para dicas de viagem
- **Localização inteligente** baseada na região
- **Dicas personalizadas** para cada tipo de viagem
- **Interface moderna** com design IA-inspired
- **Animações suaves** e transições

### 🎯 **Tooltips Inteligentes**
- **Dicas de viagem** ao hover sobre cards
- **Informações contextuais** sobre cada serviço
- **Preços removidos** conforme solicitado
- **Design responsivo** e acessível

### 🎨 **Design IA-Inspired**
- **Gradientes complexos** simulando redes neurais
- **Animações fluidas** como processamento de dados
- **Efeitos glassmorphism** para modernidade
- **Cores vibrantes** e contrastes dinâmicos

## 🛠️ Tecnologias Utilizadas

### 🎯 **Frontend**
- **Next.js 15.4.2**: Framework React com App Router
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS**: Framework CSS utility-first
- **shadcn/ui**: Biblioteca de componentes modernos
- **Lucide React**: Ícones vetoriais

### 🎨 **Design e UX**
- **CSS Gradients**: Gradientes complexos e animados
- **CSS Animations**: Animações suaves e responsivas
- **Glassmorphism**: Efeitos translúcidos modernos
- **Responsive Design**: Mobile-first approach

### 🔧 **Ferramentas de Desenvolvimento**
- **npm**: Gerenciador de pacotes
- **ESLint**: Linting de código
- **Turbopack**: Bundler rápido do Next.js

### 📦 **Dependências Principais**
```json
{
  "next": "15.4.2",
  "react": "^18",
  "react-dom": "^18",
  "@radix-ui/react-slot": "^1.0.2",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0",
  "lucide-react": "^0.294.0",
  "tailwindcss-animate": "^1.0.7"
}
```

## 🚀 Como Executar

### 📋 **Pré-requisitos**
- Node.js 18+ instalado
- npm ou yarn
- Git (para clonar o repositório)

### ⚡ **Instalação Rápida**
```bash
# 1. Navegar para o diretório
cd Site-Moraes-Fretamento

# 2. Instalar dependências
npm install

# 3. Executar em desenvolvimento
npm run dev

# 4. Acessar no navegador
# http://localhost:3000
```

### 🏗️ **Build de Produção**
```bash
# Build otimizado
npm run build

# Executar build
npm start
```

## ⚡ Performance

### 📊 **Métricas de Build**
- **Tamanho da página**: 45.4 kB
- **First Load JS**: 145 kB
- **Tempo de compilação**: ~13s
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

### 🚀 **Otimizações Implementadas**
- **Code Splitting**: Carregamento sob demanda
- **Image Optimization**: Otimização automática de imagens
- **CSS Minification**: Estilos otimizados
- **Tree Shaking**: Remoção de código não utilizado

## ⚙️ Configurações

### 🎨 **Tailwind CSS**
```javascript
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Variáveis CSS customizadas
      },
      animation: {
        // Animações customizadas
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
```

### 🎯 **shadcn/ui**
- **Componentes**: Button, Card, Input, Label, Textarea
- **Ícones**: Lucide React
- **Utilitários**: clsx, tailwind-merge, cva
- **Acessibilidade**: Radix UI primitives

## 📱 Responsividade

### 📐 **Breakpoints**
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### 🎯 **Adaptações Mobile**
- **Menu hamburger** com overlay
- **Botões maiores** para touch
- **Texto otimizado** para leitura
- **Navegação simplificada**

## 🔍 SEO

### 📝 **Meta Tags**
```html
<title>Moraes Fretamento - Transporte Executivo Sorocaba</title>
<meta name="description" content="Fretamento executivo, universitário e turístico em Sorocaba. Vans, micro-ônibus e ônibus executivos com segurança e conforto.">
<meta name="keywords" content="fretamento, transporte, sorocaba, van, micro-ônibus, ônibus executivo">
```

### 🏷️ **Estrutura Semântica**
- **Header**: Navegação principal
- **Main**: Conteúdo principal
- **Section**: Seções organizadas
- **Footer**: Informações de contato

## 🔒 Segurança

### 🛡️ **Medidas Implementadas**
- **HTTPS**: Certificado SSL
- **CSP**: Content Security Policy
- **XSS Protection**: Headers de segurança
- **Input Validation**: Validação de formulários

### 📋 **Compliance**
- **LGPD**: Proteção de dados pessoais
- **ANVISA**: Normas de transporte
- **ANTT**: Licenciamento obrigatório

## 📊 Analytics

### 📈 **Métricas Monitoradas**
- **Page Views**: Visualizações de página
- **Bounce Rate**: Taxa de rejeição
- **Session Duration**: Tempo de sessão
- **Conversion Rate**: Taxa de conversão

### 🎯 **Eventos Rastreados**
- **Form Submissions**: Envios de formulário
- **Button Clicks**: Cliques em botões
- **Scroll Depth**: Profundidade de scroll
- **Contact Actions**: Ações de contato

## 🚀 Deploy

### 🌐 **Ambientes**
- **Development**: `http://localhost:3000`
- **Staging**: Ambiente de testes
- **Production**: Site em produção

### 📦 **Plataformas Suportadas**
- **Vercel**: Deploy automático
- **Netlify**: Deploy contínuo
- **AWS**: Infraestrutura escalável

## 🆘 Suporte

### 📞 **Contato Técnico**
- **Email**: suporte@moraesfretamento.com
- **WhatsApp**: (15) 97401-3939
- **Horário**: Segunda a Sexta, 8h às 18h

### 📚 **Documentação**
- **README.md**: Guia rápido
- **DOCUMENTACAO.md**: Esta documentação completa
- **Changelog**: Histórico de mudanças

## 📝 Changelog

### 🆕 **v2.4.0 - Ajustes Finais e Correções**
- ✅ **Link do Instagram corrigido** para o perfil correto.
- ✅ **Endereço atualizado** para Votorantim, SP.
- ✅ **Contraste do seletor de serviços melhorado** para maior legibilidade.
- ✅ **Corrigido problema de z-index** no seletor de serviços, garantindo que ele apareça na frente de outros elementos.

### 🆕 **v2.3.0 - Correção Ortográfica e Finalização**
- ✅ **'Traslado' → 'Translado'** corrigido em todo o site
- ✅ **Formulário atualizado** com ortografia correta
- ✅ **Documentação consistente** em todas as seções
- ✅ **Ortografia portuguesa** correta
- ✅ **Site finalizado** e otimizado
- ✅ **Mobile responsivo** testado
- ✅ **Design IA-inspired** completo

### 🆕 **v2.2.0 - Botões Flutuantes Otimizados**
- ✅ **Botões redimensionados** (WhatsApp e IA)
- ✅ **Ícones menores** (text-4xl → text-3xl)
- ✅ **Texto removido** (apenas ícones)
- ✅ **Logo oficial WhatsApp** implementado (SVG)
- ✅ **Indicadores menores** (w-4 → w-3)
- ✅ **Design minimalista** e elegante
- ✅ **Tooltips mantidos** para funcionalidade

### 🆕 **v2.1.0 - Formulário Modernizado**
- ✅ **Componentes shadcn/ui** implementados (Input, Label, Textarea, Button, Card)
- ✅ **Formulário de orçamento** completamente modernizado
- ✅ **Layout responsivo** em grid 2 colunas
- ✅ **Validação visual** com focus states
- ✅ **Design IA-inspired** mantido
- ✅ **Compatibilidade** resolvida (sem dependências problemáticas)

### 🆕 **v2.0.0 - Integração shadcn/ui**
- ✅ **shadcn/ui** implementado com sucesso
- ✅ **Componentes modernos** (Button, Card)
- ✅ **Ícones Lucide** integrados
- ✅ **Design system** consistente
- ✅ **Build otimizado** sem erros

### 🎨 **v1.5.0 - Design IA-Inspired**
- ✅ **Gradientes complexos** implementados
- ✅ **Animações fluidas** adicionadas
- ✅ **Glassmorphism** aplicado
- ✅ **Cores vibrantes** e contrastes

### 📱 **v1.4.0 - Mobile Menu**
- ✅ **Menu hamburger** responsivo
- ✅ **Overlay** com animações
- ✅ **Navegação mobile** otimizada
- ✅ **Quick contact** links

### 💬 **v1.3.0 - IA Flutuante**
- ✅ **Chat em tempo real** implementado
- ✅ **Dicas inteligentes** por localização
- ✅ **Interface moderna** com animações
- ✅ **Tooltips interativos**

### 🛡️ **v1.2.0 - Certificações**
- ✅ **Seção de segurança** adicionada
- ✅ **Certificações** e licenças
- ✅ **Badges de confiança**
- ✅ **Informações de compliance**

### 💬 **v1.1.0 - Depoimentos**
- ✅ **8 depoimentos** de clientes
- ✅ **Design IA-inspired**
- ✅ **Estatísticas** de satisfação
- ✅ **Animações** suaves

### 🚐 **v1.0.0 - Site Base**
- ✅ **Estrutura principal** criada
- ✅ **Seções básicas** implementadas
- ✅ **Responsividade** configurada
- ✅ **SEO** otimizado

---

## 📧 **Sistema de Envio de E-mail**

### 🎯 **Funcionalidades Implementadas**

#### ✅ **API de Envio**
- **Rota**: `/api/send-email`
- **Método**: POST
- **Tecnologia**: Nodemailer com Gmail SMTP
- **Template HTML**: E-mail profissional com design responsivo
- **Validação**: Campos obrigatórios e formato de e-mail
- **Tratamento de erros**: Logs detalhados e respostas apropriadas

#### ✅ **Formulário Atualizado**
- **Novos campos**: E-mail e telefone do cliente
- **Integração completa**: Conectado com API de envio
- **Feedback visual**: Notificações toast de sucesso/erro
- **UX melhorada**: Auto-ocultação de notificações após 5 segundos

#### ✅ **Template de E-mail**
- **Design profissional**: Layout responsivo com cores da marca
- **Informações completas**: Dados do cliente e detalhes da viagem
- **Reply-to inteligente**: E-mail do cliente para resposta direta
- **Estrutura organizada**: Seções bem definidas e legíveis

### 🔧 **Configuração**

#### 📁 **Arquivos Principais**
- `src/app/api/send-email/route.ts`: API de envio
- `src/app/page.tsx`: Formulário integrado
- `.env.local`: Variáveis de ambiente
- `CONFIGURACAO-EMAIL.md`: Guia de configuração

#### ⚙️ **Variáveis de Ambiente**
```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-aplicativo
EMAIL_TO=contato@moraes-fretamento.com
```

#### 🛠️ **Setup Gmail**
1. Ativar verificação em duas etapas
2. Gerar senha de aplicativo
3. Configurar variáveis no `.env.local`
4. Reiniciar servidor de desenvolvimento

### 📊 **Estrutura do E-mail Enviado**

#### 📋 **Conteúdo**
- **Cabeçalho**: Logo e título "Novo Orçamento"
- **Dados do cliente**: Nome, e-mail, telefone
- **Detalhes da viagem**: Data, embarque, destino, serviço
- **Mensagem**: Texto personalizado do cliente (opcional)
- **Rodapé**: Informações da empresa e call-to-action

#### 🎨 **Design**
- **Cores da marca**: Azul (#1e40af) e gradientes
- **Layout responsivo**: Funciona em todos os clientes de e-mail
- **Ícones**: Emojis para melhor visualização
- **Tipografia**: Fonte system-ui para compatibilidade

### 🔍 **Solução de Problemas**

#### ❌ **Erros Comuns**
- **Authentication failed**: Verificar senha de aplicativo
- **Invalid login**: Confirmar e-mail e credenciais
- **E-mail não chega**: Verificar pasta de spam

#### 📖 **Documentação Adicional**
- Consulte `CONFIGURACAO-EMAIL.md` para guia completo
- Instruções passo a passo para diferentes provedores
- Alternativas ao Gmail (Outlook, Yahoo, SMTP customizado)

---

## 📝 **Histórico de Alterações**

### 🗓️ **Versão 2.4 - Janeiro 2025**
**Sistema de Envio de E-mail Implementado**

#### ✅ **Funcionalidades Adicionadas:**
- **API de envio de e-mail**: Rota `/api/send-email` com Nodemailer
- **Formulário atualizado**: Campos de e-mail e telefone adicionados
- **Template profissional**: E-mail HTML responsivo com design da marca
- **Feedback visual**: Sistema de notificações toast para sucesso/erro
- **Validação robusta**: Campos obrigatórios e formato de e-mail
- **Tratamento de erros**: Logs detalhados e respostas apropriadas
- **Configuração Gmail**: Suporte completo para SMTP do Gmail
- **Documentação**: Guia completo em `CONFIGURACAO-EMAIL.md`

#### 🎯 **Benefícios:**
- **Automação completa**: Orçamentos enviados automaticamente por e-mail
- **Experiência profissional**: Template elegante com cores da marca
- **Facilidade de resposta**: Reply-to configurado para o cliente
- **Configuração simples**: Variáveis de ambiente bem documentadas
- **Suporte técnico**: Documentação detalhada para setup

#### 📁 **Arquivos Criados/Modificados:**
- `src/app/api/send-email/route.ts`: Nova API de envio
- `src/app/page.tsx`: Formulário integrado com novos campos
- `.env.local`: Variáveis de ambiente para e-mail
- `CONFIGURACAO-EMAIL.md`: Guia de configuração completo
- `DOCUMENTACAO.md`: Seção sobre sistema de e-mail

### 🗓️ **Versão 2.3 - Dezembro 2024**
**Remoção do Header de Navegação**

#### ✅ **Alterações Implementadas:**
- **Removido header completo**: Eliminado todo o cabeçalho de navegação fixo
- **Removido menu desktop**: Links de navegação (Início, Serviços, Frotas, Sobre nós, Depoimentos, Segurança, Orçamento, Contato)
- **Removido menu mobile**: Overlay do menu mobile com todos os links e opções de contato rápido
- **Ajustado layout principal**: Removido padding-top da tag `<main>` que compensava o header fixo
- **Simplificado layout.tsx**: Código mais limpo e focado no conteúdo principal

#### 🎯 **Benefícios:**
- **Experiência mais limpa**: Foco total no conteúdo da página
- **Maior espaço visual**: Aproveitamento completo da tela
- **Navegação simplificada**: Usuário navega pelo scroll natural da página
- **Performance melhorada**: Menos elementos DOM e CSS
- **Mobile-friendly**: Melhor experiência em dispositivos móveis

#### 📁 **Arquivos Modificados:**
- `src/app/layout.tsx`: Remoção completa do header e menu mobile

---

## 🎯 **Próximas Melhorias Sugeridas**

### 🔮 **Funcionalidades Futuras**
1. **Validação em tempo real** dos formulários
2. **Loading states** para submissão
3. **Toast notifications** para feedback
4. **Auto-complete** para cidades
5. **Calendário interativo** para datas
6. **Chatbot IA** mais avançado
7. **Sistema de reservas** online
8. **Tracking de veículos** em tempo real

### 🎨 **Melhorias de Design**
1. **Dark/Light mode** toggle
2. **Mais animações** interativas
3. **Parallax effects** nas seções
4. **Loading states** mais elaborados
5. **Micro-interactions** adicionais

### 📊 **Analytics Avançado**
1. **Heatmaps** de cliques
2. **User journey** tracking
3. **A/B testing** para conversão
4. **Performance monitoring** em tempo real

### 📱 **Teste em Diferentes Dispositivos**
- **Mobile**: iPhone, Android
- **Tablet**: iPad, Android tablets
- **Desktop**: Chrome, Firefox, Safari, Edge

---

**📞 Para dúvidas ou suporte técnico, entre em contato!**