# 🚀 PromptFix Academy: Estudo Estruturado e Fixação Avançada

> ⚙️ **PromptFix Academy** é a sua plataforma de estudo de próxima geração, projetada para transformar o aprendizado passivo em fixação ativa, utilizando prompts de conteúdo altamente estruturados e formatos de revisão otimizados (como o JSON de Quiz ou Roteiros de Ação).

---

## 💡 O Conceito: Fixação Ativa com Estrutura

Em vez de consumir conteúdo linearmente, o **PromptFix Academy** força o estudante a interagir com informações complexas através de formatos rigorosos, garantindo que o conhecimento seja não apenas compreendido, mas ativamente fixado.

A aplicação se baseia em dois pilares principais:

### 1. **Prompts de Roteiro Estruturado (Formato Markdown)**

Organiza fluxos de estudo complexos, requisitos de certificação ou caminhos de aprendizado em etapas claras, com foco e prioridade definidos.

### 2. **Prompts de Avaliação Estruturada (Formato JSON)**

Gera questões de múltipla escolha de alto nível, com uma justificativa detalhada inclusa na própria estrutura JSON, permitindo revisão imediata e aprofundada.

---

## ✨ Recursos Principais

| Recurso | Descrição | Benefício para o Usuário |
| :--- | :--- | :--- |
| **Quiz Generator** | Cria questões avançadas de múltipla escolha seguindo a estrutura rígida de um array JSON (`pergunta`, `justificativa`, `respostas`). | **Fixação Científica:** Força a revisão ativa e fornece a justificativa no ponto de falha. |
| **Roteiro de Ação** | Transforma metas de estudo (como certificações ou projetos) em fluxos de trabalho visuais e priorizados em Markdown. | **Clareza e Caminho:** Elimina a confusão sobre 'o que estudar em seguida', focando em etapas e prioridades. |
| **Metadados de Contexto** | Usa tags `` para categorizar e filtrar o tipo de prompt. | **Organização:** Facilita a busca e a organização do seu acervo de prompts de estudo. |
| **Nível de Dificuldade** | Permite solicitar conteúdo em diferentes níveis (Básico, Intermediário, **Avançado**), garantindo o desafio adequado. | **Progressão:** Adapta o estudo ao seu nível atual, garantindo que o aprendizado seja sempre relevante. |

---

## ⚙️ Como Usar (Fluxo de Trabalho)

1.  **Defina o Assunto e o Nível:** Exemplo: Assunto: `GCP`, Nível: `Avançado`.
2.  **Defina a Estrutura de Saída:** Escolha se você precisa de um **Roteiro em Markdown** ou um **Quiz em JSON**.
3.  **Gere o Prompt:** Use o gerador de prompts para criar o conteúdo estruturado.
4.  **Estude e Fixe:** Interaja com o material gerado, utilizando a estrutura rigorosa para uma revisão ativa.

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