// Mais recentes primeiro. As que ainda não têm data ficam no fim, na ordem em que foram escritas.
export function ordenarNoticias(lista) {
  return [...lista].sort((a, b) => {
    if (a.data && b.data) return b.data.localeCompare(a.data)
    if (a.data) return -1
    if (b.data) return 1
    return 0
  })
}
