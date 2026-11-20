// Transforma '2027-05-20' em '20 de maio de 2027'. Sem data, avisa que vem em breve.
export function formatarData(data) {
  if (!data) return 'Data em breve'
  return new Date(data + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
