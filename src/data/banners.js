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
    botao: { rotulo: 'Participe', para: '/participe' },
    imagem: null,
  },
  {
    id: 'inscricoes',
    variante: 'b',
    titulo: 'Inscrições em breve',
    frase: 'Comitê, projetos e oficinas: veja como participar.',
    data: null,
    botao: { rotulo: 'Ver como participar', para: '/participe' },
    imagem: null,
  },
  {
    id: 'projetos',
    variante: 'c',
    titulo: 'Conheça os projetos',
    frase: 'Veja o que os alunos estão criando.',
    data: null,
    botao: { rotulo: 'Ver projetos', para: '/projetos' },
    imagem: null,
  },
]
