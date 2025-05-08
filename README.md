# Arquitetura (DNC)

Este é um projeto desenvolvido como parte dos estudos de programação na DNC. O objetivo do projeto é criar uma aplicação web que exibe uma lista de projetos, permite salvar favoritos e utiliza um contexto global para gerenciar o idioma e textos dinâmicos.

## 📋 Funcionalidades

- Exibição de uma lista de projetos com informações como título, subtítulo e imagem.
- Possibilidade de favoritar projetos, com persistência no `sessionStorage`.
- Suporte a múltiplos idiomas utilizando `AppContext`.
- Integração com uma API para buscar dados dinâmicos.
- Design responsivo e estilização com CSS.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **Context API**: Gerenciamento de estado global para idioma e textos.
- **Fetch API**: Comunicação com a API para buscar dados.
- **CSS**: Estilização da aplicação.
- **SessionStorage**: Persistência de dados local para projetos favoritos.

## 📂 Estrutura do Projeto
```
src/ 
├── Components/
│ ├── Button/ 
│ │ └── Button.jsx 
│ ├── ContactForm/ 
│ │ └── ContactForm.jsx 
│ ├── Contexts/ 
│ │ └── AppContext.jsx 
│ ├── ProjectsList/ 
│ │ └── ProjectsList.jsx 
├── assets/ 
│ ├── like.svg 
│ └── like-filed.svg 
├── services/ 
│ └── apiServices.js 
└── App.js
```
## 🚀 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as dependências:
    npm install

3. Inicie o servidor de desenvolvimento:
    npm start

4. Acesse a aplicação: Abra o navegador e acesse
    http://localhost:3000.

## 🌐 API Utilizada

A aplicação utiliza uma API para buscar dados dinâmicos. Certifique-se de que a API está configurada corretamente no arquivo apiServices.js.

Exemplo de configuração:

export const getApiData = async (endpoint) => {
  const response = await fetch(`https://sua-api.com/${endpoint}`);
  return response.json();
};

## 🖼️ Demonstração

Lista de Projetos
Exibe os projetos com título, subtítulo e imagem.
Botão para favoritar/desfavoritar projetos.
Formulário de Contato
Permite o envio de mensagens com validação de campos.
Suporte a Idiomas
Textos dinâmicos baseados no idioma selecionado.

## 📦 Dependências Principais

React: ^18.0.0
React-DOM: ^18.0.0

## 📝 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

## Deploy

https://dncproject-arquitetura.vercel.app
