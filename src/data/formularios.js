// Os 3 formulários da página Participe.
// status: null -> calcula sozinho pelas datas (sem datas = "em breve")
//         'aberta' | 'embreve' | 'encerrada' -> força o estado manualmente
// abre / fecha: datas ISO, ex.: '2027-03-01T08:00:00-03:00'
export const FORMULARIOS = [
  {
    id: 'comite',
    titulo: 'Comitê de organização',
    quem: 'Para quem deseja ajudar a planejar e organizar o evento.',
    itens: [
      'Organização geral',
      'Comunicação com as turmas',
      'Organização dos espaços',
      'Apoio aos participantes',
    ],
    url: 'https://forms.gle/gzjQHoLVnMQRDXa67',
    abre: null,
    fecha: null,
    status: null,
  },
  {
    id: 'projetos',
    titulo: 'Projetos e exposições',
    quem: 'Para quem deseja apresentar um projeto, talento ou produção.',
    itens: [
      'Jogos e aplicativos',
      'Desenhos e pinturas',
      'Música e apresentações',
      'Projetos pessoais e acadêmicos',
    ],
    url: 'https://forms.gle/uiRZ1FrcSVRDgtGCA',
    abre: null,
    fecha: null,
    status: null,
  },
  {
    id: 'oficinas',
    titulo: 'Oficinas e atividades',
    quem: 'Para quem deseja organizar uma atividade para os visitantes.',
    itens: [
      'Oficinas',
      'Competições',
      'Palestras',
      'Dinâmicas e atividades interativas',
    ],
    url: 'https://forms.gle/jQ8CunTAFctF49ETA',
    abre: null,
    fecha: null,
    status: null,
  },
]
