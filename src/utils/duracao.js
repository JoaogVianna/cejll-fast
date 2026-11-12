// Calcula a duração entre dois horários 'HH:MM'. Ex.: ('10:00', '11:30') -> "1h30"
export function duracao(inicio, fim) {
  const [h1, m1] = inicio.split(':').map(Number)
  const [h2, m2] = fim.split(':').map(Number)
  const minutos = h2 * 60 + m2 - (h1 * 60 + m1)
  if (minutos <= 0) return ''

  const horas = Math.floor(minutos / 60)
  const resto = minutos % 60
  if (horas === 0) return `${resto} min`
  return resto ? `${horas}h${String(resto).padStart(2, '0')}` : `${horas}h`
}
