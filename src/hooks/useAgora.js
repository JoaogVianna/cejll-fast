import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// Devolve a hora atual e atualiza a cada 30 segundos.
// Para TESTAR, abra a página com ?agora=2027-05-20T10:30:00-03:00 (simula essa hora).
export function useAgora() {
  const [params] = useSearchParams()
  const [agora, setAgora] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setAgora(new Date()), 30000)
    return () => clearInterval(id)
  }, [])

  const simulado = params.get('agora')
  if (simulado) {
    const data = new Date(simulado)
    if (!Number.isNaN(data.getTime())) return data
  }
  return agora
}
