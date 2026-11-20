// Textos da página Sobre. Quando os textos oficiais chegarem, troque aqui.
// provisorio: true mostra a etiqueta "Texto provisório" na seção; apague a linha quando o texto for o definitivo.

export const SOBRE = {
  intro:
    'Conheça a proposta do CEJLL Fest, o que você vai encontrar por aqui e quem faz o evento acontecer.',

  oQueE: {
    provisorio: true,
    paragrafos: [
      'O CEJLL Fest é um espaço de exposição e valorização dos trabalhos, talentos, ideias e experiências desenvolvidos pelos estudantes do CEJLL, reunindo diferentes áreas e formas de expressão.',
      'Aqui entra o texto sobre como surgiu a ideia do evento.',
    ],
  },

  proposito: [
    { icone: '✎', titulo: 'Criatividade', texto: 'Valorizar a criatividade e a produção dos estudantes.' },
    { icone: '◉', titulo: 'Visibilidade', texto: 'Dar visibilidade aos projetos e trabalhos desenvolvidos na escola.' },
    { icone: '⇄', titulo: 'Troca', texto: 'Incentivar a troca de conhecimentos e experiências.' },
    { icone: '⌂', titulo: 'Comunidade', texto: 'Aproximar estudantes, professores e comunidade escolar.' },
    { icone: '✦', titulo: 'Descobertas', texto: 'Criar um espaço para compartilhar ideias e descobrir novos interesses.' },
  ],

  experiencias: [
    {
      id: 'projetos',
      titulo: 'Projetos',
      texto: 'Exposição de jogos, aplicativos, sites, trabalhos artísticos, pesquisas e outras produções dos estudantes.',
      para: '/projetos',
      rotulo: 'Ver projetos',
      variante: 'navy',
    },
    {
      id: 'oficinas',
      titulo: 'Oficinas e atividades',
      texto: 'Experiências práticas, oficinas e atividades interativas preparadas pelos alunos.',
      para: '/oficinas',
      rotulo: 'Ver oficinas',
      variante: 'pink',
    },
    {
      id: 'apresentacoes',
      titulo: 'Apresentações',
      texto: 'Demonstrações, apresentações de trabalhos, produções culturais e outras atividades realizadas durante o evento.',
      para: '/programacao',
      rotulo: 'Ver programação',
      variante: 'gray',
    },
  ],

  quem: {
    provisorio: true,
    paragrafos: [
      'O CEJLL Fest é construído coletivamente, com a participação de estudantes, professores e demais colaboradores da escola.',
      'Aqui entra o texto sobre a organização, e abaixo as fotos dos bastidores.',
    ],
    fotos: 3, // quantidade de espaços reservados para fotos
  },

  // Esta seção só aparece quando existir pelo menos um valor CONFIRMADO.
  // Deixe valor: null enquanto o dado não estiver confirmado.
  numeros: [
    { id: 'projetos', rotulo: 'Projetos apresentados', valor: null },
    { id: 'estudantes', rotulo: 'Estudantes participantes', valor: null },
    { id: 'atividades', rotulo: 'Oficinas e atividades', valor: null },
    { id: 'turmas', rotulo: 'Turmas envolvidas', valor: null },
  ],
}
