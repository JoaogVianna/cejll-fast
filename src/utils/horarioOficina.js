import { ATIVIDADES, DIAS } from '../data/programacao'
import { formatarData } from './formatarData'

// Descobre o horário de uma oficina a partir da Programação.
// Devolve null quando a oficina ainda não tem horário definido.
export function horarioDaOficina(oficina) {
  if (oficina.livre) return { livre: true }

  const atividade = ATIVIDADES.find((a) => a.id === oficina.programacaoId)
  if (!atividade) return null

  const dia = DIAS.find((d) => d.id === atividade.dia)
  return {
    livre: false,
    dia: dia ? dia.rotulo + (dia.data ? ` · ${formatarData(dia.data)}` : '') : null,
    inicio: atividade.inicio,
    fim: atividade.fim,
  }
}
