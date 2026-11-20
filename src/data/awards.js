// Dados do CEJLL Awards.
//
// Os INDICADOS não ficam aqui: eles vêm de projetos.js. Basta o projeto ter
//   awards: 'Melhor jogo'
// (o texto precisa ser igual ao "nome" de uma categoria abaixo).

// Enquanto as categorias forem sugestão, deixe true. Quando forem as oficiais, mude para false.
export const CATEGORIAS_EXEMPLO = true

export const CATEGORIAS_AWARDS = [
  { id: 'melhor-jogo', nome: 'Melhor jogo' },
  { id: 'melhor-aplicativo', nome: 'Melhor aplicativo' },
  { id: 'melhor-site', nome: 'Melhor site' },
  { id: 'melhor-projeto-artistico', nome: 'Melhor projeto artístico' },
  { id: 'melhor-apresentacao', nome: 'Melhor apresentação' },
  { id: 'melhor-projeto-experimental', nome: 'Melhor projeto experimental' },
  { id: 'melhor-projeto-em-grupo', nome: 'Melhor projeto em grupo' },
  { id: 'premio-do-publico', nome: 'Prêmio do público' },
]

// Votação pelo Google Forms.
// status: null -> calcula pelas datas (sem datas = "em breve")
//         'aberta' | 'embreve' | 'encerrada' -> força o estado
// abre / fecha: datas ISO, ex.: '2027-05-20T09:00:00-03:00'
export const VOTACAO = {
  url: null, // cole aqui o link do formulário de votação
  abre: null,
  fecha: null,
  status: null,
}

// Resultado: só aparece na página quando publicado for true (depois da cerimônia).
// categoria: id de uma categoria. projetoId: id do projeto vencedor.
// mencoes: lista de ids de projetos com menção honrosa (pode ficar vazia).
export const RESULTADO = {
  publicado: false,
  vencedores: [
    { categoria: 'melhor-jogo', projetoId: 'jogo-plataforma', mencoes: [] },
    { categoria: 'melhor-aplicativo', projetoId: 'app-estudos', mencoes: [] },
  ],
  fotos: 3, // espaços reservados para as fotos da premiação
}
