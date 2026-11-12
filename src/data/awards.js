// Dados da página CEJLL Awards.
// Os indicados de cada categoria vêm do catálogo: em data/projetos.js, o campo "awards"
// de cada projeto diz em qual categoria ele concorre.

export const APRESENTACAO = [
  'O CEJLL Awards é a competição do CEJLL Fest. Ele reconhece os melhores projetos de cada categoria, escolhidos por votação.',
  'Participar da exposição não significa participar obrigatoriamente da competição: cada projeto concorre só se for indicado a uma categoria.',
]

// Ajuste as categorias conforme os projetos inscritos.
export const CATEGORIAS_AWARDS = [
  'Melhor jogo',
  'Melhor aplicativo',
  'Melhor site',
  'Melhor projeto artístico',
  'Melhor apresentação',
  'Melhor projeto experimental',
  'Melhor projeto em grupo',
  'Prêmio do público',
]

// Votação. url: link do formulário de votação (null enquanto não existir).
// abre / fecha: datas ISO, ex.: '2027-05-20T08:00:00-03:00'.
// status: null calcula pelas datas; ou 'aberta' | 'embreve' | 'encerrada' para forçar.
export const VOTACAO = {
  url: null,
  abre: null,
  fecha: null,
  status: null,
}

// Resultado. Depois da cerimônia, mude publicado para true e preencha os vencedores:
// { categoria: 'Melhor jogo', projetoId: 'jogo-plataforma', mencao: 'Menção honrosa (opcional)' }
export const RESULTADO = {
  publicado: false,
  vencedores: [],
}
