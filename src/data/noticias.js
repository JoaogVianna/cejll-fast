// Notícias e avisos. Para publicar uma, copie um bloco e tire o "exemplo: true".
//
// id:        vira o endereço (/noticias/<id>), sem espaços nem acentos
// categoria: precisa ser uma das CATEGORIAS_NOTICIA
// data:      'AAAA-MM-DD' ou null
// destaque:  true = aparece na área de destaques (a organização escolhe; máximo de 2 aparecem)
// imagem:    { src, alt } ou null. As fotos ficam em public/ (ex.: public/noticias/foto.jpg -> '/noticias/foto.jpg')
// imagens:   outras imagens relacionadas (lista de { src, alt }, pode ficar vazia)
// texto:     lista de blocos. Texto simples = parágrafo; { subtitulo: '...' } = subtítulo
// creditos:  texto ou null

export const CATEGORIAS_NOTICIA = [
  'Avisos',
  'Inscrições',
  'Programação',
  'Bastidores',
  'CEJLL Awards',
]

export const NOTICIAS = [
  {
    id: 'abertura-das-inscricoes',
    titulo: 'Abertura das inscrições',
    categoria: 'Inscrições',
    data: null,
    destaque: true,
    resumo: 'Aqui entra o comunicado com a data de abertura dos formulários.',
    imagem: { src: '/exemplos/exemplo-1.svg', alt: 'Imagem de exemplo da notícia' },
    imagens: [
      { src: '/exemplos/exemplo-2.svg', alt: 'Segunda imagem de exemplo da notícia' },
      { src: '/exemplos/exemplo-3.svg', alt: 'Terceira imagem de exemplo da notícia' },
    ],
    texto: [
      'Aqui entra o texto completo do comunicado: quando os formulários abrem, quem pode se inscrever e até quando.',
      { subtitulo: 'Como se inscrever' },
      'Cada formulário pode ter regras próprias. Elas aparecem na página Participe.',
    ],
    creditos: 'Organização do CEJLL Fest',
    exemplo: true,
  },
  {
    id: 'novidades-sobre-o-evento',
    titulo: 'Novidades sobre o evento',
    categoria: 'Avisos',
    data: null,
    destaque: true,
    resumo: 'Aqui entram os avisos e as atividades confirmadas pela organização.',
    imagem: null,
    imagens: [],
    texto: ['Aqui entra o texto completo do aviso, com tudo o que a organização já confirmou.'],
    creditos: null,
    exemplo: true,
  },
  {
    id: 'mudancas-na-programacao',
    titulo: 'Mudanças na programação',
    categoria: 'Programação',
    data: null,
    destaque: false,
    resumo: 'Aqui entram os ajustes de horário e de local das atividades.',
    imagem: null,
    imagens: [],
    texto: [
      'Aqui entra o texto completo com o que mudou: qual atividade, o novo horário e o novo local.',
      'A página Programação sempre mostra a versão mais atualizada.',
    ],
    creditos: null,
    exemplo: true,
  },
  {
    id: 'reuniao-do-comite',
    titulo: 'Reunião do comitê de organização',
    categoria: 'Bastidores',
    data: null,
    destaque: false,
    resumo: 'Aqui entra um resumo do que foi decidido na reunião.',
    imagem: null,
    imagens: [],
    texto: ['Aqui entra o texto completo sobre a reunião e os próximos passos.'],
    creditos: null,
    exemplo: true,
  },
  {
    id: 'estandes-em-preparacao',
    titulo: 'Estandes em preparação',
    categoria: 'Bastidores',
    data: null,
    destaque: false,
    resumo: 'Aqui entra um resumo de como os espaços estão sendo preparados.',
    imagem: null,
    imagens: [],
    texto: ['Aqui entra o texto completo sobre a preparação dos espaços.'],
    creditos: null,
    exemplo: true,
  },
  {
    id: 'oficinas-confirmadas',
    titulo: 'Oficinas confirmadas',
    categoria: 'Programação',
    data: null,
    destaque: false,
    resumo: 'Aqui entra a lista das primeiras oficinas confirmadas.',
    imagem: null,
    imagens: [],
    texto: ['Aqui entra o texto completo com as oficinas e os horários.'],
    creditos: null,
    exemplo: true,
  },
  {
    id: 'votacao-do-awards',
    titulo: 'Como será a votação do CEJLL Awards',
    categoria: 'CEJLL Awards',
    data: null,
    destaque: false,
    resumo: 'Aqui entra o resumo de como e quando a votação acontece.',
    imagem: null,
    imagens: [],
    texto: ['Aqui entra o texto completo sobre a votação do CEJLL Awards.'],
    creditos: null,
    exemplo: true,
  },
  {
    id: 'como-chegar',
    titulo: 'Informações para os visitantes',
    categoria: 'Avisos',
    data: null,
    destaque: false,
    resumo: 'Aqui entram as orientações de entrada e de funcionamento.',
    imagem: null,
    imagens: [],
    texto: ['Aqui entra o texto completo com as orientações para quem vai visitar o evento.'],
    creditos: null,
    exemplo: true,
  },
]
