// Formata uma data 'AAAA-MM-DD' para "12 de novembro de 2026".
// Sem data definida, mostra "Data em breve".
export function formatarData(data) {
  if (!data) return 'Data em breve'
  return new Date(data + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
