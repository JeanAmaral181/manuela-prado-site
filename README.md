# Manuela Prado — Site de Apresentação
> Deploy gratuito · GitHub Pages · Zero servidor · Zero custo

---

## ⚡ ESTRUTURA DO PROJETO

```
manuela-prado-site/
├── index.html              ← página principal
├── assets/
│   ├── css/style.css       ← estilos
│   ├── js/main.js          ← interatividade
│   └── img/                ← COLOQUE SUAS FOTOS AQUI
│       ├── lash-1.jpg
│       ├── lash-2.jpg
│       ├── design-henna-1.jpg
│       ├── design-1.jpg
│       ├── design-2.jpg
│       └── epilacao-1.jpg
└── README.md
```

---

## 📸 ANTES DE PUBLICAR — CHECKLIST OBRIGATÓRIO

### 1. Adicionar fotos reais
Coloque as fotos dentro de `assets/img/` com os nomes exatos acima.
- Use JPG ou WebP (menor tamanho = carrega mais rápido)
- Resolução ideal: 800×1066px (proporção 3:4)
- Comprima as fotos em https://squoosh.app antes de subir

### 2. Substituir o número do WhatsApp
No `index.html`, encontre as 2 ocorrências de:
```
5511999999999
```
Troque pelo número real no formato: `55` + DDD + número (sem espaços/traços)
Exemplo: `5511987654321`

### 3. Verificar informações
- Endereço: Av. Armando Salles de Oliveira, 1600 · Condomínio Flex ✓
- Instagram: @manuelaprado.beauty ✓
- Serviços e preços: confira se estão atualizados ✓

---

## 🚀 DEPLOY — GITHUB PAGES (GRATUITO)

### Passo a passo no terminal:

```bash
# 1. Instale o Git se não tiver
# https://git-scm.com/downloads

# 2. Entre na pasta do projeto
cd manuela-prado-site

# 3. Inicie o repositório Git
git init
git add .
git commit -m "feat: site inicial Manuela Prado"

# 4. Crie conta no github.com (se não tiver)
# Crie um repositório chamado: manuela-prado-site
# NÃO inicialize com README

# 5. Conecte e suba
git remote add origin https://github.com/SEU_USUARIO/manuela-prado-site.git
git branch -M main
git push -u origin main

# 6. Ative o GitHub Pages
# GitHub → repositório → Settings → Pages
# Source: Deploy from a branch → main → / (root) → Save

# 7. URL do site (pronto em ~2 minutos):
# https://SEU_USUARIO.github.io/manuela-prado-site/
```

### Domínio personalizado (opcional, R$40/ano)
```
# Registre o domínio em registro.br ou hostinger.com.br
# Ex: manuelaprado.com.br
# No GitHub Pages → Custom domain → coloque o domínio
# Na registradora → DNS → adicione registro CNAME apontando para:
# SEU_USUARIO.github.io
```

---

## 🔒 SEGURANÇA — ANÁLISE DE VAZAMENTOS

### Por que este site é seguro:
- ✅ **100% estático** — sem servidor, sem banco de dados, sem backend
- ✅ **Sem formulários** — nada é enviado para lugar nenhum
- ✅ **Sem cookies** — sem rastreamento ou armazenamento local
- ✅ **Sem APIs externas** com chave — Google Fonts é público e seguro
- ✅ **rel="noopener noreferrer"** em todos os links externos (previne tab hijacking)
- ✅ **Sem JavaScript inline** — código separado, sem eval(), sem execução dinâmica

### Único dado "sensível":
- 📞 **Número de WhatsApp** — estará visível no HTML (normal, é intencional)
  - Risco: pode ser coletado por bots (spam). Mitigação: já acontece com qualquer site
  - Não coloque o número em nenhum outro lugar além do link wa.me

### Checklist de segurança adicional (GitHub Pages):
```bash
# 1. Crie um arquivo .nojekyll na raiz (evita processamento desnecessário)
touch .nojekyll

# 2. NÃO coloque no repositório:
# - Senhas
# - Tokens de API
# - Informações pessoais além do necessário (CPF, endereço completo, etc.)
```

### Headers de segurança (se migrar para Netlify no futuro):
Crie um arquivo `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer-when-downgrade"
    Content-Security-Policy = "default-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; script-src 'self'; style-src 'self' https://fonts.googleapis.com; img-src 'self' data:;"
```

---

## 🔄 COMO ATUALIZAR O SITE

```bash
# Depois de editar qualquer arquivo:
git add .
git commit -m "update: nova foto portfólio"
git push

# O GitHub Pages atualiza automaticamente em ~1 minuto
```

---

## 📦 TECNOLOGIAS USADAS

| O que | Por quê |
|-------|---------|
| HTML/CSS/JS puro | Zero dependências, carrega rápido |
| Google Fonts (Cormorant + Jost) | Tipografia elegante, CDN gratuito |
| GitHub Pages | Hospedagem gratuita, SSL automático |
| IntersectionObserver API | Animações de scroll sem biblioteca |
| CSS custom properties | Paleta consistente e fácil de mudar |

---

## 🎨 PARA MUDAR CORES (se precisar)

Em `assets/css/style.css`, no início do arquivo:
```css
:root {
  --cream:  #F5F0E8;   /* fundo claro */
  --gold:   #C9A770;   /* dourado principal */
  --dark:   #1A1A18;   /* fundo escuro */
}
```
Mude apenas esses valores e tudo o site se atualiza.
