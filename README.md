# Solução para Emissão de Certificados
Este repositório tem como objetivo armazenar os arquivos da matéria de PROJETO INTEGRADOR II da universidade CEUB. O nome do projeto que está sendo desenvolvido é "**Solução para Emissão de Certificados**".

Esse projeto consiste em criar um site para facilitar o processo de entrega de certificados de cursos/oficinas organizados e realizados por organizações ou indivíduos que necessitam de um modelo para tal.

O projeto surgiu da proposta de facilitar o envio dos certificados das oficinas da monitoria do CEUB, mas, após uma conversa com com o coordenador do curso, descobrimos que essa solução já estava sendo desenvolvida, mas que poderíamos desenvolver algo similar e geral para preencher outras lacunas. A partir dessa proposta, nós modelamos estratégias para solucionar esse problema, sendo a solução o desenvolvimento de nossa aplicação.

## Parte técnica
#### Esse projeto está sendo desenvolvido com as seguintes tecnologias:
- React.js.
- Vite.
- Hmtl, CSS e JavaScript.
- Bibliotecas como Router, Axios e Cors.
- Supabase como banco de dados
#### Além dessas tecnologias, também estamos utilizando das seguintes ferramentas:
- Github Projects - Alocação de tarefas, documentação do projeto e histórias de usuários.
- Figma - Design do site
- Discord e WhatsApp - Comunicação
- Github - Versionamento do projeto

*Vale informar que o projeto está majoritariamente no Github, então seu desenvolvimento está sendo remoto, com exceções de dias em que estamos presentes nos laboratórios de informática do CEUB*

## Como rodar o projeto
#### Antes de começar, certifique-se de ter instalado:
- Node.js ou Yarn 

#### Passo a passo
1. Clone este repositório: `https://github.com/FelipeTolentino21/projeto-integrador.git`
2. Acesse a pasta: `cd certificados-monitoria`
3. Intale as dependências: `npm install`
4. Inicie o servidor de desenvolvimento: `npm run dev`
5. Abra o navegador na porta que o Vite indicar

## Objetivos iniciais
Alguns dos nossos objetivos para esse projeto consistem em:
1. Desenvolver a tela de cadastro e login ✔️
2. Desenvolver telas de quem está criando um certificado e de quem está utilizando do site para assinar um certificado
3. Adicionar/Alterar estrutura do banco de dados para funcionar em relação aos itens anteriores


## Estrutura do Projeto
A seguir, temos a estrutura do projeto ao acessar a pasta `certificados-monitoria`.

*Essa estrutura está propensa a mudanças*
```
📦 certificados-monitoria
|- 📂src
|-  |- 📂components  // Pasta destinada a componentes do site (como botões)
|-  |- 📂pages       // Pasta destinada as diferentes páginas do site
|-  |- 📂assets      // Pasta destinada aos assets (como imagens)
|-  |- 📂routes      // Pasta destinada aos routers
|-  |- 📂services    // Pasta destinada ao serviço do banco de dados
|- 📜 .env
|- 📜 .gitignore
|- 📜 eslint.config.js
|- 📜 index.html
|- 📜 package-lock.json
|- 📜 package.json  // Contém os metadados do projeto
|- 📜 README.md     // Arquivo para organização entre os membros
|- 📜 vite.config.js
📜 README.md        // Arquivo de leitura incial do projeto
```

## Funcionalidades do projeto
A princípio, o projeto disponibilizará as seguintes funcionalidades.
- Permitir que quem criou um certificado vejam e utilizem do processo de emissão de certificados para aprovar seus usuários de suas oficinas ou cursos
- Permitir que quem quer assinar um certificado consiga ver os certificados que tem disponíveis para ele e propriamente selecione um para fazer a assinatura.

Para saber mais, acesse o [Escopo do projeto](https://docs.google.com/document/d/1RyOy5Z-JlPvY33MGmqHTKD1hUmSSMS9YT-ahRDMf9HI/edit?usp=sharing), ou vá ao repositório dos documentos dentro da organização e acesse o escopo por lá.

## Colaboradores
- Felipe Tolentino: Desenvolvedor, Designer de UI/UX, Gerente de projeto, Documentador
- Luis Guilherme: Desenvolvedor, Designer de UI/UX, Documentador
- Lucas Daniel: Desenvolvedor, Gerente de projeto, DBA (Administrador de Banco de Dados), Especialista em Segurança
