// Oficinas e atividades. Para adicionar uma, copie um bloco.
//
// Só preencha o que já estiver confirmado: o que for null NÃO aparece no site.
//
// categoria:      precisa ser uma das CATEGORIAS_OFICINA
// livre:          true = atividade que pode ser visitada durante boa parte do evento
// programacaoId:  id da atividade em programacao.js (de onde vêm o dia e o horário)
// duracao:        texto, ex.: '1 h' (ou null)
// local:          texto (ou null)
// responsaveis:   lista de nomes (ou null)
// inscricao:      'previa' | 'nao' | null
// vagas:          'limitadas' | 'abertas' | null
// comoFunciona:   lista de parágrafos (o que é preciso e o que se vai experimentar)

export const CATEGORIAS_OFICINA = [
  'Oficinas',
  'Atividades interativas',
  'Jogos',
  'Apresentações',
  'Outras',
]

export const OFICINAS = [
  {
    id: 'oficina-de-desenho',
    nome: 'Oficina de desenho',
    categoria: 'Oficinas',
    resumo: 'Atividade prática para quem quer desenvolver suas habilidades com o lápis.',
    descricao:
      'Atividade prática de desenho para alunos interessados em desenvolver suas habilidades. Aqui entra a descrição completa da oficina.',
    comoFunciona: [
      'Aqui entra uma explicação de como a atividade funciona.',
      'Aqui entra o que o participante precisa levar e o que vai aprender.',
    ],
    livre: false,
    programacaoId: 'oficina-desenho',
    duracao: '1 h',
    local: null,
    responsaveis: null,
    inscricao: 'previa',
    vagas: 'limitadas',
    exemplo: true,
  },
  {
    id: 'oficina-de-programacao',
    nome: 'Oficina de programação',
    categoria: 'Oficinas',
    resumo: 'Primeiros passos para criar uma página web do zero.',
    descricao:
      'Os participantes montam uma página simples com HTML e CSS. Aqui entra a descrição completa da oficina.',
    comoFunciona: ['Aqui entra uma explicação de como a atividade funciona.'],
    livre: false,
    programacaoId: 'oficina-programacao',
    duracao: '1 h',
    local: null,
    responsaveis: null,
    inscricao: 'previa',
    vagas: 'limitadas',
    exemplo: true,
  },
  {
    id: 'cabine-de-fotos',
    nome: 'Cabine de fotos',
    categoria: 'Atividades interativas',
    resumo: 'Um cantinho cenográfico para tirar fotos com os amigos.',
    descricao: 'Aqui entra a descrição completa da atividade.',
    comoFunciona: ['Aqui entra uma explicação de como a atividade funciona.'],
    livre: true,
    programacaoId: null,
    duracao: null,
    local: 'Pátio',
    responsaveis: null,
    inscricao: 'nao',
    vagas: 'abertas',
    exemplo: true,
  },
  {
    id: 'torneio-de-jogos',
    nome: 'Torneio de jogos',
    categoria: 'Jogos',
    resumo: 'Desafios rápidos entre estudantes, com rodadas ao longo do dia.',
    descricao: 'Aqui entra a descrição completa do torneio e das regras.',
    comoFunciona: ['Aqui entra uma explicação de como o torneio funciona.'],
    livre: false,
    programacaoId: 'competicao-jogos',
    duracao: null,
    local: null,
    responsaveis: null,
    inscricao: null,
    vagas: null,
    exemplo: true,
  },
  {
    id: 'mostra-de-teatro',
    nome: 'Mostra de teatro',
    categoria: 'Apresentações',
    resumo: 'Cenas curtas apresentadas pelas turmas.',
    descricao: 'Aqui entra a descrição completa da apresentação.',
    comoFunciona: [],
    livre: false,
    programacaoId: null,
    duracao: null,
    local: null,
    responsaveis: null,
    inscricao: null,
    vagas: null,
    exemplo: true,
  },
  {
    id: 'cantinho-da-leitura',
    nome: 'Cantinho da leitura',
    categoria: 'Outras',
    resumo: 'Um espaço tranquilo para folhear livros e trocar indicações.',
    descricao: 'Aqui entra a descrição completa da atividade.',
    comoFunciona: [],
    livre: true,
    programacaoId: null,
    duracao: null,
    local: 'Biblioteca',
    responsaveis: null,
    inscricao: 'nao',
    vagas: 'abertas',
    exemplo: true,
  },
]
