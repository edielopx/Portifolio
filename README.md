# Portfolio de Edielo Alves Paixão

Este é um projeto de portfólio pessoal desenvolvido para Edielo Alves Paixão. O site exibe informações profissionais, habilidades e formas de contato em um layout moderno, responsivo e com experiência de usuário aprimorada.

## Características do Projeto

- **Design Minimalista**: Interface limpa com esquema de cores preto, branco e prata
- **Responsivo**: Adaptável para dispositivos móveis, tablets e desktops
- **Modo Escuro**: Suporte completo para tema claro/escuro com transições suaves
- **Multi-idioma**: Suporte para português e inglês com alternância fácil
- **Animações**: Micro-interações e animações para melhorar a experiência do usuário
- **Performance**: Otimizado para carregar rapidamente em todos os dispositivos

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset de JavaScript com tipagem estática
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva
- **Framer Motion**: Biblioteca para animações fluidas e interativas
- **Express**: Servidor Node.js leve para servir a aplicação

## Estrutura do Projeto

```
portfolio/
├── client/             # Código frontend da aplicação
│   ├── public/         # Arquivos estáticos públicos
│   │   └── assets/     # Imagens, ícones e outros recursos 
│   └── src/            # Código fonte React
│       ├── components/ # Componentes reutilizáveis
│       │   └── ui/     # Componentes de interface do usuário
│       ├── context/    # Contextos React (tema, idioma)
│       ├── hooks/      # Hooks personalizados
│       ├── lib/        # Utilitários e configurações
│       └── pages/      # Páginas da aplicação
├── server/             # Código backend da aplicação
└── shared/             # Código compartilhado entre frontend e backend
```

Para os desenvolvedores que queiram customizar o projeto, é importante entender os principais arquivos:

- `client/src/components/Header.tsx` - Navegação e barra superior
- `client/src/components/Hero.tsx` - Seção principal da página
- `client/src/components/Skills.tsx` - Habilidades técnicas
- `client/src/components/Projects.tsx` - Projetos e GitHub
- `client/src/components/Contact.tsx` - Formulário de contato
- `client/src/components/Footer.tsx` - Rodapé e direitos reservados
- `client/src/context/ThemeContext.tsx` - Lógica do modo escuro/claro
- `client/src/context/LanguageContext.tsx` - Traduções e alternância de idioma

## Como Executar o Projeto no Windows

### Pré-requisitos

- Node.js (versão 16.x ou superior) - [Download Node.js](https://nodejs.org/pt-br/download/)
- npm (normalmente instalado com o Node.js)
- Git (opcional) - [Download Git](https://git-scm.com/downloads)

### Passos para Instalação

1. **Obtenha o código fonte**

   **Opção 1:** Use o Git para clonar o repositório:
   ```bash
   git clone https://github.com/edielopx/portfolio.git
   cd portfolio
   ```

   **Opção 2:** Faça o download do arquivo ZIP e extraia-o para uma pasta

2. **Abra o Prompt de Comando (CMD) ou PowerShell**
   
   Navegue até a pasta do projeto:
   ```bash
   cd caminho\para\pasta\portfolio
   ```

3. **Instale as dependências**

   ```bash
   npm install
   ```
   
   Este processo pode levar alguns minutos dependendo da sua conexão com a internet.

4. **Execute o projeto em modo de desenvolvimento**

   ```bash
   npm run dev
   ```

   Isso iniciará tanto o servidor backend quanto o cliente frontend automaticamente.

5. **Acesse a aplicação**

   Após a inicialização, o navegador deverá abrir automaticamente. Caso não abra, acesse:
   `http://localhost:5000` ou `http://127.0.0.1:5000`

### Solução de Problemas no Windows

- **Erro de execução de scripts PowerShell:** Se o PowerShell apresentar erro ao executar scripts, execute o comando abaixo como administrador:
  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

- **Porta em uso:** Se a porta 5000 já estiver em uso, você pode alterá-la editando o arquivo `server/index.ts` e mudando a porta no valor de `PORT`.

### Criando uma Versão de Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Para executar a versão de produção após a compilação:

```bash
npm start
```

O site estará disponível em `http://localhost:5000` (ou na porta configurada).

## Personalização

### Alterando Informações de Contato

Edite os arquivos em `client/src/context/LanguageContext.tsx` para atualizar as informações de contato e textos do site em diferentes idiomas.

### Modificando o Tema

As configurações de cores e temas estão definidas em:
- `client/src/index.css` - Variáveis CSS
- `tailwind.config.ts` - Configurações do Tailwind

### Adicionando Novos Projetos

Para adicionar novos projetos, edite o componente `client/src/components/Projects.tsx`.

## Contribuição

Este projeto é de uso pessoal, mas sugestões são bem-vindas. Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Todos os direitos reservados a Edielo Alves Paixão.# Portifolio
