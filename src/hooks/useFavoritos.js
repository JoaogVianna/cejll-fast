import { useEffect, useState } from 'react'

const CHAVE = 'cejll-favoritos'

function ler() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE)) ?? []
  } catch {
    return []
  }
}

// Um "hook" próprio: guarda a lista de favoritos e salva no navegador.
export function useFavoritos() {
  const [favoritos, setFavoritos] = useState(ler)

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(favoritos))
    } catch {
      // se o navegador bloquear o armazenamento, os favoritos só valem nesta visita
    }
  }, [favoritos])

  const alternar = (id) =>
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((x) => x !== id) : [...atual, id],
    )

  return { favoritos, alternar }
}
