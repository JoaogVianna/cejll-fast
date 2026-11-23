// Banners do carrossel da Home. Para adicionar um banner, copie um bloco.
// variante: 'a', 'b' ou 'c' (cores do fundo; só a 'a' tem a faixa rosa na diagonal).
// data: texto opcional embaixo da frase (ex.: '26 de novembro').
// botao: { rotulo, para } ou null para não mostrar botão.
// imagem: caminho de uma foto na pasta public (ex.: '/banners/palco.jpg') ou null.
//         Com imagem, o texto continua legível porque o fundo escurece.
export const BANNERS = [
  {
    id: 'abertura',
    variante: 'a',
    titulo: 'CEJLL Fest',
    frase: 'Evento feito de alunos para alunos',
    data: '26 de novembro',
    botao: { rotulo: 'Ver programação', para: '/programacao' },
    imagem: null,
  },
  {
    id: 'inscricoes',
    variante: 'b',
    titulo: 'Inscrições prorrogadas!',
    frase: 'Ainda dá tempo de participar: comitê, projetos e atividades até 24/11.',
    data: null,
    botao: { rotulo: 'Quero participar', para: '/participe' },
    imagem: null,
  },
  {
    id: 'programacao',
    variante: 'c',
    titulo: 'Das 9h às 16h',
    frase: 'Jogos, campeonatos, apresentações, oficinas e muito mais em um dia só.',
    data: null,
    botao: { rotulo: 'Ver o mapa', para: '/mapa' },
    imagem: null,
  },
  {
    id: 'awards',
    variante: 'b',
    titulo: 'CEJLL Awards',
    frase: 'Campeões dos torneios, melhor jogo e melhor projeto artístico do ano.',
    data: null,
    botao: { rotulo: 'Conhecer o Awards', para: '/awards' },
    imagem: null,
  },
]
