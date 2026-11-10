import { useEffect, useState } from 'react'
import { EVENTO } from '../data/evento'
import './Contagem.css'

const pad = (n) => String(n).padStart(2, '0')

function calcular() {
  const agora = new Date()
  const inicio = EVENTO.inicio ? new Date(EVENTO.inicio) : null
  // se não houver data de fim, considera que o evento dura 1 dia
  const fim = EVENTO.fim
    ? new Date(EVENTO.fim)
    : inicio
      ? new Date(inicio.getTime() + 24 * 3600 * 1000)
      : null

  if (!inicio) return { fase: 'sem-data', d: 0, h: 0, m: 0, s: 0, inicio }
  if (agora > fim) return { fase: 'depois', d: 0, h: 0, m: 0, s: 0, inicio }
  if (agora >= inicio) return { fase: 'durante', d: 0, h: 0, m: 0, s: 0, inicio }

  const diff = Math.floor((inicio - agora) / 1000)
  return {
    fase: 'antes',
    d: Math.floor(diff / 86400),
    h: Math.floor((diff % 86400) / 3600),
    m: Math.floor((diff % 3600) / 60),
    s: diff % 60,
    inicio,
  }
}

export default function Contagem() {
  const [tempo, setTempo] = useState(calcular)

  useEffect(() => {
    const id = setInterval(() => setTempo(calcular()), 1000)
    return () => clearInterval(id) // limpa o relógio quando o componente sai da tela
  }, [])

  const { fase } = tempo
  const mostrarNumeros = fase === 'sem-data' || fase === 'antes'

  let titulo = 'Falta pouco para o CEJLL Fest!'
  let nota = 'A data do evento ainda será confirmada. O contador começa quando ela estiver definida.'

  if (fase === 'antes') {
    const data = tempo.inicio.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    nota = `O evento começa em ${data}.`
  } else if (fase === 'durante') {
    titulo = 'O CEJLL Fest está acontecendo!'
    nota = 'Confira a programação e venha visitar os estandes.'
  } else if (fase === 'depois') {
    titulo = 'Esta edição do CEJLL Fest foi encerrada.'
    nota = 'Obrigado a todos que fizeram parte. Veja as fotos e os resultados em breve.'
  }

  return (
    <section className="section section-mist" aria-label="Contagem regressiva">
      <div className="wrap">
        <div className="countdown">
          <h2>{titulo}</h2>

          {mostrarNumeros && (
            <div className="countdown-grid" role="timer" aria-label="Tempo restante para o evento">
              <div><span className="countdown-num">{pad(tempo.d)}</span><span className="countdown-label">Dias</span></div>
              <div><span className="countdown-num">{pad(tempo.h)}</span><span className="countdown-label">Horas</span></div>
              <div><span className="countdown-num">{pad(tempo.m)}</span><span className="countdown-label">Min</span></div>
              <div><span className="countdown-num">{pad(tempo.s)}</span><span className="countdown-label">Seg</span></div>
            </div>
          )}

          <p className="countdown-note">{nota}</p>
        </div>
      </div>
    </section>
  )
}
