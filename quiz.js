const perguntasOriginais = [
  {
    pergunta: "Qual é a menor unidade de execução dentro de um cluster Kubernetes?",
    justificativa: "Embora o Kubernetes gerencie contêineres, ele não os executa diretamente. Ele os envolve em uma unidade lógica chamada Pod, que pode conter um ou mais contêineres compartilhando rede e armazenamento.",
    respostas: [
      { opcao: "Contêiner Docker", correto: false },
      { opcao: "Pod", correto: true },
      { opcao: "Node", correto: false }
    ]
  },
  {
    pergunta: "Por que o uso de Deployments é preferível em relação à criação manual de Pods?",
    justificativa: "Deployments oferecem recursos de autorrecuperação e atualizações controladas. Se um Pod morre, o Deployment garante que um novo seja criado para manter o número de réplicas definido.",
    respostas: [
      { opcao: "Porque economiza memória RAM", correto: false },
      { opcao: "Pela capacidade de autorrecuperação e escalabilidade", correto: true },
      { opcao: "Porque Deployments não usam YAML", correto: false }
    ]
  },
  {
    pergunta: "Qual componente é responsável por decidir em qual Node um novo Pod deve ser alocado?",
    justificativa: "O Scheduler monitora as requisições de recursos dos novos Pods e a disponibilidade atual de cada Worker Node para encontrar o melhor local de hospedagem.",
    respostas: [
      { opcao: "etcd", correto: false },
      { opcao: "Kube-proxy", correto: false },
      { opcao: "Kube-scheduler", correto: true }
    ]
  },

  {
    pergunta: "Por que o Kubernetes exige um 'Container Runtime' (CRI) em cada Worker Node se ele já é um orquestrador?",
    justificativa: "O Kubernetes é o cérebro, mas ele não possui a engine para executar processos isolados. Ele depende de ferramentas como containerd ou CRI-O para baixar imagens e criar os contêineres reais usando primitivos do Kernel Linux.",
    respostas: [
      { opcao: "Para economizar tráfego de rede", correto: false },
      { opcao: "Porque o K8s não executa contêineres diretamente, ele apenas os coordena", correto: true },
      { opcao: "Para substituir o sistema operacional do nó", correto: false }
    ]
  },
  {
    pergunta: "Qual é a consequência imediata de uma falha de 'Quorum' no cluster etcd?",
    justificativa: "O etcd usa o algoritmo Raft, que exige que a maioria dos nós esteja ativa. Sem quorum, o etcd entra em modo de leitura ou para totalmente, impedindo o API Server de salvar qualquer mudança de estado no cluster.",
    respostas: [
      { opcao: "Os Pods existentes param de funcionar imediatamente", correto: false },
      { opcao: "O cluster torna-se imutável e não aceita novas configurações", correto: true },
      { opcao: "O Kubelet assume o controle do banco de dados", correto: false }
    ]
  },
  {
    pergunta: "Como o Controller Manager garante o 'Estado Desejado' (Desired State) de uma aplicação?",
    justificativa: "Ele executa loops de reconciliação infinitos. Ele lê o estado no etcd, compara com a realidade enviada pelos Kubelets e, se houver diferença (ex: um pod a menos), ele aciona o API Server para corrigir.",
    respostas: [
      { opcao: "Através de agendamento manual feito pelo administrador", correto: false },
      { opcao: "Por meio de loops de controle que comparam o estado real vs desejado", correto: true },
      { opcao: "Deletando todos os nós a cada 24 horas", correto: false }
    ]
  },
  {
    pergunta: "Na primeira metade do vídeo, qual a importância fundamental das Labels e Selectors na arquitetura?",
    justificativa: "Eles são a dependência lógica. O Kubernetes não usa IDs fixos; ele usa etiquetas para que um Deployment 'saiba' quais Pods pertencem a ele, permitindo uma gestão dinâmica e desacoplada.",
    respostas: [
      { opcao: "Servem apenas para organização visual no terminal", correto: false },
      { opcao: "São o mecanismo de vínculo entre objetos de controle e Pods", correto: true },
      { opcao: "Substituem a necessidade de endereços IP no cluster", correto: false }
    ]
  },
  {
    pergunta: "O que o Kube-proxy faz para garantir que um serviço seja acessível dentro do nó?",
    justificativa: "Ele gerencia as regras de rede (usando IPtables ou IPVS) do sistema operacional, criando o mapeamento necessário para que o tráfego chegue aos Pods corretos, mesmo que eles mudem de IP.",
    respostas: [
      { opcao: "Ele baixa a imagem da aplicação", correto: false },
      { opcao: "Ele gerencia as regras de firewall e roteamento interno do nó", correto: true },
      { opcao: "Ele substitui o roteador físico da rede", correto: false }
    ]
  },
  {
    pergunta: "No vídeo, é mencionado que os Pods são 'efêmeros'. O que isso significa para a infraestrutura?",
    justificativa: "Significa que Pods podem morrer e ser substituídos a qualquer momento por novos IDs e IPs. Por isso, dependemos de objetos como Deployments e Services para garantir a estabilidade do acesso.",
    respostas: [
      { opcao: "Que eles duram para sempre se não forem deletados", correto: false },
      { opcao: "Que eles são temporários e podem ser reiniciados em outros nós", correto: true },
      { opcao: "Que eles consomem pouca memória RAM", correto: false }
    ]
  },
  {
    pergunta: "Qual a função do Kube-Scheduler ao detectar um novo Pod aguardando alocação?",
    justificativa: "O Scheduler 'filtra' os nós que atendem aos requisitos (CPU/Memória) e 'pontua' os melhores candidatos para hospedar o Pod, enviando a decisão de volta ao API Server.",
    respostas: [
      { opcao: "Baixar a imagem do contêiner no nó", correto: false },
      { opcao: "Decidir em qual nó o Pod deve ser executado com base em recursos", correto: true },
      { opcao: "Criar o arquivo YAML do Pod", correto: false }
    ]
  },
  {
    pergunta: "Qual é a relação de dependência entre o Kubelet e o API Server?",
    justificativa: "O Kubelet mantém uma conexão aberta (Watch) com o API Server para receber atualizações do que deve rodar no nó e reportar o status atual (Heartbeat) da infraestrutura local.",
    respostas: [
      { opcao: "O Kubelet envia comandos de criação de nós para o API Server", correto: false },
      { opcao: "O Kubelet recebe ordens e reporta a saúde dos pods para o API Server", correto: true },
      { opcao: "Não há relação entre eles", correto: false }
    ]
  },
  {
    pergunta: "O que compõe a 'Tríade de Interfaces' que torna o K8s extensível?",
    justificativa: "O K8s usa interfaces padrão: CRI (Runtime), CNI (Network) e CSI (Storage). Isso permite trocar o Docker por containerd ou um disco local por um disco na nuvem sem mudar os comandos do usuário.",
    respostas: [
      { opcao: "API, CLI e GUI", correto: false },
      { opcao: "CRI, CNI e CSI", correto: true },
      { opcao: "CPU, RAM e DISK", correto: false }
    ]
  },
  {
    pergunta: "Por que o Kubernetes é considerado um orquestrador de 'Estado Declarativo'?",
    justificativa: "Porque o usuário declara 'como o sistema deve estar' (ex: 3 réplicas) e o Kubernetes trabalha autonomamente para manter esse estado, corrigindo falhas automaticamente.",
    respostas: [
      { opcao: "Porque ele exige comandos manuais para cada ação", correto: false },
      { opcao: "Porque ele foca no resultado final desejado e não nos passos manuais", correto: true },
      { opcao: "Porque ele só funciona com aplicações escritas em YAML", correto: false }
    ]
  },{
    "pergunta": "Qual é a menor unidade de execução dentro de um cluster Kubernetes?",
    "justificativa": "O Pod é a menor unidade lógica, podendo conter um ou mais contêineres que compartilham recursos como rede e armazenamento.",
    "respostas": [
      { "opcao": "Contêiner Docker", "correto": false },
      { "opcao": "Pod", "correto": true },
      { "opcao": "Node", "correto": false }
    ]
  },
  {
    "pergunta": "Por que o Deployment é preferível ao uso direto de ReplicaSets ou Pods?",
    "justificativa": "O Deployment abstrai o ReplicaSet e permite realizar atualizações de versão (rollouts) e reversões (rollbacks) de forma automatizada e segura.",
    "respostas": [
      { "opcao": "Porque consome menos memória", "correto": false },
      { "opcao": "Pela facilidade de gestão de ciclo de vida e updates", "correto": true },
      { "opcao": "Porque o Deployment não usa arquivos YAML", "correto": false }
    ]
  },
  {
    "pergunta": "Qual componente do Node é responsável por garantir que os contêineres descritos nos Pods estejam rodando?",
    "justificativa": "O Kubelet é o agente que roda em cada nó e garante que os contêineres estejam saudáveis conforme as especificações enviadas pelo Control Plane.",
    "respostas": [
      { "opcao": "Kube-proxy", "correto": false },
      { "opcao": "kubectl", "correto": false },
      { "opcao": "Kubelet", "correto": true }
    ]
  },{
    "pergunta": "Qual componente do Control Plane é o único que se comunica diretamente com o banco de dados etcd?",
    "justificativa": "O kube-apiserver é o hub central do cluster e o único componente que interage diretamente com o etcd para persistir o estado do sistema. Todos os outros componentes interagem com o etcd através da API.",
    "respostas": [
      { "opcao": "kube-scheduler", "correto": false },
      { "opcao": "kube-controller-manager", "correto": false },
      { "opcao": "kube-apiserver", "correto": true },
      { "opcao": "kubelet", "correto": false }
    ]
  },
  {
    "pergunta": "O que acontece se o processo do kube-scheduler parar em um cluster saudável?",
    "justificativa": "O Scheduler é responsável por atribuir Pods recém-criados aos nós. Se ele parar, os Pods existentes continuam rodando, mas novos Pods ficarão no estado 'Pending' indefinidamente.",
    "respostas": [
      { "opcao": "O cluster reinicia todos os nós", "correto": false },
      { "opcao": "Novos Pods não podem ser agendados em nós", "correto": true },
      { "opcao": "O API Server para de responder", "correto": false },
      { "opcao": "Os Pods existentes são deletados", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é a função do Kubelet em um Worker Node?",
    "justificativa": "O Kubelet é o agente primário que roda em cada nó. Ele garante que os contêineres descritos no PodSpec estejam em execução e saudáveis, reportando o status ao Control Plane.",
    "respostas": [
      { "opcao": "Gerenciar regras de rede e proxy", "correto": false },
      { "opcao": "Armazenar segredos do cluster", "correto": false },
      { "opcao": "Garantir que os contêineres do Pod estejam rodando", "correto": true },
      { "opcao": "Distribuir tráfego entre serviços", "correto": false }
    ]
  },
  {
    "pergunta": "Como o Kubernetes garante que o número de réplicas de um Deployment seja mantido?",
    "justificativa": "O Deployment gerencia um ReplicaSet, e o Controller Manager executa um loop de controle (reconciliação) que compara o estado atual com o desejado, criando ou deletando Pods conforme necessário.",
    "respostas": [
      { "opcao": "Através de scripts de shell manuais", "correto": false },
      { "opcao": "Usando o algoritmo de escalonamento do Kernel Linux", "correto": false },
      { "opcao": "Através de um loop de controle (reconciliation loop)", "correto": true },
      { "opcao": "Configurando o Docker para reiniciar sempre", "correto": false }
    ]
  },
  {
    "pergunta": "Qual objeto do Kubernetes é usado para expor uma aplicação para tráfego externo de forma estável?",
    "justificativa": "O objeto Service fornece um ponto de extremidade estável (IP e DNS) para um conjunto de Pods, lidando com a natureza efêmera dos Pods e distribuindo o tráfego.",
    "respostas": [
      { "opcao": "ConfigMap", "correto": false },
      { "opcao": "Service", "correto": true },
      { "opcao": "IngressController", "correto": false },
      { "opcao": "DaemonSet", "correto": false }
    ]
  },
  {
    "pergunta": "O que define o conceito de 'Pod Sidecar'?",
    "justificativa": "Um sidecar é um contêiner auxiliar que roda no mesmo Pod que o contêiner principal para estender ou melhorar sua funcionalidade (ex: logs, proxy de rede), compartilhando o mesmo lifecycle e rede.",
    "respostas": [
      { "opcao": "Um contêiner que roda em um nó separado", "correto": false },
      { "opcao": "Um contêiner auxiliar rodando no mesmo Pod do principal", "correto": true },
      { "opcao": "Um Pod reserva para failover", "correto": false },
      { "opcao": "Um plugin do kubectl", "correto": false }
    ]
  },
  {
    "pergunta": "Qual interface o Kubernetes utiliza para se comunicar com sistemas de armazenamento externo?",
    "justificativa": "O CSI (Container Storage Interface) é a interface padrão que permite que provedores de armazenamento desenvolvam plugins que funcionem no Kubernetes sem alterar o código principal do K8s.",
    "respostas": [
      { "opcao": "CNI", "correto": false },
      { "opcao": "CRI", "correto": false },
      { "opcao": "CSI", "correto": true },
      { "opcao": "POSIX", "correto": false }
    ]
  },
  {
    "pergunta": "Qual a principal diferença entre um Deployment e um StatefulSet?",
    "justificativa": "O StatefulSet é projetado para aplicações que exigem identificadores estáveis e persistência de dados específica para cada réplica, enquanto Deployments tratam os Pods como intercambiáveis (stateless).",
    "respostas": [
      { "opcao": "O Deployment não suporta réplicas", "correto": false },
      { "opcao": "StatefulSet garante nomes e volumes persistentes por réplica", "correto": true },
      { "opcao": "StatefulSet é apenas para bancos de dados Docker", "correto": false },
      { "opcao": "Deployment é mais rápido que StatefulSet", "correto": false }
    ]
  },
  {
    "pergunta": "Para que serve o componente kube-proxy?",
    "justificativa": "O kube-proxy mantém as regras de rede nos nós. Ele permite a comunicação de rede para os Pods a partir de sessões de rede dentro ou fora do cluster, manipulando IPtables ou IPVS.",
    "respostas": [
      { "opcao": "Monitorar o uso de CPU", "correto": false },
      { "opcao": "Gerenciar o tráfego de rede para os Services", "correto": true },
      { "opcao": "Criptografar o tráfego entre nós", "correto": false },
      { "opcao": "Executar o container runtime", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é a finalidade do campo 'Selector' em um Service?",
    "justificativa": "O Selector é usado pelo Service para identificar o conjunto de Pods aos quais ele deve encaminhar o tráfego, baseando-se nas etiquetas (labels) anexadas aos Pods.",
    "respostas": [
      { "opcao": "Escolher o nó onde o serviço roda", "correto": false },
      { "opcao": "Identificar os Pods que receberão o tráfego", "correto": true },
      { "opcao": "Filtrar mensagens de erro no log", "correto": false },
      { "opcao": "Definir a porta de saída do firewall", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o 'etcd' em um cluster Kubernetes?",
    "justificativa": "O etcd é um armazenamento de chave-valor distribuído, consistente e altamente disponível que serve como a 'fonte da verdade' para todos os dados do cluster Kubernetes.",
    "respostas": [
      { "opcao": "Um sistema de arquivos distribuído", "correto": false },
      { "opcao": "O motor de execução de contêineres", "correto": false },
      { "opcao": "O banco de dados de estado do cluster", "correto": true },
      { "opcao": "Um balanceador de carga", "correto": false }
    ]
  },
  {
    "pergunta": "O que acontece se um Pod exceder o seu 'Limit' de memória definido no manifesto?",
    "justificativa": "Diferente da CPU (que sofre throttling), se um Pod exceder seu limite de memória, ele será terminado pelo sistema (OOMKilled) para proteger a estabilidade do nó.",
    "respostas": [
      { "opcao": "O Kubernetes aumenta o limite automaticamente", "correto": false },
      { "opcao": "O Pod é reiniciado (OOMKilled)", "correto": true },
      { "opcao": "A CPU do Pod é reduzida para compensar", "correto": false },
      { "opcao": "O nó é drenado", "correto": false }
    ]
  },
  {
    "pergunta": "Qual recurso é usado para garantir que uma cópia de um Pod específico rode em todos os nós do cluster?",
    "justificativa": "O DaemonSet garante que todos os nós (ou uma seleção deles) executem uma instância de um Pod, sendo ideal para logs, monitoramento e proxies de rede.",
    "respostas": [
      { "opcao": "ReplicaSet", "correto": false },
      { "opcao": "Deployment", "correto": false },
      { "opcao": "DaemonSet", "correto": true },
      { "opcao": "Job", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o componente 'Cloud Controller Manager'?",
    "justificativa": "Ele integra o Kubernetes com as APIs de provedores de nuvem específicos (AWS, Azure, GCP), permitindo o gerenciamento de Load Balancers, rotas e instâncias de nós na nuvem.",
    "respostas": [
      { "opcao": "Um dashboard para visualizar custos", "correto": false },
      { "opcao": "Um componente que conecta o K8s a APIs de nuvem", "correto": true },
      { "opcao": "Um instalador automático de clusters", "correto": false },
      { "opcao": "O antigo nome do kube-scheduler", "correto": false }
    ]
  },
  {
    "pergunta": "Qual comando kubectl é usado para visualizar os logs de um contêiner específico em um Pod?",
    "justificativa": "O comando 'kubectl logs' é a forma padrão de extrair o stdout/stderr de um contêiner para fins de depuração.",
    "respostas": [
      { "opcao": "kubectl show logs", "correto": false },
      { "opcao": "kubectl get logs", "correto": false },
      { "opcao": "kubectl logs [pod_name]", "correto": true },
      { "opcao": "kubectl describe logs", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o conceito de 'Namespaces' no Kubernetes?",
    "justificativa": "Namespaces fornecem um mecanismo para isolar grupos de recursos dentro de um único cluster físico, facilitando a organização por ambientes (dev, prod) ou times.",
    "respostas": [
      { "opcao": "Uma forma de separar o tráfego de rede fisicamente", "correto": false },
      { "opcao": "Um cluster virtual dentro de um cluster físico", "correto": true },
      { "opcao": "O nome DNS de cada Pod", "correto": false },
      { "opcao": "Uma ferramenta de monitoramento", "correto": false }
    ]
  },
  {
    "pergunta": "Qual objeto deve ser usado para rodar uma tarefa que deve ser executada até a conclusão e depois parar?",
    "justificativa": "O objeto Job cria um ou mais Pods e garante que um número específico deles termine com sucesso antes de finalizar a tarefa.",
    "respostas": [
      { "opcao": "Deployment", "correto": false },
      { "opcao": "DaemonSet", "correto": false },
      { "opcao": "Job", "correto": true },
      { "opcao": "CronJob", "correto": false }
    ]
  },
  {
    "pergunta": "O que faz o 'Horizontal Pod Autoscaler' (HPA)?",
    "justificativa": "O HPA aumenta ou diminui automaticamente o número de réplicas de um Deployment ou ReplicaSet com base na utilização de CPU, memória ou métricas customizadas.",
    "respostas": [
      { "opcao": "Aumenta o tamanho da CPU do nó", "correto": false },
      { "opcao": "Ajusta o número de Pods com base na carga", "correto": true },
      { "opcao": "Reinicia Pods que estão travados", "correto": false },
      { "opcao": "Move Pods entre nós para economizar energia", "correto": false }
    ]
  },
  {
    "pergunta": "O que é um 'Ingress' no contexto do Kubernetes?",
    "justificativa": "O Ingress é um objeto de API que gerencia o acesso externo aos serviços do cluster, geralmente HTTP, fornecendo balanceamento de carga, terminação SSL e roteamento baseado em nomes.",
    "respostas": [
      { "opcao": "O processo de login no cluster", "correto": false },
      { "opcao": "Um serviço de rede do tipo NodePort", "correto": false },
      { "opcao": "Um conjunto de regras para permitir acesso externo aos serviços", "correto": true },
      { "opcao": "Uma ferramenta de segurança para usuários", "correto": false }
    ]
  },
  {
    "pergunta": "Qual a função do Init Container?",
    "justificativa": "Init Containers rodam e completam sua execução antes que os contêineres principais da aplicação iniciem, sendo ideais para tarefas de configuração ou espera de dependências.",
    "respostas": [
      { "opcao": "Monitorar a aplicação principal", "correto": false },
      { "opcao": "Rodar tarefas de preparação antes da aplicação iniciar", "correto": true },
      { "opcao": "Reiniciar o Pod em caso de erro", "correto": false },
      { "opcao": "Lidar com o tráfego de rede inicial", "correto": false }
    ]
  },
  {
    "pergunta": "Qual a finalidade de um 'ConfigMap'?",
    "justificativa": "ConfigMaps permitem desacoplar configurações (arquivos, variáveis) da imagem do contêiner, facilitando a portabilidade da aplicação entre diferentes ambientes.",
    "respostas": [
      { "opcao": "Armazenar senhas e certificados de forma segura", "correto": false },
      { "opcao": "Guardar dados de configuração não sensíveis", "correto": true },
      { "opcao": "Mapear o IP do nó para o Pod", "correto": false },
      { "opcao": "Configurar o kernel do nó", "correto": false }
    ]
  },
  {
    "pergunta": "O que é um 'Secret' e como ele difere de um 'ConfigMap'?",
    "justificativa": "Secrets são usados para dados sensíveis (tokens, senhas) e são armazenados em base64 e protegidos por mecanismos de segurança adicionais no Kubernetes.",
    "respostas": [
      { "opcao": "Secrets são criptografados por padrão em disco em todas as versões", "correto": false },
      { "opcao": "Secrets são para dados sensíveis; ConfigMaps para dados comuns", "correto": true },
      { "opcao": "Secrets só podem ser lidos pelo administrador", "correto": false },
      { "opcao": "ConfigMaps são mais rápidos que Secrets", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o 'Liveness Probe'?",
    "justificativa": "O Liveness Probe é usado pelo Kubernetes para saber se o contêiner ainda está rodando. Se o probe falhar, o Kubernetes mata o contêiner e o reinicia de acordo com a política de restart.",
    "respostas": [
      { "opcao": "Verifica se a aplicação está pronta para receber tráfego", "correto": false },
      { "opcao": "Verifica se a aplicação está 'viva' (rodando)", "correto": true },
      { "opcao": "Mede o tempo de resposta da rede", "correto": false },
      { "opcao": "Verifica se o volume está montado", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é a função do 'Readiness Probe'?",
    "justificativa": "O Readiness Probe indica se a aplicação está pronta para processar requisições. Se falhar, o Service para de enviar tráfego para aquele Pod específico.",
    "respostas": [
      { "opcao": "Reiniciar o Pod se ele travar", "correto": false },
      { "opcao": "Decidir se o Pod deve receber tráfego do Service", "correto": true },
      { "opcao": "Verificar se o disco está cheio", "correto": false },
      { "opcao": "Monitorar a saúde do nó", "correto": false }
    ]
  },
  {
    "pergunta": "O que acontece com os dados em um volume do tipo 'emptyDir' se o Pod for removido do nó?",
    "justificativa": "O volume 'emptyDir' é criado quando o Pod é atribuído ao nó e existe enquanto o Pod rodar ali. Se o Pod for deletado ou removido, os dados no emptyDir são perdidos permanentemente.",
    "respostas": [
      { "opcao": "Os dados são persistidos no storage da nuvem", "correto": false },
      { "opcao": "Os dados são movidos para o novo nó", "correto": false },
      { "opcao": "Os dados são apagados permanentemente", "correto": true },
      { "opcao": "Os dados ficam salvos no cache do Docker", "correto": false }
    ]
  },
  {
    "pergunta": "Para que serve o recurso 'Resource Quotas'?",
    "justificativa": "Resource Quotas permitem que administradores limitem o consumo total de recursos (como CPU, Memória, número de Pods) por Namespace.",
    "respostas": [
      { "opcao": "Limitar a velocidade da internet dos usuários", "correto": false },
      { "opcao": "Restringir o consumo total de recursos em um Namespace", "correto": true },
      { "opcao": "Aumentar a prioridade de um Pod", "correto": false },
      { "opcao": "Definir o preço do cluster", "correto": false }
    ]
  },
  {
    "pergunta": "O que define a política 'RollingUpdate' em um Deployment?",
    "justificativa": "O RollingUpdate substitui gradualmente os Pods antigos por novos, garantindo que a aplicação permaneça disponível durante o processo de atualização.",
    "respostas": [
      { "opcao": "Deleta todos os Pods antes de criar novos", "correto": false },
      { "opcao": "Atualiza os Pods um a um ou em pequenos grupos", "correto": true },
      { "opcao": "Atualiza apenas o sistema operacional do nó", "correto": false },
      { "opcao": "Faz o backup dos dados antes da atualização", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o 'Taint' em um nó Kubernetes?",
    "justificativa": "Um Taint (repulsão) impede que Pods sejam agendados naquele nó, a menos que o Pod possua uma 'Toleration' correspondente.",
    "respostas": [
      { "opcao": "Uma etiqueta para identificar o nó", "correto": false },
      { "opcao": "Um mecanismo para repelir Pods de um nó", "correto": true },
      { "opcao": "Uma forma de aumentar a CPU do nó", "correto": false },
      { "opcao": "Um vírus que afeta o cluster", "correto": false }
    ]
  },
  {
    "pergunta": "Qual a diferença entre um 'PersistentVolume' (PV) e um 'PersistentVolumeClaim' (PVC)?",
    "justificativa": "O PV é o recurso de armazenamento real (o disco), enquanto o PVC é a requisição de um usuário por esse armazenamento.",
    "respostas": [
      { "opcao": "PVC é o hardware e PV é o software", "correto": false },
      { "opcao": "PV é o recurso disponível; PVC é o pedido de uso", "correto": true },
      { "opcao": "PV é apenas para arquivos pequenos", "correto": false },
      { "opcao": "Eles são a mesma coisa com nomes diferentes", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o 'Container Runtime Interface' (CRI)?",
    "justificativa": "O CRI é o plugin de interface que permite ao kubelet usar diferentes motores de contêiner (containerd, CRI-O) sem precisar ser recompilado.",
    "respostas": [
      { "opcao": "Uma interface gráfica para o Docker", "correto": false },
      { "opcao": "Um protocolo de rede para Pods", "correto": false },
      { "opcao": "A interface entre o Kubelet e o motor de contêiner", "correto": true },
      { "opcao": "Um sistema de arquivos de contêiner", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é o objetivo das 'Network Policies'?",
    "justificativa": "Network Policies agem como um firewall para os Pods, controlando o fluxo de tráfego de entrada e saída (Ingress/Egress) entre eles.",
    "respostas": [
      { "opcao": "Aumentar a largura de banda da rede", "correto": false },
      { "opcao": "Controlar o tráfego de rede entre Pods", "correto": true },
      { "opcao": "Configurar os endereços IP dos nós", "correto": false },
      { "opcao": "Monitorar latência de rede", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o 'Kube-Controller-Manager'?",
    "justificativa": "Ele é um daemon que incorpora os loops de controle principais do Kubernetes, como o Node Controller, Job Controller e Endpoints Controller.",
    "respostas": [
      { "opcao": "O driver de vídeo do cluster", "correto": false },
      { "opcao": "O componente que roda os diversos controladores do sistema", "correto": true },
      { "opcao": "A ferramenta de CLI do Kubernetes", "correto": false },
      { "opcao": "O sistema de autenticação de usuários", "correto": false }
    ]
  },
  {
    "pergunta": "O que define um 'Headless Service'?",
    "justificativa": "Um Headless Service (clusterIP: None) não possui um IP virtual; ele permite que o DNS retorne diretamente os IPs dos Pods associados, sendo útil para StatefulSets e descoberta de serviços.",
    "respostas": [
      { "opcao": "Um serviço sem segurança", "correto": false },
      { "opcao": "Um serviço sem IP de cluster, que retorna IPs dos Pods", "correto": true },
      { "opcao": "Um serviço que não tem Pods", "correto": false },
      { "opcao": "Um serviço rodando fora do Kubernetes", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o 'Metric Server'?",
    "justificativa": "O Metrics Server coleta métricas de uso de recursos (CPU/RAM) dos Kubelets e as fornece via API para componentes como o HPA e o comando kubectl top.",
    "respostas": [
      { "opcao": "Um banco de dados de logs", "correto": false },
      { "opcao": "Um agregador de métricas de recursos do cluster", "correto": true },
      { "opcao": "O sistema de billing da nuvem", "correto": false },
      { "opcao": "Uma ferramenta de debug de rede", "correto": false }
    ]
  },
  {
    "pergunta": "Qual a principal vantagem de usar 'Helm' no Kubernetes?",
    "justificativa": "O Helm é o gerenciador de pacotes do Kubernetes. Ele usa 'Charts' para empacotar, configurar e implantar aplicações complexas de forma repetível.",
    "respostas": [
      { "opcao": "Melhorar a performance dos contêineres", "correto": false },
      { "opcao": "Gerenciar pacotes e templates de manifestos K8s", "correto": true },
      { "opcao": "Substituir o uso do kubectl", "correto": false },
      { "opcao": "Criptografar todo o cluster", "correto": false }
    ]
  },
  {
    "pergunta": "O que acontece se um nó entrar em estado 'NotReady' por muito tempo?",
    "justificativa": "Se um nó falhar por um período excedente ao 'pod-eviction-timeout', o Control Plane agenda a remoção dos Pods daquele nó e tenta recriá-los em nós saudáveis.",
    "respostas": [
      { "opcao": "O cluster é desligado", "correto": false },
      { "opcao": "Os Pods são movidos (evictados) para outros nós", "correto": true },
      { "opcao": "O nó é deletado da conta da nuvem", "correto": false },
      { "opcao": "Nada acontece até a intervenção manual", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o 'RBAC' no Kubernetes?",
    "justificativa": "Role-Based Access Control (RBAC) é o método de regular o acesso a recursos do Kubernetes com base nas funções (Roles) atribuídas aos usuários ou serviços.",
    "respostas": [
      { "opcao": "Um tipo de volume persistente", "correto": false },
      { "opcao": "Controle de acesso baseado em funções", "correto": true },
      { "opcao": "Um protocolo de roteamento de rede", "correto": false },
      { "opcao": "O nome do sistema operacional dos nós", "correto": false }
    ]
  },
  {
    "pergunta": "O que é uma 'Service Account'?",
    "justificativa": "Service Accounts fornecem uma identidade para processos que rodam dentro de Pods, permitindo que eles se autentiquem na API do Kubernetes para realizar ações.",
    "respostas": [
      { "opcao": "Uma conta de e-mail para desenvolvedores", "correto": false },
      { "opcao": "Uma identidade para aplicações dentro do cluster", "correto": true },
      { "opcao": "Uma conta de cobrança da nuvem", "correto": false },
      { "opcao": "O login do administrador do cluster", "correto": false }
    ]
  },
  {
    "pergunta": "Para que servem as 'Annotations' em um objeto Kubernetes?",
    "justificativa": "Annotations são usadas para anexar metadados arbitrários não identificadores (como informações de build, links de logs ou configs de ferramentas externas) a objetos.",
    "respostas": [
      { "opcao": "Selecionar Pods para serviços", "correto": false },
      { "opcao": "Armazenar metadados extras não usados para seleção", "correto": true },
      { "opcao": "Definir limites de CPU", "correto": false },
      { "opcao": "Reiniciar contêineres", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o 'Kube-DNS' ou 'CoreDNS'?",
    "justificativa": "É um serviço interno que fornece resolução de nomes DNS para os serviços e Pods dentro do cluster, facilitando a descoberta de serviços por nome.",
    "respostas": [
      { "opcao": "O provedor de internet dos nós", "correto": false },
      { "opcao": "O sistema de resolução de nomes interno do cluster", "correto": true },
      { "opcao": "Um cache de imagens Docker", "correto": false },
      { "opcao": "Uma ferramenta de firewall", "correto": false }
    ]
  },
  {
    "pergunta": "O que faz o comando 'kubectl rollout undo'?",
    "justificativa": "Esse comando reverte a atualização de um Deployment ou StatefulSet para a versão (revisão) anterior em caso de erro na nova versão.",
    "respostas": [
      { "opcao": "Deleta a aplicação", "correto": false },
      { "opcao": "Reverte o Deployment para a versão anterior", "correto": true },
      { "opcao": "Limpa o cache do nó", "correto": false },
      { "opcao": "Pausa o deploy atual", "correto": false }
    ]
  },
  {
    "pergunta": "Qual a finalidade de um 'LimitRange'?",
    "justificativa": "LimitRange define restrições mínimas e máximas de recursos (CPU/RAM) que podem ser solicitadas por cada Pod ou contêiner individualmente em um Namespace.",
    "respostas": [
      { "opcao": "Aumentar a cota total do Namespace", "correto": false },
      { "opcao": "Definir limites padrão e faixas de uso por Pod", "correto": true },
      { "opcao": "Controlar o número de usuários no cluster", "correto": false },
      { "opcao": "Limitar o número de nós", "correto": false }
    ]
  },
  {
    "pergunta": "O que é 'Vertical Pod Autoscaler' (VPA)?",
    "justificativa": "O VPA ajusta automaticamente os 'requests' e 'limits' de recursos (CPU/RAM) de um Pod existente, redimensionando-o verticalmente conforme o uso real.",
    "respostas": [
      { "opcao": "Aumenta o número de réplicas do Pod", "correto": false },
      { "opcao": "Ajusta o tamanho dos recursos do Pod", "correto": true },
      { "opcao": "Move o Pod para um nó maior", "correto": false },
      { "opcao": "Cria novos nós no cluster", "correto": false }
    ]
  },
  {
    "pergunta": "O que é 'Affinity' e 'Anti-affinity' de Pods?",
    "justificativa": "São regras que permitem restringir em quais nós o Pod pode ser agendado com base em labels de outros Pods ou do próprio nó, permitindo co-localização ou dispersão.",
    "respostas": [
      { "opcao": "Regras de firewall entre Pods", "correto": false },
      { "opcao": "Regras para agendamento de Pods baseadas em afinidade", "correto": true },
      { "opcao": "Nomes de provedores de nuvem", "correto": false },
      { "opcao": "Plugins de rede do Kubernetes", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é o comportamento padrão de um Service do tipo 'ClusterIP'?",
    "justificativa": "O ClusterIP expõe o serviço em um IP interno do cluster. O serviço só é acessível de dentro do cluster.",
    "respostas": [
      { "opcao": "Expõe o serviço para a internet", "correto": false },
      { "opcao": "Torna o serviço acessível apenas internamente no cluster", "correto": true },
      { "opcao": "Cria um Load Balancer na nuvem", "correto": false },
      { "opcao": "Gera um nome de domínio público", "correto": false }
    ]
  },
  {
    "pergunta": "Para que serve o 'kubectl proxy'?",
    "justificativa": "Ele cria um proxy local que permite acessar a API do Kubernetes de forma segura a partir do seu localhost, geralmente para usar ferramentas de dashboard ou depuração.",
    "respostas": [
      { "opcao": "Aumentar a velocidade da rede", "correto": false },
      { "opcao": "Criar um túnel seguro para acessar o API Server", "correto": true },
      { "opcao": "Substituir o kube-proxy do nó", "correto": false },
      { "opcao": "Balancear carga entre Pods", "correto": false }
    ]
  },
  {
    "pergunta": "O que é 'Self-healing' no contexto do Kubernetes?",
    "justificativa": "É a capacidade do Kubernetes de monitorar e reiniciar contêineres que falham, substituir Pods quando nós morrem e matar Pods que não respondem ao health check.",
    "respostas": [
      { "opcao": "A capacidade de atualizar o código automaticamente", "correto": false },
      { "opcao": "A capacidade de autorrecuperação do sistema", "correto": true },
      { "opcao": "Um sistema de antivírus para contêineres", "correto": false },
      { "opcao": "Backup automático de dados", "correto": false }
    ]
  },
  {
    "pergunta": "O que define o modo 'Privileged' em um contêiner Kubernetes?",
    "justificativa": "Um contêiner privilegiado tem acesso a quase todos os recursos e dispositivos do host (nó), o que é perigoso para a segurança e deve ser usado apenas em casos especiais.",
    "respostas": [
      { "opcao": "O contêiner pode rodar como root mas isolado", "correto": false },
      { "opcao": "O contêiner tem acesso total aos recursos do host", "correto": true },
      { "opcao": "O contêiner é protegido por senha", "correto": false },
      { "opcao": "O contêiner roda apenas em nós Master", "correto": false }
    ]
  },
  {
    "pergunta": "Qual a função do 'Container Storage Interface' (CSI)?",
    "justificativa": "Padronizar como o Kubernetes se comunica com diferentes sistemas de armazenamento, permitindo que novos drivers sejam criados sem mexer no código core do K8s.",
    "respostas": [
      { "opcao": "Reduzir o tamanho das imagens Docker", "correto": false },
      { "opcao": "Interface padrão para integração de armazenamento", "correto": true },
      { "opcao": "Gerar backups automáticos", "correto": false },
      { "opcao": "Criptografar volumes em repouso", "correto": false }
    ]
  },
  {
    "pergunta": "O que é um 'Custom Resource Definition' (CRD)?",
    "justificativa": "CRDs permitem estender a API do Kubernetes criando novos tipos de objetos personalizados, transformando o K8s em uma plataforma para quase qualquer tipo de automação.",
    "respostas": [
      { "opcao": "Uma forma de configurar o kubectl", "correto": false },
      { "opcao": "Uma extensão da API para criar objetos personalizados", "correto": true },
      { "opcao": "Um arquivo de documentação do cluster", "correto": false },
      { "opcao": "O formato padrão de manifestos YAML", "correto": false }
    ]
  }


];