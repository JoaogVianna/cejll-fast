// Funções usadas pela votação do Awards.

// Formata uma data ISO como "20 de maio"
export const formatar = (iso) =>
  new Date(iso).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })

// Descobre em que estado está algo que abre e fecha em datas:
// 'aberta', 'embreve' ou 'encerrada'. Se "status" estiver preenchido, ele manda.
export function situacao(f) {
  if (f.status) return f.status
  if (f.abre && f.fecha) {
    const agora = new Date()
    if (agora < new Date(f.abre)) return 'embreve'
    if (agora <= new Date(f.fecha)) return 'aberta'
    return 'encerrada'
  }
  return 'embreve'
}
