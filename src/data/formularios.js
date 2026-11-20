// Os 3 formulários da página Participe.
// status: null -> calcula sozinho pelas datas (sem datas = "em breve")
//         'aberta' | 'embreve' | 'encerrada' -> força o estado manualmente
// abre / fecha: datas ISO, ex.: '2027-03-01T08:00:00-03:00'
// variante: 'navy' | 'pink' | 'gray' (cor do ícone e da faixa do cartão)
export const FORMULARIOS = [
  {
    id: 'comite',
    titulo: 'Comitê de organização',
    quem: 'Para estudantes interessados em ajudar a planejar, organizar e realizar o evento.',
    detalhes: [
      'Cada turma poderá indicar um representante para participar do comitê. Será dada preferência aos estudantes do 2º e 3º ano, podendo haver participação de estudantes do 1º ano caso necessário.',
    ],
    botao: 'Inscrever-se',
    url: 'https://forms.gle/gzjQHoLVnMQRDXa67',
    variante: 'navy',
    abre: null,
    fecha: null,
    status: null,
  },
  {
    id: 'projetos',
    titulo: 'Projetos, exposições e apresentações',
    quem: 'Para estudantes que desejam apresentar seus trabalhos e produções durante o evento.',
    detalhes: [
      'Podem ser inscritos jogos, aplicativos, sites, desenhos, fotografias, peças teatrais, protótipos, pesquisas e outras produções.',
    ],
    botao: 'Inscrever meu projeto',
    url: 'https://forms.gle/uiRZ1FrcSVRDgtGCA',
    variante: 'pink',
    abre: null,
    fecha: null,
    status: null,
  },
  {
    id: 'oficinas',
    titulo: 'Atividades e oficinas',
    quem: 'Para estudantes interessados em organizar oficinas, experiências interativas, dinâmicas, competições e outras atividades para os visitantes.',
    detalhes: [
      'A proposta é permitir que os alunos criem experiências nas quais o público possa participar durante o evento.',
    ],
    botao: 'Inscrever atividade',
    url: 'https://forms.gle/jQ8CunTAFctF49ETA',
    variante: 'gray',
    abre: null,
    fecha: null,
    status: null,
  },
]
