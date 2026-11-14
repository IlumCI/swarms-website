import type { Faq } from "@/lib/faq"

// FAQ for /research: the research program and its active projects.
export const researchFaqs: Faq[] = [
  {
    question: "What does Swarms research focus on?",
    answer:
      "Three lines of work. Agent simulations use populations of agents to model institutions, markets and group decisions. Multi-Agent Post Training (MAPT) trains models after pretraining for work inside a swarm: handing off, following a shared plan and judging another agent's output. Multi-agent harness engineering builds and measures the runtime around the models: workflow languages, graph execution engines, routing and gateways. AgentRearrange, GraphWorkflow and RouteHub come from that third line.",
  },
  {
    question: "Where can I read the papers?",
    answer:
      "Every project tile on this page opens the paper PDF in its public GitHub repository. The full list of publications, including ModelGrid, the Agent Orchestration Protocol and SenatorAssembly, is at swarms.ai/research-papers.",
  },
  {
    question: "Is the code behind the papers open source?",
    answer:
      "Yes. AgentRearrange and GraphWorkflow ship inside the Swarms Python framework (pip install swarms), and RouteHub is its own open-source package. The paper repositories are released under Apache 2.0, and ModelGrid under MIT, so you can use the systems and the benchmark code in your own work.",
  },
  {
    question: "Can I reproduce the benchmarks?",
    answer:
      "The AgentRearrange and GraphWorkflow repositories include a benchmarks folder with the scripts behind every number in the paper, plus examples of each workflow shape. The RouteHub report documents its setup and the LiteLLM version it was measured against. If a result does not reproduce for you, open an issue on the repository.",
  },
  {
    question: "How do I cite a paper?",
    answer:
      "Each repository README has a BibTeX entry under Citation. Copy it as is, or cite the paper by its title, the authors listed on the first page and the repository URL.",
  },
  {
    question: "How can I work with the research team?",
    answer:
      "Open roles are listed at swarms.ai/hiring. For collaborations, replication reports or questions about a paper, join the Discord or open an issue or pull request on the paper's repository. We read both.",
  },
]

// FAQ for /research-papers: the publication list itself.
export const researchPapersFaqs: Faq[] = [
  {
    question: "Which papers has Swarms published?",
    answer:
      "Five so far. AgentRearrange, a workflow language where a whole multi-agent workflow is one string. GraphWorkflow, a compile-once graph execution engine for agent DAGs. ModelGrid, a quantitative framework for dynamic memory allocation when several models share a deployment. The Agent Orchestration Protocol (AOP), a distributed framework for large-scale multi-agent collaboration. SenatorAssembly, a multi-agent simulation of US Senate deliberation.",
  },
  {
    question: "Where is the PDF for each paper?",
    answer:
      "Each card opens the paper's GitHub repository. The PDF sits in the repository root (paper.pdf, main.pdf or aop.pdf), and the README summarizes the results. AgentRearrange also publishes its LaTeX source.",
  },
  {
    question: "Do the papers come with code?",
    answer:
      "AgentRearrange and GraphWorkflow are built into the Swarms Python framework, and their repositories include the benchmark scripts and examples used in the papers. ModelGrid ships a reference implementation alongside the PDF. AOP and SenatorAssembly are paper repositories; the orchestration protocol itself lives in the Swarms framework.",
  },
  {
    question: "What license are the papers and code under?",
    answer:
      "Apache 2.0 for AgentRearrange, GraphWorkflow, AOP and SenatorAssembly, and MIT for ModelGrid. You can read, redistribute and build on them, including in commercial work, with attribution.",
  },
  {
    question: "How do I cite a paper?",
    answer:
      "Every repository README has a BibTeX entry under Citation. Use it as written so citations resolve to the same record.",
  },
  {
    question: "How is this page different from the research page?",
    answer:
      "This page is the complete list of publications. The research page at swarms.ai/research describes the program: the active projects, the three focus areas and how to get involved.",
  },
  {
    question: "How do I hear about new papers?",
    answer:
      "New papers are announced on the Swarms blog, on X at @swarms_corp and in the Discord. The newsletter form at the bottom of this page sends the same announcements by email.",
  },
]
