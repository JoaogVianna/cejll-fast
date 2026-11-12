// Oficinas e atividades. Horário, local, responsável e categoria vêm da programação:
// o "id" daqui precisa ser igual ao id da atividade em data/programacao.js.
// Aqui ficam só os detalhes extras de cada atividade.
// inscricaoPrevia: true/false. vagas: número, ou null para "aberta a todos".
// inscricaoUrl: link da inscrição da atividade (null enquanto não existir).
import { ATIVIDADES, DIAS } from './programacao'

const DETALHES = [
  {
    id: 'oficina-desenho',
    detalhes:
      'Uma atividade prática de desenho para quem quer desenvolver suas habilidades. Não é preciso ter experiência.',
    materiais: 'Informados pelo responsável.',
    inscricaoPrevia: false,
    vagas: null,
    inscricaoUrl: null,
  },
  {
    id: 'oficina-programacao',
    detalhes:
      'Primeiros passos para criar uma página web do zero, com a ajuda de quem já programa.',
    materiais: 'Informados pelo responsável.',
    inscricaoPrevia: true,
    vagas: 20,
    inscricaoUrl: null,
  },
  {
    id: 'competicao-jogos',
    detalhes: 'Competição entre alunos nos jogos escolhidos pela organização.',
    materiais: 'Nenhum material necessário.',
    inscricaoPrevia: false,
    vagas: null,
    inscricaoUrl: null,
  },
  {
    id: 'palestra-dia2',
    detalhes: 'Uma conversa de abertura do segundo dia do evento, aberta a todos.',
    materiais: 'Nenhum material necessário.',
    inscricaoPrevia: false,
    vagas: null,
    inscricaoUrl: null,
  },
]

// junta os detalhes com os dados da programação (as atividades que não existirem são ignoradas)
export const OFICINAS = DETALHES.flatMap((d) => {
  const atividade = ATIVIDADES.find((a) => a.id === d.id)
  if (!atividade) return []
  const dia = DIAS.find((x) => x.id === atividade.dia)
  return [{ ...atividade, ...d, diaRotulo: dia ? dia.rotulo : '' }]
})
