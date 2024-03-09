import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Sem título",
    description: "Nenhuma descrição disponibilizada",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Sumário",
      info: "Info",
      todo: "Todo",
      tip: "Dica",
      success: "Successo",
      question: "Questão",
      warning: "Aviso",
      failure: "Falha",
      danger: "Perigo",
      bug: "Bug",
      example: "Examploe",
      quote: "Citação",
    },
    backlinks: {
      title: "Ligações de retorno",
      noBacklinksFound: "Sem ligações de retorno",
    },
    themeToggle: {
      lightMode: "Modo claro",
      darkMode: "Modo escuro",
    },
    explorer: {
      title: "Explorador",
    },
    footer: {
      createdWith: "Criado com",
    },
    graph: {
      title: "Vista de gráfico",
    },
    recentNotes: {
      title: "Notas recentes",
      seeRemainingMore: ({ remaining }) => `Ver ${remaining} mais →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude de ${targetSlug}`,
      linkToOriginal: "Ligação ao original",
    },
    search: {
      title: "Pesquisar",
      searchBarPlaceholder: "Algo a pesquisar",
    },
    tableOfContents: {
      title: "Tabela de conteúdo",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} minutos de leitura`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Notas recentes",
      lastFewNotes: ({ count }) => `Últimas ${count} notas`,
    },
    error: {
      title: "Não encontrado",
      notFound: "Esta página é privada ou não existe.",
    },
    folderContent: {
      folder: "Pasta",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item dentro desta pasta." : `${count} items dentro desta pasta.`,
    },
    tagContent: {
      tag: "Etiqueta",
      tagIndex: "Índice de Etiquetas",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item com esta etiqueta." : `${count} items com esta etiqueta.`,
      showingFirst: ({ count }) => `A mostrar as primeiras ${count} etiquetas.`,
      totalTags: ({ count }) => `Encontradas ${count} etiquetas totais.`,
    },
  },
} as const satisfies Translation
