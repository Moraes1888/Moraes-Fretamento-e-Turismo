# 📧 Configuração do Sistema de E-mail

## Pré-requisitos

Para usar o sistema de envio de e-mails, você precisa:

1. **Conta Gmail** (recomendado)
2. **Verificação em duas etapas ativada**
3. **Senha de aplicativo gerada**

## Passo a Passo

### 1. Configurar Gmail

1. Acesse [Google Account Security](https://myaccount.google.com/security)
2. Ative a **Verificação em duas etapas**
3. Vá em **Senhas de app**
4. Gere uma nova senha de aplicativo para "Mail"
5. **Copie a senha gerada** (16 caracteres)

### 2. Configurar Variáveis de Ambiente

Edite o arquivo `.env.local` na raiz do projeto:

```env
# Configurações de E-mail
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-aplicativo-16-caracteres
EMAIL_TO=contato@moraes-fretamento.com
```

### 3. Reiniciar o Servidor

Após configurar as variáveis:

```bash
npm run dev
```

## Testando o Sistema

1. Acesse o site em `http://localhost:3001`
2. Preencha o formulário de orçamento
3. Clique em "Enviar Mensagem"
4. Verifique se recebeu a notificação de sucesso
5. Confira sua caixa de entrada no e-mail configurado

## Estrutura do E-mail

O e-mail enviado contém:

- **Dados do cliente**: Nome, e-mail, telefone
- **Detalhes da viagem**: Data, embarque, destino, serviço
- **Mensagem personalizada** (se fornecida)
- **Reply-to**: E-mail do cliente para resposta direta

## Solução de Problemas

### Erro: "Authentication failed"
- Verifique se a verificação em duas etapas está ativada
- Confirme se está usando a senha de aplicativo (não a senha normal)
- Teste com um e-mail diferente

### Erro: "Invalid login"
- Verifique se o e-mail está correto no `EMAIL_USER`
- Confirme se a senha de aplicativo está correta

### E-mail não chega
- Verifique a pasta de spam
- Confirme se o `EMAIL_TO` está correto
- Teste enviando para outro e-mail

## Produção

Para deploy em produção:

1. Configure as variáveis de ambiente no seu provedor (Vercel, Netlify, etc.)
2. Use um domínio personalizado se possível
3. Configure SPF/DKIM para melhor entregabilidade
4. Monitore os logs de envio

## Alternativas ao Gmail

O sistema também funciona com:

- **Outlook/Hotmail**
- **Yahoo Mail**
- **Provedores SMTP personalizados**

Para outros provedores, ajuste as configurações SMTP no arquivo `route.ts`.