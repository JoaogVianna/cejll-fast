// Notícias e avisos.
//
// id:        vira o endereço (/noticias/<id>), sem espaços nem acentos
// categoria: precisa ser uma das CATEGORIAS_NOTICIA
// data:      'AAAA-MM-DD' ou null
// destaque:  true = aparece na área de destaques (no máximo 2 aparecem)
// imagem:    { src, alt } ou null (fotos ficam em public/noticias/)
// texto:     lista de blocos. Texto simples = parágrafo; { subtitulo: '...' } = subtítulo

export const CATEGORIAS_NOTICIA = [
  'Avisos',
  'Inscrições',
  'Programação',
  'Bastidores',
  'CEJLL Awards',
]

export const NOTICIAS = [
  {
    id: 'inscricoes-prorrogadas',
    titulo: 'Inscrições prorrogadas até 24/11',
    categoria: 'Inscrições',
    data: '2026-11-21',
    destaque: true,
    resumo: 'Ainda dá tempo de participar! Os formulários ficam abertos até o dia 24/11.',
    imagem: null,
    imagens: [],
    texto: [
      'As inscrições do CEJLL Fest foram prorrogadas. Ainda dá tempo de participar e fazer parte do evento!',
      { subtitulo: 'Confira os formulários' },
      'Comitê de organização: para ajudar a organizar o evento.',
      'Projetos e exposições: para apresentar ou expor seus projetos e talentos.',
      'Atividades e oficinas: para propor oficinas, competições e outras atividades.',
      'Os links de cada formulário estão na página Participe.',
      { subtitulo: 'Avaliação das propostas' },
      'As propostas serão avaliadas pela organização e pela direção. O envio do formulário não garante a participação.',
      { subtitulo: 'Dúvidas?' },
      'Mande uma mensagem para o WhatsApp (21) 98542-3938.',
    ],
    creditos: 'Organização do CEJLL Fest',
  },
  {
    id: 'faltam-poucos-dias',
    titulo: 'Faltam poucos dias para o CEJLL Fest!',
    categoria: 'Avisos',
    data: '2026-11-21',
    destaque: true,
    resumo: 'O evento acontece no dia 26/11. Acompanhe as novidades por aqui.',
    imagem: null,
    imagens: [],
    texto: [
      'O CEJLL Fest acontece no dia 26 de novembro e a contagem regressiva já começou.',
      'Acompanhe a Programação, o Mapa e as Oficinas para planejar a sua visita. As novidades e os ajustes de horário serão publicados aqui, na página de Notícias.',
    ],
    creditos: 'Organização do CEJLL Fest',
  },
  {
    id: 'como-participar',
    titulo: 'Como participar do CEJLL Fest',
    categoria: 'Inscrições',
    data: '2026-11-20',
    destaque: false,
    resumo: 'Há três formas de fazer parte: comitê, projetos e atividades.',
    imagem: null,
    imagens: [],
    texto: [
      'Você pode participar do CEJLL Fest de três maneiras: ajudando na organização, apresentando um projeto ou talento, ou propondo uma oficina ou atividade para os visitantes.',
      'Escolha a opção que combina com você na página Participe e preencha o formulário correspondente.',
    ],
    creditos: 'Organização do CEJLL Fest',
  },
  {
    id: 'conheca-o-cejll-awards',
    titulo: 'Conheça o CEJLL Awards',
    categoria: 'CEJLL Awards',
    data: '2026-11-20',
    destaque: false,
    resumo: 'Veja as categorias e acompanhe os indicados na página do Awards.',
    imagem: null,
    imagens: [],
    texto: [
      'O CEJLL Awards reconhece os destaques do evento em diferentes categorias.',
      'Na página CEJLL Awards você confere as categorias, os indicados e, quando a votação estiver aberta, o link para votar.',
    ],
    creditos: 'Organização do CEJLL Fest',
  },
]
