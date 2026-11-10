// Catálogo de projetos. Para adicionar um projeto, copie um bloco e troque os dados.
// id: vira o endereço da página (/projetos/<id>), sem espaços nem acentos.
// awards: nome da categoria do CEJLL Awards, ou null se não estiver concorrendo.
export const PROJETOS = [
  {
    id: 'jogo-plataforma',
    nome: 'Jogo de plataforma',
    categoria: 'Jogos e aplicativos',
    resumo: 'Um jogo de pular obstáculos feito pela turma, jogável no navegador.',
    descricao:
      'Aqui entra a explicação completa do projeto: como ele surgiu, o que foi usado para construí-lo e o que o visitante vai encontrar no estande.',
    participantes: ['Nome do aluno 1', 'Nome do aluno 2'],
    links: [],
    localizacao: 'Estande a definir',
    horarios: 'A definir',
    awards: 'Melhor jogo',
    exemplo: true,
  },
  {
    id: 'app-estudos',
    nome: 'App de planejamento de estudos',
    categoria: 'Jogos e aplicativos',
    resumo: 'Aplicativo que organiza o calendário de provas e trabalhos.',
    descricao:
      'Aqui entra a explicação completa do projeto: o problema que ele resolve, as telas principais e quem ajudou no desenvolvimento.',
    participantes: ['Nome do aluno 1'],
    links: [],
    localizacao: 'Estande a definir',
    horarios: 'A definir',
    awards: 'Melhor aplicativo',
    exemplo: true,
  },
  {
    id: 'site-receitas',
    nome: 'Site de receitas da escola',
    categoria: 'Sites',
    resumo: 'Um site com receitas enviadas por alunos e funcionários.',
    descricao:
      'Aqui entra a explicação completa do projeto: como as receitas são organizadas e o que o visitante pode fazer no site.',
    participantes: ['Nome do aluno 1', 'Nome do aluno 2', 'Nome do aluno 3'],
    links: [],
    localizacao: 'Estande a definir',
    horarios: 'A definir',
    awards: 'Melhor site',
    exemplo: true,
  },
  {
    id: 'serie-ilustracoes',
    nome: 'Série de ilustrações',
    categoria: 'Arte',
    resumo: 'Um conjunto de desenhos sobre a rotina escolar.',
    descricao:
      'Aqui entra a explicação completa do projeto: as técnicas usadas, a inspiração e a história por trás de cada desenho.',
    participantes: ['Nome do aluno 1'],
    links: [],
    localizacao: 'Sala a definir',
    horarios: 'A definir',
    awards: null,
    exemplo: true,
  },
  {
    id: 'apresentacao-musical',
    nome: 'Apresentação musical',
    categoria: 'Música',
    resumo: 'Uma apresentação ao vivo com músicas autorais e covers.',
    descricao:
      'Aqui entra a explicação completa do projeto: o repertório, os integrantes e o horário da apresentação.',
    participantes: ['Nome do aluno 1', 'Nome do aluno 2', 'Nome do aluno 3'],
    links: [],
    localizacao: 'Palco a definir',
    horarios: 'A definir',
    awards: 'Melhor apresentação',
    exemplo: true,
  },
  {
    id: 'experimento-solar',
    nome: 'Experimento com energia solar',
    categoria: 'Ciência',
    resumo: 'Uma maquete que mostra como a luz do sol vira energia.',
    descricao:
      'Aqui entra a explicação completa do projeto: a hipótese, os materiais usados e os resultados do experimento.',
    participantes: ['Nome do aluno 1', 'Nome do aluno 2'],
    links: [],
    localizacao: 'Estande a definir',
    horarios: 'A definir',
    awards: 'Melhor projeto experimental',
    exemplo: true,
  },
]
