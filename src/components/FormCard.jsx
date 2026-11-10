import './FormCard.css'

const ROTULOS = {
  aberta: '● Inscrições abertas',
  embreve: '◔ Em breve',
  encerrada: '✕ Encerradas',
}

const formatar = (iso) =>
  new Date(iso).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })

// Descobre em que estado está o formulário
function situacao(f) {
  if (f.status) return f.status
  if (f.abre && f.fecha) {
    const agora = new Date()
    if (agora < new Date(f.abre)) return 'embreve'
    if (agora <= new Date(f.fecha)) return 'aberta'
    return 'encerrada'
  }
  return 'embreve'
}

function periodo(f, estado) {
  if (estado === 'aberta') return f.fecha ? `Inscrições até ${formatar(f.fecha)}.` : 'Inscrições abertas.'
  if (estado === 'encerrada') return f.fecha ? `Encerradas em ${formatar(f.fecha)}.` : 'As inscrições foram encerradas.'
  return f.abre ? `As inscrições abrem em ${formatar(f.abre)}.` : 'Inscrições: período a definir.'
}

export default function FormCard({ formulario: f, numero }) {
  const estado = situacao(f)

  return (
    <article className="card form-card" id={f.id}>
      <span className="form-num" aria-hidden="true">0{numero}</span>
      <h2>{f.titulo}</h2>
      <p>{f.quem}</p>
      <ul>
        {f.itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <span className={`status status-${estado}`}>{ROTULOS[estado]}</span>
      <p className="form-periodo">{periodo(f, estado)}</p>

      {estado === 'aberta' ? (
        <a className="btn" href={f.url} target="_blank" rel="noopener noreferrer">
          Inscrever-se
          <span className="visually-hidden"> em {f.titulo} (abre em nova aba)</span>
        </a>
      ) : (
        <button className="btn" type="button" disabled>
          Inscrições não disponíveis
        </button>
      )}
    </article>
  )
}
