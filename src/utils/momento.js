import { DIAS, ATIVIDADES } from '../data/programacao'

// Descobre "que dia do evento e que horas são agora", no horário de Brasília.
// Devolve null se hoje não for nenhum dos dias do evento (ou se os dias não tiverem data).
export function momentoAgora(agora) {
  const partes = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(agora)

  const p = Object.fromEntries(partes.map((x) => [x.type, x.value]))
  const data = `${p.year}-${p.month}-${p.day}`
  const dia = DIAS.find((d) => d.data === data)

  return dia ? { diaId: dia.id, hora: `${p.hour}:${p.minute}` } : null
}

// 'agora', 'proxima' ou 'encerrada' para uma atividade, numa certa hora ('HH:MM').
export function classificar(atividade, hora) {
  if (atividade.inicio <= hora && hora < atividade.fim) return 'agora'
  if (atividade.inicio > hora) return 'proxima'
  return 'encerrada'
}

// Atividades de um espaço em um dia, em ordem de horário.
export function atividadesDoEspaco(espaco, diaId) {
  return ATIVIDADES.filter((a) => a.local === espaco.nome && a.dia === diaId).sort((a, b) =>
    a.inicio.localeCompare(b.inicio),
  )
}

// Estado do espaço: 'agora' (tem atividade em andamento), 'proxima' (ainda vai ter) ou 'sem'.
export function statusDoEspaco(espaco, momento) {
  const estados = atividadesDoEspaco(espaco, momento.diaId).map((a) =>
    classificar(a, momento.hora),
  )
  if (estados.includes('agora')) return 'agora'
  if (estados.includes('proxima')) return 'proxima'
  return 'sem'
}
