// Catálogo de projetos. Para adicionar um projeto, copie um bloco e troque os dados.
//
// Só preencha o que já estiver confirmado: o que for null NÃO aparece no site.
//
// id:            vira o endereço da página (/projetos/<id>), sem espaços nem acentos
// categoria:     precisa ser uma das CATEGORIAS_PROJETO
// imagens:       lista de { src, alt }. A 1ª é a imagem principal. Vazia = imagem padrão.
//                As fotos ficam na pasta public/ (ex.: public/projetos/jogo-1.jpg -> src: '/projetos/jogo-1.jpg')
// participantes: lista de nomes (ou null)
// turma:         texto (ou null)
// ferramentas:   lista (ou null)
// links:         lista de { rotulo, url } (pode ficar vazia)
// awards:        categoria do CEJLL Awards em que concorre (ou null)

export const CATEGORIAS_PROJETO = [
  'Jogos',
  'Aplicativos',
  'Sites',
  'Arte e ilustração',
  'Audiovisual',
  'Música',
  'Apresentações',
  'Pesquisas',
  'Outros',
]

export const PROJETOS = [
  {
    id: 'jogo-plataforma',
    nome: 'Jogo de plataforma',
    categoria: 'Jogos',
    resumo: 'Um jogo de pular obstáculos feito pela turma, jogável no navegador.',
    descricao:
      'Aqui entra a descrição detalhada do projeto: como surgiu a ideia, o que foi desenvolvido e qual é a proposta do trabalho.',
    imagens: [
      { src: '/exemplos/exemplo-1.svg', alt: 'Imagem de exemplo do projeto' },
      { src: '/exemplos/exemplo-2.svg', alt: 'Segunda imagem de exemplo do projeto' },
      { src: '/exemplos/exemplo-3.svg', alt: 'Terceira imagem de exemplo do projeto' },
    ],
    participantes: ['Nome do aluno 1', 'Nome do aluno 2'],
    turma: 'Turma a definir',
    ferramentas: ['Ferramenta 1', 'Ferramenta 2'],
    links: [],
    localizacao: null,
    horarios: null,
    awards: 'Melhor jogo',
    exemplo: true,
  },
  {
    id: 'app-estudos',
    nome: 'App de planejamento de estudos',
    categoria: 'Aplicativos',
    resumo: 'Aplicativo que organiza o calendário de provas e trabalhos.',
    descricao:
      'Aqui entra a descrição detalhada do projeto: o problema que ele resolve, as telas principais e quem ajudou no desenvolvimento.',
    imagens: [{ src: '/exemplos/exemplo-2.svg', alt: 'Imagem de exemplo do projeto' }],
    participantes: ['Nome do aluno 1'],
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: null,
    horarios: null,
    awards: 'Melhor aplicativo',
    exemplo: true,
  },
  {
    id: 'site-receitas',
    nome: 'Site de receitas da escola',
    categoria: 'Sites',
    resumo: 'Um site com receitas enviadas por alunos e funcionários.',
    descricao:
      'Aqui entra a descrição detalhada do projeto: como as receitas são organizadas e o que o visitante pode fazer no site.',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: null,
    horarios: null,
    awards: null,
    exemplo: true,
  },
  {
    id: 'serie-ilustracoes',
    nome: 'Série de ilustrações',
    categoria: 'Arte e ilustração',
    resumo: 'Um conjunto de desenhos sobre a rotina escolar.',
    descricao:
      'Aqui entra a descrição detalhada do projeto: as técnicas usadas, a inspiração e a história por trás de cada desenho.',
    imagens: [
      { src: '/exemplos/exemplo-3.svg', alt: 'Imagem de exemplo do projeto' },
      { src: '/exemplos/exemplo-1.svg', alt: 'Segunda imagem de exemplo do projeto' },
    ],
    participantes: ['Nome do aluno 1'],
    turma: 'Turma a definir',
    ferramentas: null,
    links: [],
    localizacao: null,
    horarios: null,
    awards: null,
    exemplo: true,
  },
  {
    id: 'apresentacao-musical',
    nome: 'Apresentação musical',
    categoria: 'Música',
    resumo: 'Uma apresentação ao vivo com músicas autorais e covers.',
    descricao:
      'Aqui entra a descrição detalhada do projeto: o repertório, os integrantes e o horário da apresentação.',
    imagens: [],
    participantes: ['Nome do aluno 1', 'Nome do aluno 2', 'Nome do aluno 3'],
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: null,
    horarios: null,
    awards: 'Melhor apresentação',
    exemplo: true,
  },
  {
    id: 'experimento-solar',
    nome: 'Experimento com energia solar',
    categoria: 'Pesquisas',
    resumo: 'Uma maquete que mostra como a luz do sol vira energia.',
    descricao:
      'Aqui entra a descrição detalhada do projeto: a hipótese, os materiais usados e os resultados do experimento.',
    imagens: [
      { src: '/exemplos/exemplo-1.svg', alt: 'Imagem de exemplo do projeto' },
      { src: '/exemplos/exemplo-2.svg', alt: 'Segunda imagem de exemplo do projeto' },
    ],
    participantes: ['Nome do aluno 1', 'Nome do aluno 2'],
    turma: null,
    ferramentas: ['Ferramenta 1'],
    links: [],
    localizacao: null,
    horarios: null,
    awards: 'Melhor projeto experimental',
    exemplo: true,
  },
]
