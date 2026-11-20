// Programação do evento. Para adicionar uma atividade, copie um bloco.
//
// Só preencha o que já estiver confirmado: o que for null NÃO aparece no site.
//
// dia:         precisa ser um dos ids de DIAS
// inicio/fim:  'HH:MM'
// categoria:   precisa ser uma das CATEGORIAS_PROG
// local:       nome do espaço (vira link para o Mapa) ou null
// responsavel: texto ou null

export const DIAS = [
  // data: '2027-05-20' quando definida. Sem data, os selos "Acontecendo agora" etc. não aparecem.
  { id: 'dia1', rotulo: 'Dia 1', data: null },
  { id: 'dia2', rotulo: 'Dia 2', data: null },
]

export const CATEGORIAS_PROG = [
  'Oficinas',
  'Apresentações',
  'Atividades interativas',
  'Competições',
  'Palestras',
  'Música',
  'Outras',
]

export const ATIVIDADES = [
  {
    id: 'abertura-estandes',
    dia: 'dia1',
    nome: 'Abertura dos estandes',
    inicio: '09:00',
    fim: '09:30',
    local: 'Entrada principal',
    responsavel: 'Comitê de organização',
    categoria: 'Outras',
    descricao: 'Abertura oficial do evento e início das visitas aos estandes.',
    exemplo: true,
  },
  {
    id: 'oficina-desenho',
    dia: 'dia1',
    nome: 'Oficina de desenho',
    inicio: '10:00',
    fim: '11:00',
    local: 'Sala de artes',
    responsavel: null,
    categoria: 'Oficinas',
    descricao:
      'Atividade prática de desenho para alunos interessados em desenvolver suas habilidades. Materiais informados pelo responsável.',
    exemplo: true,
  },
  {
    id: 'competicao-jogos',
    dia: 'dia1',
    nome: 'Competição de jogos',
    inicio: '11:00',
    fim: '12:00',
    local: 'Laboratório de informática',
    responsavel: null,
    categoria: 'Competições',
    descricao: 'Competição entre alunos nos jogos escolhidos pela organização.',
    exemplo: true,
  },
  {
    id: 'apresentacao-musical-prog',
    dia: 'dia1',
    nome: 'Apresentação musical',
    inicio: '13:00',
    fim: '14:00',
    local: 'Pátio',
    responsavel: null,
    categoria: 'Música',
    descricao: 'Apresentação ao vivo de alunos e bandas da escola.',
    exemplo: true,
  },
  {
    id: 'palestra-dia2',
    dia: 'dia2',
    nome: 'Palestra de abertura do dia',
    inicio: '09:30',
    fim: '10:30',
    local: 'Auditório',
    responsavel: null,
    categoria: 'Palestras',
    descricao: 'Conversa de abertura do segundo dia do evento.',
    exemplo: true,
  },
  {
    id: 'oficina-programacao',
    dia: 'dia2',
    nome: 'Oficina de programação',
    inicio: '11:00',
    fim: '12:00',
    local: 'Laboratório de informática',
    responsavel: null,
    categoria: 'Oficinas',
    descricao: 'Primeiros passos para criar uma página web do zero.',
    exemplo: true,
  },
  {
    id: 'apresentacao-projetos',
    dia: 'dia2',
    nome: 'Apresentações dos projetos',
    inicio: '13:30',
    fim: '14:30',
    local: 'Pátio',
    responsavel: null,
    categoria: 'Apresentações',
    descricao: 'Cada equipe apresenta seu projeto para o público.',
    exemplo: true,
  },
  {
    id: 'cerimonia-awards',
    dia: 'dia2',
    nome: 'Cerimônia do CEJLL Awards',
    inicio: '15:00',
    fim: '16:00',
    local: 'Pátio',
    responsavel: 'Comitê de organização',
    categoria: 'Outras',
    descricao: 'Anúncio dos vencedores de cada categoria do CEJLL Awards.',
    exemplo: true,
  },
]
