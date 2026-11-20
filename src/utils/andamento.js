// "Em breve" = começa dentro desta quantidade de minutos.
const MINUTOS_PROXIMA = 60

// Diz em que ponto está uma atividade: 'agora', 'embreve', 'encerrada' ou null.
// Os horários do evento são de Brasília (-03:00).
// Sem a data do dia, não dá para saber, então devolve null (nenhum selo).
export function andamento(atividade, dia, agora) {
  if (!dia || !dia.data) return null

  const inicio = new Date(`${dia.data}T${atividade.inicio}:00-03:00`)
  const fim = new Date(`${dia.data}T${atividade.fim}:00-03:00`)

  if (agora >= fim) return 'encerrada'
  if (agora >= inicio) return 'agora'
  if (inicio - agora <= MINUTOS_PROXIMA * 60 * 1000) return 'embreve'
  return null
}
