⚛️ **CRUD de Usuários com ReactJS e JSON Server**


📄 Descrição do Projeto

Este repositório apresenta o desenvolvimento de um Sistema Completo de Cadastro de Usuário (CRUD). O projeto foca na experiência do usuário e em uma navegação pragmática no Front-end, utilizando uma arquitetura moderna e baseada em componentes.

⚙️ Funcionalidades
O sistema implementa todas as operações essenciais para o gerenciamento de usuários: Inserir (Create), Consultar (Read), Alterar (Update) e Excluir (Delete) dados.

🛠️ Tecnologias Utilizadas
A aplicação foi construída utilizando as seguintes ferramentas principais:

Front-end: A biblioteca ReactJS foi utilizada para criar uma interface de usuário rápida, intuitiva e baseada em componentes. Todo o desenvolvimento Front-end utiliza JavaScript.

Back-end Simulado: O NodeJS com o módulo JSON Server foi implementado para simular um servidor de dados, responsável pelo armazenamento e processamento das informações de usuário.

Comunicação de Dados: Axios foi implementado para gerenciar as requisições HTTP de maneira eficiente. Ele é o responsável por toda a comunicação do Front-end (ReactJS) com o Back-end simulado (JSON Server), executando as operações completas do CRUD.

✨ Destaques do Projeto
O uso do ReactJS garantiu uma experiência de navegação rápida e suave, essencial para o foco em usabilidade. A integração do Axios simplificou o gerenciamento de estado e as chamadas assíncronas, permitindo que o desenvolvimento se concentrasse na lógica de negócio e na interface.

Pré-requisitos:

Node.js npm/yarn.

Como Executar o Projeto:

Clone o repositório. [https://github.com/mateussmunizz/CRUD-ReactJS]

Instale as dependências do projeto (no diretório principal):

Bash

npm install

yarn
Instale o JSON Server (globalmente, se preferir):

Bash

npm install -g json-server
Inicie o Back-end (simulado), geralmente em uma porta específica:

Bash

json-server --watch db.json
Inicie a aplicação React em outro terminal:

Bash

npm start
**ou**
yarn start
O projeto estará acessível no endereço padrão do React (ex: http://localhost:3000).
