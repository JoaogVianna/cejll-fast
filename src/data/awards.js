// Dados do CEJLL Awards.
//
// Os INDICADOS dos prêmios de projetos não ficam aqui: eles vêm de projetos.js.
// Basta o projeto ter  awards: ['Melhor Jogo do Ano']  (o texto precisa ser igual ao "nome" abaixo).
//
// tipo: 'campeonato' = campeão de uma competição (não tem lista de indicados)

export const CATEGORIAS_EXEMPLO = false

export const CATEGORIAS_AWARDS = [
  { id: 'campeao-fnf', nome: 'Campeão de Friday Night Funkin', tipo: 'campeonato', descricao: 'Vencedor do torneio de Friday Night Funkin.' },
  { id: 'campeao-street-fighter', nome: 'Campeão de Street Fighter', tipo: 'campeonato', descricao: 'Vencedor do campeonato de Street Fighter.' },
  { id: 'campeao-tabuada-fighters', nome: 'Campeão de Tabuada Fighters', tipo: 'campeonato', descricao: 'Vencedor do campeonato de Tabuada Fighters.' },
  { id: 'campeao-pes-2017', nome: 'Campeão de PES 2017', tipo: 'campeonato', descricao: 'Vencedor do campeonato de PES 2017.' },
  { id: 'vencedor-nave-drip', nome: 'Vencedor do Nave Drip', tipo: 'campeonato', descricao: 'Participante que conquistar a vitória na batalha de rap.' },
  {
    id: 'melhor-jogo-do-ano',
    nome: 'Melhor Jogo do Ano',
    descricao:
      'Prêmio destinado ao jogo que mais se destacou entre os projetos apresentados no CEJLL Fest, considerando aspectos como criatividade, jogabilidade, desenvolvimento e experiência proporcionada aos visitantes.',
  },
  {
    id: 'melhor-projeto-artistico-do-ano',
    nome: 'Melhor Projeto Artístico do Ano',
    descricao:
      'Prêmio destinado ao projeto artístico que mais se destacou no evento e no ano, considerando criatividade, originalidade, execução e expressão artística.',
  },
]

// Votação pelo Google Forms.
// status: null -> calcula pelas datas (sem datas = "em breve")
//         'aberta' | 'embreve' | 'encerrada' -> força o estado
// abre / fecha: datas ISO, ex.: '2026-11-26T09:00:00-03:00'
export const VOTACAO = {
  url: null, // cole aqui o link do formulário de votação
  abre: null,
  fecha: null,
  status: null,
}

// Resultado: só aparece na página quando publicado for true (depois da cerimônia).
// categoria: id de uma categoria. projetoId: id do projeto vencedor.
export const RESULTADO = {
  publicado: false,
  vencedores: [],
  fotos: 3,
}
