// Descobre se um período está 'aberta', 'embreve' ou 'encerrada'.
// Se "status" estiver preenchido, ele manda; senão calcula pelas datas.
export function situacaoDoPeriodo({ status, abre, fecha }) {
  if (status) return status
  if (abre && fecha) {
    const agora = new Date()
    if (agora < new Date(abre)) return 'embreve'
    if (agora <= new Date(fecha)) return 'aberta'
    return 'encerrada'
  }
  return 'embreve'
}
