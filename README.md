# 🌍 Trips Next.js - Galeria de Viagens

Uma aplicação web moderna para explorar e gerenciar viagens, construída com Next.js 15 e React 19. O projeto apresenta uma galeria interativa de destinos turísticos com funcionalidades de navegação, visualização detalhada e sistema de favoritos.

## ✨ Funcionalidades

### 🏠 **Página Inicial (Home)**
- Landing page com design moderno e animações suaves
- Navegação intuitiva para a galeria de viagens
- Logo animado e gradientes dinâmicos

### 🗺️ **Galeria de Viagens**
- Visualização em cards interativos com efeito glassmorphism
- Hover effects com expansão dos cards e revelação de informações
- Layout responsivo com posicionamento alternado (esquerda/direita)
- Estados de loading e erro com animações personalizadas

### 📍 **Detalhes da Viagem**
- Página individual para cada destino
- Timeline interativa com marcos da viagem
- Mapa integrado do Google Maps
- Galeria de imagens com design imersivo

### ⭐ **Sistema de Favoritos**
- Marcar/desmarcar viagens como favoritas
- Página dedicada para viagens favoritadas
- Botões com feedback visual e animações

### 👤 **Sobre o Autor**
- Página pessoal com informações do desenvolvedor
- Links de contato (LinkedIn, Gmail, GitHub)
- Design elegante com foto e biografia

### 🎨 **Design e UX**
- Interface moderna com efeitos glassmorphism
- Animações fluidas e micro-interações
- Gradientes dinâmicos e sombras elegantes
- Tipografia responsiva e acessível

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[CSS Modules](https://github.com/css-modules/css-modules)** - Estilização com escopo local
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições

### **Backend/API**
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Endpoints serverless
- **JSON** - Armazenamento de dados das viagens

### **Desenvolvimento**
- **[ESLint](https://eslint.org/)** - Linting e qualidade de código
- **[Git](https://git-scm.com/)** - Controle de versão

### **Integrações**
- **[Google Maps Embed API](https://developers.google.com/maps/documentation/embed)** - Mapas interativos
- **[Google Fonts](https://fonts.google.com/)** - Tipografia (Inter)

## 🚀 Instalação e Execução

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn
- Git

### **1. Clone o Repositório**
```bash
git clone https://github.com/4yob/projetos-trips-nextjs.git
cd projetos-trips-nextjs
```

### **2. Instale as Dependências**
```bash
npm install
# ou
yarn install
```

### **3. Configure as Variáveis de Ambiente**
Crie um arquivo `.env.local` na raiz do projeto:
```bash
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

### **4. Execute o Projeto**
```bash
# Desenvolvimento
npm run dev
# ou
yarn dev

# Build para produção
npm run build
npm start
# ou
yarn build
yarn start
```

### **5. Acesse a Aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🗂️ Estrutura do Projeto

```
projetos-trips-nextjs/
├── 📁 public/                    # Arquivos estáticos
│   ├── 📁 icons/                 # Ícones e logos
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   └── ...
│   └── 📁 img/                   # Imagens das viagens
│       ├── paris.jpg
│       ├── tokyo.jpg
│       └── ...
├── 📁 src/
│   ├── 📁 app/                   # App Router (Next.js 13+)
│   │   ├── 📄 globals.css        # Estilos globais
│   │   ├── 📄 layout.jsx         # Layout principal
│   │   ├── 📄 page.jsx           # Página inicial (redirect)
│   │   ├── 📄 not-found.jsx      # Página 404
│   │   ├── 📁 home/              # Página inicial
│   │   │   ├── 📄 page.jsx
│   │   │   └── 📄 home.module.css
│   │   ├── 📁 trips/             # Galeria de viagens
│   │   │   ├── 📄 page.jsx
│   │   │   ├── 📄 trips.module.css
│   │   │   └── 📁 [id]/          # Detalhes da viagem
│   │   │       ├── 📄 page.jsx
│   │   │       └── 📄 [id].module.css
│   │   ├── 📁 favorites/         # Viagens favoritas
│   │   │   ├── 📄 page.jsx
│   │   │   └── 📄 favorites.module.css
│   │   └── 📁 about/             # Sobre o autor
│   │       ├── 📄 page.jsx
│   │       └── 📄 about.module.css
│   └── 📁 components/            # Componentes reutilizáveis
│       ├── 📁 header/            # Cabeçalho da aplicação
│       │   ├── 📄 Header.jsx
│       │   └── 📄 Header.module.css
│       ├── 📁 tripCard/          # Card de viagem
│       │   ├── 📄 TripCard.jsx
│       │   └── 📄 TripCard.module.css
│       ├── 📁 favoriteButton/    # Botão de favoritar
│       │   ├── 📄 FavoriteButton.jsx
│       │   └── 📄 FavoriteButton.module.css
│       ├── 📁 contactButton/     # Botões de contato
│       │   ├── 📄 ContactButton.jsx
│       │   └── 📄 ContactButton.module.css
│       └── 📁 mapComponent/      # Componente do mapa
│           ├── 📄 MapComponent.jsx
│           ├── 📄 mapComponent.module.css
│           └── 📄 dataStructure.js
├── 📄 .env.local                 # Variáveis de ambiente
├── 📄 package.json               # Dependências e scripts
├── 📄 next.config.mjs           # Configuração do Next.js
├── 📄 eslint.config.mjs         # Configuração do ESLint
└── 📄 README.md                 # Documentação do projeto
```

## 🔌 Integração com API

### **Endpoints Disponíveis**

#### **GET /api/trips**
Retorna todas as viagens disponíveis.
```javascript
// Exemplo de uso
const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/trips`);
const trips = response.data;
```

#### **GET /api/trips/favorites**
Retorna apenas viagens marcadas como favoritas.
```javascript
const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/trips/favorites`);
const favoriteTrips = response.data;
```

#### **GET /api/trips/[id]**
Retorna detalhes de uma viagem específica.
```javascript
const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/trips/${tripId}`);
const trip = response.data;
```

### **Estrutura dos Dados**
```javascript
{
  id: 1,
  photo: "paris.jpg",
  title: "Aventura em Paris",
  place: "Paris",
  country: "FR",
  main_attractions: "Torre Eiffel, Louvre, Notre-Dame...",
  local_experience: "Experiência cultural única...",
  start_date: "15/07/2021",
  end_date: "25/07/2021",
  is_favorite: true
}
```

## 🎨 Funcionalidades Visuais

### **Efeitos e Animações**
- **Glassmorphism**: Cards com efeito de vidro translúcido
- **Hover Effects**: Expansão dos cards com revelação de informações
- **Loading States**: Animações de avião e pontos pulsantes
- **Gradientes Dinâmicos**: Backgrounds com cores suaves e transições
- **Micro-interações**: Feedback visual em botões e elementos interativos

### **Responsividade**
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Adaptação para tablet, laptop e desktop
- **Tipografia Fluida**: Tamanhos de fonte que se adaptam à tela
- **Layouts Flexíveis**: Componentes que se reorganizam conforme o espaço

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Gera build otimizado
npm start           # Inicia servidor de produção

# Qualidade de Código
npm run lint        # Executa linting do código
```

## 📝 Próximas Funcionalidades

- [ ] Sistema de autenticação de usuários
- [ ] Persistência de favoritos no banco de dados
- [ ] Filtros por país/continente
- [ ] Sistema de avaliações e comentários
- [ ] Integração com redes sociais
- [ ] PWA (Progressive Web App)
- [ ] Modo escuro/claro

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Seu Nome**
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)
- GitHub: [4yob](https://github.com/4yob)
- Email: seu.email@gmail.com

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**
