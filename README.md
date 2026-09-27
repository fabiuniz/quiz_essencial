<!--
Tags: Fund, Dev, Skils
Label: ☁️ Quiz Essencial
Description:🌍 Aplicação web para criação e fixação de quizzes através da geração de JSON estruturado via IA, com recurso exclusivo de Recomeço Seletivo (Repescagem) em questões erradas.
technical_requirement: JavaScript (Vanilla DOM Manipulation), HTML5, CSS3 (Dark Theme), JSON, Prompts Estruturados.
path_hook: hookfigma.hook8, hookfigma.hook12, hookfigma.hook13
-->
# 🚀 Quiz Essencial: Estudo Estruturado e Fixação Avançada

> ⚙️ **Quiz Essencial** é a sua plataforma de estudo de próxima geração, projetada para transformar o aprendizado passivo em fixação ativa. O seu grande diferencial é a **geração de prompts altamente estruturados** que você envia à IA para que ela formule as questões, exiba o gabarito detalhado em JSON e estruture roteiros de ação perfeitos para o seu nível.

<p align="center">
  <img src="images/screenshot.png" alt="Screenshot do Quiz Essencial" width="600"/>
</p>

---


## 💡 O Conceito: Engenharia de Prompt para Fixação Ativa

Em vez de depender de perguntas genéricas, o **Quiz Essencial** atua como um gerador de comandos especializados. Você define o tema, o nível e a ferramenta cria o prompt perfeito para você **entregar à IA**, que responderá com um conteúdo rigoroso para garantir a fixação ativa do conhecimento.

A aplicação se baseia em dois pilares principais:

### 1. **Prompts de Roteiro Estruturado (Formato Markdown)**

Organiza fluxos de estudo complexos, requisitos de certificação ou caminhos de aprendizado em etapas claras, com foco e prioridade definidos.

### 2. **Prompts de Avaliação Estruturada (Formato JSON)**

Gera questões de múltipla escolha de alto nível, com uma justificativa detalhada inclusa na própria estrutura JSON, permitindo revisão imediata e aprofundada.

---

## ✨ Recursos Principais

| Recurso | Descrição | Benefício para o Usuário |
| :--- | :--- | :--- |
| **Gerador de Prompt para Quiz** | Cria o prompt estruturado para a IA formular questões de múltipla escolha estritas em JSON (`pergunta`, `justificativa`, `respostas`). | **Fixação Científica:** Força a revisão ativa com a IA gerando questões desafiadoras e justificadas no ponto de falha. |
| **Gerador de Prompt para Roteiro** | Cria o comando para a IA estruturar metas de estudo e fluxos de trabalho visuais em Markdown. | **Clareza e Caminho:** Elimina a dúvida sobre o que estudar em seguida, com etapas e prioridades claras. |
| **Metadados de Contexto** | Usa tags `` para categorizar e filtrar o tipo de prompt. | **Organização:** Facilita a busca e a organização do seu acervo de prompts de estudo. |
| **Nível de Dificuldade** | Permite solicitar conteúdo em diferentes níveis (Básico, Intermediário, **Avançado**), garantindo o desafio adequado. | **Progressão:** Adapta o estudo ao seu nível atual, garantindo que o aprendizado seja sempre relevante. |


## 🛠️ Stack Tecnológico

* **Frontend:** JavaScript (Vanilla DOM Manipulation)
* **Estrutura:** HTML5
* **Estilo:** CSS3 (Totalmente Dark Theme 🌑)
* **Dados:** JSON
* **Geração:** Prompts Estruturados (Engenharia de Prompting Avançada)

---

## ⚙️ Como Usar (Fluxo de Trabalho)

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/fabiuniz/quiz_essencial.git]
    cd quiz-essencial
    ```
2.  **Abra o `index.html`:**
    Simplesmente abra o arquivo `index.html` em seu navegador. Não são necessários servidores ou dependências externas (exceto a conexão com o motor de IA via API).
3.  **Defina o Assunto e o Nível:** Exemplo: Assunto: `GCP`, Nível: `Avançado`.
4. **Gere o Prompt na Aplicação:** Escolha se você precisa do prompt para um **Roteiro em Markdown** ou para um **Quiz em JSON**.
5. **Envie para a IA:** Copie o prompt gerado, cole na sua IA de preferência (como ChatGPT, Claude, etc.) e deixe-a formular as questões.
6. **Estude e Fixe:** Insira a resposta da IA na plataforma e interaja com o material para realizar a revisão ativa.

### Exemplo de Saída (Quiz de Fixação Avançada em JSON)

```json
[
  {
    "pergunta": "Qual é a topologia Full-Mesh MÍNIMA para o Dedicated Interconnect com SLA de 99,99%?",
    "justificativa": "Para o 99,99%, são necessárias quatro conexões Dedicated Interconnect...",
    "respostas": [
      {
        "opcao": "...",
        "correto": false
      }
    ]
  }
]

### Exemplo de Prompt Gerado pela Aplicação (Para você enviar à IA)
> *"Atue como um Arquiteto de Nuvem Sênior. Crie um quiz técnico avançado sobre GCP (Google Cloud Platform) contendo questões de múltipla escolha estruturadas estritamente em um array JSON válido..."*
```
## 💡 Melhorias Futuras
- Persistência:
    - Adicionar a função `salvarQuiz(quizJSON)` usando `localStorage.setItem('quiz_atual', JSON.stringify(quizJSON))` após cada interação do usuário.
    - Adicionar a função `carregarQuiz()` usando `JSON.parse(localStorage.getItem('quiz_atual'))` no carregamento da página.
- UX/UI: Implementar a progress bar (manipulação da `width` via JS) e classes CSS de acerto/er

## 🤝 Contribuições

Este é um projeto **Dev** focado em melhorar a eficácia do estudo e fixação de conteúdo complexo. Contribuições, sugestões e relatórios de bugs são bem-vindos!