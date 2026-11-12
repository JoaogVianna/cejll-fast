// Espaços do mapa. O desenho é ilustrativo: quando a planta real estiver pronta,
// ajuste os nomes, as descrições e as posições.
// x, y, w, h: posição e tamanho do retângulo no desenho (o desenho tem 400 x 300).
// rotulo: nome curto que aparece dentro do retângulo.
// tipo: precisa ser um dos TIPOS abaixo.
export const TIPOS = [
  { nome: 'Estandes', classe: 'pink' },
  { nome: 'Oficinas', classe: 'navy' },
  { nome: 'Apresentações', classe: 'gray' },
  { nome: 'Serviços', classe: 'mist' },
]

export const ESPACOS = [
  {
    id: 'palco',
    nome: 'Palco',
    rotulo: 'Palco',
    tipo: 'Apresentações',
    descricao: 'Shows, apresentações dos projetos e a cerimônia do CEJLL Awards.',
    x: 110, y: 16, w: 180, h: 64,
  },
  {
    id: 'auditorio',
    nome: 'Auditório',
    rotulo: 'Auditório',
    tipo: 'Apresentações',
    descricao: 'Palestras e conversas.',
    x: 300, y: 16, w: 80, h: 64,
  },
  {
    id: 'estandes',
    nome: 'Área dos estandes',
    rotulo: 'Estandes',
    tipo: 'Estandes',
    descricao: 'Onde ficam os estandes dos projetos aprovados. A página de cada projeto indica o seu estande.',
    x: 20, y: 96, w: 240, h: 110,
  },
  {
    id: 'salas',
    nome: 'Salas de oficinas',
    rotulo: 'Oficinas',
    tipo: 'Oficinas',
    descricao: 'Salas onde acontecem as oficinas e as atividades práticas.',
    x: 276, y: 96, w: 104, h: 50,
  },
  {
    id: 'laboratorio',
    nome: 'Laboratório',
    rotulo: 'Lab.',
    tipo: 'Oficinas',
    descricao: 'Espaço para as oficinas que usam computadores.',
    x: 276, y: 156, w: 104, h: 50,
  },
  {
    id: 'entrada',
    nome: 'Entrada principal',
    rotulo: 'Entrada',
    tipo: 'Serviços',
    descricao: 'Por aqui os visitantes chegam ao evento.',
    x: 20, y: 222, w: 150, h: 56,
  },
  {
    id: 'informacoes',
    nome: 'Ponto de informações',
    rotulo: 'Informações',
    tipo: 'Serviços',
    descricao: 'Atendimento da organização para tirar dúvidas.',
    x: 186, y: 222, w: 194, h: 56,
  },
]
