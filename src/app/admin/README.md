# Área Administrativa - Moraes Fretamento

## Visão Geral

Esta é a área administrativa do site Moraes Fretamento, desenvolvida com Next.js 15 e NextAuth.js para autenticação segura.

## Funcionalidades

### 🔐 Sistema de Autenticação
- Login seguro com NextAuth.js
- Proteção de rotas administrativas
- Sessões JWT seguras
- Middleware de autenticação

### 📊 Dashboard Administrativo
- Visão geral das estatísticas
- Resumo de orçamentos por status
- Acesso rápido às funcionalidades principais

### 💼 Gestão de Orçamentos
- Lista completa de orçamentos recebidos
- Visualização detalhada de cada orçamento
- Controle de status (Pendente, Respondido, Finalizado)
- Estatísticas em tempo real
- Funcionalidade de envio de email direto

## Acesso

### Credenciais de Demonstração
- **Email:** admin@moraesfretamento.com
- **Senha:** admin123

### URLs de Acesso
- **Login:** `/admin/login`
- **Dashboard:** `/admin/dashboard`
- **Orçamentos:** `/admin/orcamentos`

## Estrutura de Arquivos

```
src/app/admin/
├── layout.tsx          # Layout principal da área admin
├── page.tsx            # Redirecionamento para login
├── login/
│   └── page.tsx        # Página de login
├── dashboard/
│   └── page.tsx        # Dashboard principal
└── orcamentos/
    └── page.tsx        # Gestão de orçamentos
```

## Configuração

### Variáveis de Ambiente (.env.local)
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua-chave-secreta-aqui
```

### Dependências Principais
- `next-auth`: Autenticação
- `bcryptjs`: Criptografia de senhas
- `jsonwebtoken`: Tokens JWT
- `@next-auth/prisma-adapter`: Adaptador para banco de dados (futuro)

## Segurança

### Proteção de Rotas
- Middleware personalizado protege todas as rotas `/admin/*`
- Redirecionamento automático para login se não autenticado
- Verificação de função de administrador

### Autenticação
- Senhas criptografadas com bcrypt
- Sessões JWT com expiração configurável
- Proteção CSRF integrada

## Funcionalidades Futuras

### 🚀 Próximas Implementações
- [ ] Integração com banco de dados real
- [ ] Sistema de notificações por email
- [ ] Relatórios avançados e analytics
- [ ] Gestão de usuários administrativos
- [ ] Backup e exportação de dados
- [ ] API REST para integração externa

### 📈 Melhorias Planejadas
- [ ] Interface responsiva otimizada
- [ ] Filtros avançados na gestão de orçamentos
- [ ] Dashboard com gráficos interativos
- [ ] Sistema de logs de auditoria
- [ ] Configurações personalizáveis

## Desenvolvimento

### Executar em Desenvolvimento
```bash
npm run dev
```

### Acessar a Área Admin
1. Navegue para `http://localhost:3000/admin`
2. Faça login com as credenciais de demonstração
3. Explore o dashboard e funcionalidades

### Estrutura de Dados

#### Orçamento (Budget)
```typescript
interface Orcamento {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  origem: string;
  destino: string;
  dataViagem: string;
  numeroPassageiros: number;
  observacoes: string;
  status: 'pendente' | 'respondido' | 'finalizado';
  dataEnvio: string;
}
```

## Suporte

Para dúvidas ou problemas relacionados à área administrativa:
- Verifique os logs do servidor
- Confirme as variáveis de ambiente
- Teste as credenciais de acesso

---

**Desenvolvido com ❤️ para Moraes Fretamento e Turismo**