# 💼 Solução para Emissão de Certificados

Este repositório faz parte da disciplina **Projeto Integrador II** da **Universidade CEUB** e tem como objetivo armazenar os arquivos e códigos referentes ao projeto **Solução para Emissão de Certificados**.

O projeto consiste no desenvolvimento de um site que facilita o processo de **entrega e gerenciamento de certificados** de cursos, oficinas e eventos, voltado para organizações ou indivíduos que necessitam de uma solução prática e padronizada para esse processo.

A proposta surgiu a partir da necessidade de otimizar o envio de certificados das oficinas de monitoria do CEUB. Após conversas com a coordenação do curso, identificamos que uma solução similar já estava em desenvolvimento, mas decidimos criar uma versão **mais genérica e abrangente**, capaz de atender diferentes contextos. A partir dessa ideia, modelamos estratégias para solucionar o problema, resultando no desenvolvimento desta aplicação.

---

## 💻 Parte Técnica

### Tecnologias utilizadas
- React.js + Vite  
- HTML, CSS e JavaScript  
- Bibliotecas: React Router, Axios e Cors  
- Supabase (banco de dados)

### Ferramentas de apoio
- **GitHub Projects** → Gestão de tarefas, documentação e histórias de usuário  
- **Figma** → Criação do design do site  
- **Discord e WhatsApp** → Comunicação da equipe  
- **GitHub** → Versionamento e colaboração remota  

> O desenvolvimento do projeto ocorre majoritariamente de forma **remota**, com encontros presenciais pontuais nos laboratórios de informática do CEUB.

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
- **Node.js** ou **Yarn** instalados em seu ambiente

### Passo a passo
1. Clone este repositório:  
   ```bash
   git clone https://github.com/Solucao-Emissao-Certificados/codigo-solucao
2. Acesse a pasta: `cd certificados`
3. Intale as dependências: `npm install`
4. Inicie o servidor de desenvolvimento: `npm run dev`
5. Abra o navegador na porta que o Vite indicar

---

## 🎯 Objetivos Iniciais

✅ Desenvolver as telas de cadastro e login

Criar as telas para emissão e assinatura de certificados

Ajustar a estrutura do banco de dados conforme as novas funcionalidades

---

## 🧩 Estrutura do Projeto
A seguir, a estrutura atual do projeto ao acessar a pasta certificados-monitoria.

> Sujeita a alterações conforme o desenvolvimento.

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
---

## 🚀 Funcionalidades
O projeto disponibilizará inicialmente as seguintes funcionalidades:
- Permitir que organizadores criem e gerenciem certificados de cursos ou oficinas
- Permitir que usuários acessem, visualizem e assinem digitalmente seus certificados

> Para mais detalhes, acesse o Escopo do Projeto
ou consulte o repositório de documentos dentro da organização.

---

## 👥 Colaboradores
- Felipe Tolentino → Desenvolvedor, Designer UI/UX, Gerente de Projeto, Documentador

- Luis Guilherme → Desenvolvedor, Designer UI/UX, Documentador

- Lucas Daniel → Desenvolvedor, Gerente de Projeto, DBA, Especialista em Segurança

- Miguel Castro → Documentador

---

> Site atualmente sendo hospedado em: https://sistema-certificados.netlify.app/

---

📘 *Organização acadêmica desenvolvida como parte do curso de Ciência da Computação do CEUB.*
