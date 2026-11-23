// Catálogo de projetos. Para adicionar um projeto, copie um bloco e troque os dados.
//
// Só preencha o que já estiver confirmado: o que for null NÃO aparece no site.
//
// id:            vira o endereço da página (/projetos/<id>), sem espaços nem acentos
// categoria:     precisa ser uma das CATEGORIAS_PROJETO
// imagens:       lista de { src, alt }. A 1ª é a imagem principal. Vazia = imagem padrão.
//                As fotos ficam na pasta public/ (ex.: public/projetos/shimmer-1.jpg -> src: '/projetos/shimmer-1.jpg')
// participantes: lista de nomes (ou null)
// turma:         texto (ou null)
// ferramentas:   lista (ou null)
// links:         lista de { rotulo, url } (pode ficar vazia)
// awards:        lista de categorias do CEJLL Awards em que concorre (ou null)

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
    id: 'shimmer',
    nome: 'Shimmer',
    categoria: 'Jogos',
    resumo: 'Conheça Shimmer, um jogo desenvolvido por estudantes do CEJLL!',
    descricao:
      'Durante o evento, você poderá experimentar o jogo, conhecer um pouco de seu desenvolvimento e participar de desafios especiais. Venha jogar, descobrir suas mecânicas e testar suas habilidades!',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Sala 21',
    horarios: '09:30 às 12:00, com retomada das exposições à tarde',
    awards: [
      'Melhor Jogo do Ano',
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'pulga-clicker-legacy',
    nome: 'Pulga Clicker Legacy',
    categoria: 'Jogos',
    resumo: 'Prepare-se para clicar!',
    descricao:
      'Pulga Clicker Legacy é um jogo do gênero clicker que estará disponível para experimentação durante o CEJLL Fest. Conheça o projeto, descubra sua proposta e veja até onde você consegue chegar!',
    imagens: [],
    participantes: [
      'Cauã Peverari',
    ],
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Sala 21',
    horarios: '09:30 às 12:00, com retomada das exposições à tarde',
    awards: [
      'Melhor Jogo do Ano',
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'tabuada-fighters',
    nome: 'Tabuada Fighters',
    categoria: 'Jogos',
    resumo: 'Aprender matemática também pode ser uma luta!',
    descricao:
      'Tabuada Fighters transforma operações matemáticas em uma experiência de jogo competitiva e divertida. Venha conhecer o projeto, testar seus conhecimentos e desafiar outros estudantes no campeonato!',
    imagens: [],
    participantes: [
      'Prometheu Ramos Nascimento',
    ],
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Sala 22',
    horarios: 'Exposição das 09:30 às 11:00; campeonato das 11:00 às 11:30',
    awards: [
      'Melhor Jogo do Ano',
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'as-malevolas-terras-de-skotos',
    nome: 'As Malévolas Terras de Skotos',
    categoria: 'Jogos',
    resumo: 'Explore um mundo em caos em As Malévolas Terras de Skotos, um jogo inspirado no gênero soulslike e desenvolvido em pixel art por estudantes do CEJLL.',
    descricao:
      'Enfrente desafios, descubra os perigos desse universo e conheça os personagens e criaturas que fazem parte dessa aventura!',
    imagens: [],
    participantes: [
      'Samuel Pereira',
    ],
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Sala 22',
    horarios: '09:30 às 12:00, com retomada das exposições à tarde',
    awards: [
      'Melhor Jogo do Ano',
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'jogo-de-oficina-2-projeto-1',
    nome: 'Jogo de Oficina 2 — Projeto 1',
    categoria: 'Jogos',
    resumo: 'Conheça um dos projetos apresentados na atividade Jogo de Oficina 2!',
    descricao:
      'Uma oportunidade de descobrir o que os estudantes desenvolveram e conhecer diferentes ideias e experiências criadas durante as oficinas.',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Sala 22',
    horarios: '09:30 às 12:00',
    awards: [
      'Melhor Jogo do Ano',
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'jogo-de-oficina-2-projeto-2',
    nome: 'Jogo de Oficina 2 — Projeto 2',
    categoria: 'Jogos',
    resumo: 'Conheça um dos projetos apresentados na atividade Jogo de Oficina 2!',
    descricao:
      'Uma oportunidade de descobrir o que os estudantes desenvolveram e conhecer diferentes ideias e experiências criadas durante as oficinas.',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Sala 22',
    horarios: '09:30 às 12:00',
    awards: [
      'Melhor Jogo do Ano',
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'jogo-de-oficina-2-projeto-3',
    nome: 'Jogo de Oficina 2 — Projeto 3',
    categoria: 'Jogos',
    resumo: 'Conheça um dos projetos apresentados na atividade Jogo de Oficina 2!',
    descricao:
      'Uma oportunidade de descobrir o que os estudantes desenvolveram e conhecer diferentes ideias e experiências criadas durante as oficinas.',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Sala 21',
    horarios: '09:30 às 12:00',
    awards: [
      'Melhor Jogo do Ano',
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'jogo-de-oficina-2-projeto-4',
    nome: 'Jogo de Oficina 2 — Projeto 4',
    categoria: 'Jogos',
    resumo: 'Conheça um dos projetos apresentados na atividade Jogo de Oficina 2!',
    descricao:
      'Uma oportunidade de descobrir o que os estudantes desenvolveram e conhecer diferentes ideias e experiências criadas durante as oficinas.',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Sala 21',
    horarios: '09:30 às 12:00',
    awards: [
      'Melhor Jogo do Ano',
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'lc-personalizados',
    nome: 'LC Personalizados',
    categoria: 'Arte e ilustração',
    resumo: 'Encontre produtos personalizados inspirados em diferentes universos da cultura pop!',
    descricao:
      'O estande reúne itens como bottons, pôsteres, adesivos, photocards e outros produtos relacionados a filmes, séries, jogos, animes e música. Uma oportunidade para conhecer trabalhos criativos e encontrar algo que combine com você!',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Convivência (mesa do meio)',
    horarios: '09:30 às 12:00, com retomada das exposições à tarde',
    awards: null,
    exemplo: false,
  },
  {
    id: 'biscuits-e-artes-de-mar',
    nome: 'Biscuit\'s e artes de Mar',
    categoria: 'Arte e ilustração',
    resumo: 'Conheça uma coleção de trabalhos artesanais feitos à mão!',
    descricao:
      'A exposição reúne peças de biscuit, como colares, chaveiros, presilhas e bonecos, além de adesivos e outras criações. Um espaço para valorizar a criatividade, o artesanato e a produção independente.',
    imagens: [],
    participantes: [
      'Lara Martins',
    ],
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Convivência (mesa do meio)',
    horarios: '09:30 às 12:00, com retomada das exposições à tarde',
    awards: null,
    exemplo: false,
  },
  {
    id: 'escape-from-rezende',
    nome: 'Escape from Rezende',
    categoria: 'Outros',
    resumo: 'Entre no universo de Escape from Rezende, um projeto literário autoral acompanhado de ilustrações produzidas pelo próprio estudante.',
    descricao:
      'Visite a exposição, conheça a obra e descubra como literatura e arte visual podem se complementar na construção de uma narrativa.',
    imagens: [],
    participantes: [
      'Kaique Lima',
    ],
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Germinal',
    horarios: '09:30 às 12:00, com retomada das exposições à tarde',
    awards: [
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'roguenave',
    nome: 'RogueNAVE',
    categoria: 'Arte e ilustração',
    resumo: 'RogueNAVE é um jogo independente em desenvolvimento, ambientado no universo de uma escola brasileira.',
    descricao:
      'Com personagens próprios, identidade visual em pixel art e uma narrativa que mistura aventura e referências ao cotidiano escolar, o projeto apresenta um universo em construção. Nesta edição do CEJLL Fest, a exposição será dedicada às artes, aos personagens e ao storytelling do jogo, mostrando um pouco do processo criativo por trás dessa produção.',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Germinal',
    horarios: '09:30 às 12:00, com retomada das exposições à tarde',
    awards: [
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'nao-original-wav',
    nome: 'nao_original.wav',
    categoria: 'Audiovisual',
    resumo: 'Cinco composições musicais autorais se encontram com a ilustração digital em um projeto audiovisual que reúne música, arte e edição de vídeo.',
    descricao:
      'Cada faixa possui uma identidade visual própria, apresentada junto de informações sobre sua produção. Venha conhecer as composições e explorar as diferentes atmosferas criadas pelo projeto!',
    imagens: [],
    participantes: [
      'Lucca',
      'Cataldo',
    ],
    turma: '3003',
    ferramentas: null,
    links: [],
    localizacao: 'Germinal',
    horarios: '09:30 às 12:00, com retomada das exposições à tarde',
    awards: [
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'mixtape-do-nave',
    nome: 'Mixtape do NAVE',
    categoria: 'Música',
    resumo: 'A trilha sonora do CEJLL Fest também pode ter a sua participação!',
    descricao:
      'Na Mixtape do NAVE, os estudantes poderão sugerir músicas para compor uma playlist colaborativa que será reproduzida durante o evento. Compartilhe suas músicas favoritas e ajude a construir a atmosfera sonora da feira!',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Entrada do 2º andar',
    horarios: 'Durante o evento',
    awards: null,
    exemplo: false,
  },
  {
    id: 'show-dos-navegantes',
    nome: 'Show dos Navegantes',
    categoria: 'Música',
    resumo: 'Prepare-se para curtir uma apresentação musical ao vivo com a banda Navegantes!',
    descricao:
      'Reunindo estudantes e muita energia, o grupo sobe ao palco para apresentar sua interpretação de Chopis Centis, dos Mamonas Assassinas. Uma apresentação para começar o CEJLL Fest com música!',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Frente do auditório',
    horarios: '09:10 às 09:30',
    awards: [
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'apresentacao-de-danca',
    nome: 'Apresentação de dança',
    categoria: 'Apresentações',
    resumo: 'A dança também tem espaço no CEJLL Fest!',
    descricao:
      'A apresentação reúne coreografias preparadas pelos estudantes, trazendo movimento, expressão e criatividade ao palco. Depois da apresentação, o público também poderá participar e se juntar à diversão!',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Auditório',
    horarios: '09:30 às 09:45',
    awards: [
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
  {
    id: 'o-bem-amado',
    nome: 'O Bem-Amado',
    categoria: 'Apresentações',
    resumo: 'O teatro ganha espaço no CEJLL Fest com uma apresentação inspirada em O Bem-Amado, obra de Dias Gomes.',
    descricao:
      'A peça traz ao palco uma adaptação teatral de uma das obras marcantes do dramaturgo brasileiro, convidando o público a conhecer sua narrativa por meio da interpretação dos estudantes.',
    imagens: [],
    participantes: null,
    turma: null,
    ferramentas: null,
    links: [],
    localizacao: 'Auditório',
    horarios: '09:45 às 10:35',
    awards: [
      'Melhor Projeto Artístico do Ano',
    ],
    exemplo: false,
  },
]
