# Configuração do Google OAuth para Múltiplos Ambientes

## 📋 Resumo
Este projeto agora detecta automaticamente o ambiente e configura as URIs adequadas. Você não precisa mais alterar código ao fazer remix ou deploy.

## 🌐 Ambientes Suportados
- **Desenvolvimento**: `http://localhost:3000`
- **Staging**: `https://[seu-projeto].lovable.app`
- **Produção**: `https://seudominio.com` (Hostinger ou qualquer outro)

## ⚙️ Configuração no Google Cloud Console

### 1. Acesse o Google Cloud Console
1. Vá para [Google Cloud Console](https://console.cloud.google.com)
2. Selecione seu projeto
3. Navegue para **APIs & Services > Credentials**

### 2. Configure as URIs Autorizadas
Na configuração do seu Client ID OAuth 2.0, adicione TODAS essas URIs:

#### URIs de Redirecionamento Autorizadas:
```
http://localhost:3000
http://localhost:8080
https://[seu-projeto].lovable.app
https://seudominio.com
https://www.seudominio.com
```

#### JavaScript Origins Autorizadas:
```
http://localhost:3000
http://localhost:8080
https://[seu-projeto].lovable.app
https://seudominio.com
https://www.seudominio.com
```

### 3. Para Hostinger (ou outro provedor)
Quando fizer deploy para Hostinger:

1. **NÃO altere nenhum código**
2. Adicione apenas sua URL do Hostinger nas configurações do Google Console:
   - `https://seudominio.com`
   - `https://www.seudominio.com`

### 4. Verificação da Configuração
Após configurar, você pode verificar no console do navegador:
- Abra as Ferramentas do Desenvolvedor (F12)
- Olhe no console para ver as informações do ambiente

## 🔧 Como Funciona

O sistema detecta automaticamente:
- **localhost**: Usa configurações de desenvolvimento
- **.lovable.app**: Usa configurações de staging
- **Outros domínios**: Usa configurações de produção

## ❗ Importante
- Adicione TODAS as URLs no Google Console ANTES de usar
- O Google pode levar alguns minutos para propagar as mudanças
- Mantenha sempre `http://localhost:3000` para desenvolvimento

## 🚨 Troubleshooting

### Erro: "redirect_uri_mismatch"
1. Verifique se a URL atual está na lista de URIs autorizadas
2. Aguarde 5-10 minutos após adicionar nova URI
3. Limpe o cache do navegador

### Erro: "access_denied"
1. Verifique se o projeto está corretamente configurado no Google Cloud
2. Confirme se as APIs necessárias estão habilitadas
3. Verifique se o domínio está verificado (se necessário)

## 📞 Suporte
Se precisar de ajuda, verifique:
1. Console do navegador para logs detalhados
2. Configurações do Google Cloud Console
3. Status das APIs no Google Cloud